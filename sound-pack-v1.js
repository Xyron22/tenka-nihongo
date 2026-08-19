(()=>{
'use strict';

const PACK_VERSION='1.2.0';
const KEY='tenka-builtin-sound-pack-version';
const BUILTIN_SOURCES=['soundeffectlab','pixabay','voicevox'];
let manifest=null;
let installing=false;
let lastError='';

function toast(text){
  const el=document.querySelector('#toast');
  if(!el)return;
  el.textContent=text;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1800);
}

function api(){return window.TENKA_AUDIO||null;}
function sourceCount(source){try{return Number(api()?.sourceCount?.(source)||0)}catch{return 0}}
function totalCount(){return BUILTIN_SOURCES.reduce((n,s)=>n+sourceCount(s),0)}

async function loadManifest(){
  const r=await fetch(`./assets/audio/manifest.json?v=${encodeURIComponent(PACK_VERSION)}&t=${Date.now()}`,{cache:'no-store'});
  if(!r.ok)throw new Error(`manifest ${r.status}`);
  const data=await r.json();
  if(!data||data.version!==PACK_VERSION||!Array.isArray(data.entries))throw new Error('manifest sound pack tidak valid / versi lama');
  manifest=data;
  return data;
}

function extensionFromPath(p){const m=String(p||'').match(/\.(wav|mp3|ogg|m4a)(?:\?|$)/i);return m?m[1].toLowerCase():'mp3'}
function mime(ext){return ext==='wav'?'audio/wav':ext==='ogg'?'audio/ogg':ext==='m4a'?'audio/mp4':'audio/mpeg'}

async function entryToFile(entry,index){
  const r=await fetch(entry.path,{cache:'force-cache'});
  if(!r.ok)throw new Error(`${entry.source}/${entry.event}: ${r.status}`);
  const blob=await r.blob();
  if(blob.size<300)throw new Error(`${entry.source}/${entry.event}: file kosong`);
  const ext=extensionFromPath(entry.path);
  const voice=entry.voice?String(entry.voice).replace(/[^\w-]+/g,'-'):'clip';
  const name=`${entry.event}-${entry.source}-${voice}-builtin-${index}.${ext}`;
  try{return new File([blob],name,{type:blob.type||mime(ext)})}
  catch{blob.name=name;return blob}
}

async function installSource(source,entries){
  const a=api();
  if(!a?.importPack||!entries.length)return 0;
  const groups=new Map();
  for(let i=0;i<entries.length;i++){
    const entry=entries[i];
    try{
      const file=await entryToFile(entry,i+1);
      if(!groups.has(entry.event))groups.set(entry.event,[]);
      groups.get(entry.event).push(file);
    }catch(e){console.warn('[TENKA sound pack]',e)}
  }
  let saved=0;
  for(const [event,files] of groups){
    if(a.importEvent){
      const result=await a.importEvent(source,event,files);
      saved+=Number(result?.saved||0);
    }else{
      const result=await a.importPack(source,files,event);
      saved+=Number(result?.saved||0);
    }
  }
  return saved;
}

async function clearBuiltin(){
  const a=api();
  if(!a?.clearSource)return;
  for(const s of BUILTIN_SOURCES){try{await a.clearSource(s)}catch{}}
}

async function install(force=false){
  if(installing)return;
  const a=api();
  if(!a?.importPack)return;
  installing=true;lastError='';
  try{
    if(a.ready)await a.ready();
    if(!manifest)await loadManifest();
    const previous=localStorage.getItem(KEY)||'';
    if(force||previous!==PACK_VERSION){
      await clearBuiltin();
    }else if(totalCount()>0){
      injectStatus();
      return;
    }

    let saved=0;
    for(const source of BUILTIN_SOURCES){
      const entries=manifest.entries.filter(e=>e.source===source);
      saved+=await installSource(source,entries);
    }
    localStorage.setItem(KEY,PACK_VERSION);
    if(saved)toast(`🎧 ${saved} sound bawaan TENKA siap`);
    else lastError='Tidak ada file sound bawaan yang berhasil dimuat.';
  }catch(e){
    lastError=e?.message||String(e);
    console.warn('[TENKA sound pack]',e);
  }finally{
    installing=false;
    injectStatus();
  }
}

async function reinstall(){
  localStorage.removeItem(KEY);
  toast('Memasang ulang sound pack…');
  await install(true);
}

function countsText(){
  return `効果音ラボ ${sourceCount('soundeffectlab')} • Pixabay ${sourceCount('pixabay')} • VOICEVOX ${sourceCount('voicevox')}`;
}

function injectStatus(){
  const app=document.querySelector('#app');
  if(!app||!app.textContent.includes('Settings'))return;
  const engine=document.querySelector('#tenka-sound-engine');
  if(!engine)return;
  let box=document.querySelector('#tenka-builtin-sound-pack');
  if(box)box.remove();
  box=document.createElement('div');
  box.id='tenka-builtin-sound-pack';
  box.className='muted-box';
  box.style.marginTop='12px';
  const expected=manifest?.entries?.length||0;
  const ready=totalCount();
  const vv=manifest?.entries?.filter(e=>e.source==='voicevox')||[];
  const voiceNames=[...new Set(vv.map(e=>e.voice).filter(Boolean))];
  box.innerHTML=`<b>🎬 Built-in Anime Voice v${PACK_VERSION}</b><br>${countsText()}<br><span class="subtle">${ready?`${ready} file tersimpan lokal di iPhone • build menyediakan ${expected} asset`:'Pack belum terpasang'}${lastError?` • ⚠️ ${lastError}`:''}</span><div class="small-actions" style="margin-top:10px"><button class="pill" onclick="TENKA_SOUND_PACK.reinstall()">↻ Pasang ulang pack</button><button class="pill" onclick="TENKA_AUDIO.playEvent('correct')">▶️ Test</button></div><div class="subtle" style="margin-top:8px">VOICEVOX: ${voiceNames.length?voiceNames.join('・'):'multi-voice'} • 効果音ラボ voice • Pixabay SFX. Satu event hanya memainkan satu clip.</div>`;
  engine.appendChild(box);
}

async function init(){
  try{await loadManifest()}catch(e){lastError=e?.message||String(e)}
  setTimeout(()=>install(false),350);
  setTimeout(injectStatus,700);
  if('MutationObserver'in window){
    const app=document.querySelector('#app');
    if(app)new MutationObserver(()=>setTimeout(injectStatus,30)).observe(app,{childList:true,subtree:true});
  }
}

window.TENKA_SOUND_PACK={
  version:PACK_VERSION,install,reinstall,
  status:()=>({version:PACK_VERSION,manifest,counts:Object.fromEntries(BUILTIN_SOURCES.map(s=>[s,sourceCount(s)])),error:lastError})
};
window.TENKA_SOUND_VERSION=PACK_VERSION;
setTimeout(init,120);
})();