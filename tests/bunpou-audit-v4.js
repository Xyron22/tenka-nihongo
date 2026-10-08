const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
for(const file of ['data.js','content-pack-v1.js','content-pack-v2.js','content-pack-v3.js','content-pack-v4.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
}
const items=c.TENKA_DATA.jlpt.N5.grammar.filter(x=>/^n5-g-(1[1-9]|2[0-5])$/.test(x.id));
assert(items.length===15,'Stage 8A-7.3/7.4/7.5 must audit exactly grammar 11-25');
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
assert(byId['n5-g-16'].commonMistake.includes('行かなくてもいいです'),'prohibition pattern must distinguish no-need form');
assert(byId['n5-g-17'].watchOut.includes('来なくてもいいです'),'no-need pattern must explain it is not a prohibition');
assert(byId['n5-g-18'].watchOut.includes('～ないと')&&byId['n5-g-18'].watchOut.includes('～なきゃ'),'obligation pattern must explain casual shortened forms');
assert(byId['n5-g-19'].watchOut.includes('AよりBのほうが'),'comparison pattern must explain direction of comparison');
assert(byId['n5-g-20'].contrast.includes('dua'),'superlative pattern must contrast two-item comparison');
assert(byId['n5-g-21'].watchOut.includes('～たいです')&&byId['n5-g-21'].commonMistake.includes('がほしいです'),'～がほしいです must distinguish noun desire from action desire');
assert(byId['n5-g-22'].watchOut.includes('静かなとき')&&byId['n5-g-22'].watchOut.includes('学生のとき'),'～とき must explain na-adjective and noun attachment');
assert(byId['n5-g-23'].watchOut.includes('だでしょう'),'～でしょう must warn against basic だでしょう attachment');
assert(byId['n5-g-24'].watchOut.includes('まだ行きません')&&byId['n5-g-24'].contrast.includes('もう～ました'),'まだ～ていません must explain incomplete action and contrast with もう');
assert(byId['n5-g-25'].watchOut.includes('もう食べます')&&byId['n5-g-25'].contrast.includes('まだ～ていません'),'もう～ました must explain completed action and contrast with まだ');
console.log('TENKA N5 Bunpou audit 11-25 passed:',items.map(x=>x.id).join(', '));