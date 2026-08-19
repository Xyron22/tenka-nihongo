import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT=process.cwd();
const DIR=path.join(ROOT,'assets','audio','voicevox');
const OUT=path.join(ROOT,'assets','audio','manifest.json');
const EVENTS=['greeting','correct','wrong','combo','timeout','finish','perfect'];
const VOICE_BY_VARIANT={f1:'女声1',f2:'女声2',f3:'女声3'};

let files=[];
try{files=await fs.readdir(DIR)}catch{}
files=files.filter(f=>/\.wav$/i.test(f)).sort();
const entries=[];
for(const file of files){
  const m=file.match(/^(greeting|correct|wrong|combo|timeout|finish|perfect)-(f[123])\.wav$/i);
  if(!m)continue;
  const event=m[1].toLowerCase(),variant=m[2].toLowerCase();
  const st=await fs.stat(path.join(DIR,file));
  if(st.size<1000)throw new Error(`VOICEVOX asset too small: ${file} (${st.size} bytes)`);
  entries.push({
    source:'voicevox',role:'voice',event,
    path:`./assets/audio/voicevox/${file}`,
    label:`VOICEVOX Nemo ${VOICE_BY_VARIANT[variant]} — ${event}`,
    voice:VOICE_BY_VARIANT[variant],
    sourcePage:'https://voicevox.hiroshiba.jp/nemo/',
    credit:`VOICEVOX Nemo: ${VOICE_BY_VARIANT[variant]}`,
    bytes:st.size
  });
}

for(const event of EVENTS){
  const clips=entries.filter(e=>e.event===event);
  const voices=new Set(clips.map(e=>e.voice));
  if(clips.length!==3||voices.size!==3)throw new Error(`${event}: expected exactly 3 VOICEVOX voices, got ${clips.length} clips / ${voices.size} voices`);
}
if(entries.length!==21)throw new Error(`Expected 21 VOICEVOX assets, got ${entries.length}`);

const counts={voicevox:entries.length};
const eventCounts=Object.fromEntries(EVENTS.map(e=>[e,entries.filter(x=>x.event===e).length]));
const manifest={
  version:'2.0.0',generatedAt:new Date().toISOString(),counts,eventCounts,entries,
  credits:[{source:'voicevox',text:'VOICEVOX Nemo: 女声1・女声2・女声3',url:'https://voicevox.hiroshiba.jp/nemo/'}]
};
await fs.mkdir(path.dirname(OUT),{recursive:true});
await fs.writeFile(OUT,JSON.stringify(manifest,null,2)+'\n','utf8');
console.log('TENKA Core 2 sound manifest:',entries.length,'VOICEVOX assets',eventCounts);
