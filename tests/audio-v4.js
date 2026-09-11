const fs=require('fs');const vm=require('vm');const src=fs.readFileSync('audio-engine-v4.js','utf8');
function assert(x,m){if(!x)throw new Error(m)}
assert(!/AudioContext|webkitAudioContext/.test(src),'Exam Sound v4 must not depend on Web Audio');
let played=0,paused=0,spoken=[];const audios=[],listeners={};let blobId=0;
class MockAudio{
  constructor(src=''){this.src=src;this.volume=1;this.muted=false;this.currentTime=0;this.preload='';this.onended=null;this.playCount=0;audios.push(this)}
  play(){this.playCount++;played++;return Promise.resolve()}
  pause(){paused++}
}
class MockBlob{constructor(parts,opts){this.parts=parts;this.type=opts?.type||'';this.size=1}}
const context={
  console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,setTimeout,clearTimeout,ArrayBuffer,DataView,
  Blob:MockBlob,
  localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)}},
  navigator:{},indexedDB:undefined,
  document:{addEventListener(type,fn){listeners[type]=fn}},
  speechSynthesis:{cancel(){},speak(u){spoken.push(u.text)},getVoices(){return[]}},
  SpeechSynthesisUtterance:function(t){this.text=t;this.lang='';this.volume=1;this.rate=1;this.pitch=1},
  Audio:MockAudio,
  URL:{createObjectURL(){return'blob:'+ (++blobId)},revokeObjectURL(){}},window:null
};
context.window=context;vm.createContext(context);vm.runInContext(src,context,{filename:'audio-engine-v4.js'});
assert(context.TENKA_AUDIO_VERSION==='4.0.0','version');
assert(audios.length===5,'five persistent exam audio elements should be prebuilt');
const base=played;context.TENKA_AUDIO.playEvent('correct');assert(played===base+1,'correct must play one HTMLAudio clip');assert(spoken.length===0,'correct must never speak');
context.TENKA_AUDIO.playEvent('wrong');assert(played===base+2,'wrong must play one HTMLAudio clip');assert(spoken.length===0,'wrong must never speak');
context.TENKA_AUDIO.playEvent('combo');assert(played===base+3,'combo must play one HTMLAudio clip');
context.TENKA_AUDIO.playEvent('timeout');assert(played===base+4,'timeout must play one HTMLAudio clip');
const beforePrime=played;context.TENKA_AUDIO.prime();assert(played===beforePrime+5,'prime must attempt every persistent exam player once');
context.TENKA_AUDIO.playEvent('finish');assert(spoken.length===1,'finish may use celebration speech when pack is absent');
const d=context.TENKA_AUDIO.debug();assert(d.examPlayers.length===5,'debug should expose five exam players');assert(d.eventLog.slice(0,4).every(x=>x.source==='exam-wav'),'answer events must be HTMLAudio WAV');
console.log('TENKA Exam Sound v4 Safari-safe tests passed');