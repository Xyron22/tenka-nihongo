(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D||!D.jlpt||!D.kaigo)return;

const n5Kanji=[
{id:'n5-k-16',kanji:'年',reading:'ねん・とし',romaji:'nen / toshi',meaning:'tahun',example:'来年、日本語の試験を受けます。',exampleReading:'らいねん、にほんご の しけん を うけます。',exampleMeaning:'Tahun depan saya akan mengikuti ujian bahasa Jepang.'},
{id:'n5-k-17',kanji:'先',reading:'せん・さき',romaji:'sen / saki',meaning:'sebelum / depan',example:'先生に聞きます。',exampleReading:'せんせい に ききます。',exampleMeaning:'Saya bertanya kepada guru.'},
{id:'n5-k-18',kanji:'生',reading:'せい・しょう・いきる・うまれる',romaji:'sei / shou / ikiru / umareru',meaning:'hidup / lahir',example:'学生です。',exampleReading:'がくせい です。',exampleMeaning:'Saya seorang pelajar.'},
{id:'n5-k-19',kanji:'学',reading:'がく・まなぶ',romaji:'gaku / manabu',meaning:'belajar / ilmu',example:'日本語を学びます。',exampleReading:'にほんご を まなびます。',exampleMeaning:'Saya belajar bahasa Jepang.'},
{id:'n5-k-20',kanji:'校',reading:'こう',romaji:'kou',meaning:'sekolah',example:'学校へ行きます。',exampleReading:'がっこう へ いきます。',exampleMeaning:'Saya pergi ke sekolah.'},
{id:'n5-k-21',kanji:'会',reading:'かい・あう',romaji:'kai / au',meaning:'bertemu / pertemuan',example:'友だちに会います。',exampleReading:'ともだち に あいます。',exampleMeaning:'Saya bertemu teman.'},
{id:'n5-k-22',kanji:'社',reading:'しゃ・やしろ',romaji:'sha / yashiro',meaning:'perusahaan / kuil Shinto',example:'会社で働いています。',exampleReading:'かいしゃ で はたらいて います。',exampleMeaning:'Saya bekerja di perusahaan.'},
{id:'n5-k-23',kanji:'車',reading:'しゃ・くるま',romaji:'sha / kuruma',meaning:'kendaraan / mobil',example:'車で病院へ行きます。',exampleReading:'くるま で びょういん へ いきます。',exampleMeaning:'Saya pergi ke rumah sakit dengan mobil.'},
{id:'n5-k-24',kanji:'電',reading:'でん',romaji:'den',meaning:'listrik',example:'電車に乗ります。',exampleReading:'でんしゃ に のります。',exampleMeaning:'Saya naik kereta.'},
{id:'n5-k-25',kanji:'気',reading:'き・け',romaji:'ki / ke',meaning:'perasaan / energi / keadaan',example:'今日は元気です。',exampleReading:'きょう は げんき です。',exampleMeaning:'Hari ini saya sehat/bersemangat.'}
];

const n5Vocab=[
{id:'n5-v-22',term:'会う',reading:'あう',meaning:'bertemu',example:'駅で友だちに会います。',exampleMeaning:'Saya bertemu teman di stasiun.'},
{id:'n5-v-23',term:'来る',reading:'くる',meaning:'datang',example:'明日、友だちが来ます。',exampleMeaning:'Besok teman saya datang.'},
{id:'n5-v-24',term:'使う',reading:'つかう',meaning:'menggunakan',example:'このペンを使ってください。',exampleMeaning:'Silakan gunakan pena ini.'},
{id:'n5-v-25',term:'作る',reading:'つくる',meaning:'membuat',example:'晩ご飯を作ります。',exampleMeaning:'Saya membuat makan malam.'},
{id:'n5-v-26',term:'住む',reading:'すむ',meaning:'tinggal',example:'福岡に住んでいます。',exampleMeaning:'Saya tinggal di Fukuoka.'},
{id:'n5-v-27',term:'持つ',reading:'もつ',meaning:'membawa / memegang / memiliki',example:'かばんを持ちます。',exampleMeaning:'Saya membawa tas.'},
{id:'n5-v-28',term:'取る',reading:'とる',meaning:'mengambil',example:'休みを取ります。',exampleMeaning:'Saya mengambil cuti.'},
{id:'n5-v-29',term:'分ける',reading:'わける',meaning:'membagi / memisahkan',example:'ごみを分けます。',exampleMeaning:'Saya memilah sampah.'},
{id:'n5-v-30',term:'開ける',reading:'あける',meaning:'membuka',example:'窓を開けてください。',exampleMeaning:'Tolong buka jendelanya.'},
{id:'n5-v-31',term:'閉める',reading:'しめる',meaning:'menutup',example:'ドアを閉めます。',exampleMeaning:'Saya menutup pintu.'},
{id:'n5-v-32',term:'乗る',reading:'のる',meaning:'naik kendaraan',example:'電車に乗ります。',exampleMeaning:'Saya naik kereta.'},
{id:'n5-v-33',term:'降りる',reading:'おりる',meaning:'turun dari kendaraan',example:'次の駅で降ります。',exampleMeaning:'Saya turun di stasiun berikutnya.'},
{id:'n5-v-34',term:'ある',reading:'ある',meaning:'ada (benda mati)',example:'机の上に本があります。',exampleMeaning:'Ada buku di atas meja.'},
{id:'n5-v-35',term:'いる',reading:'いる',meaning:'ada (makhluk hidup)',example:'部屋に人がいます。',exampleMeaning:'Ada orang di kamar.'}
];

