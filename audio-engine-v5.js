(()=>{
'use strict';

const VERSION='5.1.0';
const DB_NAME='tenka-audio-v4';
const STORE='clips';
const SETTINGS_KEY='tenka-audio-settings-v5';
const EVENTS=['greeting','correct','wrong','timeout','finish','perfect','click'];
const EXAM_EVENTS=new Set(['correct','wrong','timeout']);
const VOICE_EVENTS=new Set(['greeting','finish','perfect']);
const SOURCES=['voicevox','custom'];
const PHRASES={
  greeting:['始めよう！','準備オーケー？','今日も頑張ろう！'],
  finish:['お疲れさま！','おめでとう！','よく頑張ったね！'],
  perfect:['パーフェクト！','完璧！','満点！']
};
const EXAM_FILES={
  correct:'./assets/audio/exam/correct.mp3?v=5.1.0',
  wrong:'./assets/audio/exam/wrong.mp3?v=5.1.0',
  timeout:'./assets/audio/exam/timeout.mp3?v=5.1.0'
};

const memory={};
const lastClip={};
const lastPhrase={};
const eventLog=[];
const examPlayers={};
let activeVoice=null;
let activeExam=null;
let playToken=0;
let readyPromise=null;
let primeAttempted=false;
let lastExamError='';
let settings=loadSettings();

function defaults(){return{enabled:true,volume:.82,celebrationVoice:true}}
function loadSettings(){
  try{return Object.assign(defaults(),JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'))}
  catch{return defaults()}
}
function saveSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings))}catch{}}
function setSetting(key,value){
  if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));
  else if(key==='enabled'||key==='celebrationVoice')value=!!value;
  else return;
  settings[key]=value;saveSettings();syncVolumes();
  if(key==='enabled'&&!value)stopAll();
}
function getSettings(){return Object.assign({},settings)}

function buildExamPlayers(){
  for(const [event,src] of Object.entries(EXAM_FILES)){
    try{
      const a=new Audio(src);a.preload='auto';a.volume=settings.volume;
      examPlayers[event]={audio:a,src};
    }catch(e){lastExamError=e?.message||String(e)}
  }
}
function syncVolumes(){for(const x of Object.values(examPlayers))try{x.audio.volume=settings.volume}catch{};if(activeVoice)try{activeVoice.volume=settings.volume}catch{}}
function primeExamAudio(){
  if(primeAttempted||!settings.enabled)return;primeAttempted=true;
  for(const {audio:a} of Object.values(examPlayers)){
    try{
      a.muted=true;a.currentTime=0;
      const p=a.play();
      const finish=()=>{try{a.pause();a.currentTime=0;a.muted=false}catch{}};
      if(p&&typeof p.then==='function')p.then(finish).catch(()=>{try{a.muted=false}catch{}});else finish();
    }catch{try{a.muted=false}catch{}}
  }
}
function bindUnlock(){
  try{
    document.addEventListener('pointerdown',primeExamAudio,{capture:true,once:true,passive:true});
    document.addEventListener('touchstart',primeExamAudio,{capture:true,once:true,passive:true});
  }catch{}
}

