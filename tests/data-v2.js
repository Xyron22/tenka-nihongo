const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
vm.runInContext(fs.readFileSync('data.js','utf8'),c,{filename:'data.js'});
vm.runInContext(fs.readFileSync('content-pack-v1.js','utf8'),c,{filename:'content-pack-v1.js'});
vm.runInContext(fs.readFileSync('content-pack-v2.js','utf8'),c,{filename:'content-pack-v2.js'});
const D=c.TENKA_DATA;assert(D&&D.jlpt&&D.kaigo,'TENKA_DATA missing');
const KAIGO_EXAM_AREAS=new Set(['人間の尊厳と自立','介護の基本','社会の理解','人間関係とコミュニケーション','コミュニケーション技術','生活支援技術','こころとからだのしくみ','発達と老化の理解','認知症の理解','障害の理解','医療的ケア','介護過程','総合問題']);
const ids=new Set();
for(const level of ['N5','N4','N3','N2','N1']){
 const x=D.jlpt[level];assert(x&&Array.isArray(x.kanji)&&Array.isArray(x.vocab)&&Array.isArray(x.grammar),level+' structure');
 for(const item of [...x.kanji,...x.vocab,...x.grammar]){assert(item.id,level+' item without id');assert(!ids.has(item.id),'duplicate id '+item.id);ids.add(item.id)}
 for(const item of [...x.kanji,...x.vocab]){assert(item.meaning,level+' card missing meaning '+item.id)}
}
assert(Array.isArray(D.kaigo.vocab)&&Array.isArray(D.kaigo.handoff),'Kaigo structure');
for(const item of [...D.kaigo.vocab,...D.kaigo.handoff]){assert(item.id,'Kaigo item without id');assert(!ids.has(item.id),'duplicate id '+item.id);ids.add(item.id)}
for(const item of D.kaigo.vocab){
 assert(item.term&&item.reading&&item.meaning&&item.category,'Kaigo vocab missing core fields '+item.id);
 assert(item.example&&item.exampleMeaning,'Kaigo vocab missing example '+item.id);
 if(item.examArea)assert(KAIGO_EXAM_AREAS.has(item.examArea),'Unknown official 介護福祉士 subject mapping '+item.examArea+' on '+item.id);
}
for(const h of D.kaigo.handoff){
 assert(h.text&&h.reading&&h.meaning&&h.question,'handoff missing core fields '+h.id);
 assert(Array.isArray(h.choices)&&Number.isInteger(h.answer)&&h.answer>=0&&h.answer<h.choices.length,'bad handoff '+h.id);
 assert(h.choices.length>=2&&new Set(h.choices).size===h.choices.length,'handoff choices must be unique '+h.id);
 assert(Array.isArray(h.segments)&&h.segments.length>=2,'handoff must be sentence-segmented '+h.id);
 for(const seg of h.segments){
  assert(seg.text&&seg.text.endsWith('。'),'handoff segment text '+h.id);
  assert(seg.reading&&seg.meaning,'handoff segment reading/meaning '+h.id);
 }
 assert(h.text===h.segments.map(x=>x.text).join(''),'handoff text must equal segment join '+h.id);
}
assert(D.jlpt.N5.kanji.length>=25,'N5 kanji batch 2 incomplete');
assert(D.jlpt.N5.vocab.length>=35,'N5 vocab batch 2 incomplete');
assert(D.jlpt.N5.grammar.length>=12,'N5 grammar batch 2 incomplete');
assert(D.kaigo.vocab.length>=44,'Kaigo vocab batch 2 incomplete');
assert(D.kaigo.handoff.length>=10,'Kaigo handoff batch 2 incomplete');
for(const item of D.kaigo.vocab.filter(x=>/^k-v-(3[3-9]|4[0-4])$/.test(x.id))){
 assert(item.examArea,'Kaigo certification foundation item missing examArea '+item.id);
}
console.log('TENKA data integrity passed:',ids.size,'unique ids');