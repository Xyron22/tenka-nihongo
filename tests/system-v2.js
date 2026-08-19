const fs=require('fs');
const vm=require('vm');
const appSource=fs.readFileSync('app-v2.js','utf8');

function assert(x,m){if(!x)throw new Error(m)}
function sleep(ms){return new Promise(r=>setTimeout(r,ms))}

const mockData={
  jlpt:{
    N5:{kanji:[{id:'k1',kanji:'聞',reading:'きく',meaning:'mendengar',example:'音を聞く',exampleMeaning:'mendengar suara'}],vocab:[{id:'v1',term:'聞く',reading:'きく',meaning:'mendengar'}],grammar:[{id:'g1',title:'〜ます',meaning:'bentuk sopan',pattern:'Vます',explanation:'x',example:'食べます',exampleMeaning:'makan',contrast:''}]},
    N4:{kanji:[],vocab:[],grammar:[]},N3:{kanji:[],vocab:[],grammar:[]},N2:{kanji:[],vocab:[],grammar:[]},N1:{kanji:[],vocab:[],grammar:[]}
  },
  kaigo:{vocab:[{id:'kg1',term:'体温',reading:'たいおん',meaning:'suhu tubuh',category:'vital'}],handoff:[{id:'h1',text:'体温は37度です',reading:'たいおん',meaning:'suhu 37',question:'berapa?',choices:['37','40'],answer:0}]}
};

function boot(){
  let html='';const events=[];const choiceEls=new Map();
  const app={get innerHTML(){return html},set innerHTML(v){html=v},textContent:'',querySelectorAll(){return[]}};
  const toast={textContent:'',classList:{add(){},remove(){}}};
  const makeChoice=()=>({classList:{items:[],add(x){this.items.push(x)}}});
  const context={
    console,Date,Math,Object,JSON,String,Array,Set,Map,Promise,
    setTimeout,clearTimeout,setInterval,clearInterval,
    localStorage:{data:{},getItem(k){return this.data[k]??null},setItem(k,v){this.data[k]=String(v)},removeItem(k){delete this.data[k]}},
    document:{
      querySelector(sel){
        if(sel==='#app')return app;if(sel==='#toast')return toast;
        if(/^#choice-\d+$/.test(sel)){if(!choiceEls.has(sel))choiceEls.set(sel,makeChoice());return choiceEls.get(sel)}
        return null;
      },
      querySelectorAll(){return[]}
    },
    navigator:{},scrollTo(){},confirm(){return false},
    speechSynthesis:{cancel(){},speak(){},getVoices(){return[]}},
    SpeechSynthesisUtterance:function(t){this.text=t},
    TENKA_DATA:mockData,
    TENKA_AUDIO:{
      playEvent(e){events.push(e)},stopAll(){},settings(){return{enabled:true,volume:.9,mode:'anime'}},setSetting(){},importEvent:async()=>({saved:0})
    },
    window:null
  };
  context.window=context;
  Object.defineProperty(context,'top',{value:{safariProtected:true},configurable:false,writable:false,enumerable:true});
  vm.createContext(context);vm.runInContext(appSource,context,{filename:'app-v2.js'});
  return{context,events,get html(){return html}};
}
function setQuiz(c,{length=2,index=0,combo=0,answer=0}){
  const items=Array.from({length},()=>({prompt:'聞く',reading:'きく',choices:['mendengar','besar'],answer}));
  const s=c.TENKA_CORE.state;s.view='quiz';s.returnView='level';s.quiz={items,i:index,score:0,type:'mix',combo,finished:false,saved:false,resultSoundPlayed:false};s.quizAnswered=false;return s;
}

(async()=>{
  {
    const b=boot();assert(b.context.TENKA_APP_VERSION==='2.0.0','app version');
    assert(b.html.includes('始めよう！'),'home CTA should be start when no due');
    b.context.homePrimary();assert(b.context.TENKA_CORE.state.view==='daily','home start should open Daily');
  }
  {
    const b=boot(),s=b.context.TENKA_CORE.state;
    s.progress.reviews.v1={due:new Date(Date.now()-1000).toISOString()};b.context.TENKA_CORE.render();
    assert(b.html.includes('Review 1 kartu'),'home CTA should show due count');
    b.context.homePrimary();assert(s.view==='flash'&&s.mode==='review','due CTA should open review');
  }
  {
    const b=boot(),s=b.context.TENKA_CORE.state;
    s.cards=[Object.assign({_kind:'vocab',_level:'N5'},mockData.jlpt.N5.vocab[0])];s.view='flash';s.mode='vocab';s.cardIndex=0;
    b.context.rateCard('good');assert(b.events.length===0,'flash rating must be audio-neutral');
  }
  {
    const b=boot();setQuiz(b.context,{length:2,index:0,combo:0});b.context.answerQuiz(0);assert(b.events.join(',')==='correct','normal correct must emit exactly correct');
  }
  {
    const b=boot();setQuiz(b.context,{length:2,index:0,combo:2});b.context.answerQuiz(0);assert(b.events.join(',')==='combo','combo must replace correct');
  }
  {
    const b=boot();setQuiz(b.context,{length:2,index:0,combo:0});b.context.answerQuiz(-1);assert(b.events.join(',')==='timeout','timeout must emit one timeout');
  }
  {
    const b=boot();setQuiz(b.context,{length:1,index:0,combo:0});b.context.answerQuiz(0);assert(b.events.length===0,'final correct must be silent until result');await sleep(850);assert(b.events.join(',')==='perfect','final correct must emit only perfect');
  }
  {
    const b=boot();setQuiz(b.context,{length:1,index:0,combo:0});b.context.answerQuiz(1);assert(b.events.length===0,'final wrong must be silent until result');await sleep(850);assert(b.events.join(',')==='finish','final wrong must emit only finish');
  }
  {
    const b=boot(),s=b.context.TENKA_CORE.state;s.level='KAIGO';s.quiz={type:'kaigo-listening'};b.context.restartQuiz();assert(s.quiz.type==='kaigo-listening','Kaigo listening restart must stay listening');
  }
  {
    const b=boot();b.context.go('settings');assert(b.html.includes('Tidak didukung Safari/iPhone'),'unsupported haptic should be explained');assert(/disabled aria-disabled="true"/.test(b.html),'unsupported haptic must be disabled');
  }
  console.log('TENKA Core 2 system tests passed');
})().catch(e=>{console.error(e);process.exit(1)});