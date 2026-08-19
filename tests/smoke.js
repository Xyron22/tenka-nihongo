const fs=require('fs');
const vm=require('vm');
const dataSource=fs.readFileSync('data.js','utf8');
const contentSource=fs.readFileSync('content-pack-v1.js','utf8');
const appSource=fs.readFileSync('app.js','utf8');
const hooksSource=fs.readFileSync('v1-hooks.js','utf8');
const audioSource=fs.readFileSync('audio-patch.js','utf8');
let appHtml='';
const appEl={get innerHTML(){return appHtml},set innerHTML(v){appHtml=v},textContent:'',querySelectorAll(){return[]}};
const toastEl={textContent:'',classList:{add(){},remove(){}}};
const context={console,Date,Math,Object,JSON,String,Array,Set,Promise,setTimeout,clearTimeout,setInterval,clearInterval,localStorage:{data:{},getItem(k){return this.data[k]||null},setItem(k,v){this.data[k]=String(v)},removeItem(k){delete this.data[k]}},document:{readyState:'complete',querySelector(s){if(s==='#app')return appEl;if(s==='#toast')return toastEl;return null},querySelectorAll(){return[]},addEventListener(){},createElement(){return{innerHTML:'',remove(){},querySelectorAll(){return[]}}}},navigator:{},scrollTo(){},confirm(){return false},speechSynthesis:{cancel(){},speak(){},getVoices(){return[]}},SpeechSynthesisUtterance:function(t){this.text=t||''},Audio:function(){this.volume=1;this.play=()=>Promise.resolve()},URL:{createObjectURL(){return'blob:test'},revokeObjectURL(){}},window:null};
context.window=context;
Object.defineProperty(context,'top',{value:{safariProtectedGlobal:true},configurable:false,writable:false,enumerable:true});
vm.createContext(context);
vm.runInContext(dataSource,context,{filename:'data.js'});
vm.runInContext(contentSource,context,{filename:'content-pack-v1.js'});
vm.runInContext(appSource,context,{filename:'app.js'});
vm.runInContext(hooksSource,context,{filename:'v1-hooks.js'});
function assert(x,m){if(!x)throw new Error(m)}
assert(context.TENKA_READY===true,'TENKA_READY was not set');
assert(context.TENKA_SYSTEM_VERSION==='1.0.3','TENKA V1.0.3 hooks did not initialize');
assert(context.TENKA_HAPTIC_SUPPORTED===false,'Haptic capability detection should be false without navigator.vibrate');
assert(context.TENKA_CORE&&context.TENKA_CORE.state,'TENKA_CORE API missing');
assert(context.TENKA_CORE.state.settings.haptic===false,'Unsupported web haptic should be disabled');
assert(context.top&&context.top.safariProtectedGlobal,'window.top was overwritten');
assert(context.TENKA_DATA.jlpt.N5.kanji.length>=15,'N5 kanji content pack missing');
assert(context.TENKA_DATA.jlpt.N5.vocab.length>=20,'N5 vocab content pack missing');
assert(context.TENKA_DATA.kaigo.vocab.length>=30,'Kaigo vocab content pack missing');
assert(context.TENKA_DATA.kaigo.handoff.length>=6,'Handoff content pack missing');
assert(appHtml.includes('TENKA 日本語'),'Home did not render');
context.go('jlpt');assert(appHtml.includes('N5'),'JLPT screen missing N5');
context.openLevel('N5');assert(appHtml.includes('Review Due'),'Review system missing from N5');
context.openFlash('N5','kanji');assert(appHtml.includes('Kakijun'),'Kakijun action missing');
const firstCard=context.TENKA_CORE.allLevelCards('N5')[0];
context.TENKA_CORE.state.progress.reviews[firstCard.id]={due:new Date(Date.now()-60000).toISOString(),rating:'again',intervalDays:.01};
context.openReview('N5');assert(appHtml.includes('Review'),'Due review session did not render');
context.openGrammar('N5');assert(appHtml.includes('Quiz Bunpou'),'Grammar quiz action missing');
context.startGrammarQuiz('N5');assert(appHtml.includes('30'),'Grammar quiz did not render');context.go('home');
context.go('kaigo');assert(appHtml.includes('Listening Kaigo'),'Kaigo listening missing');assert(appHtml.includes('申し送り'),'Kaigo handoff missing');
context.startKaigoQuiz('listening');assert(appHtml.includes('Dengarkan lalu pilih arti'),'Kaigo listening quiz did not render');
context.restartQuiz();assert(context.TENKA_CORE.state.quiz.type==='listening','Kaigo listening restart switched quiz type');context.go('home');
vm.runInContext(audioSource,context,{filename:'audio-patch.js'});
setTimeout(()=>{
  assert(context.TENKA_AUDIO&&typeof context.TENKA_AUDIO.playEvent==='function','Sound engine did not initialize');
  assert(typeof context.tenkaAudioImportPack==='function','Sound pack importer missing');

  // If review is due, the Home label and action must both say/do Review.
  context.go('home');
  assert(appHtml.includes('Review 1 kartu'),'Home CTA did not reveal the pending review');
  context.startDaily();
  assert(context.TENKA_CORE.state.view==='flash','Home Review CTA did not open review');
  assert(context.TENKA_CORE.state.mode==='review','Home Review CTA opened the wrong session');

  // Flashcard self-ratings are neutral: no quiz correct/wrong reaction voice.
  const events=[];
  const originalPlay=context.TENKA_AUDIO.playEvent;
  context.TENKA_AUDIO.playEvent=function(event){events.push(event)};
  context.rateCard('good');
  assert(!events.includes('correct')&&!events.includes('wrong'),'Flashcard Hafal triggered quiz reaction audio');
  context.TENKA_AUDIO.playEvent=originalPlay;

  // After the due card is scheduled into the future, Home becomes normal Daily start.
  context.go('home');
  assert(appHtml.includes('始めよう！'),'Home CTA did not return to normal start state');
  context.startDaily();
  assert(context.TENKA_CORE.state.view==='daily','Normal Home start did not open Daily Study');

  // An unsupported browser must never re-enable haptic through Settings.
  context.setSetting('haptic',true);
  assert(context.TENKA_CORE.state.settings.haptic===false,'Unsupported haptic was re-enabled');

  console.log('TENKA V1.0.3 behavior smoke test passed');
},30);
