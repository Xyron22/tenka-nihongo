(()=>{
'use strict';

const VERSION='3.1.0';
const DB_NAME='tenka-audio-v4';
const STORE='clips';
const SETTINGS_KEY='tenka-audio-settings-v6';
const EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect','click'];
const EXAM_EVENTS=new Set(['correct','wrong','combo','timeout','click']);
const VOICE_EVENTS=new Set(['greeting','finish','perfect']);
const SOURCES=['voicevox','custom'];
const ASSET_ROOT='./assets/audio/exam/';
const SFX={
  unlock:'unlock.wav',correct:'correct.wav',wrong:'wrong.wav',combo:'combo.wav',timeout:'timeout.wav',click:'click.wav',
  greeting:'greeting.wav',finish:'finish.wav',perfect:'perfect.wav'
};
const PHRASES={
  greeting:['始めよう！','準備オーケー？','今日も頑張ろう！'],
  finish:['お疲れさま！','おめでとう！','よく頑張ったね！'],
  perfect:['パーフェクト！','完璧！','満点！']
};

const memory={};
const lastClip={};
const lastPhrase={};
const eventLog=[];
let mediaPlayer=null;
let activeAudio=null;
let primed=false;
let playToken=0;
let readyPromise=null;
let settings=loadSettings();
let lastMediaError='';

function defaults(){return{enabled:true,volume:.78,celebrationVoice:true}}
function loadSettings(){
  try{return Object.assign(defaults(),JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'))}
  catch{return defaults()}
}
function saveSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings))}catch{}}
function setSetting(key,value){
  if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));
  else if(key==='enabled'||key==='celebrationVoice')value=!!value;
  else return;
  settings[key]=value;saveSettings();
  if(key==='enabled'&&!value)stopAll();
}
function getSettings(){return Object.assign({},settings)}

