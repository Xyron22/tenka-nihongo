(()=>{
'use strict';

const APP_VERSION='2.0.0';
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
  grammarDone:{},handoffDone:{},daily:{}
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
  quiz:null,timer:null,seconds:30,quizAnswered:false,kakijun:null,guide:false,
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

function header(title,sub=''){return `<div class="topbar"><div><div class="brand">${title}</div>${sub?`<div class="subtle">${sub}</div>`:''}</div><button class="icon-btn" onclick="startGreeting()">🔊</button></div>`}
function nav(){return `<nav class="bottom-nav"><button onclick="go('home')"><span>⌂</span>Home</button><button onclick="go('daily')"><span>🎯</span>Daily</button><button onclick="go('progress')"><span>📊</span>Progress</button><button onclick="go('settings')"><span>⚙️</span>Setting</button></nav>`}
function clearTimer(){if(state.timer)clearInterval(state.timer);state.timer=null}
function go(view){clearTimer();state.view=view;state.flipped=false;render();try{scrollTo(0,0)}catch{}}
function render(){
  const app=$('#app');if(!app)return;
  const withNav=['home','jlpt','level','grammar','kaigo','handoff','daily','progress','settings'].includes(state.view);
  const views={home,jlpt,level,flash,grammar,quiz:quizView,kaigo,handoff,kakijun,daily,progress,settings};
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
function allCards(){return [...LEVELS.flatMap(allLevelCards),...allKaigoCards()]}
function reviewInfo(id){return state.progress.reviews[id]||null}
function isDue(id){const r=reviewInfo(id);return !!(r&&r.due&&new Date(r.due).getTime()<=Date.now())}
function dueCards(level){return (level==='KAIGO'?allKaigoCards():allLevelCards(level)).filter(c=>isDue(c.id))}
function totalDue(){return LEVELS.reduce((n,l)=>n+dueCards(l).length,0)+dueCards('KAIGO').length}
function touchedCount(level){const ids=(level==='KAIGO'?allKaigoCards():allLevelCards(level)).map(x=>x.id);return ids.filter(id=>reviewInfo(id)).length}
function dueSession(){return [...LEVELS.flatMap(l=>dueCards(l)),...dueCards('KAIGO')]}

function home(){
  const due=totalDue();
  return `${header('TENKA 日本語','JLPT • Bunpou • Kaigo')}<section class="hero"><h1>今日も少しずつ。</h1><p>Satu layar, satu fokus. Belajar singkat tapi rutin.</p><div class="streak">🔥 ${state.progress.streak||1} hari streak</div><div class="spacer"></div><button class="action primary" onclick="homePrimary()">${due?`🧠 Review ${due} kartu →`:'始めよう！'}</button></section><div class="grid"><button class="nav-card" onclick="go('jlpt')"><div class="emoji">🈶</div><b>JLPT</b><span>N5 → N1 • kanji & kosakata</span></button><button class="nav-card" onclick="openGrammar('N5')"><div class="emoji">📝</div><b>Bunpou</b><span>Pola + latihan mini</span></button><button class="nav-card" onclick="go('kaigo')"><div class="emoji">🏥</div><b>Kaigo</b><span>Kosakata medis & 申し送り</span></button><button class="nav-card" onclick="go('daily')"><div class="emoji">🎯</div><b>Daily Study</b><span>Misi singkat setiap hari</span></button></div><div class="install-tip">📱 Safari → Share → <b>Add to Home Screen</b> untuk membuka TENKA seperti aplikasi.</div>`;
}
function homePrimary(){const due=dueSession();if(due.length)return openCustomFlash(due,'home','review');go('daily')}
function dailyStart(){const due=dueSession();if(due.length)return openCustomFlash(due,'daily','review');openFlash('N5','vocab')}
function jlpt(){return `${header('JLPT','Semua level terbuka')}<button class="back" onclick="go('home')">←</button><div class="grid">${LEVELS.map(l=>{const total=allLevelCards(l).length,learned=touchedCount(l),due=dueCards(l).length,pct=Math.round(learned/Math.max(1,total)*100);return `<button class="level-card" onclick="openLevel('${l}')"><div class="emoji">${l==='N5'?'🌱':l==='N4'?'🌿':l==='N3'?'🔥':l==='N2'?'⚡':'🏆'}</div><b>${l}</b><span>${learned}/${total} disentuh${due?` • ${due} review`:''}</span><div class="progress"><i style="width:${pct}%"></i></div></button>`}).join('')}</div>`}
function openLevel(level){state.level=level;go('level')}
function level(){
  const d=D.jlpt[state.level],l=state.level,due=dueCards(l).length,gd=(d.grammar||[]).filter(g=>state.progress.grammarDone[g.id]).length;
  return `${header(l,`${d.kanji.length} kanji • ${d.vocab.length} kosakata • ${d.grammar.length} bunpou`)}<button class="back" onclick="go('jlpt')">←</button><div class="list"><button class="row" onclick="openFlash('${l}','kanji')"><div class="left"><b>🈶 Flashcard Kanji</b><small>Bentuk • bacaan • arti • contoh • kakijun</small></div><span>›</span></button><button class="row" onclick="openFlash('${l}','vocab')"><div class="left"><b>🔤 Flashcard Kosakata</b><small>SRS + audio pengucapan</small></div><span>›</span></button><button class="row" onclick="openReview('${l}')"><div class="left"><b>🧠 Review Due</b><small>${due?`${due} kartu siap diulang`:'Belum ada review jatuh tempo'}</small></div><span>›</span></button><button class="row" onclick="openGrammar('${l}')"><div class="left"><b>📝 Bunpou ${l}</b><small>${gd}/${d.grammar.length} ditandai paham</small></div><span>›</span></button><button class="row" onclick="startQuiz('${l}','mix')"><div class="left"><b>🎮 Quiz 30 detik</b><small>Pilihan ganda + combo</small></div><span>›</span></button><button class="row" onclick="startQuiz('${l}','listening')"><div class="left"><b>🎧 Listening Quiz</b><small>Dengar Jepang → pilih arti</small></div><span>›</span></button></div>`;
}
function openFlash(level,kind){state.level=level;state.mode=kind;state.cards=(D.jlpt[level]?.[kind]||[]).map(c=>Object.assign({_kind:kind,_level:level},c));state.cardIndex=0;state.flipped=false;state.returnView='level';go('flash')}
function openCustomFlash(cards,returnView='level',mode='review'){state.cards=cards.slice();state.cardIndex=0;state.flipped=false;state.mode=mode;state.returnView=returnView;go('flash')}
function openReview(level){state.level=level;const cards=dueCards(level);if(!cards.length){toast('Belum ada kartu yang jatuh tempo');return}openCustomFlash(cards,level==='KAIGO'?'kaigo':'level','review')}
function currentCard(){return state.cards[state.cardIndex]||null}
function cardFront(c){return c._kind==='kanji'?`<div class="kanji">${c.kanji}</div>`:`<div class="term">${c.term}</div>`}
function cardBack(c){return `<div class="reading">${c.reading||''}</div>${c.romaji?`<div class="subtle">${c.romaji}</div>`:''}<div class="meaning">${c.meaning||''}</div><div class="example"><b>${c.example||''}</b>${c.exampleReading?`<br><small>${c.exampleReading}</small>`:''}<br>${c.exampleMeaning||''}</div>`}
function flash(){
  const c=currentCard();if(!c)return `<div class="score"><h2>Selesai 🎉</h2><p>Tidak ada kartu lagi di sesi ini.</p><button class="action primary" onclick="go('${state.returnView}')">Kembali</button></div>`;
  const due=reviewInfo(c.id)?.due;
  return `<div class="topbar"><button class="back" onclick="go('${state.returnView}')">←</button><div class="subtle">${state.cardIndex+1}/${state.cards.length}${state.mode==='review'?' • Review':''}</div><button class="icon-btn" onclick="speakText('${esc(c.reading||c.term||c.kanji)}')">🔊</button></div><div class="flash-wrap"><div class="flash ${state.flipped?'flipped':''}" onclick="flipCard()"><div class="face">${cardFront(c)}<div class="subtle">Tap untuk balik</div></div><div class="face backface">${cardBack(c)}</div></div></div>${c._kind==='kanji'?`<div class="small-actions"><button class="pill" onclick="openKakijun('${c.id}')">✍️ Kakijun</button><button class="pill" onclick="speakText('${esc(c.example||c.kanji)}')">🔊 Contoh</button></div><div class="spacer"></div>`:''}<div class="controls"><button class="action bad" onclick="rateCard('again')">😵 Lagi</button><button class="action blue" onclick="rateCard('good')">🙂 Hafal</button><button class="action ok" onclick="rateCard('easy')">✨ Mudah</button></div>${due?`<div class="subtle" style="text-align:center;margin-top:10px">Review sebelumnya: ${new Date(due).toLocaleDateString()}</div>`:''}`;
}
function esc(s){return String(s||'').replaceAll('\\','\\\\').replaceAll("'","\\'")}
function flipCard(){state.flipped=!state.flipped;const el=$('.flash');if(el)el.classList.toggle('flipped');haptic(12)}
function scheduleCard(c,rating){
  const old=reviewInfo(c.id),oldInt=Math.max(.01,Number(old?.intervalDays)||0);let intervalDays;
  if(rating==='again')intervalDays=10/1440;else if(rating==='good')intervalDays=oldInt?Math.max(1,oldInt*2.1):1;else intervalDays=oldInt?Math.max(4,oldInt*3):4;
  state.progress.reviews[c.id]={rating,intervalDays,due:new Date(Date.now()+intervalDays*86400000).toISOString(),last:new Date().toISOString()};
  save();markStudy();markDaily('cards',c.id);if(state.mode==='review')markDaily('reviewed',c.id);if(c._level==='KAIGO')markDaily('kaigo',c.id);
}
function rateCard(rating){
  const c=currentCard();if(!c)return;scheduleCard(c,rating);
  if(state.mode==='review'){state.cards.splice(state.cardIndex,1);if(state.cardIndex>=state.cards.length)state.cardIndex=0}else state.cardIndex=(state.cardIndex+1)%Math.max(1,state.cards.length);
  state.flipped=false;render();
}
function openGrammar(level){state.level=level;go('grammar')}
function grammar(){
  const arr=D.jlpt[state.level].grammar||[];
  return `${header(`Bunpou ${state.level}`,'Pahami konteks, lalu tes diri')}<button class="back" onclick="go('level')">←</button><div class="small-actions"><button class="action primary" onclick="startGrammarQuiz('${state.level}')">🎮 Quiz Bunpou</button></div>${arr.map(g=>{const done=!!state.progress.grammarDone[g.id];return `<article class="grammar-card"><span class="badge">${state.level}${done?' • ✅ Paham':''}</span><h3>${g.title}</h3><div class="meaning">${g.meaning}</div><p>${g.explanation}</p><div class="pattern">${g.pattern}</div><div class="example"><b>${g.example}</b><br><small>${g.exampleReading||''}</small><br>${g.exampleMeaning||''}</div><p class="subtle">⚠️ ${g.contrast||''}</p><div class="small-actions"><button class="pill" onclick="speakText('${esc(g.example)}')">🔊 Dengarkan</button><button class="pill" onclick="toggleGrammar('${g.id}')">${done?'↩️ Belum yakin':'✅ Tandai paham'}</button></div></article>`}).join('')}`;
}
function toggleGrammar(id){if(state.progress.grammarDone[id])delete state.progress.grammarDone[id];else{state.progress.grammarDone[id]=new Date().toISOString();markStudy();markDaily('grammar',id)}save();render()}
function grammarPool(){return LEVELS.flatMap(l=>(D.jlpt[l].grammar||[]).map(g=>Object.assign({_level:l},g)))}
function startGrammarQuiz(level){
  const src=(D.jlpt[level].grammar||[]).slice();if(!src.length){toast('Materi bunpou belum tersedia');return}
  const pool=grammarPool();const items=shuffle(src).slice(0,Math.min(10,src.length)).map(g=>{const wrong=shuffle(pool.filter(x=>x.id!==g.id&&x.meaning!==g.meaning).map(x=>x.meaning)).slice(0,3);const choices=shuffle([g.meaning,...wrong]);return{prompt:g.title,reading:g.pattern,correct:g.meaning,choices,answer:choices.indexOf(g.meaning),voiceText:g.example,type:'grammar'}});beginQuiz(level,'grammar',items,'grammar');
}
function shuffle(arr){const x=arr.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
function meaningPool(){return [...new Set(allCards().map(c=>c.meaning).filter(Boolean))]}
function makeCardQuiz(cards,type){const all=meaningPool();return shuffle(cards).slice(0,Math.min(10,cards.length)).map(c=>{const wrong=shuffle(all.filter(x=>x!==c.meaning)).slice(0,3),choices=shuffle([c.meaning,...wrong]);return{prompt:c.term||c.kanji,reading:c.reading,voiceText:c.reading||c.term||c.kanji,correct:c.meaning,choices,answer:choices.indexOf(c.meaning),type}})}
function startQuiz(level,type='mix'){state.level=level;beginQuiz(level,type,makeCardQuiz(allLevelCards(level),type),'level')}
function startKaigoQuiz(type='kaigo'){state.level='KAIGO';const quizType=(type==='listening'||type==='kaigo-listening')?'kaigo-listening':'kaigo';beginQuiz('KAIGO',quizType,makeCardQuiz(allKaigoCards(),quizType),'kaigo')}
function beginQuiz(level,type,items,returnView){clearTimer();if(!items.length){toast('Belum ada soal untuk sesi ini');return}state.level=level;state.returnView=returnView;state.quiz={items,i:0,score:0,type,combo:0,finished:false,saved:false,resultSoundPlayed:false};state.quizAnswered=false;go('quiz')}
function quizView(){
  const q=state.quiz;if(!q)return '';if(q.i>=q.items.length)return finishQuiz();const item=q.items[q.i],listening=q.type.includes('listening');
  return `<div class="quiz-head"><button class="back" onclick="go('${state.returnView}')">←</button><b>${q.i+1}/${q.items.length}</b><div id="timer" class="timer">30</div></div><section class="question">${listening?`<div class="subtle">Dengarkan lalu pilih arti</div><div class="jp">🔊</div><button class="pill" onclick="speakText('${esc(item.voiceText||item.prompt)}')">Putar lagi</button>`:`<div class="subtle">${q.type==='grammar'?'Apa arti/penggunaan pola ini?':'Apa arti kata ini?'}</div><div class="jp">${item.prompt}</div><div class="subtle">${item.reading||''}</div>`}</section><div class="choices">${item.choices.map((c,i)=>`<button id="choice-${i}" class="choice" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${c}</button>`).join('')}</div>`;
}
function startTimer(){clearTimer();state.seconds=30;const token=state.quiz?.i;state.timer=setInterval(()=>{if(!state.quiz||state.quiz.i!==token||state.quizAnswered){clearTimer();return}state.seconds--;const el=$('#timer');if(el){el.textContent=state.seconds;if(state.seconds<=5)el.classList.add('danger')}if(state.seconds<=0){clearTimer();answerQuiz(-1)}},1000)}
function answerQuiz(index){
  const q=state.quiz;if(state.quizAnswered||!q||q.i>=q.items.length)return;state.quizAnswered=true;clearTimer();
  const item=q.items[q.i],timedOut=index<0,ok=!timedOut&&index===item.answer,finalQuestion=q.i===q.items.length-1;
  state.progress.total++;let reaction=null;
  if(ok){q.score++;state.progress.correct++;q.combo++;if(!finalQuestion)reaction=(q.combo>=3&&q.combo%3===0)?'combo':'correct';haptic(18)}
  else{q.combo=0;if(!finalQuestion)reaction=timedOut?'timeout':'wrong';haptic(55)}
  markStudy();save();if(reaction)audioEvent(reaction);
  item.choices.forEach((_,n)=>{const b=$(`#choice-${n}`);if(!b)return;if(n===item.answer)b.classList.add('correct');else if(n===index)b.classList.add('wrong')});
  setTimeout(()=>{if(!state.quiz||state.quiz!==q)return;q.i++;state.quizAnswered=false;render()},700);
}
function finishQuiz(){
  const q=state.quiz;if(!q)return '';q.finished=true;clearTimer();const pct=Math.round(q.score/Math.max(1,q.items.length)*100),key=`${state.level}-${q.type}`;
  if(!q.saved){q.saved=true;state.progress.quizRuns[key]=(state.progress.quizRuns[key]||0)+1;state.progress.best[key]=Math.max(state.progress.best[key]||0,pct);markStudy();markDaily('quizzes');save()}
  if(!q.resultSoundPlayed){q.resultSoundPlayed=true;setTimeout(()=>{if(state.quiz===q&&state.view==='quiz')audioEvent(pct===100?'perfect':'finish')},80)}
  return `<div class="score"><div class="confetti">🎉✨🎊</div><div class="mega">${pct}%</div><h2>${pct===100?'パーフェクト！':pct>=70?'おめでとう！':'もう一回！'}</h2><p>${q.score}/${q.items.length} benar</p><button class="action primary" onclick="restartQuiz()">Main lagi</button> <button class="action" onclick="go('${state.returnView}')">Selesai</button></div>`;
}
function restartQuiz(){const type=state.quiz?.type;if(state.level==='KAIGO')return startKaigoQuiz(type==='kaigo-listening'?'listening':'kaigo');if(type==='grammar')return startGrammarQuiz(state.level);startQuiz(state.level,type||'mix')}
function kaigo(){
  const cats=[...new Set((D.kaigo.vocab||[]).map(x=>x.category).filter(Boolean))],due=dueCards('KAIGO').length;
  return `${header('Kaigo・Keperawatan','Tidak pakai level JLPT')}<button class="back" onclick="go('home')">←</button><div class="list"><button class="row" onclick="openKaigoFlash()"><div class="left"><b>🏥 Flashcard Kaigo</b><small>${D.kaigo.vocab.length} istilah</small></div><span>›</span></button><button class="row" onclick="openReview('KAIGO')"><div class="left"><b>🧠 Review Kaigo</b><small>${due?`${due} kartu jatuh tempo`:'Belum ada review jatuh tempo'}</small></div><span>›</span></button><button class="row" onclick="startKaigoQuiz('kaigo')"><div class="left"><b>🎮 Quiz Kaigo</b><small>Istilah rumah sakit</small></div><span>›</span></button><button class="row" onclick="startKaigoQuiz('listening')"><div class="left"><b>🎧 Listening Kaigo</b><small>Dengar istilah → tangkap arti</small></div><span>›</span></button><button class="row" onclick="go('handoff')"><div class="left"><b>🗣️ 申し送り Practice</b><small>Dengar konteks operan</small></div><span>›</span></button></div><div class="section-title">Kategori</div><div class="small-actions">${cats.map(x=>`<button class="pill" onclick="openKaigoCategory('${esc(x)}')">${x}</button>`).join('')}</div>`;
}
function openKaigoFlash(){state.level='KAIGO';state.cards=allKaigoCards();state.mode='vocab';state.cardIndex=0;state.flipped=false;state.returnView='kaigo';go('flash')}
function openKaigoCategory(cat){const cards=allKaigoCards().filter(x=>x.category===cat);if(!cards.length)return;state.level='KAIGO';openCustomFlash(cards,'kaigo','vocab')}
function handoff(){return `${header('申し送り Practice','Baca → dengar → tangkap inti')}<button class="back" onclick="go('kaigo')">←</button>${(D.kaigo.handoff||[]).map(h=>{const done=!!state.progress.handoffDone[h.id];return `<article class="grammar-card" data-handoff="${h.id}"><span class="badge">${done?'✅ Selesai':'申し送り'}</span><div class="handoff">${h.text}</div><div class="furigana">${h.reading||''}</div><div class="small-actions"><button class="pill" onclick="speakText('${esc(h.text)}')">🔊 Normal</button><button class="pill" onclick="speakText('${esc(h.text)}',.68)">🐢 Pelan</button></div><div class="example">🇮🇩 ${h.meaning||''}</div><h3 style="font-size:18px">${h.question}</h3><div class="choices">${h.choices.map((c,i)=>`<button class="choice" onclick="handoffAnswer(this,'${h.id}',${i})">${c}</button>`).join('')}</div></article>`}).join('')}`}
function handoffAnswer(btn,id,index){const h=(D.kaigo.handoff||[]).find(x=>x.id===id);if(!h)return;const ok=index===h.answer,card=btn.closest?.('[data-handoff]');if(card)card.querySelectorAll('.choice').forEach((b,i)=>{if(i===h.answer)b.classList.add('correct');else if(i===index)b.classList.add('wrong')});answerFeedback(ok);if(ok){state.progress.handoffDone[id]=new Date().toISOString();markDaily('kaigo','handoff:'+id);save()}toast(ok?'正解！':'惜しい！')}
function findKanji(id){for(const l of LEVELS){const c=(D.jlpt[l].kanji||[]).find(x=>x.id===id);if(c)return Object.assign({_kind:'kanji',_level:l},c)}return null}
function openKakijun(id){state.kakijun=findKanji(id);if(state.kakijun)go('kakijun')}
function kakijun(){const c=state.kakijun,has=c?.strokes?.length;return `<div class="topbar"><button class="back" onclick="go('flash')">←</button><div><b>書き順 Kakijun</b><div class="subtle">${c?.kanji||''} • ${has?c.strokes.length+' goresan':'stroke belum tersedia'}</div></div><button class="icon-btn" onclick="animateStrokes()">▶️</button></div>${has?`<div class="kanji-stage"><svg viewBox="0 0 100 100">${c.strokes.map((p,i)=>`<path class="stroke" data-i="${i}" d="${p}"/>`).join('')}</svg></div>`:`<div class="muted-box">Data stroke akurat untuk kanji ini belum dimasukkan. Engine latihan menulis tetap bisa dipakai.</div>`}<div class="section-title">✍️ Coba tulis dengan jari</div><div class="canvas-wrap"><canvas id="writeCanvas" width="650" height="420"></canvas></div><div class="small-actions" style="margin-top:10px"><button class="pill" onclick="clearCanvas()">Hapus</button><button class="pill" onclick="toggleGuide()">${state.guide?'Sembunyikan':'Tampilkan'} contoh</button><button class="pill" onclick="speakText('${esc(c?.reading||c?.kanji||'')}')">🔊 Bacaan</button></div>`}
function animateStrokes(){$$('.stroke').forEach((p,i)=>{p.classList.remove('animate');void p.offsetWidth;setTimeout(()=>p.classList.add('animate'),i*620)})}
let drawing=false,ctx2=null;
function setupCanvas(){const c=$('#writeCanvas');if(!c)return;ctx2=c.getContext('2d');ctx2.lineWidth=12;ctx2.lineCap='round';ctx2.strokeStyle='#111';const pos=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};c.onpointerdown=e=>{e.preventDefault();drawing=true;const[x,y]=pos(e);ctx2.beginPath();ctx2.moveTo(x,y)};c.onpointermove=e=>{if(!drawing)return;e.preventDefault();const[x,y]=pos(e);ctx2.lineTo(x,y);ctx2.stroke()};c.onpointerup=c.onpointerleave=()=>drawing=false;if(state.guide)drawGuide()}
function clearCanvas(){const c=$('#writeCanvas');if(ctx2&&c)ctx2.clearRect(0,0,c.width,c.height);if(state.guide)drawGuide()}
function toggleGuide(){state.guide=!state.guide;render()}
function drawGuide(){const c=$('#writeCanvas');if(!ctx2||!c||!state.kakijun)return;ctx2.save();ctx2.globalAlpha=.12;ctx2.fillStyle='#111';ctx2.font='300px serif';ctx2.textAlign='center';ctx2.textBaseline='middle';ctx2.fillText(state.kakijun.kanji,c.width/2,c.height/2+10);ctx2.restore()}
function daily(){const d=ensureDaily(),due=totalDue();const missions=[['🧠 Review selesai',5,Math.min(5,d.reviewed.length)],['🔤 Kartu dipelajari',10,Math.min(10,d.cards.length)],['📝 Bunpou',1,Math.min(1,d.grammar.length)],['🎮 Quiz',1,Math.min(1,d.quizzes)],['🏥 Kaigo',5,Math.min(5,d.kaigo.length)]];return `${header('今日のミッション',`${due} review menunggu`)}<button class="back" onclick="go('home')">←</button>${missions.map(m=>`<div class="mission"><div class="mission-line"><b>${m[0]}</b><span>${m[2]}/${m[1]}</span></div><div class="progress"><i style="width:${Math.min(100,m[2]/m[1]*100)}%"></i></div></div>`).join('')}<button class="action primary" onclick="dailyStart()">${due?`🧠 Review ${due} kartu →`:'Mulai N5 5 menit →'}</button>`}
function progress(){const runs=Object.values(state.progress.quizRuns).reduce((a,b)=>a+b,0),acc=state.progress.total?Math.round(state.progress.correct/state.progress.total*100):0,due=totalDue();return `${header('Progress','Tersimpan di perangkat ini')}<button class="back" onclick="go('home')">←</button><div class="grid"><div class="nav-card"><div class="emoji">🔥</div><b>${state.progress.streak||1}</b><span>day streak</span></div><div class="nav-card"><div class="emoji">🎮</div><b>${runs}</b><span>quiz dimainkan</span></div><div class="nav-card"><div class="emoji">🎯</div><b>${acc}%</b><span>akurasi quiz</span></div><div class="nav-card"><div class="emoji">🧠</div><b>${due}</b><span>review due</span></div></div><div class="section-title">JLPT</div>${LEVELS.map(l=>{const d=D.jlpt[l],gd=(d.grammar||[]).filter(g=>state.progress.grammarDone[g.id]).length;return `<div class="row"><div><b>${l}</b><small>${touchedCount(l)}/${allLevelCards(l).length} kartu • ${gd}/${d.grammar.length} bunpou</small></div><span>${state.progress.best[`${l}-mix`]||0}% best</span></div>`}).join('')}<div class="section-title">Kaigo</div><div class="row"><div><b>🏥 Kaigo</b><small>${touchedCount('KAIGO')}/${allKaigoCards().length} kartu • ${Object.keys(state.progress.handoffDone).length}/${D.kaigo.handoff.length} 申し送り</small></div><span>${state.progress.best['KAIGO-kaigo']||0}% best</span></div>`}
function audioSettings(){const a=window.TENKA_AUDIO,s=a?.settings?.()||{enabled:true,volume:.9,mode:'anime'};const labels={greeting:'👋 Mulai',correct:'✅ Benar',wrong:'❌ Salah',combo:'🔥 Combo',timeout:'⏱️ Time up',finish:'🎉 Selesai',perfect:'💯 Perfect'};const buttons=Object.keys(labels).map(e=>`<button class="pill" onclick="previewAudio('${e}')">${labels[e]}</button>`).join('');const custom=['correct','wrong','combo','timeout','finish','perfect'].map(e=>`<label class="pill">＋ ${e}<input type="file" accept="audio/*,.mp3,.wav,.m4a,.ogg" multiple style="display:none" onchange="importCustomSound('${e}',this)"></label>`).join('');return `<section id="tenka-sound-engine"><div class="section-title">🎧 TENKA Sound Engine 2</div><div class="muted-box">Satu aksi = satu reaction. Tidak ada patch audio berlapis.</div><div class="toggle"><div><b>🔊 Master Audio</b><div class="subtle">Reaction voice dan game SFX</div></div><input type="checkbox" ${s.enabled?'checked':''} onchange="setAudioSetting('enabled',this.checked)"></div><div class="row"><div style="flex:1"><b>🔉 Volume</b><small>${Math.round((s.volume??.9)*100)}%</small></div><input aria-label="Volume" type="range" min="0" max="1" step="0.05" value="${s.volume??.9}" onchange="setAudioSetting('volume',this.value)" style="width:145px"></div><div class="row"><div><b>🎭 Reaction style</b><small>Anime Voice atau SFX tenang</small></div><select onchange="setAudioSetting('mode',this.value)" style="background:#202026;color:white;border:1px solid #3a3a42;border-radius:12px;padding:9px"><option value="anime" ${s.mode==='anime'?'selected':''}>Anime Voice</option><option value="quiet" ${s.mode==='quiet'?'selected':''}>Quiet SFX</option></select></div><div class="section-title">🎚️ Test reaction</div><div class="small-actions">${buttons}</div><div class="section-title">🎵 Custom lokal</div><div class="small-actions">${custom}</div><div id="tenka-sound-pack-status" class="muted-box" style="margin-top:12px">Memeriksa built-in sound pack…</div></section>`}
function settings(){return `${header('Settings','Sistem inti dibuat sederhana dan stabil')}<button class="back" onclick="go('home')">←</button>${toggleRow('voice','🗣️ Audio pengucapan','Bacaan Jepang & listening',state.settings.voice,false)}${toggleRow('haptic','📳 Haptic',HAPTIC_SUPPORTED?'Didukung browser ini':'Tidak didukung Safari/iPhone untuk web app',state.settings.haptic,!HAPTIC_SUPPORTED)}<div class="spacer"></div>${audioSettings()}<div class="spacer"></div><button class="action bad" onclick="resetProgress()">Reset progress belajar</button>`}
function toggleRow(key,title,sub,on,disabled){return `<div class="toggle"><div><b>${title}</b><div class="subtle">${sub}</div></div><input type="checkbox" ${on?'checked':''} ${disabled?'disabled aria-disabled="true"':''} onchange="setSetting('${key}',this.checked)"></div>`}
function setSetting(key,value){if(key==='haptic'&&!HAPTIC_SUPPORTED){state.settings.haptic=false;save();return}state.settings[key]=value;save();toast('Tersimpan')}
function setAudioSetting(key,value){if(key==='volume')value=Math.max(0,Math.min(1,Number(value)||0));window.TENKA_AUDIO?.setSetting?.(key,value);render()}
function previewAudio(event){window.TENKA_AUDIO?.playEvent?.(event)}
async function importCustomSound(event,input){try{const result=await window.TENKA_AUDIO?.importEvent?.('custom',event,[...(input?.files||[])]);toast(result?.saved?`${result.saved} sound custom ditambahkan`:'Tidak ada file audio yang terbaca')}catch{toast('Gagal membaca audio')}if(input)input.value='';render()}
function resetProgress(){if(confirm('Reset semua progress belajar di perangkat ini?')){state.progress=defaultProgress();save();render();toast('Progress direset')}}

Object.assign(window,{startGreeting,go,homePrimary,dailyStart,openLevel,openFlash,openReview,flipCard,rateCard,openGrammar,toggleGrammar,startGrammarQuiz,speakText,startQuiz,answerQuiz,restartQuiz,startKaigoQuiz,openKaigoFlash,openKaigoCategory,handoffAnswer,openKakijun,animateStrokes,clearCanvas,toggleGuide,setSetting,setAudioSetting,previewAudio,importCustomSound,resetProgress});
window.TENKA_CORE={state,render,dueCards,allLevelCards,allKaigoCards,totalDue};
window.TENKA_APP_VERSION=APP_VERSION;
render();
window.TENKA_READY=true;
})();