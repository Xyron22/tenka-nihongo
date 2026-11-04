// Stage 10A-10: original N4 honorific, humble and formal-request foundations.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-72",
    "title": "お～になる（尊敬）",
    "meaning": "melakukan ～ dengan menghormati pelakunya",
    "pattern": "お + Vます tanpa ます + になる（kata yang sesuai）",
    "explanation": "お～になる menggambarkan tindakan orang yang dihormati. Orang itu dapat menjadi lawan bicara atau pihak ketiga yang dibicarakan; bukan otomatis pembicara sendiri.",
    "usage": "Membicarakan guru atau tamu membaca, menulis atau pulang dengan bentuk hormat. Tentukan siapa pelaku tindakan dan siapa yang dihormati sebelum memilih bentuk.",
    "whenToUse": "Gunakan 読む→お読みになる、書く→お書きになる、帰る→お帰りになる. Bentuk sopannya お読みになります. Tidak semua verba mengikuti pola ini secara bebas; ada bentuk khusus seperti いらっしゃる.",
    "watchOut": "Menghormati pelaku berbeda dari merendahkan cara menyebut tindakan pihak sendiri. Saat berbicara kepada pihak luar, hubungan pihak sendiri dan pihak lawan bicara juga memengaruhi cara menyebut orang dalam kelompok sendiri.",
    "commonMistake": "私がお読みになります tidak cocok bila maksudnya saya menceritakan tindakan saya sendiri secara sopan. Untuk pola hormat ini, contoh dasarnya 先生がお読みになります. Jangan menambahkan お pada bentuk kamus sebagai お読むになります.",
    "example": "先生はもうお帰りになりました。",
    "exampleReading": "せんせい は もう おかえり に なりました。",
    "exampleMeaning": "Guru sudah pulang, dengan menyebut tindakan guru secara hormat.",
    "extraExample": "この本はお読みになりましたか。",
    "extraExampleReading": "この ほん は およみ に なりました か。",
    "extraExampleMeaning": "Apakah Anda sudah membaca buku ini? Bentuknya menghormati orang yang membaca.",
    "contrast": "お読みになる menghormati pembaca sebagai pelaku. お読みする pada konteks membacakan untuk orang yang dihormati adalah tindakan pihak sendiri. 読みます memberi kesopanan umum tanpa bentuk hormat khusus bagi pelaku.",
    "quiz": {
      "prompt": "「先生は本をお読みになりました」で、本を読んだ人は誰ですか。",
      "reading": "「せんせい は ほん を およみ に なりました」で、ほん を よんだ ひと は だれ です か。",
      "context": "Tentukan pelaku yang dihormati dalam pola お～になる pada laporan tindakan guru.",
      "choices": [
        "guru yang membaca buku",
        "saya yang membacakan untuk guru",
        "orang yang menyuruh guru membaca",
        "tidak ada orang yang membaca"
      ],
      "answer": 0,
      "explanation": "先生 adalah pelaku membaca dan お読みになりました menghormati tindakan guru. Kalimat tidak menjadikan saya pelakunya, tidak menyatakan perintah kepada guru, dan tidak meniadakan kegiatan membaca."
    }
  },
  {
    "id": "n4-g-73",
    "title": "お～ください／ご～ください",
    "meaning": "silakan / mohon melakukan ～ dengan menghormati pelaku",
    "pattern": "お + Vます tanpa ます + ください／ご + NするのN + ください",
    "explanation": "お～ください／ご～ください meminta atau mempersilakan orang yang dihormati melakukan tindakan. Pilihan お／ご mengikuti kata dan pemakaian yang lazim, bukan hanya keinginan membuat kalimat lebih panjang.",
    "usage": "Mengarahkan tamu menunggu atau meminta pemeriksaan informasi secara sopan. Pelaku yang diminta adalah lawan bicara pada pola permintaan dasar ini.",
    "whenToUse": "Gunakan 待つ→お待ちください、書く→お書きください、確認する→ご確認ください. Pola ご確認ください tidak mempertahankan する di tengah. Kata tertentu mempunyai bentuk khusus yang perlu dipelajari, misalnya ご覧ください.",
    "watchOut": "お／ご tidak dapat ditempel pada semua verba tanpa memeriksa bentuk yang wajar. お待ちください meminta orang lain menunggu; お待ちします justru menyatakan pihak sendiri akan menunggu.",
    "commonMistake": "お待つください dan ご確認するください keliru. Gunakan お待ちください dan ご確認ください. Jangan menukar bentuk permintaan ini dengan お～します saat pelakunya tamu.",
    "example": "こちらでお待ちください。",
    "exampleReading": "こちら で おまち ください。",
    "exampleMeaning": "Silakan menunggu di sini.",
    "extraExample": "お名前をご確認ください。",
    "extraExampleReading": "おなまえ を ごかくにん ください。",
    "extraExampleMeaning": "Mohon periksa nama Anda.",
    "contrast": "お／ご～ください menghormati orang yang diminta bertindak. ～てください adalah permintaan umum. お／ご～します menyebut tindakan pihak sendiri untuk orang yang dihormati, sehingga peran pelakunya berbeda.",
    "quiz": {
      "prompt": "こちらでお〔　〕ください。",
      "reading": "こちら で お〔　〕ください。",
      "context": "Petugas mempersilakan tamu menunggu di sini. Lengkapi bentuk お～ください dari 待ちます.",
      "choices": [
        "待ち",
        "待つ",
        "待って",
        "待った"
      ],
      "answer": 0,
      "explanation": "待ちます melepas ます menjadi 待ち, sehingga お待ちください. Bentuk kamus 待つ, bentuk て 待って, dan bentuk た 待った tidak langsung digunakan dalam pola お＋pangkalます＋ください ini."
    }
  },
  {
    "id": "n4-g-74",
    "title": "いらっしゃる",
    "meaning": "ada / pergi / datang（bentuk hormat bagi pelaku）",
    "pattern": "いる・行く・来る → いらっしゃる／いらっしゃいます",
    "explanation": "いらっしゃる adalah bentuk hormat untuk keberadaan atau perpindahan orang yang dihormati. Tempat, arah dan konteks menentukan apakah maknanya ada, pergi atau datang.",
    "usage": "Memberi tahu lokasi guru atau rencana perjalanan seseorang yang dihormati. Orang yang dibicarakan tidak harus sedang menjadi lawan bicara.",
    "whenToUse": "Gunakan 会議室にいらっしゃいます untuk berada di ruang rapat atau 大阪へいらっしゃいます untuk pergi ke Osaka menurut konteks. Bentuk ます yang dilatih adalah いらっしゃいます; lampau sopannya いらっしゃいました.",
    "watchOut": "Jangan menerjemahkan setiap いらっしゃる hanya sebagai datang. Pilihan hormat juga mempertimbangkan hubungan pihak sendiri/lawan bicara; bukan semua orang otomatis memakai bentuk yang sama dalam semua situasi.",
    "commonMistake": "いらっしゃります bukan bentuk sopan standar yang ditargetkan; gunakan いらっしゃいます. Jangan memakai 私はいらっしゃいます untuk menyebut keberadaan diri sendiri secara sopan pada pola dasar ini.",
    "example": "先生は今、会議室にいらっしゃいます。",
    "exampleReading": "せんせい は いま、かいぎしつ に いらっしゃいます。",
    "exampleMeaning": "Guru sekarang berada di ruang rapat, dengan menyebut guru secara hormat.",
    "extraExample": "部長は明日、大阪へいらっしゃいます。",
    "extraExampleReading": "ぶちょう は あした、おおさか へ いらっしゃいます。",
    "extraExampleMeaning": "Kepala bagian besok akan pergi ke Osaka, dengan bentuk hormat.",
    "contrast": "いらっしゃる menghormati orang yang ada/pergi/datang. いる／行く／来る adalah bentuk netral. ございます biasanya menyatakan ある secara formal untuk benda/hal, bukan pengganti umum keberadaan orang.",
    "quiz": {
      "prompt": "「いらっしゃる」の丁寧形（ます形）はどれですか。",
      "reading": "「いらっしゃる」の ていねいけい（ますけい）は どれ です か。",
      "context": "Pilih bentuk ます standar dari いらっしゃる, tanpa mengubahnya menjadi bentuk kemungkinan.",
      "choices": [
        "いらっしゃいます",
        "いらっしゃります",
        "いらっしゃるます",
        "いらっしゃれます"
      ],
      "answer": 0,
      "explanation": "Bentuk sopan standarnya いらっしゃいます. いらっしゃります／いらっしゃるます bukan bentuk ます standar ini. いらっしゃれます mempunyai perubahan kemungkinan, sehingga bukan sekadar bentuk sopan yang diminta."
    }
  },
  {
    "id": "n4-g-75",
    "title": "なさる",
    "meaning": "melakukan ～（bentuk hormat dari する）",
    "pattern": "する → なさる／Nする → Nなさる／bentuk sopan: なさいます",
    "explanation": "なさる menghormati orang yang melakukan tindakan する. Makna dasar kegiatannya tetap, tetapi cara menyebut pelakunya menjadi hormat.",
    "usage": "Menanyakan kegiatan lawan bicara atau membicarakan aktivitas guru yang dihormati. Ini berbeda dari menjelaskan tindakan sendiri dengan いたす.",
    "whenToUse": "Gunakan 何をなさいますか、散歩をなさいます. Perhatikan なさる→なさいます pada bentuk sopan, なさらない pada negatif biasa, dan なさった pada lampau biasa.",
    "watchOut": "なさる tidak dipakai hanya karena kata kerja apa pun ingin dibuat terdengar sopan. Unit ini menargetkan pengganti する. Pelaku yang dihormati dapat lawan bicara atau pihak ketiga, dengan hubungan situasi yang sesuai.",
    "commonMistake": "なさります bukan bentuk sopan standar yang dilatih. Gunakan なさいます. 私が説明なさいます akan mengangkat tindakan sendiri pada konteks biasa; untuk pihak sendiri gunakan 説明します／説明いたします sesuai situasi.",
    "example": "週末は何をなさいますか。",
    "exampleReading": "しゅうまつ は なに を なさいます か。",
    "exampleMeaning": "Akhir pekan Anda akan melakukan apa? Pertanyaan ini menghormati lawan bicara.",
    "extraExample": "先生は毎朝散歩をなさいます。",
    "extraExampleReading": "せんせい は まいあさ さんぽ を なさいます。",
    "extraExampleMeaning": "Guru berjalan-jalan setiap pagi, dengan menyebut tindakannya secara hormat.",
    "contrast": "なさる menghormati pelaku する. いたす menyampaikan tindakan pihak sendiri secara formal kepada pendengar. なさい berkaitan dengan bentuk perintah dan tidak sama fungsi dengan pertanyaan hormat なさいますか.",
    "quiz": {
      "prompt": "「週末は何をなさいますか」は、誰の行動を尋ねていますか。",
      "reading": "「しゅうまつ は なに を なさいます か」は、だれ の こうどう を たずねて います か。",
      "context": "Saya bertanya langsung kepada lawan bicara tentang kegiatannya dengan bentuk hormat.",
      "choices": [
        "kegiatan lawan bicara yang dihormati",
        "kegiatan saya sendiri yang sudah pasti selesai",
        "perintah agar semua orang berhenti bertindak",
        "larangan melakukan kegiatan akhir pekan"
      ],
      "answer": 0,
      "explanation": "何をなさいますか menanyakan kegiatan orang yang dihormati, yaitu lawan bicara pada konteks ini. Kalimat tidak melaporkan kegiatan saya sudah selesai dan tidak berbentuk perintah berhenti atau larangan."
    }
  },
  {
    "id": "n4-g-76",
    "title": "ございます／でございます",
    "meaning": "ada（formal）/ adalah（kopula formal）",
    "pattern": "Nがございます（ある）／N・なAでございます（です）",
    "explanation": "ございます adalah bentuk formal untuk menyampaikan ある. でございます adalah kopula formal yang sepadan dengan です. Kesopanan kepada pendengar tidak otomatis sama dengan mengangkat pelaku tindakan.",
    "usage": "Memberi informasi lokasi fasilitas atau ketersediaan bahan dalam situasi pelayanan/formal. Pilih keberadaan atau identitas sesuai maksud kalimat.",
    "whenToUse": "Gunakan 資料がございます untuk menyatakan bahan tersedia, dan 入口はあちらでございます untuk menunjukkan lokasi pintu masuk. Pada なA dapat digunakan 便利でございます, sesuai tingkat formalitas situasi.",
    "watchOut": "Pada penggunaan modern dasar, ございます bukan pengganti umum いる untuk orang. Untuk keberadaan guru yang dihormati gunakan いらっしゃいます sesuai konteks. Bedakan がございます dari でございます agar tidak mencampur keberadaan dan kopula.",
    "commonMistake": "入口はあちらございます menghilangkan で dari kopula. Gunakan 入口はあちらでございます. 資料がでございます mencampur dua pola; untuk ketersediaan gunakan 資料がございます.",
    "example": "入口はあちらでございます。",
    "exampleReading": "いりぐち は あちら で ございます。",
    "exampleMeaning": "Pintu masuk berada di sebelah sana, disampaikan secara formal.",
    "extraExample": "こちらに資料がございます。",
    "extraExampleReading": "こちら に しりょう が ございます。",
    "extraExampleMeaning": "Di sini tersedia bahan/dokumen, disampaikan secara formal.",
    "contrast": "ございます menyatakan ある secara formal; でございます menyatakan です secara formal. いらっしゃる menghormati orang yang ada/pergi/datang. Formalitas kepada pendengar dan penghormatan pada pelaku perlu dibedakan.",
    "quiz": {
      "prompt": "資料は受付に〔　〕。",
      "reading": "しりょう は うけつけ に〔　〕。",
      "context": "Petugas menyampaikan secara formal bahwa dokumen tersedia di meja penerimaan. Subjeknya benda/dokumen.",
      "choices": [
        "ございます",
        "いらっしゃいます",
        "でございます",
        "なさいます"
      ],
      "answer": 0,
      "explanation": "資料は受付にございます menyatakan keberadaan dokumen secara formal. いらっしゃいます menghormati keberadaan orang; でございます tidak langsung mengikuti に dalam pola keberadaan ini; なさいます adalah tindakan する oleh pelaku yang dihormati."
    }
  },
  {
    "id": "n4-g-77",
    "title": "お～する／ご～する（謙譲）",
    "meaning": "melakukan tindakan pihak sendiri untuk orang yang dihormati",
    "pattern": "お + Vます tanpa ます + する／ご + NするのN + する",
    "explanation": "お～する／ご～する pada pola dasar ini menyebut tindakan pihak sendiri dengan merendah untuk menghormati pihak yang dituju atau terkait tindakan tersebut. Tidak semua tindakan pribadi otomatis cocok diberi pola ini.",
    "usage": "Menyampaikan akan mengirim dokumen kepada guru atau memandu tamu. Cari pihak yang dihormati melalui tindakan tersebut, bukan hanya siapa yang mendengar kalimat.",
    "whenToUse": "Gunakan 送る→お送りする dan 案内する→ご案内する. Bentuk sopannya お送りします／ご案内します. Pilihan お／ご mengikuti kata yang lazim; 電話 memakai お電話する, jadi jangan mengubah semuanya dengan satu aturan mutlak.",
    "watchOut": "お読みになる menghormati pelaku membaca, sedangkan お読みする dapat menyebut pihak sendiri membacakan untuk orang yang dihormati. Jangan menyebut tindakan tamu dengan pola merendah pihak sendiri jika maksudnya menghormati tamu sebagai pelaku.",
    "commonMistake": "ご案内しする menambahkan し yang tidak diperlukan. Gunakan ご案内する. Mengganti お客様をご案内します dengan お客様がご案内します akan mengubah hubungan pelaku yang dibicarakan.",
    "example": "先生に資料をお送りします。",
    "exampleReading": "せんせい に しりょう を おおくりします。",
    "exampleMeaning": "Saya akan mengirimkan dokumen kepada guru, dengan merendahkan penyebutan tindakan pihak saya.",
    "extraExample": "私がお客様を駅までご案内します。",
    "extraExampleReading": "わたし が おきゃくさま を えき まで ごあんないします。",
    "extraExampleMeaning": "Saya akan memandu tamu sampai stasiun dengan bentuk rendah hati.",
    "contrast": "お／ご～する menghormati pihak yang dituju/terkait tindakan melalui penyebutan tindakan pihak sendiri. お～になる menghormati pelaku. いたす menambah cara penyampaian formal kepada pendengar dan tidak selalu memerlukan pihak tujuan yang sama.",
    "quiz": {
      "prompt": "「私がお客様を駅までご案内します」で、案内する人は誰ですか。",
      "reading": "「わたし が おきゃくさま を えき まで ごあんないします」で、あんないする ひと は だれ です か。",
      "context": "Pihak saya menawarkan tindakan memandu tamu. Tentukan pelaku yang melakukan pemanduan.",
      "choices": [
        "saya yang memandu tamu",
        "tamu yang memandu saya",
        "guru yang memerintah tamu",
        "tidak ada yang akan memandu"
      ],
      "answer": 0,
      "explanation": "私が adalah pelaku 案内する; お客様を adalah orang yang dipandu. ご案内します merendahkan penyebutan tindakan pihak saya untuk tamu. Kalimat tidak membalik pelaku atau meniadakan tawaran memandu."
    }
  },
  {
    "id": "n4-g-78",
    "title": "いたす／いたします",
    "meaning": "melakukan ～ dengan menyampaikan tindakan pihak sendiri secara formal",
    "pattern": "する → いたす／Nする → Nいたす（umumnya bentuk sopan いたします）",
    "explanation": "いたす menyampaikan tindakan pihak sendiri dengan cara yang formal/rendah hati kepada pendengar. Dalam pembagian keigo yang lebih rinci, penggunaan ini termasuk 謙譲語Ⅱ（丁重語）dan perlu dibedakan dari pola yang secara khusus mengangkat pihak tujuan tindakan.",
    "usage": "Mengambil tanggung jawab menyiapkan atau memberi penjelasan dengan bahasa formal. Biasanya gunakan いたします dalam percakapan sopan yang ditargetkan unit ini.",
    "whenToUse": "Gunakan 私がいたします atau 説明いたします sebagai bentuk formal dari します. Gabungan お／ご～いたします seperti ご案内いたします juga dapat digunakan bila peran dan tindakan sesuai.",
    "watchOut": "Jangan menyamakan semua bentuk rendah hati: お／ご～する dapat menghormati pihak yang dituju, sedangkan いたす menata cara menyebut tindakan pihak sendiri kepada pendengar. Hubungan pihak sendiri/lawan bicara menentukan pemakaian, bukan hanya jabatan orang yang disebut.",
    "commonMistake": "私が説明なさいます mengangkat tindakan diri sendiri pada konteks dasar ini. Untuk saya yang menjelaskan secara formal gunakan 私が説明いたします. いたす tidak menggantikan する untuk menghormati semua pelaku tanpa membedakan kelompok dan situasi.",
    "example": "準備は私がいたします。",
    "exampleReading": "じゅんび は わたし が いたします。",
    "exampleMeaning": "Persiapannya akan saya kerjakan, disampaikan secara formal.",
    "extraExample": "これから説明いたします。",
    "extraExampleReading": "これから せつめいいたします。",
    "extraExampleMeaning": "Sekarang saya akan menjelaskannya, disampaikan secara formal.",
    "contrast": "いたす menyampaikan tindakan pihak sendiri secara formal kepada pendengar; なさる menghormati pelaku lain. お／ご～する menyoroti pihak yang dituju tindakan. お／ご～いたす dapat menggabungkan kedua fungsi kerendahan hati tersebut.",
    "quiz": {
      "prompt": "準備は私が〔　〕。",
      "reading": "じゅんび は わたし が〔　〕。",
      "context": "Saya mengambil tugas persiapan dan menyampaikan tindakan diri sendiri secara formal. Pilih pengganti します yang cocok.",
      "choices": [
        "いたします",
        "なさいます",
        "いらっしゃいます",
        "お読みになります"
      ],
      "answer": 0,
      "explanation": "私がいたします menyampaikan saya akan mengerjakannya secara formal. なさいます menghormati pelaku, いらっしゃいます berkaitan ada/pergi/datang, dan お読みになります adalah tindakan membaca oleh orang yang dihormati; ketiganya tidak sesuai maksud persiapan oleh pihak saya."
    }
  },
  {
    "id": "n4-g-79",
    "title": "～ていただけませんか",
    "meaning": "bisakah Anda berkenan melakukan ～ untuk saya?（permintaan sopan）",
    "pattern": "Vて + いただけませんか",
    "explanation": "～ていただけませんか meminta bantuan dengan menempatkan pembicara sebagai pihak yang menerima tindakan. Bentuk ini berhubungan dengan もらう→いただく dan menunjukkan penghormatan kepada pihak pemberi bantuan.",
    "usage": "Meminta guru menjelaskan atau mengajari dengan lebih sopan sesuai hubungan/situasi. Orang yang melakukan verba utama pada permintaan dasar ini adalah lawan bicara yang dimintai bantuan.",
    "whenToUse": "Gunakan 教えていただけませんか、説明していただけませんか. Bentuk て mengikuti verba tindakan; いただけませんか adalah bagian permintaan yang dipertahankan. Penerima bantuan dan pelaku harus dibedakan.",
    "watchOut": "Pertanyaan sopan tetap merupakan permintaan dan tidak membuktikan bahwa bantuan sudah disetujui atau dilakukan. Jangan menukarnya dengan bentuk hormat terhadap tindakan diri sendiri. Kesopanan juga dipengaruhi konteks dan cara berbicara.",
    "commonMistake": "説明するいただけませんか memakai bentuk kamus di tempat て. Gunakan 説明していただけませんか. 教えていただけませんか pada konteks saya meminta bantuan berarti lawan bicara yang mengajari, bukan saya mengajari lawan bicara.",
    "example": "この漢字の読み方を教えていただけませんか。",
    "exampleReading": "この かんじ の よみかた を おしえて いただけません か。",
    "exampleMeaning": "Bisakah Anda berkenan memberi tahu saya cara membaca Kanji ini?",
    "extraExample": "もう一度説明していただけませんか。",
    "extraExampleReading": "もう いちど せつめいして いただけません か。",
    "extraExampleMeaning": "Bisakah Anda berkenan menjelaskannya sekali lagi?",
    "contrast": "～ていただけませんか adalah permintaan sopan dari sisi penerima bantuan. ～てもらう melaporkan menerima tindakan; ～てくれる menyoroti pemberi bantuan sebagai subjek. ～させてください meminta kesempatan agar pembicara sendiri melakukan tindakan.",
    "quiz": {
      "prompt": "「もう一度説明していただけませんか」で、説明をお願いされている人は誰ですか。",
      "reading": "「もう いちど せつめいして いただけません か」で、せつめい を おねがいされて いる ひと は だれ です か。",
      "context": "Saya meminta lawan bicara menjelaskan lagi untuk membantu saya. Tentukan pelaku yang diharapkan memberikan penjelasan.",
      "choices": [
        "lawan bicara yang diminta menjelaskan",
        "saya yang meminta izin menjelaskan sendiri",
        "semua orang yang sudah selesai menjelaskan",
        "orang yang melarang penjelasan"
      ],
      "answer": 0,
      "explanation": "Penjelasan diharapkan dilakukan lawan bicara, sementara saya menerima bantuannya. Ini berbeda dari 説明させてください yang meminta izin saya menjelaskan, dan tidak menyatakan kegiatan sudah selesai atau dilarang."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