function sourceBucket(source,event){if(!memory[source])memory[source]={};if(!memory[source][event])memory[source][event]=[];return memory[source][event]}
function resetMemory(){for(const source of Object.keys(memory))for(const event of Object.keys(memory[source]||{}))for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{};for(const source of Object.keys(memory))delete memory[source]}
function openDb(){return new Promise((resolve,reject)=>{if(!window.indexedDB||typeof indexedDB.open!=='function'){resolve(null);return}const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('source','source',{unique:false});s.createIndex('event','event',{unique:false})}};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
function addMemory(item){if(!item?.blob||!item.source||!item.event)return;const bucket=sourceBucket(item.source,item.event),old=bucket.findIndex(x=>x.id===item.id),clip={id:item.id,name:item.name||'Audio',url:URL.createObjectURL(item.blob),credit:item.credit||''};if(old>=0){try{URL.revokeObjectURL(bucket[old].url)}catch{};bucket[old]=clip}else bucket.push(clip)}
async function loadLibrary(){resetMemory();const db=await openDb();if(!db)return;const rows=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});rows.forEach(addMemory)}
function ready(){return readyPromise||Promise.resolve()}
function isAudioFile(file){return !!(file&&(/^audio\//.test(file.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(file.name||'')))}
function clipId(source,event,file){return `${source}:${event}:${String(file?.name||'clip').replace(/[^a-zA-Z0-9._-]+/g,'-')}`}
async function saveClip(source,event,file){if(!SOURCES.includes(source)||!VOICE_EVENTS.has(event)||!isAudioFile(file))return false;const db=await openDb();if(!db)return false;const item={id:clipId(source,event,file),source,event,name:file.name||'Audio',blob:file,credit:''};await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(item);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});addMemory(item);return true}
async function importEvent(source,event,fileList){const files=[...(fileList||[])].filter(isAudioFile);let saved=0;for(const file of files)if(await saveClip(source,event,file))saved++;return{saved,event}}
async function clearSource(source){const db=await openDb();for(const event of Object.keys(memory[source]||{}))for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{};memory[source]={};if(!db)return;const ids=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).index('source').getAllKeys(source);req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');ids.forEach(id=>tx.objectStore(STORE).delete(id));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
function sourceCount(source){return Object.values(memory[source]||{}).reduce((n,a)=>n+a.length,0)}
function eventCount(source,event){return memory[source]?.[event]?.length||0}

function cancelSpeech(){try{window.speechSynthesis?.cancel?.()}catch{}}
function stopAll(){
  playToken++;
  if(activeExam){try{activeExam.pause();activeExam.currentTime=0}catch{};activeExam=null}
  if(activeVoice){try{activeVoice.pause();activeVoice.currentTime=0}catch{};activeVoice=null}
  cancelSpeech();
}
function playExam(event){
  const x=examPlayers[event];if(!x)return false;
  try{
    const a=x.audio;if(activeExam&&activeExam!==a){try{activeExam.pause();activeExam.currentTime=0}catch{}}
    activeExam=a;a.muted=false;a.volume=settings.volume;a.currentTime=0;
    const p=a.play();
    if(p&&typeof p.catch==='function')p.catch(e=>{lastExamError=e?.message||String(e);if(activeExam===a)activeExam=null});
    a.onended=()=>{if(activeExam===a)activeExam=null};
    return true;
  }catch(e){lastExamError=e?.message||String(e);return false}
}
function voiceList(event){const out=[];for(const source of SOURCES)for(const clip of memory[source]?.[event]||[])out.push({source,clip});return out}
function chooseVoice(event){const all=voiceList(event);if(!all.length)return null;const prev=lastClip[event];let pool=all.length>1?all.filter(x=>x.clip.id!==prev):all;if(!pool.length)pool=all;const pick=pool[Math.floor(Math.random()*pool.length)];lastClip[event]=pick.clip.id;return pick}
function fallbackSpeech(event,token){if(token!==playToken||!settings.celebrationVoice||!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window))return false;const arr=PHRASES[event]||[];if(!arr.length)return false;let pool=arr.length>1&&lastPhrase[event]?arr.filter(x=>x!==lastPhrase[event]):arr;if(!pool.length)pool=arr;const text=pool[Math.floor(Math.random()*pool.length)];lastPhrase[event]=text;try{cancelSpeech();const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.volume=settings.volume;u.rate=1.0;u.pitch=1.05;speechSynthesis.speak(u);return true}catch{return false}}
function resultFallback(){return playExam('correct')}
function playVoiceEvent(event,token){
  if(!settings.celebrationVoice)return resultFallback(event);
  const pick=chooseVoice(event);if(!pick){if(!fallbackSpeech(event,token))resultFallback(event);return true}
  try{const a=new Audio(pick.clip.url);activeVoice=a;a.volume=settings.volume;a.onended=()=>{if(token===playToken&&activeVoice===a)activeVoice=null};const p=a.play();if(p&&p.catch)p.catch(()=>{if(token===playToken){activeVoice=null;if(!fallbackSpeech(event,token))resultFallback(event)}});return true}catch{if(!fallbackSpeech(event,token))resultFallback(event);return true}
}
function playEvent(event){
  if(!settings.enabled||!EVENTS.includes(event))return false;
  if(event==='click')return false;
  stopAll();const token=playToken;
  if(EXAM_EVENTS.has(event)){
    const ok=playExam(event);eventLog.push({event,source:'myinstants-mp3',ok,at:Date.now()});if(eventLog.length>100)eventLog.shift();return ok;
  }
  if(VOICE_EVENTS.has(event)){
    eventLog.push({event,source:settings.celebrationVoice?(voiceList(event).length?'voice-pack':'fallback-voice'):'result-sfx',ok:true,at:Date.now()});if(eventLog.length>100)eventLog.shift();return playVoiceEvent(event,token);
  }
  return false;
}
function debug(){return{version:VERSION,settings:getSettings(),primeAttempted,lastExamError,examFiles:Object.assign({},EXAM_FILES),counts:Object.fromEntries(SOURCES.map(s=>[s,sourceCount(s)])),events:Object.fromEntries(EVENTS.map(e=>[e,SOURCES.reduce((n,s)=>n+eventCount(s,e),0)])),eventLog:eventLog.slice(-20),activeExam:!!activeExam,activeVoice:!!activeVoice}}

buildExamPlayers();bindUnlock();readyPromise=loadLibrary().catch(e=>console.warn('[TENKA audio library]',e));
window.TENKA_AUDIO={version:VERSION,playEvent,stopAll,setSetting,settings:getSettings,ready,prime:primeExamAudio,importEvent,clearSource,sourceCount,eventCount,debug};
window.TENKA_AUDIO_VERSION=VERSION;
})();
