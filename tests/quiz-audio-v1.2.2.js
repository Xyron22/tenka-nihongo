const fs=require('fs');
const vm=require('vm');

const sources={
  data:fs.readFileSync('data.js','utf8'),
  content:fs.readFileSync('content-pack-v1.js','utf8'),
  app:fs.readFileSync('app.js','utf8'),
  hooks:fs.readFileSync('v1-hooks.js','utf8'),
  audio:fs.readFileSync('audio-patch.js','utf8'),
  guard:fs.readFileSync('audio-guard-v1.2.2.js','utf8')
};

function sleep(ms){return new Promise(r=>setTimeout(r,ms))}
function assert(x,m){if(!x)throw new Error(m)}

function boot(){
  let html='';
  const spoken=[];
  const appEl={get innerHTML(){return html},set innerHTML(v){html=v},textContent:'',querySelectorAll(){return[]}};
  const toast={textContent:'',classList:{add(){},remove(){}}};
  const context={
    console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,
    setTimeout,clearTimeout,setInterval,clearInterval,
    localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)},removeItem(k){delete this.data[k]}},
    document:{readyState:'complete',querySelector(s){if(s==='#app')return appEl;if(s==='#toast')return toast;return null},querySelectorAll(){return[]},addEventListener(){},createElement(){return{innerHTML:'',remove(){},querySelectorAll(){return[]}}}},
    navigator:{},scrollTo(){},confirm(){return false},
    speechSynthesis:{cancel(){},speak(u){spoken.push(String(u&&u.text||''))},getVoices(){return[]}},
    SpeechSynthesisUtterance:function(t){this.text=t||'';this.lang='';this.rate=1;this.pitch=1;this.volume=1},
    Audio:function(){this.volume=1;this.pause=()=>{};this.play=()=>Promise.resolve()},
    URL:{createObjectURL(){return'blob:test'},revokeObjectURL(){}},
    window:null
  };
  context.window=context;
  Object.defineProperty(context,'top',{value:{safariProtectedGlobal:true},configurable:false,writable:false,enumerable:true});
  vm.createContext(context);
  vm.runInContext(sources.data,context,{filename:'data.js'});
  vm.runInContext(sources.content,context,{filename:'content-pack-v1.js'});
  vm.runInContext(sources.app,context,{filename:'app.js'});
  vm.runInContext(sources.hooks,context,{filename:'v1-hooks.js'});
  vm.runInContext(sources.audio,context,{filename:'audio-patch.js'});
  vm.runInContext(sources.guard,context,{filename:'audio-guard-v1.2.2.js'});
  return{context,spoken};
}

function setQuiz(context,{length=2,index=0,combo=0,answer=0}){
  const items=Array.from({length},()=>({prompt:'聞く',reading:'きく',choices:['mendengar','besar'],answer}));
  const state=context.TENKA_CORE.state;
  state.view='quiz';
  state.returnView='level';
  state.quiz={items,i:index,score:0,type:'mix',combo,finished:false,saved:false};
  state.quizAnswered=false;
  return state;
}

async function normalCorrect(){
  const {context,spoken}=boot();
  await sleep(30);
  const state=setQuiz(context,{length:2,index:0,combo:0,answer:0});
  context.answerQuiz(0);
  await sleep(160);
  assert(spoken.length===1,`normal correct produced ${spoken.length} reactions: ${spoken.join(' | ')}`);
  state.quiz=null;
}

async function comboReplacesCorrect(){
  const {context,spoken}=boot();
  await sleep(30);
  const state=setQuiz(context,{length:2,index:0,combo:2,answer:0});
  context.answerQuiz(0);
  await sleep(160);
  assert(spoken.length===1,`combo produced ${spoken.length} reactions: ${spoken.join(' | ')}`);
  state.quiz=null;
}

async function finalCorrectOnlyResult(){
  const {context,spoken}=boot();
  await sleep(30);
  setQuiz(context,{length:1,index:0,combo:0,answer:0});
  context.answerQuiz(0);
  await sleep(200);
  assert(spoken.length===0,`final correct played answer reaction before result: ${spoken.join(' | ')}`);
  await sleep(800);
  assert(spoken.length===1,`final correct should produce one perfect reaction, got ${spoken.length}: ${spoken.join(' | ')}`);
}

async function finalWrongOnlyResult(){
  const {context,spoken}=boot();
  await sleep(30);
  setQuiz(context,{length:1,index:0,combo:0,answer:0});
  context.answerQuiz(1);
  await sleep(200);
  assert(spoken.length===0,`final wrong played wrong reaction before result: ${spoken.join(' | ')}`);
  await sleep(800);
  assert(spoken.length===1,`final wrong should produce one finish reaction, got ${spoken.length}: ${spoken.join(' | ')}`);
}

(async()=>{
  await normalCorrect();
  await comboReplacesCorrect();
  await finalCorrectOnlyResult();
  await finalWrongOnlyResult();
  console.log('TENKA Quiz Audio v1.2.2: single-reaction tests passed');
})().catch(e=>{console.error(e);process.exit(1)});
