const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
for(const file of ['data.js','content-pack-v1.js','content-pack-v2.js','content-pack-v3.js','content-pack-v4.js','content-pack-v5.js','content-pack-v6.js','content-pack-v7.js','content-pack-v8.js','content-pack-v9.js','content-pack-v10.js','content-pack-v11.js','content-pack-v12.js','content-pack-v13.js','content-pack-v14.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
}
const D=c.TENKA_DATA;
assert(D&&D.jlpt&&D.jlpt.N5,'TENKA N5 data missing');
const all=D.jlpt.N5.grammar;
assert(all.length>=80,'Stage 8A-9.1 must raise N5 grammar coverage to at least 80 items');
assert(new Set(all.map(x=>x.id)).size===all.length,'N5 grammar ids must stay unique');
const items=all.filter(x=>/^n5-g-(7[6-9]|80)$/.test(x.id));
assert(items.length===5,'Stage 8A-9.1 must contain exactly grammar 76-80');
for(const item of items){
  assert(item.title&&item.meaning&&item.pattern&&item.explanation,'missing grammar core field '+item.id);
  assert(item.usage&&item.whenToUse&&item.watchOut&&item.commonMistake,'missing contextual guidance '+item.id);
  assert(item.example&&item.exampleReading&&item.exampleMeaning,'missing main example '+item.id);
  assert(item.extraExample&&item.extraExampleReading&&item.extraExampleMeaning,'missing extra example '+item.id);
  assert(!/\p{Script=Han}/u.test(item.exampleReading),'example reading must not contain kanji '+item.id);
  assert(!/\p{Script=Han}/u.test(item.extraExampleReading),'extra example reading must not contain kanji '+item.id);
  assert(item.contrast,'missing contrast '+item.id);
}
const byId=Object.fromEntries(items.map(x=>[x.id,x]));
function has(id,field,...parts){const v=String(byId[id]&&byId[id][field]||'');for(const p of parts)assert(v.includes(p),id+' '+field+' missing '+p)}
has('n5-g-76','watchOut','高いじゃない','ではありません');has('n5-g-76','contrast','～くない');
has('n5-g-77','commonMistake','じゃない','でした','じゃなかった');has('n5-g-77','contrast','じゃありませんでした');
has('n5-g-78','watchOut','学生だだろう');has('n5-g-78','contrast','でしょう');
has('n5-g-79','commonMistake','行かなくてはいけない','行かなくてもいい');has('n5-g-79','extraExample','行かなくちゃ');
has('n5-g-80','commonMistake','コーヒーてください');has('n5-g-80','contrast','Vてください');
const index=fs.readFileSync('index.html','utf8');
assert(index.includes("load('./content-pack-v14.js','content-pack-v14.js')"),'runtime must load content-pack-v14.js');
assert(index.indexOf('content-pack-v13.js')<index.indexOf('content-pack-v14.js'),'content pack order v13<v14');
console.log('TENKA N5 closure remediation 76-80 passed:',items.map(x=>x.id).join(', '));
