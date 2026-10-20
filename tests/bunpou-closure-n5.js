const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
const packs=['data.js',...Array.from({length:13},(_,i)=>`content-pack-v${i+1}.js`)];
for(const file of packs)vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
const D=c.TENKA_DATA;assert(D&&D.jlpt&&D.jlpt.N5,'TENKA N5 data missing');
const grammar=D.jlpt.N5.grammar;
assert(grammar.length===75,'N5 Bunpou closure snapshot must contain exactly 75 grammar items before remediation');
const expectedIds=Array.from({length:75},(_,i)=>`n5-g-${String(i+1).padStart(2,'0')}`);
assert(grammar.map(x=>x.id).join('|')===expectedIds.join('|'),'N5 Bunpou roadmap IDs must stay contiguous and ordered 01-75');
assert(new Set(grammar.map(x=>x.id)).size===grammar.length,'N5 Bunpou IDs must stay unique');
assert(new Set(grammar.map(x=>x.title)).size===grammar.length,'N5 Bunpou titles must stay unique');
const required=['title','meaning','pattern','explanation','usage','whenToUse','watchOut','commonMistake','example','exampleReading','exampleMeaning','extraExample','extraExampleReading','extraExampleMeaning','contrast'];
for(const g of grammar){
  for(const field of required)assert(String(g[field]||'').trim(),`${g.id} missing ${field}`);
  assert(!/\p{Script=Han}/u.test(g.exampleReading),`${g.id} exampleReading must not contain kanji`);
  assert(!/\p{Script=Han}/u.test(g.extraExampleReading),`${g.id} extraExampleReading must not contain kanji`);
}
const index=fs.readFileSync('index.html','utf8');
for(let n=1;n<=13;n++)assert(index.includes(`load('./content-pack-v${n}.js','content-pack-v${n}.js')`),`runtime must load content-pack-v${n}.js`);
for(let n=1;n<13;n++)assert(index.indexOf(`content-pack-v${n}.js`)<index.indexOf(`content-pack-v${n+1}.js`),`runtime content pack order v${n}<v${n+1}`);
const app=fs.readFileSync('app-v2.js','utf8');
assert(app.includes("const arr=D.jlpt[state.level].grammar||[]"),'Bunpou roadmap must render the selected level grammar array');
assert(app.includes("const src=(D.jlpt[level].grammar||[]).slice()"),'Bunpou quiz must source the whole selected level grammar array');
assert(app.includes("shuffle(src).slice(0,Math.min(10,src.length))"),'Bunpou quiz may sample a session only after shuffling the full grammar array');
assert(app.includes("markDaily('grammar',id)"),'Bunpou completion must remain connected to Daily progress');
const meanings=new Set(grammar.map(x=>x.meaning));
assert(meanings.size>=60,'Bunpou quiz needs a sufficiently diverse meaning pool for distractors');
console.log('TENKA N5 Bunpou closure structural audit passed:',grammar.length,'ordered grammar items');
console.log('Historical 75-item baseline preserved; current N5 closure is checked by the runtime content, coverage and curriculum closure gates.');
