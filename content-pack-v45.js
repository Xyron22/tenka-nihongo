// Stage 10A-13: original N4 requests, gratitude, questions and wishes.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
  {
    "id": "n4-g-91",
    "title": "て／ないで（親しい相手への依頼）",
    "meaning": "tolong lakukan; tolong jangan, dalam percakapan akrab",
    "pattern": "Vて；Vない + で（di akhir permintaan santai）",
    "explanation": "Bentuk て atau ないで dapat berdiri di akhir kalimat sebagai permintaan kepada orang yang akrab. ください yang membuat permintaan lebih sopan tidak diucapkan, sehingga hubungan pembicara dan nada suara menjadi penting.",
    "usage": "Mengenali permintaan singkat seperti 待って atau 忘れないで dalam percakapan keluarga atau teman. Bentuk yang sama sebelum klausa lain belum tentu permintaan.",
    "whenToUse": "Gunakan ちょっと待って untuk meminta menunggu dan 写真を撮らないで untuk meminta tidak memotret. Kepada orang yang belum akrab, pilih てください／ないでください atau bentuk yang sesuai.",
    "watchOut": "Menghilangkan ください tidak membuat ungkapan lebih sopan. Dalam layanan atau percakapan dengan senior, permintaan singkat dapat terasa terlalu langsung.",
    "commonMistake": "食べなくて sebagai permintaan jangan makan tidak sesuai pola ini; gunakan 食べないで. Bedakan 行かないで！ sebagai permintaan jangan pergi dari 行かないで待った sebagai menunggu tanpa pergi.",
    "example": "ちょっと待って。今、行くよ。",
    "exampleReading": "ちょっと まって。いま、いく よ。",
    "exampleMeaning": "Tunggu sebentar. Aku segera ke sana.",
    "extraExample": "この紙を捨てないで。まだ使うから。",
    "extraExampleReading": "この かみ を すてないで。まだ つかう から。",
    "extraExampleMeaning": "Jangan buang kertas ini. Soalnya masih akan dipakai.",
    "contrast": "待って adalah permintaan akrab; 待ってください lebih sopan; 待て adalah perintah kuat. 捨てないで meminta jangan membuang, sedangkan 捨てなくてよかった menyatakan lega karena tidak membuang.",
    "quiz": {
      "prompt": "友達が「この紙を捨てないで」と言いました。どうしますか。",
      "reading": "ともだち が「この かみ を すてないで」と いいました。どう します か。",
      "context": "Teman meminta sesuatu dengan bentuk negatif santai. Pilih tindakan yang sesuai.",
      "choices": [
        "menyimpan kertas dan tidak membuangnya",
        "segera membuang semua kertas",
        "menyuruh teman membeli kertas baru",
        "menganggap kertas sudah dibuang kemarin"
      ],
      "answer": 0,
      "explanation": "捨てないで di akhir ucapan adalah permintaan jangan membuang. Menyimpan kertas sesuai permintaan; bentuk ini bukan laporan tindakan lampau."
    }
  },
  {
    "id": "n4-g-92",
    "title": "てくれてありがとう",
    "meaning": "terima kasih sudah melakukan sesuatu untuk saya",
    "pattern": "Vて + くれて + ありがとう（ございます）",
    "explanation": "てくれてありがとう berterima kasih atas tindakan orang lain yang dipandang membantu pembicara atau pihaknya. くれて menunjukkan arah manfaat; orang yang diberi terima kasih adalah pelaku tindakan tersebut.",
    "usage": "Berterima kasih kepada teman karena mengajar, menunggu, atau membantu. Dalam situasi formal ada bentuk seperti てくださってありがとうございます; pilih ungkapan menurut hubungan.",
    "whenToUse": "Gunakan 教えてくれてありがとう atau 待ってくれてありがとう ketika orang lain melakukan tindakan itu untuk Anda. ありがとうございます menambah kesopanan, tetapi seluruh pilihan bentuk tetap perlu disesuaikan.",
    "watchOut": "Jangan memakai てくれて untuk mengucapkan terima kasih atas tindakan diri sendiri. Menambahkan ございます tidak otomatis menjadikan semua bentuk percakapan cocok untuk setiap atasan.",
    "commonMistake": "私が手伝ってくれてありがとう tidak tepat jika 私 adalah pelaku bantuan yang sedang disyukuri kepada orang lain. Untuk berterima kasih kepada teman, ucapkan 手伝ってくれてありがとう.",
    "example": "駅まで迎えに来てくれてありがとう。",
    "exampleReading": "えき まで むかえ に きて くれて ありがとう。",
    "exampleMeaning": "Terima kasih sudah datang menjemput saya sampai stasiun.",
    "extraExample": "漢字の読み方を教えてくれてありがとう。",
    "extraExampleReading": "かんじ の よみかた を おしえて くれて ありがとう。",
    "extraExampleMeaning": "Terima kasih sudah mengajarkan cara membaca kanji itu.",
    "contrast": "教えてくれてありがとう berterima kasih atas bantuan yang diberikan orang lain. 教えてくれない？ meminta bantuan. 教えなくてすみません meminta maaf karena tidak mengajar.",
    "quiz": {
      "prompt": "「漢字の読み方を教えてくれてありがとう」では、誰の行動に感謝していますか。",
      "reading": "「かんじ の よみかた を おしえて くれて ありがとう」では、だれ の こうどう に かんしゃ して います か。",
      "context": "Tentukan arah bantuan pada ucapan terima kasih kepada teman.",
      "choices": [
        "teman yang mengajarkan cara membaca",
        "saya yang melarang orang membaca",
        "orang yang belum pernah melakukan apa pun",
        "kamus yang memerintahkan pembicara"
      ],
      "answer": 0,
      "explanation": "教えてくれて mengarah pada bantuan orang lain kepada pembicara. ありがとう menyatakan rasa terima kasih, bukan permintaan atau larangan."
    }
  },
  {
    "id": "n4-g-93",
    "title": "てくれない？／てもらえない？",
    "meaning": "bisa bantu melakukan ～? dalam percakapan akrab",
    "pattern": "Vて + くれない（か）？；Vて + もらえない（か）？",
    "explanation": "Pertanyaan negatif ini lazim berfungsi sebagai permintaan bantuan. てくれない menyoroti tindakan orang lain untuk pembicara; てもらえない menyoroti kemungkinan pembicara menerima bantuan.",
    "usage": "Meminta teman mengulang ucapan, meminjamkan barang, atau membantu. Dengan intonasi tanya dan konteks permintaan, maknanya bukan laporan bahwa bantuan tidak diberikan.",
    "whenToUse": "Gunakan もう一度言ってくれない？ atau この箱を持ってもらえない？ kepada orang yang akrab. Kepada orang yang dihormati, ていただけませんか merupakan pilihan lebih sopan.",
    "watchOut": "Tanpa konteks tanya, 友達が手伝ってくれない dapat berarti teman tidak mau membantu. Bentuk pertanyaan dan situasi membedakan permintaan dari keluhan.",
    "commonMistake": "Menerjemahkan setiap くれない sebagai jangan melakukan akan membalik maksud permintaan. 手伝ってくれない？ biasanya meminta bantuan, sedangkan 手伝わないで meminta jangan membantu.",
    "example": "もう一度説明してくれない？",
    "exampleReading": "もう いちど せつめい して くれない？",
    "exampleMeaning": "Bisa jelaskan sekali lagi untukku?",
    "extraExample": "この箱を持ってもらえない？",
    "extraExampleReading": "この はこ を もって もらえない？",
    "extraExampleMeaning": "Bisa bantu membawakan kotak ini?",
    "contrast": "持ってもらえない？ meminta bantuan secara akrab; 持っていただけませんか lebih sopan. 持たないで meminta agar tidak membawa, sedangkan 持ってくれなかった melaporkan bantuan tidak terjadi.",
    "quiz": {
      "prompt": "友達が「もう一度説明してくれない？」と聞きました。何を頼んでいますか。",
      "reading": "ともだち が「もう いちど せつめい して くれない？」と ききました。なに を たのんで います か。",
      "context": "Ucapan memakai intonasi pertanyaan sebagai permintaan bantuan.",
      "choices": [
        "menjelaskan sekali lagi",
        "berhenti menjelaskan selamanya",
        "menolak semua bantuan yang ditawarkan",
        "menyatakan penjelasan sudah benar kemarin"
      ],
      "answer": 0,
      "explanation": "Dalam konteks tanya, 説明してくれない？ meminta lawan bicara menjelaskan. Bentuk negatif ini bukan larangan 説明しないで."
    }
  },
  {
    "id": "n4-g-94",
    "title": "てやる（くだけた授受）",
    "meaning": "melakukan untuk, dengan nada sangat akrab atau dapat merendahkan",
    "pattern": "Vて + やる",
    "explanation": "てやる menyatakan tindakan untuk pihak lain dalam gaya sangat santai. Bentuk ini dapat muncul ketika membicarakan merawat tanaman atau hewan. Kepada manusia, ia dapat terdengar menempatkan penerima lebih rendah, bergantung hubungan dan nada.",
    "usage": "Utamakan pengenalan ketika membaca atau mendengar ungkapan akrab. Untuk percakapan layanan, pasien, senior, atau orang yang belum akrab, pilih cara menyatakan tindakan yang lebih hormat.",
    "whenToUse": "Kenali 餌を買ってやる atau 洗ってやる dalam konteks tanaman/hewan dan percakapan keluarga. てあげる lebih netral, tetapi kepada orang pun perlu menghindari kesan memamerkan jasa.",
    "watchOut": "てやる tidak memberi izin merendahkan lansia atau pasien. Pada kalimat bertekad seperti 絶対に勝ってやる, maknanya dapat menjadi tekad kuat; itu berbeda dari bantuan dasar.",
    "commonMistake": "Menganggap てやる versi lebih sopan dari てあげる adalah keliru. Dalam layanan lebih aman menyebut tindakan dengan sopan atau memakai ungkapan yang sesuai hubungan dan persetujuan.",
    "example": "父は犬に餌を買ってやりました。",
    "exampleReading": "ちち は いぬ に えさ を かって やりました。",
    "exampleMeaning": "Ayah membelikan makanan untuk anjing itu, dengan ungkapan sangat santai.",
    "extraExample": "兄は犬の体を洗ってやりました。",
    "extraExampleReading": "あに は いぬ の からだ を あらって やりました。",
    "extraExampleMeaning": "Kakak laki-laki memandikan anjing itu, dengan ungkapan santai tentang bantuan/perawatan.",
    "contrast": "てやる dapat terdengar sangat akrab atau merendahkan. てあげる menyoroti bantuan untuk pihak lain. てくれる menunjukkan bantuan yang diterima pihak pembicara; ketiganya berbeda arah dan register.",
    "quiz": {
      "prompt": "「てやる」を使うとき、特に気をつけることは何ですか。",
      "reading": "「て やる」を つかう とき、とくに き を つける こと は なん です か。",
      "context": "Pilih pemahaman register untuk berbicara kepada orang yang dihormati atau pengguna layanan.",
      "choices": [
        "dapat terdengar merendahkan sehingga perlu memilih ungkapan yang sesuai",
        "selalu paling sopan kepada pasien dan senior",
        "hanya berarti menerima bantuan dari guru",
        "otomatis menyatakan izin sudah diberikan"
      ],
      "answer": 0,
      "explanation": "てやる dapat menunjukkan sikap menempatkan penerima lebih rendah. Ini bukan bentuk hormat, bukan menerima bantuan, dan tidak membuktikan adanya izin."
    }
  },
  {
    "id": "n4-g-95",
    "title": "たらいいですか（指示を求める）",
    "meaning": "sebaiknya saya bagaimana; apa yang perlu saya lakukan?",
    "pattern": "kata tanya + Vた + らいいですか",
    "explanation": "Pertanyaan ini meminta petunjuk mengenai tindakan yang cocok. Kata tanya menjelaskan bagian yang belum diketahui: どう untuk caranya, どこへ untuk tujuan, atau 何を untuk tindakannya.",
    "usage": "Menanyakan tempat menyerahkan formulir, orang yang harus dihubungi, atau cara memperbaiki kesulitan. Pembicara meminta panduan, bukan sedang memberi saran kepada lawan bicara.",
    "whenToUse": "Gunakan どうしたらいいですか、誰に聞いたらいいですか、どこへ行ったらいいですか. Bentuk た membentuk たら, bukan berarti tindakan yang ditanyakan sudah dilakukan.",
    "watchOut": "Permintaan petunjuk tidak sama dengan meminta izin. 行ってもいいですか menanyakan boleh pergi; どこへ行ったらいいですか menanyakan sebaiknya ke mana.",
    "commonMistake": "どこへ行くたらいいですか salah karena perlu bentuk た: どこへ行ったらいいですか. Jangan juga menganggap たらどう sebagai pertanyaan yang sama; itu biasanya memberi saran.",
    "example": "この書類は、誰に渡したらいいですか。",
    "exampleReading": "この しょるい は、だれ に わたしたら いい です か。",
    "exampleMeaning": "Dokumen ini sebaiknya saya serahkan kepada siapa?",
    "extraExample": "道が分かりません。どうしたらいいですか。",
    "extraExampleReading": "みち が わかりません。どう したら いい です か。",
    "extraExampleMeaning": "Saya tidak tahu jalannya. Sebaiknya saya bagaimana?",
    "contrast": "何をしたらいいですか meminta petunjuk tindakan. 休んだらどうですか memberi saran beristirahat. 休んでもいいですか meminta izin beristirahat.",
    "quiz": {
      "prompt": "「この書類は、誰に渡したらいいですか」は、何を知りたい質問ですか。",
      "reading": "「この しょるい は、だれ に わたしたら いい です か」は、なに を しりたい しつもん です か。",
      "context": "Pembicara memegang dokumen dan membutuhkan petunjuk penyerahan.",
      "choices": [
        "orang yang sebaiknya menerima dokumen",
        "harga kertas yang sudah dibeli",
        "alasan dokumen pasti sudah dibuang",
        "izin untuk tidak membaca selamanya"
      ],
      "answer": 0,
      "explanation": "誰に menunjukkan penerima yang belum diketahui. 渡したらいいですか meminta petunjuk kepada siapa menyerahkan, bukan melaporkan bahwa penyerahan sudah terjadi."
    }
  },
  {
    "id": "n4-g-96",
    "title": "かな／かしら／のだろうか",
    "meaning": "kira-kira; saya bertanya-tanya apakah",
    "pattern": "klausa biasa + かな／かしら；V・Aい + のだろうか；N・Aな + なのだろうか",
    "explanation": "Ungkapan ini menunjukkan keraguan atau pertanyaan dalam pikiran pembicara. かな lazim dalam percakapan santai; のだろうか terdengar lebih merenung. かしら bernada lembut dan secara tradisional sering terkait gaya tutur perempuan.",
    "usage": "Merenungkan cuaca, letak barang, atau kemungkinan suatu kejadian. Lawan bicara dapat menanggapi, tetapi bentuknya tidak selalu pertanyaan langsung yang menuntut jawaban.",
    "whenToUse": "Gunakan 来るかな、安いかな、休みかな；来るかしら；来るのだろうか、休みなのだろうか. Untuk pertanyaan sopan ada のでしょうか pada konteks yang sesuai.",
    "watchOut": "かな umumnya santai dan bukan otomatis sapaan sopan. Hubungan かしら dengan gaya feminin adalah kecenderungan pemakaian, bukan larangan gramatikal berdasarkan jenis kelamin.",
    "commonMistake": "休みだかな bukan bentuk dasar yang diajarkan; gunakan 休みかな. Pada bentuk dengan の, nomina memerlukan な: 休みなのだろうか. Jangan menambahkan な setelah Aい: 高いのだろうか.",
    "example": "この鍵は、どこの鍵かな。",
    "exampleReading": "この かぎ は、どこ の かぎ かな。",
    "exampleMeaning": "Kira-kira kunci ini kunci untuk tempat mana, ya?",
    "extraExample": "どうして電車が止まったのだろうか。",
    "extraExampleReading": "どうして でんしゃ が とまった の だろう か。",
    "extraExampleMeaning": "Saya bertanya-tanya mengapa kereta itu berhenti.",
    "contrast": "来るかな merenungkan apakah akan datang; 来るか secara langsung menandai pertanyaan. 来るそうだ melaporkan kabar dan 来るかもしれない menyatakan kemungkinan, bukan pertanyaan dalam pikiran.",
    "quiz": {
      "prompt": "「この鍵は、どこの鍵かな」の話し手は、何をしていますか。",
      "reading": "「この かぎ は、どこ の かぎ かな」の はなして は、なに を して います か。",
      "context": "Pembicara sedang memegang kunci yang belum dikenali.",
      "choices": [
        "bertanya-tanya kunci itu untuk tempat mana",
        "menyampaikan kabar pasti dari pengumuman",
        "memerintahkan semua orang mengunci pintu",
        "menyatakan tahu pasti nama pemiliknya"
      ],
      "answer": 0,
      "explanation": "かな menunjukkan pertanyaan atau keraguan dalam pikiran. Pembicara belum menyatakan jawaban pasti, laporan dari sumber, atau perintah."
    }
  },
  {
    "id": "n4-g-97",
    "title": "かい（親しい相手への質問）",
    "meaning": "apakah ～? dengan nada percakapan akrab",
    "pattern": "klausa biasa + かい（terutama pertanyaan ya/tidak）",
    "explanation": "かい adalah akhiran pertanyaan yang terdengar akrab. Ia sering muncul dalam percakapan orang yang lebih tua kepada yang lebih muda atau dalam gaya tertentu, sehingga tidak merupakan pengganti netral bagi semua pertanyaan sopan.",
    "usage": "Mengenali pertanyaan seperti 準備はできたかい？ dalam percakapan keluarga atau dialog. Utamakan pemahaman hubungan pembicara, bukan meniru bentuk ini ke setiap orang.",
    "whenToUse": "Pada pola dasar gunakan pertanyaan ya/tidak seperti 分かったかい、もう食べたかい. Untuk bertanya sopan, bentuk ですか／ますか tetap lebih umum.",
    "watchOut": "Kepada senior atau pelanggan, かい dapat terasa terlalu akrab. Pertanyaan kata tanya secara tradisional dapat memakai だい, tetapi かい dan だい bukan akhiran yang bebas ditukar pada semua kalimat.",
    "commonMistake": "Menggunakan 分かりましたかい sebagai pola sopan standar mencampur gaya yang tidak diperlukan. Pilih 分かりましたか untuk sopan atau 分かったかい untuk konteks akrab yang sesuai.",
    "example": "お父さんが「準備はできたかい」と聞きました。",
    "exampleReading": "おとうさん が「じゅんび は できた かい」と ききました。",
    "exampleMeaning": "Ayah bertanya, 'Sudah siap?'",
    "extraExample": "おじいさんは「もう朝ご飯を食べたかい」と言いました。",
    "extraExampleReading": "おじいさん は「もう あさごはん を たべた かい」と いいました。",
    "extraExampleMeaning": "Kakek berkata, 'Sudah sarapan?'",
    "contrast": "できたかい adalah pertanyaan akrab dengan warna gaya tertentu. できましたか lebih sopan. できたかな menunjukkan pembicara bertanya-tanya, bukan otomatis menanyakan langsung kepada seseorang.",
    "quiz": {
      "prompt": "父が「準備はできたかい」と聞きました。何を確かめていますか。",
      "reading": "ちち が「じゅんび は できた かい」と ききました。なに を たしかめて います か。",
      "context": "Baca pertanyaan akrab ayah sebelum keluarga berangkat.",
      "choices": [
        "apakah persiapannya sudah selesai",
        "ke mana persiapan itu pergi",
        "perintah agar tidak bersiap lagi",
        "kabar bahwa ayah pasti sudah berangkat"
      ],
      "answer": 0,
      "explanation": "かい menandai pertanyaan apakah 準備はできた. Ini meminta konfirmasi kesiapan, bukan larangan atau laporan keberangkatan."
    }
  },
  {
    "id": "n4-g-98",
    "title": "と言ってもいい",
    "meaning": "boleh dikatakan; bisa dibilang",
    "pattern": "klausa biasa + と言ってもいい；N・Aな + だと言ってもいい",
    "explanation": "と言ってもいい menyampaikan bahwa suatu penilaian cukup layak diungkapkan dengan kata-kata tertentu. Pembicara menyajikan penggolongan atau kesimpulan yang dianggap wajar, sering dengan nuansa kira-kira bisa dibilang.",
    "usage": "Menyatakan penilaian seperti pengalaman yang hampir merupakan keberhasilan atau keadaan yang dapat disebut selesai. Ini berbeda dari hanya meminta izin mengucapkan suatu kata.",
    "whenToUse": "Gunakan 成功だと言ってもいい、終わったと言ってもいい. ほとんど atau もう dapat memperjelas batas penilaian pada konteks yang sesuai.",
    "watchOut": "Pola penilaian ini tidak otomatis menjamin fakta pasti atau izin dari orang lain. と言っても yang berarti meskipun disebut adalah konstruksi lain; jangan menganggap selalu sama.",
    "commonMistake": "成功と言ってもいい dapat berfungsi menyebut kata, tetapi untuk isi klausa nomina pada pola penilaian dasar gunakan 成功だと言ってもいい. Verba tidak memerlukan だ: 終わったと言ってもいい.",
    "example": "この結果なら、成功だと言ってもいいと思います。",
    "exampleReading": "この けっか なら、せいこう だ と いって も いい と おもいます。",
    "exampleMeaning": "Dengan hasil ini, menurut saya boleh dikatakan berhasil.",
    "extraExample": "準備はほとんど終わったと言ってもいいです。",
    "extraExampleReading": "じゅんび は ほとんど おわった と いって も いい です。",
    "extraExampleMeaning": "Boleh dibilang persiapannya hampir selesai.",
    "contrast": "成功だと言ってもいい memberi penilaian yang layak disebut demikian. 成功だと言われている melaporkan penilaian yang beredar. 言ってもいいですか dapat menjadi pertanyaan izin benar-benar berbicara.",
    "quiz": {
      "prompt": "「この結果なら、成功だと言ってもいいと思います」は、何を表しますか。",
      "reading": "「この けっか なら、せいこう だ と いって も いい と おもいます」は、なに を あらわします か。",
      "context": "Pembicara menilai hasil kegiatan yang sedang dibahas.",
      "choices": [
        "menurutnya hasil itu layak disebut berhasil",
        "semua orang pasti sudah memberi izin berbicara",
        "perintah agar hasilnya dihapus",
        "kabar bahwa pembicara tidak hadir"
      ],
      "answer": 0,
      "explanation": "と言ってもいい di sini mengungkapkan penilaian boleh dibilang berhasil. と 思います menandainya sebagai pendapat pembicara, bukan bukti persetujuan semua orang."
    }
  },
  {
    "id": "n4-g-99",
    "title": "んだけど／んですが（相談の入り口）",
    "meaning": "sebenarnya begini; pembuka penjelasan, konsultasi atau permintaan",
    "pattern": "V・Aい biasa + んだけど／んですが；N・Aな + なんだけど／なんですが",
    "explanation": "Pola ini menggabungkan penjelasan んだ／んです dengan けど／が. Pembicara memberi latar belakang dan membuka ruang bagi tanggapan. Kelanjutannya dapat diucapkan atau dipahami dari konteks.",
    "usage": "Berlatih memakai dua prasyarat N5 dalam percakapan N4: menyampaikan kesulitan lalu meminta bantuan atau berkonsultasi. Ini bukan selalu pertentangan yang diterjemahkan tetapi.",
    "whenToUse": "Gunakan 使い方が分からないんですが、教えていただけませんか. Untuk nomina, sisipkan な: 予約のことなんですが…. Bentuk んだけど lebih santai.",
    "watchOut": "Ucapan yang berhenti pada んですが dapat menunggu respons, tetapi lawan bicara belum tentu tahu permintaannya. Dalam situasi penting, jelaskan kebutuhan Anda dengan lengkap.",
    "commonMistake": "予約のことんですが kurang な; gunakan 予約のことなんですが. 高いなんですが salah karena Aい langsung menjadi 高いんですが.",
    "example": "使い方が分からないんですが、教えていただけませんか。",
    "exampleReading": "つかいかた が わからない んです が、おしえて いただけません か。",
    "exampleMeaning": "Sebenarnya saya belum tahu cara memakainya. Bisa tolong mengajari saya?",
    "extraExample": "予約のことなんですが、時間を変えられますか。",
    "extraExampleReading": "よやく の こと なんです が、じかん を かえられます か。",
    "extraExampleMeaning": "Mengenai reservasi saya, apakah waktunya bisa diubah?",
    "contrast": "分からないんです memberi penjelasan. 分からないんですが membuka penjelasan yang mengarah ke tanggapan atau permintaan. N5 んです dan けど／が tetap menjadi prasyarat; latihan gabungan ini tidak dihitung sebagai dua tujuan baru.",
    "quiz": {
      "prompt": "「使い方が分からないんですが、教えていただけませんか」の目的は何ですか。",
      "reading": "「つかいかた が わからない んです が、おしえて いただけません か」の もくてき は なん です か。",
      "context": "Pembicara sedang berkonsultasi tentang benda yang belum bisa dipakainya.",
      "choices": [
        "menjelaskan kesulitan lalu meminta diajari",
        "melarang orang menjelaskan",
        "mengumumkan sudah menguasai semua cara",
        "menyatakan tidak ada hubungan dengan permintaan"
      ],
      "answer": 0,
      "explanation": "んですが memberi latar belakang belum tahu caranya, lalu 教えていただけませんか meminta bantuan. Fungsi ですが di sini membuka konsultasi, bukan sekadar tetapi."
    }
  },
  {
    "id": "n4-g-100",
    "title": "といい／ように祈る（願い）",
    "meaning": "semoga; berharap atau berdoa agar",
    "pattern": "klausa biasa + といい（な・ね）；Vる／Vない + ように祈る",
    "explanation": "といい mengungkapkan harapan agar suatu keadaan menjadi kenyataan. といいですね sering menyampaikan harapan baik kepada orang lain, sedangkan といいな menyuarakan harapan sendiri. ように祈る secara eksplisit menyatakan berdoa atau berharap kuat.",
    "usage": "Mendoakan hasil ujian atau cuaca yang baik. Harapan ini belum menyatakan kepastian hasil dan berbeda dari keputusan menjalankan tindakan sendiri.",
    "whenToUse": "Gunakan 合格するといいですね、晴れるといいな、雨が降らないように祈る. Pada nomina/na-adjective bentuk klausa mengikuti pola kondisi と, misalnya 休みだといいな.",
    "watchOut": "Keinginan agar bisa melakukan sesuatu dapat memakai bentuk potensial seperti 行けるといいな. Konteks といい juga dapat memberi saran, misalnya 先生に聞くといい; jangan membaca semua pemakaian sebagai doa.",
    "commonMistake": "晴れるといいです tidak berarti cuaca pasti cerah. 合格するように祈る menyatakan harapan, bukan laporan sudah lulus atau perintah agar orang lain lulus.",
    "example": "明日の試験に合格するといいですね。",
    "exampleReading": "あした の しけん に ごうかく する と いい です ね。",
    "exampleMeaning": "Semoga kamu lulus ujian besok.",
    "extraExample": "日曜日に雨が降らないように祈っています。",
    "extraExampleReading": "にちようび に あめ が ふらない ように いのって います。",
    "extraExampleMeaning": "Saya berdoa semoga pada hari Minggu tidak turun hujan.",
    "contrast": "合格するといいね menyampaikan harapan. 合格するはずだ menyatakan dugaan berdasarkan alasan. 勉強することにする menyatakan keputusan sendiri, dan 忘れないようにメモする memakai ように sebagai tujuan tindakan.",
    "quiz": {
      "prompt": "「日曜日に雨が降らないように祈っています」は、何を望んでいますか。",
      "reading": "「にちようび に あめ が ふらない ように いのって います」は、なに を のぞんで います か。",
      "context": "Pembicara mempunyai rencana di luar ruangan dan sedang mengungkapkan harapan.",
      "choices": [
        "semoga hari Minggu tidak hujan",
        "bahwa hari Minggu pasti sudah hujan",
        "agar semua rencana kemarin dihapus",
        "bahwa pembicara sudah mengubah cuaca"
      ],
      "answer": 0,
      "explanation": "降らない adalah isi harapan negatif: tidak turun hujan. 祈っています menyatakan berdoa/berharap, bukan kepastian atau kemampuan mengendalikan cuaca."
    }
  },
  {
    "id": "n4-g-101",
    "title": "じゃないか／ではないか（確認・気づき）",
    "meaning": "bukankah; ternyata, sebagai konfirmasi atau penemuan",
    "pattern": "klausa biasa + じゃないか／ではないか（konteks penegasan・konfirmasi）",
    "explanation": "Bentuk pertanyaan negatif ini dapat mengajak lawan bicara mengakui suatu hal, atau mengungkapkan pembicara baru menyadarinya. Dalam pemakaian ini, maksudnya sering menegaskan isi, bukan benar-benar menolaknya.",
    "usage": "Mengenali konfirmasi yang cukup langsung atau seruan ketika menemukan barang. ではないか cenderung lebih penuh, sedangkan じゃないか lazim dalam percakapan.",
    "whenToUse": "Gunakan ここにあるじゃないか ketika ternyata barang ada di sini, atau 約束したじゃないか ketika mengingatkan bahwa orang sudah berjanji. Nada dan hubungan sangat memengaruhi kesannya.",
    "watchOut": "Ungkapan ini dapat terdengar menantang atau menegur. Ada juga pertanyaan negatif sungguhan, sehingga konteks tidak boleh diabaikan. Bentuk sopan konfirmasi じゃないですか mempunyai nuansa pemakaian sendiri.",
    "commonMistake": "Menganggap あるじゃないか selalu berarti tidak ada akan membalik penemuan. Dalam konteks menemukan kunci, pembicara justru menegaskan bahwa kuncinya ada.",
    "example": "探していた鍵は、ここにあるじゃないか。",
    "exampleReading": "さがして いた かぎ は、ここ に ある じゃない か。",
    "exampleMeaning": "Lho, kunci yang tadi dicari ternyata ada di sini.",
    "extraExample": "昨日、一緒に行くと約束したではないか。",
    "extraExampleReading": "きのう、いっしょ に いく と やくそく した ではない か。",
    "extraExampleMeaning": "Bukankah kemarin kamu sudah berjanji akan pergi bersama? Nada mengingatkan cukup tegas.",
    "contrast": "ここにない menyatakan tidak ada di sini. ここにあるじゃないか dalam konteks penemuan menegaskan ternyata ada. ここにあるかな bertanya-tanya apakah ada di sini.",
    "quiz": {
      "prompt": "鍵を見つけて「ここにあるじゃないか」と言いました。鍵はどうなっていますか。",
      "reading": "かぎ を みつけて「ここ に ある じゃない か」と いいました。かぎ は どう なって います か。",
      "context": "Pembicara baru menemukan barang yang dicari. Baca konfirmasi menurut konteks.",
      "choices": [
        "ternyata ada di sini",
        "pasti tidak ada di mana pun",
        "sudah dimusnahkan sebelum ditemukan",
        "belum boleh disebut sebagai kunci"
      ],
      "answer": 0,
      "explanation": "Dalam konteks 見つけて, あるじゃないか adalah penemuan/penegasan bahwa kunci ternyata ada. Ini bukan penyangkalan keberadaan."
    }
  }
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
