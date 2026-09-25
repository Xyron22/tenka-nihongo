(()=>{
'use strict';

const APP_VERSION='2.4.0';
const D=window.TENKA_DATA;
if(!D||!D.jlpt||!D.kaigo)throw new Error('TENKA_DATA belum siap');

const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const LEVELS=['N5','N4','N3','N2','N1'];
const PROGRESS_KEY='tenka-progress';
const SETTINGS_KEY='tenka-settings';
const HAPTIC_SUPPORTED=typeof navigator!=='undefined'&&typeof navigator.vibrate==='function';

const defaultProgress=()=>({
  reviews:{},quizRuns:{},best:{},correct:0,total:0,streak:1,lastStudy:null,
  grammarDone:{},handoffDone:{},houkokuDone:{},houkokuEssayDone:{},daily:{}
});
const defaultSettings=()=>({voice:true,haptic:HAPTIC_SUPPORTED});

function safeLoad(key,factory){
  try{
    const raw=localStorage.getItem(key);
    if(!raw)return factory();
    const value=JSON.parse(raw);
    return value&&typeof value==='object'?value:factory();
  }catch{return factory()}
}
function mergeProgress(value){
  const base=defaultProgress();
  return Object.assign(base,value||{}, {
    reviews:Object.assign({},base.reviews,value?.reviews||{}),
    quizRuns:Object.assign({},base.quizRuns,value?.quizRuns||{}),
    best:Object.assign({},base.best,value?.best||{}),
    grammarDone:Object.assign({},base.grammarDone,value?.grammarDone||{}),
    handoffDone:Object.assign({},base.handoffDone,value?.handoffDone||{}),
    houkokuDone:Object.assign({},base.houkokuDone,value?.houkokuDone||{}),
    houkokuEssayDone:Object.assign({},base.houkokuEssayDone,value?.houkokuEssayDone||{}),
    daily:Object.assign({},base.daily,value?.daily||{})
  });
}
function mergeSettings(value){
  const out=Object.assign(defaultSettings(),value||{});
  if(!HAPTIC_SUPPORTED)out.haptic=false;
  return out;
}

const state={
  view:'home',level:'N5',mode:'vocab',cards:[],cardIndex:0,flipped:false,returnView:'level',
  quiz:null,timer:null,seconds:30,quizAnswered:false,handoffSession:null,houkokuSession:null,houkokuEssaySession:null,medicalToolId:null,medicalToolCategory:'Semua',kakijun:null,guide:false,
  settings:mergeSettings(safeLoad(SETTINGS_KEY,defaultSettings)),
  progress:mergeProgress(safeLoad(PROGRESS_KEY,defaultProgress))
};

function save(){
  try{
    localStorage.setItem(PROGRESS_KEY,JSON.stringify(state.progress));
    localStorage.setItem(SETTINGS_KEY,JSON.stringify(state.settings));
  }catch{}
}
function localDay(date=new Date()){
  const y=date.getFullYear(),m=String(date.getMonth()+1).padStart(2,'0'),d=String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function dayDiff(a,b){
  const A=new Date(a+'T00:00:00'),B=new Date(b+'T00:00:00');
  return Math.round((B-A)/86400000);
}
function ensureDaily(){
  const today=localDay();
  const old=state.progress.daily[today]||{};
  state.progress.daily[today]=Object.assign({cards:[],reviewed:[],quizzes:0,grammar:[],kaigo:[]},old);
  return state.progress.daily[today];
}
function markStudy(){
  const today=localDay();
  if(state.progress.lastStudy!==today){
    state.progress.streak=state.progress.lastStudy&&dayDiff(state.progress.lastStudy,today)===1?(state.progress.streak||1)+1:1;
    state.progress.lastStudy=today;
    save();
  }
  ensureDaily();
}
function markDaily(kind,value){
  const d=ensureDaily();
  if(kind==='quizzes')d.quizzes++;
  else if(Array.isArray(d[kind])&&!d[kind].includes(value))d[kind].push(value);
  save();
}
function toast(text){
  const el=$('#toast');if(!el)return;
  el.textContent=text;el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1400);
}
function haptic(ms=20){
  if(!HAPTIC_SUPPORTED||!state.settings.haptic)return;
  try{navigator.vibrate(ms)}catch{}
}
function stopReactionAudio(){try{window.TENKA_AUDIO?.stopAll?.()}catch{}}
function speakText(text,rate=.9){
  if(!state.settings.voice||!text||!('speechSynthesis'in window))return;
  try{
    stopReactionAudio();
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='ja-JP';u.rate=rate;
    speechSynthesis.speak(u);
  }catch{}
}
function audioEvent(event){
  try{window.TENKA_AUDIO?.playEvent?.(event)}catch(e){console.warn('[TENKA audio]',e)}
}
function answerFeedback(ok){markStudy();haptic(ok?18:55);audioEvent(ok?'correct':'wrong')}
function startGreeting(){markStudy();audioEvent('greeting');toast('今日も頑張ろう！')}

function header(title,sub=''){
  const group=['jlpt','level','grammar'].includes(state.view)?'JLPT STUDY':['kaigo','medicalTools','medicalToolDetail','handoff','houkoku','houkokuEssay'].includes(state.view)?'KAIGO WORK':state.view==='daily'?'DAILY STUDY':state.view==='progress'?'PROGRESS':state.view==='settings'?'TENKA SETTINGS':'TENKA';
  return `<div class="topbar page-topbar"><div class="page-heading"><div class="page-eyebrow">${group}</div><div class="brand">${title}</div>${sub?`<div class="subtle">${sub}</div>`:''}</div><button class="icon-btn page-audio" onclick="startGreeting()" aria-label="Putar suara penyemangat"><span>🔊</span></button></div>`;
}
function nav(){
  const active=['daily','progress','settings'].includes(state.view)?state.view:'home';
  const item=(view,icon,label)=>`<button class="${active===view?'active':''}" onclick="go('${view}')" ${active===view?'aria-current="page"':''}><span class="nav-icon">${icon}</span><span class="nav-label">${label}</span></button>`;
  return `<nav class="bottom-nav" aria-label="Navigasi utama"><div class="bottom-nav-inner">${item('home','⌂','Home')}${item('daily','🎯','Daily')}${item('progress','📊','Progress')}${item('settings','⚙️','Setting')}</div></nav>`;
}
function clearTimer(){if(state.timer)clearInterval(state.timer);state.timer=null}
function go(view){clearTimer();if(state.view==='handoff'&&view!=='handoff')state.handoffSession=null;if(state.view==='houkoku'&&view!=='houkoku')state.houkokuSession=null;if(state.view==='houkokuEssay'&&view!=='houkokuEssay')state.houkokuEssaySession=null;state.view=view;state.flipped=false;render();try{scrollTo(0,0)}catch{}}
function render(){
  const app=$('#app');if(!app)return;
  const withNav=['home','jlpt','level','grammar','kaigo','medicalTools','medicalToolDetail','handoff','houkoku','houkokuEssay','daily','progress','settings'].includes(state.view);
  const views={home,jlpt,level,flash,grammar,quiz:quizView,kaigo,medicalTools,medicalToolDetail,handoff,houkoku,houkokuEssay,kakijun,daily,progress,settings};
  const renderer=views[state.view]||home;
  app.innerHTML=renderer()+(withNav?nav():'');
  afterRender();
}
function afterRender(){
  if(state.view==='quiz'&&state.quiz&&state.quiz.i<state.quiz.items.length&&!state.quiz.finished){
    startTimer();
    if(state.quiz.type.includes('listening')){
      const item=state.quiz.items[state.quiz.i];
      setTimeout(()=>speakText(item.voiceText||item.reading||item.prompt),80);
    }
  }
  if(state.view==='kakijun')setTimeout(()=>{if(state.kakijun?.strokes?.length)animateStrokes();setupCanvas()},30);
  if(state.view==='settings')setTimeout(()=>window.TENKA_SOUND_PACK?.renderStatus?.(),0);
}

function allLevelCards(level){
  const x=D.jlpt[level]||{kanji:[],vocab:[]};
  return [...(x.kanji||[]).map(c=>Object.assign({_kind:'kanji',_level:level},c)),...(x.vocab||[]).map(c=>Object.assign({_kind:'vocab',_level:level},c))];
}
function allKaigoCards(){return (D.kaigo.vocab||[]).map(c=>Object.assign({_kind:'vocab',_level:'KAIGO'},c))}
function allMedicalToolCards(){return (D.kaigo.tools||[]).map(c=>Object.assign({_kind:'tool',_level:'KAIGO'},c))}
function allKaigoStudyCards(){return [...allKaigoCards(),...allMedicalToolCards()]}
function allCards(){return [...LEVELS.flatMap(allLevelCards),...allKaigoStudyCards()]}
function reviewInfo(id){return state.progress.reviews[id]||null}
function isDue(id){const r=reviewInfo(id);return !!(r&&r.due&&new Date(r.due).getTime()<=Date.now())}
function dueCards(level){return (level==='KAIGO'?allKaigoStudyCards():allLevelCards(level)).filter(c=>isDue(c.id))}
function totalDue(){return LEVELS.reduce((n,l)=>n+dueCards(l).length,0)+dueCards('KAIGO').length}
function touchedCount(level){const ids=(level==='KAIGO'?allKaigoStudyCards():allLevelCards(level)).map(x=>x.id);return ids.filter(id=>reviewInfo(id)).length}
function dueSession(){return [...LEVELS.flatMap(l=>dueCards(l)),...dueCards('KAIGO')]}

function home(){
  const due=totalDue(),streak=state.progress.streak||1;
  const kaigoTouched=touchedCount('KAIGO'),kaigoTotal=allKaigoStudyCards().length,kaigoPct=Math.round(kaigoTouched/Math.max(1,kaigoTotal)*100);
  const kaigoVocab=allKaigoCards(),kaigoTools=allMedicalToolCards(),kaigoVocabTouched=kaigoVocab.filter(x=>reviewInfo(x.id)).length,kaigoToolTouched=kaigoTools.filter(x=>reviewInfo(x.id)).length,kaigoDue=dueCards('KAIGO').length,handoffDone=handoffDoneCount(),handoffTotal=D.kaigo.handoff.length;
  const jlptStats=LEVELS.map(level=>{const total=allLevelCards(level).length,touched=touchedCount(level),pct=Math.round(touched/Math.max(1,total)*100);return{level,total,touched,pct}}),jlptTouched=jlptStats.reduce((n,x)=>n+x.touched,0),jlptTotal=jlptStats.reduce((n,x)=>n+x.total,0),jlptPct=Math.round(jlptTouched/Math.max(1,jlptTotal)*100);
  const reportTotal=(D.kaigo.houkoku||[]).length,reportDone=houkokuDoneCount(),essayDone=houkokuEssayDoneCount();
  const daily=ensureDaily(),dailyParts=[Math.min(1,daily.reviewed.length/5),Math.min(1,daily.cards.length/10),Math.min(1,daily.grammar.length),Math.min(1,daily.quizzes),Math.min(1,daily.kaigo.length/5)],dailyPct=Math.round(dailyParts.reduce((a,b)=>a+b,0)/dailyParts.length*100),dailyDone=dailyParts.filter(x=>x>=1).length;
  return `<section class="tenka-home-hero">
    <div class="tenka-home-brand"><div><div class="tenka-wordmark">TENKA</div><div class="tenka-kana">てんか</div></div><div class="tenka-home-motto"><b>Belajar hari ini, masa depan lebih dekat.</b><span>今日の勉強が、未来を近づける。</span></div></div>
    <div class="tenka-home-sky" aria-hidden="true"><span class="sun"></span><span class="fuji"></span><span class="ridge"></span></div>
    <div class="tenka-home-summary">
      <div><b>🔥 ${streak}</b><span>hari streak</span></div>
      <div><b>🧠 ${due}</b><span>review due</span></div>
      <div><b>🏥 ${kaigoTouched}/${kaigoTotal}</b><span>Kaigo disentuh</span></div>
    </div>
    <button class="action primary tenka-home-primary" onclick="homePrimary()">${due?`🧠 Mulai Review ${due} kartu →`:'🎯 Mulai belajar hari ini →'}</button>
  </section>
  <div class="tenka-dashboard-title"><span>学習ダッシュボード</span><b>Belajar apa hari ini?</b></div>
  <div class="tenka-dashboard-grid">
    <section class="tenka-panel tenka-panel-kaigo">
      <div class="tenka-panel-head"><span>🏥</span><div><b>Kaigo・介護</b><small>Bahasa kerja & keperawatan</small></div><strong>${kaigoPct}%</strong></div>
      <div class="tenka-panel-progress"><i style="width:${kaigoPct}%"></i></div>
      <div class="tenka-kaigo-grid">
        <button class="tenka-kaigo-stat" onclick="openKaigoFlash()"><span>🈴</span><div><b>Kosakata</b><small>${kaigoVocabTouched}/${kaigoVocab.length} disentuh</small></div><em>→</em></button>
        <button class="tenka-kaigo-stat" onclick="go('medicalTools')"><span>🩺</span><div><b>Alat Medis</b><small>${kaigoToolTouched}/${kaigoTools.length} disentuh</small></div><em>→</em></button>
        <button class="tenka-kaigo-stat" onclick="openHandoffPractice()"><span>🗣️</span><div><b>申し送り</b><small>${handoffDone}/${handoffTotal} dikuasai</small></div><em>→</em></button>
        <button class="tenka-kaigo-stat ${kaigoDue?'attention':''}" onclick="openReview('KAIGO')"><span>🧠</span><div><b>Review</b><small>${kaigoDue?kaigoDue+' kartu due':'Belum ada yang due'}</small></div><em>→</em></button>
      </div>
      <button class="tenka-kaigo-all" onclick="go('kaigo')">Buka semua materi Kaigo →</button>
    </section>
    <section class="tenka-panel tenka-panel-houkoku">
      <div class="tenka-panel-head"><span>📣</span><div><b>Houkoku・報告</b><small>Roadmap latihan laporan kerja</small></div><strong>${reportDone+essayDone}/${Math.max(1,reportTotal*2)}</strong></div>
      <div class="tenka-houkoku-roadmap">
        <button class="tenka-houkoku-step ${reportDone>=reportTotal&&reportTotal?'complete':''}" onclick="openHoukokuPractice()">
          <span class="tenka-step-no">1</span><div><b>Level 1</b><small>Susun laporan dari potongan kalimat</small></div><em>${reportDone}/${reportTotal}</em>
        </button>
        <div class="tenka-road-line ${reportDone>=reportTotal&&reportTotal?'complete':''}"></div>
        <button class="tenka-houkoku-step ${essayDone>=reportTotal&&reportTotal?'complete':''}" onclick="openHoukokuEssay()">
          <span class="tenka-step-no">2</span><div><b>Level 2</b><small>Tulis laporan sendiri lalu bandingkan</small></div><em>${essayDone}/${reportTotal}</em>
        </button>
        <div class="tenka-road-line"></div>
        <div class="tenka-houkoku-step planned" aria-disabled="true">
          <span class="tenka-step-no">3</span><div><b>Level 3</b><small>Simulasi laporan cepat • segera hadir</small></div><em>Rencana</em>
        </div>
      </div>
    </section>
    <section class="tenka-panel tenka-panel-jlpt">
      <div class="tenka-panel-head"><span>📘</span><div><b>JLPT Roadmap</b><small>N5 → N1 • kanji & kosakata</small></div><strong>${jlptPct}%</strong></div>
      <div class="tenka-jlpt-roadmap">
        ${jlptStats.map((x,i)=>`<button class="tenka-jlpt-step ${x.touched>=x.total&&x.total?'complete':x.touched?'started':i===0?'current':''}" onclick="openLevel('${x.level}')"><span class="tenka-jlpt-badge">${x.level}</span><div><b>${x.level}</b><small>${x.touched}/${x.total} kartu disentuh</small></div><em>${x.pct}%</em></button>${i<jlptStats.length-1?`<div class="tenka-jlpt-line ${x.touched>=x.total&&x.total?'complete':''}"></div>`:''}`).join('')}
      </div>
      <button class="tenka-jlpt-all" onclick="go('jlpt')">Lihat semua materi JLPT →</button>
    </section>
    <section class="tenka-panel tenka-panel-daily">
      <div class="tenka-panel-head"><span>🎯</span><div><b>今日のミッション</b><small>Target belajar hari ini</small></div><strong>${dailyPct}%</strong></div>
      <div class="tenka-panel-progress"><i style="width:${dailyPct}%"></i></div>
      <div class="tenka-daily-missions">
        <div class="${daily.reviewed.length>=5?'done':''}"><span>🧠</span><b>Review</b><em>${Math.min(5,daily.reviewed.length)}/5</em></div>
        <div class="${daily.cards.length>=10?'done':''}"><span>🔤</span><b>Kartu</b><em>${Math.min(10,daily.cards.length)}/10</em></div>
        <div class="${daily.grammar.length>=1?'done':''}"><span>📝</span><b>Bunpou</b><em>${Math.min(1,daily.grammar.length)}/1</em></div>
        <div class="${daily.quizzes>=1?'done':''}"><span>🎮</span><b>Quiz</b><em>${Math.min(1,daily.quizzes)}/1</em></div>
        <div class="${daily.kaigo.length>=5?'done':''}"><span>🏥</span><b>Kaigo</b><em>${Math.min(5,daily.kaigo.length)}/5</em></div>
      </div>
      <div class="tenka-daily-quote"><b>${dailyDone===5?'今日も完璧！':'一歩ずつ、確実に。'}</b><span>${dailyDone===5?'Misi hari ini selesai semua 🎉':`${dailyDone}/5 target selesai • lanjut sedikit lagi.`}</span></div>
      <button class="tenka-daily-action" onclick="go('daily')">${dailyDone===5?'Lihat hasil hari ini':'Buka Daily Mission'} →</button>
    </section>
  </div>
  <div class="install-tip tenka-home-install">📱 Safari → Share → <b>Add to Home Screen</b> untuk membuka TENKA seperti aplikasi.</div>`;
}
function homePrimary(){const due=dueSession();if(due.length)return openCustomFlash(due,'home','review');go('daily')}
function dailyStart(){const due=dueSession();if(due.length)return openCustomFlash(due,'daily','review');openFlash('N5','vocab')}
function jlpt(){
  return `${header('JLPT','Semua level terbuka')}<button class="back" onclick="go('home')">←</button><div class="jlpt-level-grid">${LEVELS.map(l=>{const total=allLevelCards(l).length,learned=touchedCount(l),due=dueCards(l).length,pct=Math.round(learned/Math.max(1,total)*100),icon=l==='N5'?'🌱':l==='N4'?'🌿':l==='N3'?'🔥':l==='N2'?'⚡':'🏆';return `<button class="jlpt-level-card" onclick="openLevel('${l}')"><div class="jlpt-level-top"><span class="jlpt-level-icon">${icon}</span><div><b>${l}</b><small>${learned}/${total} kartu disentuh</small></div><em>${pct}%</em></div><div class="progress"><i style="width:${pct}%"></i></div><div class="jlpt-level-bottom"><span>Kanji + Kosakata + Bunpou</span>${due?`<strong>🧠 ${due} due</strong>`:'<strong class="quiet">Tidak ada due</strong>'}</div></button>`}).join('')}</div>`;
}
function openLevel(level){state.level=level;go('level')}
function level(){
  const d=D.jlpt[state.level],l=state.level,due=dueCards(l).length,gd=(d.grammar||[]).filter(g=>state.progress.grammarDone[g.id]).length;
  return `${header(l,`${d.kanji.length} kanji • ${d.vocab.length} kosakata • ${d.grammar.length} bunpou`)}<button class="back" onclick="go('jlpt')">←</button><div class="study-list">
    <button class="study-row tone-blue" onclick="openFlash('${l}','kanji')"><span class="study-row-icon">🈶</span><div class="study-row-copy"><b>Flashcard Kanji</b><small>Bentuk • bacaan • arti • contoh • kakijun</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-cyan" onclick="openFlash('${l}','vocab')"><span class="study-row-icon">🔤</span><div class="study-row-copy"><b>Flashcard Kosakata</b><small>SRS + audio pengucapan</small></div><span class="study-row-end">›</span></button>
    <button class="study-row ${due?'tone-warn':''}" onclick="openReview('${l}')"><span class="study-row-icon">🧠</span><div class="study-row-copy"><b>Review Due</b><small>${due?`${due} kartu siap diulang`:'Belum ada review jatuh tempo'}</small></div><span class="study-row-badge ${due?'hot':'quiet'}">${due||'0'}</span></button>
    <button class="study-row tone-purple" onclick="openGrammar('${l}')"><span class="study-row-icon">📝</span><div class="study-row-copy"><b>Bunpou ${l}</b><small>${gd}/${d.grammar.length} ditandai paham</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-gold" onclick="startQuiz('${l}','mix')"><span class="study-row-icon">🎮</span><div class="study-row-copy"><b>Quiz 30 detik</b><small>Pilihan ganda • satu jawaban satu feedback</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-green" onclick="startQuiz('${l}','listening')"><span class="study-row-icon">🎧</span><div class="study-row-copy"><b>Listening Quiz</b><small>Dengar Jepang → pilih arti</small></div><span class="study-row-end">›</span></button>
  </div>`;
}
function openFlash(level,kind){state.level=level;state.mode=kind;state.cards=(D.jlpt[level]?.[kind]||[]).map(c=>Object.assign({_kind:kind,_level:level},c));state.cardIndex=0;state.flipped=false;state.returnView='level';go('flash')}
function openCustomFlash(cards,returnView='level',mode='review'){state.cards=cards.slice();state.cardIndex=0;state.flipped=false;state.mode=mode;state.returnView=returnView;go('flash')}
function openReview(level){state.level=level;const cards=dueCards(level);if(!cards.length){toast('Belum ada kartu yang jatuh tempo');return}openCustomFlash(cards,level==='KAIGO'?'kaigo':'level','review')}
function currentCard(){return state.cards[state.cardIndex]||null}
function cardFront(c){
  if(c._kind==='kanji')return `<div class="kanji">${c.kanji}</div>`;
  if(c._kind==='tool')return `<img class="tool-flash-image" src="${htmlSafe(c.image||'')}" alt="${htmlSafe(c.term||'alat medis')}"><div class="tool-flash-term">${htmlSafe(c.term||'')}</div>`;
  return `<div class="term">${c.term}</div>`;
}
function cardBack(c){
  if(c._kind==='tool')return `<div class="reading">${htmlSafe(c.reading||'')}</div><div class="meaning">${htmlSafe(c.meaning||'')}</div><div class="tool-flash-block"><b>${htmlSafe(c.functionJP||'')}</b>${c.functionReading?`<small>${htmlSafe(c.functionReading)}</small>`:''}${c.functionID?`<div>🇮🇩 ${htmlSafe(c.functionID)}</div>`:''}</div><div class="example"><b>${htmlSafe(c.example||'')}</b>${c.exampleReading?`<br><small>${htmlSafe(c.exampleReading)}</small>`:''}<br>${htmlSafe(c.exampleMeaning||'')}</div>`;
  return `<div class="reading">${c.reading||''}</div>${c.romaji?`<div class="subtle">${c.romaji}</div>`:''}<div class="meaning">${c.meaning||''}</div><div class="example"><b>${c.example||''}</b>${c.exampleReading?`<br><small>${c.exampleReading}</small>`:''}<br>${c.exampleMeaning||''}</div>`;
}
function flash(){
  const c=currentCard();if(!c)return `<section class="session-complete"><div class="session-complete-icon">🎉</div><span>SESSION COMPLETE</span><h2>Selesai</h2><p>Tidak ada kartu lagi di sesi ini.</p><button class="action primary" onclick="go('${state.returnView}')">Kembali</button></section>`;
  const due=reviewInfo(c.id)?.due,isToolMode=state.mode==='tools',isToolCard=c._kind==='tool',index=state.cardIndex+1,total=state.cards.length,pct=Math.round(index/Math.max(1,total)*100);
  const modeLabel=state.mode==='review'?'Review':isToolMode?'Alat Medis':c._kind==='kanji'?'Kanji':'Flashcard';
  const toolControls=isToolMode?`<div class="controls tool-flash-controls"><button class="action" onclick="stepToolFlash(-1)" ${state.cardIndex===0?'disabled aria-disabled="true"':''}>← Sebelumnya</button><button class="action" onclick="${state.cardIndex>=state.cards.length-1?`go('${state.returnView}')`:'stepToolFlash(1)'}">${state.cardIndex>=state.cards.length-1?'Selesai':'Lewati →'}</button></div>`:'';
  const srsHint=isToolMode?`<div class="subtle tool-srs-hint">Nilai kartu untuk memasukkannya ke jadwal review.</div>`:'';
  const reviewControls=`<div class="controls srs-controls"><button class="action bad" onclick="rateCard('again')"><span>😵</span>Lagi</button><button class="action blue" onclick="rateCard('good')"><span>🙂</span>Hafal</button><button class="action ok" onclick="rateCard('easy')"><span>✨</span>Mudah</button></div>`;
  return `<div class="study-session-head"><button class="back" onclick="go('${state.returnView}')">←</button><div class="study-session-meta"><span>${modeLabel.toUpperCase()}</span><b>${index}/${total}</b><div class="study-session-track"><i style="width:${pct}%"></i></div></div><button class="icon-btn session-audio" onclick="speakText('${esc(c.term||c.reading||c.kanji)}')" aria-label="Putar pengucapan">🔊</button></div>
  <div class="flash-wrap"><div class="flash ${isToolCard?'tool-flash':''} ${state.flipped?'flipped':''}" onclick="flipCard()"><div class="face"><div class="flash-side-label">QUESTION</div>${cardFront(c)}<div class="flash-tap-hint"><span>↻</span> Tap untuk balik</div></div><div class="face backface"><div class="flash-side-label">ANSWER</div>${cardBack(c)}</div></div></div>
  ${c._kind==='kanji'?`<div class="small-actions flash-extra-actions"><button class="pill" onclick="openKakijun('${c.id}')">✍️ Kakijun</button><button class="pill" onclick="speakText('${esc(c.example||c.kanji)}')">🔊 Contoh</button></div>`:''}
  ${toolControls}${srsHint}
  <div class="srs-label"><span>Seberapa ingat?</span><small>Pilih untuk mengatur jadwal review berikutnya</small></div>
  ${reviewControls}
  ${due?`<div class="flash-review-date">Review sebelumnya: ${new Date(due).toLocaleDateString()}</div>`:''}`;
}
function esc(s){return String(s||'').replaceAll('\\','\\\\').replaceAll("'","\\'")}
function htmlSafe(s){return String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')}
function flipCard(){state.flipped=!state.flipped;const el=$('.flash');if(el)el.classList.toggle('flipped');haptic(12)}
function scheduleCard(c,rating){
  const old=reviewInfo(c.id),oldInt=Math.max(.01,Number(old?.intervalDays)||0);let intervalDays;
  if(rating==='again')intervalDays=10/1440;else if(rating==='good')intervalDays=oldInt?Math.max(1,oldInt*2.1):1;else intervalDays=oldInt?Math.max(4,oldInt*3):4;
  state.progress.reviews[c.id]={rating,intervalDays,due:new Date(Date.now()+intervalDays*86400000).toISOString(),last:new Date().toISOString()};
  save();markStudy();markDaily('cards',c.id);if(state.mode==='review')markDaily('reviewed',c.id);if(c._level==='KAIGO')markDaily('kaigo',c.id);
}
function stepToolFlash(delta){
  if(state.mode!=='tools'||!state.cards.length)return;
  const next=Math.max(0,Math.min(state.cards.length-1,state.cardIndex+delta));if(next===state.cardIndex)return;
  state.cardIndex=next;state.flipped=false;haptic(10);render();try{scrollTo(0,0)}catch{}
}
function rateCard(rating){
  const c=currentCard();if(!c)return;scheduleCard(c,rating);
  if(state.mode==='review'){
    state.cards.splice(state.cardIndex,1);
    if(state.cardIndex>=state.cards.length&&state.cards.length)state.cardIndex=0;
  }else state.cardIndex++;
  state.flipped=false;render();
}
function openGrammar(level){state.level=level;go('grammar')}
function grammar(){
  const arr=D.jlpt[state.level].grammar||[],doneCount=arr.filter(g=>state.progress.grammarDone[g.id]).length,pct=Math.round(doneCount/Math.max(1,arr.length)*100);
  return `${header(`Bunpou ${state.level}`,'Pahami konteks, lalu tes diri')}<button class="back" onclick="go('level')">←</button>
  <section class="grammar-hero">
    <div><span>文法・GRAMMAR</span><b>${state.level} Bunpou Roadmap</b><small>${doneCount}/${arr.length} pola sudah ditandai paham</small></div>
    <div class="grammar-hero-progress"><strong>${pct}%</strong><div class="grammar-hero-track"><i style="width:${pct}%"></i></div></div>
    <button class="grammar-quiz-btn" onclick="startGrammarQuiz('${state.level}')">🎮 Quiz Bunpou <span>→</span></button>
  </section>
  <div class="grammar-section-head"><div><span>POLA BAHASA</span><b>Pelajari satu per satu</b></div><small>${arr.length} materi</small></div>
  <div class="grammar-list">${arr.map((g,i)=>{const done=!!state.progress.grammarDone[g.id];return `<article class="grammar-card modern ${done?'complete':''}">
    <div class="grammar-card-head"><span class="grammar-index">${String(i+1).padStart(2,'0')}</span><div><span class="grammar-level">${state.level}${done?' • ✅ PAHAM':''}</span><h3>${g.title}</h3></div></div>
    <div class="grammar-meaning">${g.meaning}</div>
    <p class="grammar-explanation">${g.explanation}</p>
    <div class="grammar-block pattern-block"><span>PATTERN</span><b>${g.pattern}</b></div>
    <div class="grammar-block example-block"><span>CONTOH</span><b>${g.example}</b>${g.exampleReading?`<small>${g.exampleReading}</small>`:''}<p>${g.exampleMeaning||''}</p></div>
    ${g.contrast?`<div class="grammar-note"><span>⚠️</span><div><b>Catatan</b><small>${g.contrast}</small></div></div>`:''}
    <div class="grammar-actions"><button onclick="speakText('${esc(g.example)}')">🔊 Dengarkan</button><button class="${done?'done':''}" onclick="toggleGrammar('${g.id}')">${done?'↩️ Belum yakin':'✅ Tandai paham'}</button></div>
  </article>`}).join('')}</div>`;
}
function toggleGrammar(id){if(state.progress.grammarDone[id])delete state.progress.grammarDone[id];else{state.progress.grammarDone[id]=new Date().toISOString();markStudy();markDaily('grammar',id)}save();render()}
function startGrammarQuiz(level){
  const src=(D.jlpt[level].grammar||[]).slice();if(!src.length){toast('Materi bunpou belum tersedia');return}
  const items=shuffle(src).slice(0,Math.min(10,src.length)).map(g=>{const wrong=shuffle([...new Set(src.filter(x=>x.id!==g.id&&x.meaning!==g.meaning).map(x=>x.meaning))]).slice(0,3);const choices=shuffle([g.meaning,...wrong]);return{prompt:g.title,reading:g.pattern,correct:g.meaning,choices,answer:choices.indexOf(g.meaning),voiceText:g.example,type:'grammar'}});beginQuiz(level,'grammar',items,'grammar');
}
function shuffle(arr){const x=arr.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
function makeCardQuiz(cards,type){const pool=[...new Set(cards.map(c=>c.meaning).filter(Boolean))];return shuffle(cards).slice(0,Math.min(10,cards.length)).map(c=>{const wrong=shuffle(pool.filter(x=>x!==c.meaning)).slice(0,3),choices=shuffle([c.meaning,...wrong]);return{prompt:c.term||c.kanji,reading:c.reading,voiceText:c.term||c.kanji||c.reading,correct:c.meaning,choices,answer:choices.indexOf(c.meaning),type}})}
function makeMedicalToolQuiz(){
  const tools=selectedMedicalTools(),all=D.kaigo.tools||[],pool=all.map(t=>({id:t.id,label:`${t.term} — ${t.meaning}`}));
  return shuffle(tools).slice(0,Math.min(10,tools.length)).map(t=>{
    const correct=`${t.term} — ${t.meaning}`,wrong=shuffle(pool.filter(x=>x.id!==t.id).map(x=>x.label)).slice(0,3),choices=shuffle([correct,...wrong]);
    return{prompt:t.term,reading:t.reading,voiceText:t.term,image:t.image,correct,choices,answer:choices.indexOf(correct),type:'medical-tools'};
  });
}
function startQuiz(level,type='mix'){state.level=level;const cards=type==='listening'?(D.jlpt[level]?.vocab||[]).map(c=>Object.assign({_kind:'vocab',_level:level},c)):allLevelCards(level);beginQuiz(level,type,makeCardQuiz(cards,type),'level')}
function startKaigoQuiz(type='kaigo'){state.level='KAIGO';const quizType=(type==='listening'||type==='kaigo-listening')?'kaigo-listening':'kaigo';beginQuiz('KAIGO',quizType,makeCardQuiz(allKaigoCards(),quizType),'kaigo')}
function startMedicalToolQuiz(){state.level='KAIGO';beginQuiz('KAIGO','medical-tools',makeMedicalToolQuiz(),'medicalTools')}
function beginQuiz(level,type,items,returnView){clearTimer();if(!items.length){toast('Belum ada soal untuk sesi ini');return}state.level=level;state.returnView=returnView;state.quiz={items,i:0,score:0,type,finished:false,saved:false,resultSoundPlayed:false};state.quizAnswered=false;go('quiz')}
function quizView(){
  const q=state.quiz;if(!q)return '';if(q.i>=q.items.length)return finishQuiz();const item=q.items[q.i],listening=q.type.includes('listening'),medicalTools=q.type==='medical-tools',index=q.i+1,total=q.items.length,pct=Math.round(q.i/Math.max(1,total)*100);
  const modeLabel=medicalTools?'MEDICAL TOOLS':listening?'LISTENING':q.type==='grammar'?'BUNPOU QUIZ':'QUIZ';
  const questionBody=medicalTools?`<div class="quiz-kicker">Alat apakah ini?</div><img class="tool-quiz-image" src="${htmlSafe(item.image||'')}" alt="Gambar alat medis"><div class="quiz-help">Pilih nama Jepang + arti yang benar</div>`:listening?`<div class="quiz-kicker">Dengarkan lalu pilih arti</div><div class="quiz-listening-icon">🔊</div><button class="pill quiz-replay" onclick="speakText('${esc(item.voiceText||item.prompt)}')">▶ Putar lagi</button>`:`<div class="quiz-kicker">${q.type==='grammar'?'Apa arti/penggunaan pola ini?':'Apa arti kata ini?'}</div><div class="jp">${item.prompt}</div><div class="quiz-reading">${item.reading||''}</div>`;
  return `<div class="quiz-session-head"><button class="back" onclick="go('${state.returnView}')">←</button><div class="quiz-session-meta"><span>${modeLabel}</span><b>${index}/${total}</b><div class="quiz-session-track"><i style="width:${pct}%"></i></div></div><div id="timer" class="timer">30</div></div>
  <section class="question ${medicalTools?'tool-quiz-question':''}">${questionBody}</section>
  <div class="quiz-answer-label"><span>PILIH JAWABAN</span><small>Satu jawaban saja</small></div>
  <div class="choices">${item.choices.map((choice,i)=>`<button id="choice-${i}" class="choice" onclick="answerQuiz(${i})"><span class="choice-letter">${String.fromCharCode(65+i)}</span><span class="choice-text">${htmlSafe(choice)}</span></button>`).join('')}</div>`;
}
function startTimer(){clearTimer();state.seconds=30;const token=state.quiz?.i;state.timer=setInterval(()=>{if(!state.quiz||state.quiz.i!==token||state.quizAnswered){clearTimer();return}state.seconds--;const el=$('#timer');if(el){el.textContent=state.seconds;if(state.seconds<=5)el.classList.add('danger')}if(state.seconds<=0){clearTimer();answerQuiz(-1)}},1000)}
function answerQuiz(index){
  const q=state.quiz;if(state.quizAnswered||!q||q.i>=q.items.length)return;state.quizAnswered=true;clearTimer();
  const item=q.items[q.i],timedOut=index<0,ok=!timedOut&&index===item.answer,finalQuestion=q.i===q.items.length-1;
  state.progress.total++;let reaction=null;
  if(ok){q.score++;state.progress.correct++;if(!finalQuestion)reaction='correct';haptic(18)}
  else{if(!finalQuestion)reaction=timedOut?'timeout':'wrong';haptic(55)}
  markStudy();save();if(reaction)audioEvent(reaction);
  item.choices.forEach((_,n)=>{const b=$(`#choice-${n}`);if(!b)return;if(n===item.answer)b.classList.add('correct');else if(n===index)b.classList.add('wrong')});
  setTimeout(()=>{if(!state.quiz||state.quiz!==q)return;q.i++;state.quizAnswered=false;render()},700);
}
function finishQuiz(){
  const q=state.quiz;if(!q)return '';q.finished=true;clearTimer();const pct=Math.round(q.score/Math.max(1,q.items.length)*100),key=`${state.level}-${q.type}`;
  if(!q.saved){q.saved=true;state.progress.quizRuns[key]=(state.progress.quizRuns[key]||0)+1;state.progress.best[key]=Math.max(state.progress.best[key]||0,pct);markStudy();markDaily('quizzes');save()}
  if(!q.resultSoundPlayed){q.resultSoundPlayed=true;setTimeout(()=>{if(state.quiz===q&&state.view==='quiz')audioEvent(pct===100?'perfect':'finish')},80)}
  const message=pct===100?'パーフェクト！':pct>=70?'おめでとう！':'Sesi selesai',note=pct===100?'Semua jawaban benar. Mantap.':pct>=70?'Hasil bagus. Sedikit review lagi biar makin kuat.':'Nggak masalah, tandai bagian yang masih susah lalu coba lagi nanti.';
  return `<section class="quiz-result-card"><div class="quiz-result-icon">${pct===100?'🏆':pct>=70?'🎉':'🌱'}</div><span>QUIZ COMPLETE</span><div class="quiz-result-score">${pct}%</div><h2>${message}</h2><p>${q.score}/${q.items.length} benar</p><small>${note}</small><button class="action primary" onclick="go('${state.returnView}')">Selesai</button></section>`;
}
function kaigo(){
  const cats=[...new Set((D.kaigo.vocab||[]).map(x=>x.category).filter(Boolean))],due=dueCards('KAIGO').length,done=handoffDoneCount(),reportDone=houkokuDoneCount(),reportTotal=(D.kaigo.houkoku||[]).length,essayDone=houkokuEssayDoneCount();
  return `${header('Kaigo・Keperawatan','Bahasa kerja • listening • 申し送り')}<button class="back" onclick="go('home')">←</button><div class="study-list">
    <button class="study-row tone-green" onclick="openKaigoFlash()"><span class="study-row-icon">🏥</span><div class="study-row-copy"><b>Flashcard Kaigo</b><small>${D.kaigo.vocab.length} istilah kerja</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-cyan" onclick="go('medicalTools')"><span class="study-row-icon">🩺</span><div class="study-row-copy"><b>Alat Medis・介護用品</b><small>${(D.kaigo.tools||[]).length} alat dengan gambar</small></div><span class="study-row-end">›</span></button>
    <button class="study-row ${due?'tone-warn':''}" onclick="openReview('KAIGO')"><span class="study-row-icon">🧠</span><div class="study-row-copy"><b>Review Kaigo</b><small>${due?`${due} kartu jatuh tempo`:'Belum ada review jatuh tempo'}</small></div><span class="study-row-badge ${due?'hot':'quiet'}">${due||'0'}</span></button>
    <button class="study-row tone-gold" onclick="startKaigoQuiz('kaigo')"><span class="study-row-icon">🎮</span><div class="study-row-copy"><b>Quiz Kaigo</b><small>Istilah kerja • satu jawaban satu feedback</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-blue" onclick="startKaigoQuiz('listening')"><span class="study-row-icon">🎧</span><div class="study-row-copy"><b>Listening Kaigo</b><small>Dengar istilah → tangkap arti</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-gold" onclick="openHoukokuPractice()"><span class="study-row-icon">📣</span><div class="study-row-copy"><b>報告 Level 1</b><small>${reportDone}/${reportTotal} kasus • susun potongan laporan</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-purple" onclick="openHoukokuEssay()"><span class="study-row-icon">✍️</span><div class="study-row-copy"><b>報告 Level 2</b><small>${essayDone}/${reportTotal} kasus • tulis sendiri lalu bandingkan</small></div><span class="study-row-end">›</span></button>
    <button class="study-row tone-green" onclick="openHandoffPractice()"><span class="study-row-icon">🗣️</span><div class="study-row-copy"><b>申し送り Practice</b><small>${done}/${D.kaigo.handoff.length} kasus dikuasai • per kalimat</small></div><span class="study-row-end">›</span></button>
  </div><div class="section-title section-title-polished"><span>Kategori</span><small>Pilih materi Kaigo</small></div><div class="small-actions kaigo-category-pills">${cats.map(x=>`<button class="pill" onclick="openKaigoCategory('${esc(x)}')">${x}</button>`).join('')}</div>`;
}
function openKaigoFlash(){state.level='KAIGO';state.cards=allKaigoCards();state.mode='vocab';state.cardIndex=0;state.flipped=false;state.returnView='kaigo';go('flash')}
function openKaigoCategory(cat){const cards=allKaigoCards().filter(x=>x.category===cat);if(!cards.length)return;state.level='KAIGO';openCustomFlash(cards,'kaigo','vocab')}

function medicalToolCategories(){return [...new Set((D.kaigo.tools||[]).map(t=>t.category).filter(Boolean))]}
function selectedMedicalTools(){
  const all=D.kaigo.tools||[],cat=state.medicalToolCategory||'Semua';
  return cat==='Semua'?all:all.filter(t=>t.category===cat);
}
function setMedicalToolCategory(cat){
  const valid=cat==='Semua'||medicalToolCategories().includes(cat);
  state.medicalToolCategory=valid?cat:'Semua';state.medicalToolId=null;haptic(8);render();
}
function medicalTools(){
  const all=D.kaigo.tools||[],tools=selectedMedicalTools(),cats=medicalToolCategories(),cat=state.medicalToolCategory||'Semua';
  const due=tools.filter(t=>isDue(t.id)).length,label=cat==='Semua'?`${tools.length} alat`:`${cat} • ${tools.length}/${all.length} alat`;
  return `${header('Alat Medis・介護用品',`${label} • gambar + istilah Jepang`)}<button class="back" onclick="go('kaigo')">←</button><div class="tool-filter-bar"><button class="pill tool-filter ${cat==='Semua'?'active':''}" onclick="setMedicalToolCategory('Semua')">Semua</button>${cats.map(x=>`<button class="pill tool-filter ${cat===x?'active':''}" onclick="setMedicalToolCategory('${esc(x)}')">${htmlSafe(x)}</button>`).join('')}</div><div class="tool-study-actions"><button class="action primary" onclick="openMedicalToolFlash()">🃏 Flashcard ${tools.length} alat</button><button class="action" onclick="startMedicalToolQuiz()">🎮 Quiz Gambar</button><button class="action ${due?'blue':''}" onclick="openMedicalToolReview()">🧠 Review ${due}</button></div><div class="tool-list">${tools.map(t=>`<button class="tool-row" onclick="openMedicalTool('${esc(t.id)}')"><img class="tool-thumb" src="${htmlSafe(t.image||'')}" alt="${htmlSafe(t.term||'alat medis')}" loading="lazy"><div class="tool-copy"><span class="badge">${htmlSafe(t.category||'介護用品')}</span><b>${htmlSafe(t.term||'')}</b><small>${htmlSafe(t.reading||'')}</small><div class="tool-meaning">${htmlSafe(t.meaning||'')}</div></div><span class="tool-chevron">›</span></button>`).join('')}</div>`;
}
function openMedicalToolFlash(){
  const cards=selectedMedicalTools().map(t=>Object.assign({_kind:'tool',_level:'KAIGO'},t));
  if(!cards.length){toast('Materi alat medis belum tersedia');return}
  state.level='KAIGO';openCustomFlash(cards,'medicalTools','tools');
}
function openMedicalToolReview(){
  const cards=selectedMedicalTools().map(t=>Object.assign({_kind:'tool',_level:'KAIGO'},t)).filter(c=>isDue(c.id));
  if(!cards.length){toast('Belum ada review alat yang jatuh tempo');return}
  state.level='KAIGO';openCustomFlash(cards,'medicalTools','review');
}

function openMedicalTool(id){
  const found=selectedMedicalTools().find(t=>t.id===id);if(!found)return;
  state.medicalToolId=id;go('medicalToolDetail');
}
function currentMedicalTool(){return (D.kaigo.tools||[]).find(t=>t.id===state.medicalToolId)||null}
function stepMedicalTool(delta){
  const tools=selectedMedicalTools();if(!tools.length)return;
  const i=tools.findIndex(t=>t.id===state.medicalToolId);if(i<0)return;
  const next=Math.max(0,Math.min(tools.length-1,i+delta));if(next===i)return;
  state.medicalToolId=tools[next].id;haptic(10);render();try{scrollTo(0,0)}catch{}
}
function medicalToolDetail(){
  const tools=selectedMedicalTools(),t=currentMedicalTool();
  if(!t)return `${header('Alat Medis','Data tidak ditemukan')}<button class="back" onclick="go('medicalTools')">←</button><div class="muted-box">Alat tidak ditemukan.</div>`;
  const index=Math.max(0,tools.findIndex(x=>x.id===t.id)),hasPrev=index>0,hasNext=index<tools.length-1;
  const safety=t.safetyNote?`<div class="tool-safety"><b>⚠️ Catatan aman</b><div>${htmlSafe(t.safetyNote)}</div>${t.safetyNoteReading?`<small>${htmlSafe(t.safetyNoteReading)}</small>`:''}${t.safetyNoteMeaning?`<p>${htmlSafe(t.safetyNoteMeaning)}</p>`:''}</div>`:'';
  return `${header('Alat Medis・介護用品',htmlSafe(t.category||''))}<button class="back" onclick="go('medicalTools')">←</button><article class="tool-detail"><div class="tool-hero"><img src="${htmlSafe(t.image||'')}" alt="${htmlSafe(t.term||'alat medis')}"></div><span class="badge">${htmlSafe(t.category||'介護用品')}</span><h2>${htmlSafe(t.term||'')}</h2><div class="tool-reading">${htmlSafe(t.reading||'')}</div><div class="tool-detail-meaning">${htmlSafe(t.meaning||'')}</div><div class="small-actions"><button class="pill" onclick="speakText('${esc(t.term||t.reading)}')">🔊 Nama alat</button></div><div class="section-title">Fungsi</div><div class="tool-info"><b>${htmlSafe(t.functionJP||'')}</b>${t.functionReading?`<small>${htmlSafe(t.functionReading)}</small>`:''}${t.functionID?`<p>🇮🇩 ${htmlSafe(t.functionID)}</p>`:''}${t.functionJP?`<button class="pill" onclick="speakText('${esc(t.functionJP)}',.82)">🔊 Dengarkan fungsi</button>`:''}</div><div class="section-title">Contoh kalimat</div><div class="tool-info"><b>${htmlSafe(t.example||'')}</b>${t.exampleReading?`<small>${htmlSafe(t.exampleReading)}</small>`:''}${t.exampleMeaning?`<p>🇮🇩 ${htmlSafe(t.exampleMeaning)}</p>`:''}${t.example?`<button class="pill" onclick="speakText('${esc(t.example)}',.82)">🔊 Dengarkan contoh</button>`:''}</div>${safety}<div class="tool-pager"><button class="action" onclick="stepMedicalTool(-1)" ${hasPrev?'':'disabled aria-disabled="true"'}>← Sebelumnya</button><span>${index+1}/${tools.length}</span><button class="action primary" onclick="stepMedicalTool(1)" ${hasNext?'':'disabled aria-disabled="true"'}>Berikutnya →</button></div></article>`;
}

function houkokuItems(){return D.kaigo.houkoku||[]}
function houkokuPieceText(piece){return typeof piece==='string'?piece:String(piece?.text||'')}
function houkokuPieceReading(piece){return typeof piece==='string'?'':String(piece?.reading||'')}
function houkokuPieceMeaning(piece){return typeof piece==='string'?'':String(piece?.meaning||'')}
function houkokuRuby(text,reading){const t=String(text||''),r=String(reading||'');return r?`<ruby class="houkoku-ruby">${t}<rt>${r}</rt></ruby>`:t}
function houkokuPieceHtml(piece){return houkokuRuby(houkokuPieceText(piece),houkokuPieceReading(piece))}
function houkokuDoneCount(){return houkokuItems().filter(h=>!!state.progress.houkokuDone[h.id]).length}
function firstIncompleteHoukoku(){return houkokuItems().findIndex(h=>!state.progress.houkokuDone[h.id])}
function makeHoukokuSession(caseIndex){
  const h=houkokuItems()[caseIndex],order=shuffle((h?.pieces||[]).map((_,i)=>i));
  return{caseIndex,selected:[],remaining:order,checked:false,correct:false,stage:'puzzle'};
}
function openHoukokuPractice(caseIndex=null){
  const arr=houkokuItems();if(!arr.length){toast('Materi 報告 belum tersedia');return}
  const next=firstIncompleteHoukoku();
  if(!Number.isInteger(caseIndex)&&next<0){state.houkokuSession=null;toast('Semua kasus 報告 yang tersedia sudah selesai');return}
  const i=Number.isInteger(caseIndex)?Math.max(0,Math.min(caseIndex,arr.length-1)):next;
  state.houkokuSession=makeHoukokuSession(i);go('houkoku');
}
function currentHoukoku(){const hs=state.houkokuSession;return hs?houkokuItems()[hs.caseIndex]||null:null}
function houkoku(){
  const arr=houkokuItems();
  if(!arr.length)return `${header('報告 Practice','Belum ada materi')}<button class="back" onclick="go('kaigo')">←</button><div class="work-empty"><span>📣</span><b>Materi belum tersedia</b><small>Kasus 報告 akan muncul di sini saat tersedia.</small></div>`;
  if(!state.houkokuSession){const i=firstIncompleteHoukoku();if(i<0)return `${header('報告 Practice','Semua kasus selesai')}<button class="back" onclick="go('kaigo')">←</button><section class="work-complete"><span>✅</span><b>完了</b><p>Semua kasus 報告 yang tersedia sudah selesai.</p><button class="action primary" onclick="go('kaigo')">Selesai</button></section>`;state.houkokuSession=makeHoukokuSession(i)}
  const hs=state.houkokuSession,h=currentHoukoku();if(!h){state.houkokuSession=null;return ''}
  const label=`Kasus ${hs.caseIndex+1}/${arr.length}`,pct=Math.round((hs.caseIndex+1)/Math.max(1,arr.length)*100);
  if(hs.stage==='result'){
    const fullText=h.pieces.map(houkokuPieceText).join('');
    const model=h.pieces.map((piece,i)=>`<div class="work-model-line"><span class="work-line-no">${i+1}</span><div><div class="handoff">${houkokuPieceHtml(piece)}</div><div class="houkoku-id">🇮🇩 ${houkokuPieceMeaning(piece)}</div></div></div>`).join('');
    return `${header('報告 Practice',`${label} • Model laporan`)}<button class="back" onclick="finishHoukoku()">←</button>
    <section class="work-session-hero result"><div><span>LEVEL 1 • 報告モデル</span><b>${houkokuRuby(h.title,h.titleReading)}</b><small>Bandingkan urutanmu dengan model laporan.</small></div><strong>${hs.caseIndex+1}/${arr.length}</strong></section>
    <section class="work-model-card"><div class="work-card-label">✅ 報告モデル</div><div class="houkoku-model">${model}</div>${h.note?`<div class="work-tip">💡 <span>${h.note}</span></div>`:''}<button class="work-audio-btn" onclick="speakText('${esc(fullText)}',.82)">🔊 Dengarkan model</button></section>
    <button class="action primary work-finish-btn" onclick="finishHoukoku()">Selesai</button>`;
  }
  const selected=hs.selected.map((pieceIndex,pos)=>`<button class="work-selected-piece ${hs.checked?(hs.correct?'correct':'wrong'):''}" onclick="houkokuRemove(${pos})"><span>${pos+1}</span><div>${houkokuPieceHtml(h.pieces[pieceIndex])}</div></button>`).join('');
  const available=hs.remaining.map(pieceIndex=>`<button class="work-piece-chip" draggable="true" ondragstart="houkokuDragStart(event,${pieceIndex})" onclick="houkokuPick(${pieceIndex})">${houkokuPieceHtml(h.pieces[pieceIndex])}</button>`).join('');
  const feedback=hs.checked?(hs.correct?'<div class="work-feedback correct">✅ Urutannya benar. Ini sudah menjadi laporan yang natural.</div>':'<div class="work-feedback wrong">❌ Urutannya belum tepat. Coba susun lagi dari fakta → kondisi → permintaan konfirmasi.</div>'):'';
  return `${header('報告 Practice',`${label} • Puzzle laporan`)}<button class="back" onclick="finishHoukoku()">←</button>
  <section class="work-session-hero"><div><span>LEVEL 1 • PUZZLE</span><b>${houkokuRuby(h.title,h.titleReading)}</b><small>${h.examArea||'コミュニケーション技術'}</small></div><strong>${hs.caseIndex+1}/${arr.length}</strong><div class="work-hero-track"><i style="width:${pct}%"></i></div></section>
  <section class="work-situation-card"><div class="work-card-label">SITUASI</div><p>🧑‍⚕️ ${h.situation}</p><small>Susun potongan Jepang menjadi houkoku. Di iPhone cukup tap; drag & drop juga tersedia bila browser mendukung.</small></section>
  <div class="work-section-head"><div><span>YOUR REPORT</span><b>🧩 Laporanmu</b></div><small>${hs.selected.length}/${h.pieces.length} potongan</small></div>
  <div class="work-selected-list" ondragover="event.preventDefault()" ondrop="houkokuDrop(event)">${selected||'<div class="work-placeholder">Tap potongan kalimat di bawah untuk mulai menyusun.</div>'}</div>
  ${feedback}
  <div class="work-section-head"><div><span>SENTENCE PIECES</span><b>Potongan kalimat</b></div><small>${hs.remaining.length} tersisa</small></div>
  <div class="work-piece-bank">${available||'<span class="subtle">Semua potongan sudah dipakai.</span>'}</div>
  <div class="controls work-controls"><button class="action" onclick="houkokuReset()">↻ Acak ulang</button>${hs.checked&&hs.correct?'<button class="action primary" onclick="houkokuShowResult()">Lihat model →</button>':hs.checked?'<button class="action primary" onclick="houkokuReset()">Coba lagi</button>':'<button class="action primary" onclick="houkokuCheck()">Periksa</button>'}</div>`;
}
function houkokuPick(pieceIndex){
  const hs=state.houkokuSession;if(!hs||hs.checked)return;
  const p=hs.remaining.indexOf(pieceIndex);if(p<0)return;
  hs.remaining.splice(p,1);hs.selected.push(pieceIndex);render();
}
function houkokuRemove(pos){
  const hs=state.houkokuSession;if(!hs||hs.checked||pos<0||pos>=hs.selected.length)return;
  const piece=hs.selected.splice(pos,1)[0];hs.remaining.push(piece);render();
}
function houkokuDragStart(event,pieceIndex){try{event.dataTransfer.setData('text/plain',String(pieceIndex))}catch{}}
function houkokuDrop(event){try{event.preventDefault();const i=Number(event.dataTransfer.getData('text/plain'));if(Number.isInteger(i))houkokuPick(i)}catch{}}
function houkokuCheck(){
  const hs=state.houkokuSession,h=currentHoukoku();if(!hs||!h||hs.checked)return;
  if(hs.selected.length!==h.pieces.length){toast('Susun semua potongan dulu');return}
  hs.correct=hs.selected.every((x,i)=>x===i);hs.checked=true;answerFeedback(hs.correct);
  if(hs.correct){state.progress.houkokuDone[h.id]=new Date().toISOString();markDaily('kaigo','houkoku:'+h.id);save()}
  render();
}
function houkokuReset(){
  const hs=state.houkokuSession,h=currentHoukoku();if(!hs||!h)return;
  hs.selected=[];hs.remaining=shuffle(h.pieces.map((_,i)=>i));hs.checked=false;hs.correct=false;render();
}
function houkokuShowResult(){const hs=state.houkokuSession;if(!hs||!hs.correct)return;hs.stage='result';render()}
function finishHoukoku(){state.houkokuSession=null;go('kaigo')}

function houkokuEssayDoneCount(){return houkokuItems().filter(h=>!!state.progress.houkokuEssayDone[h.id]).length}
function firstIncompleteHoukokuEssay(){return houkokuItems().findIndex(h=>!state.progress.houkokuEssayDone[h.id])}
function makeHoukokuEssaySession(caseIndex){return{caseIndex,stage:'write',draft:''}}
function openHoukokuEssay(caseIndex=null){
  const arr=houkokuItems();if(!arr.length){toast('Materi 報告 belum tersedia');return}
  const next=firstIncompleteHoukokuEssay();
  if(!Number.isInteger(caseIndex)&&next<0){state.houkokuEssaySession=null;toast('Semua kasus 報告 Level 2 sudah ditandai bisa');return}
  const i=Number.isInteger(caseIndex)?Math.max(0,Math.min(caseIndex,arr.length-1)):next;
  state.houkokuEssaySession=makeHoukokuEssaySession(i);go('houkokuEssay');
}
function currentHoukokuEssay(){const hs=state.houkokuEssaySession;return hs?houkokuItems()[hs.caseIndex]||null:null}
function houkokuEssay(){
  const arr=houkokuItems();
  if(!arr.length)return `${header('報告 Level 2','Belum ada materi')}<button class="back" onclick="go('kaigo')">←</button><div class="work-empty"><span>✍️</span><b>Materi belum tersedia</b><small>Kasus 報告 Level 2 akan muncul di sini saat tersedia.</small></div>`;
  if(!state.houkokuEssaySession){const i=firstIncompleteHoukokuEssay();if(i<0)return `${header('報告 Level 2','Semua kasus selesai')}<button class="back" onclick="go('kaigo')">←</button><section class="work-complete"><span>✅</span><b>完了</b><p>Semua kasus Level 2 sudah kamu tandai bisa.</p><button class="action primary" onclick="go('kaigo')">Selesai</button></section>`;state.houkokuEssaySession=makeHoukokuEssaySession(i)}
  const hs=state.houkokuEssaySession,h=currentHoukokuEssay();if(!h){state.houkokuEssaySession=null;return ''}
  const label=`Kasus ${hs.caseIndex+1}/${arr.length}`,pct=Math.round((hs.caseIndex+1)/Math.max(1,arr.length)*100);
  if(hs.stage==='model'){
    const fullText=h.pieces.map(houkokuPieceText).join('');
    const model=h.pieces.map((piece,i)=>`<div class="work-model-line"><span class="work-line-no">${i+1}</span><div><div class="handoff">${houkokuPieceHtml(piece)}</div><div class="houkoku-id">🇮🇩 ${houkokuPieceMeaning(piece)}</div></div></div>`).join('');
    return `${header('報告 Level 2',`${label} • Bandingkan`)}<button class="back" onclick="finishHoukokuEssay(false)">←</button>
    <section class="work-session-hero essay"><div><span>LEVEL 2 • SELF WRITING</span><b>${houkokuRuby(h.title,h.titleReading)}</b><small>Bandingkan laporanmu dengan model.</small></div><strong>${hs.caseIndex+1}/${arr.length}</strong><div class="work-hero-track"><i style="width:${pct}%"></i></div></section>
    <div class="work-compare-grid">
      <section class="work-compare-card yours"><div class="work-card-label">✍️ あなたの報告</div><div class="essay-answer">${htmlSafe(hs.draft)}</div></section>
      <section class="work-compare-card model"><div class="work-card-label">✅ 報告モデル</div><div class="houkoku-model">${model}</div>${h.note?`<div class="work-tip">💡 <span>${h.note}</span></div>`:''}<button class="work-audio-btn" onclick="speakText('${esc(fullText)}',.82)">🔊 Model audio</button></section>
    </div>
    <div class="work-self-note"><span>💡</span><p>Nilai sendiri: tidak harus sama persis dengan model. Yang penting fakta, urutan, dan maksud laporannya jelas.</p></div>
    <div class="controls essay-controls work-controls"><button class="action" onclick="finishHoukokuEssay(false)">Masih perlu latihan</button><button class="action primary" onclick="finishHoukokuEssay(true)">✅ Sudah bisa</button></div>`;
  }
  return `${header('報告 Level 2',`${label} • Tulis sendiri`)}<button class="back" onclick="finishHoukokuEssay(false)">←</button>
  <section class="work-session-hero essay"><div><span>LEVEL 2 • SELF WRITING</span><b>${houkokuRuby(h.title,h.titleReading)}</b><small>${h.examArea||'コミュニケーション技術'}</small></div><strong>${hs.caseIndex+1}/${arr.length}</strong><div class="work-hero-track"><i style="width:${pct}%"></i></div></section>
  <section class="work-situation-card"><div class="work-card-label">SITUASI</div><p>🧑‍⚕️ ${h.situation}</p></section>
  <section class="work-guide-card"><div class="work-card-label">URUTAN BANTU</div><ol><li>Siapa yang dilaporkan</li><li>Fakta / perubahan yang terjadi</li><li>Kondisi yang kamu lihat atau ukur</li><li>Minta pengecekan / konfirmasi bila perlu</li></ol></section>
  <div class="work-section-head"><div><span>WRITE YOUR REPORT</span><b>✍️ Tulis houkoku-mu</b></div><small>Bahasa Jepang</small></div>
  <textarea id="houkoku-essay-input" class="houkoku-textarea modern" lang="ja" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="Contoh mulai: 〇〇さんですが、"></textarea>
  <div class="controls essay-controls work-controls"><button class="action" onclick="finishHoukokuEssay(false)">Selesai</button><button class="action primary" onclick="houkokuEssayReveal()">Bandingkan dengan model →</button></div>`;
}
function houkokuEssayReveal(draft=null){
  const hs=state.houkokuEssaySession;if(!hs)return;
  const typed=draft!==null?String(draft):String($('#houkoku-essay-input')?.value||'');
  const clean=typed.trim();if(!clean){toast('Tulis laporanmu dulu');return}
  hs.draft=clean;hs.stage='model';markStudy();render();
}
function finishHoukokuEssay(mastered=false){
  const hs=state.houkokuEssaySession,h=currentHoukokuEssay();
  if(mastered&&hs&&h){state.progress.houkokuEssayDone[h.id]=new Date().toISOString();markDaily('kaigo','houkoku-essay:'+h.id);save()}
  state.houkokuEssaySession=null;go('kaigo');
}

function handoffSegments(h){
  if(Array.isArray(h?.segments)&&h.segments.length)return h.segments;
  const texts=String(h?.text||'').split('。').map(x=>x.trim()).filter(Boolean).map(x=>x+'。');
  return texts.map(text=>({text,reading:'',meaning:''}));
}
function handoffDoneCount(){return (D.kaigo.handoff||[]).filter(h=>!!state.progress.handoffDone[h.id]).length}
function firstIncompleteHandoff(){return (D.kaigo.handoff||[]).findIndex(h=>!state.progress.handoffDone[h.id])}
function openHandoffPractice(caseIndex=null){
  const arr=D.kaigo.handoff||[];
  if(!arr.length){toast('Materi 申し送り belum tersedia');return}
  const next=firstIncompleteHandoff();
  if(!Number.isInteger(caseIndex)&&next<0){state.handoffSession=null;toast('Semua kasus 申し送り yang tersedia sudah selesai');return}
  const i=Number.isInteger(caseIndex)?Math.max(0,Math.min(caseIndex,arr.length-1)):next;
  state.handoffSession={caseIndex:i,sentenceIndex:0,stage:'read',answered:false,correct:null,choice:null};
  go('handoff');
}
function currentHandoff(){
  const arr=D.kaigo.handoff||[],hs=state.handoffSession;
  return hs?arr[hs.caseIndex]||null:null;
}
function handoff(){
  const arr=D.kaigo.handoff||[];
  if(!arr.length)return `${header('申し送り Practice','Belum ada materi')}<button class="back" onclick="go('kaigo')">←</button><div class="work-empty"><span>🗣️</span><b>Materi belum tersedia</b><small>Kasus 申し送り akan muncul di sini saat tersedia.</small></div>`;
  if(!state.handoffSession){const i=firstIncompleteHandoff();if(i<0)return `${header('申し送り Practice','Semua kasus selesai')}<button class="back" onclick="go('kaigo')">←</button><section class="work-complete"><span>✅</span><b>完了</b><p>Semua kasus 申し送り yang tersedia sudah selesai.</p><button class="action primary" onclick="go('kaigo')">Selesai</button></section>`;state.handoffSession={caseIndex:i,sentenceIndex:0,stage:'read',answered:false,correct:null,choice:null}}
  const hs=state.handoffSession,h=currentHandoff();
  if(!h){state.handoffSession=null;return `${header('申し送り Practice','Sesi selesai')}<button class="action primary" onclick="go('kaigo')">Selesai</button>`}
  const segments=handoffSegments(h),seg=segments[Math.min(hs.sentenceIndex,Math.max(0,segments.length-1))]||{text:h.text,reading:h.reading,meaning:h.meaning};
  const caseLabel=`Kasus ${hs.caseIndex+1}/${arr.length}`,casePct=Math.round((hs.caseIndex+1)/Math.max(1,arr.length)*100);

  if(hs.stage==='read'){
    const last=hs.sentenceIndex>=segments.length-1,sentencePct=Math.round((hs.sentenceIndex+1)/Math.max(1,segments.length)*100);
    return `${header('申し送り Practice',`${caseLabel} • Kalimat ${hs.sentenceIndex+1}/${segments.length}`)}<button class="back" onclick="finishHandoff()">←</button>
    <section class="work-session-hero handoff-hero"><div><span>申し送り • 1文ずつ</span><b>${caseLabel}</b><small>Kalimat ${hs.sentenceIndex+1}/${segments.length}</small></div><strong>${hs.caseIndex+1}/${arr.length}</strong><div class="work-hero-track"><i style="width:${casePct}%"></i></div></section>
    <section class="handoff-sentence-card">
      <div class="handoff-sentence-head"><span>SENTENCE ${hs.sentenceIndex+1}</span><em>${sentencePct}%</em></div>
      <div class="handoff">${seg.text}</div>
      ${seg.reading?`<div class="furigana">${seg.reading}</div>`:''}
      <div class="handoff-audio-grid"><button onclick="speakText('${esc(seg.text)}')">🔊<span>Normal</span></button><button onclick="speakText('${esc(seg.text)}',.68)">🐢<span>Pelan</span></button></div>
      ${seg.meaning?`<div class="handoff-meaning"><span>🇮🇩</span><p>${seg.meaning}</p></div>`:''}
    </section>
    <div class="controls work-controls"><button class="action" onclick="finishHandoff()">Selesai</button><button class="action primary" onclick="${last?'handoffToQuestion()':'handoffNextSentence()'}">${last?'Lanjut ke soal →':'Kalimat berikutnya →'}</button></div>`;
  }

  if(hs.stage==='question'){
    return `${header('申し送り Practice',`${caseLabel} • Pemahaman`)}<button class="back" onclick="finishHandoff()">←</button>
    <section class="work-session-hero handoff-hero"><div><span>確認問題 • CHECK</span><b>${caseLabel}</b><small>Pastikan inti laporan tertangkap.</small></div><strong>?</strong><div class="work-hero-track"><i style="width:${casePct}%"></i></div></section>
    <section class="handoff-question-card"><div class="work-card-label">確認問題</div><h3>${h.question}</h3><div class="handoff-choice-list">${h.choices.map((choice,i)=>`<button onclick="handoffAnswer(${i})"><span>${String.fromCharCode(65+i)}</span><div>${choice}</div></button>`).join('')}</div></section>
    <button class="action work-finish-btn" onclick="finishHandoff()">Selesai</button>`;
  }

  const ok=hs.correct===true;
  return `${header('申し送り Practice',`${caseLabel} • Selesai`)}
  <section class="handoff-result ${ok?'correct':'wrong'}"><div class="handoff-result-icon">${ok?'✅':'↻'}</div><span>${ok?'正解':'要復習'}</span><h2>${ok?'Intinya tertangkap dengan benar.':'Jawaban yang tepat:'}</h2><div class="handoff-result-answer">${h.choices[h.answer]}</div><p>${ok?'Kasus ini sudah dicatat sebagai dikuasai.':'Baca lagi kalimatnya nanti dan fokus pada informasi inti.'}</p><button class="action primary" onclick="finishHandoff()">Selesai</button></section>`;
}
function handoffNextSentence(){
  const hs=state.handoffSession,h=currentHandoff();if(!hs||!h)return;
  const n=handoffSegments(h).length;
  if(hs.sentenceIndex<n-1)hs.sentenceIndex++;
  else hs.stage='question';
  render();
}
function handoffToQuestion(){const hs=state.handoffSession;if(!hs)return;hs.stage='question';render()}
function handoffAnswer(index){
  const hs=state.handoffSession,h=currentHandoff();if(!hs||!h||hs.answered)return;
  hs.answered=true;hs.choice=index;hs.correct=index===h.answer;hs.stage='result';
  answerFeedback(hs.correct);
  if(hs.correct){state.progress.handoffDone[h.id]=new Date().toISOString();markDaily('kaigo','handoff:'+h.id);save()}
  render();
}
function finishHandoff(){state.handoffSession=null;go('kaigo')}
function findKanji(id){for(const l of LEVELS){const c=(D.jlpt[l].kanji||[]).find(x=>x.id===id);if(c)return Object.assign({_kind:'kanji',_level:l},c)}return null}
function openKakijun(id){state.kakijun=findKanji(id);if(state.kakijun)go('kakijun')}
function kakijun(){
  const c=state.kakijun,has=c?.strokes?.length,strokeCount=has?c.strokes.length:0;
  return `<div class="kakijun-head"><button class="back" onclick="go('flash')">←</button><div><span>KANJI WRITING</span><b>書き順 Kakijun</b><small>${c?.kanji||''} • ${has?strokeCount+' goresan':'stroke belum tersedia'}</small></div><button class="kakijun-play" onclick="animateStrokes()" ${has?'':'disabled aria-disabled="true"'}>▶️</button></div>
  <section class="kakijun-hero">
    <div class="kakijun-kanji-copy"><span>TARGET KANJI</span><strong>${c?.kanji||''}</strong><b>${c?.reading||''}</b><small>${c?.meaning||''}</small></div>
    <div class="kakijun-meta"><div><span>✍️</span><b>${strokeCount||'—'}</b><small>goresan</small></div><div><span>🔊</span><b>JP</b><small>bacaan</small></div></div>
  </section>
  <div class="kakijun-section-head"><div><span>STROKE ORDER</span><b>Urutan goresan</b></div><button onclick="animateStrokes()" ${has?'':'disabled aria-disabled="true"'}>▶ Putar ulang</button></div>
  ${has?`<div class="kanji-stage modern"><svg viewBox="0 0 100 100">${c.strokes.map((p,i)=>`<path class="stroke" data-i="${i}" d="${p}"/>`).join('')}</svg></div>`:`<div class="kakijun-empty"><span>✍️</span><b>Stroke belum tersedia</b><small>Engine latihan menulis tetap bisa dipakai untuk kanji ini.</small></div>`}
  <div class="kakijun-section-head write-head"><div><span>WRITING PRACTICE</span><b>Coba tulis dengan jari</b></div><small>Canvas latihan</small></div>
  <div class="canvas-wrap modern"><canvas id="writeCanvas" width="650" height="420"></canvas></div>
  <div class="kakijun-controls"><button onclick="clearCanvas()">🗑️ Hapus</button><button class="${state.guide?'active':''}" onclick="toggleGuide()">${state.guide?'🙈 Sembunyikan contoh':'👁️ Tampilkan contoh'}</button><button onclick="speakText('${esc(c?.reading||c?.kanji||'')}')">🔊 Bacaan</button></div>`;
}
function animateStrokes(){$$('.stroke').forEach((p,i)=>{p.classList.remove('animate');void p.offsetWidth;setTimeout(()=>p.classList.add('animate'),i*620)})}
let drawing=false,ctx2=null;
function setupCanvas(){const c=$('#writeCanvas');if(!c)return;ctx2=c.getContext('2d');ctx2.lineWidth=12;ctx2.lineCap='round';ctx2.strokeStyle='#111';const pos=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};c.onpointerdown=e=>{e.preventDefault();drawing=true;const[x,y]=pos(e);ctx2.beginPath();ctx2.moveTo(x,y)};c.onpointermove=e=>{if(!drawing)return;e.preventDefault();const[x,y]=pos(e);ctx2.lineTo(x,y);ctx2.stroke()};c.onpointerup=c.onpointerleave=()=>drawing=false;if(state.guide)drawGuide()}
function clearCanvas(){const c=$('#writeCanvas');if(ctx2&&c)ctx2.clearRect(0,0,c.width,c.height);if(state.guide)drawGuide()}
function toggleGuide(){state.guide=!state.guide;render()}
function drawGuide(){const c=$('#writeCanvas');if(!ctx2||!c||!state.kakijun)return;ctx2.save();ctx2.globalAlpha=.12;ctx2.fillStyle='#111';ctx2.font='300px serif';ctx2.textAlign='center';ctx2.textBaseline='middle';ctx2.fillText(state.kakijun.kanji,c.width/2,c.height/2+10);ctx2.restore()}
function daily(){
  const d=ensureDaily(),due=totalDue();
  const missions=[
    {icon:'🧠',title:'Review selesai',target:5,value:Math.min(5,d.reviewed.length),sub:'Ulang kartu yang sudah jatuh tempo'},
    {icon:'🔤',title:'Kartu dipelajari',target:10,value:Math.min(10,d.cards.length),sub:'Kanji atau kosakata baru'},
    {icon:'📝',title:'Bunpou',target:1,value:Math.min(1,d.grammar.length),sub:'Pahami satu pola tata bahasa'},
    {icon:'🎮',title:'Quiz',target:1,value:Math.min(1,d.quizzes),sub:'Tes singkat untuk cek ingatan'},
    {icon:'🏥',title:'Kaigo',target:5,value:Math.min(5,d.kaigo.length),sub:'Bahasa kerja dan keperawatan'}
  ];
  const done=missions.filter(m=>m.value>=m.target).length,pct=Math.round(missions.reduce((n,m)=>n+Math.min(1,m.value/m.target),0)/missions.length*100);
  const today=new Date().toLocaleDateString('ja-JP',{month:'long',day:'numeric',weekday:'short'});
  return `${header('今日のミッション',`${due} review menunggu`)}<button class="back" onclick="go('home')">←</button>
  <section class="daily-hero">
    <div class="daily-hero-head"><div><span>DAILY STUDY</span><b>${today}</b><small>${done===5?'Semua target hari ini sudah selesai 🎉':'Sedikit demi sedikit, yang penting jalan.'}</small></div><div class="daily-ring" style="--p:${pct}"><strong>${pct}%</strong><span>${done}/5</span></div></div>
    <div class="daily-hero-track"><i style="width:${pct}%"></i></div>
    <div class="daily-hero-meta"><span>🔥 ${state.progress.streak||1} hari streak</span><span>🧠 ${due} review due</span></div>
  </section>
  <div class="daily-section-head"><div><span>TODAY'S TARGET</span><b>5 misi kecil</b></div><small>${done}/5 selesai</small></div>
  <div class="daily-mission-list">
    ${missions.map((m,i)=>{const mp=Math.round(Math.min(1,m.value/m.target)*100),complete=m.value>=m.target;return `<div class="daily-mission-card ${complete?'complete':''}"><div class="daily-mission-icon">${m.icon}</div><div class="daily-mission-copy"><div class="daily-mission-title"><b>${m.title}</b><span>${m.value}/${m.target}</span></div><small>${m.sub}</small><div class="daily-mission-track"><i style="width:${mp}%"></i></div></div><div class="daily-mission-state">${complete?'✓':i+1}</div></div>`}).join('')}
  </div>
  <section class="daily-focus-card">
    <div><span>${done===5?'今日も完璧！':'今日も少しずつ。'}</span><b>${done===5?'Kerja bagus. Besok lanjut lagi.':'Mulai dari yang paling penting dulu.'}</b><small>${due?'Ada kartu review yang sudah waktunya diulang.':'Belum ada review due, jadi lanjutkan sesi N5 singkat.'}</small></div>
    <button class="daily-start-btn" onclick="dailyStart()">${due?`🧠 Review ${due} kartu`:'🌱 Mulai N5 5 menit'} <span>→</span></button>
  </section>`;
}
function progress(){
  const runs=Object.values(state.progress.quizRuns).reduce((a,b)=>a+b,0),acc=state.progress.total?Math.round(state.progress.correct/state.progress.total*100):0,due=totalDue(),streak=state.progress.streak||1;
  const tools=allMedicalToolCards(),toolTouched=tools.filter(x=>reviewInfo(x.id)).length,toolDue=tools.filter(x=>isDue(x.id)).length,toolBest=state.progress.best['KAIGO-medical-tools']||0,toolPct=Math.round(toolTouched/Math.max(1,tools.length)*100);
  const kaigoCards=allKaigoStudyCards(),kaigoTouched=touchedCount('KAIGO'),kaigoPct=Math.round(kaigoTouched/Math.max(1,kaigoCards.length)*100),kaigoBest=state.progress.best['KAIGO-kaigo']||0,handoffDone=handoffDoneCount(),handoffTotal=D.kaigo.handoff.length;
  const reportTotal=(D.kaigo.houkoku||[]).length,reportDone=houkokuDoneCount(),essayDone=houkokuEssayDoneCount();
  const jlptStats=LEVELS.map(l=>{const d=D.jlpt[l],total=allLevelCards(l).length,touched=touchedCount(l),gd=(d.grammar||[]).filter(g=>state.progress.grammarDone[g.id]).length,best=state.progress.best[`${l}-mix`]||0,levelDue=dueCards(l).length;return{l,total,touched,pct:Math.round(touched/Math.max(1,total)*100),grammarDone:gd,grammarTotal:d.grammar.length,best,due:levelDue}});
  return `${header('Progress','Tersimpan di perangkat ini')}<button class="back" onclick="go('home')">←</button>
  <section class="progress-hero">
    <div class="progress-hero-copy"><span>YOUR TENKA JOURNEY</span><b>少しずつ、でも前へ。</b><small>Progress kecil tetap progress. Semua data ini tersimpan di perangkatmu.</small></div>
    <div class="progress-summary-grid">
      <div><span>🔥</span><b>${streak}</b><small>hari streak</small></div>
      <div><span>🎮</span><b>${runs}</b><small>quiz dimainkan</small></div>
      <div><span>🎯</span><b>${acc}%</b><small>akurasi quiz</small></div>
      <div class="${due?'attention':''}"><span>🧠</span><b>${due}</b><small>review due</small></div>
    </div>
  </section>

  <div class="progress-section-head"><div><span>JLPT ROADMAP</span><b>N5 → N1</b></div><small>Kanji • Kosakata • Bunpou</small></div>
  <div class="progress-level-list">
    ${jlptStats.map(x=>`<div class="progress-level-card"><div class="progress-level-head"><span class="progress-level-badge">${x.l}</span><div><b>${x.l}</b><small>${x.touched}/${x.total} kartu • ${x.grammarDone}/${x.grammarTotal} bunpou</small></div><em>${x.pct}%</em></div><div class="progress-track"><i style="width:${x.pct}%"></i></div><div class="progress-level-meta"><span>🎮 Best ${x.best}%</span><span class="${x.due?'hot':''}">🧠 ${x.due} due</span></div></div>`).join('')}
  </div>

  <div class="progress-section-head"><div><span>KAIGO WORK</span><b>介護・Keperawatan</b></div><small>Bahasa kerja & laporan</small></div>
  <div class="progress-work-grid">
    <div class="progress-work-card kaigo"><div class="progress-work-title"><span>🏥</span><div><b>Kaigo</b><small>${kaigoTouched}/${kaigoCards.length} kartu disentuh</small></div><em>${kaigoPct}%</em></div><div class="progress-track"><i style="width:${kaigoPct}%"></i></div><div class="progress-work-meta"><span>🗣️ ${handoffDone}/${handoffTotal} 申し送り</span><span>🎮 Best ${kaigoBest}%</span></div></div>
    <div class="progress-work-card tools"><div class="progress-work-title"><span>🩺</span><div><b>Alat Medis</b><small>${toolTouched}/${tools.length} alat disentuh</small></div><em>${toolPct}%</em></div><div class="progress-track"><i style="width:${toolPct}%"></i></div><div class="progress-work-meta"><span class="${toolDue?'hot':''}">🧠 ${toolDue} due</span><span>🎮 Best ${toolBest}%</span></div></div>
    <div class="progress-work-card houkoku"><div class="progress-work-title"><span>📣</span><div><b>Houkoku・報告</b><small>Latihan laporan kerja</small></div><em>${reportDone+essayDone}/${Math.max(1,reportTotal*2)}</em></div><div class="progress-houkoku-levels"><span class="${reportDone>=reportTotal&&reportTotal?'done':''}">L1 ${reportDone}/${reportTotal}</span><span class="${essayDone>=reportTotal&&reportTotal?'done':''}">L2 ${essayDone}/${reportTotal}</span><span>Level 3 rencana</span></div></div>
  </div>`;
}
function audioSettings(){
  const a=window.TENKA_AUDIO,s=a?.settings?.()||{enabled:true,volume:.82,celebrationVoice:true},volume=Math.round((s.volume??.82)*100);
  return `<section id="tenka-sound-engine" class="settings-card settings-audio-card">
    <div class="settings-card-head"><span class="settings-card-icon">🎧</span><div><span>AUDIO SYSTEM</span><b>Exam Sound</b><small>SFX jawaban + voice Jepang untuk momen sesi.</small></div></div>
    <div class="settings-card-body">
      <div class="settings-option"><div class="settings-option-copy"><b>🔊 Master Audio</b><small>Aktifkan seluruh suara TENKA</small></div><input class="settings-switch" aria-label="Master Audio" type="checkbox" ${s.enabled?'checked':''} onchange="setAudioSetting('enabled',this.checked)"></div>
      <div class="settings-volume"><div class="settings-volume-head"><div><b>🔉 Volume</b><small>Atur volume efek dan celebration voice</small></div><strong>${volume}%</strong></div><input aria-label="Volume" type="range" min="0" max="1" step="0.05" value="${s.volume??.82}" onchange="setAudioSetting('volume',this.value)"></div>
      <div class="settings-option"><div class="settings-option-copy"><b>🎙️ Celebration Voice</b><small>Suara Jepang saat mulai, selesai, dan perfect</small></div><input class="settings-switch" aria-label="Celebration Voice" type="checkbox" ${s.celebrationVoice!==false?'checked':''} onchange="setAudioSetting('celebrationVoice',this.checked)"></div>
    </div>
    <div class="settings-test"><div><span>SOUND TEST</span><b>Coba suara</b></div><div class="settings-test-grid"><button onclick="previewAudio('correct')">✅<small>Benar</small></button><button onclick="previewAudio('wrong')">❌<small>Salah</small></button><button onclick="previewAudio('timeout')">⏱️<small>Time up</small></button><button onclick="previewAudio('finish')">🎉<small>Selesai</small></button><button onclick="previewAudio('perfect')">💯<small>Perfect</small></button></div></div>
    <div id="tenka-sound-pack-status" class="settings-audio-status">Memeriksa voice pack…</div>
  </section>`;
}
function settings(){
  return `${header('Settings','Atur pengalaman belajar TENKA')}<button class="back" onclick="go('home')">←</button>
  <section class="settings-hero"><div><span>TENKA PREFERENCES</span><b>Belajar senyaman mungkin.</b><small>Pengaturan ini tersimpan di perangkatmu dan bisa diubah kapan saja.</small></div><div class="settings-hero-mark">⚙️</div></section>
  <div class="settings-section-head"><div><span>GENERAL</span><b>Pengalaman belajar</b></div><small>Perangkat ini</small></div>
  <section class="settings-card"><div class="settings-card-body compact">${toggleRow('voice','🗣️ Audio pengucapan','Bacaan Jepang & listening',state.settings.voice,false)}${toggleRow('haptic','📳 Haptic',HAPTIC_SUPPORTED?'Getaran ringan saat interaksi':'Tidak didukung Safari/iPhone untuk web app',state.settings.haptic,!HAPTIC_SUPPORTED)}</div></section>
  <div class="settings-section-head"><div><span>SOUND</span><b>Audio & feedback</b></div><small>SFX + Voice</small></div>
  ${audioSettings()}
  <div class="settings-section-head danger-head"><div><span>DATA</span><b>Progress belajar</b></div><small>Hati-hati</small></div>
  <section class="settings-danger"><div><span>⚠️</span><div><b>Reset progress belajar</b><small>Menghapus progress, streak, review, quiz, dan data belajar yang tersimpan di perangkat ini.</small></div></div><button class="settings-reset" onclick="resetProgress()">Reset progress</button></section>`;
}
function toggleRow(key,title,sub,on,disabled){
  return `<div class="settings-option ${disabled?'disabled':''}"><div class="settings-option-copy"><b>${title}</b><small>${sub}</small></div><input class="settings-switch" type="checkbox" ${on?'checked':''} ${disabled?'disabled aria-disabled="true"':''} onchange="setSetting('${key}',this.checked)"></div>`;
}
function setSetting(key,value){if(key==='haptic'&&!HAPTIC_SUPPORTED){state.settings.haptic=false;save();return}state.settings[key]=value;save();toast('Tersimpan')}
function setAudioSetting(key,value){if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));window.TENKA_AUDIO?.setSetting?.(key,value);render()}
function previewAudio(event){window.TENKA_AUDIO?.playEvent?.(event)}
function resetProgress(){if(confirm('Reset semua progress belajar di perangkat ini?')){state.progress=defaultProgress();save();render();toast('Progress direset')}}

Object.assign(window,{startGreeting,go,homePrimary,dailyStart,openLevel,openFlash,openReview,flipCard,rateCard,openGrammar,toggleGrammar,startGrammarQuiz,speakText,startQuiz,answerQuiz,startKaigoQuiz,startMedicalToolQuiz,openKaigoFlash,openKaigoCategory,setMedicalToolCategory,openMedicalToolFlash,openMedicalToolReview,openMedicalTool,stepMedicalTool,stepToolFlash,openHoukokuPractice,houkokuPick,houkokuRemove,houkokuDragStart,houkokuDrop,houkokuCheck,houkokuReset,houkokuShowResult,finishHoukoku,openHoukokuEssay,houkokuEssayReveal,finishHoukokuEssay,openHandoffPractice,handoffNextSentence,handoffToQuestion,handoffAnswer,finishHandoff,openKakijun,animateStrokes,clearCanvas,toggleGuide,setSetting,setAudioSetting,previewAudio,resetProgress});
window.TENKA_CORE={state,render,dueCards,allLevelCards,allKaigoCards,allMedicalToolCards,allKaigoStudyCards,totalDue};
window.TENKA_APP_VERSION=APP_VERSION;
render();
window.TENKA_READY=true;
})();