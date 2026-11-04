// Stage 10A-14: original N4 restriction, quantity, boundaries and comparison.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-102",
    "title": "しか～ない（限定）",
    "meaning": "hanya; tidak ada selain",
    "pattern": "N／jumlah + しか + predikat negatif",
    "explanation": "しか disertai predikat negatif untuk membatasi pada satu benda, orang, atau jumlah. Keseluruhan kalimat bermakna hanya, walaupun predikatnya negatif. Pola ini sering menonjolkan keterbatasan.",
    "usage": "Menjelaskan uang yang sedikit, pilihan yang terbatas, atau bahasa yang dapat dipakai. Sasaran dasar ialah nomina dan jumlah; Vるしかない sebagai tidak ada pilihan selain tindakan dibahas terpisah.",
    "whenToUse": "Gunakan 百円しかない、本しか読まない、日本語しか話せない. Pada bahasa sopan bentuknya ありません／ません／話せません.",
    "watchOut": "しか memerlukan bentuk negatif dalam pola ini. Jumlah yang dinyatakan tetap ada: 百円しかない berarti punya seratus yen saja, bukan sama sekali tidak punya seratus yen.",
    "commonMistake": "水しか飲みます salah pada pola pembatas ini. Gunakan 水しか飲みません atau 水だけ飲みます. Jangan menambahkan を langsung sebelum しか sebagai 水をしか.",
    "example": "財布には二百円しかありません。",
    "exampleReading": "さいふ には にひゃくえん しか ありません。",
    "exampleMeaning": "Di dompet hanya ada dua ratus yen.",
    "extraExample": "この店ではパンしか売っていません。",
    "extraExampleReading": "この みせ では パン しか うって いません。",
    "extraExampleMeaning": "Di toko ini hanya menjual roti.",
    "contrast": "二百円だけある membatasi jumlah dengan nada lebih netral. 二百円しかない menyoroti tidak adanya jumlah lebih. 一円もない berarti satu yen pun tidak ada.",
    "quiz": {
      "prompt": "「財布には二百円しかありません」では、お金はいくらありますか。",
      "reading": "「さいふ には にひゃくえん しか ありません」では、おかね は いくら あります か。",
      "context": "Pilih jumlah yang benar, dengan membaca しか dan predikat negatif sebagai satu pola.",
      "choices": [
        "hanya dua ratus yen",
        "sama sekali nol yen",
        "paling sedikit dua ribu yen",
        "jumlahnya tidak terbatas"
      ],
      "answer": 0,
      "explanation": "二百円しかありません menyatakan hanya dua ratus yen. Negatif ありません bekerja bersama しか untuk membatasi, bukan meniadakan dua ratus yen itu."
    }
  },
  {
    "id": "n4-g-103",
    "title": "ばかり（物・種類の偏り）",
    "meaning": "hanya; itu-itu saja, untuk benda atau jenis yang dominan",
    "pattern": "N + ばかり + predikat",
    "explanation": "ばかり setelah nomina menunjukkan bahwa suatu jenis atau benda mendominasi. Pembicara sering merasa ada pengulangan atau ketidakseimbangan, tetapi maknanya tidak selalu berupa keluhan.",
    "usage": "Menceritakan pilihan makanan, isi koleksi, atau jenis kegiatan melalui nomina. Scope N4 di sini ialah pembatasan nomina; konstruksi てばかりいる yang lebih luas tetap dibedakan.",
    "whenToUse": "Gunakan 漫画ばかり読む atau 黒い服ばかり買う. Arti dan penilaian ditentukan konteks; jangan selalu menambahkan makna buruk jika pembicara hanya menyebut dominasi.",
    "watchOut": "Vたばかり adalah baru saja melakukan, berbeda dari Nばかり yang menonjolkan jenis itu-itu saja. Jumlah waktu + ばかり sebagai kira-kira bukan sasaran pelajaran ini.",
    "commonMistake": "漫画ばかり読みます tidak berarti baru saja selesai membaca komik. Untuk baru saja membaca gunakan 読んだばかりです pada konteks yang sesuai.",
    "example": "弟は漫画ばかり読んでいます。",
    "exampleReading": "おとうと は まんが ばかり よんで います。",
    "exampleMeaning": "Adik laki-laki saya membaca komik saja terus.",
    "extraExample": "妹は黒い服ばかり買います。",
    "extraExampleReading": "いもうと は くろい ふく ばかり かいます。",
    "extraExampleMeaning": "Adik perempuan saya membeli pakaian hitam saja.",
    "contrast": "漫画だけ読む membatasi pilihan lebih netral. 漫画ばかり読む dapat menyoroti kecenderungan itu-itu saja. 漫画を読んだばかりだ menyatakan baru selesai membaca komik.",
    "quiz": {
      "prompt": "「妹は黒い服ばかり買います」は、どんな様子ですか。",
      "reading": "「いもうと は くろい ふく ばかり かいます」は、どんな ようす です か。",
      "context": "Pembicara mengamati kecenderungan pilihan pakaian adiknya.",
      "choices": [
        "pakaian yang dibeli cenderung hitam terus",
        "baru saja menjual satu pakaian putih",
        "tidak pernah membeli pakaian apa pun",
        "semua pakaian wajib dibeli besok"
      ],
      "answer": 0,
      "explanation": "黒い服ばかり menonjolkan dominasi pakaian hitam pada pembelian. Ini bukan Vたばかり yang berarti baru saja."
    }
  },
  {
    "id": "n4-g-104",
    "title": "だけで（条件・手段の限定）",
    "meaning": "cukup hanya dengan; hanya karena suatu kondisi",
    "pattern": "N + だけで；V bentuk biasa + だけで + hasil",
    "explanation": "だけで menghubungkan pembatasan dengan kondisi, sebab, atau cara yang sudah cukup untuk menghasilkan hal berikutnya. Peran で dibaca dari konteks; tidak selalu alat fisik.",
    "usage": "Menerapkan N5 だけ bersama hubungan sebab/cara N4: menyebut satu tindakan atau benda sudah cukup. Sebut hasilnya agar batas makna jelas.",
    "whenToUse": "Gunakan 見るだけで分かる atau このカードだけで入れる. Bentuk 見ただけで menyebut penilaian yang diperoleh hanya dengan melihat suatu kejadian.",
    "watchOut": "だけで menyatakan bahwa hal pertama saja cukup dalam konteks itu. Kalimat tidak otomatis menetapkan aturan umum untuk semua situasi. Bedakan dari だけでなく yang menambahkan hal lain.",
    "commonMistake": "このカードだけで入れます berarti kartu ini saja cukup untuk masuk, bukan kartu ini tidak boleh dipakai. だけでなく justru berarti tidak hanya dan memerlukan tambahan konteks.",
    "example": "このカードだけで、図書館に入れます。",
    "exampleReading": "この カード だけ で、としょかん に はいれます。",
    "exampleMeaning": "Dengan kartu ini saja, kita bisa masuk perpustakaan.",
    "extraExample": "写真を見るだけで、場所が分かりました。",
    "extraExampleReading": "しゃしん を みる だけ で、ばしょ が わかりました。",
    "extraExampleMeaning": "Hanya dengan melihat foto, saya sudah tahu tempatnya.",
    "contrast": "カードだけ持つ membatasi benda yang dibawa. カードだけで入れる menyebut kartu saja cukup sebagai sarana. カードだけでなく鍵も持つ menyatakan membawa kartu dan juga kunci.",
    "quiz": {
      "prompt": "「このカードだけで、図書館に入れます」は、何を表しますか。",
      "reading": "「この カード だけ で、としょかん に はいれます」は、なに を あらわします か。",
      "context": "Baca syarat masuk sesuai kalimat, tanpa menambahkan syarat yang tidak disebut.",
      "choices": [
        "kartu ini saja cukup untuk masuk",
        "kartu ini sama sekali tidak dapat dipakai",
        "harus membeli tiga kartu tambahan",
        "semua orang dilarang ke perpustakaan"
      ],
      "answer": 0,
      "explanation": "だけで menyatakan kartu ini saja mencukupi sebagai sarana dalam konteks. Kalimat tidak meminta tambahan kartu atau melarang masuk."
    }
  },
  {
    "id": "n4-g-105",
    "title": "だけでなく（～も）",
    "meaning": "tidak hanya; tetapi juga",
    "pattern": "N／V biasa／Aい + だけでなく、Bも；Aな + なだけでなく",
    "explanation": "だけでなく menolak pembatasan pada A saja, lalu menambahkan B. Karena itu A tetap termasuk; bukan berarti A tidak ada atau tidak dilakukan. Bentuk percakapan antara lain だけじゃなくて.",
    "usage": "Menambahkan kemampuan, benda, atau sifat. も pada bagian kedua membantu menandai bahwa B juga termasuk.",
    "whenToUse": "Gunakan 読むだけでなく書く atau 安いだけでなく便利. Na-adjective memerlukan な: 静かなだけでなく. Pada nomina langsung: 本だけでなく.",
    "watchOut": "Bentuk negatif なく di sini tidak meniadakan A. Pastikan perbandingan sejajar: benda dengan benda, kemampuan dengan kemampuan, atau sifat dengan sifat yang masuk akal.",
    "commonMistake": "静かだけでなく salah pada pola dasar na-adjective ini; gunakan 静かなだけでなく. 本だけでなく新聞も読む berarti membaca keduanya, bukan hanya koran.",
    "example": "本だけでなく、新聞も読みます。",
    "exampleReading": "ほん だけ で なく、しんぶん も よみます。",
    "exampleMeaning": "Saya membaca tidak hanya buku, tetapi juga koran.",
    "extraExample": "この部屋は静かなだけでなく、明るいです。",
    "extraExampleReading": "この へや は しずか な だけ で なく、あかるい です。",
    "extraExampleMeaning": "Kamar ini tidak hanya tenang, tetapi juga terang.",
    "contrast": "本だけ読む membatasi pada buku. 本しか読まない juga membatasi dan memakai predikat negatif. 本だけでなく新聞も読む mencakup buku serta koran.",
    "quiz": {
      "prompt": "「本だけでなく、新聞も読みます」では、何を読みますか。",
      "reading": "「ほん だけ で なく、しんぶん も よみます」では、なに を よみます か。",
      "context": "Tentukan benda yang termasuk, tanpa salah membaca なく sebagai meniadakan buku.",
      "choices": [
        "buku dan juga koran",
        "koran saja tanpa buku",
        "tidak membaca apa pun",
        "hanya buku dan tidak pernah koran"
      ],
      "answer": 0,
      "explanation": "だけでなく menambahkan 新聞 pada 本. も memperjelas bahwa koran juga termasuk; buku tetap termasuk."
    }
  },
  {
    "id": "n4-g-106",
    "title": "など／とか～とか（例を挙げる）",
    "meaning": "misalnya; dan lain-lain; seperti A atau B",
    "pattern": "Nなど；NやNなど；NとかNとか；V biasa + とか",
    "explanation": "など dan とか menyebut contoh tanpa menutup daftar. など lazim dalam gaya netral atau tulisan; とか sering terasa lebih santai dan dapat merangkai benda atau kegiatan sebagai contoh.",
    "usage": "Menyebut jenis belanjaan atau pilihan kegiatan. Daftar yang diberikan tidak otomatis berarti semuanya dilakukan atau hanya ada dua pilihan itu.",
    "whenToUse": "Gunakan 野菜や果物など、パンとか卵とか、図書館へ行くとか. Untuk contoh kegiatan berulang dalam pola tindakan yang telah dipelajari, たり～たりする juga tersedia.",
    "watchOut": "とか dapat muncul setelah contoh terakhir, sedangkan と biasanya merangkai daftar yang lebih tertutup. Jangan menganggap など selalu berarti meremehkan; nuansa meremehkan memerlukan konteks tersendiri.",
    "commonMistake": "パンとか卵とか berarti contoh seperti roti dan telur, bukan daftar pasti seluruh isi belanja. Setelah verba gunakan bentuk biasa: 読むとか, bukan 読みますとか sebagai pola dasar ini.",
    "example": "野菜や果物などを買いました。",
    "exampleReading": "やさい や くだもの など を かいました。",
    "exampleMeaning": "Saya membeli sayur, buah, dan lain-lain.",
    "extraExample": "休みの日は、映画を見るとか、本を読むとかします。",
    "extraExampleReading": "やすみ の ひ は、えいが を みる とか、ほん を よむ とか します。",
    "extraExampleMeaning": "Pada hari libur saya melakukan kegiatan seperti menonton film atau membaca buku.",
    "contrast": "パンと卵 merangkai benda yang disebut. パンや卵など dan パンとか卵とか memberi beberapa contoh. 映画を見たり本を読んだりする juga memberi contoh kegiatan dengan bentuk た.",
    "quiz": {
      "prompt": "「野菜や果物などを買いました」の「など」は、何を示しますか。",
      "reading": "「やさい や くだもの など を かいました」の「など」は、なに を しめします か。",
      "context": "Baca apakah daftar belanja bersifat lengkap atau berupa contoh.",
      "choices": [
        "sayur dan buah merupakan contoh, masih mungkin ada barang lain",
        "pasti hanya ada dua barang itu tanpa pengecualian",
        "tidak ada barang yang dibeli",
        "semua barang yang disebut dilarang dijual"
      ],
      "answer": 0,
      "explanation": "など membuat daftar tidak tertutup. Barang lain mungkin ada; kalimat tidak mengatakan tidak membeli atau melarang penjualan."
    }
  },
  {
    "id": "n4-g-107",
    "title": "数量＋も（多さ・最小量の否定）",
    "meaning": "sebanyak itu; satu pun tidak dengan bentuk negatif",
    "pattern": "jumlah + も + positif；jumlah minimum + も + negatif",
    "explanation": "Jumlah + も dapat menekankan bahwa pembicara menganggap jumlahnya banyak atau di luar perkiraan. Dengan jumlah minimum dan predikat negatif, maknanya sampai jumlah kecil itu pun tidak ada atau tidak terjadi.",
    "usage": "Menyatakan terkejut menunggu lama, orang yang banyak, atau tidak memiliki uang sama sekali. Ukuran banyak bergantung harapan pembicara, bukan batas angka yang selalu sama.",
    "whenToUse": "Gunakan 三時間も待った untuk penekanan lamanya menunggu. Gunakan 一円もない atau 一度も行ったことがない untuk bahkan jumlah minimum pun tidak.",
    "watchOut": "Tiga jam dengan も tidak selalu terlalu lama secara objektif; pembicara memberi penilaian. 一円もない berarti nol yen, berbeda dari 一円しかない yang berarti hanya satu yen.",
    "commonMistake": "Mengartikan 三時間も sebagai juga tiga jam pada semua konteks menghilangkan penekanan. 一円もありません tidak berarti punya satu yen; predikat negatif meniadakan jumlah minimum.",
    "example": "病院で三時間も待ちました。",
    "exampleReading": "びょういん で さんじかん も まちました。",
    "exampleMeaning": "Saya menunggu sampai tiga jam di rumah sakit, terasa lama di luar perkiraan.",
    "extraExample": "財布には一円もありません。",
    "extraExampleReading": "さいふ には いちえん も ありません。",
    "extraExampleMeaning": "Di dompet tidak ada satu yen pun.",
    "contrast": "私も行く memakai も untuk juga. 三時間も待つ menekankan jumlah besar menurut pembicara. 一円しかない berarti hanya punya satu yen; 一円もない berarti tidak punya satu yen pun.",
    "quiz": {
      "prompt": "「財布には一円もありません」では、財布のお金はどうですか。",
      "reading": "「さいふ には いちえん も ありません」では、さいふ の おかね は どう です か。",
      "context": "Perhatikan jumlah minimum 一円, partikel も dan predikat negatif.",
      "choices": [
        "tidak ada satu yen pun",
        "masih ada tepat satu yen",
        "pasti lebih dari seribu yen",
        "jumlahnya sama dengan tiga jam"
      ],
      "answer": 0,
      "explanation": "一円もありません meniadakan bahkan satu yen. Ini berbeda dari 一円しかありません yang menyatakan masih ada satu yen saja."
    }
  },
  {
    "id": "n4-g-108",
    "title": "数量＋は（最低限の見込み）",
    "meaning": "setidaknya; jumlah itu diperkirakan sebagai batas bawah",
    "pattern": "jumlah・durasi + は + predikat",
    "explanation": "は setelah jumlah dapat menonjolkan jumlah minimum yang diyakini atau diperkirakan. Pembicara mengisyaratkan jumlahnya tidak kurang dari itu, dan mungkin lebih, menurut konteks.",
    "usage": "Memperkirakan waktu tempuh atau jumlah yang dibutuhkan. Ini memperluas fungsi kontras は yang telah dipelajari, dengan fokus pada batas jumlah.",
    "whenToUse": "Gunakan 一時間はかかる atau 十人は来ると思う. Kata perkiraan seperti と思う menunjukkan bahwa batas itu pendapat atau taksiran, bukan hasil ukur pasti.",
    "watchOut": "は mempunyai banyak fungsi. Tidak semua angka diikuti は otomatis batas bawah; baca seluruh kalimat. Pada pola taksiran ini jangan menerjemahkannya sebagai hanya tepat sejumlah itu.",
    "commonMistake": "一時間はかかると思う tidak berarti paling lama satu jam. Nuansa yang diajarkan ialah diperkirakan setidaknya satu jam, bisa lebih.",
    "example": "駅まで歩くと、一時間はかかると思います。",
    "exampleReading": "えき まで あるく と、いちじかん は かかる と おもいます。",
    "exampleMeaning": "Kalau berjalan ke stasiun, menurut saya perlu setidaknya satu jam.",
    "extraExample": "会場には、もう二十人は来ています。",
    "extraExampleReading": "かいじょう には、もう にじゅうにん は きて います。",
    "extraExampleMeaning": "Di tempat acara, sudah ada setidaknya sekitar dua puluh orang yang datang.",
    "contrast": "一時間はかかる menyajikan batas bawah. 一時間もかかった menekankan lamanya menurut harapan. 一時間しかない menyoroti waktu yang terbatas, sedangkan 一時間以内 menyatakan dalam batas satu jam.",
    "quiz": {
      "prompt": "「一時間はかかると思います」は、時間をどう見積もっていますか。",
      "reading": "「いちじかん は かかる と おもいます」は、じかん を どう みつもって います か。",
      "context": "Pembicara memperkirakan waktu berjalan, dengan jumlah + は sebagai batas bawah.",
      "choices": [
        "setidaknya sekitar satu jam, mungkin lebih",
        "pasti kurang dari satu menit",
        "paling lama tepat satu jam tanpa kemungkinan lebih",
        "tidak memerlukan waktu sama sekali"
      ],
      "answer": 0,
      "explanation": "Jumlah + は pada taksiran ini menunjukkan kira-kira batas bawah. と思います menandai perkiraan, bukan kepastian hasil ukur atau batas maksimum."
    }
  },
  {
    "id": "n4-g-109",
    "title": "以上／以下／数量＋より",
    "meaning": "sejumlah itu atau lebih; sejumlah itu atau kurang; lebih dari sejumlah itu",
    "pattern": "jumlah + 以上／以下；jumlah + より + 多い・大きいなど",
    "explanation": "以上 memasukkan angka batas dan semua jumlah di atasnya. 以下 memasukkan angka batas dan semua jumlah di bawahnya. より pada perbandingan lebih besar tidak memasukkan nilai batas itu sendiri.",
    "usage": "Membaca batas umur, jumlah peserta, atau ukuran. Pelajaran ini menerapkan perbandingan ke batas angka; kata yang bukan angka dapat mempunyai makna 以上／以下 yang berbeda.",
    "whenToUse": "十八歳以上 mencakup usia delapan belas. 十人以下 mencakup sepuluh orang. 十人より多い berarti lebih dari sepuluh orang, sehingga sepuluh tidak termasuk.",
    "watchOut": "Baca arah batas dan apakah nilai sama termasuk. 以上 bukan hanya lebih dari; 以下 bukan hanya kurang dari. Jangan menyimpulkan batas umur dari angka tanpa membaca kata sesudahnya.",
    "commonMistake": "Menyamakan 十八歳以上 dengan 十八歳より上 mengubah batas: yang pertama memasukkan usia delapan belas, yang kedua pada perbandingan usia menuntut lebih tua dari delapan belas.",
    "example": "この講座には、十八歳以上の人が申し込めます。",
    "exampleReading": "この こうざ には、じゅうはっさい いじょう の ひと が もうしこめます。",
    "exampleMeaning": "Orang berusia delapan belas tahun atau lebih dapat mendaftar kelas ini.",
    "extraExample": "一つのグループは、十人以下にしてください。",
    "extraExampleReading": "ひとつ の グループ は、じゅうにん いか に して ください。",
    "extraExampleMeaning": "Tolong buat setiap kelompok berjumlah sepuluh orang atau kurang.",
    "contrast": "十人以上 ialah sepuluh atau lebih; 十人以下 sepuluh atau kurang. 十人より多い lebih dari sepuluh dan 十人より少ない kurang dari sepuluh. だいたい十人 adalah perkiraan sekitar sepuluh.",
    "quiz": {
      "prompt": "「十八歳以上の人が申し込めます」。ちょうど十八歳の人は申し込めますか。",
      "reading": "「じゅうはっさい いじょう の ひと が もうしこめます」。ちょうど じゅうはっさい の ひと は もうしこめます か。",
      "context": "Gunakan hanya batas umur yang disebut pada pengumuman kelas fiktif ini.",
      "choices": [
        "ya, karena delapan belas termasuk batas 以上",
        "tidak, karena 以上 selalu mengecualikan angkanya",
        "hanya orang di bawah delapan belas",
        "tidak ada orang yang boleh mendaftar"
      ],
      "answer": 0,
      "explanation": "以上 memasukkan angka batas. Orang tepat delapan belas memenuhi syarat umur yang dinyatakan; kalimat tidak membatasi hanya di bawahnya."
    }
  },
  {
    "id": "n4-g-110",
    "title": "以外（例外・追加）",
    "meaning": "selain; di luar; kecuali",
    "pattern": "N + 以外は／以外に（も）／以外の + N",
    "explanation": "以外 mengacu pada hal di luar kelompok atau benda yang disebut. Dengan kalimat negatif atau pembatasan ia dapat berarti kecuali; dengan にも ia dapat menambahkan hal lain di luar yang sudah disebut.",
    "usage": "Menyatakan hari selain hari tertentu, benda selain satu jenis, atau pilihan tambahan. Predikat dan partikel setelah 以外 menentukan hubungan seluruh kalimat.",
    "whenToUse": "Gunakan 日曜日以外は、これ以外にも、肉以外の料理. Untuk menerangkan nomina lain, tambahkan の setelah 以外.",
    "watchOut": "日曜日以外は休みです berarti libur selain hari Minggu, bukan hanya hari Minggu libur. Baca kelompok yang dikecualikan serta predikatnya dengan cermat.",
    "commonMistake": "肉以外料理 kurang の bila menerangkan nomina 料理. Gunakan 肉以外の料理. Jangan menganggap 以外 selalu menyatakan larangan; 以外にも dapat menambah pilihan.",
    "example": "日曜日以外は、毎日この店で働いています。",
    "exampleReading": "にちようび いがい は、まいにち この みせ で はたらいて います。",
    "exampleMeaning": "Saya bekerja di toko ini setiap hari selain hari Minggu.",
    "extraExample": "この本以外にも、読みたい本があります。",
    "extraExampleReading": "この ほん いがい にも、よみたい ほん が あります。",
    "extraExampleMeaning": "Selain buku ini, ada buku lain yang ingin saya baca.",
    "contrast": "これだけ membatasi hanya ini. これ以外 ialah di luar ini. これ以外にも menambahkan yang lain, sedangkan これしかない menyatakan tidak ada pilihan selain ini.",
    "quiz": {
      "prompt": "「日曜日以外は、毎日この店で働いています」では、働く日の説明はどれですか。",
      "reading": "「にちようび いがい は、まいにち この みせ で はたらいて います」では、はたらく ひ の せつめい は どれ です か。",
      "context": "Baca hari yang dikecualikan pada jadwal pembicara.",
      "choices": [
        "bekerja setiap hari selain Minggu",
        "hanya bekerja pada hari Minggu",
        "tidak bekerja pada hari apa pun",
        "hanya bekerja sekali tahun depan"
      ],
      "answer": 0,
      "explanation": "日曜日以外 mengecualikan Minggu dari hari kerja yang disebut. Kalimat tidak mengatakan hanya Minggu yang menjadi hari kerja."
    }
  },
  {
    "id": "n4-g-111",
    "title": "何＋助数詞＋か（いくつか）",
    "meaning": "beberapa; sejumlah yang belum disebut pasti",
    "pattern": "何 + kata penghitung + か；何人か・何冊か・何日か",
    "explanation": "何 bersama kata penghitung dan か dapat menyatakan jumlah tidak pasti seperti beberapa orang atau beberapa buku. Ini berbeda dari pertanyaan langsung yang meminta angka pasti.",
    "usage": "Menyebut sebagian orang yang hadir atau sejumlah benda yang dibawa tanpa menyebut angka tepat. Pilih kata penghitung sesuai benda: 人 untuk orang, 冊 untuk buku, 日 untuk hari.",
    "whenToUse": "Gunakan 何人か来ました、何冊か借りました、何日か待つ. Bentuk 何人かの学生 juga dapat menerangkan kelompok beberapa siswa.",
    "watchOut": "何人ですか bertanya ada berapa orang. 何人か来ました menyatakan beberapa orang datang. Jangan mengira か pada pola ini selalu membuat seluruh kalimat menjadi pertanyaan.",
    "commonMistake": "何人か来ました tidak menanyakan siapa yang datang dan tidak berarti semua orang datang. Jumlahnya beberapa dan tidak ditentukan tepat dalam kalimat.",
    "example": "会場には、もう何人か来ています。",
    "exampleReading": "かいじょう には、もう なんにん か きて います。",
    "exampleMeaning": "Sudah ada beberapa orang yang datang ke tempat acara.",
    "extraExample": "図書館で本を何冊か借りました。",
    "extraExampleReading": "としょかん で ほん を なんさつ か かりました。",
    "extraExampleMeaning": "Saya meminjam beberapa buku di perpustakaan.",
    "contrast": "何冊ですか meminta jumlah pasti. 何冊か menyatakan beberapa buku. 三冊 menyatakan tiga buku, sedangkan 何冊も pada konteks penekanan dapat berarti banyak buku.",
    "quiz": {
      "prompt": "「図書館で本を何冊か借りました」は、冊数をどう伝えていますか。",
      "reading": "「としょかん で ほん を なんさつ か かりました」は、さっすう を どう つたえて います か。",
      "context": "Tentukan apakah jumlah buku pasti, tidak pasti, atau nol.",
      "choices": [
        "beberapa buku, angka tepatnya tidak disebut",
        "pasti tepat seratus buku",
        "tidak satu buku pun",
        "sedang menanyakan harga semua buku"
      ],
      "answer": 0,
      "explanation": "何冊か menyatakan beberapa buku tanpa menentukan angka tepat. Kalimatnya berupa laporan, bukan pertanyaan jumlah atau harga."
    }
  },
  {
    "id": "n4-g-112",
    "title": "～は～の一つだ",
    "meaning": "merupakan salah satu dari",
    "pattern": "Aは + kelompok/kategori + の一つだ",
    "explanation": "の一つ menunjukkan satu anggota dari kelompok yang mempunyai anggota lain. Pola ini tidak dengan sendirinya mengatakan anggota itu yang paling baik atau satu-satunya.",
    "usage": "Menyebut salah satu hobi, salah satu toko favorit, atau salah satu alasan. Gunakan kategori yang masuk akal dan pilih penghitung yang tepat bila membicarakan orang atau lembar benda.",
    "whenToUse": "Gunakan 趣味の一つ、好きな店の一つ、理由の一つ. Untuk satu orang di dalam kelompok, 一人 dapat lebih sesuai, misalnya 友達の一人.",
    "watchOut": "一つ di sini tidak berarti jumlah seluruh kelompok hanya satu. Jangan mengubahnya menjadi paling atau satu-satunya tanpa kata tambahan yang mendukung.",
    "commonMistake": "好きな店の一つ bukan satu-satunya toko yang disukai. Ia menyatakan ada kategori toko-toko yang disukai dan toko ini termasuk salah satunya.",
    "example": "読書は、私の趣味の一つです。",
    "exampleReading": "どくしょ は、わたし の しゅみ の ひとつ です。",
    "exampleMeaning": "Membaca merupakan salah satu hobi saya.",
    "extraExample": "ここは、私の好きな店の一つです。",
    "extraExampleReading": "ここ は、わたし の すき な みせ の ひとつ です。",
    "extraExampleMeaning": "Tempat ini merupakan salah satu toko yang saya sukai.",
    "contrast": "趣味の一つ berarti salah satu hobi. 趣味は読書だけです membatasi hobi pada membaca. 趣味の中で読書が一番好きです memilih yang paling disukai dalam kelompok.",
    "quiz": {
      "prompt": "「ここは、私の好きな店の一つです」は、何を表していますか。",
      "reading": "「ここ は、わたし の すき な みせ の ひとつ です」は、なに を あらわして います か。",
      "context": "Baca hubungan satu anggota dengan kelompok toko favorit pembicara.",
      "choices": [
        "toko ini termasuk salah satu yang disukai",
        "hanya ada satu toko di seluruh dunia",
        "toko ini pasti paling murah di dunia",
        "pembicara tidak suka toko mana pun"
      ],
      "answer": 0,
      "explanation": "の一つ menyatakan salah satu anggota kelompok. Ia tidak menyatakan satu-satunya toko, harga paling murah, atau ketidaksukaan."
    }
  },
  {
    "id": "n4-g-113",
    "title": "AとBと、どちらが（比較の質問）",
    "meaning": "di antara A dan B, mana yang lebih?",
    "pattern": "AとBと、どちら（のほう）が + sifat + ですか；AとBでは…",
    "explanation": "Pola ini menanyakan perbandingan dua pilihan. Jawabannya dapat memakai Bのほうが atau AよりBのほうが yang telah dipelajari pada N5. Latihan ini menambahkan bentuk pertanyaan yang eksplisit.",
    "usage": "Menerapkan perbandingan prasyarat untuk menanyakan pilihan transportasi, musim, atau kesukaan. Pelajaran aplikasi tidak menghitung ulang perbandingan dasar sebagai tujuan N4 baru.",
    "whenToUse": "Gunakan 電車とバスと、どちらのほうが早いですか. Untuk jawaban, pilih satu pihak dan sebut sifat: バスのほうが早いです dalam konteks rute yang dibicarakan.",
    "watchOut": "どちら pada perbandingan ini terutama membandingkan dua pilihan. Untuk tiga benda atau lebih, どれ／どの～ dan bentuk kelompok dapat lebih sesuai. Fakta mana yang lebih bergantung konteks, bukan pola gramatikal.",
    "commonMistake": "Pada jawaban AよりBのほうが, B adalah pihak yang lebih memiliki sifat, bukan A. Pertanyaan どちらが tidak mengubah aturan urutan itu.",
    "example": "電車とバスと、どちらのほうが早いですか。",
    "exampleReading": "でんしゃ と バス と、どちら の ほう が はやい です か。",
    "exampleMeaning": "Di antara kereta dan bus, mana yang lebih cepat untuk perjalanan yang dibicarakan?",
    "extraExample": "夏と冬では、どちらが好きですか。",
    "extraExampleReading": "なつ と ふゆ では、どちら が すき です か。",
    "extraExampleMeaning": "Di antara musim panas dan musim dingin, mana yang lebih kamu sukai?",
    "contrast": "AよりBのほうが menyatakan hasil perbandingan. AとBとどちらが menanyakan hasilnya. グループの中で何が一番 menanyakan yang paling dalam suatu kelompok.",
    "quiz": {
      "prompt": "「電車とバスと、どちらのほうが早いですか」への答えが「バスのほうが早いです」でした。どちらが早いですか。",
      "reading": "「でんしゃ と バス と、どちら の ほう が はやい です か」への こたえ が「バス の ほう が はやい です」でした。どちら が はやい です か。",
      "context": "Gunakan jawaban dalam percakapan ini, tanpa mengasumsikan semua rute mempunyai hasil yang sama.",
      "choices": [
        "bus pada rute yang dibicarakan",
        "kereta karena selalu mendahului より",
        "keduanya pasti tidak bergerak",
        "tidak ada perbandingan dalam kalimat"
      ],
      "answer": 0,
      "explanation": "バスのほうが早いです secara langsung menyatakan bus lebih cepat pada konteks perjalanan itu. Pola ini tidak menetapkan fakta untuk semua rute."
    }
  },
  {
    "id": "n4-g-114",
    "title": "まで（意外な範囲への追加）",
    "meaning": "bahkan; sampai pihak yang tidak disangka pun",
    "pattern": "N + まで + predikat（追加・驚き）",
    "explanation": "まで dapat menambahkan contoh yang pembicara anggap mengejutkan atau berada di luar perkiraan. Pemakaian ini bukan sekadar batas waktu atau tujuan yang dipelajari sebelumnya.",
    "usage": "Menekankan bahwa orang yang tidak disangka ikut tahu atau ikut datang, atau bahwa keadaan meluas sampai contoh tambahan yang mengejutkan. Penilaian terkejut bergantung konteks.",
    "whenToUse": "Gunakan 弟まで知っている ketika bahkan adik pun tahu, atau 雪まで降ってきた ketika bahkan salju ikut turun. Kehadiran まで tidak selalu berarti hasil buruk.",
    "watchOut": "五時まで待つ tetap dapat berarti menunggu sampai pukul lima. Bentuk yang sama bisa mempunyai fungsi berbeda; tentukan apakah kalimat menyebut batas atau contoh tambahan yang tidak terduga.",
    "commonMistake": "弟まで知っていました bukan hanya tahu sampai batas tempat adik. Dalam konteks orang lain sudah tahu dan adik pun tahu, artinya bahkan adik mengetahuinya.",
    "example": "その話は、弟まで知っていました。",
    "exampleReading": "その はなし は、おとうと まで しって いました。",
    "exampleMeaning": "Bahkan adik laki-laki saya pun sudah tahu cerita itu.",
    "extraExample": "雨だけでなく、雪まで降ってきました。",
    "extraExampleReading": "あめ だけ で なく、ゆき まで ふって きました。",
    "extraExampleMeaning": "Tidak hanya hujan, bahkan salju pun mulai turun.",
    "contrast": "弟も知っていた menambahkan adik secara lebih netral. 弟まで知っていた memberi nuansa bahkan adik yang tidak disangka. 五時まで menandai batas waktu, bukan tambahan orang.",
    "quiz": {
      "prompt": "みんなが知っている話を聞いて、「弟まで知っていた」と驚きました。「まで」は、何を強調していますか。",
      "reading": "みんな が しって いる はなし を きいて、「おとうと まで しって いた」と おどろきました。「まで」は、なに を きょうちょう して います か。",
      "context": "Pembicara terkejut karena adiknya juga sudah tahu.",
      "choices": [
        "bahkan adik yang tidak disangka pun tahu",
        "cerita berhenti tepat pukul lima",
        "adik sama sekali belum tahu",
        "pembicara sedang menyebut tujuan perjalanan"
      ],
      "answer": 0,
      "explanation": "Dalam konteks terkejut ini, まで menambahkan adik sebagai contoh yang tidak terduga. Ini bukan batas waktu atau tempat."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
