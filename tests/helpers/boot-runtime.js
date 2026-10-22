const fs=require('node:fs'),vm=require('node:vm');
const loadContent=require('./load-content');
// Real boot manifest and application, with a controlled clock and only the DOM/audio boundary stubbed.
module.exports=function bootRuntime({random=()=>.37,storedProgress=null}={}){
  const {data,context}=loadContent();let html='',now=0,nextId=1;const jobs=new Map(),events=[],spoken=[],elements=new Map();
  const app={get innerHTML(){return html},set innerHTML(v){html=v},querySelectorAll(){return[]}};
  const element=()=>({textContent:'',classList:{add(){},remove(){},toggle(){}},style:{}});
  const storage={};if(storedProgress)storage['tenka-progress']=JSON.stringify(storedProgress);
  const schedule=(fn,delay,repeat=false)=>{const id=nextId++;jobs.set(id,{fn,at:now+Number(delay||0),delay:Number(delay||0),repeat});return id};
  Object.assign(context,{
    console,Date,Math:Object.assign(Object.create(Math),{random}),
    setTimeout:(fn,ms)=>schedule(fn,ms),clearTimeout:id=>jobs.delete(id),
    setInterval:(fn,ms)=>schedule(fn,ms,true),clearInterval:id=>jobs.delete(id),
    localStorage:{getItem:k=>storage[k]??null,setItem:(k,v)=>{storage[k]=String(v)},removeItem:k=>{delete storage[k]}},
    document:{querySelector(sel){if(sel==='#app')return app;if(!elements.has(sel))elements.set(sel,element());return elements.get(sel)},querySelectorAll(){return[]}},
    navigator:{},scrollTo(){},confirm(){return false},
    speechSynthesis:{cancel(){},speak(u){spoken.push(u.text)},getVoices(){return[]}},SpeechSynthesisUtterance:function(text){this.text=text},
    TENKA_AUDIO:{playEvent:e=>events.push(e),stopAll(){},settings(){return{enabled:true,volume:.9,mode:'anime'}},setSetting(){}}
  });
  vm.runInContext(fs.readFileSync('app-v2.js','utf8'),context,{filename:'app-v2.js'});
  function advance(ms){
    const end=now+ms;let count=0;
    while(true){const due=[...jobs].filter(([,j])=>j.at<=end).sort((a,b)=>a[1].at-b[1].at||a[0]-b[0])[0];if(!due)break;
      if(++count>10000)throw Error('clock loop');const [id,j]=due;now=j.at;if(j.repeat)j.at+=j.delay;else jobs.delete(id);j.fn();
    }now=end;
  }
  return{context,data,state:context.TENKA_CORE.state,events,spoken,advance,storage,get html(){return html}};
};
