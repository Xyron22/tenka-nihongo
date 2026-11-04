// Stage 8A-10.2: concrete nouns, surroundings, clothing and study language.
(()=>{
'use strict';
if(!window.TENKA_DATA?.jlpt?.N5||!window.TENKA_N5_CONTENT)return;
const add=window.TENKA_N5_CONTENT.addRows;
add('18-clothes','Pakaian',`
服|ふく|pakaian
洋服|ようふく|pakaian gaya Barat
上着|うわぎ|pakaian luar / jaket
シャツ|シャツ|kemeja
ワイシャツ|ワイシャツ|kemeja kerja
Tシャツ|ティーシャツ|kaus
セーター|セーター|sweter
コート|コート|mantel
ズボン|ズボン|celana panjang
スカート|スカート|rok
靴|くつ|sepatu
靴下|くつした|kaus kaki
帽子|ぼうし|topi
ネクタイ|ネクタイ|dasi
スリッパ|スリッパ|sandal dalam ruangan
背広|せびろ|setelan jas`,['{term}を買いました。','{reading} を かいました。','Saya membeli {meaning}.']);
add('18-home-items','Perabot dan perangkat',`
机|つくえ|meja belajar
椅子|いす|kursi
テーブル|テーブル|meja
ベッド|ベッド|tempat tidur
本棚|ほんだな|rak buku
冷蔵庫|れいぞうこ|kulkas
テレビ|テレビ|televisi
ラジオ|ラジオ|radio
エアコン|エアコン|penyejuk ruangan
ストーブ|ストーブ|pemanas ruangan
カメラ|カメラ|kamera
電話|でんわ|telepon
カレンダー|カレンダー|kalender
ポスト|ポスト|kotak pos
ドア|ドア|pintu
窓|まど|jendela
戸|と|pintu geser
門|もん|gerbang
シャワー|シャワー|pancuran mandi`,['これは{term}です。','これ は {reading} です。','Ini {meaning}.']);
add('18-small-items','Barang sehari-hari',`
ボタン|ボタン|kancing / tombol
ポケット|ポケット|saku
封筒|ふうとう|amplop
切符|きっぷ|tiket
テープ|テープ|pita perekat / pita rekaman
テープレコーダー|テープレコーダー|alat perekam kaset
フィルム|フィルム|film kamera
レコード|レコード|piringan hitam
マッチ|マッチ|korek api batang
灰皿|はいざら|asbak
たばこ|たばこ|rokok
万年筆|まんねんひつ|pena tinta
ティッシュペーパー|ティッシュペーパー|tisu
トイレットペーパー|トイレットペーパー|tisu toilet
カップ|カップ|cangkir
荷物|にもつ|barang bawaan`,['これは{term}です。','これ は {reading} です。','Ini {meaning}.']);
add('18-transport','Transportasi dan jalan',`
自転車|じてんしゃ|sepeda
自動車|じどうしゃ|mobil (istilah formal)
バス|バス|bus
タクシー|タクシー|taksi
地下鉄|ちかてつ|kereta bawah tanah
飛行機|ひこうき|pesawat`,['{term}で行きます。','{reading} で いきます。','Saya pergi dengan {meaning}.']);
add('18-town','Wilayah dan pemandangan',`
町|まち|kota / kawasan permukiman
村|むら|desa
国|くに|negara
外国|がいこく|luar negeri
海|うみ|laut
川|かわ|sungai
山|やま|gunung
池|いけ|kolam
道|みち|jalan
橋|はし|jembatan
交差点|こうさてん|persimpangan
建物|たてもの|bangunan`,['あれは{term}です。','あれ は {reading} です。','Itu {meaning}.']);
add('18-nature','Alam dan cuaca',`
天気|てんき|cuaca|今日はいい天気です。|きょう は いい てんき です。|Hari ini cuacanya bagus.
雨|あめ|hujan|今日は雨です。|きょう は あめ です。|Hari ini hujan.
雪|ゆき|salju|雪が降っています。|ゆき が ふって います。|Salju sedang turun.
風|かぜ|angin|風が強いです。|かぜ が つよい です。|Anginnya kencang.
晴れ|はれ|cuaca cerah|明日は晴れでしょう。|あした は はれ でしょう。|Besok mungkin cerah.
曇り|くもり|cuaca mendung|今日は曇りです。|きょう は くもり です。|Hari ini mendung.
空|そら|langit|空が青いです。|そら が あおい です。|Langitnya biru.
木|き|pohon|庭に木があります。|にわ に き が あります。|Ada pohon di taman rumah.
花|はな|bunga|花を買いました。|はな を かいました。|Saya membeli bunga.
春|はる|musim semi|春は暖かいです。|はる は あたたかい です。|Musim semi hangat.
夏|なつ|musim panas|夏は暑いです。|なつ は あつい です。|Musim panas terasa panas.
秋|あき|musim gugur|秋は涼しいです。|あき は すずしい です。|Musim gugur sejuk.
冬|ふゆ|musim dingin|冬は寒いです。|ふゆ は さむい です。|Musim dingin terasa dingin.`);
add('18-animals','Hewan',`
犬|いぬ|anjing
猫|ねこ|kucing
鳥|とり|burung
動物|どうぶつ|hewan
ペット|ペット|hewan peliharaan`,['{term}がいます。','{reading} が います。','Ada {meaning}.']);
add('18-colours','Warna sebagai nomina',`
色|いろ|warna|好きな色は何ですか。|すき な いろ は なん です か。|Warna apa yang kamu suka?
赤|あか|warna merah|赤のペンを使います。|あか の ペン を つかいます。|Saya memakai pena berwarna merah.
青|あお|warna biru|青のペンを使います。|あお の ペン を つかいます。|Saya memakai pena berwarna biru.
白|しろ|warna putih|白のシャツを買いました。|しろ の シャツ を かいました。|Saya membeli kemeja berwarna putih.
黒|くろ|warna hitam|黒のシャツを買いました。|くろ の シャツ を かいました。|Saya membeli kemeja berwarna hitam.
茶色|ちゃいろ|warna cokelat|茶色のかばんです。|ちゃいろ の かばん です。|Ini tas berwarna cokelat.
緑|みどり|warna hijau|緑のかばんです。|みどり の かばん です。|Ini tas berwarna hijau.`);
add('18-study','Belajar dan bahasa',`
日本語|にほんご|bahasa Jepang
英語|えいご|bahasa Inggris
漢字|かんじ|huruf kanji
ひらがな|ひらがな|huruf hiragana
カタカナ|カタカナ|huruf katakana
言葉|ことば|kata / bahasa`,['{term}を勉強しています。','{reading} を べんきょう して います。','Saya sedang mempelajari {meaning}.']);
add('18-lesson','Kegiatan dan isi pelajaran',`
授業|じゅぎょう|pelajaran di kelas|九時から授業があります。|くじ から じゅぎょう が あります。|Ada pelajaran mulai pukul sembilan.
宿題|しゅくだい|pekerjaan rumah sekolah|宿題をしました。|しゅくだい を しました。|Saya mengerjakan PR.
作文|さくぶん|karangan|短い作文を書きます。|みじかい さくぶん を かきます。|Saya menulis karangan pendek.
日記|にっき|catatan harian|毎晩、日記を書きます。|まいばん、にっき を かきます。|Setiap malam saya menulis catatan harian.
質問|しつもん|pertanyaan|質問があります。|しつもん が あります。|Saya punya pertanyaan.
問題|もんだい|soal / masalah|この問題は難しいです。|この もんだい は むずかしい です。|Soal ini sulit.
答え|こたえ|jawaban|答えを書いてください。|こたえ を かいて ください。|Tolong tulis jawabannya.
意味|いみ|arti / makna|この言葉の意味は何ですか。|この ことば の いみ は なん です か。|Apa arti kata ini?
文章|ぶんしょう|teks / rangkaian kalimat|短い文章を読みます。|みじかい ぶんしょう を よみます。|Saya membaca teks pendek.
文|ぶん|kalimat|この文を読んでください。|この ぶん を よんで ください。|Tolong baca kalimat ini.
字|じ|huruf / tulisan|字を大きく書きます。|じ を おおきく かきます。|Saya menulis huruf besar-besar.
ページ|ページ|halaman buku|三ページを開けてください。|さんページ を あけて ください。|Tolong buka halaman tiga.
テスト|テスト|tes|明日テストがあります。|あした テスト が あります。|Besok ada tes.
クラス|クラス|kelas / kelompok belajar|私のクラスは十人です。|わたし の クラス は じゅうにん です。|Kelas saya terdiri dari sepuluh orang.
番号|ばんごう|nomor|ここに番号を書きます。|ここ に ばんごう を かきます。|Saya menulis nomor di sini.
電話番号|でんわばんごう|nomor telepon|電話番号を教えてください。|でんわばんごう を おしえて ください。|Tolong beri tahu nomor teleponnya.`);
add('18-leisure','Kegiatan santai',`
音楽|おんがく|musik|音楽を聞きます。|おんがく を ききます。|Saya mendengarkan musik.
歌|うた|lagu|日本の歌を歌います。|にほん の うた を うたいます。|Saya menyanyikan lagu Jepang.
映画|えいが|film|友だちと映画を見ます。|ともだち と えいが を みます。|Saya menonton film bersama teman.
ギター|ギター|gitar|兄はギターを弾きます。|あに は ギター を ひきます。|Kakak laki-laki saya bermain gitar.
スポーツ|スポーツ|olahraga|どんなスポーツが好きですか。|どんな スポーツ が すき です か。|Kamu suka olahraga apa?
サッカー|サッカー|sepak bola|公園でサッカーをします。|こうえん で サッカー を します。|Saya bermain sepak bola di taman.
パーティー|パーティー|pesta|土曜日にパーティーがあります。|どようび に パーティー が あります。|Ada pesta pada hari Sabtu.
旅行|りょこう|perjalanan wisata|来月、旅行をします。|らいげつ、りょこう を します。|Bulan depan saya berwisata.
散歩|さんぽ|jalan santai|毎朝、散歩をします。|まいあさ、さんぽ を します。|Setiap pagi saya berjalan santai.
買い物|かいもの|belanja|日曜日に買い物に行きます。|にちようび に かいもの に いきます。|Saya pergi berbelanja pada hari Minggu.
掃除|そうじ|kegiatan bersih-bersih|部屋の掃除をします。|へや の そうじ を します。|Saya membersihkan kamar.
洗濯|せんたく|kegiatan mencuci pakaian|今日は洗濯をします。|きょう は せんたく を します。|Hari ini saya mencuci pakaian.`);
})();
