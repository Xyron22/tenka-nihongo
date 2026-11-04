// Stage 10A-12: original N4 decisions, reported information and clause-linking functions.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-80",
    "title": "ことにする／ことにしている",
    "meaning": "memutuskan untuk; menetapkan kebiasaan sendiri",
    "pattern": "V bentuk kamus／Vない + ことにする；ことにしている",
    "explanation": "ことにする menyoroti keputusan orang yang memilih tindakan. Bentuk ことにした menyatakan keputusan sudah dibuat, walaupun tindakannya dapat terjadi nanti. ことにしている menyatakan aturan atau kebiasaan yang sengaja dipertahankan.",
    "usage": "Menceritakan pilihan belajar, kegiatan akhir pekan, atau kebiasaan pribadi. Pelaku keputusan biasanya sama dengan pelaku tindakan pada contoh dasar.",
    "whenToUse": "Pakai 行くことにする untuk memutuskan pergi dan 行かないことにする untuk memutuskan tidak pergi. Untuk memilih benda cukup Nにする, misalnya お茶にする.",
    "watchOut": "ことにした tidak otomatis berarti tindakannya sudah selesai. ことにしている memerlukan konteks kebiasaan atau keputusan yang terus berlaku.",
    "commonMistake": "勉強しますことにする salah untuk pola ini. Gunakan 勉強することにする. お茶ことにする juga salah; pilihan benda ialah お茶にする.",
    "example": "今週は家で勉強することにしました。",
    "exampleReading": "こんしゅう は いえ で べんきょう する こと に しました。",
    "exampleMeaning": "Saya sudah memutuskan untuk belajar di rumah minggu ini.",
    "extraExample": "夜はコーヒーを飲まないことにしています。",
    "extraExampleReading": "よる は コーヒー を のまない こと に して います。",
    "extraExampleMeaning": "Saya menetapkan kebiasaan tidak minum kopi pada malam hari.",
    "contrast": "ことにする menyoroti pilihan sendiri; ことになる menyampaikan hal yang telah ditentukan atau diatur tanpa menyoroti pilihan pribadi. ようにする menekankan usaha agar kebiasaan atau hasil tercapai.",
    "quiz": {
      "prompt": "「今週は家で勉強することにしました」は、何を伝えていますか。",
      "reading": "「こんしゅう は いえ で べんきょう する こと に しました」は、なに を つたえて います か。",
      "context": "Pembicara sedang menjelaskan pilihan belajarnya sendiri, bukan hasil perintah sekolah.",
      "choices": [
        "sudah memutuskan akan belajar di rumah",
        "pasti sudah selesai belajar seminggu",
        "mendengar orang lain sedang belajar",
        "dipaksa mengajar di sekolah"
      ],
      "answer": 0,
      "explanation": "ことにしました menyatakan keputusan telah dibuat. Belajar minggu ini masih dapat berlangsung nanti; kalimat tidak menyatakan sudah selesai, mendengar kabar, atau dipaksa."
    }
  },
  {
    "id": "n4-g-81",
    "title": "ことになる（決定・予定）",
    "meaning": "diputuskan atau diatur bahwa akan ～",
    "pattern": "V bentuk kamus／Vない + ことになる；ことになった",
    "explanation": "ことになる menyampaikan keputusan atau pengaturan sebagai hasil keadaan, pembicaraan, atau pihak lain. Pembicara tidak menonjolkan kehendaknya sendiri; ia masih mungkin ikut menyetujui keputusan itu.",
    "usage": "Melaporkan jadwal yang disepakati atau penugasan yang sudah diatur. Bentuk sopan ことになりました lazim ketika mengumumkan keputusan baru.",
    "whenToUse": "Gunakan ことになった ketika keputusannya sudah terbentuk. Waktu tindakan ditentukan kata seperti 来週 atau 明日, bukan hanya bentuk lampau なった.",
    "watchOut": "Pola ini bukan bentuk pasif gramatikal dan tidak selalu berarti dipaksa. Keputusan yang menyangkut pembicara juga dapat dilaporkan secara tidak langsung dengannya.",
    "commonMistake": "来週会うことになりました tidak berarti pertemuannya sudah terjadi minggu lalu. Keputusan sudah dibuat, sedangkan 来週 menunjukkan pertemuan yang akan datang.",
    "example": "話し合って、日曜日に集まることになりました。",
    "exampleReading": "はなしあって、にちようび に あつまる こと に なりました。",
    "exampleMeaning": "Setelah berdiskusi, diputuskan bahwa kami akan berkumpul pada hari Minggu.",
    "extraExample": "明日の授業は行わないことになりました。",
    "extraExampleReading": "あした の じゅぎょう は おこなわない こと に なりました。",
    "extraExampleMeaning": "Sudah diputuskan bahwa pelajaran besok tidak akan diadakan.",
    "contrast": "ことにする menyoroti keputusan sendiri. ことになる melaporkan hasil pengaturan. ようになる menyatakan perubahan kemampuan atau keadaan, misalnya 読めるようになる.",
    "quiz": {
      "prompt": "「来週、大阪へ出張することになりました」で、出張はいつですか。",
      "reading": "「らいしゅう、おおさか へ しゅっちょう する こと に なりました」で、しゅっちょう は いつ です か。",
      "context": "Pembicara menyampaikan penugasan yang sudah diatur kantor. Bedakan waktu keputusan dengan waktu kegiatan.",
      "choices": [
        "minggu depan; pengaturannya sudah diputuskan",
        "minggu lalu karena なりました lampau",
        "sekarang sedang berangkat setiap hari",
        "tidak akan pernah pergi"
      ],
      "answer": 0,
      "explanation": "来週 menentukan waktu perjalanan, yaitu minggu depan. ことになりました menunjukkan pengaturan sudah diputuskan; tidak mengubah 来週 menjadi masa lalu."
    }
  },
  {
    "id": "n4-g-82",
    "title": "そうだ（伝聞）",
    "meaning": "kabarnya; menurut informasi yang didengar",
    "pattern": "V biasa／Aい utuh／Aなだ／Nだ + そうだ・そうです",
    "explanation": "そうだ menyampaikan isi informasi yang diperoleh dari orang, berita, atau pengumuman. Ini berbeda dari そう yang menggambarkan penampilan. Sumber informasi dapat disebutkan agar pembaca tahu dasar laporannya.",
    "usage": "Meneruskan kabar, misalnya jadwal atau keadaan suatu tempat. Bentuk biasa dari isi kabar tetap dipertahankan sebelum そうです.",
    "whenToUse": "Gunakan 来るそうです、来ないそうです、来たそうです；安いそうです；静かだそうです；休みだそうです. Bentuk negatif dan waktu isi kabar berada pada klausa sebelum そう.",
    "watchOut": "安いそうです berarti kabarnya murah; 安そうです berarti kelihatannya murah. Jangan menambah だ setelah verba atau Aい biasa. Kabar yang disampaikan belum otomatis terbukti benar.",
    "commonMistake": "明日は休みそうです bukan pola dasar kabar bahwa besok libur. Untuk kabar nomina gunakan 明日は休みだそうです. 安いだそうです juga salah; gunakan 安いそうです.",
    "example": "学校のお知らせでは、明日は休みだそうです。",
    "exampleReading": "がっこう の おしらせ では、あした は やすみ だ そう です。",
    "exampleMeaning": "Menurut pengumuman sekolah, kabarnya besok libur.",
    "extraExample": "姉の話では、その店は安いそうです。",
    "extraExampleReading": "あね の はなし では、その みせ は やすい そう です。",
    "extraExampleMeaning": "Menurut cerita kakak perempuan saya, katanya toko itu murah.",
    "contrast": "安いそうだ melaporkan kabar; 安そうだ menilai dari penampilan. らしい dapat menyampaikan informasi tidak langsung atau dugaan; と聞いた menyebut bahwa pembicara mendengarnya.",
    "quiz": {
      "prompt": "「姉の話では、その店は安いそうです」の情報は、どこから来ましたか。",
      "reading": "「あね の はなし では、その みせ は やすい そう です」の じょうほう は、どこ から きました か。",
      "context": "Tentukan dasar informasi murahnya toko. Pembicara belum mengatakan bahwa ia melihat harga sendiri.",
      "choices": [
        "dari cerita kakak perempuan",
        "dari bentuk bangunan yang terlihat murah",
        "dari perintah menurunkan harga",
        "dari keputusan membeli toko"
      ],
      "answer": 0,
      "explanation": "姉の話では menyebut sumber dan 安いそうです melaporkan isinya. Bentuk utuh 安い menunjukkan kabar; penilaian penampilan memakai 安そうです."
    }
  },
  {
    "id": "n4-g-83",
    "title": "という／っていう（名前・内容）",
    "meaning": "yang bernama; yang disebut; bahwa sebagai isi suatu nomina",
    "pattern": "nama + という／っていう + N；klausa biasa + という + 話・知らせなど",
    "explanation": "という menghubungkan nama atau isi dengan nomina sesudahnya. 「そら」という店 berarti toko bernama Sora. Klausa sebelum という juga dapat menjadi isi berita atau cerita; tidak selalu menunjukkan seseorang mengucapkan nama dengan suara.",
    "usage": "Memperkenalkan orang, tempat, judul, atau isi kabar. Dalam percakapan santai っていう dan nama + って + N dapat menggantikan という pada pola penamaan.",
    "whenToUse": "Pakai 「そら」という店、山田っていう人、駅ができるという知らせ. Pertahankan bentuk biasa sebelum という, misalnya 休みだという知らせ untuk nomina.",
    "watchOut": "って bersifat percakapan dan mempunyai fungsi lain seperti kutipan. Maknanya ditentukan struktur dan konteks; penamaan tidak otomatis sama dengan kutipan pada akhir kalimat.",
    "commonMistake": "「そら」と店 tidak membentuk nomina toko bernama Sora. Gunakan 「そら」という店. Jangan mengganti semua pola lanjutan というより／というのは hanya dengan makna bernama.",
    "example": "「そら」っていう店でパンを買いました。",
    "exampleReading": "「そら」って いう みせ で パン を かいました。",
    "exampleMeaning": "Saya membeli roti di toko bernama Sora. Ini gaya percakapan.",
    "extraExample": "駅ができるという知らせを聞きました。",
    "extraExampleReading": "えき が できる と いう しらせ を ききました。",
    "extraExampleMeaning": "Saya mendengar kabar bahwa akan dibangun stasiun.",
    "contrast": "友達が「行く」と言った mengutip ucapan teman. 「そら」という店 menerangkan nama toko, sedangkan 駅ができるという知らせ menerangkan isi kabar. ということ menominalkan keseluruhan isi menjadi suatu hal.",
    "quiz": {
      "prompt": "「『そら』という店」は、どんな意味ですか。",
      "reading": "「『そら』と いう みせ」は、どんな いみ です か。",
      "context": "Pilih hubungan nama dan nomina pada perkenalan sebuah toko.",
      "choices": [
        "toko yang bernama Sora",
        "toko yang sedang melihat langit",
        "perintah agar toko berbicara",
        "kabar bahwa semua toko tutup"
      ],
      "answer": 0,
      "explanation": "Nama sebelum という menerangkan 店 setelahnya. Kalimat tidak menyatakan toko melihat, berbicara, atau tutup. Gaya santainya ialah 「そら」っていう店."
    }
  },
  {
    "id": "n4-g-84",
    "title": "と言われている",
    "meaning": "dikatakan secara umum bahwa; dikenal sebagai",
    "pattern": "klausa biasa + と言われている；N／Aな + だと言われている",
    "explanation": "と言われている menyampaikan penilaian atau informasi yang beredar atau dikenal orang. Bentuk 言われる berasal dari pasif 言う, tetapi pola ini biasanya tidak perlu menyebut satu orang yang mengatakannya.",
    "usage": "Menyebut reputasi tempat, benda, atau kegiatan sambil menandai bahwa itu pandangan yang dilaporkan. Bedakan laporan reputasi dengan kesaksian langsung atau bukti pasti.",
    "whenToUse": "Pakai 静かだと言われている、便利だと言われています、人気があると言われている. Negasi dan waktu isi tetap berada sebelum と.",
    "watchOut": "Ungkapan umum ini tidak membuktikan semua orang setuju atau informasinya pasti benar. Dalam laporan faktual, sumber tetap perlu diperiksa bila kesimpulannya penting.",
    "commonMistake": "静かと言われている kehilangan だ pada pola dasar klausa Aな ini. Gunakan 静かだと言われている. 人気があるだと言われる juga salah karena ある sudah menjadi predikat.",
    "example": "この町は静かだと言われています。",
    "exampleReading": "この まち は しずか だ と いわれて います。",
    "exampleMeaning": "Kota ini dikenal atau dikatakan tenang.",
    "extraExample": "この辞書は使いやすいと言われています。",
    "extraExampleReading": "この じしょ は つかいやすい と いわれて います。",
    "extraExampleMeaning": "Kamus ini dikatakan mudah digunakan.",
    "contrast": "と言われている melaporkan pandangan yang beredar. と聞いた menyoroti pembicara mendengar informasi. そうだ meneruskan kabar, sedangkan に見える menilai kesan penampilan.",
    "quiz": {
      "prompt": "「この辞書は使いやすいと言われています」は、何を表しますか。",
      "reading": "「この じしょ は つかいやすい と いわれて います」は、なに を あらわします か。",
      "context": "Bedakan reputasi suatu kamus dengan bukti bahwa semua orang sudah memakainya.",
      "choices": [
        "ada penilaian yang beredar bahwa kamusnya mudah dipakai",
        "semua orang pasti sudah lulus ujian",
        "pembicara memerintahkan orang membeli kamus",
        "kamus sedang mengatakan sesuatu"
      ],
      "answer": 0,
      "explanation": "と言われています menandai penilaian yang dikenal atau beredar. Kalimat tidak menjamin pengalaman semua orang, kelulusan, atau tindakan membeli."
    }
  },
  {
    "id": "n4-g-85",
    "title": "なくて（接続・理由）",
    "meaning": "tidak ～ dan; karena tidak ～",
    "pattern": "Vない→Vなくて；Aい→Aくなくて；N／Aな + ではなくて・じゃなくて",
    "explanation": "なくて menghubungkan bentuk negatif dengan klausa lain. Hubungannya dapat berupa dua fakta yang berdampingan, atau alasan bagi perasaan dan hasil yang mengikutinya. Konteks menentukan apakah terjemahannya dan atau karena.",
    "usage": "Mengatakan sebab kesulitan, kekecewaan, atau keadaan, serta menghubungkan sifat negatif dengan sifat lain. Pola ini tidak otomatis menyatakan urutan tindakan yang disengaja.",
    "whenToUse": "Gunakan 分からなくて困る、広くなくて暗い、便利ではなくて困る. Untuk sebab negatif yang diikuti perasaan, なくて sering menjadi pilihan yang alami.",
    "watchOut": "ないで lazim untuk tanpa melakukan atau permintaan negatif. Keduanya tidak bisa selalu ditukar. Untuk larangan sopan tetap gunakan 食べないでください, bukan 食べなくてください.",
    "commonMistake": "分からないて困りました salah. Bentuk ない berubah menjadi なくて: 分からなくて困りました. Untuk Aい, 高い menjadi 高くなくて, bukan 高いなくて.",
    "example": "電車が来なくて、困りました。",
    "exampleReading": "でんしゃ が こなくて、こまりました。",
    "exampleMeaning": "Saya mengalami kesulitan karena keretanya tidak datang.",
    "extraExample": "この部屋は広くなくて、窓も小さいです。",
    "extraExampleReading": "この へや は ひろくなくて、まど も ちいさい です。",
    "extraExampleMeaning": "Kamar ini tidak luas, dan jendelanya juga kecil.",
    "contrast": "電車が来なくて困る menunjukkan alasan kesulitan. 朝ご飯を食べないで出かける menyoroti berangkat tanpa sarapan. ないから dapat menyatakan alasan secara lebih eksplisit.",
    "quiz": {
      "prompt": "「電車が来なくて、困りました」では、どうして困りましたか。",
      "reading": "「でんしゃ が こなくて、こまりました」では、どうして こまりました か。",
      "context": "Tentukan hubungan negatif dan hasil pada kalimat, bukan permintaan agar kereta tidak datang.",
      "choices": [
        "karena keretanya tidak datang",
        "karena keretanya datang terlalu cepat",
        "karena saya dilarang naik selamanya",
        "karena saya berhasil membeli kereta"
      ],
      "answer": 0,
      "explanation": "来なくて menghubungkan tidak datang dengan 困りました sebagai alasan kesulitan. Ini tidak memerintah kereta, menyatakan kedatangan, atau pembelian."
    }
  },
  {
    "id": "n4-g-86",
    "title": "て／で（理由・原因）",
    "meaning": "karena ～ sehingga terjadi hasil atau perasaan",
    "pattern": "Vて／Aくて／Aなで／Nで + hasil・perasaan",
    "explanation": "Bentuk て atau で dapat menghubungkan keadaan penyebab dengan akibat. Pada pola alasan dasar ini, akibat sering berupa perasaan, ketidakmampuan, atau hasil yang tidak sekadar diperintah atau dipilih pembicara.",
    "usage": "Menyebut penyebab terlambat, rasa senang, kesulitan, atau perubahan alami. Hubungan sebab dibaca dari isi kedua klausa, bukan dari bentuk て saja.",
    "whenToUse": "Gunakan 遅れて困る、寒くて眠れない、雨で試合が中止になる. Untuk alasan yang langsung diikuti perintah atau ajakan, から／ので sering lebih sesuai.",
    "watchOut": "て juga dapat menunjukkan urutan, cara, atau fakta sejajar. Jangan menerjemahkan setiap て sebagai karena. Bentuk N penyebab memakai で, misalnya 雨で.",
    "commonMistake": "寒いて眠れません salah; 寒い menjadi 寒くて. Kalimat alasan bagi permintaan seperti 安いから買ってください lebih jelas daripada menganggap semua て dapat langsung dipakai sebelum perintah.",
    "example": "風が強くて、窓を開けられません。",
    "exampleReading": "かぜ が つよくて、まど を あけられません。",
    "exampleMeaning": "Karena anginnya kencang, saya tidak bisa membuka jendela.",
    "extraExample": "電車が遅れて、授業に間に合いませんでした。",
    "extraExampleReading": "でんしゃ が おくれて、じゅぎょう に まにあいません でした。",
    "extraExampleMeaning": "Karena kereta terlambat, saya tidak sempat tiba tepat waktu untuk pelajaran.",
    "contrast": "窓を開けて本を読む dapat menunjukkan urutan atau keadaan saat membaca. 風が強くて開けられない menyatakan penyebab ketidakmampuan. から／ので lebih eksplisit menandai alasan.",
    "quiz": {
      "prompt": "「風が強くて、窓を開けられません」の「て」は、何をつないでいますか。",
      "reading": "「かぜ が つよくて、まど を あけられません」の「て」は、なに を つないで います か。",
      "context": "Baca hubungan angin dan ketidakmampuan membuka jendela.",
      "choices": [
        "penyebab dan akibatnya",
        "dua rencana yang belum dipilih",
        "nama orang dan nama toko",
        "perintah membuka lalu menutup"
      ],
      "answer": 0,
      "explanation": "Angin kencang menjadi sebab jendela tidak dapat dibuka. Dalam konteks ini て tidak hanya mengurutkan dua tindakan."
    }
  },
  {
    "id": "n4-g-87",
    "title": "て／で（手段・方法）",
    "meaning": "dengan cara; menggunakan",
    "pattern": "Vて + tindakan utama；N alat・sarana + で + V",
    "explanation": "Bentuk て dapat menerangkan cara melakukan tindakan utama. Nomina alat atau sarana memakai で. Pada contoh dasar, cara dan tindakan utama membentuk satu kegiatan yang saling terkait.",
    "usage": "Menjelaskan pergi dengan berjalan kaki, membaca sambil memakai kamus, atau membuka pintu menggunakan kunci. Pilih bentuk menurut apakah yang mendahului ialah verba atau nomina.",
    "whenToUse": "Gunakan 歩いて行く、辞書を使って読む、鍵で開ける. で sebagai sarana berbeda dari に sebagai tujuan dan で sebagai lokasi kegiatan.",
    "watchOut": "Tentukan hubungan isi kedua verba. ドアを開けて入る lazim menyatakan urutan, sedangkan 歩いて行く menyatakan cara pergi. Bentuknya sama, fungsinya dapat berbeda.",
    "commonMistake": "鍵にドアを開けます salah bila maksudnya menggunakan kunci. Gunakan 鍵でドアを開けます. Verba 歩く diubah menjadi 歩いて, bukan 歩くで.",
    "example": "辞書を使って、新聞を読みます。",
    "exampleReading": "じしょ を つかって、しんぶん を よみます。",
    "exampleMeaning": "Saya membaca koran dengan menggunakan kamus.",
    "extraExample": "この鍵でドアを開けます。",
    "extraExampleReading": "この かぎ で ドア を あけます。",
    "extraExampleMeaning": "Saya membuka pintu menggunakan kunci ini.",
    "contrast": "歩いて駅へ行く menyatakan cara menuju stasiun. 駅で切符を買う memakai で untuk lokasi. 雨で遅れる memakai で untuk sebab.",
    "quiz": {
      "prompt": "「駅まで歩いて行きました」では、どうやって駅へ行きましたか。",
      "reading": "「えき まで あるいて いきました」では、どうやって えき へ いきました か。",
      "context": "Tentukan sarana atau cara pergi dari kalimat yang diberikan.",
      "choices": [
        "dengan berjalan kaki",
        "dengan naik kereta",
        "karena stasiunnya tutup",
        "setelah tidur di stasiun"
      ],
      "answer": 0,
      "explanation": "歩いて menerangkan cara 行きました, yaitu berjalan kaki. Kalimat tidak menyebut kendaraan, penutupan stasiun, atau tidur."
    }
  },
  {
    "id": "n4-g-88",
    "title": "て（並列・対比）",
    "meaning": "dan; sedangkan untuk fakta yang sejajar",
    "pattern": "klausa A bentuk て／で + klausa B（並列・対比）",
    "explanation": "て dapat menghubungkan dua kegiatan atau keadaan sebagai informasi sejajar. Pelakunya dapat berbeda. Kalimat tidak harus berarti kegiatan pertama selesai sebelum kegiatan kedua dimulai.",
    "usage": "Menggambarkan kegiatan orang yang berbeda pada satu situasi, atau membandingkan dua keadaan. Kata seperti 姉は dan 弟は membantu memperjelas pelaku masing-masing.",
    "whenToUse": "Gunakan 姉は料理をして、弟は掃除をしている untuk kegiatan paralel. Untuk sifat atau nomina, pakai bentuk sambung yang sesuai: Aくて、Aなで、Nで.",
    "watchOut": "Hubungan sejajar ditentukan konteks. Bentuk て sendiri tidak menjamin dua kegiatan persis mulai dan berakhir bersamaan. ながら pada pola dasar biasanya menyatakan satu pelaku melakukan dua kegiatan.",
    "commonMistake": "Jangan otomatis menerjemahkan setiap て sebagai setelah itu. Pada 姉は料理をして、弟は掃除をしています, pelaku klausa kedua adalah 弟, bukan 姉.",
    "example": "今、姉は料理をして、弟は掃除をしています。",
    "exampleReading": "いま、あね は りょうり を して、おとうと は そうじ を して います。",
    "exampleMeaning": "Sekarang kakak perempuan sedang memasak, dan adik laki-laki sedang bersih-bersih.",
    "extraExample": "兄の部屋は広くて、私の部屋は小さいです。",
    "extraExampleReading": "あに の へや は ひろくて、わたし の へや は ちいさい です。",
    "extraExampleMeaning": "Kamar kakak laki-laki luas, sedangkan kamar saya kecil.",
    "contrast": "朝起きて顔を洗う lazim mengurutkan tindakan. 姉は料理をして、弟は掃除をしている menghubungkan kegiatan sejajar dengan pelaku berbeda. 音楽を聞きながら料理する biasanya satu pelaku.",
    "quiz": {
      "prompt": "「今、姉は料理をして、弟は掃除をしています」では、掃除をしているのは誰ですか。",
      "reading": "「いま、あね は りょうり を して、おとうと は そうじ を して います」では、そうじ を して いる の は だれ です か。",
      "context": "Perhatikan pergantian topik/pelaku di antara dua klausa dengan て.",
      "choices": [
        "adik laki-laki",
        "kakak perempuan saja",
        "kakak laki-laki yang tidak disebut",
        "semua orang sudah selesai tidur"
      ],
      "answer": 0,
      "explanation": "弟は menjadi pelaku 掃除をしています. Bentuk て menghubungkan dua informasi dan tidak memindahkan tindakan bersih-bersih kepada 姉."
    }
  },
  {
    "id": "n4-g-89",
    "title": "てよかった／なくてよかった",
    "meaning": "syukurlah sudah; syukurlah tidak",
    "pattern": "Vて + よかった；Vなくて + よかった",
    "explanation": "てよかった menilai suatu tindakan atau kejadian sebagai hal yang baik setelah melihat hasilnya. なくてよかった menilai tidak terjadinya sesuatu sebagai hal yang baik. Keduanya menyatakan rasa lega atau puas.",
    "usage": "Mengatakan syukur sudah memesan, memeriksa, atau berhasil melakukan sesuatu. Bentuk potensial seperti 間に合えてよかった menyatakan lega karena bisa mencapainya.",
    "whenToUse": "Gunakan 予約してよかった、忘れなくてよかった. Kejadian atau ketidakterjadian yang dinilai dianggap nyata dalam konteks, berbeda dari penyesalan atas pilihan yang tidak dibuat.",
    "watchOut": "Pakai bentuk て, bukan bentuk た langsung sebelum よかった. Bedakan 行ってよかった dari 行けばよかった: yang pertama senang sudah pergi, yang kedua menyesal seandainya pergi.",
    "commonMistake": "予約したよかった salah sebagai pola ini. Gunakan 予約してよかった. 行かなくてよかった berarti syukurlah tidak pergi, bukan menyesal tidak pergi.",
    "example": "早く予約してよかったです。",
    "exampleReading": "はやく よやく して よかった です。",
    "exampleMeaning": "Syukurlah saya memesan lebih awal.",
    "extraExample": "大事な書類を忘れなくてよかったです。",
    "extraExampleReading": "だいじ な しょるい を わすれなくて よかった です。",
    "extraExampleMeaning": "Syukurlah saya tidak lupa membawa dokumen penting itu.",
    "contrast": "買ってよかった menyatakan puas sudah membeli. 買えばよかった menyesal karena tidak membeli pada konteks dasar. 買わなくてよかった lega tidak membeli, sedangkan 買わなければよかった menyesal sudah membeli.",
    "quiz": {
      "prompt": "「早く予約してよかったです」は、どんな気持ちですか。",
      "reading": "「はやく よやく して よかった です」は、どんな きもち です か。",
      "context": "Pembicara sudah memesan lebih awal dan sekarang menilai hasilnya.",
      "choices": [
        "lega karena sudah memesan lebih awal",
        "menyesal karena belum pernah memesan",
        "memerintahkan semua orang membatalkan",
        "menanyakan arti kata reservasi"
      ],
      "answer": 0,
      "explanation": "予約してよかった menilai tindakan pemesanan yang sudah dilakukan sebagai hal baik. Penyesalan seandainya memesan akan memakai 予約すればよかった dalam konteks yang sesuai."
    }
  },
  {
    "id": "n4-g-90",
    "title": "てすみません／なくてすみません",
    "meaning": "maaf karena sudah; maaf karena tidak",
    "pattern": "Vて／Vなくて + すみません・すみませんでした",
    "explanation": "てすみません menyebut tindakan atau keadaan yang menjadi alasan meminta maaf. なくてすみません menyebut tidak dilakukannya sesuatu atau ketidakmampuan yang disesalkan. Ini meminta maaf, bukan mengucapkan terima kasih.",
    "usage": "Meminta maaf karena terlambat, mengganggu, atau tidak dapat membantu. Bentuk lampau すみませんでした sesuai untuk permintaan maaf atas kejadian yang telah terjadi.",
    "whenToUse": "Gunakan 遅れてすみません、手伝えなくてすみません. Bentuk potensial negatif 手伝えない memperjelas tidak bisa membantu; 手伝わない menyatakan tidak membantu.",
    "watchOut": "Jangan mengganti なくて dengan ないで secara otomatis pada pola alasan ini. Untuk berterima kasih atas bantuan orang, gunakan てくれてありがとう pada konteks yang sesuai.",
    "commonMistake": "遅れるすみません salah. Gunakan 遅れてすみません. 手伝えないですみません bukan pola dasar yang diajarkan; gunakan 手伝えなくてすみません.",
    "example": "連絡が遅れてすみません。",
    "exampleReading": "れんらく が おくれて すみません。",
    "exampleMeaning": "Maaf karena saya terlambat menghubungi Anda.",
    "extraExample": "今日は手伝えなくてすみません。",
    "extraExampleReading": "きょう は てつだえなくて すみません。",
    "extraExampleMeaning": "Maaf karena hari ini saya tidak bisa membantu.",
    "contrast": "遅れてすみません meminta maaf atas keterlambatan. 来てくれてありがとう berterima kasih karena orang lain datang. 来なくてよかった menilai tidak datang sebagai hal yang baik, bukan permintaan maaf.",
    "quiz": {
      "prompt": "「今日は手伝えなくてすみません」は、何について謝っていますか。",
      "reading": "「きょう は てつだえなくて すみません」は、なに に ついて あやまって います か。",
      "context": "Perhatikan bentuk potensial negatif 手伝えない dan alasan sebelum すみません.",
      "choices": [
        "tidak bisa membantu hari ini",
        "sudah membantu terlalu banyak kemarin",
        "lawan bicara sudah mengucapkan terima kasih",
        "harus melarang semua bantuan"
      ],
      "answer": 0,
      "explanation": "手伝えなくて berasal dari 手伝えない, tidak bisa membantu. Itulah alasan meminta maaf; kalimat tidak menyatakan bantuan sudah dilakukan atau melarang bantuan."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
