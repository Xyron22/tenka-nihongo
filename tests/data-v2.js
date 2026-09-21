const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
vm.runInContext(fs.readFileSync('data.js','utf8'),c,{filename:'data.js'});
vm.runInContext(fs.readFileSync('content-pack-v1.js','utf8'),c,{filename:'content-pack-v1.js'});
vm.runInContext(fs.readFileSync('content-pack-v2.js','utf8'),c,{filename:'content-pack-v2.js'});
vm.runInContext(fs.readFileSync('content-pack-v3.js','utf8'),c,{filename:'content-pack-v3.js'});
vm.runInContext(fs.readFileSync('houkoku-pack-v1.js','utf8'),c,{filename:'houkoku-pack-v1.js'});
vm.runInContext(fs.readFileSync('houkoku-pack-v2.js','utf8'),c,{filename:'houkoku-pack-v2.js'});
const D=c.TENKA_DATA;assert(D&&D.jlpt&&D.kaigo,'TENKA_DATA missing');
const KAIGO_EXAM_AREAS=new Set(['人間の尊厳と自立','介護の基本','社会の理解','人間関係とコミュニケーション','コミュニケーション技術','生活支援技術','こころとからだのしくみ','発達と老化の理解','認知症の理解','障害の理解','医療的ケア','介護過程','総合問題']);
const ids=new Set();
for(const level of ['N5','N4','N3','N2','N1']){
 const x=D.jlpt[level];assert(x&&Array.isArray(x.kanji)&&Array.isArray(x.vocab)&&Array.isArray(x.grammar),level+' structure');
 for(const item of [...x.kanji,...x.vocab,...x.grammar]){assert(item.id,level+' item without id');assert(!ids.has(item.id),'duplicate id '+item.id);ids.add(item.id)}
 for(const item of [...x.kanji,...x.vocab]){assert(item.meaning,level+' card missing meaning '+item.id)}
}
assert(Array.isArray(D.kaigo.vocab)&&Array.isArray(D.kaigo.handoff)&&Array.isArray(D.kaigo.houkoku),'Kaigo structure');
for(const item of [...D.kaigo.vocab,...D.kaigo.handoff,...D.kaigo.houkoku]){assert(item.id,'Kaigo item without id');assert(!ids.has(item.id),'duplicate id '+item.id);ids.add(item.id)}
for(const item of D.kaigo.vocab){
 assert(item.term&&item.reading&&item.meaning&&item.category,'Kaigo vocab missing core fields '+item.id);
 assert(item.example&&item.exampleMeaning,'Kaigo vocab missing example '+item.id);
 if(item.examArea)assert(KAIGO_EXAM_AREAS.has(item.examArea),'Unknown official 介護福祉士 subject mapping '+item.examArea+' on '+item.id);
}
for(const h of D.kaigo.handoff){
 assert(h.text&&h.reading&&h.meaning&&h.question,'handoff missing core fields '+h.id);
 if(h.examArea)assert(KAIGO_EXAM_AREAS.has(h.examArea),'Unknown official handoff examArea '+h.examArea+' on '+h.id);
 assert(Array.isArray(h.choices)&&Number.isInteger(h.answer)&&h.answer>=0&&h.answer<h.choices.length,'bad handoff '+h.id);
 assert(h.choices.length>=2&&new Set(h.choices).size===h.choices.length,'handoff choices must be unique '+h.id);
 assert(Array.isArray(h.segments)&&h.segments.length>=2,'handoff must be sentence-segmented '+h.id);
 for(const seg of h.segments){
  assert(seg.text&&seg.text.endsWith('。'),'handoff segment text '+h.id);
  assert(seg.reading&&seg.meaning,'handoff segment reading/meaning '+h.id);
 }
 assert(h.text===h.segments.map(x=>x.text).join(''),'handoff text must equal segment join '+h.id);
}
assert(D.jlpt.N5.kanji.length>=30,'N5 kanji Stage 2A incomplete');
assert(D.jlpt.N5.vocab.length>=45,'N5 vocab Stage 2A incomplete');
assert(D.jlpt.N5.grammar.length>=15,'N5 grammar Stage 2A incomplete');
assert(D.kaigo.vocab.length>=52,'Kaigo vocab Stage 2A incomplete');
assert(D.kaigo.handoff.length>=12,'Kaigo handoff Stage 2A incomplete');
assert(D.kaigo.houkoku.length>=12,'Houkoku Pack 2 incomplete');
for(const h of D.kaigo.houkoku){
 assert(h.title&&h.titleReading&&h.situation&&h.reading&&h.meaning&&h.note,'Houkoku missing core fields '+h.id);
 assert(Array.isArray(h.pieces)&&h.pieces.length>=3,'Houkoku needs at least 3 puzzle pieces '+h.id);
 for(const piece of h.pieces){assert(piece&&piece.text&&piece.reading&&piece.meaning,'Houkoku piece needs text/reading/meaning '+h.id)}
 assert(new Set(h.pieces.map(x=>x.text)).size===h.pieces.length,'Houkoku pieces must be unique '+h.id);
 assert(KAIGO_EXAM_AREAS.has(h.examArea),'Unknown official Houkoku examArea '+h.examArea+' on '+h.id);
}

for(const item of D.kaigo.vocab.filter(x=>/^k-v-(3[3-9]|4[0-9]|5[0-2])$/.test(x.id))){
 assert(item.examArea,'Kaigo certification foundation item missing examArea '+item.id);
}
for(const h of D.kaigo.handoff.filter(x=>/^h-(11|12)$/.test(x.id))){
 assert(h.examArea,'Stage 2A handoff missing examArea '+h.id);
}
console.log('TENKA data integrity passed:',ids.size,'unique ids');