function sourceBucket(source,event){
  if(!memory[source])memory[source]={};
  if(!memory[source][event])memory[source][event]=[];
  return memory[source][event];
}
function resetMemory(){
  for(const source of Object.keys(memory))for(const event of Object.keys(memory[source]||{})){
    for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{}
  }
  for(const source of Object.keys(memory))delete memory[source];
}
function openDb(){
  return new Promise((resolve,reject)=>{
    if(!window.indexedDB||typeof indexedDB.open!=='function'){resolve(null);return}
    const req=indexedDB.open(DB_NAME,1);
    req.onupgradeneeded=()=>{
      const db=req.result;
      if(!db.objectStoreNames.contains(STORE)){
        const s=db.createObjectStore(STORE,{keyPath:'id'});
        s.createIndex('source','source',{unique:false});
        s.createIndex('event','event',{unique:false});
      }
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
function addMemory(item){
  if(!item?.blob||!item.source||!item.event)return;
  const bucket=sourceBucket(item.source,item.event);
  const old=bucket.findIndex(x=>x.id===item.id);
  const clip={id:item.id,name:item.name||'Audio',url:URL.createObjectURL(item.blob),credit:item.credit||''};
  if(old>=0){try{URL.revokeObjectURL(bucket[old].url)}catch{};bucket[old]=clip}else bucket.push(clip);
}
async function loadLibrary(){
  resetMemory();const db=await openDb();if(!db)return;
  const rows=await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).getAll();
    req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);
  });
  rows.forEach(addMemory);
}
function ready(){return readyPromise||Promise.resolve()}
function isAudioFile(file){return !!(file&&(/^audio\//.test(file.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(file.name||'')))}
function clipId(source,event,file){return `${source}:${event}:${String(file?.name||'clip').replace(/[^a-zA-Z0-9._-]+/g,'-')}`}
async function saveClip(source,event,file){
  if(!SOURCES.includes(source)||!VOICE_EVENTS.has(event)||!isAudioFile(file))return false;
  const db=await openDb();if(!db)return false;
  const item={id:clipId(source,event,file),source,event,name:file.name||'Audio',blob:file,credit:''};
  await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(item);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});
  addMemory(item);return true;
}
async function importEvent(source,event,fileList){
  const files=[...(fileList||[])].filter(isAudioFile);let saved=0;
  for(const file of files)if(await saveClip(source,event,file))saved++;
  return{saved,event};
}
async function clearSource(source){
  const db=await openDb();
  for(const event of Object.keys(memory[source]||{}))for(const clip of memory[source][event]||[])try{URL.revokeObjectURL(clip.url)}catch{}
  memory[source]={};if(!db)return;
  const ids=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly'),req=tx.objectStore(STORE).index('source').getAllKeys(source);req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});
  await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');ids.forEach(id=>tx.objectStore(STORE).delete(id));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});
}
function sourceCount(source){return Object.values(memory[source]||{}).reduce((n,a)=>n+a.length,0)}
function eventCount(source,event){return memory[source]?.[event]?.length||0}

function cancelSpeech(){try{window.speechSynthesis?.cancel?.()}catch{}}
function player(){
  if(mediaPlayer)return mediaPlayer;
  try{
    mediaPlayer=new Audio();mediaPlayer.preload='auto';mediaPlayer.setAttribute?.('playsinline','');return mediaPlayer;
  }catch{return null}
}
function assetUrl(event){const file=SFX[event];return file?`${ASSET_ROOT}${file}?v=${VERSION}`:''}
function stopMedia(){
  if(!mediaPlayer)return;
  try{mediaPlayer.pause();mediaPlayer.currentTime=0}catch{}
  activeAudio=null;
}
function stopAll(){playToken++;stopMedia();cancelSpeech()}

function primeMedia(){
  if(primed||!settings.enabled)return;
  const a=player(),url=assetUrl('unlock');if(!a||!url)return;
  try{
    a.src=url;a.volume=.001;a.currentTime=0;
    const p=a.play();
    if(p&&typeof p.then==='function')p.then(()=>{try{a.pause();a.currentTime=0}catch{};a.volume=settings.volume;primed=true;lastMediaError=''}).catch(e=>{primed=false;lastMediaError=e?.name||e?.message||String(e)});
    else{try{a.pause();a.currentTime=0}catch{};a.volume=settings.volume;primed=true}
  }catch(e){primed=false;lastMediaError=e?.name||e?.message||String(e)}
}
function playUrl(url,token,onFail){
  if(token!==playToken)return false;
  const a=player();if(!a||!url)return false;
  try{
    a.pause?.();a.src=url;a.volume=settings.volume;a.currentTime=0;activeAudio=a;
    const p=a.play();
    if(p&&typeof p.catch==='function')p.catch(e=>{
      if(token!==playToken)return;
      activeAudio=null;lastMediaError=e?.name||e?.message||String(e);
      if(onFail)onFail(e);
    });
    else lastMediaError='';
    return true;
  }catch(e){activeAudio=null;lastMediaError=e?.name||e?.message||String(e);if(onFail)onFail(e);return false}
}
function playSfx(event,token){return playUrl(assetUrl(event),token)}

function voiceList(event){
  const out=[];for(const source of SOURCES)for(const clip of memory[source]?.[event]||[])out.push({source,clip});return out;
}
function chooseVoice(event){
  const all=voiceList(event);if(!all.length)return null;
  const prev=lastClip[event];let pool=all.length>1?all.filter(x=>x.clip.id!==prev):all;if(!pool.length)pool=all;
  const pick=pool[Math.floor(Math.random()*pool.length)];lastClip[event]=pick.clip.id;return pick;
}
function fallbackSpeech(event,token){
  if(token!==playToken||!settings.celebrationVoice||!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window))return false;
  const arr=PHRASES[event]||[];if(!arr.length)return false;
  let pool=arr.length>1&&lastPhrase[event]?arr.filter(x=>x!==lastPhrase[event]):arr;if(!pool.length)pool=arr;
  const text=pool[Math.floor(Math.random()*pool.length)];lastPhrase[event]=text;
  try{cancelSpeech();const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';u.volume=settings.volume;u.rate=1.0;u.pitch=1.05;speechSynthesis.speak(u);return true}catch{return false}
}
function playVoiceEvent(event,token){
  if(!settings.celebrationVoice)return playSfx(event,token);
  const pick=chooseVoice(event);
  if(!pick){if(!fallbackSpeech(event,token))playSfx(event,token);return true}
  return playUrl(pick.clip.url,token,()=>{if(!fallbackSpeech(event,token))playSfx(event,token)});
}
function playEvent(event){
  if(!settings.enabled||!EVENTS.includes(event))return false;
  stopAll();const token=playToken;
  if(EXAM_EVENTS.has(event)){
    eventLog.push({event,source:'media-sfx',at:Date.now()});if(eventLog.length>100)eventLog.shift();
    return playSfx(event,token);
  }
  if(VOICE_EVENTS.has(event)){
    const count=voiceList(event).length;
    eventLog.push({event,source:settings.celebrationVoice?(count?'voice-pack':'fallback-voice'):'media-sfx',at:Date.now()});if(eventLog.length>100)eventLog.shift();
    return playVoiceEvent(event,token);
  }
  return false;
}
function debug(){return{
  version:VERSION,settings:getSettings(),counts:Object.fromEntries(SOURCES.map(s=>[s,sourceCount(s)])),
  events:Object.fromEntries(EVENTS.map(e=>[e,SOURCES.reduce((n,s)=>n+eventCount(s,e),0)])),
  eventLog:eventLog.slice(-20),mediaPrimed:primed,lastMediaError,active:!!activeAudio
}}

if(typeof document!=='undefined'&&document.addEventListener){
  const prime=()=>primeMedia();
  document.addEventListener('pointerdown',prime,{capture:true,passive:true});
  document.addEventListener('touchend',prime,{capture:true,passive:true});
  document.addEventListener('keydown',prime,{capture:true});
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')primed=false});
}
try{
  for(const e of Object.keys(SFX)){const a=new Audio(assetUrl(e));a.preload='auto';a.load?.()}
}catch{}
readyPromise=loadLibrary().catch(e=>console.warn('[TENKA audio library]',e));
window.TENKA_AUDIO={version:VERSION,playEvent,stopAll,setSetting,settings:getSettings,ready,importEvent,clearSource,sourceCount,eventCount,debug,prime:primeMedia};
window.TENKA_AUDIO_VERSION=VERSION;
})();