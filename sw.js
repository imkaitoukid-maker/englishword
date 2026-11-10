/* Offline model and application cache. No inference is performed here. */
const BUILD = '364a99e3c0cf';
const SHELL_FILES = [".nojekyll","art/animals.png","art/body.png","art/colors.png","art/family.png","art/fruit.png","art/music.png","art/night.png","art/numbers.png","art/park.png","art/positions.png","art/study.png","assets/index-CsylJGIZ.css","assets/index-e-cUme6q.js","assets/ort-wasm-simd-threaded.jsep-B0T3yYHD.wasm","assets/tts-worker-BIBgCQ-j.js","icon.svg","index.html","licenses/Kokoro-Apache-2.0.txt","licenses/LameJS-LICENSE.txt","licenses/Model-Apache-2.0.txt","licenses/Transformers-Apache-2.0.txt","manifest.webmanifest","model-assets.json"];
const scope = self.registration.scope;
const namespace = `kokoro-web-${encodeURIComponent(new URL(scope).pathname)}`;
const SHELL_CACHE = `${namespace}-shell-${BUILD}`;
const MODEL_CACHE = `${namespace}-models-v1`;
const SETTINGS_CACHE = `${namespace}-settings-v1`;
const absolute = path => new URL(path, scope).href;
let cacheTask = null;
let manifestPromise;
let cacheOnly = false;

async function manifest() {
  if (!manifestPromise) manifestPromise = (async () => {
    const cached = await caches.match(absolute('model-assets.json'));
    const response = cached || await fetch(absolute('model-assets.json'));
    if (!response.ok) throw new Error('无法读取模型资源清单。');
    return response.json();
  })();
  return manifestPromise;
}

const settingsReady = (async () => {
  const cache = await caches.open(SETTINGS_CACHE);
  const response = await cache.match(absolute('__cache_settings__'));
  cacheOnly = response ? (await response.json()).cacheOnly === true : false;
})();

self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(SHELL_CACHE);
  for (const path of SHELL_FILES) {
    const response = await fetch(new Request(absolute(path), { cache: 'reload' }));
    if (!response.ok) throw new Error(`网页资源下载失败：${path}`);
    await cache.put(absolute(path), response);
  }
  await self.skipWaiting();
})()));

self.addEventListener('activate', event => event.waitUntil((async () => {
  for (const key of await caches.keys()) {
    if (key.startsWith(`${namespace}-shell-`) && key !== SHELL_CACHE) await caches.delete(key);
  }
  await self.clients.claim();
})()));

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== new URL(scope).origin || !url.href.startsWith(scope)) return;
  event.respondWith((async () => {
    await settingsReady;
    const relative = url.pathname.slice(new URL(scope).pathname.length);
    const isModel = relative.startsWith('models/') || relative.startsWith('runtime/');
    const cache = await caches.open(isModel ? MODEL_CACHE : SHELL_CACHE);
    const key = event.request.mode === 'navigate' ? absolute('index.html') : event.request.url;
    const cached = await cache.match(key, { ignoreSearch: true });
    if (cached) return cached;
    if (cacheOnly) {
      if (isModel && relative.endsWith('.json')) {
        const data = await manifest();
        if (!data.shared.some(asset => asset.path === relative)) return new Response('Optional configuration is not part of this model.', { status: 404 });
      }
      return new Response('此资源未缓存，离线模式无法加载。', { status: 503 });
    }
    return fetch(event.request);
  })());
});

async function assetsFor(mode) {
  const data = await manifest();
  const models = mode === 'all' ? Object.values(data.modes).map(item => item.model) : [data.modes[mode]?.model];
  if (models.some(item => !item)) throw new Error('未知模型模式。');
  return [...new Map([...data.shared, ...models].map(item => [item.path, item])).values()];
}

async function hasAsset(cache, asset) {
  const response = await cache.match(absolute(asset.path));
  return !!response && Number(response.headers.get('X-Kokoro-Bytes') || response.headers.get('Content-Length')) === asset.bytes;
}

