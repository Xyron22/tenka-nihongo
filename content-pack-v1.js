(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D||!D.jlpt||!D.kaigo)return;
const n5Kanji=[
{id:'n5-k-06',kanji:'月',reading:'げつ・がつ・つき',romaji:'getsu / gatsu / tsuki',meaning:'bulan',example:'来月、日本語の試験があります。',exampleReading:'らいげつ、にほんご の しけん が あります。',exampleMeaning:'Bulan depan ada ujian bahasa Jepang.'},
{id:'n5-k-07',kanji:'火',reading:'か・ひ',romaji:'ka / hi',meaning:'api',example:'火を消してください。',exampleReading:'ひ を けして ください。',exampleMeaning:'Tolong matikan apinya.'},
{id:'n5-k-08',kanji:'木',reading:'もく・ぼく・き',romaji:'moku / boku / ki',meaning:'pohon / kayu',example:'公園に大きい木があります。',exampleReading:'こうえん に おおきい き が あります。',exampleMeaning:'Ada pohon besar di taman.'},
{id:'n5-k-09',kanji:'金',reading:'きん・かね',romaji:'kin / kane',meaning:'uang / emas',example:'お金を払います。',exampleReading:'おかね を はらいます。',exampleMeaning:'Saya membayar.'},
{id:'n5-k-10',kanji:'上',reading:'じょう・うえ・あがる',romaji:'jou / ue / agaru',meaning:'atas / naik',example:'二階に上がります。',exampleReading:'にかい に あがります。',exampleMeaning:'Saya naik ke lantai dua.'},
{id:'n5-k-11',kanji:'下',reading:'か・した・さがる',romaji:'ka / shita / sagaru',meaning:'bawah / turun',example:'熱が下がりました。',exampleReading:'ねつ が さがりました。',exampleMeaning:'Demamnya sudah turun.'},
{id:'n5-k-12',kanji:'中',reading:'ちゅう・なか',romaji:'chuu / naka',meaning:'tengah / dalam',example:'部屋の中にいます。',exampleReading:'へや の なか に います。',exampleMeaning:'Ada di dalam kamar.'},
{id:'n5-k-13',kanji:'大',reading:'だい・たい・おおきい',romaji:'dai / tai / ookii',meaning:'besar',example:'大きい病院です。',exampleReading:'おおきい びょういん です。',exampleMeaning:'Ini rumah sakit besar.'},
{id:'n5-k-14',kanji:'小',reading:'しょう・ちいさい',romaji:'shou / chiisai',meaning:'kecil',example:'小さい声で話します。',exampleReading:'ちいさい こえ で はなします。',exampleMeaning:'Berbicara dengan suara kecil.'},
{id:'n5-k-15',kanji:'時',reading:'じ・とき',romaji:'ji / toki',meaning:'waktu / jam',example:'七時に起きます。',exampleReading:'しちじ に おきます。',exampleMeaning:'Saya bangun pukul tujuh.'}
];
const n5Vocab=[
{id:'n5-v-07',term:'話す',reading:'はなす',meaning:'berbicara',example:'ゆっくり話してください。',exampleMeaning:'Tolong bicara pelan-pelan.'},
{id:'n5-v-08',term:'聞く',reading:'きく',meaning:'mendengar / bertanya',example:'日本語を毎日聞きます。',exampleMeaning:'Saya mendengarkan bahasa Jepang setiap hari.'},
{id:'n5-v-09',term:'読む',reading:'よむ',meaning:'membaca',example:'本を読みます。',exampleMeaning:'Saya membaca buku.'},
{id:'n5-v-10',term:'書く',reading:'かく',meaning:'menulis',example:'名前を書いてください。',exampleMeaning:'Tolong tulis nama.'},
{id:'n5-v-11',term:'買う',reading:'かう',meaning:'membeli',example:'スーパーで野菜を買います。',exampleMeaning:'Saya membeli sayur di supermarket.'},
{id:'n5-v-12',term:'待つ',reading:'まつ',meaning:'menunggu',example:'駅で待っています。',exampleMeaning:'Saya sedang menunggu di stasiun.'},
{id:'n5-v-13',term:'帰る',reading:'かえる',meaning:'pulang',example:'五時に家へ帰ります。',exampleMeaning:'Saya pulang ke rumah pukul lima.'},
{id:'n5-v-14',term:'入る',reading:'はいる',meaning:'masuk',example:'部屋に入ります。',exampleMeaning:'Saya masuk ke kamar.'},
{id:'n5-v-15',term:'出る',reading:'でる',meaning:'keluar',example:'七時に家を出ます。',exampleMeaning:'Saya keluar rumah pukul tujuh.'},
{id:'n5-v-16',term:'座る',reading:'すわる',meaning:'duduk',example:'ここに座ってください。',exampleMeaning:'Silakan duduk di sini.'},
{id:'n5-v-17',term:'立つ',reading:'たつ',meaning:'berdiri',example:'ゆっくり立ってください。',exampleMeaning:'Tolong berdiri perlahan.'},
{id:'n5-v-18',term:'寝る',reading:'ねる',meaning:'tidur',example:'十一時に寝ます。',exampleMeaning:'Saya tidur pukul sebelas.'},
{id:'n5-v-19',term:'働く',reading:'はたらく',meaning:'bekerja',example:'病院で働いています。',exampleMeaning:'Saya bekerja di rumah sakit.'},
{id:'n5-v-20',term:'勉強する',reading:'べんきょうする',meaning:'belajar',example:'毎日日本語を勉強します。',exampleMeaning:'Saya belajar bahasa Jepang setiap hari.'},
{id:'n5-v-21',term:'分かる',reading:'わかる',meaning:'mengerti',example:'少し分かります。',exampleMeaning:'Saya mengerti sedikit.'}
];
const n5Grammar=[
{id:'n5-g-04',title:'～てください',meaning:'tolong lakukan ～',pattern:'Vて + ください',explanation:'Dipakai untuk meminta atau menginstruksikan lawan bicara agar melakukan suatu tindakan. Bentuk ini sopan, tetapi tetap cukup langsung.',usage:'Memberi permintaan sederhana, instruksi, atau arahan kepada orang lain.',whenToUse:'Cocok untuk permintaan sehari-hari, petunjuk, atau arahan yang jelas seperti “tolong tulis”, “tolong tunggu”, dan “tolong lihat”.',watchOut:'ください memang sopan, tetapi bukan bentuk yang paling halus. Kepada atasan, pelanggan, atau saat ingin terdengar lebih lembut, bentuk seperti ～ていただけますか dapat lebih sesuai.',commonMistake:'Menganggap ～てください selalu sangat halus hanya karena memakai ください. Dalam hubungan tertentu, kalimatnya tetap bisa terasa seperti instruksi langsung.',example:'ここに名前を書いてください。',exampleReading:'ここ に なまえ を かいて ください。',exampleMeaning:'Tolong tulis nama di sini.',extraExample:'ゆっくり話してください。',extraExampleReading:'ゆっくり はなして ください。',extraExampleMeaning:'Tolong bicara pelan-pelan.',contrast:'～てください meminta seseorang melakukan sesuatu; ～ないでください meminta seseorang tidak melakukan sesuatu.'},
{id:'n5-g-05',title:'～ないでください',meaning:'tolong jangan melakukan ～',pattern:'Vない + でください',explanation:'Dipakai untuk meminta seseorang agar tidak melakukan suatu tindakan. Sering digunakan dalam larangan, petunjuk, atau permintaan langsung.',usage:'Meminta atau menginstruksikan lawan bicara supaya tidak melakukan sesuatu.',whenToUse:'Cocok untuk larangan atau permintaan yang jelas, misalnya pada aturan tempat, petunjuk keselamatan, atau ketika suatu tindakan perlu dihentikan.',watchOut:'Jangan tertukar dengan ～なくてもいいです. ～ないでください berarti “tolong jangan lakukan”, sedangkan ～なくてもいいです berarti “tidak perlu melakukan / tidak apa-apa kalau tidak dilakukan”.',commonMistake:'Menyamakan “jangan lakukan” dengan “tidak perlu dilakukan”. Perbedaan ini bisa mengubah instruksi secara total.',example:'ここで写真を撮らないでください。',exampleReading:'ここ で しゃしん を とらないで ください。',exampleMeaning:'Tolong jangan mengambil foto di sini.',extraExample:'ここに入らないでください。',extraExampleReading:'ここ に はいらないで ください。',extraExampleMeaning:'Tolong jangan masuk ke sini.',contrast:'～てください = tolong lakukan; ～ないでください = tolong jangan lakukan; ～なくてもいいです = tidak perlu melakukan.'},
{id:'n5-g-06',title:'～ましょう',meaning:'ayo / mari melakukan ～',pattern:'Vます → ます diganti ましょう',explanation:'Dipakai ketika pembicara mengajak melakukan suatu tindakan bersama atau mengusulkan tindakan yang akan dilakukan bersama.',usage:'Mengajak dengan cukup langsung: “ayo kita... / mari kita...”.',whenToUse:'Cocok ketika pembicara dan lawan bicara sama-sama akan ikut melakukan kegiatan, terutama setelah rencana sudah cukup jelas.',watchOut:'～ましょう terasa lebih tegas daripada ～ませんか. Jika lawan bicara belum tentu ingin ikut, ～ませんか sering terdengar lebih lembut. Kepada atasan atau orang yang perlu diberi pilihan, jangan otomatis memakai ～ましょう untuk semua ajakan.',commonMistake:'Memakai ～ましょう untuk meminta lawan bicara melakukan sesuatu sendirian. Kalau maksudnya “tolong lakukan”, gunakan pola permintaan seperti ～てください, bukan ajakan “mari kita”.',example:'一緒に勉強しましょう。',exampleReading:'いっしょ に べんきょう しましょう。',exampleMeaning:'Mari belajar bersama.',extraExample:'休憩しましょう。',extraExampleReading:'きゅうけい しましょう。',extraExampleMeaning:'Mari kita istirahat.',contrast:'～ましょう adalah ajakan yang lebih langsung; ～ませんか menawarkan ajakan dengan memberi ruang lebih besar untuk menolak.'},
{id:'n5-g-07',title:'～ませんか',meaning:'maukah / bagaimana kalau ～',pattern:'Vます → ます diganti ませんか',explanation:'Bentuk negatif pertanyaan ini sering dipakai sebagai ajakan yang halus, bukan sebagai pertanyaan negatif biasa.',usage:'Mengundang atau mengajak seseorang melakukan sesuatu bersama sambil memberi pilihan kepada lawan bicara.',whenToUse:'Cocok saat mengajak teman, rekan kerja, atau orang yang belum tentu setuju, misalnya mengajak makan, pergi, atau melakukan aktivitas bersama.',watchOut:'Jangan menerjemahkan secara mentah sebagai “tidakkah kamu...?”. Dalam konteks ajakan, maknanya lebih natural seperti “mau...?” atau “bagaimana kalau...?”.',commonMistake:'Menggunakan ～ませんか untuk meminta orang melakukan pekerjaan untuk kita. ～ませんか pada dasarnya adalah ajakan; untuk permintaan bantuan gunakan pola permintaan yang sesuai seperti ～てください atau bentuk yang lebih sopan.',example:'一緒にご飯を食べませんか。',exampleReading:'いっしょ に ごはん を たべませんか。',exampleMeaning:'Mau makan bersama?',extraExample:'休みの日に映画を見ませんか。',extraExampleReading:'やすみ の ひ に えいが を みませんか。',extraExampleMeaning:'Mau menonton film saat hari libur?',contrast:'～ませんか lebih memberi pilihan; ～ましょう lebih seperti “ayo kita lakukan”.'},
{id:'n5-g-08',title:'～から',meaning:'karena ～ / sebab ～',pattern:'V・Aい bentuk biasa + から / N・Aな + だから / bentuk sopan + ですから・ますから',explanation:'Dipakai untuk menyatakan alasan atau sebab. Bagian sebelum から adalah alasannya, sedangkan bagian setelahnya adalah hasil, keputusan, atau tindakan yang muncul karena alasan tersebut.',usage:'Menjelaskan “karena A, maka B” dalam percakapan sehari-hari.',whenToUse:'Gunakan saat ingin menjelaskan alasan keputusan, tindakan, keadaan, atau jawaban. Pola ini sangat umum dalam percakapan.',watchOut:'Untuk nomina dan kata sifat-na dalam bentuk biasa, biasanya perlu だ sebelum から: 休みだから, 静かだから. Jangan membuat bentuk seperti 休みから atau 静かから ketika maksudnya “karena”.',commonMistake:'Mencampur aturan sambungan. Verba dan i-adjective bisa langsung diikuti から dalam bentuk biasa, tetapi N dan na-adjective memerlukan だ pada bentuk biasa.',example:'明日は休みですから、ゆっくり寝ます。',exampleReading:'あした は やすみ です から、ゆっくり ねます。',exampleMeaning:'Karena besok libur, saya akan tidur dengan santai.',extraExample:'雨だから、出かけません。',extraExampleReading:'あめ だから、でかけません。',extraExampleMeaning:'Karena hujan, saya tidak pergi keluar.',contrast:'～から umum dan cukup langsung untuk memberi alasan; ～ので juga menyatakan sebab tetapi sering terasa lebih lembut atau netral.'}
];
const kaigoVocab=[
{id:'k-v-13',term:'体温',reading:'たいおん',meaning:'suhu tubuh',category:'バイタル',example:'体温は36.8度です。',exampleMeaning:'Suhu tubuh 36,8°C.'},
{id:'k-v-14',term:'脈拍',reading:'みゃくはく',meaning:'denyut nadi',category:'バイタル',example:'脈拍を測ります。',exampleMeaning:'Mengukur denyut nadi.'},
{id:'k-v-15',term:'呼吸数',reading:'こきゅうすう',meaning:'frekuensi napas',category:'バイタル',example:'呼吸数は1分間に20回です。',exampleMeaning:'Frekuensi napas 20 kali per menit.'},
{id:'k-v-16',term:'SpO₂',reading:'エスピーオーツー',meaning:'saturasi oksigen',category:'バイタル',example:'SpO₂は94パーセントです。',exampleMeaning:'SpO₂ 94%.'},
{id:'k-v-17',term:'呼吸苦',reading:'こきゅうく',meaning:'sesak napas',category:'状態・症状',example:'呼吸苦の訴えがあります。',exampleMeaning:'Ada keluhan sesak napas.'},
{id:'k-v-18',term:'咳嗽',reading:'がいそう',meaning:'batuk',category:'状態・症状',example:'咳嗽が続いています。',exampleMeaning:'Batuk terus berlanjut.'},
{id:'k-v-19',term:'痰',reading:'たん',meaning:'dahak / sputum',category:'状態・症状',example:'痰が多く出ています。',exampleMeaning:'Dahak keluar cukup banyak.'},
{id:'k-v-20',term:'倦怠感',reading:'けんたいかん',meaning:'rasa lelah / malaise',category:'状態・症状',example:'倦怠感があるとのことです。',exampleMeaning:'Pasien mengatakan merasa lelah.'},
{id:'k-v-21',term:'食欲不振',reading:'しょくよくふしん',meaning:'nafsu makan menurun',category:'食事・嚥下',example:'食欲不振が続いています。',exampleMeaning:'Nafsu makan menurun masih berlanjut.'},
{id:'k-v-22',term:'むせ',reading:'むせ',meaning:'tersedak / batuk saat menelan',category:'食事・嚥下',example:'水分摂取時にむせがありました。',exampleMeaning:'Ada tersedak saat minum cairan.'},
{id:'k-v-23',term:'尿量',reading:'にょうりょう',meaning:'jumlah urin',category:'排泄',example:'尿量を確認してください。',exampleMeaning:'Tolong periksa jumlah urin.'},
{id:'k-v-24',term:'失禁',reading:'しっきん',meaning:'inkontinensia',category:'排泄',example:'夜間に尿失禁がありました。',exampleMeaning:'Ada inkontinensia urin pada malam hari.'},
{id:'k-v-25',term:'便秘',reading:'べんぴ',meaning:'konstipasi / sembelit',category:'排泄',example:'三日間排便なく、便秘傾向です。',exampleMeaning:'Sudah tiga hari tidak BAB dan cenderung konstipasi.'},
{id:'k-v-26',term:'下痢',reading:'げり',meaning:'diare',category:'排泄',example:'本日、下痢便が二回ありました。',exampleMeaning:'Hari ini ada BAB diare dua kali.'},
{id:'k-v-27',term:'移乗',reading:'いじょう',meaning:'transfer / berpindah dari satu permukaan ke permukaan lain',category:'ADL・移動',example:'車椅子への移乗は二人介助です。',exampleMeaning:'Transfer ke kursi roda membutuhkan bantuan dua orang.'},
{id:'k-v-28',term:'歩行',reading:'ほこう',meaning:'berjalan / ambulasi',category:'ADL・移動',example:'歩行時は見守りが必要です。',exampleMeaning:'Saat berjalan perlu pengawasan.'},
{id:'k-v-29',term:'見守り',reading:'みまもり',meaning:'pengawasan / mendampingi sambil mengamati',category:'ADL・移動',example:'トイレへの移動時は見守りが必要です。',exampleMeaning:'Saat berpindah ke toilet perlu pengawasan.'},
{id:'k-v-30',term:'転倒',reading:'てんとう',meaning:'jatuh',category:'安全・リスク',example:'昨夜、転倒がありました。',exampleMeaning:'Tadi malam terjadi jatuh.'},
{id:'k-v-31',term:'不穏',reading:'ふおん',meaning:'gelisah / agitasi',category:'認知症・精神',example:'夜間に不穏がみられました。',exampleMeaning:'Terlihat agitasi pada malam hari.'},
{id:'k-v-32',term:'頓服',reading:'とんぷく',meaning:'obat PRN / bila perlu',category:'薬・処置',example:'疼痛時に頓服薬を服用されています。',exampleMeaning:'Saat nyeri, pasien telah minum obat PRN.'}
];
const handoff=[
{id:'h-03',
 text:'山田さんですが、夕食時にむせが2回ありました。SpO₂の低下はなく、その後は落ち着いています。水分はとろみ付きでお願いします。',
 reading:'やまださん ですが、ゆうしょくじ に むせ が にかい ありました。エスピーオーツー の ていか は なく、そのご は おちついて います。すいぶん は とろみつき で おねがいします。',
 meaning:'Yamada-san tersedak dua kali saat makan malam. Tidak ada penurunan SpO₂ dan setelah itu kondisinya tenang. Cairan mohon diberikan dengan pengental.',
 segments:[
  {text:'山田さんですが、夕食時にむせが2回ありました。',reading:'やまださん ですが、ゆうしょくじ に むせ が にかい ありました。',meaning:'Mengenai Yamada-san, saat makan malam terjadi tersedak dua kali.'},
  {text:'SpO₂の低下はなく、その後は落ち着いています。',reading:'エスピーオーツー の ていか は なく、そのご は おちついて います。',meaning:'Tidak ada penurunan SpO₂ dan setelah itu kondisinya tenang.'},
  {text:'水分はとろみ付きでお願いします。',reading:'すいぶん は とろみつき で おねがいします。',meaning:'Cairan mohon diberikan dengan pengental.'}
 ],
 question:'Hal terpenting untuk shift berikutnya?',
 choices:['Berikan cairan dengan pengental dan perhatikan tersedak','Pasien harus puasa total','Pasien mengalami perdarahan','Pasien boleh berjalan sendiri'],answer:0},
{id:'h-04',
 text:'鈴木さんは夜間、トイレに行こうとして一人で立ち上がることがありました。転倒歴がありますので、移動時は必ず見守りをお願いします。',
 reading:'すずきさん は やかん、トイレ に いこう として ひとり で たちあがる こと が ありました。てんとうれき が あります ので、いどうじ は かならず みまもり を おねがいします。',
 meaning:'Suzuki-san pada malam hari sempat berdiri sendiri untuk pergi ke toilet. Karena ada riwayat jatuh, mohon selalu lakukan pengawasan saat berpindah.',
 segments:[
  {text:'鈴木さんは夜間、トイレに行こうとして一人で立ち上がることがありました。',reading:'すずきさん は やかん、トイレ に いこう として ひとり で たちあがる こと が ありました。',meaning:'Suzuki-san pada malam hari sempat berdiri sendiri untuk pergi ke toilet.'},
  {text:'転倒歴がありますので、移動時は必ず見守りをお願いします。',reading:'てんとうれき が あります ので、いどうじ は かならず みまもり を おねがいします。',meaning:'Karena ada riwayat jatuh, mohon selalu lakukan pengawasan saat berpindah.'}
 ],
 question:'Risiko utama pasien?',
 choices:['Aspirasi','Jatuh saat berpindah','Demam tinggi','Konstipasi'],answer:1},
{id:'h-05',
 text:'高橋さんは朝から食欲がなく、朝食は2割程度です。水分は300ミリリットル摂取できています。発熱や嘔吐はありません。',
 reading:'たかはしさん は あさ から しょくよく が なく、ちょうしょく は にわり ていど です。すいぶん は さんびゃくミリリットル せっしゅ できて います。はつねつ や おうと は ありません。',
 meaning:'Takahashi-san sejak pagi tidak nafsu makan, sarapan sekitar 20%, dan cairan 300 mL. Tidak ada demam atau muntah.',
 segments:[
  {text:'高橋さんは朝から食欲がなく、朝食は2割程度です。',reading:'たかはしさん は あさ から しょくよく が なく、ちょうしょく は にわり ていど です。',meaning:'Takahashi-san sejak pagi tidak nafsu makan dan sarapan sekitar 20%.'},
  {text:'水分は300ミリリットル摂取できています。',reading:'すいぶん は さんびゃくミリリットル せっしゅ できて います。',meaning:'Asupan cairan sekitar 300 mL.'},
  {text:'発熱や嘔吐はありません。',reading:'はつねつ や おうと は ありません。',meaning:'Tidak ada demam atau muntah.'}
 ],
 question:'Apa yang perlu terus dipantau?',
 choices:['Asupan makan dan cairan','Luka tekan saja','Pendengaran','Warna rambut'],answer:0},
{id:'h-06',
 text:'佐々木さんは腰痛の訴えがあり、14時に頓服薬を服用されています。現在は痛みが軽減しています。歩行時にふらつきがあります。',
 reading:'ささきさん は ようつう の うったえ が あり、じゅうよじ に とんぷくやく を ふくよう されて います。げんざい は いたみ が けいげん して います。ほこうじ に ふらつき が あります。',
 meaning:'Sasaki-san mengeluh nyeri pinggang dan pada pukul 14 telah minum obat PRN. Saat ini nyeri berkurang, tetapi saat berjalan masih sempoyongan.',
 segments:[
  {text:'佐々木さんは腰痛の訴えがあり、14時に頓服薬を服用されています。',reading:'ささきさん は ようつう の うったえ が あり、じゅうよじ に とんぷくやく を ふくよう されて います。',meaning:'Sasaki-san mengeluh nyeri pinggang dan pada pukul 14 telah minum obat PRN.'},
  {text:'現在は痛みが軽減しています。',reading:'げんざい は いたみ が けいげん して います。',meaning:'Saat ini nyeri sudah berkurang.'},
  {text:'歩行時にふらつきがあります。',reading:'ほこうじ に ふらつき が あります。',meaning:'Saat berjalan masih ada sempoyongan.'}
 ],
 question:'Apa perhatian saat mobilisasi?',
 choices:['Harus lari agar stabil','Perlu pengawasan karena sempoyongan','Tidak boleh minum','Tidak ada perhatian khusus'],answer:1}
];
function pushUnique(target,items){const ids=new Set(target.map(x=>x.id));items.forEach(item=>{if(!ids.has(item.id)){target.push(item);ids.add(item.id)}})}
pushUnique(D.jlpt.N5.kanji,n5Kanji);pushUnique(D.jlpt.N5.vocab,n5Vocab);pushUnique(D.jlpt.N5.grammar,n5Grammar);pushUnique(D.kaigo.vocab,kaigoVocab);pushUnique(D.kaigo.handoff,handoff);
})();
