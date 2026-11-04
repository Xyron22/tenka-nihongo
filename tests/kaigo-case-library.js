const assert=require('node:assert/strict'),vm=require('node:vm'),boot=require('./helpers/boot-runtime');
const sample=boot(),reports=sample.data.kaigo.houkoku,handoffs=sample.data.kaigo.handoff;
const done=items=>Object.fromEntries(items.map(h=>[h.id,'2026-01-01T00:00:00Z']));
const b=boot({storedProgress:{houkokuDone:done(reports),houkokuEssayDone:done(reports),handoffDone:done(handoffs),reviews:{'k-v-12':{rating:'good',due:'2030-01-01T00:00:00Z'}},best:{'KAIGO-kaigo':90}}});
const progress=JSON.stringify(b.state.progress),content=JSON.stringify(b.data);
const modes=[
 {mode:'report',items:reports,session:'houkokuSession',view:'houkoku',finish:()=>b.context.finishHoukoku()},
 {mode:'writing',items:reports,session:'houkokuEssaySession',view:'houkokuEssay',finish:()=>b.context.finishHoukokuEssay(false)},
 {mode:'handoff',items:handoffs,session:'handoffSession',view:'handoff',finish:()=>b.context.finishHandoff()}
];
function group(mode){return b.html.match(new RegExp(`<details class="work-case-group" data-case-mode="${mode}">([\\s\\S]*?)</details>`))?.[1]}
let checked=0;
for(const mode of modes){
 b.context.go('kaigo');const html=group(mode.mode);assert(html,mode.mode+': visible menu chooser');
 assert(html.includes(`${mode.items.length}/${mode.items.length} selesai`));
 const buttons=[...html.matchAll(/<button class="work-case-option" data-case-id="([^"]+)" aria-label="[^"]+" onclick="([^"]+)">/g)];
 assert.equal(buttons.length,mode.items.length,'each case is reachable from a menu button');
 for(let i=0;i<buttons.length;i++){
  assert.equal(buttons[i][1],mode.items[i].id);vm.runInContext(buttons[i][2],b.context);
  assert.equal(b.state.view,mode.view);assert.equal(b.state[mode.session].caseIndex,i,'selected completed case opens rather than the first case');
  assert(b.html.includes(`Kasus ${i+1}/${mode.items.length}`));
  mode.finish();assert.equal(b.state.view,'kaigo');assert.equal(b.state[mode.session],null,'selection does not chain or repeat');checked++;
 }
}
for(const open of ['openHoukokuPractice','openHoukokuEssay','openHandoffPractice']){b.context[open]();assert.equal(b.state.view,'kaigo','default all-complete action does not restart');}
assert.equal(JSON.stringify(b.state.progress),progress,'opening/revisiting a case does not alter stored mastery, SRS or scores');
assert.equal(JSON.stringify(b.data),content);assert.equal(b.events.length,0,'choosing cases is audio-neutral');
const partial=boot({storedProgress:{houkokuDone:{'r-13':'saved'},handoffDone:{'h-26':'saved','retired-case':'saved'}}});partial.context.go('kaigo');
assert(partial.html.includes('1/20 selesai')&&partial.html.includes('1/26 selesai'),'counts use valid IDs and the correct practice mode');
assert(partial.html.includes('data-case-id="r-13"')&&partial.html.includes('しょくさつ の まいすう ぶそく'),'report titles retain kana');
partial.data.kaigo.houkoku=[];partial.data.kaigo.handoff=[];partial.context.go('kaigo');assert(!partial.html.includes('class="work-case-group"'),'empty libraries do not show dead selections');
console.log(`Kaigo case library: ${checked} menu selections; completed-case access, partial counts, finite exit and unchanged progress passed.`);