const n5Grammar=[
{id:'n5-g-09',title:'～ことができます',meaning:'bisa / mampu melakukan ～',pattern:'V辞書形 + ことができます',explanation:'Dipakai untuk menyatakan kemampuan atau sesuatu yang memungkinkan dilakukan.',example:'ひらがなを読むことができます。',exampleReading:'ひらがな を よむ こと が できます。',exampleMeaning:'Saya bisa membaca hiragana.',contrast:'できます sendiri juga bisa berarti “bisa/selesai”, tergantung konteks.'},
{id:'n5-g-10',title:'～てから',meaning:'setelah melakukan ～',pattern:'Vて + から',explanation:'Menunjukkan bahwa tindakan kedua dilakukan setelah tindakan pertama selesai.',example:'ご飯を食べてから、薬を飲みます。',exampleReading:'ごはん を たべて から、くすり を のみます。',exampleMeaning:'Setelah makan, saya minum obat.',contrast:'Urutan waktunya jelas: kegiatan A selesai, lalu kegiatan B.'},
{id:'n5-g-11',title:'～前に',meaning:'sebelum melakukan ～',pattern:'V辞書形 + 前に / Nの + 前に',explanation:'Dipakai untuk menyatakan tindakan yang dilakukan sebelum suatu kegiatan atau waktu.',example:'寝る前に、歯を磨きます。',exampleReading:'ねる まえ に、は を みがきます。',exampleMeaning:'Sebelum tidur, saya menggosok gigi.',contrast:'Vてから menyatakan tindakan setelah sesuatu selesai.'},
{id:'n5-g-12',title:'～たり～たりします',meaning:'melakukan hal seperti ～ dan ～',pattern:'Vた + り、Vた + りします',explanation:'Dipakai untuk memberi beberapa contoh kegiatan tanpa menyatakan daftarnya lengkap.',example:'休みの日は、買い物をしたり、テレビを見たりします。',exampleReading:'やすみ の ひ は、かいもの を したり、テレビ を みたり します。',exampleMeaning:'Saat libur saya melakukan hal seperti belanja dan menonton TV.',contrast:'Bukan berarti hanya dua kegiatan itu saja.'}
];

