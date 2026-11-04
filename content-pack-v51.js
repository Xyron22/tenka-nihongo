// Stage 10A-19: original N4 lexical applications and contextual kana practice.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
// Enrich the two legacy cards without changing their IDs or existing fields.
const legacy={
  'n4-v-01':{category:'Tindakan dan kelanjutan',exampleReading:'しごと に まにあいました。',note:'間に合う berarti sempat atau tiba sebelum batas waktu. Gunakan 仕事に間に合う. Bedakan 間に合わない (tidak sempat) dari ゆっくり (perlahan); bukan semua tindakan lambat pasti terlambat.'},
  'n4-v-02':{category:'Tindakan dan kelanjutan',exampleReading:'べんきょう を つづけます。',note:'続ける ialah verba transitif: 勉強を続ける berarti melanjutkan belajar. 続く menyebut sesuatu berlanjut. どんどん menerangkan laju atau perkembangan, sedangkan 続ける menyebut tindakan melanjutkan.'}
};
for(const [id,fields] of Object.entries(legacy)){const c=D.jlpt.N4.vocab.find(v=>v.id===id);if(c)for(const [key,value] of Object.entries(fields))if(c[key]===undefined)c[key]=value;}
const rows=[
  {
    id:'n4-v-03',term:'どんどん',reading:'どんどん',meaning:'terus berkembang dengan cepat / berturut-turut',category:'Laju dan urutan',
    example:'朝から、お客さんがどんどん来ています。',exampleReading:'あさ から、おきゃくさん が どんどん きて います。',exampleMeaning:'Sejak pagi, para pelanggan terus berdatangan silih berganti.',
    note:'どんどん menonjolkan perkembangan atau tindakan yang terus maju dengan kuat atau cepat. だんだん menonjolkan perubahan bertahap. Ini perbedaan penekanan, bukan ukuran kecepatan yang memiliki angka tetap. Bunyi ketukan どんどん memiliki pemakaian lain; kartu ini melatih perkembangan.'
  },
  {
    id:'n4-v-04',term:'まず',reading:'まず',meaning:'pertama-tama / dahulukan langkah ini',category:'Laju dan urutan',
    example:'まず、問題を読んでから、答えを書いてください。',exampleReading:'まず、もんだい を よんで から、こたえ を かいて ください。',exampleMeaning:'Pertama-tama bacalah soalnya, lalu tulis jawabannya.',
    note:'まず mengatur hal yang dilakukan atau dibicarakan lebih dahulu. Ini bukan kata untuk peringkat juara satu. 初めに dapat beririsan pada urutan langkah; jangan menganggap keduanya selalu saling bertentangan.'
  },
  {
    id:'n4-v-05',term:'とうとう',reading:'とうとう',meaning:'akhirnya terjadi setelah suatu proses',category:'Hasil dan harapan',quizGroup:'final-outcome',
    example:'何度も直しましたが、古い時計はとうとう動かなくなりました。',exampleReading:'なんど も なおしました が、ふるい とけい は とうとう うごかなく なりました。',exampleMeaning:'Sudah berkali-kali diperbaiki, tetapi jam lama itu akhirnya berhenti berfungsi.',
    extraExample:'長い間探していた本を、とうとう見つけました。',extraExampleReading:'ながい あいだ さがして いた ほん を、とうとう みつけました。',extraExampleMeaning:'Akhirnya saya menemukan buku yang sudah lama saya cari.',
    note:'とうとう menyoroti hasil akhir setelah proses atau waktu berlalu. Hasilnya dapat diharapkan maupun tidak diharapkan. やっと sering menonjolkan susah payah atau penantian dan rasa berhasil; pada hasil yang diharapkan keduanya dapat beririsan, sehingga tidak dijadikan pengecoh satu sama lain.'
  },
  {
    id:'n4-v-06',term:'なるべく',reading:'なるべく',meaning:'sebisa mungkin / sedapat mungkin',category:'Hasil dan harapan',
    example:'明日は、なるべく早く家を出るつもりです。',exampleReading:'あした は、なるべく はやく いえ を でる つもり です。',exampleMeaning:'Besok saya berniat berangkat dari rumah sepagi mungkin.',
    note:'なるべく menyatakan upaya dalam batas yang memungkinkan; tidak menjamin rencana pasti tercapai. できるだけ dapat mempunyai arti yang beririsan. きっと menyatakan keyakinan atau perkiraan kuat, sedangkan なるべく menerangkan usaha sedapat mungkin.'
  },
  {
    id:'n4-v-07',term:'やっと',reading:'やっと',meaning:'akhirnya berhasil / dengan susah payah baru bisa',category:'Hasil dan harapan',quizGroup:'final-outcome',
    example:'何度も練習して、やっとこの漢字が書けました。',exampleReading:'なんど も れんしゅう して、やっと この かんじ が かけました。',exampleMeaning:'Setelah berlatih berkali-kali, akhirnya saya bisa menulis kanji ini.',
    extraExample:'一人でこの箱を持つのがやっとです。',extraExampleReading:'ひとり で この はこ を もつ の が やっと です。',extraExampleMeaning:'Saya hanya sanggup membawa kotak ini sendirian dengan susah payah.',
    note:'やっと dapat menonjolkan keberhasilan setelah usaha atau penantian. Dalam ～のがやっと, kemampuannya nyaris pada batas: baru sanggup melakukan hal itu. とうとう dapat beririsan pada arti akhirnya; jangan membuat aturan bahwa hanya satu kata selalu benar untuk semua hasil yang diharapkan.'
  },
  {
    id:'n4-v-08',term:'きっと',reading:'きっと',meaning:'saya yakin / besar kemungkinan menurut pembicara',category:'Hasil dan harapan',
    example:'山田さんは、きっと来ると思います。',exampleReading:'やまださん は、きっと くる と おもいます。',exampleMeaning:'Saya yakin Yamada akan datang.',
    note:'きっと menonjolkan keyakinan kuat pembicara. Pada perkiraan ini, hasilnya belum menjadi fakta terverifikasi dan tidak memiliki persentase tetap. ぜひ menonjolkan keinginan atau ajakan kuat, bukan perkiraan peluang kedatangan seseorang.'
  },
  {
    id:'n4-v-09',term:'急に',reading:'きゅうに',meaning:'tiba-tiba / secara mendadak',category:'Laju dan urutan',
    example:'静かだった子どもが、急に泣き始めました。',exampleReading:'しずか だった こども が、きゅうに なきはじめました。',exampleMeaning:'Anak yang tadinya tenang tiba-tiba mulai menangis.',
    note:'急に menerangkan perubahan atau kejadian mendadak. 急いで berarti dengan bergegas dan tidak selalu berarti mendadak. どんどん menyoroti perkembangan berkelanjutan, sedangkan 急に menyoroti kemendadakan.'
  },
  {
    id:'n4-v-10',term:'さっき',reading:'さっき',meaning:'tadi / beberapa saat yang lalu',category:'Waktu dan perkiraan',
    example:'さっき、駅で田中さんに会いました。',exampleReading:'さっき、えき で たなかさん に あいました。',exampleMeaning:'Tadi saya bertemu Tanaka di stasiun.',
    note:'さっき menunjuk waktu yang terasa baru saja berlalu menurut konteks. Tidak ada batas menit universal. Ini berbeda dari 昨日 (kemarin). Untuk kejadian sekitar seminggu lalu, この前 atau 先週 dapat lebih sesuai daripada memaksakan さっき.'
  },
  {
    id:'n4-v-11',term:'ぜひ',reading:'ぜひ',meaning:'sangat ingin / sungguh menganjurkan agar dilakukan',category:'Hasil dan harapan',
    example:'福岡に来たら、ぜひこの店に寄ってください。',exampleReading:'ふくおか に きたら、ぜひ この みせ に よって ください。',exampleMeaning:'Kalau datang ke Fukuoka, saya sangat menganjurkan Anda mampir ke toko ini.',
    extraExample:'私もぜひ参加したいです。',extraExampleReading:'わたし も ぜひ さんか したい です。',extraExampleMeaning:'Saya juga sangat ingin ikut serta.',
    note:'ぜひ menguatkan keinginan, ajakan atau permintaan, misalnya ぜひ参加したい dan ぜひ来てください. Ini tidak memastikan orang lain akan datang atau menyetujui permintaan. Bedakan keyakinan きっと dari keinginan atau dorongan ぜひ.'
  },
  {
    id:'n4-v-12',term:'だいたい',reading:'だいたい',meaning:'kira-kira / kurang lebih (jumlah atau waktu)',category:'Waktu dan perkiraan',
    example:'家から駅までは、歩いてだいたい十五分かかります。',exampleReading:'いえ から えき までは、あるいて だいたい じゅうごふん かかります。',exampleMeaning:'Dari rumah ke stasiun perlu kira-kira lima belas menit berjalan kaki.',
    extraExample:'会議には、だいたい二十人が来ます。',extraExampleReading:'かいぎ には、だいたい にじゅうにん が きます。',extraExampleMeaning:'Kira-kira dua puluh orang akan datang ke rapat.',
    note:'Kartu aplikasi N4 dari prasyarat N5 だいたい. Di depan jumlah atau durasi, artinya perkiraan, bukan angka tepat. だいたい分かる yang sudah dipelajari berarti memahami sebagian besar; bukan memahami lima belas hal. ぐらい juga dapat menyatakan perkiraan dan tidak otomatis salah.'
  },
  {
    id:'n4-v-13',term:'また',reading:'また',meaning:'selain itu / juga (menambahkan informasi)',category:'Hubungan informasi',
    example:'この町には図書館があります。また、公園もあります。',exampleReading:'この まち には としょかん が あります。また、こうえん も あります。',exampleMeaning:'Di kota ini ada perpustakaan. Selain itu, ada taman juga.',
    note:'Kartu aplikasi N4 dari また yang pada N5 sudah berarti lagi atau juga. Di sini また menghubungkan tambahan informasi, bukan menyatakan taman terjadi lagi. また明日 datang lagi besok memakai arti pengulangan. または adalah penghubung pilihan atau dan perlu dipelajari terpisah.'
  },
  {
    id:'n4-v-14',term:'取り出す',reading:'とりだす',meaning:'mengambil keluar dari dalam sesuatu',category:'Tindakan dan kelanjutan',
    example:'かばんから財布を取り出しました。',exampleReading:'かばん から さいふ を とりだしました。',exampleMeaning:'Saya mengambil dompet dari dalam tas.',
    extraExample:'ポケットから鍵を取り出してください。',extraExampleReading:'ポケット から かぎ を とりだして ください。',extraExampleMeaning:'Tolong keluarkan kunci dari saku.',
    note:'取り出す melatih makna keluar pada kata majemuk: sumber + から, benda + を. Ini bukan mulai mengambil secara mendadak. 泣き出す pada bunpou menyoroti mulai menangis; jangan menyimpulkan semua kata berakhiran 出す selalu berarti mulai atau selalu berarti keluar. Pelajari arti tiap kata majemuk.'
  }
];
for(const row of rows){const old=D.jlpt.N4.vocab.find(v=>v.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.vocab.push(row);}
// Exclude competing translations while retaining every card for study and SRS.
const stop=new Set(['yang','atau','dari','untuk','dengan','secara','dalam','menurut','pembicara']);
function allowed(a,b){
  if(a.id===b.id||(a.term||a.kanji)===(b.term||b.kanji)||a.quizGroup&&a.quizGroup===b.quizGroup)return false;
  const words=c=>String(c.meaning||'').toLowerCase().replace(/\([^)]*\)/g,' ').split(/[^a-z]+/).filter(w=>w.length>=4&&!stop.has(w));
  const x=words(a),y=words(b);return x.length>0&&y.length>0&&!x.some(w=>y.includes(w));
}
function primaryReading(c){return String(c.reading||c.term||c.kanji||'').split('・')[0].trim()}
function voice(c){return c.exampleReading?primaryReading(c)+'。'+c.exampleReading:primaryReading(c)}
window.TENKA_N4_QUIZ={allowed,primaryReading,voice};
})();
