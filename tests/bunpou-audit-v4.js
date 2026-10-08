const fs=require('fs'),vm=require('vm');
function assert(x,m){if(!x)throw new Error(m)}
const c={window:null};c.window=c;vm.createContext(c);
for(const file of ['data.js','content-pack-v1.js','content-pack-v2.js','content-pack-v3.js','content-pack-v4.js','content-pack-v5.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),c,{filename:file});
}
const all=c.TENKA_DATA.jlpt.N5.grammar;
assert(all.length>=35,'Stage 8A-8.2 must raise N5 grammar coverage to at least 35 items');
assert(new Set(all.map(x=>x.id)).size===all.length,'N5 grammar ids must stay unique');
const items=all.filter(x=>/^n5-g-(1[1-9]|2[0-9]|3[0-5])$/.test(x.id));
assert(items.length===25,'Stage 8A-7.3 through 8A-8.2 must cover grammar 11-35');
for(const item of items){
  assert(item.usage&&item.whenToUse&&item.watchOut&&item.commonMistake,'missing contextual guidance '+item.id);
  assert(item.example&&item.exampleReading&&item.exampleMeaning,'missing main example '+item.id);
  assert(item.extraExample&&item.extraExampleReading&&item.extraExampleMeaning,'missing extra example '+item.id);
  assert(!/\p{Script=Han}/u.test(item.exampleReading),'example reading must not contain kanji '+item.id);
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
assert(byId['n5-g-26'].watchOut.includes('寒いだ'),'です／だ must warn against だ after i-adjectives');
assert(byId['n5-g-27'].watchOut.includes('は')&&byId['n5-g-27'].watchOut.includes('が'),'は must distinguish topic from subject focus');
assert(byId['n5-g-28'].commonMistake.includes('誰が来ますか'),'が must include focused-subject example');
assert(byId['n5-g-29'].watchOut.includes('日本語が好きです')&&byId['n5-g-29'].watchOut.includes('電車に乗ります'),'を must warn that Japanese patterns can use other particles');
assert(byId['n5-g-30'].watchOut.includes('病院で働きます')&&byId['n5-g-30'].watchOut.includes('病院にいます'),'に must distinguish action location from existence');
assert(byId['n5-g-31'].watchOut.includes('病院で働きます')&&byId['n5-g-31'].watchOut.includes('病院にいます'),'で must distinguish action location from existence');
assert(byId['n5-g-32'].watchOut.includes('日本語の先生'),'の must explain relationships beyond possession');
assert(byId['n5-g-33'].watchOut.includes('plain')&&byId['n5-g-33'].example.includes('か'),'か must explain polite question use and casual omission');
assert(byId['n5-g-34'].watchOut.includes('にも')&&byId['n5-g-34'].watchOut.includes('でも'),'も must explain replacement vs particle combination');
assert(byId['n5-g-35'].watchOut.includes('や')&&byId['n5-g-35'].extraExample.includes('友だちと'),'と must cover list and companion uses');
const index=fs.readFileSync('index.html','utf8');
assert(index.includes("load('./content-pack-v5.js','content-pack-v5.js')"),'runtime must load content-pack-v5.js');
assert(index.indexOf('content-pack-v4.js')<index.indexOf('content-pack-v5.js'),'content-pack-v5 must load after audit overlay v4');
console.log('TENKA N5 Bunpou audit/coverage 11-35 passed:',items.map(x=>x.id).join(', '));