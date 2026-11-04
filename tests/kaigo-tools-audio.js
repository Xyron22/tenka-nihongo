const assert=require('node:assert/strict'),vm=require('node:vm');
const boot=require('./helpers/boot-runtime');
const sample=boot().data.kaigo.tools,due=Object.fromEntries(sample.map(t=>[t.id,{rating:'good',due:'2000-01-01T00:00:00Z'}]));
const b=boot({storedProgress:{reviews:{...due,'k-v-12':{rating:'good',due:'2030-01-01T00:00:00Z'}},houkokuDone:{'r-13':'saved'},handoffDone:{'h-26':'saved'}}});
const tools=b.data.kaigo.tools,content=JSON.stringify(b.data);let callbacks=0;
const detailCalls=html=>[...html.matchAll(/class="tool-(?:name|inline)-audio" onclick="([^"]+)"/g)].map(m=>m[1]);
function play(call,expected){const progress=JSON.stringify(b.state.progress),events=b.events.length;vm.runInContext(call,b.context);assert.equal(b.spoken.at(-1),expected);assert.equal(JSON.stringify(b.state.progress),progress,'pronunciation cannot change SRS, mastery or scores');assert.equal(b.events.length,events);callbacks++;}
for(const t of tools){
 b.context.openMedicalTool(t.id);assert(b.html.includes(`src="${t.image}"`));
 const calls=detailCalls(b.html);assert.equal(calls.length,3);
 [t.reading,t.functionReading,t.exampleReading].forEach((text,i)=>play(calls[i],text));
}
for(const opener of ['openMedicalToolFlash','openMedicalToolReview']){
 b.context[opener]();assert.equal(b.state.cards.length,tools.length);
 for(let i=0;i<b.state.cards.length;i++){
  b.state.cardIndex=i;b.context.TENKA_CORE.render();const c=b.state.cards[i];assert.equal(c._kind,'tool');assert(b.html.includes(`src="${c.image}"`));
  const call=b.html.match(/class="icon-btn session-audio" onclick="([^"]+)"/)?.[1];assert(call);play(call,c.reading);
 }
}
b.context.openReview('KAIGO');b.state.cardIndex=b.state.cards.findIndex(c=>c.id==='tool-04');assert(b.state.cardIndex>=0);b.context.TENKA_CORE.render();play(b.html.match(/class="icon-btn session-audio" onclick="([^"]+)"/)[1],tools[3].reading);
b.context.openMedicalTool('tool-04');b.state.settings.voice=false;const before=b.spoken.length;vm.runInContext(detailCalls(b.html)[1],b.context);assert.equal(b.spoken.length,before,'the existing voice setting is respected');b.state.settings.voice=true;
assert.equal(JSON.stringify(b.data),content,'audio integration cannot alter lessons, images or answer keys');
b.context.openMedicalToolFlash();b.context.rateCard('good');
const restored=boot({storedProgress:JSON.parse(b.storage['tenka-progress'])});assert.equal(restored.state.progress.reviews[tools[0].id].rating,'good');assert(restored.state.progress.reviews['k-v-12']);assert.equal(restored.state.progress.houkokuDone['r-13'],'saved');assert.equal(restored.state.progress.handoffDone['h-26'],'saved');assert.equal(restored.state.progress.total,0);
const fallback=boot(),t=fallback.data.kaigo.tools[0];delete t.reading;delete t.functionReading;delete t.exampleReading;fallback.context.openMedicalTool(t.id);
for(const [i,text] of [t.term,t.functionJP,t.example].entries()){vm.runInContext(detailCalls(fallback.html)[i],fallback.context);assert.equal(fallback.spoken.at(-1),text,'older content without kana retains its Japanese fallback');}
fallback.context.openMedicalToolFlash();vm.runInContext(fallback.html.match(/class="icon-btn session-audio" onclick="([^"]+)"/)[1],fallback.context);assert.equal(fallback.spoken.at(-1),t.term);
console.log(`Kaigo tool audio: ${tools.length} illustrated lessons / ${callbacks} detail, flash and review callbacks; authored kana, legacy text fallback, voice setting and saved progress passed.`);
