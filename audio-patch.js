(()=>{
'use strict';

const DB_NAME='tenka-audio-v2';
const STORE='clips';
const SETTINGS_KEY='tenka-audio-settings-v3';
const EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect','click'];
const SOURCES={
  soundeffectlab:{label:'効果音ラボ',icon:'🎙️',role:'Voice Jepang',credit:'Kredit tidak wajib; file dipakai sebagai bagian aplikasi.'},
  pixabay:{label:'Pixabay',icon:'✨',role:'Game / UI SFX',credit:'Pixabay Content License; kredit umumnya tidak wajib.'},
  voicevox:{label:'VOICEVOX Nemo',icon:'🗣️',role:'Multi-voice Jepang custom',credit:'Tampilkan kredit VOICEVOX Nemo dan ikuti ketentuan voice library.'},
  custom:{label:'Custom',icon:'🎵',role:'Anime / meme milikmu',credit:'Disimpan hanya di perangkat ini.'}
};
const EVENT_LABELS={greeting:'👋 Mulai',correct:'✅ Benar',wrong:'❌ Salah',combo:'🔥 Combo',timeout:'⏱️ Time up',finish:'🎉 Selesai',perfect:'💯 Perfect',click:'👆 Tap'};
const PHRASES={
  greeting:['今日も頑張ろう！','よーし、始めよう！','準備はいいかな？','今日も一緒に頑張ろう！'],
  correct:['正解！','やったー！','すごい！','いいね！','その調子！','よくできました！','完璧！'],
  wrong:['惜しい！','ざんねーん！','えぇぇ！？','もう一回！','ドンマイ！','あとちょっと！'],
  combo:['すごいすごい！','その調子その調子！','止まらないね！','いい感じ！','天才かも！'],
  timeout:['タイムアップ！','時間切れ～！','あー、時間切れ！'],
  finish:['おめでとう！','お疲れさま！','よく頑張ったね！','最後までできたね！'],
  perfect:['全問正解！すごい！','パーフェクト！おめでとう！','完璧！天才！']
};

const memory={};
const lastClip={};
const lastPhrase={};
const lastSource={};
const lastEventAt={};
let nativeSpeak=null;
let audioCtx=null;
let activeAudio=null;
let pendingCorrect=null;
let libraryReadyPromise=null;
let settings=loadSettings();

function defaults(){return{enabled:true,volume:.9,mode:'anime',click:true};}
function loadSettings(){
  try{
    const old=JSON.parse(localStorage.getItem('tenka-audio-settings-v2')||'{}');
    const current=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}');
    return Object.assign(defaults(),old,current);
  }catch{return defaults()}
}
function saveSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings))}catch{}}
function sourceBucket(source,event){if(!memory[source])memory[source]={};if(!memory[source][event])memory[source][event]=[];return memory[source][event]}
function toast(text){const el=document.querySelector('#toast');if(!el)return;el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1500)}
function stableKey(x){return String(x?.id||x?.clip?.id||x?.key||x||'')}
function chooseNoRepeat(arr,key,map){
  if(!arr||!arr.length)return null;
  const last=map[key];
  let pool=arr;
  if(arr.length>1&&last)pool=arr.filter(x=>stableKey(x)!==last);
  if(!pool.length)pool=arr;
  const pick=pool[Math.floor(Math.random()*pool.length)];
  map[key]=stableKey(pick);
  return pick;
}
function openDb(){
  return new Promise((resolve,reject)=>{
    if(!('indexedDB'in window)){resolve(null);return}
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
  if(!item||!item.blob||!item.source||!item.event)return;
  const bucket=sourceBucket(item.source,item.event);
  if(bucket.some(x=>x.id===item.id))return;
  bucket.push({id:item.id,name:item.name||'Audio',url:URL.createObjectURL(item.blob),credit:item.credit||''});
}
async function loadLibrary(){
  try{
    const db=await openDb();if(!db)return;
    const rows=await new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readonly');
      const req=tx.objectStore(STORE).getAll();
      req.onsuccess=()=>resolve(req.result||[]);
      req.onerror=()=>reject(req.error);
    });
    rows.forEach(addMemory);
    setTimeout(()=>injectSettings(true),0);
  }catch{}
}
function ready(){return libraryReadyPromise||Promise.resolve()}
function guessEvent(name,fallback='correct'){
  const s=String(name||'').toLowerCase();
  const rules=[
    ['perfect',/perfect|manten|zenmon|kanpeki|marvelous/],
    ['timeout',/time.?up|timeout|time.?over|jikangire|jikan-gire/],
    ['combo',/combo|streak|level.?up|sugoisugoi|dondon|power.?up/],
    ['finish',/omedetou|finish|goal|syuuryou|shuryou|owari|victory|complete|applause|ganbattane/],
    ['wrong',/zannen|incorrect|wrong|bubu|fail|error|miss|boo|hazure/],
    ['correct',/seikai|correct|sugoi|yatta|yattane|good|excellent|success|win|pinpon/],
    ['greeting',/greeting|youkoso|welcome|start|hajim|ready|ohayou|konnichi|yaa/],
    ['click',/click|decision|cursor|button|tap|select/]
  ];
  for(const [event,re] of rules)if(re.test(s))return event;
  return fallback;
}
async function saveClip(source,event,file){
  const db=await openDb();if(!db)return false;
  const item={
    id:source+':'+event+':'+Date.now()+':'+Math.random().toString(36).slice(2),
    source,event,name:file.name||'Audio',blob:file,credit:SOURCES[source]?.credit||''
  };
  await new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,'readwrite');
    tx.objectStore(STORE).put(item);
    tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
  });
  addMemory(item);
  return true;
}
async function importPack(source,fileList,fallback='correct'){
  const files=[...(fileList||[])].filter(f=>f&&(/^audio\//.test(f.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(f.name||'')));
  if(!files.length)return{saved:0,events:{}};
  let saved=0;const events={};
  for(const file of files){
    const event=guessEvent(file.name,fallback);
    try{
      if(await saveClip(source,event,file)){saved++;events[event]=(events[event]||0)+1}
    }catch{}
  }
  return{saved,events};
}
async function importEvent(source,event,fileList){
  if(!EVENTS.includes(event))throw new Error(`Unknown audio event: ${event}`);
  const files=[...(fileList||[])].filter(f=>f&&(/^audio\//.test(f.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(f.name||'')));
  let saved=0;
  for(const file of files){try{if(await saveClip(source,event,file))saved++}catch{}}
  return{saved,event};
}
async function clearSource(source){
  try{
    Object.values(memory[source]||{}).flat().forEach(x=>{try{URL.revokeObjectURL(x.url)}catch{}});
    memory[source]={};
    const db=await openDb();if(!db)return;
    const ids=await new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readonly');
      const req=tx.objectStore(STORE).index('source').getAllKeys(source);
      req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);
    });
    await new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite');
      ids.forEach(id=>tx.objectStore(STORE).delete(id));
      tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
    });
  }catch{}
}
async function clearEvent(source,event){
  try{
    (memory[source]?.[event]||[]).forEach(x=>{try{URL.revokeObjectURL(x.url)}catch{}});
    if(memory[source])memory[source][event]=[];
    const db=await openDb();if(!db)return;
    const rows=await new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readonly');
      const req=tx.objectStore(STORE).getAll();
      req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error);
    });
    const ids=rows.filter(x=>x.source===source&&x.event===event).map(x=>x.id);
    await new Promise((resolve,reject)=>{
      const tx=db.transaction(STORE,'readwrite');
      ids.forEach(id=>tx.objectStore(STORE).delete(id));
      tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);
    });
  }catch{}
}
function sourceCount(source){return Object.values(memory[source]||{}).reduce((n,a)=>n+a.length,0)}
function eventCount(source,event){return memory[source]?.[event]?.length||0}
function allAvailable(event){
  const list=[];
  for(const source of Object.keys(SOURCES)){
    for(const clip of memory[source]?.[event]||[]){
      list.push({id:`${source}:${clip.id}`,source,clip});
    }
  }
  return list;
}
function candidatesFor(event){
  const all=allAvailable(event);
  if(!all.length)return all;
  const sfx=all.filter(x=>x.source==='pixabay');
  const voices=all.filter(x=>x.source!=='pixabay');
  if(event==='click')return sfx.length?sfx:all;
  if(settings.mode==='quiet')return sfx.length?sfx:all;
  if(!voices.length)return all;
  if(!sfx.length)return voices;
  const voiceChance=event==='timeout'?.65:event==='correct'||event==='wrong'?.82:.75;
  return Math.random()<voiceChance?voices:sfx;
}
function chooseClip(event){
  let pool=candidatesFor(event);
  if(!pool.length)return null;
  const previousSource=lastSource[event];
  const sources=new Set(pool.map(x=>x.source));
  if(sources.size>1&&previousSource){
    const without=pool.filter(x=>x.source!==previousSource);
    if(without.length)pool=without;
  }
  const pick=chooseNoRepeat(pool,event,lastClip);
  if(pick)lastSource[event]=pick.source;
  return pick;
}
function japaneseVoice(){
  if(!('speechSynthesis'in window))return null;
  const vs=speechSynthesis.getVoices().filter(v=>/^ja(-|_)/i.test(v.lang||''));
  return vs.find(v=>/kyoko|haruka|female|nanami/i.test(v.name||''))||vs[0]||null;
}
function expressiveSpeak(text,event){
  if(!text||!nativeSpeak||!('SpeechSynthesisUtterance'in window))return false;
  try{
    if('speechSynthesis'in window)speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='ja-JP';
    const v=japaneseVoice();if(v)u.voice=v;
    u.volume=settings.volume;
    u.rate=event==='wrong'?.98:1.03+Math.random()*.08;
    u.pitch=event==='wrong'?1.1:1.22+Math.random()*.16;
    nativeSpeak(u);
    return true;
  }catch{return false}
}
function ctx(){
  try{
    if(!audioCtx){const C=window.AudioContext||window.webkitAudioContext;if(C)audioCtx=new C()}
    if(audioCtx&&audioCtx.state==='suspended')audioCtx.resume();
    return audioCtx;
  }catch{return null}
}
function beep(freq,duration=.08,type='sine',delay=0,gain=.06){
  const c=ctx();if(!c)return;
  try{
    const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+delay;
    o.type=type;o.frequency.setValueAtTime(freq,t);
    g.gain.setValueAtTime(gain*settings.volume,t);
    g.gain.exponentialRampToValueAtTime(.001,t+duration);
    o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+duration+.02);
  }catch{}
}
function builtinSfx(event){
  if(!settings.enabled)return;
  switch(event){
    case'click':beep(520,.035,'sine',0,.025);break;
    case'correct':beep(620,.08);beep(880,.11,'sine',.07);break;
    case'wrong':beep(190,.12,'sawtooth');break;
    case'combo':beep(660,.07);beep(880,.07,'sine',.06);beep(1100,.12,'sine',.12);break;
    case'timeout':beep(240,.14,'square');break;
    case'finish':beep(523,.09);beep(659,.09,'sine',.08);beep(784,.18,'sine',.16);break;
    case'perfect':beep(523,.08);beep(659,.08,'sine',.07);beep(784,.08,'sine',.14);beep(1046,.24,'sine',.21);break;
    case'greeting':beep(660,.06);beep(880,.1,'sine',.055);break;
  }
}
function stopReactionAudio(){
  if(activeAudio){
    try{activeAudio.pause();activeAudio.currentTime=0}catch{}
    activeAudio=null;
  }
}
function playClip(item,event){
  stopReactionAudio();
  try{
    const a=new Audio(item.clip.url);
    activeAudio=a;
    a.volume=settings.volume;
    a.onended=()=>{if(activeAudio===a)activeAudio=null};
    const p=a.play();
    if(p&&p.catch)p.catch(()=>{if(activeAudio===a)activeAudio=null;fallback(event)});
    return true;
  }catch{return false}
}
function fallback(event){
  stopReactionAudio();
  if(event==='click'||settings.mode==='quiet'){builtinSfx(event);return}
  const phrase=chooseNoRepeat(PHRASES[event]||[],event,lastPhrase);
  if(phrase&&expressiveSpeak(phrase,event))return;
  builtinSfx(event);
}
function playNow(event){
  if(!settings.enabled)return;
  const now=Date.now();
  if(lastEventAt[event]&&now-lastEventAt[event]<120)return;
  lastEventAt[event]=now;
  const pick=chooseClip(event);
  if(pick){playClip(pick,event);return}
  fallback(event);
}
function playEvent(event){
  if(!settings.enabled)return;
  if(event==='click'&&!settings.click)return;
  if(event==='correct'){
    if(pendingCorrect)clearTimeout(pendingCorrect);
    pendingCorrect=setTimeout(()=>{pendingCorrect=null;playNow('correct')},65);
    return;
  }
  if(event==='combo'||event==='finish'||event==='perfect'){
    if(pendingCorrect){clearTimeout(pendingCorrect);pendingCorrect=null}
  }
  playNow(event);
}
function reactionFromText(text){
  const map={'今日も頑張ろう！':'greeting','正解！':'correct','すごい！':'correct','えぇぇ！？':'wrong','惜しい！':'wrong','おめでとうございます！':'finish','お疲れさまでした！':'finish'};
  return map[text]||null;
}
function patchSpeech(){
  if(!('speechSynthesis'in window)||nativeSpeak)return;
  nativeSpeak=speechSynthesis.speak.bind(speechSynthesis);
  if(window.TENKA_CORE)return;
  try{
    speechSynthesis.speak=function(utterance){
      const text=utterance&&utterance.text;
      const event=reactionFromText(text);
      if(event){
        const mega=document.querySelector('.mega');
        playEvent(event==='finish'&&mega&&mega.textContent.trim()==='100%'?'perfect':event);
        return;
      }
      return nativeSpeak(utterance);
    };
  }catch{}
}
function patchApp(){
  if(typeof window.go==='function'&&!window.go.__tenkaSound){
    const original=window.go;
    const wrapped=function(v){const r=original.apply(this,arguments);if(v==='settings')setTimeout(()=>injectSettings(),0);return r};
    wrapped.__tenkaSound=true;window.go=wrapped;
  }
}
function setOption(key,value){
  if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));
  settings[key]=value;saveSettings();injectSettings(true);
}
async function onPackInput(source,input){
  const result=await importPack(source,input&&input.files,'correct');
  toast(result.saved?`${result.saved} audio ${SOURCES[source].label} ditambahkan`:'Tidak ada file audio yang terbaca');
  if(input)input.value='';injectSettings(true);
}
async function onManualInput(source,event,input){
  const files=[...(input?.files||[])];let saved=0;
  for(const file of files){try{if(await saveClip(source,event,file))saved++}catch{}}
  toast(saved?`${saved} audio → ${EVENT_LABELS[event]}`:'File audio tidak terbaca');
  if(input)input.value='';injectSettings(true);
}
async function removeSource(source){
  if(!confirm(`Hapus semua audio ${SOURCES[source].label} dari iPhone ini?`))return;
  await clearSource(source);toast('Sound pack dihapus');injectSettings(true);
}
function packCard(source){
  const s=SOURCES[source],n=sourceCount(source);
  return `<div class="row" style="align-items:flex-start;gap:10px"><div style="flex:1"><b>${s.icon} ${s.label}</b><small>${s.role}</small><small>${n} file lokal • ${s.credit}</small></div><div class="small-actions"><label class="pill">＋ Import pack<input type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg" multiple style="display:none" onchange="tenkaAudioImportPack('${source}',this)"></label>${n?`<button class="pill" onclick="tenkaAudioRemoveSource('${source}')">Hapus</button>`:''}</div></div>`;
}
function manualRows(){
  return EVENTS.filter(x=>x!=='click').map(event=>`<div class="row"><div><b>${EVENT_LABELS[event]}</b><small>${Object.keys(SOURCES).map(s=>eventCount(s,event)).reduce((a,b)=>a+b,0)} file tersedia</small></div><label class="pill">＋ Custom<input type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg" multiple style="display:none" onchange="tenkaAudioImportManual('custom','${event}',this)"></label></div>`).join('');
}
function injectSettings(force=false){
  const app=document.querySelector('#app');if(!app||!app.textContent.includes('Settings'))return;
  let box=document.querySelector('#tenka-sound-engine');if(box&&!force)return;if(box)box.remove();
  box=document.createElement('section');box.id='tenka-sound-engine';
  box.innerHTML=`
    <div class="section-title">🎧 TENKA Sound Engine</div>
    <div class="muted-box">Satu aksi = satu reaction. Anime Voice mengacak sumber/voice tanpa menumpuk dua audio sekaligus.</div>
    <div class="toggle"><div><b>🔊 Master Audio</b><div class="subtle">Voice, SFX, combo & feedback</div></div><input type="checkbox" ${settings.enabled?'checked':''} onchange="tenkaAudioSet('enabled',this.checked)"></div>
    <div class="row"><div style="flex:1"><b>🔉 Volume</b><small>${Math.round(settings.volume*100)}%</small></div><input aria-label="Volume" type="range" min="0" max="1" step="0.05" value="${settings.volume}" oninput="tenkaAudioVolumePreview(this.value)" onchange="tenkaAudioSet('volume',this.value)" style="width:145px"></div>
    <div class="row"><div><b>🎭 Reaction style</b><small>Anime Voice = voice/SFX bergantian • Quiet = SFX saja</small></div><select onchange="tenkaAudioSet('mode',this.value)" style="background:#202026;color:white;border:1px solid #3a3a42;border-radius:12px;padding:9px"><option value="anime" ${settings.mode==='anime'?'selected':''}>Anime Voice</option><option value="quiet" ${settings.mode==='quiet'?'selected':''}>Quiet SFX</option></select></div>
    <div class="toggle"><div><b>👆 Tap sound</b><div class="subtle">Hanya navigasi; tidak ditumpuk dengan jawaban/voice</div></div><input type="checkbox" ${settings.click?'checked':''} onchange="tenkaAudioSet('click',this.checked)"></div>
    <div class="section-title">🎚️ Test reaction</div>
    <div class="small-actions">${EVENTS.filter(x=>x!=='click').map(e=>`<button class="pill" onclick="TENKA_AUDIO.playEvent('${e}')">${EVENT_LABELS[e]}</button>`).join('')}</div>
    <div class="section-title">📦 Source Packs</div>
    ${packCard('soundeffectlab')}${packCard('pixabay')}${packCard('voicevox')}
    <div class="section-title">🎵 Custom Anime / Meme</div>
    ${manualRows()}
    <div class="muted-box">Credits: 効果音ラボ; Pixabay Content License; VOICEVOX Nemo. Custom sound tetap lokal di perangkat.</div>`;
  const danger=[...app.querySelectorAll('button')].find(b=>b.textContent.includes('Reset progress'));
  if(danger&&danger.parentNode)danger.parentNode.insertBefore(box,danger);else app.appendChild(box);
}
function volumePreview(value){settings.volume=Math.max(0,Math.min(1,Number(value)||0));builtinSfx('click')}
function shouldTap(button){
  if(!button)return false;
  if(button.closest('#tenka-sound-engine'))return false;
  if(button.classList.contains('choice'))return false;
  if(button.closest('.controls'))return false;
  if(button.classList.contains('icon-btn'))return false;
  const onclick=button.getAttribute?.('onclick')||'';
  if(/answerQuiz|rateCard|speakText|startGreeting|playEvent/.test(onclick))return false;
  return true;
}
function bindTap(){
  document.addEventListener('click',e=>{
    const b=e.target&&e.target.closest?e.target.closest('button,.pill'):null;
    if(shouldTap(b))playEvent('click');
  },{passive:true});
}
function init(){
  patchSpeech();patchApp();bindTap();
  libraryReadyPromise=loadLibrary();
  if('speechSynthesis'in window)speechSynthesis.getVoices();
  setTimeout(injectSettings,120);
}

window.TENKA_AUDIO={
  playEvent,importPack,importEvent,clearSource,clearEvent,sourceCount,eventCount,ready,
  settings:()=>Object.assign({},settings),
  debug:()=>({sources:Object.fromEntries(Object.keys(SOURCES).map(s=>[s,sourceCount(s)])),lastClip:Object.assign({},lastClip),lastSource:Object.assign({},lastSource)})
};
window.tenkaAudioImportPack=onPackInput;
window.tenkaAudioImportManual=onManualInput;
window.tenkaAudioRemoveSource=removeSource;
window.tenkaAudioSet=setOption;
window.tenkaAudioVolumePreview=volumePreview;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));else setTimeout(init,0);
})();