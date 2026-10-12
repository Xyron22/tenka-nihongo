const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
for(const file of ['data.js','content-pack-v1.js','content-pack-v2.js','content-pack-v3.js','content-pack-v4.js','content-pack-v5.js','content-pack-v6.js','content-pack-v7.js','content-pack-v8.js','content-pack-v9.js','content-pack-v10.js','content-pack-v11.js','content-pack-v12.js','content-pack-v13.js','houkoku-pack-v1.js','houkoku-pack-v2.js','tools-pack-v1.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
}
const D=c.TENKA_DATA;
assert(D&&D.jlpt&&D.jlpt.N5,'TENKA N5 data missing');
const all=D.jlpt.N5.grammar;
assert(all.length>=75,'Stage 8A-8.10 must raise N5 grammar coverage to at least 75 items');
assert(new Set(all.map(x=>x.id)).size===all.length,'N5 grammar ids must stay unique');
const items=all.filter(x=>/^n5-g-7[1-5]$/.test(x.id));
assert(items.length===5,'Stage 8A-8.10 must contain exactly grammar 71-75');
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
has('n5-g-71','commonMistake','彼は明日行く言いました');has('n5-g-71','watchOut','kutipan');
has('n5-g-72','watchOut','verba terakhir');has('n5-g-72','contrast','～てから');
has('n5-g-73','commonMistake','きれいで');has('n5-g-73','watchOut','静かくて');
has('n5-g-74','commonMistake','コーヒーにします');has('n5-g-74','contrast','～になる');
has('n5-g-75','watchOut','subjek');has('n5-g-75','contrast','～けど');
const index=fs.readFileSync('index.html','utf8');
assert(index.includes("load('./content-pack-v13.js','content-pack-v13.js')"),'runtime must load content-pack-v13.js');
assert(index.indexOf('content-pack-v12.js')<index.indexOf('content-pack-v13.js'),'content pack order v12<v13');
const globalIds=[];
for(const level of ['N5','N4','N3','N2','N1'])for(const kind of ['kanji','vocab','grammar'])for(const x of D.jlpt[level][kind])globalIds.push(x.id);
for(const kind of ['vocab','handoff','houkoku','tools'])for(const x of (D.kaigo[kind]||[]))globalIds.push(x.id);
assert(new Set(globalIds).size===globalIds.length,'global content ids must stay unique after grammar 75');
console.log('TENKA N5 final-gap grammar 71-75 passed:',items.map(x=>x.id).join(', '));
console.log('TENKA staged global id audit passed:',globalIds.length,'unique ids');
