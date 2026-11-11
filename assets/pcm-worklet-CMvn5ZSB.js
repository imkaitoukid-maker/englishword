/* AudioWorklet: average-resample the browser's actual sample rate to 16k, PCM16LE mono. */
class ReadingPCMProcessor extends AudioWorkletProcessor{
 constructor(){
  super();this.active=false;this.reset();
  this.port.onmessage=event=>{
   if(event.data.type==='start'){this.reset();this.active=true;}
   if(event.data.type==='stop'){
    if(this.active&&event.data.flush&&this.count){while(this.count<640)this.samples[this.count++]=0;this.emit();}
    this.active=false;this.port.postMessage({type:'flushed'});
   }
  };
 }
 reset(){this.samples=new Int16Array(640);this.count=0;this.sum=0;this.weight=0;this.ratio=sampleRate/16000;}
 emit(){const data=new ArrayBuffer(1280),view=new DataView(data);for(let i=0;i<640;i++)view.setInt16(i*2,this.samples[i],true);this.port.postMessage({type:'pcm',data},[data]);this.count=0;}
 process(inputs){
  if(!this.active||!inputs[0]?.length)return true;
  const channels=inputs[0],length=channels[0].length;
  for(let i=0;i<length;i++){
   let sample=0;for(const channel of channels)sample+=channel[i]||0;sample/=channels.length;
   let available=1;
   while(available>1e-9){
    const take=Math.min(available,this.ratio-this.weight);this.sum+=sample*take;this.weight+=take;available-=take;
    if(this.weight>=this.ratio-1e-9){const value=Math.max(-1,Math.min(1,this.sum/this.weight));this.samples[this.count++]=Math.round(value*(value<0?32768:32767));this.sum=0;this.weight=0;if(this.count===640)this.emit();}
   }
  }
  return true;
 }
}
registerProcessor('reading-pcm',ReadingPCMProcessor);
