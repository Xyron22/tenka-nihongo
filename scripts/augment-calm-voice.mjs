import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT=process.cwd();
const MANIFEST=path.join(ROOT,'assets','audio','manifest.json');
const OUT=path.join(ROOT,'assets','audio','soundeffectlab');
const PAGE='https://soundeffect-lab.info/sound/voice/info-lady1.html';
const UA='Mozilla/5.0 TENKA-SoundBuilder/1.2.1';

function decode(s){return String(s||'').replaceAll('\\/','/').replaceAll('&amp;','&').replaceAll('&#x2F;','/')}
function safe(s){return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)||'clip'}
async function get(url){const r=await fetch(url,{headers:{'user-agent':UA},redirect:'follow'});if(!r.ok)throw new Error(`${r.status} ${url}`);return r}
function nearest(html,phrase){
  const clean=decode(html),pos=clean.indexOf(phrase);if(pos<0)return null;
  const re=/(?:https?:\/\/soundeffect-lab\.info)?(\/sound\/voice\/mp3\/[A-Za-z0-9_./-]+\.mp3)/g;
  let best=null;
  for(const m of clean.matchAll(re)){
    const d=Math.abs((m.index||0)-pos);
    if(!best||d<best.d)best={d,url:new URL(m[1],'https://soundeffect-lab.info').href};
  }
  return best&&best.d<1800?best.url:null;
}

await fs.mkdir(OUT,{recursive:true});
let manifest;
try{manifest=JSON.parse(await fs.readFile(MANIFEST,'utf8'))}catch{process.exit(0)}

// Base Sound Effect Lab page is the energetic-girl pack.
for(const e of manifest.entries||[]){
  if(e.source==='soundeffectlab'&&e.role==='voice'&&!e.voice)e.voice='元気な女の子';
}

try{
  const html=await (await get(PAGE)).text();
  const targets=[
    ['greeting','準備はいいですか？'],
    ['correct','正解です'],
    ['correct','よくできました'],
    ['wrong','残念でした'],
    ['wrong','もう一息です'],
    ['finish','おめでとうございます'],
    ['perfect','満点']
  ];
  let n=0;
  for(const [event,phrase] of targets){
    const url=nearest(html,phrase);if(!url)continue;
    n++;
    const rel=`assets/audio/soundeffectlab/calm-${event}-${n}-${safe(phrase)}.mp3`;
    const buf=Buffer.from(await (await get(url)).arrayBuffer());
    if(buf.length<400)continue;
    await fs.writeFile(path.join(ROOT,rel),buf);
    manifest.entries.push({source:'soundeffectlab',role:'voice',event,path:`./${rel}`,label:phrase,voice:'落ち着いた女性',sourcePage:PAGE,credit:'Sound Effect Lab / 効果音ラボ',bytes:buf.length});
  }
  manifest.counts.soundeffectlab=manifest.entries.filter(e=>e.source==='soundeffectlab').length;
  manifest.eventCounts={};for(const e of manifest.entries)manifest.eventCounts[e.event]=(manifest.eventCounts[e.event]||0)+1;
  manifest.voiceStyles=[...new Set(manifest.entries.filter(e=>e.role==='voice').map(e=>e.voice).filter(Boolean))];
  await fs.writeFile(MANIFEST,JSON.stringify(manifest,null,2)+'\n','utf8');
  console.log('TENKA calm voice augmentation:',n,'clips; voice styles:',manifest.voiceStyles);
}catch(e){
  manifest.voiceStyles=[...new Set((manifest.entries||[]).filter(e=>e.role==='voice').map(e=>e.voice).filter(Boolean))];
  await fs.writeFile(MANIFEST,JSON.stringify(manifest,null,2)+'\n','utf8');
  console.warn('TENKA calm voice augmentation skipped:',e.message);
}