const fs=require('fs');const vm=require('vm');const src=fs.readFileSync('audio-engine-v3.js','utf8');
function assert(x,m){if(!x)throw new Error(m)}
const spoken=[];const played=[];let cancelled=0;
class Media{
  constructor(src=''){this.src=src;this.volume=1;this.currentTime=0;this.preload='';}
  setAttribute(){} load(){} pause(){}
  play(){played.push(this.src);return Promise.resolve()}
}
const listeners={};
const context={
  console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,setTimeout,clearTimeout,
  localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)}},
  navigator:{},indexedDB:undefined,
  document:{visibilityState:'visible',addEventListener(n,fn){listeners[n]=fn}},
  speechSynthesis:{cancel(){cancelled++},speak(u){spoken.push(u.text)},getVoices(){return[]}},
  SpeechSynthesisUtterance:function(t){this.text=t;this.lang='';this.volume=1;this.rate=1;this.pitch=1},
  Audio:Media,URL:{createObjectURL(){return'blob:x'},revokeObjectURL(){}},window:null
};
context.window=context;vm.createContext(context);vm.runInContext(src,context,{filename:'audio-engine-v3.js'});
assert(context.TENKA_AUDIO_VERSION==='3.1.0','version');
// Critical Safari contract: answer feedback must work even when AudioContext does not exist.
for(const event of ['correct','wrong','combo','timeout']){
  const before=played.length;context.TENKA_AUDIO.playEvent(event);
  assert(played.length===before+1,event+' must call HTMLMediaElement.play exactly once');
  assert(played.at(-1).includes('/assets/audio/exam/'+event+'.wav'),event+' must use packaged WAV asset');
  assert(spoken.length===0,event+' must never speak');
}
// A real user gesture primes the persistent media element for later timeout/result playback.
const beforePrime=played.length;listeners.pointerdown?.();assert(played.length===beforePrime+1,'pointerdown must prime media');assert(played.at(-1).includes('unlock.wav'),'prime must use silent unlock asset');
// With no installed voice clips, major moments may fall back to speech.
context.TENKA_AUDIO.playEvent('finish');assert(spoken.length===1,'finish may use celebration speech fallback');
// Turning celebration voice off must use an ordinary media SFX, not speech/WebAudio.
context.TENKA_AUDIO.setSetting('celebrationVoice',false);const beforeSpeech=spoken.length,beforeMedia=played.length;
context.TENKA_AUDIO.playEvent('perfect');assert(spoken.length===beforeSpeech,'voice OFF must not speak');assert(played.length===beforeMedia+1,'voice OFF must play result WAV');assert(played.at(-1).includes('perfect.wav'),'perfect fallback asset');
const d=context.TENKA_AUDIO.debug();assert(d.eventLog.slice(0,4).every(x=>x.source==='media-sfx'),'answer events must be logged as media-sfx');
assert(!('AudioContext'in context),'test must not accidentally depend on Web Audio');
console.log('TENKA Safari-safe media audio tests passed');
