import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT=process.cwd();
const OUT=path.join(ROOT,'assets','audio');
const VERSION='1.2.0';
const UA='Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/126 Safari/537.36 TENKA-SoundBuilder/1.2';
const entries=[];

await fs.mkdir(OUT,{recursive:true});
await fs.mkdir(path.join(OUT,'soundeffectlab'),{recursive:true});
await fs.mkdir(path.join(OUT,'pixabay'),{recursive:true});
await fs.mkdir(path.join(OUT,'voicevox'),{recursive:true});

function decodeHtml(s){
  return String(s||'')
    .replaceAll('\\/','/')
    .replaceAll('\\u0026','&')
    .replaceAll('&amp;','&')
    .replaceAll('&#x2F;','/')
    .replaceAll('&quot;','"')
    .replaceAll('&#39;',"'");
}

async function fetchResponse(url,referer){
  const headers={'user-agent':UA,'accept':'*/*'};
  if(referer)headers.referer=referer;
  const r=await fetch(url,{headers,redirect:'follow'});
  if(!r.ok)throw new Error(`${r.status} ${r.statusText} for ${url}`);
  return r;
}

async function fetchText(url){return await (await fetchResponse(url)).text();}

function safeName(s){return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,55)||'clip';}

async function download(url,file,referer){
  const r=await fetchResponse(url,referer);
  const buf=Buffer.from(await r.arrayBuffer());
  if(buf.length<400)throw new Error(`audio too small (${buf.length} bytes): ${url}`);
  await fs.writeFile(file,buf);
  return buf.length;
}

function nearestSoundEffectLabMp3(html,phrase){
  const clean=decodeHtml(html);
  const positions=[];
  let from=0;
  while(true){const i=clean.indexOf(phrase,from);if(i<0)break;positions.push(i);from=i+phrase.length;}
  if(!positions.length)return null;
  const re=/(?:https?:\/\/soundeffect-lab\.info)?(\/sound\/voice\/mp3\/[A-Za-z0-9_./-]+\.mp3)/g;
  const mp3=[];
  for(const m of clean.matchAll(re))mp3.push({url:new URL(m[1],'https://soundeffect-lab.info').href,pos:m.index||0});
  if(!mp3.length)return null;
  let best=null;
  for(const p of positions){
    for(const m of mp3){
      const distance=Math.abs(m.pos-p);
      if(!best||distance<best.distance)best={...m,distance};
    }
  }
  return best&&best.distance<1800?best.url:null;
}

async function buildSoundEffectLab(){
  const page='https://soundeffect-lab.info/sound/voice/';
  const targets={
    greeting:['始まるよ～','準備はいいかな？'],
    correct:['正解','大正解','よくできました','すごいすごい'],
    wrong:['残念','あとちょっとだったね','ブッブー'],
    combo:['レベルアップしたよ','すごいすごい'],
    timeout:['タイムアップ','時間切れ～'],
    finish:['おめでとう','頑張ったね'],
    perfect:['満点','おめでとうございます']
  };
  try{
    const html=await fetchText(page);
    const used=new Set();
    for(const [event,phrases] of Object.entries(targets)){
      let n=0;
      for(const phrase of phrases){
        const url=nearestSoundEffectLabMp3(html,phrase);
        if(!url){console.warn(`[効果音ラボ] MP3 not found near: ${phrase}`);continue;}
        const key=`${event}:${url}`;
        if(used.has(key))continue;
        used.add(key);
        n++;
        const rel=`assets/audio/soundeffectlab/${event}-${n}-${safeName(phrase)}.mp3`;
        try{
          const bytes=await download(url,path.join(ROOT,rel),page);
          entries.push({source:'soundeffectlab',role:'voice',event,path:`./${rel}`,label:phrase,voice:'効果音ラボ',sourcePage:page,credit:'Sound Effect Lab / 効果音ラボ',bytes});
          console.log(`[効果音ラボ] ${event}: ${phrase} (${bytes} bytes)`);
        }catch(e){console.warn(`[効果音ラボ] download failed ${phrase}: ${e.message}`);}
      }
    }
  }catch(e){console.warn(`[効果音ラボ] source page unavailable: ${e.message}`);}
}

