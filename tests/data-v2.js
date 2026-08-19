const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
vm.runInContext(fs.readFileSync('data.js','utf8'),c,{filename:'data.js'});
vm.runInContext(fs.readFileSync('content-pack-v1.js','utf8'),c,{filename:'content-pack-v1.js'});
const D=c.TENKA_DATA;assert(D&&D.jlpt&&D.kaigo,'TENKA_DATA missing');
const ids=new Set();
for(const level of ['N5','N4','N3','N2','N1']){
 const x=D.jlpt[level];assert(x&&Array.isArray(x.kanji)&&Array.isArray(x.vocab)&&Array.isArray(x.grammar),level+' structure');
 for(const item of [...x.kanji,...x.vocab,...x.grammar]){assert(item.id,level+' item without id');assert(!ids.has(item.id),'duplicate id '+item.id);ids.add(item.id)}
 for(const item of [...x.kanji,...x.vocab]){assert(item.meaning,level+' card missing meaning '+item.id)}
}
assert(Array.isArray(D.kaigo.vocab)&&Array.isArray(D.kaigo.handoff),'Kaigo structure');
for(const item of [...D.kaigo.vocab,...D.kaigo.handoff]){assert(item.id,'Kaigo item without id');assert(!ids.has(item.id),'duplicate id '+item.id);ids.add(item.id)}
for(const h of D.kaigo.handoff){assert(Array.isArray(h.choices)&&Number.isInteger(h.answer)&&h.answer>=0&&h.answer<h.choices.length,'bad handoff '+h.id)}
console.log('TENKA data integrity passed:',ids.size,'unique ids');