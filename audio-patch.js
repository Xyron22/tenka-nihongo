(()=>{
'use strict';

const DB_NAME='tenka-audio-v2';
const STORE='clips';
const SETTINGS_KEY='tenka-audio-settings-v2';
const EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect','click'];
const SOURCES={
  soundeffectlab:{label:'効果音ラボ',icon:'🎙️',role:'Voice Jepang & quiz SFX',credit:'Kredit tidak wajib; file dipakai sebagai bagian aplikasi.'},
  pixabay:{label:'Pixabay',icon:'✨',role:'Game / sparkle / success SFX',credit:'Pixabay Content License; kredit umumnya tidak wajib.'},
  voicevox:{label:'VOICEVOX',icon:'🗣️',role:'Kalimat Jepang custom',credit:'Tampilkan kredit VOICEVOX dan ikuti aturan voice library yang dipakai.'},
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
let nativeSpeak=null;
let combo=0;
let audioCtx=null;
let settings=loadSettings();

function defaults(){return{enabled:true,volume:.9,mode:'anime',mixSources:true,click:true};}
function loadSettings(){try{return Object.assign(defaults(),JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}'))}catch{return defaults()}}
function saveSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings))}catch{}}
function sourceBucket(source,event){if(!memory[source])memory[source]={};if(!memory[source][event])memory[source][event]=[];return memory[source][event]}
function toast(text){const el=document.querySelector('#toast');if(!el)return;el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1500)}
function chooseNoRepeat(arr,key,map){if(!arr||!arr.length)return null;let pool=arr;const last=map[key];if(arr.length>1&&last)pool=arr.filter(x=>(x.id||x)!==last);if(!pool.length)pool=arr;const pick=pool[Math.floor(Math.random()*pool.length)];map[key]=pick.id||pick;return pick}
function openDb(){return new Promise((resolve,reject)=>{if(!('indexedDB'in window)){resolve(null);return}const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:'id'});s.createIndex('source','source',{unique:false});s.createIndex('event','event',{unique:false})}};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
function addMemory(item){if(!item||!item.blob||!item.source||!item.event)return;sourceBucket(item.source,item.event).push({id:item.id,name:item.name||'Audio',url:URL.createObjectURL(item.blob),credit:item.credit||''})}
async function loadLibrary(){try{const db=await openDb();if(!db)return;const rows=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});rows.forEach(addMemory);setTimeout(()=>injectSettings(true),0)}catch{}}
function guessEvent(name,fallback='correct'){
  const s=String(name||'').toLowerCase();
  const rules=[
    ['perfect',/perfect|manten|zenmon|kanpeki|marvelous/],
    ['timeout',/time.?up|timeout|time.?over|jikangire|jikan-gire/],
    ['combo',/combo|streak|level.?up|sugoisugoi|dondon|power.?up/],
    ['finish',/omedetou|finish|goal|syuuryou|shuryou|owari|victory|complete|applause|ganbattane/],
    ['wrong',/zannen|incorrect|wrong|bubu|fail|error|miss|boo|hazure/],
    ['correct',/seikai|correct|sugoi|yatta|yattane|good|excellent|success|win|pinpon/],
    ['greeting',/youkoso|welcome|start|hajim|ready|ohayou|konnichi|yaa/],
    ['click',/click|decision|cursor|button|tap|select/]
  ];
  for(const [event,re] of rules)if(re.test(s))return event;
  return fallback;
}
async function saveClip(source,event,file){const db=await openDb();if(!db)return false;const item={id:source+':'+event+':'+Date.now()+':'+Math.random().toString(36).slice(2),source,event,name:file.name||'Audio',blob:file,credit:SOURCES[source]?.credit||''};await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(item);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});addMemory(item);return true}
async function importPack(source,fileList,fallback='correct'){
  const files=[...(fileList||[])].filter(f=>f&&(/^audio\//.test(f.type||'')||/\.(mp3|wav|m4a|ogg|aac)$/i.test(f.name||'')));
  if(!files.length)return{saved:0,events:{}};
  let saved=0;const events={};
  for(const file of files){const event=guessEvent(file.name,fallback);try{if(await saveClip(source,event,file)){saved++;events[event]=(events[event]||0)+1}}catch{}}
  return{saved,events};
}
async function clearSource(source){try{Object.values(memory[source]||{}).flat().forEach(x=>{try{URL.revokeObjectURL(x.url)}catch{}});memory[source]={};const db=await openDb();if(!db)return;const ids=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).index('source').getAllKeys(source);req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');ids.forEach(id=>tx.objectStore(STORE).delete(id));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}catch{}}
async function clearEvent(source,event){try{(memory[source]?.[event]||[]).forEach(x=>{try{URL.revokeObjectURL(x.url)}catch{}});if(memory[source])memory[source][event]=[];const db=await openDb();if(!db)return;const rows=await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});const ids=rows.filter(x=>x.source===source&&x.event===event).map(x=>x.id);await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');ids.forEach(id=>tx.objectStore(STORE).delete(id));tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}catch{}}
function sourceCount(source){return Object.values(memory[source]||{}).reduce((n,a)=>n+a.length,0)}
function eventCount(source,event){return memory[source]?.[event]?.length||0}
function availableFor(event){const list=[];for(const source of Object.keys(SOURCES)){for(const clip of memory[source]?.[event]||[])list.push({source,clip})}return list}
function japaneseVoice(){if(!('speechSynthesis'in window))return null;const vs=speechSynthesis.getVoices().filter(v=>/^ja(-|_)/i.test(v.lang||''));return vs.find(v=>/kyoko|haruka|female|nanami/i.test(v.name||''))||vs[0]||null}
function expressiveSpeak(text,event){if(!text||!nativeSpeak||!('SpeechSynthesisUtterance'in window))return;try{const u=new SpeechSynthesisUtterance(text);u.lang='ja-JP';const v=japaneseVoice();if(v)u.voice=v;u.volume=settings.volume;u.rate=event==='wrong'?.98:1.03+Math.random()*.08;u.pitch=event==='wrong'?1.1:1.22+Math.random()*.16;nativeSpeak(u)}catch{}}
function ctx(){try{if(!audioCtx){const C=window.AudioContext||window.webkitAudioContext;if(C)audioCtx=new C()}if(audioCtx&&audioCtx.state==='suspended')audioCtx.resume();return audioCtx}catch{return null}}
function beep(freq,duration=.08,type='sine',delay=0,gain=.06){const c=ctx();if(!c)return;try{const o=c.createOscillator(),g=c.createGain(),t=c.currentTime+delay;o.type=type;o.frequency.setValueAtTime(freq,t);g.gain.setValueAtTime(gain*settings.volume,t);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+duration+.02)}catch{}}
function builtinSfx(event){if(!settings.enabled)return;switch(event){case'click':beep(520,.035,'sine',0,.025);break;case'correct':beep(620,.08);beep(880,.11,'sine',.07);break;case'wrong':beep(190,.12,'sawtooth');beep(145,.13,'sawtooth',.1);break;case'combo':beep(660,.07);beep(880,.07,'sine',.06);beep(1100,.12,'sine',.12);break;case'timeout':beep(260,.12,'square');beep(220,.18,'square',.12);break;case'finish':beep(523,.09);beep(659,.09,'sine',.08);beep(784,.18,'sine',.16);break;case'perfect':beep(523,.08);beep(659,.08,'sine',.07);beep(784,.08,'sine',.14);beep(1046,.24,'sine',.21);break;case'greeting':beep(660,.06);beep(880,.1,'sine',.055);break}}
function playClip(item,event){try{const a=new Audio(item.clip.url);a.volume=settings.volume;const p=a.play();if(p&&p.catch)p.catch(()=>fallback(event));return true}catch{return false}}
function fallback(event){builtinSfx(event);if(settings.mode==='quiet'||event==='click')return;const phrase=chooseNoRepeat(PHRASES[event]||[],event,lastPhrase);if(phrase)setTimeout(()=>expressiveSpeak(phrase,event),event==='wrong'?40:65)}
function playEvent(event){
  if(!settings.enabled)return;
  if(event==='click'&&!settings.click)return;
  const available=availableFor(event);
  if(available.length){const pick=chooseNoRepeat(available,event,lastClip);if(pick){if(pick.source!=='pixabay')builtinSfx(event);playClip(pick,event);return}}
  fallback(event);
}
function reactionFromText(text){const map={'今日も頑張ろう！':'greeting','正解！':'correct','すごい！':'correct','えぇぇ！？':'wrong','惜しい！':'wrong','おめでとうございます！':'finish','お疲れさまでした！':'finish'};return map[text]||null}
function patchSpeech(){if(!('speechSynthesis'in window)||nativeSpeak)return;nativeSpeak=speechSynthesis.speak.bind(speechSynthesis);if(window.TENKA_CORE)return;try{speechSynthesis.speak=function(utterance){const text=utterance&&utterance.text;const event=reactionFromText(text);if(event){const mega=document.querySelector('.mega');playEvent(event==='finish'&&mega&&mega.textContent.trim()==='100%'?'perfect':event);return}return nativeSpeak(utterance)}}catch{}}
function patchApp(){
  if(typeof window.go==='function'&&!window.go.__tenkaSound){const original=window.go;const wrapped=function(v){const r=original.apply(this,arguments);if(v==='settings')setTimeout(()=>injectSettings(),0);return r};wrapped.__tenkaSound=true;window.go=wrapped}
  if(window.TENKA_CORE)return;
  if(typeof window.answerQuiz==='function'&&!window.answerQuiz.__tenkaSound){const original=window.answerQuiz;const wrapped=function(i){const r=original.apply(this,arguments);setTimeout(()=>{if(i<0){combo=0;playEvent('timeout');return}const b=document.querySelector('#choice-'+i);if(b&&b.classList.contains('correct')){combo++;if(combo>=3&&combo%3===0)playEvent('combo')}else combo=0},30);return r};wrapped.__tenkaSound=true;window.answerQuiz=wrapped}
  if(typeof window.restartQuiz==='function'&&!window.restartQuiz.__tenkaSound){const original=window.restartQuiz;const wrapped=function(){combo=0;return original.apply(this,arguments)};wrapped.__tenkaSound=true;window.restartQuiz=wrapped}
}
function setOption(key,value){if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));settings[key]=value;saveSettings();injectSettings(true)}
async function onPackInput(source,input){const result=await importPack(source,input&&input.files,'correct');toast(result.saved?`${result.saved} audio ${SOURCES[source].label} ditambahkan`:'Tidak ada file audio yang terbaca');if(input)input.value='';injectSettings(true)}
async function onManualInput(source,event,input){const files=[...(input?.files||[])];let saved=0;for(const file of files){try{if(await saveClip(source,event,file))saved++}catch{}}toast(saved?`${saved} audio → ${EVENT_LABELS[event]}`:'File audio tidak terbaca');if(input)input.value='';injectSettings(true)}
async function removeSource(source){if(!confirm(`Hapus semua audio ${SOURCES[source].label} dari iPhone ini?`))return;await clearSource(source);toast('Sound pack dihapus');injectSettings(true)}
function packCard(source){const s=SOURCES[source],n=sourceCount(source);return `<div class="row" style="align-items:flex-start;gap:10px"><div style="flex:1"><b>${s.icon} ${s.label}</b><small>${s.role}</small><small>${n} file lokal • ${s.credit}</small></div><div class="small-actions"><label class="pill">＋ Import pack<input type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg" multiple style="display:none" onchange="tenkaAudioImportPack('${source}',this)"></label>${n?`<button class="pill" onclick="tenkaAudioRemoveSource('${source}')">Hapus</button>`:''}</div></div>`}
function manualRows(){return EVENTS.filter(x=>x!=='click').map(event=>`<div class="row"><div><b>${EVENT_LABELS[event]}</b><small>${Object.keys(SOURCES).map(s=>eventCount(s,event)).reduce((a,b)=>a+b,0)} file tersedia</small></div><label class="pill">＋ Custom<input type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg" multiple style="display:none" onchange="tenkaAudioImportManual('custom','${event}',this)"></label></div>`).join('')}
function injectSettings(force=false){
  const app=document.querySelector('#app');if(!app||!app.textContent.includes('Settings'))return;
  let box=document.querySelector('#tenka-sound-engine');if(box&&!force)return;if(box)box.remove();
  box=document.createElement('section');box.id='tenka-sound-engine';box.innerHTML=`
    <div class="section-title">🎧 TENKA Sound Engine</div>
    <div class="muted-box">Anime Mix mengacak voice/SFX yang tersedia dan menghindari audio yang sama dua kali berturut-turut. Semua file import disimpan lokal di iPhone ini.</div>
    <div class="toggle"><div><b>🔊 Master Audio</b><div class="subtle">Voice, SFX, combo & feedback</div></div><input type="checkbox" ${settings.enabled?'checked':''} onchange="tenkaAudioSet('enabled',this.checked)"></div>
    <div class="row"><div style="flex:1"><b>🔉 Volume</b><small>${Math.round(settings.volume*100)}%</small></div><input aria-label="Volume" type="range" min="0" max="1" step="0.05" value="${settings.volume}" oninput="tenkaAudioVolumePreview(this.value)" onchange="tenkaAudioSet('volume',this.value)" style="width:145px"></div>
    <div class="row"><div><b>🎭 Voice style</b><small>Anime = voice + SFX • Quiet = SFX saja</small></div><select onchange="tenkaAudioSet('mode',this.value)" style="background:#202026;color:white;border:1px solid #3a3a42;border-radius:12px;padding:9px"><option value="anime" ${settings.mode==='anime'?'selected':''}>Anime Mix</option><option value="quiet" ${settings.mode==='quiet'?'selected':''}>Quiet SFX</option></select></div>
    <div class="toggle"><div><b>👆 Tap sound</b><div class="subtle">Efek kecil saat tekan tombol</div></div><input type="checkbox" ${settings.click?'checked':''} onchange="tenkaAudioSet('click',this.checked)"></div>
    <div class="section-title">🎚️ Test reaction</div>
    <div class="small-actions">${EVENTS.filter(x=>x!=='click').map(e=>`<button class="pill" onclick="TENKA_AUDIO.playEvent('${e}')">${EVENT_LABELS[e]}</button>`).join('')}</div>
    <div class="section-title">📦 Source Packs</div>
    ${packCard('soundeffectlab')}${packCard('pixabay')}${packCard('voicevox')}
    <div class="muted-box">効果音ラボ cocok untuk voice Jepang, Pixabay untuk game SFX, dan VOICEVOX untuk kalimat custom. File sumbernya akan kita tambah bertahap setelah engine stabil.</div>
    <div class="section-title">🎵 Custom Anime / Meme</div>
    ${manualRows()}
    <div class="muted-box">Credits: 効果音ラボ (credit tidak wajib); Pixabay Content License; audio VOICEVOX harus menampilkan kredit sesuai voice library. TENKA menyimpan metadata sumber supaya nanti Credits bisa dibuat otomatis.</div>`;
  const danger=[...app.querySelectorAll('button')].find(b=>b.textContent.includes('Reset progress'));if(danger&&danger.parentNode)danger.parentNode.insertBefore(box,danger);else app.appendChild(box)
}
function volumePreview(value){settings.volume=Math.max(0,Math.min(1,Number(value)||0));builtinSfx('click')}
function bindTap(){document.addEventListener('click',e=>{const b=e.target&&e.target.closest?e.target.closest('button,.pill'):null;if(!b||b.closest('#tenka-sound-engine')&&b.textContent.includes('Test reaction'))return;playEvent('click')},{passive:true})}
function init(){patchSpeech();patchApp();bindTap();loadLibrary();if('speechSynthesis'in window)speechSynthesis.getVoices();setTimeout(injectSettings,120)}

window.TENKA_AUDIO={playEvent,importPack,clearSource,clearEvent,sourceCount,eventCount,settings:()=>Object.assign({},settings)};
window.tenkaAudioImportPack=onPackInput;
window.tenkaAudioImportManual=onManualInput;
window.tenkaAudioRemoveSource=removeSource;
window.tenkaAudioSet=setOption;
window.tenkaAudioVolumePreview=volumePreview;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));else setTimeout(init,0);
})();