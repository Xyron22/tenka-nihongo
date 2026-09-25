(()=> {
'use strict';
const D=window.TENKA_DATA;if(!D||!D.kaigo)return;

// Stage 6A-3: tools 01–08 use independent images (one 1×1 cell).
// Stage 6A-4B: tools 09–13 now use standalone images; no tool card depends on the draft atlas.
// Explicit dimensions preserve each image's aspect ratio.
D.kaigo.tools=[
{
 id:'tool-01',term:'体温計',reading:'たいおんけい',meaning:'termometer',category:'検査・測定',
 image:'assets/tools/thermometer-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'体温を測るための器具です。',functionReading:'たいおん を はかる ため の きぐ です。',functionID:'Alat untuk mengukur suhu tubuh.',
 example:'体温計で体温を測ります。',exampleReading:'たいおんけい で たいおん を はかります。',exampleMeaning:'Mengukur suhu tubuh dengan termometer.'
},
{
 id:'tool-02',term:'血圧計',reading:'けつあつけい',meaning:'tensimeter / alat ukur tekanan darah',category:'検査・測定',
 image:'assets/tools/blood-pressure-monitor-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'血圧を測るための機器です。',functionReading:'けつあつ を はかる ため の きき です。',functionID:'Alat untuk mengukur tekanan darah.',
 example:'血圧計で血圧を測ります。',exampleReading:'けつあつけい で けつあつ を はかります。',exampleMeaning:'Mengukur tekanan darah dengan tensimeter.'
},
{
 id:'tool-03',term:'聴診器',reading:'ちょうしんき',meaning:'stetoskop',category:'検査・測定',
 image:'assets/tools/stethoscope-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'心音や呼吸音などを聴くための器具です。',functionReading:'しんおん や こきゅうおん など を きく ため の きぐ です。',functionID:'Alat untuk mendengarkan bunyi jantung, bunyi napas, dan suara tubuh lainnya.',
 example:'看護師が聴診器で呼吸音を確認します。',exampleReading:'かんごし が ちょうしんき で こきゅうおん を かくにん します。',exampleMeaning:'Perawat memeriksa bunyi napas dengan stetoskop.'
},
{
 id:'tool-04',term:'パルスオキシメーター',reading:'ぱるすおきしめーたー',meaning:'pulse oximeter',category:'検査・測定',
 image:'assets/tools/pulse-oximeter-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'SpO₂や脈拍を測る機器です。',functionReading:'エスピーオーツー や みゃくはく を はかる きき です。',functionID:'Alat untuk mengukur SpO₂ dan denyut nadi.',
 example:'パルスオキシメーターでSpO₂を測ります。',exampleReading:'ぱるすおきしめーたー で エスピーオーツー を はかります。',exampleMeaning:'Mengukur SpO₂ dengan pulse oximeter.'
},
{
 id:'tool-05',term:'注射器',reading:'ちゅうしゃき',meaning:'syringe / alat suntik',category:'処置・治療',
 image:'assets/tools/syringe-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'薬液を注入したり、液体を吸い取ったりする器具です。',functionReading:'やくえき を ちゅうにゅう したり、えきたい を すいとったり する きぐ です。',functionID:'Alat untuk memasukkan cairan obat atau menarik cairan.',
 example:'これは注射器です。',exampleReading:'これ は ちゅうしゃき です。',exampleMeaning:'Ini adalah syringe / alat suntik.'
},
{
 id:'tool-06',term:'点滴',reading:'てんてき',meaning:'infus / IV drip',category:'処置・治療',
 image:'assets/tools/iv-drip-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'静脈から水分や薬剤などを入れる方法です。',functionReading:'じょうみゃく から すいぶん や やくざい など を いれる ほうほう です。',functionID:'Pemberian cairan atau obat melalui pembuluh vena.',
 example:'点滴をしています。',exampleReading:'てんてき を して います。',exampleMeaning:'Sedang mendapat infus.'
},
{
 id:'tool-07',term:'点滴スタンド',reading:'てんてきすたんど',meaning:'tiang infus / IV pole',category:'処置・治療',
 image:'assets/tools/iv-pole-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'点滴バッグなどを掛けるためのスタンドです。',functionReading:'てんてきバッグ など を かける ため の スタンド です。',functionID:'Tiang untuk menggantung kantong infus dan perlengkapannya.',
 example:'点滴スタンドをベッドの横に置きます。',exampleReading:'てんてきすたんど を ベッド の よこ に おきます。',exampleMeaning:'Meletakkan tiang infus di samping tempat tidur.'
},
{
 id:'tool-08',term:'吸引器',reading:'きゅういんき',meaning:'alat suction / aspirator',category:'処置・治療',
 image:'assets/tools/suction-machine-v2.png',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:1254,spriteHeight:1254,
 functionJP:'痰や唾液などを吸引するための機器です。',functionReading:'たん や だえき など を きゅういん する ため の きき です。',functionID:'Alat untuk melakukan suction pada dahak, saliva, atau cairan lain.',
 example:'吸引器を準備します。',exampleReading:'きゅういんき を じゅんび します。',exampleMeaning:'Menyiapkan alat suction.',
 safetyNote:'吸引は資格・指示・施設の手順に従って行います。',
 safetyNoteReading:'きゅういん は しかく・しじ・しせつ の てじゅん に したがって おこないます。',
 safetyNoteMeaning:'Suction dilakukan sesuai kualifikasi, instruksi, dan prosedur fasilitas.'
},
{
 id:'tool-09',term:'車椅子',reading:'くるまいす',meaning:'kursi roda',category:'介護・移動',
 image:'assets/tools/wheelchair-v2.svg',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:512,spriteHeight:512,
 functionJP:'歩行が難しい人の移動を助けるための用具です。',functionReading:'ほこう が むずかしい ひと の いどう を たすける ため の ようぐ です。',functionID:'Alat untuk membantu mobilitas orang yang kesulitan berjalan.',
 example:'車椅子で食堂まで移動します。',exampleReading:'くるまいす で しょくどう まで いどう します。',exampleMeaning:'Berpindah sampai ruang makan dengan kursi roda.'
},
{
 id:'tool-10',term:'歩行器',reading:'ほこうき',meaning:'walker / alat bantu jalan',category:'介護・移動',
 image:'assets/tools/walker-v2.svg',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:512,spriteHeight:512,
 functionJP:'歩行を安定させるための福祉用具です。',functionReading:'ほこう を あんてい させる ため の ふくしようぐ です。',functionID:'Alat bantu untuk membuat berjalan lebih stabil.',
 example:'歩行器を使って歩きます。',exampleReading:'ほこうき を つかって あるきます。',exampleMeaning:'Berjalan menggunakan walker.'
},
{
 id:'tool-11',term:'ポータブルトイレ',reading:'ぽーたぶるといれ',meaning:'toilet portable / commode chair',category:'排泄・清潔',
 image:'assets/tools/portable-toilet-v2.svg',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:512,spriteHeight:512,
 functionJP:'トイレまで移動することが難しい人が、ベッドの近くなどで使う便器です。',functionReading:'トイレ まで いどう する こと が むずかしい ひと が、ベッド の ちかく など で つかう べんき です。',functionID:'Toilet portable untuk orang yang sulit pergi sampai toilet.',
 example:'ポータブルトイレをベッドの近くに置きます。',exampleReading:'ぽーたぶるといれ を ベッド の ちかく に おきます。',exampleMeaning:'Meletakkan toilet portable di dekat tempat tidur.'
},
{
 id:'tool-12',term:'おむつ',reading:'おむつ',meaning:'popok dewasa / diaper',category:'排泄・清潔',
 image:'assets/tools/adult-diaper-v2.svg',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:512,spriteHeight:512,
 functionJP:'尿や便を受けるために使用する排泄用品です。',functionReading:'にょう や べん を うける ため に しよう する はいせつようひん です。',functionID:'Perlengkapan untuk menampung urine atau feses.',
 example:'おむつを交換します。',exampleReading:'おむつ を こうかん します。',exampleMeaning:'Mengganti popok.'
},
{
 id:'tool-13',term:'使い捨て手袋',reading:'つかいすててぶくろ',meaning:'sarung tangan sekali pakai',category:'感染対策',
 image:'assets/tools/disposable-gloves-v2.svg',spriteIndex:0,spriteCols:1,spriteRows:1,spriteWidth:512,spriteHeight:512,
 functionJP:'手を汚染から守り、感染対策のために使用します。',functionReading:'て を おせん から まもり、かんせんたいさく の ため に しよう します。',functionID:'Sarung tangan sekali pakai untuk melindungi tangan dan membantu pencegahan infeksi.',
 example:'ケアの前に使い捨て手袋を着けます。',exampleReading:'ケア の まえ に つかいすててぶくろ を つけます。',exampleMeaning:'Memakai sarung tangan sekali pakai sebelum melakukan care.'
}
];

})();