const kaigoVocab=[
{id:'k-v-33',term:'尊厳',reading:'そんげん',meaning:'martabat / dignity',category:'介護の基本',examArea:'人間の尊厳と自立',example:'本人の尊厳を大切にします。',exampleMeaning:'Kita menghormati martabat orang yang dirawat.'},
{id:'k-v-34',term:'自立支援',reading:'じりつしえん',meaning:'dukungan kemandirian',category:'介護の基本',examArea:'介護の基本',example:'本人ができることを活かして、自立を支援します。',exampleMeaning:'Kita mendukung kemandirian dengan memanfaatkan kemampuan yang masih dimiliki orang tersebut.'},
{id:'k-v-35',term:'介護過程',reading:'かいごかてい',meaning:'proses asuhan/perawatan kaigo',category:'介護の基本',examArea:'介護過程',example:'介護過程に沿って支援内容を考えます。',exampleMeaning:'Isi dukungan dipikirkan mengikuti proses kaigo.'},
{id:'k-v-36',term:'ADL',reading:'エーディーエル',meaning:'aktivitas dasar kehidupan sehari-hari',category:'ADL・生活支援',examArea:'生活支援技術',example:'ADLの状態を確認します。',exampleMeaning:'Memeriksa kondisi aktivitas dasar sehari-hari.'},
{id:'k-v-37',term:'IADL',reading:'アイエーディーエル',meaning:'aktivitas instrumental kehidupan sehari-hari',category:'ADL・生活支援',examArea:'生活支援技術',example:'買い物や金銭管理などのIADLも確認します。',exampleMeaning:'Aktivitas instrumental seperti belanja dan mengelola uang juga diperiksa.'},
{id:'k-v-38',term:'口腔ケア',reading:'こうくうケア',meaning:'perawatan kebersihan mulut',category:'清潔・整容',examArea:'生活支援技術',example:'食後に口腔ケアを行います。',exampleMeaning:'Perawatan mulut dilakukan setelah makan.'},
{id:'k-v-39',term:'体位変換',reading:'たいいへんかん',meaning:'perubahan posisi tubuh',category:'安全・褥瘡予防',examArea:'生活支援技術',example:'ケアプランに沿って体位変換を行います。',exampleMeaning:'Perubahan posisi dilakukan sesuai rencana perawatan.'},
{id:'k-v-40',term:'褥瘡',reading:'じょくそう',meaning:'luka tekan / pressure injury',category:'安全・褥瘡予防',examArea:'こころとからだのしくみ',example:'褥瘡予防のため、皮膚の状態を観察します。',exampleMeaning:'Kondisi kulit diamati untuk membantu mencegah luka tekan.'},
{id:'k-v-41',term:'拘縮',reading:'こうしゅく',meaning:'kontraktur / keterbatasan gerak sendi',category:'状態・身体',examArea:'こころとからだのしくみ',example:'右肩に拘縮があります。',exampleMeaning:'Ada kontraktur pada bahu kanan.'},
{id:'k-v-42',term:'清拭',reading:'せいしき',meaning:'membersihkan tubuh dengan lap / bed bath',category:'清潔・整容',examArea:'生活支援技術',example:'入浴が難しいため、清拭を行います。',exampleMeaning:'Karena sulit mandi, dilakukan pembersihan tubuh dengan lap.'},
{id:'k-v-43',term:'整容',reading:'せいよう',meaning:'merapikan penampilan / grooming',category:'清潔・整容',examArea:'生活支援技術',example:'朝の整容を介助します。',exampleMeaning:'Membantu aktivitas merapikan diri pada pagi hari.'},
{id:'k-v-44',term:'更衣',reading:'こうい',meaning:'berganti pakaian',category:'ADL・生活支援',examArea:'生活支援技術',example:'更衣は一部介助です。',exampleMeaning:'Berganti pakaian memerlukan bantuan sebagian.'}
];

