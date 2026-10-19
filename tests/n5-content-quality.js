const assert=require('node:assert/strict');
const {data:D,files}=require('./helpers/load-content')();
const fields=['title','meaning','pattern','explanation','usage','whenToUse','watchOut','commonMistake','example','exampleReading','exampleMeaning','extraExample','extraExampleReading','extraExampleMeaning','contrast'];
const ids=new Set();
for(const level of Object.values(D.jlpt))for(const item of [...level.grammar,...level.vocab,...level.kanji]){
  assert(!ids.has(item.id),`duplicate ID: ${item.id}`);ids.add(item.id);
}
for(const g of D.jlpt.N5.grammar){
  for(const field of fields)assert.equal(typeof g[field],'string',`${g.id}: ${field}`);
  for(const field of fields)assert(g[field].trim(),`${g.id}: empty ${field}`);
  for(const field of ['exampleReading','extraExampleReading'])assert(!/\p{Script=Han}/u.test(g[field]),`${g.id}: kana reading required`);
}
assert(files.indexOf('content-pack-v15.js')>files.indexOf('content-pack-v14.js'),'new pack must run after baseline');
const g=D.jlpt.N5.grammar.find(g=>g.id==='n5-g-87');
assert(g.pattern.includes('もらう')&&g.watchOut.includes('N4'),'giving lesson must limit scope to objects');
assert(D.jlpt.N5.grammar.find(g=>g.id==='n5-g-86').contrast.includes('ごろ'),'duration vs clock-time distinction');
console.log(`N5 current runtime quality: ${D.jlpt.N5.grammar.length} complete Bunpou lessons; IDs unique across all JLPT levels.`);