async function status() {
  await settingsReady;
  const cache = await caches.open(MODEL_CACHE);
  const modes = {};
  for (const mode of Object.keys((await manifest()).modes)) {
    const assets = await assetsFor(mode);
    let cachedBytes = 0;
    const missing = [];
    for (const asset of assets) {
      if (await hasAsset(cache, asset)) cachedBytes += asset.bytes;
      else missing.push(asset.path);
    }
    modes[mode] = { ready: missing.length === 0, cachedBytes, totalBytes: assets.reduce((n, item) => n + item.bytes, 0), missing };
  }
  const shell = await caches.open(SHELL_CACHE);
  let shellReady = true;
  for (const path of SHELL_FILES) if (!(await shell.match(absolute(path)))) { shellReady = false; break; }
  return { modes, cacheOnly, shellReady, build: BUILD };
}

async function cacheAssets(mode, report) {
  await settingsReady;
  if (cacheOnly) throw new Error('当前为仅使用缓存模式，请先关闭离线自检再下载。');
  const assets = await assetsFor(mode);
  const cache = await caches.open(MODEL_CACHE);
  const total = assets.reduce((n, item) => n + item.bytes, 0);
  let loaded = 0;
  for (const asset of assets) {
    if (await hasAsset(cache, asset)) {
      loaded += asset.bytes;
      report({ type: 'progress', loaded, total, file: asset.path, cached: true });
      continue;
    }
    report({ type: 'progress', loaded, total, file: asset.path, cached: false });
    const response = await fetch(new Request(absolute(asset.path), { cache: 'no-store' }));
    if (!response.ok || !response.body) throw new Error(`下载失败：${asset.path}（${response.status}）`);
    const reader = response.body.getReader();
    const baseLoaded = loaded;
    let received = 0;
    let lastReport = 0;
    const stream = new ReadableStream({
      async pull(controller) {
        try {
          const { done, value } = await reader.read();
          if (done) {
            if (received !== asset.bytes) throw new Error(`文件不完整：${asset.path}`);
            controller.close();
            return;
          }
          received += value.byteLength;
          controller.enqueue(value);
          const now = Date.now();
          if (now - lastReport > 180) {
            report({ type: 'progress', loaded: baseLoaded + received, total, file: asset.path });
            lastReport = now;
          }
        } catch (error) { controller.error(error); }
      },
      cancel(reason) { return reader.cancel(reason); },
    });
    const headers = new Headers(response.headers);
    headers.set('X-Kokoro-Bytes', String(asset.bytes));
    headers.set('X-Kokoro-SHA256', asset.sha256);
    await cache.put(absolute(asset.path), new Response(stream, { status: 200, headers }));
    loaded += asset.bytes;
    report({ type: 'progress', loaded, total, file: asset.path });
  }
  return status();
}

self.addEventListener('message', event => {
  const port = event.ports[0];
  if (!port) return;
  const report = message => port.postMessage(message);
  event.waitUntil((async () => {
    try {
      const { action, mode, enabled } = event.data || {};
      let data;
      if (action === 'STATUS') data = await status();
      else if (action === 'CACHE') {
        if (cacheTask) throw new Error('另一个缓存任务正在进行。');
        cacheTask = cacheAssets(mode, report);
        try { data = await cacheTask; } finally { cacheTask = null; }
      } else if (action === 'CACHE_ONLY') {
        await settingsReady;
        cacheOnly = enabled === true;
        const cache = await caches.open(SETTINGS_CACHE);
        await cache.put(absolute('__cache_settings__'), new Response(JSON.stringify({ cacheOnly }), { headers: { 'Content-Type': 'application/json' } }));
        data = await status();
      } else throw new Error('未知缓存操作。');
      report({ type: 'done', data });
    } catch (error) { report({ type: 'error', error: error.message || String(error) }); }
  })());
});
