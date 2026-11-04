// Stage 10A-17: original N4 remaining constructions and connected-text reading.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-139",
    "title": "～ないNはない（例外の否定）",
    "meaning": "tidak ada N yang tidak; semua anggota kelompok memenuhi sifat itu",
    "pattern": "klausa negatif + nomina + はない／はいない",
    "explanation": "Pola ini meniadakan adanya anggota kelompok yang memenuhi klausa negatif. 田中さんを知らない人はいない berarti tidak ada orang yang tidak mengenal Tanaka dalam kelompok yang dibicarakan.",
    "usage": "Menyatakan tidak ada pengecualian pada kelompok tertentu. Sebut kelompok dan sifatnya secara jelas agar dua negasi tidak dibaca sebagai tidak ada orang sama sekali.",
    "whenToUse": "Gunakan 読めない漢字はない atau 知らない人はいない. Untuk orang atau makhluk hidup, keberadaan memakai いない; untuk benda dan hal memakai ない sesuai nomina.",
    "watchOut": "Tidak ada orang yang tidak mengenal A berarti semua orang dalam kelompok itu mengenal A. Ini berbeda dari tidak ada orang yang mengenal A. Klaim semua memerlukan cakupan kelompok yang jelas.",
    "commonMistake": "このクラスに田中さんを知らない人はいません tidak berarti seluruh kelas tidak mengenal Tanaka. Negasi pertama menerangkan 人, lalu negasi kedua meniadakan orang dengan sifat itu.",
    "example": "このクラスに、田中さんを知らない人はいません。",
    "exampleReading": "この クラス に、たなかさん を しらない ひと は いません。",
    "exampleMeaning": "Di kelas ini, tidak ada orang yang tidak mengenal Tanaka; semuanya mengenalnya.",
    "extraExample": "この本には、私が読めない漢字はありません。",
    "extraExampleReading": "この ほん には、わたし が よめない かんじ は ありません。",
    "extraExampleMeaning": "Di buku ini tidak ada kanji yang tidak bisa saya baca.",
    "contrast": "知らない人はいない meniadakan pengecualian berupa orang yang tidak tahu. 知っている人はいない berarti tidak ada yang tahu. Pola tingkat lain ないことはない dapat menyatakan bukan tidak bisa dan tidak selalu berarti semua.",
    "quiz": {
      "prompt": "「このクラスに、田中さんを知らない人はいません」。このクラスの人は、田中さんを知っていますか。",
      "reading": "「この クラス に、たなかさん を しらない ひと は いません」。この クラス の ひと は、たなかさん を しって います か。",
      "context": "Pisahkan klausa negatif yang menerangkan 人 dan negasi keberadaan setelahnya.",
      "choices": [
        "ya, semua orang dalam kelas yang dibicarakan mengenalnya",
        "tidak ada seorang pun yang mengenalnya",
        "pasti tidak ada murid di seluruh sekolah",
        "hanya Tanaka yang tidak pernah datang"
      ],
      "answer": 0,
      "explanation": "知らない人 ialah orang yang tidak mengenal. いません meniadakan orang seperti itu dalam kelas ini, sehingga semua orang dalam cakupan itu mengenal Tanaka."
    }
  },
  {
    "id": "n4-g-140",
    "title": "ように～てほしい（比べ方・目的を添える）",
    "meaning": "ingin orang lain melakukan dengan cara seperti; agar suatu hasil tercapai",
    "pattern": "Nのように + Vてほしい；klausa tujuanように + Vてほしい",
    "explanation": "ように dapat menambahkan perbandingan atau tujuan pada tindakan yang diinginkan pembicara melalui てほしい. Tentukan dahulu apakah ように berarti seperti contoh atau agar suatu hasil tercapai.",
    "usage": "Menerapkan perbandingan dan tujuan N4 bersama てほしい. Orang yang diharapkan melakukan tindakan dapat disebut dengan に; keinginan tetap milik pembicara.",
    "whenToUse": "Gunakan 先生のように説明してほしい untuk cara seperti guru. Gunakan 忘れないようにメモしてほしい untuk keinginan agar orang mencatat supaya tidak lupa. 読めるようになってほしい mengharapkan perubahan kemampuan.",
    "watchOut": "Menyatakan harapan tidak berarti orang itu sudah setuju atau tindakannya sudah selesai. ように言う melaporkan instruksi; ように～てほしい menyatakan keinginan pembicara.",
    "commonMistake": "先生ように kurang の ketika 先生 menjadi nomina perbandingan. Gunakan 先生のように. Jangan mengartikan 忘れないようにメモしてほしい sebagai ingin orang itu lupa.",
    "example": "山田さんに、先生のようにゆっくり説明してほしいです。",
    "exampleReading": "やまださん に、せんせい の ように ゆっくり せつめい して ほしい です。",
    "exampleMeaning": "Saya ingin Yamada menjelaskan perlahan seperti guru.",
    "extraExample": "忘れないように、予定をメモしてほしいです。",
    "extraExampleReading": "わすれない ように、よてい を メモ して ほしい です。",
    "extraExampleMeaning": "Saya ingin Anda mencatat jadwalnya supaya tidak lupa.",
    "contrast": "先生のように membandingkan cara dengan guru. 忘れないように menyebut tujuan tidak lupa. メモしてほしい menyatakan keinginan atas tindakan orang lain, sedangkan メモしたい menyatakan ingin melakukannya sendiri.",
    "quiz": {
      "prompt": "「忘れないように、予定をメモしてほしいです」は、何を望んでいますか。",
      "reading": "「わすれない ように、よてい を メモ して ほしい です」は、なに を のぞんで います か。",
      "context": "Tentukan tindakan yang diharapkan dan tujuannya.",
      "choices": [
        "orang lain mencatat jadwal supaya tidak lupa",
        "orang lain melupakan semua jadwal",
        "jadwal sudah otomatis selesai ditulis",
        "pembicara melarang pencatatan"
      ],
      "answer": 0,
      "explanation": "メモしてほしい menyatakan keinginan agar orang lain mencatat. 忘れないように menjelaskan tujuan tidak lupa; belum menyatakan persetujuan atau penyelesaian."
    }
  },
  {
    "id": "n4-g-141",
    "title": "もし（仮定を強調）",
    "meaning": "jika seandainya, sebagai penanda pengandaian",
    "pattern": "もし + kondisi + たら／なら／ば + hasil・rencana",
    "explanation": "もし menandai atau menonjolkan bahwa pembicara sedang mengandaikan suatu kemungkinan. Pola kondisi seperti たら、なら、ば tetap membentuk hubungan jika; もし tidak menggantikannya begitu saja.",
    "usage": "Menerapkan pola kondisi N4 untuk membicarakan kemungkinan hujan atau waktu luang. Pengandaian ini belum menyatakan bahwa kondisi sudah benar-benar terjadi.",
    "whenToUse": "Gunakan もし雨が降ったら、もし時間があるなら、もし分からなければ. もし sering dapat dihilangkan tanpa mengubah pola kondisi dasar.",
    "watchOut": "もし tidak selalu berarti kemungkinan mustahil dan tidak otomatis berarti masa lalu. Pilih bentuk kondisi berdasarkan hubungan makna; contoh dasar ini tidak mengajarkan bahwa semua kondisi otomatis dapat diganti satu sama lain.",
    "commonMistake": "もし雨が降る、行きません kurang penghubung kondisi pada pola dasar ini. Gunakan もし雨が降ったら、行きません. Jangan menyimpulkan hujan sudah terjadi hanya karena bentuk たら.",
    "example": "もし雨が降ったら、家で勉強します。",
    "exampleReading": "もし あめ が ふったら、いえ で べんきょう します。",
    "exampleMeaning": "Jika seandainya hujan, saya akan belajar di rumah.",
    "extraExample": "もし分からなければ、先生に聞いてください。",
    "extraExampleReading": "もし わからなければ、せんせい に きいて ください。",
    "extraExampleMeaning": "Jika tidak mengerti, silakan tanyakan kepada guru.",
    "contrast": "雨が降ったら sudah membentuk kondisi. もし雨が降ったら menonjolkan pengandaiannya. 雨が降っている menyatakan keadaan sedang hujan, bukan pengandaian.",
    "quiz": {
      "prompt": "「もし雨が降ったら、家で勉強します」から、今の天気は必ず分かりますか。",
      "reading": "「もし あめ が ふったら、いえ で べんきょう します」から、いま の てんき は かならず わかります か。",
      "context": "Pembicara sedang menyebut kemungkinan dan rencana, bukan laporan cuaca saat ini.",
      "choices": [
        "tidak; kalimatnya mengandaikan hujan",
        "ya; pasti sudah hujan sejak kemarin",
        "ya; mustahil hujan selamanya",
        "kalimatnya memerintahkan cuaca berubah"
      ],
      "answer": 0,
      "explanation": "もし…たら menyatakan kondisi yang dibayangkan. Kalimat tidak memastikan keadaan cuaca sekarang atau mengendalikan cuaca."
    }
  },
  {
    "id": "n4-g-142",
    "title": "って感じ（くだけた印象）",
    "meaning": "kesannya seperti; rasanya kira-kira begitu",
    "pattern": "kata／frasa／klausa + って感じ（だ・です）",
    "explanation": "って感じ menyampaikan gambaran umum, kesan, atau perasaan dalam percakapan santai. って mengutip isi gambaran itu dan 感じ menyebut kesannya; bentuk ini sering merangkum pikiran secara tidak terlalu tegas.",
    "usage": "Menjelaskan suasana ruangan atau perasaan ingin bersantai. Pilih bahasa lebih jelas untuk laporan yang memerlukan rincian, karena kesan ini belum tentu menjelaskan fakta secara tepat.",
    "whenToUse": "Gunakan 図書館って感じ atau ゆっくりしたいって感じ. Frasa yang dikutip dapat berbeda jenis katanya; jangan memaksakan satu aturan adjective ke semua contoh.",
    "watchOut": "Ini gaya santai. Menambahkan です tetap tidak membuat ungkapan kabur ini cocok untuk setiap laporan formal. Kesan ruangan seperti perpustakaan tidak membuktikan ruangan itu resmi merupakan perpustakaan.",
    "commonMistake": "Menganggap 図書館って感じ berarti ada orang yang sudah mengonfirmasi nama resmi perpustakaan adalah keliru. Pembicara menyampaikan kesan umum.",
    "example": "この部屋は静かで、図書館って感じですね。",
    "exampleReading": "この へや は しずか で、としょかん って かんじ です ね。",
    "exampleMeaning": "Kamar ini tenang, kesannya seperti perpustakaan, ya.",
    "extraExample": "今日は、家でゆっくりしたいって感じです。",
    "extraExampleReading": "きょう は、いえ で ゆっくり したい って かんじ です。",
    "extraExampleMeaning": "Hari ini rasanya ingin bersantai saja di rumah.",
    "contrast": "って感じ menyampaikan kesan santai. という名前です menyebut nama, dan と言われている melaporkan pandangan yang beredar. に見える menilai penampilan dengan konstruksi yang berbeda.",
    "quiz": {
      "prompt": "「この部屋は図書館って感じです」は、何を述べていますか。",
      "reading": "「この へや は としょかん って かんじ です」は、なに を のべて います か。",
      "context": "Pembicara sedang menjelaskan suasana ruangan dalam percakapan santai.",
      "choices": [
        "kesannya menyerupai perpustakaan",
        "nama resmi ruangannya pasti perpustakaan",
        "semua buku pasti sudah dipinjam",
        "perintah agar ruangan ditutup"
      ],
      "answer": 0,
      "explanation": "って感じ memberi gambaran kesan. Ia tidak memverifikasi nama resmi atau menyatakan peminjaman maupun penutupan."
    }
  },
  {
    "id": "n4-g-143",
    "title": "とみえる（根拠からの推測）",
    "meaning": "dari petunjuknya dapat diduga; tampaknya",
    "pattern": "klausa biasa + とみえる；N・Aな + だとみえる（だ dapat dihilangkan pada pemakaian tertentu）",
    "explanation": "とみえる menyatakan kesimpulan atau dugaan pembicara berdasarkan petunjuk. Ungkapan ini cenderung lebih formal atau bercorak tulisan daripada ようだ dan みたいだ dalam percakapan biasa.",
    "usage": "Mengenali penalaran dalam bacaan: jalan basah menjadi petunjuk kemungkinan hujan sebelumnya, atau seseorang berkali-kali melihat jam menjadi dasar dugaan sedang terburu-buru.",
    "whenToUse": "Gunakan 雨が降ったとみえる、急いでいるとみえる. Pada contoh dasar nomina/na-adjective dapat dipakai 休みだとみえる; penghilangan だ juga dijumpai pada konstruksi ini.",
    "watchOut": "Dugaan dapat terasa cukup kuat tetapi tetap bukan bukti pasti. Petunjuk yang sama mungkin mempunyai penyebab lain. Jangan menukar とみえる dengan に見える hanya karena sama-sama memakai 見える.",
    "commonMistake": "道がぬれているから雨が降ったとみえる tidak memastikan hujan sebagai satu-satunya penyebab jalan basah. Bedakan fakta yang dilihat dan kesimpulan yang dibuat.",
    "example": "道がぬれています。雨が降ったとみえます。",
    "exampleReading": "みち が ぬれて います。あめ が ふった と みえます。",
    "exampleMeaning": "Jalannya basah. Dari petunjuk itu, tampaknya sebelumnya hujan.",
    "extraExample": "あの人は何度も時計を見ています。急いでいるとみえます。",
    "extraExampleReading": "あの ひと は なんど も とけい を みて います。いそいで いる と みえます。",
    "extraExampleMeaning": "Orang itu berkali-kali melihat jam. Tampaknya ia sedang terburu-buru.",
    "contrast": "に見える menilai tampilan, misalnya 学生に見える. とみえる menyatakan kesimpulan dari petunjuk. そうだ sebagai kabar meneruskan informasi dari sumber lain, sedangkan とみえる menyoroti penalaran pembicara.",
    "quiz": {
      "prompt": "「道がぬれています。雨が降ったとみえます」では、どれが推測ですか。",
      "reading": "「みち が ぬれて います。あめ が ふった と みえます」では、どれ が すいそく です か。",
      "context": "Pisahkan pengamatan jalan basah dari kesimpulan mengenai penyebabnya.",
      "choices": [
        "bahwa sebelumnya hujan",
        "bahwa jalan tampak basah pada pengamatan",
        "bahwa semua jalan di dunia kering",
        "bahwa pembicara mendengar pengumuman resmi"
      ],
      "answer": 0,
      "explanation": "Jalan basah disebut sebagai pengamatan. 雨が降ったとみえます adalah dugaan mengenai hujan berdasarkan petunjuk itu; kalimat tidak menyebut pengumuman resmi."
    }
  },
  {
    "id": "n4-g-144",
    "title": "が見られる（観察・見る機会）",
    "meaning": "dapat diamati; dapat dilihat atau ditonton pada suatu kesempatan",
    "pattern": "N + が／も + 見られる",
    "explanation": "見られる dapat menyatakan kemampuan atau kesempatan melihat, serta hal yang dapat diamati pada suatu tempat atau objek. Dalam bacaan, pola ini sering menyoroti ciri atau perubahan yang tampak setelah memperhatikan.",
    "usage": "Menerapkan bentuk potensial/pasif yang telah dipelajari untuk membaca uraian pengamatan. N sebelum が ialah hal yang dapat diamati, bukan otomatis orang yang melihat.",
    "whenToUse": "Gunakan 細かい線が見られる atau ここで映画が見られる. Bentuk 見られる dapat ditafsirkan sebagai potensial atau pasif menurut konteks; peran kalimat membantu membedakannya.",
    "watchOut": "見える menyoroti sesuatu terlihat secara alami, sedangkan 見られる dapat menyoroti kesempatan, kemampuan atau pengamatan. Tidak setiap 見られる berarti seseorang sedang diawasi.",
    "commonMistake": "この絵には線が見られます tidak berarti garis sedang melihat lukisan. 線 ialah yang dapat diamati. Bentuk percakapan 見れる lazim sebagai potensial tetapi tidak menggantikan semua pasif 見られる.",
    "example": "この絵には、細かい線が見られます。",
    "exampleReading": "この え には、こまかい せん が みられます。",
    "exampleMeaning": "Pada lukisan ini dapat diamati garis-garis halus.",
    "extraExample": "この図書館では、古い映画も見られます。",
    "extraExampleReading": "この としょかん では、ふるい えいが も みられます。",
    "extraExampleMeaning": "Di perpustakaan ini, kita juga dapat menonton film lama.",
    "contrast": "山が見える menyatakan gunung tampak. 映画が見られる menyatakan ada kemampuan atau kesempatan menonton film. 人に見られる dapat berarti dilihat orang lain; konteks menentukan pasifnya.",
    "quiz": {
      "prompt": "「この絵には、細かい線が見られます」では、見られるものは何ですか。",
      "reading": "「この え には、こまかい せん が みられます」では、みられる もの は なん です か。",
      "context": "Tentukan hal yang menjadi objek pengamatan dalam uraian lukisan.",
      "choices": [
        "garis-garis halus pada lukisan",
        "orang yang sedang mengawasi seluruh kota",
        "pembicara yang pasti sedang tidur",
        "film yang belum pernah disebut"
      ],
      "answer": 0,
      "explanation": "細かい線が menjadi hal yang dapat diamati. Kalimat tidak mengatakan garis berperan sebagai pengamat atau ada orang sedang diawasi."
    }
  },
  {
    "id": "n4-g-145",
    "title": "と考えられている／とされている",
    "meaning": "secara umum dianggap; dipandang sebagai",
    "pattern": "klausa biasa + と考えられている／とされている；N + とされている",
    "explanation": "Pola ini menyampaikan pandangan atau penilaian yang dianggap berlaku secara umum. と考えられている menyoroti suatu hal dipikirkan/dinilai demikian; とされている dapat menyebut sesuatu dipandang atau digolongkan demikian.",
    "usage": "Mengenali pelaporan pandangan pada tulisan informatif. Ini penerapan bentuk kutipan/penilaian dan pasif, bukan pengumuman bahwa pembicara telah membuktikan semua orang setuju.",
    "whenToUse": "Gunakan 便利だと考えられている atau 古い建物とされている. Verba/Aい memakai klausa biasa. Pada nomina/na-adjective, だ dapat muncul sesuai struktur; bentuk Nとされている juga lazim.",
    "watchOut": "Pandangan yang dilaporkan dapat memerlukan sumber dan pemeriksaan. と考えられる sebagai kesimpulan atau kemungkinan penalaran mempunyai perluasan pemakaian lain; jangan menganggap pelajaran ini mencakup semua konstruksi tingkat lanjut itu.",
    "commonMistake": "便利ですと考えられている bukan pola dasar klausa biasa yang ditargetkan. Gunakan 便利だと考えられている. Jangan membaca されている sebagai perintah untuk melakukan tindakan.",
    "example": "この方法は便利だと考えられています。",
    "exampleReading": "この ほうほう は べんり だ と かんがえられて います。",
    "exampleMeaning": "Cara ini secara umum dianggap praktis.",
    "extraExample": "この建物は、町で一番古い建物とされています。",
    "extraExampleReading": "この たてもの は、まち で いちばん ふるい たてもの と されて います。",
    "extraExampleMeaning": "Bangunan ini dianggap sebagai bangunan tertua di kota itu, menurut pandangan yang dilaporkan.",
    "contrast": "便利だと思う menonjolkan pendapat pembicara. 便利だと考えられている melaporkan penilaian umum. と言われている menyoroti hal yang dikatakan orang; ketiganya bukan jaminan kesepakatan atau bukti mutlak.",
    "quiz": {
      "prompt": "「この方法は便利だと考えられています」は、何を伝えていますか。",
      "reading": "「この ほうほう は べんり だ と かんがえられて います」は、なに を つたえて います か。",
      "context": "Baca sebagai pelaporan suatu penilaian umum, bukan perintah atau bukti bahwa setiap orang setuju.",
      "choices": [
        "ada pandangan umum bahwa caranya praktis",
        "semua orang tanpa kecuali pasti setuju dan sudah membuktikannya",
        "perintah agar cara itu dihapus",
        "cara itu sedang berpikir sebagai manusia"
      ],
      "answer": 0,
      "explanation": "と考えられています melaporkan penilaian dianggap praktis. Ia tidak dengan sendirinya membuktikan persetujuan semua orang atau memerintahkan tindakan."
    }
  },
  {
    "id": "n4-g-146",
    "title": "それに／それで／それでも／だが",
    "meaning": "selain itu; karena itu; meskipun begitu; namun",
    "pattern": "kalimat A。+ penghubung + kalimat B",
    "explanation": "Penghubung mengarahkan hubungan antarkalimat. それに menambahkan informasi; それで menghubungkan hasil dengan keadaan sebelumnya; それでも menyatakan hasil yang tetap terjadi meskipun ada hambatan; だが mengontraskan informasi.",
    "usage": "Menerapkan hubungan antarklausa N5/N4 dalam bacaan beberapa kalimat. Gunakan makna hubungan, bukan sekadar memilih kata yang semua diterjemahkan dan atau tetapi.",
    "whenToUse": "Pakai それに untuk tambahan, それで untuk akibat, それでも untuk meskipun begitu. だが sering muncul pada tulisan bergaya biasa; ですが memberi bentuk lebih sopan pada pembukaan kontras sesuai konteks.",
    "watchOut": "それで tidak sama dengan それでも. Tambahan も mengubah hubungan menjadi meskipun begitu. だが dapat terasa tegas; pilih gaya yang konsisten dengan konteks dan lawan bicara.",
    "commonMistake": "Menghapus も dari それでも dapat membalik hubungan hasil di luar dugaan menjadi akibat yang wajar. Bedakan pula それに sebagai tambahan dari それから sebagai urutan setelah itu.",
    "example": "この店は安い。それに、駅にも近い。だが、席が少ない。",
    "exampleReading": "この みせ は やすい。それに、えき にも ちかい。だが、せき が すくない。",
    "exampleMeaning": "Toko ini murah. Selain itu, dekat dengan stasiun. Namun, tempat duduknya sedikit.",
    "extraExample": "電車が止まりました。それで、バスに乗りました。それでも、授業には遅れました。",
    "extraExampleReading": "でんしゃ が とまりました。それで、バス に のりました。それでも、じゅぎょう には おくれました。",
    "extraExampleMeaning": "Kereta berhenti. Karena itu, saya naik bus. Meskipun begitu, saya tetap terlambat ke kelas.",
    "contrast": "それに menambah; それで mengakibatkan; それでも mempertahankan hasil meski ada hambatan; だが memberi kontras. N5 そして／それから／でも／しかし tetap menjadi prasyarat, bukan dihitung lagi sebagai pola baru.",
    "quiz": {
      "prompt": "「電車が止まりました。それで、バスに乗りました」の「それで」は、どんな関係ですか。",
      "reading": "「でんしゃ が とまりました。それで、バス に のりました」の「それで」は、どんな かんけい です か。",
      "context": "Baca alasan berganti kendaraan dan tindakan yang diambil sebagai akibatnya.",
      "choices": [
        "karena kereta berhenti, maka naik bus",
        "tambahan sifat tanpa hubungan dengan kejadian",
        "meskipun semua kendaraan pasti tidak berhenti",
        "perbandingan harga dua minuman"
      ],
      "answer": 0,
      "explanation": "それで menghubungkan berhentinya kereta dengan keputusan naik bus sebagai akibat. Ini berbeda dari それに tambahan dan それでも meskipun begitu."
    }
  },
  {
    "id": "n4-g-147",
    "title": "なかなか～ない",
    "meaning": "tidak juga terjadi; sulit atau tidak mudah melakukan",
    "pattern": "なかなか + predikat negatif",
    "explanation": "なかなか dengan bentuk negatif menyoroti hasil yang belum tercapai atau tidak mudah tercapai walaupun pembicara mengharapkannya atau sudah berusaha. Nuansanya berbeda dari penyangkalan netral saja.",
    "usage": "Mengeluhkan bus yang tidak kunjung datang atau bacaan kanji yang sulit diingat. Fokusnya dapat berupa waktu menunggu atau kesulitan mencapai hasil, menurut predikat.",
    "whenToUse": "Gunakan なかなか来ない、なかなか終わらない、なかなか覚えられない. Bentuk potensial negatif sesuai untuk kesulitan kemampuan atau keberhasilan.",
    "watchOut": "なかなか来ない tidak berarti bus tidak akan pernah datang. なかなか juga punya pemakaian positif seperti なかなかいい, artinya cukup bagus; jangan membuat aturan bahwa semua なかなか harus negatif.",
    "commonMistake": "なかなか来ません bukan datang berkali-kali. Dalam pola negatif ini, yang ditekankan ialah tidak kunjung datang meski dinantikan. Berbeda dari 全然来ない yang menekankan sama sekali tidak datang.",
    "example": "バスがなかなか来ません。",
    "exampleReading": "バス が なかなか きません。",
    "exampleMeaning": "Busnya tidak kunjung datang, padahal sudah dinantikan.",
    "extraExample": "この漢字の読み方が、なかなか覚えられません。",
    "extraExampleReading": "この かんじ の よみかた が、なかなか おぼえられません。",
    "extraExampleMeaning": "Saya sulit mengingat bacaan kanji ini meskipun berusaha.",
    "contrast": "来ない menyatakan tidak datang. なかなか来ない menyoroti penantian yang belum membuahkan kedatangan. 全然分からない menekankan sama sekali tidak mengerti, sedangkan なかなか分からない menyoroti sulitnya mencapai pemahaman.",
    "quiz": {
      "prompt": "バス停で待ちながら「バスがなかなか来ません」と言いました。どんな気持ちが表れていますか。",
      "reading": "バスてい で まちながら「バス が なかなか きません」と いいました。どんな きもち が あらわれて います か。",
      "context": "Pembicara sedang menantikan bus. Perhatikan nuansa hasil yang belum tercapai.",
      "choices": [
        "bus tidak kunjung datang meski dinantikan",
        "bus pasti datang terus setiap detik",
        "pembicara sudah selesai menaiki semua bus",
        "kepastian bahwa bus tidak akan pernah ada di mana pun"
      ],
      "answer": 0,
      "explanation": "なかなか…ない menyoroti belum tercapainya hal yang diharapkan, yaitu kedatangan bus. Ini bukan kepastian bahwa bus tidak akan pernah datang."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
