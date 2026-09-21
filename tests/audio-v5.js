const fs=require('fs');const vm=require('vm');const src=fs.readFileSync('audio-engine-v5.js','utf8');
function assert(x,m){if(!x)throw new Error(m)}
const spoken=[];const created=[];let cancelled=0;
function MockAudio(path=''){
  this.src=path;this.preload='';this.volume=1;this.currentTime=0;this.muted=false;this.playCount=0;this.pauseCount=0;
  this.play=()=>{this.playCount++;return Promise.resolve()};this.pause=()=>{this.pauseCount++};created.push(this);
}
const context={console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,setTimeout,clearTimeout,
 localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)}},
 navigator:{},indexedDB:undefined,Audio:MockAudio,Blob:function(){},URL:{createObjectURL(){return'blob:x'},revokeObjectURL(){}},
 document:{addEventListener(){}},speechSynthesis:{cancel(){cancelled++},speak(u){spoken.push(u.text)},getVoices(){return[]}},
 SpeechSynthesisUtterance:function(t){this.text=t;this.lang='';this.volume=1;this.rate=1;this.pitch=1},window:null
};context.window=context;vm.createContext(context);vm.runInContext(src,context,{filename:'audio-engine-v5.js'});
assert(context.TENKA_AUDIO_VERSION==='5.1.0','version');
const d0=context.TENKA_AUDIO.debug();
assert(d0.examFiles.correct.includes('assets/audio/exam/correct.mp3'),'correct MP3 path');
assert(d0.examFiles.wrong.includes('assets/audio/exam/wrong.mp3'),'wrong MP3 path');
assert(d0.examFiles.timeout.includes('assets/audio/exam/timeout.mp3'),'timeout MP3 path');
function plays(path){return created.filter(a=>a.src.includes(path)).reduce((n,a)=>n+a.playCount,0)}
let n=plays('correct.mp3');context.TENKA_AUDIO.playEvent('correct');assert(plays('correct.mp3')===n+1,'correct must play exactly one selected MP3');assert(spoken.length===0,'correct must never speak');
n=plays('wrong.mp3');context.TENKA_AUDIO.playEvent('wrong');assert(plays('wrong.mp3')===n+1,'wrong must play exactly one selected MP3');assert(spoken.length===0,'wrong must never speak');
n=plays('timeout.mp3');context.TENKA_AUDIO.playEvent('timeout');assert(plays('timeout.mp3')===n+1,'timeout must play exactly one BRUH MP3');assert(spoken.length===0,'timeout must never speak');
assert(context.TENKA_AUDIO.playEvent('combo')===false,'combo event must not exist');
assert(!('combo' in d0.examFiles),'combo file must not exist');
assert(!/AudioContext|webkitAudioContext/.test(src),'Exam Sound 5.1 must not use Web Audio');
const d=context.TENKA_AUDIO.debug();assert(d.eventLog.slice(-3).every(x=>x.source==='myinstants-mp3'),'answer events must be logged as MyInstants MP3');
console.log('TENKA Exam Sound 5.1 tests passed');