const handoff=[
{id:'h-07',
 text:'伊藤さんですが、仙骨部に発赤がみられました。看護師へ報告済みです。体位変換はケアプランに沿ってお願いします。',
 reading:'いとうさん ですが、せんこつぶ に ほっせき が みられました。かんごし へ ほうこくずみ です。たいいへんかん は ケアプラン に そって おねがいします。',
 meaning:'Mengenai Ito-san, terlihat kemerahan di daerah sakrum. Sudah dilaporkan kepada perawat. Mohon lakukan perubahan posisi sesuai care plan.',
 segments:[
  {text:'伊藤さんですが、仙骨部に発赤がみられました。',reading:'いとうさん ですが、せんこつぶ に ほっせき が みられました。',meaning:'Mengenai Ito-san, terlihat kemerahan di daerah sakrum.'},
  {text:'看護師へ報告済みです。',reading:'かんごし へ ほうこくずみ です。',meaning:'Hal tersebut sudah dilaporkan kepada perawat.'},
  {text:'体位変換はケアプランに沿ってお願いします。',reading:'たいいへんかん は ケアプラン に そって おねがいします。',meaning:'Mohon lakukan perubahan posisi sesuai care plan.'}
 ],
 question:'Apa poin penting untuk shift berikutnya?',
 choices:['Tidak perlu mengamati kulit lagi','Perubahan posisi mengikuti care plan dan kondisi kulit tetap diperhatikan','Pasien harus berjalan sendiri','Semua cairan harus dihentikan'],answer:1},
{id:'h-08',
 text:'中村さんは3日間排便がありません。腹痛や腹部膨満の訴えはなく、食事と水分は普段どおりです。看護師へ報告済みですので、排便の有無を確認してください。',
 reading:'なかむらさん は みっかかん はいべん が ありません。ふくつう や ふくぶぼうまん の うったえ は なく、しょくじ と すいぶん は ふだんどおり です。かんごし へ ほうこくずみ です ので、はいべん の うむ を かくにん して ください。',
 meaning:'Nakamura-san belum BAB selama tiga hari. Tidak ada keluhan nyeri atau kembung perut, dan makan serta minum seperti biasa. Sudah dilaporkan kepada perawat; mohon periksa apakah ada BAB.',
 segments:[
  {text:'中村さんは3日間排便がありません。',reading:'なかむらさん は みっかかん はいべん が ありません。',meaning:'Nakamura-san belum BAB selama tiga hari.'},
  {text:'腹痛や腹部膨満の訴えはなく、食事と水分は普段どおりです。',reading:'ふくつう や ふくぶぼうまん の うったえ は なく、しょくじ と すいぶん は ふだんどおり です。',meaning:'Tidak ada keluhan nyeri atau kembung perut, dan makan serta minum seperti biasa.'},
  {text:'看護師へ報告済みですので、排便の有無を確認してください。',reading:'かんごし へ ほうこくずみ です ので、はいべん の うむ を かくにん して ください。',meaning:'Sudah dilaporkan kepada perawat; mohon periksa apakah ada BAB.'}
 ],
 question:'Apa yang perlu diteruskan pada shift berikutnya?',
 choices:['Memastikan ada atau tidaknya BAB','Melarang pasien makan','Menghentikan semua minum','Membiarkan tanpa observasi'],answer:0},
{id:'h-09',
 text:'小林さんは夜間に居室から出て、廊下を歩くことがありました。声かけで落ち着かれ、転倒はありませんでした。今夜も安全に配慮しながら見守りをお願いします。',
 reading:'こばやしさん は やかん に きょしつ から でて、ろうか を あるく こと が ありました。こえかけ で おちつかれ、てんとう は ありませんでした。こんや も あんぜん に はいりょ しながら みまもり を おねがいします。',
 meaning:'Kobayashi-san pada malam hari sempat keluar dari kamar dan berjalan di lorong. Beliau tenang setelah diajak bicara dan tidak jatuh. Malam ini mohon tetap awasi dengan memperhatikan keselamatan.',
 segments:[
  {text:'小林さんは夜間に居室から出て、廊下を歩くことがありました。',reading:'こばやしさん は やかん に きょしつ から でて、ろうか を あるく こと が ありました。',meaning:'Kobayashi-san pada malam hari sempat keluar dari kamar dan berjalan di lorong.'},
  {text:'声かけで落ち着かれ、転倒はありませんでした。',reading:'こえかけ で おちつかれ、てんとう は ありませんでした。',meaning:'Beliau tenang setelah diajak bicara dan tidak mengalami jatuh.'},
  {text:'今夜も安全に配慮しながら見守りをお願いします。',reading:'こんや も あんぜん に はいりょ しながら みまもり を おねがいします。',meaning:'Malam ini mohon tetap lakukan pengawasan dengan memperhatikan keselamatan.'}
 ],
 question:'Pendekatan yang paling sesuai dari informasi operan ini?',
 choices:['Mengunci pasien agar tidak bergerak','Tetap melakukan pengawasan dengan memperhatikan keselamatan','Tidak perlu merespons bila pasien keluar kamar','Memaksa pasien langsung tidur'],answer:1},
{id:'h-10',
 text:'森さんは昼食時にむせが1回ありました。その後、呼吸状態に変化はありません。水分は指示どおり、とろみを付けて提供してください。',
 reading:'もりさん は ちゅうしょくじ に むせ が いっかい ありました。そのご、こきゅうじょうたい に へんか は ありません。すいぶん は しじどおり、とろみ を つけて ていきょう して ください。',
 meaning:'Mori-san tersedak satu kali saat makan siang. Setelah itu tidak ada perubahan pada kondisi pernapasan. Untuk cairan, berikan dengan pengental sesuai instruksi.',
 segments:[
  {text:'森さんは昼食時にむせが1回ありました。',reading:'もりさん は ちゅうしょくじ に むせ が いっかい ありました。',meaning:'Mori-san tersedak satu kali saat makan siang.'},
  {text:'その後、呼吸状態に変化はありません。',reading:'そのご、こきゅうじょうたい に へんか は ありません。',meaning:'Setelah itu tidak ada perubahan pada kondisi pernapasan.'},
  {text:'水分は指示どおり、とろみを付けて提供してください。',reading:'すいぶん は しじどおり、とろみ を つけて ていきょう して ください。',meaning:'Untuk cairan, berikan dengan pengental sesuai instruksi.'}
 ],
 question:'Apa tindakan yang sesuai dengan operan?',
 choices:['Memberikan air tanpa memperhatikan instruksi','Memberikan cairan dengan pengental sesuai instruksi','Menghentikan makan dan minum tanpa instruksi','Mengabaikan kejadian tersedak'],answer:1}
];

function pushUnique(target,items){const ids=new Set(target.map(x=>x.id));items.forEach(item=>{if(!ids.has(item.id)){target.push(item);ids.add(item.id)}})}
pushUnique(D.jlpt.N5.kanji,n5Kanji);
pushUnique(D.jlpt.N5.vocab,n5Vocab);
pushUnique(D.jlpt.N5.grammar,n5Grammar);
pushUnique(D.kaigo.vocab,kaigoVocab);
pushUnique(D.kaigo.handoff,handoff);
})();