function pixabayAudioUrl(html){
  const clean=decodeHtml(html);
  const patterns=[
    /https:\/\/cdn\.pixabay\.com\/download\/audio\/[^"'<>\s]+?\.mp3(?:\?[^"'<>\s]+)?/g,
    /https:\/\/cdn\.pixabay\.com\/audio\/[^"'<>\s]+?\.mp3(?:\?[^"'<>\s]+)?/g
  ];
  for(const re of patterns){
    const matches=[...clean.matchAll(re)].map(m=>m[0].replace(/&amp;/g,'&'));
    if(matches.length)return matches[0];
  }
  return null;
}

async function buildPixabay(){
  const clips=[
    {event:'correct',title:'Correct — DRAGON-STUDIO',page:'https://pixabay.com/sound-effects/technology-correct-472358/'},
    {event:'wrong',title:'Buzzer 4 — floraphonic',page:'https://pixabay.com/sound-effects/film-special-effects-buzzer-4-183895/'},
    {event:'combo',title:'Cute Level Up 3 — floraphonic',page:'https://pixabay.com/sound-effects/film-special-effects-cute-level-up-3-189853/'},
    {event:'finish',title:'Game Level Complete — Universfield',page:'https://pixabay.com/sound-effects/game-level-complete-143022/'},
    {event:'perfect',title:'Game Level Complete — Universfield',page:'https://pixabay.com/sound-effects/game-level-complete-143022/'},
    {event:'wrong',title:'Fail Trumpet — Universfield',page:'https://pixabay.com/sound-effects/film-special-effects-fail-trumpet-144746/'}
  ];
  let i=0;
  for(const clip of clips){
    try{
      const html=await fetchText(clip.page);
      const url=pixabayAudioUrl(html);
      if(!url){console.warn(`[Pixabay] CDN URL not found: ${clip.title}`);continue;}
      i++;
      const rel=`assets/audio/pixabay/${clip.event}-${i}-${safeName(clip.title)}.mp3`;
      const bytes=await download(url,path.join(ROOT,rel),clip.page);
      entries.push({source:'pixabay',role:'sfx',event:clip.event,path:`./${rel}`,label:clip.title,sourcePage:clip.page,credit:'Pixabay Content License',bytes});
      console.log(`[Pixabay] ${clip.event}: ${clip.title} (${bytes} bytes)`);
    }catch(e){console.warn(`[Pixabay] ${clip.title}: ${e.message}`);}
  }
}

function voiceNameFromFile(file){
  if(/-f1\./i.test(file))return'女声1';
  if(/-f2\./i.test(file))return'女声2';
  if(/-f3\./i.test(file))return'女声3';
  return'VOICEVOX Nemo';
}

async function includeVoicevox(){
  const dir=path.join(OUT,'voicevox');
  let files=[];
  try{files=await fs.readdir(dir);}catch{}
  for(const file of files.filter(x=>/\.(wav|mp3|ogg)$/i.test(x))){
    const event=file.split('-')[0];
    if(!['greeting','correct','wrong','combo','timeout','finish','perfect'].includes(event))continue;
    const st=await fs.stat(path.join(dir,file));
    const voice=voiceNameFromFile(file);
    entries.push({
      source:'voicevox',role:'voice',event,path:`./assets/audio/voicevox/${file}`,
      label:`VOICEVOX Nemo ${voice} — ${event}`,voice,
      sourcePage:'https://voicevox.hiroshiba.jp/nemo/',
      credit:`VOICEVOX Nemo: ${voice}`,bytes:st.size
    });
  }
}

await buildSoundEffectLab();
await buildPixabay();
await includeVoicevox();

const counts={};
const eventCounts={};
for(const e of entries){
  counts[e.source]=(counts[e.source]||0)+1;
  eventCounts[e.event]=(eventCounts[e.event]||0)+1;
}
const manifest={
  version:VERSION,
  generatedAt:new Date().toISOString(),
  counts,
  eventCounts,
  entries,
  credits:[
    {source:'soundeffectlab',text:'Sound Effect Lab / 効果音ラボ',url:'https://soundeffect-lab.info/sound/voice/'},
    {source:'pixabay',text:'Pixabay Content License',url:'https://pixabay.com/service/license-summary/'},
    {source:'voicevox',text:'VOICEVOX Nemo: 女声1・女声2・女声3',url:'https://voicevox.hiroshiba.jp/nemo/'}
  ]
};
await fs.writeFile(path.join(OUT,'manifest.json'),JSON.stringify(manifest,null,2)+'\n','utf8');
console.log('TENKA sound manifest:',counts,eventCounts,'total',entries.length);
