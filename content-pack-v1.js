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
{id:'n5-g-04',title:'～てください',meaning:'tolong lakukan ～',pattern:'Vて + ください',explanation:'Permintaan sopan agar lawan bicara melakukan sesuatu.',example:'ここに名前を書いてください。',exampleReading:'ここ に なまえ を かいて ください。',exampleMeaning:'Tolong tulis nama di sini.',contrast:'～ないでください = tolong jangan melakukan.'},
{id:'n5-g-05',title:'～ないでください',meaning:'tolong jangan melakukan ～',pattern:'Vない + でください',explanation:'Permintaan sopan agar seseorang tidak melakukan sesuatu.',example:'ここで写真を撮らないでください。',exampleReading:'ここ で しゃしん を とらないで ください。',exampleMeaning:'Tolong jangan mengambil foto di sini.',contrast:'～てください = tolong lakukan.'},
{id:'n5-g-06',title:'～ましょう',meaning:'ayo / mari melakukan ～',pattern:'Vます → ます diganti ましょう',explanation:'Dipakai untuk mengajak melakukan sesuatu bersama.',example:'一緒に勉強しましょう。',exampleReading:'いっしょ に べんきょう しましょう。',exampleMeaning:'Mari belajar bersama.',contrast:'～ませんか lebih lembut sebagai ajakan.'},
{id:'n5-g-07',title:'～ませんか',meaning:'maukah / bagaimana kalau ～',pattern:'Vます → ませんか',explanation:'Ajakan atau undangan yang lebih halus.',example:'一緒にご飯を食べませんか。',exampleReading:'いっしょ に ごはん を たべませんか。',exampleMeaning:'Mau makan bersama?',contrast:'～ましょう lebih langsung.'},
{id:'n5-g-08',title:'～から',meaning:'karena ～',pattern:'Kalimat + から',explanation:'Menjelaskan alasan atau sebab.',example:'明日は休みですから、ゆっくり寝ます。',exampleReading:'あした は やすみ です から、ゆっくり ねます。',exampleMeaning:'Karena besok libur, saya akan tidur santai.',contrast:'ので juga menyatakan sebab dengan nuansa lebih lembut.'}
];
const kaigoVocab=[
{id:'k-v-13',term:'体温',reading:'たいおん',meaning:'suhu tubuh',category:'バイタル',example:'体温は36.8度です。',exampleMeaning:'Suhu tubuh 36,8°C.'},
{id:'k-v-14',term:'脈拍',reading:'みゃくはく',meaning:'denyut nadi',category:'バイタル',example:'脈拍を測ります。',exampleMeaning:'Mengukur denyut nadi.'},
{id:'k-v-15',term:'呼吸数',reading:'こきゅうすう',meaning:'frekuensi napas',category:'バイタル',example:'呼吸数は20回です。',exampleMeaning:'Frekuensi napas 20 kali.'},
{id:'k-v-16',term:'SpO₂',reading:'エスピーオーツー',meaning:'saturasi oksigen',category:'バイタル',example:'SpO₂は94パーセントです。',exampleMeaning:'SpO₂ 94%.'},
{id:'k-v-17',term:'呼吸苦',reading:'こきゅうく',meaning:'sesak napas',category:'Kondisi pasien',example:'呼吸苦の訴えがあります。',exampleMeaning:'Ada keluhan sesak napas.'},
{id:'k-v-18',term:'咳嗽',reading:'がいそう',meaning:'batuk',category:'Kondisi pasien',example:'咳嗽が続いています。',exampleMeaning:'Batuk terus berlanjut.'},
{id:'k-v-19',term:'痰',reading:'たん',meaning:'dahak / sputum',category:'Kondisi pasien',example:'痰が多く出ています。',exampleMeaning:'Dahak keluar cukup banyak.'},
{id:'k-v-20',term:'倦怠感',reading:'けんたいかん',meaning:'rasa lelah / malaise',category:'Kondisi pasien',example:'倦怠感があるとのことです。',exampleMeaning:'Pasien mengatakan merasa lelah.'},
{id:'k-v-21',term:'食欲不振',reading:'しょくよくふしん',meaning:'nafsu makan menurun',category:'食事・嚥下',example:'食欲不振が続いています。',exampleMeaning:'Nafsu makan menurun masih berlanjut.'},
{id:'k-v-22',term:'むせ',reading:'むせ',meaning:'tersedak / batuk saat menelan',category:'食事・嚥下',example:'水分摂取時にむせがありました。',exampleMeaning:'Ada tersedak saat minum cairan.'},
{id:'k-v-23',term:'尿量',reading:'にょうりょう',meaning:'jumlah urin',category:'排泄',example:'尿量を確認してください。',exampleMeaning:'Tolong periksa jumlah urin.'},
{id:'k-v-24',term:'失禁',reading:'しっきん',meaning:'inkontinensia',category:'排泄',example:'夜間に尿失禁がありました。',exampleMeaning:'Ada inkontinensia urin pada malam hari.'},
{id:'k-v-25',term:'便秘',reading:'べんぴ',meaning:'konstipasi / sembelit',category:'排泄',example:'三日間排便なく、便秘傾向です。',exampleMeaning:'Sudah tiga hari tidak BAB dan cenderung konstipasi.'},
{id:'k-v-26',term:'下痢',reading:'げり',meaning:'diare',category:'排泄',example:'本日、下痢便が二回ありました。',exampleMeaning:'Hari ini ada BAB diare dua kali.'},
{id:'k-v-27',term:'移乗',reading:'いじょう',meaning:'transfer posisi',category:'ADL・移動',example:'車椅子への移乗は二人介助です。',exampleMeaning:'Transfer ke kursi roda membutuhkan bantuan dua orang.'},
{id:'k-v-28',term:'歩行',reading:'ほこう',meaning:'berjalan / ambulasi',category:'ADL・移動',example:'歩行時は見守りが必要です。',exampleMeaning:'Saat berjalan perlu pengawasan.'},
{id:'k-v-29',term:'見守り',reading:'みまもり',meaning:'pengawasan / standby',category:'ケア',example:'トイレ移動は見守りです。',exampleMeaning:'Perjalanan ke toilet cukup dengan pengawasan.'},
{id:'k-v-30',term:'転倒',reading:'てんとう',meaning:'jatuh',category:'リスク',example:'昨夜、転倒がありました。',exampleMeaning:'Tadi malam terjadi jatuh.'},
{id:'k-v-31',term:'不穏',reading:'ふおん',meaning:'gelisah / agitasi',category:'認知・精神',example:'夜間に不穏がみられました。',exampleMeaning:'Terlihat agitasi pada malam hari.'},
{id:'k-v-32',term:'頓服',reading:'とんぷく',meaning:'obat PRN / bila perlu',category:'薬・処置',example:'疼痛時に頓服を使用しました。',exampleMeaning:'Obat PRN digunakan saat nyeri.'}
];
const handoff=[
{id:'h-03',text:'山田さんですが、夕食時にむせが二回ありました。SpO₂の低下はなく、その後は落ち着いています。水分はとろみ付きでお願いします。',reading:'やまださん ですが、ゆうしょくじ に むせ が にかい ありました。エスピーオーツー の ていか は なく、そのご は おちついて います。すいぶん は とろみつき で おねがいします。',meaning:'Yamada-san tersedak dua kali saat makan malam. Tidak ada penurunan SpO₂. Cairan mohon diberikan dengan pengental.',question:'Hal terpenting untuk shift berikutnya?',choices:['Berikan cairan dengan pengental dan perhatikan tersedak','Pasien harus puasa total','Pasien mengalami perdarahan','Pasien boleh berjalan sendiri'],answer:0},
{id:'h-04',text:'鈴木さんは夜間トイレに行こうとして一人で立ち上がることがありました。転倒歴がありますので、移動時は必ず見守りをお願いします。',reading:'すずきさん は やかん トイレ に いこう として ひとり で たちあがる こと が ありました。てんとうれき が あります ので、いどうじ は かならず みまもり を おねがいします。',meaning:'Suzuki-san sempat berdiri sendiri untuk ke toilet. Karena ada riwayat jatuh, mohon selalu diawasi saat berpindah.',question:'Risiko utama pasien?',choices:['Aspirasi','Jatuh saat berpindah','Demam tinggi','Konstipasi'],answer:1},
{id:'h-05',text:'高橋さん、朝から食欲がなく、朝食は二割程度です。水分は300ミリリットル摂取できています。発熱や嘔吐はありません。',reading:'たかはしさん、あさ から しょくよく が なく、ちょうしょく は にわり ていど です。すいぶん は さんびゃくミリリットル せっしゅ できて います。はつねつ や おうと は ありません。',meaning:'Takahashi-san sejak pagi tidak nafsu makan, sarapan sekitar 20%, cairan 300 mL. Tidak ada demam atau muntah.',question:'Apa yang perlu terus dipantau?',choices:['Asupan makan dan cairan','Luka tekan saja','Pendengaran','Warna rambut'],answer:0},
{id:'h-06',text:'佐々木さんは腰痛の訴えがあり、14時に頓服を使用しました。現在は痛みが軽減しています。歩行時はふらつきがあります。',reading:'ささきさん は ようつう の うったえ が あり、じゅうよじ に とんぷく を しよう しました。げんざい は いたみ が けいげん して います。ほこうじ は ふらつき が あります。',meaning:'Sasaki-san mengeluh nyeri pinggang dan mendapat obat PRN pukul 14. Nyeri berkurang, tetapi saat berjalan masih sempoyongan.',question:'Apa perhatian saat mobilisasi?',choices:['Harus lari agar stabil','Perlu pengawasan karena sempoyongan','Tidak boleh minum','Tidak ada perhatian khusus'],answer:1}
];
function pushUnique(target,items){const ids=new Set(target.map(x=>x.id));items.forEach(item=>{if(!ids.has(item.id)){target.push(item);ids.add(item.id)}})}
pushUnique(D.jlpt.N5.kanji,n5Kanji);pushUnique(D.jlpt.N5.vocab,n5Vocab);pushUnique(D.jlpt.N5.grammar,n5Grammar);pushUnique(D.kaigo.vocab,kaigoVocab);pushUnique(D.kaigo.handoff,handoff);
})();
