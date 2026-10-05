const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
for(const file of ['data.js','content-pack-v1.js','content-pack-v2.js','content-pack-v3.js','content-pack-v4.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
}
const items=c.TENKA_DATA.jlpt.N5.grammar.filter(x=>/^n5-g-(11|12|13|14|15)$/.test(x.id));
assert(items.length===5,'Stage 8A-7.3 must audit exactly grammar 11-15');
for(const item of items){
  assert(item.usage&&item.whenToUse&&item.watchOut&&item.commonMistake,'missing contextual guidance '+item.id);
  assert(item.extraExample&&item.extraExampleReading&&item.extraExampleMeaning,'missing extra example '+item.id);
  assert(!/\p{Script=Han}/u.test(item.extraExampleReading),'extra example reading must not contain kanji '+item.id);
  assert(item.contrast,'missing contrast '+item.id);
}
const byId=Object.fromEntries(items.map(x=>[x.id,x]));
assert(byId['n5-g-11'].watchOut.includes('寝た前に'),'～前に warning must cover wrong verb form');
assert(byId['n5-g-12'].watchOut.includes('～たりしました'),'～たり～たりします must explain tense at sentence ending');
assert(byId['n5-g-13'].watchOut.includes('あります／います'),'existence pattern warning missing');
assert(byId['n5-g-14'].watchOut.includes('を'),'～が好きです must warn against basic を misuse');
assert(byId['n5-g-15'].watchOut.includes('食べるに行きます'),'purpose に行きます must warn against dictionary-form attachment');
console.log('TENKA N5 Bunpou audit 11-15 passed:',items.map(x=>x.id).join(', '));