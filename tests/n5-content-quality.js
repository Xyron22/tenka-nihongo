const assert=require('node:assert/strict');
const coverage=require('../docs/n5-bunpou-coverage.json');
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
for(const [id,field,text] of [
 ['n5-g-16','watchOut','飲んじゃいけない'],['n5-g-79','pattern','なくてはならない'],
 ['n5-g-46','watchOut','godan'],['n5-g-50','explanation','ぐ→いで'],
 ['n5-g-89','watchOut','なの'],['n5-g-91','watchOut',' kalimat mandiri'],
 ['n5-g-92','contrast','ないでください'],['n5-g-93','watchOut','formal'],
 ['n5-g-95','watchOut','誰でも'],['n5-g-96','whenToUse','もう食べません']
])assert(D.jlpt.N5.grammar.find(g=>g.id===id)?.[field].includes(text),`${id}: missing audited distinction`);
assert(coverage.entries.some(e=>e.source==='bunpro')&&coverage.entries.some(e=>e.source==='jlptsensei'),'two reference inventories required');
for(const row of coverage.entries){
  assert(['covered','deferred'].includes(row.status),`unresolved topic ${row.topic}`);
  if(row.status==='covered'){
    assert(row.lessons.length,`unmapped topic ${row.topic}`);
    for(const id of row.lessons)assert(D.jlpt.N5.grammar.some(g=>g.id===id),`missing coverage target ${id}`);
  }else assert(row.reason&&row.lessons.length===0,`defer with reason: ${row.topic}`);
}
console.log(`N5 current runtime quality: ${D.jlpt.N5.grammar.length} complete Bunpou lessons; IDs unique across all JLPT levels.`);
