/* Offline model and application cache. No inference is performed here. */
const BUILD = '512596459788';
const SHELL_FILES = [".nojekyll","art/approved-v3/animals.png","art/approved-v3/bedroom.png","art/approved-v3/body.png","art/approved-v3/classroom.png","art/approved-v3/family.png","art/approved-v3/fruit.png","art/approved-v3/house.png","art/approved-v3/numbers.png","art/approved-v3/park.png","art/approved-v3/toys.png","assets/index-BN63hXK8.js","assets/index-C8Y1EmaF.css","audio/edge-jenny/manifest.json","audio/edge-jenny/prompts/apple.mp3","audio/edge-jenny/prompts/behind.mp3","audio/edge-jenny/prompts/beside.mp3","audio/edge-jenny/prompts/big.mp3","audio/edge-jenny/prompts/black.mp3","audio/edge-jenny/prompts/blue.mp3","audio/edge-jenny/prompts/book.mp3","audio/edge-jenny/prompts/car.mp3","audio/edge-jenny/prompts/cat.mp3","audio/edge-jenny/prompts/family.mp3","audio/edge-jenny/prompts/fat.mp3","audio/edge-jenny/prompts/flower.mp3","audio/edge-jenny/prompts/grape.mp3","audio/edge-jenny/prompts/green.mp3","audio/edge-jenny/prompts/in.mp3","audio/edge-jenny/prompts/on.mp3","audio/edge-jenny/prompts/orange.mp3","audio/edge-jenny/prompts/pink.mp3","audio/edge-jenny/prompts/purple.mp3","audio/edge-jenny/prompts/red.mp3","audio/edge-jenny/prompts/room.mp3","audio/edge-jenny/prompts/short.mp3","audio/edge-jenny/prompts/small.mp3","audio/edge-jenny/prompts/star.mp3","audio/edge-jenny/prompts/tall.mp3","audio/edge-jenny/prompts/teddy-bear.mp3","audio/edge-jenny/prompts/thin.mp3","audio/edge-jenny/prompts/tree.mp3","audio/edge-jenny/prompts/under.mp3","audio/edge-jenny/prompts/white.mp3","audio/edge-jenny/prompts/yellow.mp3","audio/edge-jenny/sentences/apple.mp3","audio/edge-jenny/sentences/arm.mp3","audio/edge-jenny/sentences/baby.mp3","audio/edge-jenny/sentences/bag.mp3","audio/edge-jenny/sentences/ball.mp3","audio/edge-jenny/sentences/banana.mp3","audio/edge-jenny/sentences/bed.mp3","audio/edge-jenny/sentences/bedroom.mp3","audio/edge-jenny/sentences/behind.mp3","audio/edge-jenny/sentences/beside.mp3","audio/edge-jenny/sentences/big.mp3","audio/edge-jenny/sentences/bike.mp3","audio/edge-jenny/sentences/bird.mp3","audio/edge-jenny/sentences/black.mp3","audio/edge-jenny/sentences/blue.mp3","audio/edge-jenny/sentences/book.mp3","audio/edge-jenny/sentences/brother.mp3","audio/edge-jenny/sentences/bus.mp3","audio/edge-jenny/sentences/car.mp3","audio/edge-jenny/sentences/cat.mp3","audio/edge-jenny/sentences/chair.mp3","audio/edge-jenny/sentences/cherry.mp3","audio/edge-jenny/sentences/close.mp3","audio/edge-jenny/sentences/dad.mp3","audio/edge-jenny/sentences/dance.mp3","audio/edge-jenny/sentences/desk.mp3","audio/edge-jenny/sentences/dog.mp3","audio/edge-jenny/sentences/doll.mp3","audio/edge-jenny/sentences/door.mp3","audio/edge-jenny/sentences/ear.mp3","audio/edge-jenny/sentences/eight.mp3","audio/edge-jenny/sentences/eleven.mp3","audio/edge-jenny/sentences/eraser.mp3","audio/edge-jenny/sentences/eye.mp3","audio/edge-jenny/sentences/face.mp3","audio/edge-jenny/sentences/family.mp3","audio/edge-jenny/sentences/fat.mp3","audio/edge-jenny/sentences/father.mp3","audio/edge-jenny/sentences/finger.mp3","audio/edge-jenny/sentences/fish.mp3","audio/edge-jenny/sentences/five.mp3","audio/edge-jenny/sentences/flower.mp3","audio/edge-jenny/sentences/foot.mp3","audio/edge-jenny/sentences/four.mp3","audio/edge-jenny/sentences/grandma.mp3","audio/edge-jenny/sentences/grandpa.mp3","audio/edge-jenny/sentences/grape.mp3","audio/edge-jenny/sentences/grass.mp3","audio/edge-jenny/sentences/green.mp3","audio/edge-jenny/sentences/hand.mp3","audio/edge-jenny/sentences/he.mp3","audio/edge-jenny/sentences/head.mp3","audio/edge-jenny/sentences/hill.mp3","audio/edge-jenny/sentences/house.mp3","audio/edge-jenny/sentences/ice-cream.mp3","audio/edge-jenny/sentences/in.mp3","audio/edge-jenny/sentences/jump.mp3","audio/edge-jenny/sentences/kitchen.mp3","audio/edge-jenny/sentences/kiwifruit.mp3","audio/edge-jenny/sentences/leg.mp3","audio/edge-jenny/sentences/living-room.mp3","audio/edge-jenny/sentences/moon.mp3","audio/edge-jenny/sentences/mother.mp3","audio/edge-jenny/sentences/mouth.mp3","audio/edge-jenny/sentences/mum.mp3","audio/edge-jenny/sentences/nine.mp3","audio/edge-jenny/sentences/nose.mp3","audio/edge-jenny/sentences/on.mp3","audio/edge-jenny/sentences/one.mp3","audio/edge-jenny/sentences/open.mp3","audio/edge-jenny/sentences/orange.mp3","audio/edge-jenny/sentences/panda.mp3","audio/edge-jenny/sentences/peach.mp3","audio/edge-jenny/sentences/pear.mp3","audio/edge-jenny/sentences/pencil-case.mp3","audio/edge-jenny/sentences/pencil.mp3","audio/edge-jenny/sentences/pet.mp3","audio/edge-jenny/sentences/pink.mp3","audio/edge-jenny/sentences/play.mp3","audio/edge-jenny/sentences/purple.mp3","audio/edge-jenny/sentences/rabbit.mp3","audio/edge-jenny/sentences/read.mp3","audio/edge-jenny/sentences/red.mp3","audio/edge-jenny/sentences/room.mp3","audio/edge-jenny/sentences/ruler.mp3","audio/edge-jenny/sentences/run.mp3","audio/edge-jenny/sentences/scooter.mp3","audio/edge-jenny/sentences/seven.mp3","audio/edge-jenny/sentences/she.mp3","audio/edge-jenny/sentences/short.mp3","audio/edge-jenny/sentences/sing.mp3","audio/edge-jenny/sentences/sister.mp3","audio/edge-jenny/sentences/sit.mp3","audio/edge-jenny/sentences/six.mp3","audio/edge-jenny/sentences/small.mp3","audio/edge-jenny/sentences/stand.mp3","audio/edge-jenny/sentences/star.mp3","audio/edge-jenny/sentences/sun.mp3","audio/edge-jenny/sentences/swim.mp3","audio/edge-jenny/sentences/tall.mp3","audio/edge-jenny/sentences/teddy-bear.mp3","audio/edge-jenny/sentences/ten.mp3","audio/edge-jenny/sentences/that.mp3","audio/edge-jenny/sentences/thin.mp3","audio/edge-jenny/sentences/this.mp3","audio/edge-jenny/sentences/three.mp3","audio/edge-jenny/sentences/toe.mp3","audio/edge-jenny/sentences/train.mp3","audio/edge-jenny/sentences/tree.mp3","audio/edge-jenny/sentences/twelve.mp3","audio/edge-jenny/sentences/two.mp3","audio/edge-jenny/sentences/under.mp3","audio/edge-jenny/sentences/washroom.mp3","audio/edge-jenny/sentences/watermelon.mp3","audio/edge-jenny/sentences/white.mp3","audio/edge-jenny/sentences/window.mp3","audio/edge-jenny/sentences/write.mp3","audio/edge-jenny/sentences/yellow.mp3","audio/edge-jenny/words/apple.mp3","audio/edge-jenny/words/arm.mp3","audio/edge-jenny/words/baby.mp3","audio/edge-jenny/words/bag.mp3","audio/edge-jenny/words/ball.mp3","audio/edge-jenny/words/banana.mp3","audio/edge-jenny/words/bed.mp3","audio/edge-jenny/words/bedroom.mp3","audio/edge-jenny/words/behind.mp3","audio/edge-jenny/words/beside.mp3","audio/edge-jenny/words/big.mp3","audio/edge-jenny/words/bike.mp3","audio/edge-jenny/words/bird.mp3","audio/edge-jenny/words/black.mp3","audio/edge-jenny/words/blue.mp3","audio/edge-jenny/words/book.mp3","audio/edge-jenny/words/brother.mp3","audio/edge-jenny/words/bus.mp3","audio/edge-jenny/words/car.mp3","audio/edge-jenny/words/cat.mp3","audio/edge-jenny/words/chair.mp3","audio/edge-jenny/words/cherry.mp3","audio/edge-jenny/words/close.mp3","audio/edge-jenny/words/dad.mp3","audio/edge-jenny/words/dance.mp3","audio/edge-jenny/words/desk.mp3","audio/edge-jenny/words/dog.mp3","audio/edge-jenny/words/doll.mp3","audio/edge-jenny/words/door.mp3","audio/edge-jenny/words/ear.mp3","audio/edge-jenny/words/eight.mp3","audio/edge-jenny/words/eleven.mp3","audio/edge-jenny/words/eraser.mp3","audio/edge-jenny/words/eye.mp3","audio/edge-jenny/words/face.mp3","audio/edge-jenny/words/family.mp3","audio/edge-jenny/words/fat.mp3","audio/edge-jenny/words/father.mp3","audio/edge-jenny/words/finger.mp3","audio/edge-jenny/words/fish.mp3","audio/edge-jenny/words/five.mp3","audio/edge-jenny/words/flower.mp3","audio/edge-jenny/words/foot.mp3","audio/edge-jenny/words/four.mp3","audio/edge-jenny/words/grandma.mp3","audio/edge-jenny/words/grandpa.mp3","audio/edge-jenny/words/grape.mp3","audio/edge-jenny/words/grass.mp3","audio/edge-jenny/words/green.mp3","audio/edge-jenny/words/hand.mp3","audio/edge-jenny/words/he.mp3","audio/edge-jenny/words/head.mp3","audio/edge-jenny/words/hill.mp3","audio/edge-jenny/words/house.mp3","audio/edge-jenny/words/ice-cream.mp3","audio/edge-jenny/words/in.mp3","audio/edge-jenny/words/jump.mp3","audio/edge-jenny/words/kitchen.mp3","audio/edge-jenny/words/kiwifruit.mp3","audio/edge-jenny/words/leg.mp3","audio/edge-jenny/words/living-room.mp3","audio/edge-jenny/words/moon.mp3","audio/edge-jenny/words/mother.mp3","audio/edge-jenny/words/mouth.mp3","audio/edge-jenny/words/mum.mp3","audio/edge-jenny/words/nine.mp3","audio/edge-jenny/words/nose.mp3","audio/edge-jenny/words/on.mp3","audio/edge-jenny/words/one.mp3","audio/edge-jenny/words/open.mp3","audio/edge-jenny/words/orange.mp3","audio/edge-jenny/words/panda.mp3","audio/edge-jenny/words/peach.mp3","audio/edge-jenny/words/pear.mp3","audio/edge-jenny/words/pencil-case.mp3","audio/edge-jenny/words/pencil.mp3","audio/edge-jenny/words/pet.mp3","audio/edge-jenny/words/pink.mp3","audio/edge-jenny/words/play.mp3","audio/edge-jenny/words/purple.mp3","audio/edge-jenny/words/rabbit.mp3","audio/edge-jenny/words/read.mp3","audio/edge-jenny/words/red.mp3","audio/edge-jenny/words/room.mp3","audio/edge-jenny/words/ruler.mp3","audio/edge-jenny/words/run.mp3","audio/edge-jenny/words/scooter.mp3","audio/edge-jenny/words/seven.mp3","audio/edge-jenny/words/she.mp3","audio/edge-jenny/words/short.mp3","audio/edge-jenny/words/sing.mp3","audio/edge-jenny/words/sister.mp3","audio/edge-jenny/words/sit.mp3","audio/edge-jenny/words/six.mp3","audio/edge-jenny/words/small.mp3","audio/edge-jenny/words/stand.mp3","audio/edge-jenny/words/star.mp3","audio/edge-jenny/words/sun.mp3","audio/edge-jenny/words/swim.mp3","audio/edge-jenny/words/tall.mp3","audio/edge-jenny/words/teddy-bear.mp3","audio/edge-jenny/words/ten.mp3","audio/edge-jenny/words/that.mp3","audio/edge-jenny/words/thin.mp3","audio/edge-jenny/words/this.mp3","audio/edge-jenny/words/three.mp3","audio/edge-jenny/words/toe.mp3","audio/edge-jenny/words/train.mp3","audio/edge-jenny/words/tree.mp3","audio/edge-jenny/words/twelve.mp3","audio/edge-jenny/words/two.mp3","audio/edge-jenny/words/under.mp3","audio/edge-jenny/words/washroom.mp3","audio/edge-jenny/words/watermelon.mp3","audio/edge-jenny/words/white.mp3","audio/edge-jenny/words/window.mp3","audio/edge-jenny/words/write.mp3","audio/edge-jenny/words/yellow.mp3","audio/manifest.json","audio/prompts/apple.mp3","audio/prompts/behind.mp3","audio/prompts/beside.mp3","audio/prompts/big.mp3","audio/prompts/black.mp3","audio/prompts/blue.mp3","audio/prompts/book.mp3","audio/prompts/car.mp3","audio/prompts/cat.mp3","audio/prompts/family.mp3","audio/prompts/fat.mp3","audio/prompts/flower.mp3","audio/prompts/grape.mp3","audio/prompts/green.mp3","audio/prompts/in.mp3","audio/prompts/on.mp3","audio/prompts/orange.mp3","audio/prompts/pink.mp3","audio/prompts/purple.mp3","audio/prompts/red.mp3","audio/prompts/room.mp3","audio/prompts/short.mp3","audio/prompts/small.mp3","audio/prompts/star.mp3","audio/prompts/tall.mp3","audio/prompts/teddy-bear.mp3","audio/prompts/thin.mp3","audio/prompts/tree.mp3","audio/prompts/under.mp3","audio/prompts/white.mp3","audio/prompts/yellow.mp3","audio/sentences/apple.mp3","audio/sentences/arm.mp3","audio/sentences/baby.mp3","audio/sentences/bag.mp3","audio/sentences/ball.mp3","audio/sentences/banana.mp3","audio/sentences/bed.mp3","audio/sentences/bedroom.mp3","audio/sentences/behind.mp3","audio/sentences/beside.mp3","audio/sentences/big.mp3","audio/sentences/bike.mp3","audio/sentences/bird.mp3","audio/sentences/black.mp3","audio/sentences/blue.mp3","audio/sentences/book.mp3","audio/sentences/brother.mp3","audio/sentences/bus.mp3","audio/sentences/car.mp3","audio/sentences/cat.mp3","audio/sentences/chair.mp3","audio/sentences/cherry.mp3","audio/sentences/close.mp3","audio/sentences/dad.mp3","audio/sentences/dance.mp3","audio/sentences/desk.mp3","audio/sentences/dog.mp3","audio/sentences/doll.mp3","audio/sentences/door.mp3","audio/sentences/ear.mp3","audio/sentences/eight.mp3","audio/sentences/eleven.mp3","audio/sentences/eraser.mp3","audio/sentences/eye.mp3","audio/sentences/face.mp3","audio/sentences/family.mp3","audio/sentences/fat.mp3","audio/sentences/father.mp3","audio/sentences/finger.mp3","audio/sentences/fish.mp3","audio/sentences/five.mp3","audio/sentences/flower.mp3","audio/sentences/foot.mp3","audio/sentences/four.mp3","audio/sentences/grandma.mp3","audio/sentences/grandpa.mp3","audio/sentences/grape.mp3","audio/sentences/grass.mp3","audio/sentences/green.mp3","audio/sentences/hand.mp3","audio/sentences/he.mp3","audio/sentences/head.mp3","audio/sentences/hill.mp3","audio/sentences/house.mp3","audio/sentences/ice-cream.mp3","audio/sentences/in.mp3","audio/sentences/jump.mp3","audio/sentences/kitchen.mp3","audio/sentences/kiwifruit.mp3","audio/sentences/leg.mp3","audio/sentences/living-room.mp3","audio/sentences/moon.mp3","audio/sentences/mother.mp3","audio/sentences/mouth.mp3","audio/sentences/mum.mp3","audio/sentences/nine.mp3","audio/sentences/nose.mp3","audio/sentences/on.mp3","audio/sentences/one.mp3","audio/sentences/open.mp3","audio/sentences/orange.mp3","audio/sentences/panda.mp3","audio/sentences/peach.mp3","audio/sentences/pear.mp3","audio/sentences/pencil-case.mp3","audio/sentences/pencil.mp3","audio/sentences/pet.mp3","audio/sentences/pink.mp3","audio/sentences/play.mp3","audio/sentences/purple.mp3","audio/sentences/rabbit.mp3","audio/sentences/read.mp3","audio/sentences/red.mp3","audio/sentences/room.mp3","audio/sentences/ruler.mp3","audio/sentences/run.mp3","audio/sentences/scooter.mp3","audio/sentences/seven.mp3","audio/sentences/she.mp3","audio/sentences/short.mp3","audio/sentences/sing.mp3","audio/sentences/sister.mp3","audio/sentences/sit.mp3","audio/sentences/six.mp3","audio/sentences/small.mp3","audio/sentences/stand.mp3","audio/sentences/star.mp3","audio/sentences/sun.mp3","audio/sentences/swim.mp3","audio/sentences/tall.mp3","audio/sentences/teddy-bear.mp3","audio/sentences/ten.mp3","audio/sentences/that.mp3","audio/sentences/thin.mp3","audio/sentences/this.mp3","audio/sentences/three.mp3","audio/sentences/toe.mp3","audio/sentences/train.mp3","audio/sentences/tree.mp3","audio/sentences/twelve.mp3","audio/sentences/two.mp3","audio/sentences/under.mp3","audio/sentences/washroom.mp3","audio/sentences/watermelon.mp3","audio/sentences/white.mp3","audio/sentences/window.mp3","audio/sentences/write.mp3","audio/sentences/yellow.mp3","audio/words/apple.mp3","audio/words/arm.mp3","audio/words/baby.mp3","audio/words/bag.mp3","audio/words/ball.mp3","audio/words/banana.mp3","audio/words/bed.mp3","audio/words/bedroom.mp3","audio/words/behind.mp3","audio/words/beside.mp3","audio/words/big.mp3","audio/words/bike.mp3","audio/words/bird.mp3","audio/words/black.mp3","audio/words/blue.mp3","audio/words/book.mp3","audio/words/brother.mp3","audio/words/bus.mp3","audio/words/car.mp3","audio/words/cat.mp3","audio/words/chair.mp3","audio/words/cherry.mp3","audio/words/close.mp3","audio/words/dad.mp3","audio/words/dance.mp3","audio/words/desk.mp3","audio/words/dog.mp3","audio/words/doll.mp3","audio/words/door.mp3","audio/words/ear.mp3","audio/words/eight.mp3","audio/words/eleven.mp3","audio/words/eraser.mp3","audio/words/eye.mp3","audio/words/face.mp3","audio/words/family.mp3","audio/words/fat.mp3","audio/words/father.mp3","audio/words/finger.mp3","audio/words/fish.mp3","audio/words/five.mp3","audio/words/flower.mp3","audio/words/foot.mp3","audio/words/four.mp3","audio/words/grandma.mp3","audio/words/grandpa.mp3","audio/words/grape.mp3","audio/words/grass.mp3","audio/words/green.mp3","audio/words/hand.mp3","audio/words/he.mp3","audio/words/head.mp3","audio/words/hill.mp3","audio/words/house.mp3","audio/words/ice-cream.mp3","audio/words/in.mp3","audio/words/jump.mp3","audio/words/kitchen.mp3","audio/words/kiwifruit.mp3","audio/words/leg.mp3","audio/words/living-room.mp3","audio/words/moon.mp3","audio/words/mother.mp3","audio/words/mouth.mp3","audio/words/mum.mp3","audio/words/nine.mp3","audio/words/nose.mp3","audio/words/on.mp3","audio/words/one.mp3","audio/words/open.mp3","audio/words/orange.mp3","audio/words/panda.mp3","audio/words/peach.mp3","audio/words/pear.mp3","audio/words/pencil-case.mp3","audio/words/pencil.mp3","audio/words/pet.mp3","audio/words/pink.mp3","audio/words/play.mp3","audio/words/purple.mp3","audio/words/rabbit.mp3","audio/words/read.mp3","audio/words/red.mp3","audio/words/room.mp3","audio/words/ruler.mp3","audio/words/run.mp3","audio/words/scooter.mp3","audio/words/seven.mp3","audio/words/she.mp3","audio/words/short.mp3","audio/words/sing.mp3","audio/words/sister.mp3","audio/words/sit.mp3","audio/words/six.mp3","audio/words/small.mp3","audio/words/stand.mp3","audio/words/star.mp3","audio/words/sun.mp3","audio/words/swim.mp3","audio/words/tall.mp3","audio/words/teddy-bear.mp3","audio/words/ten.mp3","audio/words/that.mp3","audio/words/thin.mp3","audio/words/this.mp3","audio/words/three.mp3","audio/words/toe.mp3","audio/words/train.mp3","audio/words/tree.mp3","audio/words/twelve.mp3","audio/words/two.mp3","audio/words/under.mp3","audio/words/washroom.mp3","audio/words/watermelon.mp3","audio/words/white.mp3","audio/words/window.mp3","audio/words/write.mp3","audio/words/yellow.mp3","icon.svg","index.html","licenses/Kokoro-Apache-2.0.txt","licenses/LameJS-LICENSE.txt","licenses/Model-Apache-2.0.txt","licenses/Transformers-Apache-2.0.txt","manifest.webmanifest"];
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
