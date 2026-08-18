(()=>{
'use strict';
if(!window.TENKA_CORE)return;
const originalRestart=window.restartQuiz;
window.restartQuiz=function(){
  const state=window.TENKA_CORE&&window.TENKA_CORE.state;
  if(state&&state.level==='KAIGO'&&state.quiz&&state.quiz.type==='listening')return window.startKaigoQuiz('listening');
  return originalRestart.apply(this,arguments);
};
window.TENKA_SYSTEM_VERSION='1.0.0';
})();