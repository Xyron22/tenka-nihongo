// Stage 8A-10.4: numbers, calendar, clock time and counters in context.
(()=>{
'use strict';
if(!window.TENKA_DATA?.jlpt?.N5||!window.TENKA_N5_CONTENT)return;
const add=window.TENKA_N5_CONTENT.addRows;
add('20-number','Angka',`
零|れい|nol|零はゼロとも読みます。|れい は ゼロ とも よみます。|零 juga dibaca zero.
ゼロ|ゼロ|nol (zero)|答えはゼロです。|こたえ は ゼロ です。|Jawabannya nol.
一|いち|satu|一から十まで数えます。|いち から じゅう まで かぞえます。|Saya menghitung dari satu sampai sepuluh.
二|に|dua|二と三で五です。|に と さん で ご です。|Dua ditambah tiga adalah lima.
三|さん|tiga|三は二より大きいです。|さん は に より おおきい です。|Tiga lebih besar daripada dua.
四|よん・し|empat|四時に帰ります。|よじ に かえります。|Saya pulang pukul empat.
五|ご|lima|五時に起きます。|ごじ に おきます。|Saya bangun pukul lima.
六|ろく|enam|六時に食べます。|ろくじ に たべます。|Saya makan pukul enam.
七|なな・しち|tujuh|七時に出ます。|しちじ に でます。|Saya berangkat pukul tujuh.
八|はち|delapan|八時に始まります。|はちじ に はじまります。|Mulai pukul delapan.
九|きゅう・く|sembilan|九時に来てください。|くじ に きて ください。|Tolong datang pukul sembilan.
十|じゅう|sepuluh|十時に寝ます。|じゅうじ に ねます。|Saya tidur pukul sepuluh.
百|ひゃく|seratus|これは百円です。|これ は ひゃくえん です。|Ini seratus yen.
千|せん|seribu|これは千円です。|これ は せんえん です。|Ini seribu yen.
万|まん|sepuluh ribu|これは一万円です。|これ は いちまんえん です。|Ini sepuluh ribu yen.
半分|はんぶん|setengah bagian|パンを半分食べました。|パン を はんぶん たべました。|Saya makan setengah rotinya.
半|はん|setengah / lewat tiga puluh menit|今は三時半です。|いま は さんじはん です。|Sekarang pukul tiga lewat tiga puluh menit.
一番|いちばん|paling / nomor satu|これが一番好きです。|これ が いちばん すき です。|Saya paling suka yang ini.`);
add('20-calendar','Hari dalam minggu',`
月曜日|げつようび|Senin
火曜日|かようび|Selasa
水曜日|すいようび|Rabu
木曜日|もくようび|Kamis
金曜日|きんようび|Jumat
土曜日|どようび|Sabtu
日曜日|にちようび|Minggu`,['{term}に友だちと会います。','{reading} に ともだち と あいます。','Saya bertemu teman pada hari {meaning}.']);
add('20-month','Bulan dalam kalender',`
一月|いちがつ|Januari
二月|にがつ|Februari
三月|さんがつ|Maret
四月|しがつ|April
五月|ごがつ|Mei
六月|ろくがつ|Juni
七月|しちがつ|Juli
八月|はちがつ|Agustus
九月|くがつ|September
十月|じゅうがつ|Oktober
十一月|じゅういちがつ|November
十二月|じゅうにがつ|Desember`,['{term}に旅行をします。','{reading} に りょこう を します。','Saya berwisata pada bulan {meaning}.']);
add('20-date','Tanggal dengan bacaan khusus',`
一日|ついたち|tanggal satu
二日|ふつか|tanggal dua / dua hari
三日|みっか|tanggal tiga / tiga hari
四日|よっか|tanggal empat / empat hari
五日|いつか|tanggal lima / lima hari
六日|むいか|tanggal enam / enam hari
七日|なのか|tanggal tujuh / tujuh hari
八日|ようか|tanggal delapan / delapan hari
九日|ここのか|tanggal sembilan / sembilan hari
十日|とおか|tanggal sepuluh / sepuluh hari
十四日|じゅうよっか|tanggal empat belas / empat belas hari
二十日|はつか|tanggal dua puluh / dua puluh hari
二十四日|にじゅうよっか|tanggal dua puluh empat / dua puluh empat hari`,['今日は{term}です。','きょう は {reading} です。','Hari ini {meaning}.']);
add('20-tsu','Penghitung benda umum',`
一つ|ひとつ|satu buah
二つ|ふたつ|dua buah
三つ|みっつ|tiga buah
四つ|よっつ|empat buah
五つ|いつつ|lima buah
六つ|むっつ|enam buah
七つ|ななつ|tujuh buah
八つ|やっつ|delapan buah
九つ|ここのつ|sembilan buah
十|とお|sepuluh buah (bacaan penghitung umum)`,['りんごを{term}買いました。','りんご を {reading} かいました。','Saya membeli {meaning} apel.']);
add('20-counter','Penghitung dalam konteks',`
一人|ひとり|satu orang / sendiri|一人で行きます。|ひとり で いきます。|Saya pergi sendiri.
二人|ふたり|dua orang|友だちと二人で行きます。|ともだち と ふたり で いきます。|Saya pergi berdua dengan teman.
三人|さんにん|tiga orang|学生が三人います。|がくせい が さんにん います。|Ada tiga siswa.
一枚|いちまい|satu lembar (benda tipis)|紙を一枚ください。|かみ を いちまい ください。|Tolong beri saya selembar kertas.
一本|いっぽん|satu batang / botol (benda panjang)|ペンを一本買います。|ペン を いっぽん かいます。|Saya membeli sebatang pena.
三本|さんぼん|tiga batang / botol|ペンを三本買います。|ペン を さんぼん かいます。|Saya membeli tiga batang pena.
六本|ろっぽん|enam batang / botol|水を六本買います。|みず を ろっぽん かいます。|Saya membeli enam botol air.
一匹|いっぴき|satu ekor (hewan kecil)|猫が一匹います。|ねこ が いっぴき います。|Ada seekor kucing.
三匹|さんびき|tiga ekor (hewan kecil)|犬が三匹います。|いぬ が さんびき います。|Ada tiga ekor anjing.
一杯|いっぱい|satu cangkir / gelas penuh|お茶を一杯飲みます。|おちゃ を いっぱい のみます。|Saya minum secangkir teh.
三杯|さんばい|tiga cangkir / gelas penuh|お茶を三杯飲みました。|おちゃ を さんばい のみました。|Saya minum tiga cangkir teh.
一冊|いっさつ|satu jilid buku|本を一冊読みました。|ほん を いっさつ よみました。|Saya membaca sebuah buku.
一台|いちだい|satu unit kendaraan / mesin|車が一台あります。|くるま が いちだい あります。|Ada satu mobil.
一個|いっこ|satu buah (benda kecil)|卵を一個食べます。|たまご を いっこ たべます。|Saya makan sebutir telur.
一回|いっかい|satu kali|もう一回言ってください。|もう いっかい いって ください。|Tolong katakan sekali lagi.
一階|いっかい|lantai satu|トイレは一階です。|トイレ は いっかい です。|Toiletnya di lantai satu.
三階|さんがい|lantai tiga|教室は三階です。|きょうしつ は さんがい です。|Ruang kelasnya di lantai tiga.
一歳|いっさい|umur satu tahun|弟は一歳です。|おとうと は いっさい です。|Adik laki-laki saya berumur satu tahun.
二十歳|はたち|umur dua puluh tahun|兄は二十歳です。|あに は はたち です。|Kakak laki-laki saya berumur dua puluh tahun.
一度|いちど|satu kali (derajat juga dapat memakai 度)|もう一度お願いします。|もう いちど おねがいします。|Tolong sekali lagi.
一日|いちにち|satu hari / sepanjang hari|昨日は一日休みました。|きのう は いちにち やすみました。|Kemarin saya beristirahat sepanjang hari.
一週間|いっしゅうかん|satu minggu|一週間、日本にいます。|いっしゅうかん、にほん に います。|Saya berada di Jepang selama satu minggu.
一か月|いっかげつ|satu bulan durasi|一か月、日本語を勉強しました。|いっかげつ、にほんご を べんきょう しました。|Saya belajar bahasa Jepang selama satu bulan.
一年|いちねん|satu tahun|日本に一年住みました。|にほん に いちねん すみました。|Saya tinggal di Jepang selama satu tahun.
一時間|いちじかん|satu jam durasi|一時間歩きます。|いちじかん あるきます。|Saya berjalan selama satu jam.
十分|じゅっぷん|sepuluh menit|十分休みましょう。|じゅっぷん やすみましょう。|Mari istirahat selama sepuluh menit.
四時|よじ|pukul empat|四時に会いましょう。|よじ に あいましょう。|Mari bertemu pukul empat.
七時|しちじ|pukul tujuh|七時に起きます。|しちじ に おきます。|Saya bangun pukul tujuh.
九時|くじ|pukul sembilan|九時に来ます。|くじ に きます。|Saya datang pukul sembilan.
三時ごろ|さんじごろ|sekitar pukul tiga|三時ごろ帰ります。|さんじごろ かえります。|Saya pulang sekitar pukul tiga.
千円|せんえん|seribu yen|この本は千円です。|この ほん は せんえん です。|Buku ini harganya seribu yen.
メートル|メートル|meter|ここから百メートルです。|ここ から ひゃくメートル です。|Dari sini seratus meter.
キロメートル|キロメートル|kilometer|駅まで二キロメートルです。|えき まで にキロメートル です。|Ke stasiun dua kilometer.
キログラム|キログラム|kilogram|肉を一キログラム買います。|にく を いちキログラム かいます。|Saya membeli satu kilogram daging.
グラム|グラム|gram|肉を百グラムください。|にく を ひゃくグラム ください。|Tolong beri saya seratus gram daging.`);
add('20-relative','Waktu relatif',`
今朝|けさ|pagi tadi / pagi ini|今朝、パンを食べました。|けさ、パン を たべました。|Pagi tadi saya makan roti.
今晩|こんばん|malam ini|今晩、勉強します。|こんばん、べんきょう します。|Malam ini saya belajar.
夕方|ゆうがた|sore menjelang petang|夕方、買い物に行きます。|ゆうがた、かいもの に いきます。|Saya pergi berbelanja sore nanti.
昨夜|ゆうべ|tadi malam|昨夜はよく寝ました。|ゆうべ は よく ねました。|Tadi malam saya tidur nyenyak.
一昨日|おととい|kemarin lusa|一昨日、友だちに会いました。|おととい、ともだち に あいました。|Kemarin lusa saya bertemu teman.
明後日|あさって|lusa|明後日は休みです。|あさって は やすみ です。|Lusa saya libur.
今週|こんしゅう|minggu ini|今週は忙しいです。|こんしゅう は いそがしい です。|Minggu ini saya sibuk.
先週|せんしゅう|minggu lalu|先週、映画を見ました。|せんしゅう、えいが を みました。|Minggu lalu saya menonton film.
今月|こんげつ|bulan ini|今月は忙しいです。|こんげつ は いそがしい です。|Bulan ini saya sibuk.
先月|せんげつ|bulan lalu|先月、靴を買いました。|せんげつ、くつ を かいました。|Bulan lalu saya membeli sepatu.
来月|らいげつ|bulan depan|来月、旅行に行きます。|らいげつ、りょこう に いきます。|Bulan depan saya berwisata.
今年|ことし|tahun ini|今年、日本に来ました。|ことし、にほん に きました。|Tahun ini saya datang ke Jepang.
去年|きょねん|tahun lalu|去年、学校を休みませんでした。|きょねん、がっこう を やすみませんでした。|Tahun lalu saya tidak absen sekolah.
来年|らいねん|tahun depan|来年、国に帰ります。|らいねん、くに に かえります。|Tahun depan saya pulang ke negara asal.
一昨年|おととし|dua tahun lalu|一昨年、このかばんを買いました。|おととし、この かばん を かいました。|Saya membeli tas ini dua tahun lalu.
再来年|さらいねん|dua tahun mendatang|再来年、大学に入ります。|さらいねん、だいがく に はいります。|Dua tahun mendatang saya masuk universitas.
毎週|まいしゅう|setiap minggu|毎週、図書館に行きます。|まいしゅう、としょかん に いきます。|Setiap minggu saya pergi ke perpustakaan.
毎月|まいつき・まいげつ|setiap bulan|毎月、本を買います。|まいつき、ほん を かいます。|Setiap bulan saya membeli buku.
毎年|まいとし・まいねん|setiap tahun|毎年、海に行きます。|まいとし、うみ に いきます。|Setiap tahun saya pergi ke laut.
誕生日|たんじょうび|hari ulang tahun|誕生日はいつですか。|たんじょうび は いつ です か。|Kapan hari ulang tahunmu?
休み|やすみ|libur / istirahat|明日は休みです。|あした は やすみ です。|Besok saya libur.
夏休み|なつやすみ|liburan musim panas|夏休みに海に行きました。|なつやすみ に うみ に いきました。|Saat liburan musim panas saya pergi ke laut.
時|とき|saat / waktu|子どもの時、よく遊びました。|こども の とき、よく あそびました。|Saat masih anak-anak saya sering bermain.
年|とし|tahun / umur|年が違います。|とし が ちがいます。|Umurnya berbeda.`);
})();
