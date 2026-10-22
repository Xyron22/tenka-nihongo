// Stage 8A-10.5: pronouns, adverbs, location words and fixed expressions.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N5||!window.TENKA_N5_CONTENT)return;
const add=window.TENKA_N5_CONTENT.addRows;
add('21-person','Kata ganti dan sapaan',`
私|わたし|saya|私は学生です。|わたし は がくせい です。|Saya pelajar.
僕|ぼく|aku / saya (laki-laki; santai)|僕も行きます。|ぼく も いきます。|Aku juga pergi.
あなた|あなた|Anda / kamu (sering dihilangkan dalam percakapan)|あなたはどうですか。|あなた は どう です か。|Bagaimana dengan Anda?
自分|じぶん|diri sendiri|自分の名前を書きます。|じぶん の なまえ を かきます。|Saya menulis nama sendiri.
皆さん|みなさん|semuanya (sapaan sopan)|皆さん、おはようございます。|みなさん、おはよう ございます。|Selamat pagi, semuanya.
みんな|みんな|semua orang / semuanya (santai)|みんなで行きましょう。|みんな で いきましょう。|Mari pergi bersama-sama.
方|かた|orang (sebutan sopan)|あの方は先生です。|あの かた は せんせい です。|Orang itu guru.
警官|けいかん|polisi / petugas kepolisian|警官に聞きます。|けいかん に ききます。|Saya bertanya kepada petugas polisi.
お巡りさん|おまわりさん|pak / bu polisi (sapaan umum)|お巡りさんに道を聞きました。|おまわりさん に みち を ききました。|Saya menanyakan jalan kepada polisi.`);
add('21-demonstratives','Kata tunjuk dan pertanyaan',`
これ|これ|ini (benda dekat pembicara)|これは私の本です。|これ は わたし の ほん です。|Ini buku saya.
それ|それ|itu (benda dekat lawan bicara)|それは何ですか。|それ は なん です か。|Itu apa?
あれ|あれ|itu di sana (benda jauh)|あれは学校です。|あれ は がっこう です。|Itu sekolah.
どれ|どれ|yang mana (benda)|あなたのかばんはどれですか。|あなた の かばん は どれ です か。|Tasmu yang mana?
この|この|ini + nomina|この本は新しいです。|この ほん は あたらしい です。|Buku ini baru.
その|その|itu + nomina|その本を見せてください。|その ほん を みせて ください。|Tolong perlihatkan buku itu.
あの|あの|yang di sana + nomina|あの人は先生です。|あの ひと は せんせい です。|Orang yang di sana guru.
どの|どの|yang mana + nomina|どの本が好きですか。|どの ほん が すき です か。|Buku yang mana yang kamu suka?
ここ|ここ|di sini|ここに座ってください。|ここ に すわって ください。|Tolong duduk di sini.
そこ|そこ|di situ|そこに本があります。|そこ に ほん が あります。|Ada buku di situ.
あそこ|あそこ|di sana (lokasi jauh)|あそこに駅があります。|あそこ に えき が あります。|Ada stasiun di sana.
どこ|どこ|di mana|駅はどこですか。|えき は どこ です か。|Stasiunnya di mana?
こちら|こちら|sebelah sini / ini (sopan)|こちらへどうぞ。|こちら へ どうぞ。|Silakan ke sebelah sini.
そちら|そちら|sebelah situ / pihak Anda (sopan)|そちらは何時ですか。|そちら は なんじ です か。|Di tempat Anda sekarang pukul berapa?
あちら|あちら|sebelah sana (sopan)|トイレはあちらです。|トイレ は あちら です。|Toiletnya di sebelah sana.
どちら|どちら|sebelah mana / yang mana dari dua (sopan)|どちらがいいですか。|どちら が いい です か。|Yang mana yang Anda pilih?
こっち|こっち|sebelah sini (santai)|こっちに来てください。|こっち に きて ください。|Tolong datang ke sebelah sini.
そっち|そっち|sebelah situ (santai)|そっちは暑い？|そっち は あつい？|Di tempatmu panas?
あっち|あっち|sebelah sana (santai)|あっちに店があるよ。|あっち に みせ が ある よ。|Ada toko di sebelah sana, lho.
どっち|どっち|yang mana dari dua (santai)|どっちが好き？|どっち が すき？|Kamu suka yang mana?
誰|だれ|siapa|誰が来ますか。|だれ が きます か。|Siapa yang akan datang?
どなた|どなた|siapa (sopan)|あの方はどなたですか。|あの かた は どなた です か。|Siapa orang itu?
誰か|だれか|seseorang|誰かいますか。|だれか います か。|Apakah ada seseorang?
何か|なにか|sesuatu|何か飲みたいです。|なにか のみたい です。|Saya ingin minum sesuatu.
いつ|いつ|kapan|いつ帰りますか。|いつ かえります か。|Kapan kamu pulang?
いくら|いくら|berapa harganya|この本はいくらですか。|この ほん は いくら です か。|Buku ini berapa harganya?
いくつ|いくつ|berapa buah / berapa umur|りんごはいくつありますか。|りんご は いくつ あります か。|Ada berapa buah apel?
どう|どう|bagaimana|仕事はどうですか。|しごと は どう です か。|Bagaimana pekerjaanmu?
いかが|いかが|bagaimana (sopan)|お茶はいかがですか。|おちゃ は いかが です か。|Bagaimana kalau minum teh?
どんな|どんな|seperti apa + nomina|どんな料理が好きですか。|どんな りょうり が すき です か。|Kamu suka masakan seperti apa?
どうして|どうして|mengapa|どうして日本語を勉強していますか。|どうして にほんご を べんきょう して います か。|Mengapa kamu belajar bahasa Jepang?
なぜ|なぜ|mengapa (lebih lazim dalam tulisan)|なぜ日本語を勉強していますか。|なぜ にほんご を べんきょう して います か。|Mengapa kamu belajar bahasa Jepang?
どうやって|どうやって|dengan cara apa|駅までどうやって行きますか。|えき まで どうやって いきます か。|Bagaimana cara pergi ke stasiun?
こんな|こんな|seperti ini + nomina|こんな本が欲しいです。|こんな ほん が ほしい です。|Saya ingin buku seperti ini.`);
add('21-location','Letak dan hubungan',`
上|うえ|atas|机の上に本があります。|つくえ の うえ に ほん が あります。|Ada buku di atas meja.
下|した|bawah|机の下に猫がいます。|つくえ の した に ねこ が います。|Ada kucing di bawah meja.
中|なか|dalam / tengah|かばんの中に本があります。|かばん の なか に ほん が あります。|Ada buku di dalam tas.
隣|となり|sebelah yang berdampingan|銀行は店の隣です。|ぎんこう は みせ の となり です。|Bank berada di sebelah toko.
そば|そば|dekat / di sisi|駅のそばに住んでいます。|えき の そば に すんで います。|Saya tinggal di dekat stasiun.
向こう|むこう|seberang / sebelah sana|川の向こうに学校があります。|かわ の むこう に がっこう が あります。|Ada sekolah di seberang sungai.
横|よこ|samping / arah mendatar|横に座ってください。|よこ に すわって ください。|Tolong duduk di samping.
縦|たて|arah vertikal / memanjang|縦に書いてください。|たて に かいて ください。|Tolong tulis secara vertikal.
近く|ちかく|sekitar / dekat (nomina lokasi)|近くに店があります。|ちかく に みせ が あります。|Ada toko di dekat sini.
辺|へん|sekitar / daerah|この辺に店がありますか。|この へん に みせ が あります か。|Apakah ada toko di sekitar sini?
所|ところ|tempat|ここは静かな所です。|ここ は しずか な ところ です。|Ini tempat yang tenang.
角|かど|sudut / pojok jalan|次の角を曲がります。|つぎ の かど を まがります。|Saya berbelok di sudut berikutnya.
先|さき|di depan / lebih dahulu|先に行ってください。|さき に いって ください。|Silakan pergi lebih dahulu.
次|つぎ|berikutnya|次の駅で降ります。|つぎ の えき で おります。|Saya turun di stasiun berikutnya.
後|あと|setelah / sisa|仕事の後、帰ります。|しごと の あと、かえります。|Saya pulang setelah bekerja.
ほか|ほか|lain / selainnya|ほかの本も見ます。|ほか の ほん も みます。|Saya melihat buku lain juga.
同じ|おなじ|sama|これは同じ本です。|これ は おなじ ほん です。|Ini buku yang sama.
物|もの|benda / barang|大切な物です。|たいせつ な もの です。|Ini barang yang berharga.`);
add('21-adverbs','Keterangan frekuensi, derajat, dan cara',`
いつも|いつも|selalu|いつも朝ご飯を食べます。|いつも あさごはん を たべます。|Saya selalu sarapan.
時々|ときどき|kadang-kadang|時々、映画を見ます。|ときどき、えいが を みます。|Kadang-kadang saya menonton film.
よく|よく|sering / dengan baik|よくこの店に来ます。|よく この みせ に きます。|Saya sering datang ke toko ini.
とても|とても|sangat|この本はとても面白いです。|この ほん は とても おもしろい です。|Buku ini sangat menarik.
たくさん|たくさん|banyak jumlahnya|本をたくさん読みます。|ほん を たくさん よみます。|Saya membaca banyak buku.
結構|けっこう|lumayan / cukup|この部屋は結構広いです。|この へや は けっこう ひろい です。|Kamar ini lumayan luas.
あまり|あまり|tidak begitu (dengan negatif)|コーヒーはあまり飲みません。|コーヒー は あまり のみません。|Saya tidak begitu sering minum kopi.
全然|ぜんぜん|sama sekali tidak (dasar: dengan negatif)|全然分かりません。|ぜんぜん わかりません。|Saya sama sekali tidak mengerti.
全部|ぜんぶ|semuanya / seluruhnya|全部食べました。|ぜんぶ たべました。|Saya makan semuanya.
もう|もう|sudah / tambahan lagi / tidak lagi|もう宿題をしました。|もう しゅくだい を しました。|Saya sudah mengerjakan PR.
まだ|まだ|masih / belum|まだ仕事をしています。|まだ しごと を して います。|Saya masih bekerja.
もっと|もっと|lebih banyak / lebih lagi|もっと勉強したいです。|もっと べんきょう したい です。|Saya ingin belajar lebih banyak.
もう一度|もういちど|sekali lagi|もう一度聞きます。|もう いちど ききます。|Saya mendengarkan sekali lagi.
ちょっと|ちょっと|sebentar / sedikit (percakapan)|ちょっと待ってください。|ちょっと まって ください。|Tolong tunggu sebentar.
すぐに|すぐに|segera|すぐに行きます。|すぐ に いきます。|Saya segera pergi.
ゆっくり|ゆっくり|pelan-pelan / dengan santai|ゆっくり話してください。|ゆっくり はなして ください。|Tolong bicara pelan-pelan.
まっすぐ|まっすぐ|lurus|まっすぐ行ってください。|まっすぐ いって ください。|Tolong jalan lurus.
だんだん|だんだん|sedikit demi sedikit|だんだん寒くなりました。|だんだん さむく なりました。|Cuaca berangsur-angsur menjadi dingin.
たぶん|たぶん|mungkin|たぶん明日は雨でしょう。|たぶん あした は あめ でしょう。|Besok mungkin hujan.
ちょうど|ちょうど|tepat / pas|今、ちょうど三時です。|いま、ちょうど さんじ です。|Sekarang tepat pukul tiga.
初めて|はじめて|untuk pertama kalinya|初めて日本に来ました。|はじめて にほん に きました。|Saya datang ke Jepang untuk pertama kalinya.
色々|いろいろ|bermacam-macam|色々な本を読みます。|いろいろ な ほん を よみます。|Saya membaca bermacam-macam buku.
大勢|おおぜい|banyak orang|公園に大勢の人がいます。|こうえん に おおぜい の ひと が います。|Ada banyak orang di taman.
小さな|ちいさな|kecil + nomina|小さな店があります。|ちいさな みせ が あります。|Ada toko kecil.
大きな|おおきな|besar + nomina|大きな木があります。|おおきな き が あります。|Ada pohon besar.
本当|ほんとう|benar / sungguh|本当ですか。|ほんとう です か。|Benarkah?`);
add('21-connectors','Penghubung kalimat',`
そして|そして|dan / lalu (tambahan)|パンを買いました。そして、牛乳も買いました。|パン を かいました。そして、ぎゅうにゅう も かいました。|Saya membeli roti. Dan saya juga membeli susu.
それから|それから|setelah itu|手を洗います。それから、食べます。|て を あらいます。それから、たべます。|Saya mencuci tangan. Setelah itu saya makan.
でも|でも|tetapi (awal kalimat)|行きたいです。でも、時間がありません。|いきたい です。でも、じかん が ありません。|Saya ingin pergi. Tetapi saya tidak punya waktu.
しかし|しかし|namun (lebih formal)|この本は高いです。しかし、便利です。|この ほん は たかい です。しかし、べんり です。|Buku ini mahal. Namun praktis.
だから|だから|karena itu|今日は休みです。だから、家にいます。|きょう は やすみ です。だから、いえ に います。|Hari ini libur. Karena itu saya di rumah.
それでは|それでは|kalau begitu (transisi sopan)|それでは、始めましょう。|それでは、はじめましょう。|Kalau begitu, mari mulai.
じゃあ|じゃあ|kalau begitu (santai)|じゃあ、また明日。|じゃあ、また あした。|Kalau begitu, sampai besok.
では|では|kalau begitu (transisi)|では、行きましょう。|では、いきましょう。|Kalau begitu, mari pergi.`);
add('21-greetings','Ungkapan tetap sehari-hari',`
おはようございます|おはようございます|selamat pagi (sopan)|先生、おはようございます。|せんせい、おはよう ございます。|Selamat pagi, Pak/Bu Guru.
こんにちは|こんにちは|halo / selamat siang|こんにちは。お元気ですか。|こんにちは。おげんき です か。|Halo. Apa kabar?
こんばんは|こんばんは|selamat malam (sapaan)|こんばんは。寒いですね。|こんばんは。さむい です ね。|Selamat malam. Dingin, ya.
おやすみなさい|おやすみなさい|selamat tidur|もう寝ます。おやすみなさい。|もう ねます。おやすみなさい。|Saya tidur sekarang. Selamat tidur.
ありがとうございます|ありがとうございます|terima kasih (sopan)|先生、ありがとうございます。|せんせい、ありがとう ございます。|Terima kasih, Pak/Bu Guru.
どうもありがとう|どうもありがとう|terima kasih banyak (santai)|友だちに「どうもありがとう」と言いました。|ともだち に「どうも ありがとう」と いいました。|Saya mengucapkan terima kasih banyak kepada teman.
どういたしまして|どういたしまして|sama-sama|「ありがとう。」「どういたしまして。」|「ありがとう。」「どういたしまして。」|“Terima kasih.” “Sama-sama.”
すみません|すみません|permisi / maaf|すみません、駅はどこですか。|すみません、えき は どこ です か。|Permisi, stasiunnya di mana?
ごめんなさい|ごめんなさい|maaf (permintaan maaf)|遅くなりました。ごめんなさい。|おそく なりました。ごめんなさい。|Saya terlambat. Maaf.
失礼します|しつれいします|permisi (saat masuk / keluar / menyela)|失礼します。入ってもいいですか。|しつれいします。はいっても いい です か。|Permisi. Bolehkah saya masuk?
失礼しました|しつれいしました|maaf atas ketidaksopanan tadi|すみません。失礼しました。|すみません。しつれいしました。|Maaf. Mohon maaf atas ketidaksopanan tadi.
お願いします|おねがいします|tolong / saya mohon|お茶をお願いします。|おちゃ を おねがいします。|Saya minta teh, tolong.
ください|ください|tolong beri / tolong lakukan|水をください。|みず を ください。|Tolong beri saya air.
どうぞ|どうぞ|silakan|どうぞ、座ってください。|どうぞ、すわって ください。|Silakan duduk.
どうも|どうも|terima kasih / sapaan singkat sesuai konteks|「どうぞ。」「どうも。」|「どうぞ。」「どうも。」|“Silakan.” “Terima kasih.”
はい|はい|ya / respons menyimak|「学生ですか。」「はい、学生です。」|「がくせい です か。」「はい、がくせい です。」|“Apakah Anda pelajar?” “Ya, saya pelajar.”
いいえ|いいえ|tidak / bukan|「先生ですか。」「いいえ、学生です。」|「せんせい です か。」「いいえ、がくせい です。」|“Apakah Anda guru?” “Bukan, saya pelajar.”
ええ|ええ|ya (percakapan)|「明日も来ますか。」「ええ、来ます。」|「あした も きます か。」「ええ、きます。」|“Besok datang juga?” “Ya, datang.”
いただきます|いただきます|ucapan sebelum makan|朝ご飯を食べます。いただきます。|あさごはん を たべます。いただきます。|Saya akan sarapan. Selamat makan.
ごちそうさまでした|ごちそうさまでした|terima kasih atas hidangannya (sesudah makan)|ごちそうさまでした。おいしかったです。|ごちそうさまでした。おいしかった です。|Terima kasih atas hidangannya. Tadi enak.
いってきます|いってきます|saya berangkat dulu (akan kembali)|学校に行きます。いってきます。|がっこう に いきます。いってきます。|Saya pergi ke sekolah. Saya berangkat dulu.
いってらっしゃい|いってらっしゃい|selamat jalan (balasan orang yang berangkat)|「いってきます。」「いってらっしゃい。」|「いってきます。」「いってらっしゃい。」|“Saya berangkat dulu.” “Selamat jalan.”
ただいま|ただいま|saya pulang|ただいま。今日は疲れました。|ただいま。きょう は つかれました。|Saya pulang. Hari ini saya lelah.
おかえりなさい|おかえりなさい|selamat datang kembali (balasan orang pulang)|「ただいま。」「おかえりなさい。」|「ただいま。」「おかえりなさい。」|“Saya pulang.” “Selamat datang kembali.”
いらっしゃいませ|いらっしゃいませ|selamat datang (kepada pelanggan)|いらっしゃいませ。どうぞ。|いらっしゃいませ。どうぞ。|Selamat datang. Silakan.
はじめまして|はじめまして|salam kenal saat pertama bertemu|はじめまして。田中です。|はじめまして。たなか です。|Salam kenal. Saya Tanaka.
よろしくお願いします|よろしくおねがいします|mohon bantuannya / senang berkenalan|田中です。よろしくお願いします。|たなか です。よろしく おねがいします。|Saya Tanaka. Mohon bantuannya.
こちらこそ|こちらこそ|saya juga / justru saya yang berterima kasih|こちらこそ、よろしくお願いします。|こちらこそ、よろしく おねがいします。|Saya juga senang berkenalan. Mohon bantuannya.
さようなら|さようなら|selamat tinggal / sampai jumpa|先生、さようなら。|せんせい、さようなら。|Sampai jumpa, Pak/Bu Guru.
では、また|ではまた|kalau begitu, sampai jumpa lagi|では、また明日。|では、また あした。|Kalau begitu, sampai besok.
お元気で|おげんきで|jaga kesehatan (salam perpisahan)|さようなら。お元気で。|さようなら。おげんき で。|Selamat tinggal. Jaga kesehatan, ya.
もしもし|もしもし|halo (saat menelepon)|もしもし、田中さんですか。|もしもし、たなかさん です か。|Halo, apakah ini Tanaka-san?
ごめんください|ごめんください|permisi, apakah ada orang (saat berkunjung)|ごめんください。田中です。|ごめんください。たなか です。|Permisi. Saya Tanaka.
そうです|そうです|benar / begitu|「これは本ですか。」「そうです。」|「これ は ほん です か。」「そう です。」|“Apakah ini buku?” “Benar.”
そうですか|そうですか|oh begitu / benarkah (menanggapi informasi)|「明日は休みです。」「そうですか。」|「あした は やすみ です。」「そう です か。」|“Besok libur.” “Oh begitu.”
そうですね|そうですね|benar ya / hmm, mari dipikirkan|「寒いですね。」「そうですね。」|「さむい です ね。」「そう です ね。」|“Dingin, ya.” “Benar, ya.”
そうしましょう|そうしましょう|ya, mari begitu|「一緒に行きましょう。」「そうしましょう。」|「いっしょ に いきましょう。」「そう しましょう。」|“Mari pergi bersama.” “Ya, mari begitu.”
さあ|さあ|ayo / baiklah / entahlah sesuai konteks|さあ、行きましょう。|さあ、いきましょう。|Ayo, mari pergi.
あ・ああ・えっ・うーん|あ・ああ・えっ・うーん|seruan terkejut, paham, atau berpikir sesuai konteks|ああ、分かりました。|ああ、わかりました。|Oh, saya mengerti.`);
const interjection=D.jlpt.N5.vocab.find(v=>v.term==='あ・ああ・えっ・うーん');
if(interjection)interjection.quizExcludeReason='Seruan bergantung intonasi/konteks; dipelajari sebagai ungkapan, bukan soal satu arti.';
})();
