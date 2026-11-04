// Stage 10A-16: original N4 occurrence, function, intervals, selection and prerequisite depth.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-126",
    "title": "ことがある（時々の出来事）",
    "meaning": "kadang terjadi; ada kalanya",
    "pattern": "V bentuk kamus／Vない + ことがある",
    "explanation": "Vることがある menyatakan suatu tindakan atau kejadian kadang terjadi. Vないことがある berarti kadang tindakan itu tidak dilakukan atau tidak terjadi. Ini berbeda dari pengalaman Vたことがある.",
    "usage": "Menggambarkan kebiasaan yang tidak selalu tetap, seperti kadang belajar di kafe atau kadang kereta terlambat. Kata 時々 dapat membantu memperjelas frekuensinya.",
    "whenToUse": "Gunakan 勉強することがある、遅れることがある、食べないことがある. Untuk pernah melakukan sebagai pengalaman, gunakan bentuk た pada pelajaran prasyarat.",
    "watchOut": "Bentuk kamus dan bentuk た mengubah fungsi: 行くことがある ialah kadang pergi, 行ったことがある ialah pernah pergi. Kalimat pengalaman tidak otomatis menjelaskan frekuensi sekarang.",
    "commonMistake": "毎週行ったことがある tidak menjadi bentuk dasar untuk saya kadang pergi pada rutinitas sekarang. Gunakan 時々行くことがある sesuai maksud.",
    "example": "休みの日に、カフェで勉強することがあります。",
    "exampleReading": "やすみ の ひ に、カフェ で べんきょう する こと が あります。",
    "exampleMeaning": "Pada hari libur, ada kalanya saya belajar di kafe.",
    "extraExample": "忙しい朝は、朝ご飯を食べないことがあります。",
    "extraExampleReading": "いそがしい あさ は、あさごはん を たべない こと が あります。",
    "extraExampleMeaning": "Pada pagi yang sibuk, kadang saya tidak sarapan.",
    "contrast": "カフェで勉強することがある menyatakan kadang belajar di kafe. 勉強したことがある menyatakan pernah melakukannya. 勉強することにした menyatakan sudah memutuskan akan belajar.",
    "quiz": {
      "prompt": "「忙しい朝は、朝ご飯を食べないことがあります」は、どんな意味ですか。",
      "reading": "「いそがしい あさ は、あさごはん を たべない こと が あります」は、どんな いみ です か。",
      "context": "Perhatikan bentuk negatif sebelum ことがある pada kebiasaan yang kadang terjadi.",
      "choices": [
        "kadang tidak sarapan pada pagi yang sibuk",
        "tidak pernah sarapan sejak lahir",
        "pasti selalu sarapan tiga kali setiap pagi",
        "perintah agar semua orang tidak sarapan"
      ],
      "answer": 0,
      "explanation": "食べないことがある berarti ada kalanya tidak makan. Kalimat tidak mengatakan selalu, tidak pernah sepanjang hidup, atau memerintah orang lain."
    }
  },
  {
    "id": "n4-g-127",
    "title": "のに（用途・必要な時間など）",
    "meaning": "untuk melakukan, ketika menilai kegunaan, kebutuhan atau waktu",
    "pattern": "V bentuk kamus + のに + 使う・便利だ・必要だ・時間がかかるなど",
    "explanation": "のに dapat menghubungkan kegiatan dengan alat yang dipakai, kegunaan, kebutuhan, atau waktu yang diperlukan untuk kegiatan itu. Pada fungsi ini, の menominalkan kegiatan dan に menghubungkannya dengan penilaian berikutnya.",
    "usage": "Menjelaskan gunting berguna untuk memotong kertas atau waktu yang diperlukan membuat benda. Ini bukan pola pertentangan padahal.",
    "whenToUse": "Gunakan 紙を切るのに使う、勉強するのに便利、作るのに三日かかる. Pada scope dasar ini, gunakan bentuk kamus sebelum のに.",
    "watchOut": "Jangan mengganti semua tujuan tindakan dengan のに. Pelajaran ini menekankan kegunaan/kebutuhan/waktu, sedangkan ように menyatakan hasil yang dituju. Makna のに dibaca dari struktur dan konteks.",
    "commonMistake": "紙を切りますのに使う salah untuk nominalisasi dasar; gunakan 紙を切るのに使う. 買ったのに使わない memakai のに pertentangan, bukan kegunaan.",
    "example": "このはさみは、紙を切るのに便利です。",
    "exampleReading": "この はさみ は、かみ を きる のに べんり です。",
    "exampleMeaning": "Gunting ini praktis untuk memotong kertas.",
    "extraExample": "この机を作るのに、三日かかりました。",
    "extraExampleReading": "この つくえ を つくる のに、みっか かかりました。",
    "extraExampleMeaning": "Diperlukan tiga hari untuk membuat meja ini.",
    "contrast": "切るのに便利 ialah penilaian kegunaan. 買ったのに使わない berarti sudah membeli tetapi tidak memakai. 忘れないようにメモする menyebut tindakan untuk mencapai tujuan tidak lupa.",
    "quiz": {
      "prompt": "「この机を作るのに、三日かかりました」の「のに」は、どんな関係を表しますか。",
      "reading": "「この つくえ を つくる のに、みっか かかりました」の「のに」は、どんな かんけい を あらわします か。",
      "context": "Baca hubungan kegiatan membuat meja dan waktu yang diperlukan.",
      "choices": [
        "tiga hari diperlukan untuk kegiatan membuat meja",
        "padahal meja itu tidak pernah dibuat",
        "tiga hari ialah nama pembuat meja",
        "perintah agar meja dibuat tanpa bahan"
      ],
      "answer": 0,
      "explanation": "作るのに menghubungkan kegiatan dengan waktu 三日かかりました. Ini fungsi waktu yang diperlukan, bukan pertentangan walaupun."
    }
  },
  {
    "id": "n4-g-128",
    "title": "おきに（間隔）",
    "meaning": "setiap selang; dengan jeda tertentu",
    "pattern": "jumlah + satuan waktu／jarak + おきに",
    "explanation": "おきに menyatakan jarak atau selang antara kejadian. Pada menit atau jam, 十五分おきに berarti tiap selang lima belas menit. 一日おきに lazim berarti satu hari diberi jeda, sehingga kegiatan dilakukan selang sehari.",
    "usage": "Membaca pola kedatangan bus atau jadwal kegiatan berselang hari. Pilihan satuan memengaruhi cara selang dipahami; jangan memakai satu aturan penggantian angka untuk semuanya.",
    "whenToUse": "Gunakan 十五分おきに来る untuk bus tiap lima belas menit. Untuk 一日おき, contoh sederhana kegiatan hari Senin lalu Rabu, dengan Selasa sebagai hari jeda.",
    "watchOut": "一日おき bukan sama dengan 毎日 pada pemakaian dasar ini. ごとに dan おきに sering serupa pada menit/jam tetapi tidak selalu identik pada hari. Untuk jadwal penting, sebut tanggal atau jam secara eksplisit.",
    "commonMistake": "Menerjemahkan 一日おき sebagai setiap hari menghilangkan hari jeda. Jangan juga mengubah 十五分おき menjadi tiap tiga puluh menit hanya karena ada kata jeda.",
    "example": "このバスは、十五分おきに来ます。",
    "exampleReading": "この バス は、じゅうごふん おき に きます。",
    "exampleMeaning": "Bus ini datang setiap selang lima belas menit.",
    "extraExample": "一日おきに図書館へ行きます。月曜日の次は水曜日です。",
    "extraExampleReading": "いちにち おき に としょかん へ いきます。げつようび の つぎ は すいようび です。",
    "extraExampleMeaning": "Saya pergi ke perpustakaan selang sehari. Setelah hari Senin, kunjungan berikutnya hari Rabu.",
    "contrast": "十五分おき dan 十五分ごと sama-sama dapat menyebut interval lima belas menit. 一日おき lazim selang sehari; 一日ごと ialah tiap satu hari. 一週間に二回 menyebut jumlah kejadian per minggu, tidak harus jarak hari yang sama.",
    "quiz": {
      "prompt": "「一日おきに図書館へ行きます。月曜日に行きました」。この例で、次は何曜日ですか。",
      "reading": "「いちにち おき に としょかん へ いきます。げつようび に いきました」。この れい で、つぎ は なんようび です か。",
      "context": "Gunakan contoh pola selang sehari dengan satu hari jeda, sesuai materi ini.",
      "choices": [
        "Rabu, setelah Selasa sebagai hari jeda",
        "Selasa, karena sama dengan setiap hari",
        "Minggu tahun berikutnya",
        "tidak akan pergi lagi selamanya"
      ],
      "answer": 0,
      "explanation": "Pada contoh 一日おき, satu hari dilewati di antara kunjungan: Senin, jeda Selasa, lalu Rabu. Ini berbeda dari 毎日."
    }
  },
  {
    "id": "n4-g-129",
    "title": "に気がつく／に気づく",
    "meaning": "menyadari; baru memperhatikan",
    "pattern": "N + に気がつく；klausa + こと／の + に気がつく",
    "explanation": "に気がつく menyatakan seseorang mulai menyadari fakta atau memperhatikan sesuatu yang sebelumnya belum disadarinya. 気づく adalah ungkapan searti yang sangat lazim.",
    "usage": "Menceritakan baru melihat kesalahan atau sadar telah lupa membawa barang. Bedakan saat menyadari sesuatu dari tindakan berjaga-jaga sebelum kejadian.",
    "whenToUse": "Gunakan 間違いに気がつく atau 忘れたことに気づく. に menandai hal yang disadari, sedangkan orang yang menyadarinya menjadi subjek sesuai konteks.",
    "watchOut": "気がついた tidak berarti otomatis masalahnya sudah diperbaiki. Jika baru sadar kehilangan barang, langkah memperbaiki atau mencari perlu disebut terpisah.",
    "commonMistake": "間違いを気がつく tidak memakai penanda dasar yang ditargetkan. Gunakan 間違いに気がつく. 気をつける memakai を tetapi maknanya berhati-hati.",
    "example": "作文の小さな間違いに気がつきました。",
    "exampleReading": "さくぶん の ちいさな まちがい に き が つきました。",
    "exampleMeaning": "Saya menyadari kesalahan kecil dalam karangan.",
    "extraExample": "駅で、かばんを忘れたことに気づきました。",
    "extraExampleReading": "えき で、かばん を わすれた こと に きづきました。",
    "extraExampleMeaning": "Di stasiun, saya baru sadar bahwa saya lupa membawa tas.",
    "contrast": "間違いに気がつく ialah menyadari kesalahan. 間違いを直す ialah memperbaikinya. 気をつける ialah berhati-hati; pola dan partikelnya berbeda.",
    "quiz": {
      "prompt": "「作文の間違いに気がつきました」で、確実に述べていることは何ですか。",
      "reading": "「さくぶん の まちがい に き が つきました」で、かくじつ に のべて いる こと は なん です か。",
      "context": "Bedakan menyadari kesalahan dengan tindakan perbaikan yang belum disebut.",
      "choices": [
        "pembicara menyadari ada kesalahan",
        "semua kesalahan pasti sudah diperbaiki",
        "tidak ada kesalahan apa pun",
        "guru memerintahkan menulis ulang seluruh buku"
      ],
      "answer": 0,
      "explanation": "気がつきました menyatakan kesadaran. Perbaikan belum dinyatakan, sehingga tidak boleh disimpulkan sudah selesai."
    }
  },
  {
    "id": "n4-g-130",
    "title": "期間に回数（頻度）",
    "meaning": "sejumlah kali per periode",
    "pattern": "rentang waktu + に + jumlah/frekuensi + V",
    "explanation": "に dapat menghubungkan satu rentang waktu dengan banyaknya kejadian di dalam rentang itu. 一週間に二回 berarti dua kali dalam satu minggu; jarak antara kedua kejadian belum tentu sama.",
    "usage": "Menyebut kebiasaan belajar, olahraga, atau frekuensi acara. Gunakan kata penghitung kejadian atau benda yang sesuai, misalnya 回 untuk kali atau 本 untuk layanan kereta yang dihitung.",
    "whenToUse": "Gunakan 一週間に二回、一日に一時間、一か月に一度. Bedakan rentang 一週間 dengan titik waktu seperti 月曜日に.",
    "watchOut": "Dua kali seminggu tidak otomatis berarti tiap tiga setengah hari tepat. Pola ini menyatakan jumlah per periode, berbeda dari jadwal interval yang sama.",
    "commonMistake": "一週間二回 dapat dipahami pada percakapan tertentu, tetapi pola dasar yang diajarkan ialah 一週間に二回. Jangan menafsirkan に sebagai tujuan perjalanan jika isinya rentang dan frekuensi.",
    "example": "一週間に二回、日本語の教室へ行きます。",
    "exampleReading": "いっしゅうかん に にかい、にほんご の きょうしつ へ いきます。",
    "exampleMeaning": "Saya pergi ke kelas bahasa Jepang dua kali seminggu.",
    "extraExample": "一日に一時間、漢字を練習します。",
    "extraExampleReading": "いちにち に いちじかん、かんじ を れんしゅう します。",
    "extraExampleMeaning": "Saya berlatih kanji satu jam per hari.",
    "contrast": "一週間に二回 menyatakan frekuensi per periode. 三日ごとに menyatakan setiap interval tiga hari. 月曜日に menyebut titik waktu hari Senin, dan 学校に menyebut tujuan/lokasi menurut predikatnya.",
    "quiz": {
      "prompt": "「一週間に二回、日本語の教室へ行きます」は、何を表しますか。",
      "reading": "「いっしゅうかん に にかい、にほんご の きょうしつ へ いきます」は、なに を あらわします か。",
      "context": "Tentukan jumlah kunjungan per periode, tanpa menambahkan jarak hari yang tidak disebut.",
      "choices": [
        "dua kali dalam satu minggu",
        "pasti setiap dua minggu hanya sekali",
        "setiap hari tepat dua jam",
        "tidak pernah pergi ke kelas"
      ],
      "answer": 0,
      "explanation": "一週間 ialah periodenya dan 二回 jumlah kejadian di dalamnya. Kalimat belum menetapkan hari atau jarak yang sama antarpertemuan."
    }
  },
  {
    "id": "n4-g-131",
    "title": "の次に（順位）",
    "meaning": "berikutnya setelah; peringkat setelah",
    "pattern": "standar/peringkat pertama + の次に + sifat・penilaian",
    "explanation": "の次に dapat menempatkan sesuatu pada urutan sesudah suatu standar. Dalam konteks peringkat, 日本語の次に英語が好き berarti bahasa Inggris disukai setelah bahasa Jepang dalam urutan itu.",
    "usage": "Menceritakan urutan kesukaan atau peringkat. Ini berbeda dari 次 sebagai kejadian berikut secara waktu, walaupun bentuk dasarnya sama.",
    "whenToUse": "Gunakan Aの次にBが好き atau Aの次に高いB. Pastikan standar yang mendahului dan benda yang diberi peringkat berikutnya jelas.",
    "watchOut": "の次に tidak selalu berarti tertinggi kedua di seluruh dunia; cakupan kelompok dan standar harus dijelaskan. Dalam urutan kesukaan sederhana, A dinilai mendahului B.",
    "commonMistake": "Aの次にBが好き pada konteks peringkat tidak berarti B lebih disukai daripada A. B ditempatkan setelah A dalam urutan yang disebut.",
    "example": "果物では、りんごの次にみかんが好きです。",
    "exampleReading": "くだもの では、りんご の つぎ に みかん が すき です。",
    "exampleMeaning": "Dalam urutan kesukaan buah saya, jeruk berada setelah apel.",
    "extraExample": "このクラスでは、田中さんの次に山田さんが背が高いです。",
    "extraExampleReading": "この クラス では、たなかさん の つぎ に やまださん が せ が たかい です。",
    "extraExampleMeaning": "Di kelas ini, tinggi badan Yamada menempati urutan setelah Tanaka.",
    "contrast": "AよりBのほうが好き menyatakan B lebih disukai daripada A. Aの次にBが好き menempatkan B setelah A dalam urutan. 次の日 ialah hari berikutnya, bukan peringkat kesukaan.",
    "quiz": {
      "prompt": "「果物では、りんごの次にみかんが好きです」。この順番では、どちらが先ですか。",
      "reading": "「くだもの では、りんご の つぎ に みかん が すき です」。この じゅんばん では、どちら が さき です か。",
      "context": "Baca urutan kesukaan yang dinyatakan pembicara.",
      "choices": [
        "apel mendahului jeruk",
        "jeruk selalu lebih disukai dari apel",
        "tidak ada buah yang disukai",
        "semua buah mempunyai urutan angka yang sama"
      ],
      "answer": 0,
      "explanation": "りんごの次にみかん menempatkan jeruk setelah apel dalam urutan yang disebut. Kalimat tidak meniadakan kesukaan pada buah."
    }
  },
  {
    "id": "n4-g-132",
    "title": "Nでも（軽い提案）",
    "meaning": "misalnya; sesuatu seperti, sebagai usulan ringan",
    "pattern": "N + でも + ajakan・saran",
    "explanation": "でも setelah nomina dapat menawarkan satu contoh pilihan secara ringan. お茶でも飲みませんか mengusulkan minum teh atau semacamnya, tanpa menutup pilihan minuman lain.",
    "usage": "Mengajak istirahat sambil minum atau memberi contoh kegiatan santai. Pilihan yang disebut merupakan contoh yang relevan pada konteks, bukan perintah melakukan semua hal.",
    "whenToUse": "Gunakan お茶でも飲みましょう atau 映画でも見ませんか. Untuk sarana atau tempat, partikel terkait dapat tetap diperlukan, misalnya 公園にでも行く.",
    "watchOut": "Ini bukan でも sebagai penghubung tetapi, dan bukan Nでも dalam pola konsesif meskipun. Nada usulan ringan dapat kurang cocok untuk keputusan mendesak atau instruksi yang harus tepat.",
    "commonMistake": "お茶でも飲みませんか tidak berarti bahkan dilarang minum teh. Dalam konteks ajakan, でも menandai contoh pilihan. Jangan menghilangkan partikel tujuan yang diperlukan secara otomatis.",
    "example": "少し休んで、お茶でも飲みませんか。",
    "exampleReading": "すこし やすんで、おちゃ でも のみません か。",
    "exampleMeaning": "Bagaimana kalau istirahat sebentar sambil minum teh atau semacamnya?",
    "extraExample": "時間があるから、映画でも見ましょう。",
    "extraExampleReading": "じかん が ある から、えいが でも みましょう。",
    "extraExampleMeaning": "Karena ada waktu, ayo menonton film atau kegiatan semacam itu.",
    "contrast": "お茶でも memberi contoh usulan. お茶だけ membatasi hanya teh. 雨でも出かける memakai でも sebagai meskipun hujan, sedangkan kalimat terpisah でも… dapat berarti tetapi.",
    "quiz": {
      "prompt": "「少し休んで、お茶でも飲みませんか」は、どんな提案ですか。",
      "reading": "「すこし やすんで、おちゃ でも のみません か」は、どんな ていあん です か。",
      "context": "Pembicara mengajak teman beristirahat dengan menyebut satu contoh minuman.",
      "choices": [
        "mengusulkan minum teh atau semacamnya",
        "melarang semua minuman",
        "memastikan hanya teh yang boleh dipilih",
        "melaporkan hujan pasti sudah berhenti"
      ],
      "answer": 0,
      "explanation": "Nでも dalam ajakan ini mengusulkan contoh pilihan. Ia tidak membatasi secara ketat seperti だけ dan tidak menjadi larangan."
    }
  },
  {
    "id": "n4-g-133",
    "title": "疑問詞でも／AでもBでも（自由な選択）",
    "meaning": "siapa pun; apa pun; A atau B sama-sama boleh",
    "pattern": "kata tanya + でも；AでもBでも + hasil/izin yang berlaku",
    "explanation": "誰でも、何でも、いつでも、どこでも menyatakan pilihan tidak dibatasi pada satu orang, benda, waktu, atau tempat dalam konteks. AでもBでも dapat menyebut dua pilihan yang sama-sama memenuhi kondisi atau boleh dipilih.",
    "usage": "Menjelaskan kegiatan terbuka untuk siapa saja atau meminta orang memilih minuman. Batas yang disebut dalam konteks tetap berlaku; ungkapan bebas memilih tidak otomatis berarti semua tindakan di dunia diizinkan.",
    "whenToUse": "Gunakan 誰でも参加できる、いつでも聞いてください、お茶でもコーヒーでもいい. Pilih kata tanya menurut hal yang dibebaskan.",
    "watchOut": "誰も dengan negatif berarti tidak seorang pun, berbeda dari 誰でも siapa pun. AでもBでも dapat mempunyai hubungan konsesif menurut predikatnya; di sini latihan dasarnya ialah pilihan yang sama-sama boleh.",
    "commonMistake": "誰でも参加できます tidak berarti tidak ada orang yang boleh ikut. Jangan menukar 誰でも dengan 誰も参加できません karena maknanya berlawanan.",
    "example": "このイベントには、誰でも参加できます。",
    "exampleReading": "この イベント には、だれ でも さんか できます。",
    "exampleMeaning": "Siapa pun dapat mengikuti acara ini, sesuai konteks pengumuman.",
    "extraExample": "お茶でもコーヒーでも、好きなものを選んでください。",
    "extraExampleReading": "おちゃ でも コーヒー でも、すき な もの を えらんで ください。",
    "extraExampleMeaning": "Teh atau kopi sama-sama boleh; silakan pilih yang disukai.",
    "contrast": "誰か berarti seseorang, 誰も来ない berarti tidak seorang pun datang, dan 誰でも dapat berarti siapa pun. お茶でも飲む pada usulan ringan hanya memberi contoh; お茶でもコーヒーでもいい membolehkan kedua pilihan.",
    "quiz": {
      "prompt": "「お茶でもコーヒーでも、好きなものを選んでください」では、どれを選べますか。",
      "reading": "「おちゃ でも コーヒー でも、すき な もの を えらんで ください」では、どれ を えらべます か。",
      "context": "Dua pilihan minuman ditawarkan dengan kebebasan memilih.",
      "choices": [
        "teh atau kopi sesuai kesukaan",
        "hanya kopi karena teh pasti dilarang",
        "tidak satu minuman pun",
        "wajib meminum keduanya sekaligus"
      ],
      "answer": 0,
      "explanation": "AでもBでも pada konteks ini membolehkan salah satu dari dua pilihan. Kalimat tidak mewajibkan meminum keduanya atau melarang teh."
    }
  },
  {
    "id": "n4-g-134",
    "title": "こういう／そういう／ああいう／どういう",
    "meaning": "jenis yang seperti ini/itu; yang bagaimana",
    "pattern": "こういう・そういう・ああいう・どういう + N",
    "explanation": "Ungkapan ini menunjukkan jenis, sifat, atau isi sesuatu. こういう menunjuk jenis seperti yang dekat pada pembicara atau sedang dicontohkannya. そういう sering merujuk jenis/isi yang disebut lawan bicara atau sudah dibahas.",
    "usage": "Mencari benda dengan jenis tertentu atau menjelaskan maksud suatu ucapan. ああいう merujuk jenis seperti hal yang lebih jauh atau sama-sama diketahui; どういう menanyakan jenis atau makna.",
    "whenToUse": "Gunakan こういうかばん、そういう意味、ああいう店、どういうことですか. Ungkapan ini langsung diikuti nomina, tanpa menambah の di antara いう dan nomina.",
    "watchOut": "そのかばん menyoroti tas yang ditunjuk, sedangkan そういうかばん dapat menyoroti tas berjenis seperti itu. Acuan ko/so/a bergantung konteks percakapan, bukan hanya jarak fisik.",
    "commonMistake": "こういうのかばん salah pada pola dasar menerangkan nomina; gunakan こういうかばん. そういう berbeda dari おいしそう yang menilai penampilan.",
    "example": "こういうかばんを探しています。",
    "exampleReading": "こう いう かばん を さがして います。",
    "exampleMeaning": "Saya sedang mencari tas yang seperti jenis ini.",
    "extraExample": "そういう意味ではありません。",
    "extraExampleReading": "そう いう いみ では ありません。",
    "extraExampleMeaning": "Bukan maksud yang seperti itu.",
    "contrast": "その本 menunjuk buku tertentu. そういう本 menunjuk buku berjenis seperti yang dibahas. 「そら」という店 menyebut nama toko, sedangkan そういう店 membicarakan jenis tokonya.",
    "quiz": {
      "prompt": "店で見本を指して「こういうかばんを探しています」と言いました。何を伝えていますか。",
      "reading": "みせ で みほん を さして「こう いう かばん を さがして います」と いいました。なに を つたえて います か。",
      "context": "Pembicara menunjukkan contoh sebagai gambaran jenis tas yang diinginkan.",
      "choices": [
        "mencari tas yang berjenis seperti contoh ini",
        "menyebut nama semua toko Sora",
        "memastikan contoh tas sudah dibeli kemarin",
        "melarang toko menjual tas"
      ],
      "answer": 0,
      "explanation": "こういうかばん menerangkan jenis tas seperti contoh. Kalimat tidak menyatakan pembelian sudah terjadi atau nama suatu toko."
    }
  },
  {
    "id": "n4-g-135",
    "title": "のは～だ（焦点を示す）",
    "meaning": "yang ～ adalah; alasan ～ ialah",
    "pattern": "V・Aい biasa + のは、informasi fokus + だ／です；Aな + なのは…",
    "explanation": "のは dapat mengubah klausa menjadi topik yang kemudian diidentifikasi. Informasi penting diletakkan setelah は, misalnya orang yang mengambil foto atau alasan suatu kejadian. Ini penerapan nominalisasi N5 dalam kalimat berfokus.",
    "usage": "Menjawab siapa, kapan, apa, atau mengapa sambil menempatkan jawaban sebagai fokus. Untuk menjelaskan alasan, klausa からです dapat menjadi bagian akhir.",
    "whenToUse": "Gunakan 写真を撮ったのは父です atau 遅れたのは電車が止まったからです. Na-adjective memerlukan な: 大切なのは時間です.",
    "watchOut": "Tentukan peran dalam klausa sebelum の. 写真を撮ったのは父です mengidentifikasi ayah sebagai pengambil foto, bukan foto sebagai ayah. は tidak selalu sekadar berarti adalah pada setiap kata.",
    "commonMistake": "写真を撮りましたのは bukan bentuk biasa yang ditargetkan dalam pola dasar. Gunakan 撮ったのは. 静かなのは memakai な; 高いのは tidak menambah な.",
    "example": "この写真を撮ったのは、父です。",
    "exampleReading": "この しゃしん を とった の は、ちち です。",
    "exampleMeaning": "Yang mengambil foto ini adalah ayah saya.",
    "extraExample": "遅れたのは、電車が止まったからです。",
    "extraExampleReading": "おくれた の は、でんしゃ が とまった から です。",
    "extraExampleMeaning": "Alasan saya terlambat adalah karena kereta berhenti.",
    "contrast": "写真を撮るのは楽しい menilai kegiatan sebagai topik pada prasyarat N5. 写真を撮ったのは父だ mengidentifikasi pelakunya. 父が写真を撮った melaporkan kejadian dengan urutan informasi yang lebih netral.",
    "quiz": {
      "prompt": "「この写真を撮ったのは、父です」では、写真を撮った人は誰ですか。",
      "reading": "「この しゃしん を とった の は、ちち です」では、しゃしん を とった ひと は だれ です か。",
      "context": "Perhatikan informasi yang diidentifikasi sebagai fokus sesudah のは.",
      "choices": [
        "ayah pembicara",
        "foto itu sendiri",
        "orang yang belum disebut pasti ibu",
        "semua orang tanpa kecuali"
      ],
      "answer": 0,
      "explanation": "父です menjadi jawaban siapa yang mengambil foto. のは menghubungkan klausa pengambilan foto dengan identifikasi ayah."
    }
  },
  {
    "id": "n4-g-136",
    "title": "ないと／なければいけない（義務の言い方）",
    "meaning": "harus, sebagai varian ungkapan kewajiban",
    "pattern": "Vない + と（いけない）；Vない→Vなければ + いけない",
    "explanation": "ないといけない dan なければいけない menyatakan kewajiban yang searti dasar dengan pola harus pada N5. Dalam ucapan santai, ないと dapat berhenti tanpa いけない bila kewajibannya dipahami dari konteks.",
    "usage": "Menerapkan kewajiban prasyarat ke variasi bentuk yang muncul pada bacaan/percakapan N4. Ini latihan bentuk dan konteks, bukan menghitung ulang makna dasar harus sebagai tujuan baru.",
    "whenToUse": "Gunakan 申し込まないといけません、帰らなければいけません. Bentuk sopan memakai いけません. Ucapan singkat もう行かないと berarti sudah harus pergi jika konteksnya mendukung.",
    "watchOut": "ないと juga dapat menjadi kondisi negatif yang diikuti hasil: 急がないと、間に合わない. Jika kalimat berhenti pada ないと, baca konteks sebelum menyimpulkan kewajiban.",
    "commonMistake": "行くないと salah; gunakan 行かないと. 行かないといけない berarti harus pergi, sedangkan 行ってはいけない berarti tidak boleh pergi; jangan membaliknya.",
    "example": "明日までに申し込まないといけません。",
    "exampleReading": "あした まで に もうしこまない と いけません。",
    "exampleMeaning": "Saya harus mendaftar paling lambat besok.",
    "extraExample": "今日は早く帰らなければいけません。",
    "extraExampleReading": "きょう は はやく かえらなければ いけません。",
    "extraExampleMeaning": "Hari ini saya harus pulang lebih awal.",
    "contrast": "行かないといけない dan 行かなければならない sama-sama menyatakan harus pergi. 行ってはいけない melarang pergi. 行かなくてもいい menyatakan tidak perlu pergi.",
    "quiz": {
      "prompt": "「今日は早く帰らなければいけません」は、何を表しますか。",
      "reading": "「きょう は はやく かえらなければ いけません」は、なに を あらわします か。",
      "context": "Baca kewajiban, bukan larangan atau ketiadaan kebutuhan.",
      "choices": [
        "harus pulang lebih awal hari ini",
        "dilarang pulang hari ini",
        "tidak perlu pulang sama sekali",
        "sudah pasti pulang kemarin"
      ],
      "answer": 0,
      "explanation": "なければいけません adalah varian kewajiban. 今日は dan 早く menentukan hari ini serta lebih awal; tidak menyatakan larangan."
    }
  },
  {
    "id": "n4-g-137",
    "title": "受身（迷惑・影響を受ける）",
    "meaning": "terkena atau terdampak suatu tindakan/kejadian",
    "pattern": "pihak terdampakは + pelaku/penyebabに + （objekを）+ V受身",
    "explanation": "Pasif dapat menggambarkan dampak suatu kejadian pada pembicara atau pihak tertentu. Objek tindakan dapat tetap memakai を. Verba intransitif seperti 降る juga dapat muncul pada pasif dampak seperti 雨に降られる.",
    "usage": "Menceritakan makanan dimakan orang lain sehingga merepotkan pembicara, atau kehujanan. Pusat kalimat ialah pihak yang terkena dampak, bukan hanya perubahan pada objek.",
    "whenToUse": "Gunakan 弟にパンを食べられる atau 雨に降られる. Konteks dan kata hasil seperti 困る membantu menunjukkan dampaknya. Bentuk pasif mengikuti pelajaran pembentukan 受身 sebelumnya.",
    "watchOut": "Tidak semua pasif menyatakan gangguan: 先生にほめられる dapat positif. 雨に降られる bukan hujan menyuruh pembicara turun. Bedakan pula 食べられる sebagai pasif dari bentuk potensial bisa makan.",
    "commonMistake": "Menghapus を pada setiap pasif akan merusak contoh dampak 私は弟にパンを食べられた. パンを tetap objek tindakan makan; 私は menjadi pihak terdampak.",
    "example": "私は弟にパンを食べられて、困りました。",
    "exampleReading": "わたし は おとうと に パン を たべられて、こまりました。",
    "exampleMeaning": "Saya kerepotan karena roti itu dimakan adik laki-laki.",
    "extraExample": "駅の前で雨に降られて、服がぬれました。",
    "extraExampleReading": "えき の まえ で あめ に ふられて、ふく が ぬれました。",
    "extraExampleMeaning": "Saya kehujanan di depan stasiun, sehingga pakaian saya basah.",
    "contrast": "弟がパンを食べた hanya melaporkan adik makan roti. 私は弟にパンを食べられた menyoroti dampaknya pada saya. 弟にパンを食べさせた adalah kausatif membuat/membiarkan adik makan, bukan pasif.",
    "quiz": {
      "prompt": "「私は弟にパンを食べられて、困りました」では、パンを食べた人と困った人は誰ですか。",
      "reading": "「わたし は おとうと に パン を たべられて、こまりました」では、パン を たべた ひと と こまった ひと は だれ です か。",
      "context": "Pisahkan pelaku tindakan dari pihak terdampak pada pasif yang masih mempunyai objek を.",
      "choices": [
        "adik yang makan; saya yang kerepotan",
        "saya yang makan; roti yang memberi perintah",
        "guru yang makan; semua orang pasti senang",
        "tidak seorang pun makan roti"
      ],
      "answer": 0,
      "explanation": "弟に menandai pelaku makan, パンを objeknya, dan 私は pihak yang terkena dampak serta 困りました. Ini tidak sama dengan kausatif."
    }
  },
  {
    "id": "n4-g-138",
    "title": "Vるとき／Vたとき（時間の関係）",
    "meaning": "ketika akan/ketika sudah, menurut tahap kegiatan yang menjadi acuan",
    "pattern": "V biasa nonlampau／lampau + とき、klausa utama",
    "explanation": "Bentuk sebelum とき membantu menunjukkan tahap tindakan pada waktu kejadian utama. Vる sering memandang tindakan acuan belum selesai, sedangkan Vた memandangnya sudah tercapai. Waktu seluruh cerita tetap ditentukan konteks dan predikat utama.",
    "usage": "Menerapkan とき N5 untuk membedakan saat akan keluar rumah dan saat sudah tiba di rumah. Bentuk kamus di klausa waktu tetap dapat dipakai dalam cerita yang seluruhnya lampau.",
    "whenToUse": "Gunakan 家を出るとき、電気を消した untuk menempatkan mematikan lampu saat akan keluar. Gunakan 家に帰ったとき… untuk menjadikan keadaan sudah tiba sebagai acuan pada contoh dasar.",
    "watchOut": "Jangan menerapkan rumus bahwa Vる selalu masa depan kalender dan Vた selalu seluruhnya masa lalu. Hubungannya relatif terhadap kejadian utama dan jenis verba; konteks tetap menentukan rincian waktunya.",
    "commonMistake": "家を出るとき、電気を消しました tidak salah hanya karena 出る nonlampau dan 消しました lampau. 出るとき memberi tahap relatif saat akan keluar dalam cerita lampau.",
    "example": "家を出るとき、電気を消しました。",
    "exampleReading": "いえ を でる とき、でんき を けしました。",
    "exampleMeaning": "Saat akan keluar rumah, saya mematikan lampu.",
    "extraExample": "家に帰ったとき、友達から電話がありました。",
    "extraExampleReading": "いえ に かえった とき、ともだち から でんわ が ありました。",
    "extraExampleMeaning": "Ketika sudah tiba kembali di rumah, ada telepon dari teman.",
    "contrast": "出るとき memandang tahap saat akan keluar pada contoh ini; 出たとき memandang keluar telah tercapai. 出る前に secara eksplisit sebelum keluar, dan 出てから secara eksplisit setelah keluar.",
    "quiz": {
      "prompt": "「家を出るとき、電気を消しました」の「出る」は、どう考えればいいですか。",
      "reading": "「いえ を でる とき、でんき を けしました」の「でる」は、どう かんがえれば いい です か。",
      "context": "Seluruh cerita menggunakan predikat lampau 消しました. Perhatikan waktu relatif dalam klausa とき.",
      "choices": [
        "memberi tahap saat akan keluar, meskipun ceritanya lampau",
        "membuktikan semua kejadian pasti besok",
        "membuat kalimat lampau otomatis salah",
        "selalu berarti tidak pernah keluar seumur hidup"
      ],
      "answer": 0,
      "explanation": "Bentuk 出る memandang keluar belum selesai pada waktu mematikan lampu. Predikat 消しました dapat menceritakan kejadian lampau; kedua bentuk tidak harus mempunyai label waktu kalender yang sama."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
