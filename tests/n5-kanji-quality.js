const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {data:D,context}=require('./helpers/load-content')();
const manifest=require('../docs/n5-kanji-verified.json');
const cards=D.jlpt.N5.kanji,chars=new Set();
for(const c of cards){
  assert(!chars.has(c.kanji),`duplicate character ${c.kanji}`);chars.add(c.kanji);
  for(const key of ['kanji','reading','meaning','example','exampleReading','exampleMeaning','mnemonic'])assert(c[key]?.trim(),`${c.id}: missing ${key}`);
  assert(c.example.includes(c.kanji),`${c.id}: example must contain target`);
  assert(!/\p{Script=Han}/u.test(c.exampleReading),`${c.id}: kana example required`);
  assert(c.onyomi.length+c.kunyomi.length>0,`${c.id}: reading selection`);
  for(const reading of [...c.onyomi,...c.kunyomi])assert(/^[\p{Script=Hiragana}\p{Script=Katakana}ー]+$/u.test(reading),`${c.id}: reading script`);
  const verified=manifest.metadata[c.kanji];assert(verified,`${c.id}: unverified character`);
  assert.equal(c.bushu.number,verified.radicalNumber,`${c.id}: radical index`);
  for(const key of ['symbol','name','meaning'])assert(c.bushu[key]?.trim(),`${c.id}: bushu ${key}`);
  assert(c.components.length&&c.components.every(x=>x.trim()),`${c.id}: visual components`);
  assert.equal(c.mnemonicKind,'memory-aid',`${c.id}: mnemonic must not claim etymology`);
  assert(c.words.length&&c.words.every(w=>w.term.includes(c.kanji)&&w.reading&&w.meaning&&!/\p{Script=Han}/u.test(w.reading)),`${c.id}: concrete word with kana and meaning`);
  assert.equal(c.strokeCount,verified.strokeCount,`${c.id}: verified stroke count`);
  assert.equal(c.strokes.length,c.strokeCount,`${c.id}: complete stroke order`);
  assert.equal(c.strokeViewBox,'0 0 109 109',`${c.id}: preserve source coordinates`);
  assert.equal(c.scope,manifest.retainedSupport.includes(c.kanji)?'legacy-support':'cross-referenced-core');
}
// Verify every prepared path dataset, including characters in the next small checkpoint.
for(const [char,meta] of Object.entries(manifest.metadata)){
  const strokes=context.TENKA_N5_STROKES[char];assert(strokes,`missing source paths ${char}`);
  assert.equal(strokes.paths.length,meta.strokeCount,`path count ${char}`);
  assert(strokes.paths.every(p=>/^M/i.test(p)&&!/undefined|NaN/.test(p)),`invalid path ${char}`);
}
// Preserve original progress identities even when their content is enriched.
const baseline={window:null};baseline.window=baseline;vm.createContext(baseline);
for(const file of ['data.js',...Array.from({length:14},(_,i)=>`content-pack-v${i+1}.js`)]){
  const path=file==='content-pack-v1.js'?'content-pack-v1.js':file;
  if(fs.existsSync(path))vm.runInContext(fs.readFileSync(path,'utf8'),baseline);
}
for(const old of baseline.TENKA_DATA.jlpt.N5.kanji)assert(cards.some(c=>c.id===old.id&&c.kanji===old.kanji),`lost progress ID ${old.id}`);
if(manifest.contentClosed)for(const char of [...manifest.expectedCore,...manifest.retainedSupport])assert(chars.has(char),`uncovered target ${char}`);
console.log(`N5 Kanji quality: ${cards.length} lessons; verified radicals, readings, memory aids and stroke paths.`);
