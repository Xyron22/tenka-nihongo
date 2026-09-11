import fs from 'node:fs/promises';
import path from 'node:path';

const OUT=path.join(process.cwd(),'assets','audio','exam');
const SR=22050;
const TWO_PI=Math.PI*2;

function env(t,start,dur){
  if(t<start||t>start+dur)return 0;
  const x=(t-start)/dur;
  const attack=Math.min(1,x/.12);
  const release=Math.min(1,(1-x)/.28);
  return Math.max(0,Math.min(attack,release));
}
function render(parts,total,master=.72){
  const n=Math.max(1,Math.floor(total*SR));
  const data=new Int16Array(n);
  for(let i=0;i<n;i++){
    const t=i/SR;let y=0;
    for(const p of parts){
      const e=env(t,p.start,p.dur);if(!e)continue;
      const local=t-p.start;
      const fundamental=Math.sin(TWO_PI*p.freq*local);
      const harmonic=(p.type==='soft')?0.12*Math.sin(TWO_PI*p.freq*2*local):0.24*Math.sin(TWO_PI*p.freq*2*local);
      y+=(fundamental+harmonic)*e*(p.gain??.5);
    }
    y=Math.max(-1,Math.min(1,y*master));
    data[i]=Math.round(y*32767);
  }
  return wav(data,SR);
}
function wav(samples,sampleRate){
  const bytes=samples.length*2;
  const b=Buffer.alloc(44+bytes);
  b.write('RIFF',0);b.writeUInt32LE(36+bytes,4);b.write('WAVE',8);
  b.write('fmt ',12);b.writeUInt32LE(16,16);b.writeUInt16LE(1,20);b.writeUInt16LE(1,22);
  b.writeUInt32LE(sampleRate,24);b.writeUInt32LE(sampleRate*2,28);b.writeUInt16LE(2,32);b.writeUInt16LE(16,34);
  b.write('data',36);b.writeUInt32LE(bytes,40);
  for(let i=0;i<samples.length;i++)b.writeInt16LE(samples[i],44+i*2);
  return b;
}
const N=(freq,start,dur,gain=.5,type='soft')=>({freq,start,dur,gain,type});
const files={
  'unlock.wav':render([],0.055,0),
  'click.wav':render([N(760,0,.045,.28)],.07,.46),
  'correct.wav':render([N(880,0,.075,.52),N(1175,.055,.095,.42)],.19,.58),
  'wrong.wav':render([N(225,0,.105,.52,'firm'),N(178,.082,.12,.46,'firm')],.24,.55),
  'combo.wav':render([N(660,0,.065,.34),N(880,.052,.075,.38),N(1175,.11,.105,.44)],.25,.58),
  'timeout.wav':render([N(445,0,.105,.42,'firm'),N(330,.12,.13,.44,'firm')],.30,.55),
  'greeting.wav':render([N(660,0,.09,.32),N(880,.085,.13,.4)],.27,.56),
  'finish.wav':render([N(660,0,.10,.32),N(880,.09,.15,.42)],.29,.58),
  'perfect.wav':render([N(785,0,.095,.3),N(990,.085,.11,.34),N(1320,.175,.18,.44)],.42,.58)
};
await fs.mkdir(OUT,{recursive:true});
for(const [name,buf] of Object.entries(files)){await fs.writeFile(path.join(OUT,name),buf);console.log(name,buf.length,'bytes')}
console.log('TENKA exam SFX generated:',Object.keys(files).length,'WAV files');
