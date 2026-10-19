// Stage 8A-10.1: original vocabulary examples grouped by everyday context.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N5)return;
const V=D.jlpt.N5.vocab;
// Complete the kana on the existing 75 cards without changing their IDs.
const readings=`あさごはん を たべます。
みず を のみます。
きょう は しごと を やすみます。
まいあさ ろくじ に おきます。
びょういん へ いきます。
テレビ を みます。
ゆっくり はなして ください。
にほんご を まいにち ききます。
ほん を よみます。
なまえ を かいて ください。
スーパー で やさい を かいます。
えき で まって います。
ごじ に いえ へ かえります。
へや に はいります。
しちじ に いえ を でます。
ここ に すわって ください。
ゆっくり たって ください。
じゅういちじ に ねます。
びょういん で はたらいて います。
まいにち にほんご を べんきょう します。
すこし わかります。
えき で ともだち に あいます。
あした、ともだち が きます。
この ペン を つかって ください。
ばんごはん を つくります。
ふくおか に すんで います。
かばん を もちます。
やすみ を とります。
ごみ を わけます。
まど を あけて ください。
ドア を しめます。
でんしゃ に のります。
つぎ の えき で おります。
つくえ の うえ に ほん が あります。
へや に ひと が います。
なまえ を かいて ください。
やすみ の ひ に ともだち と あいます。
あさ、コーヒー を のみます。
ひる に ごはん を たべます。
よる は はやく ねます。
きょう は しごと です。
あした は やすみ です。
きのう、スーパー へ いきました。
はちじはん から しごと です。
びょういん で はたらいて います。
いえ に かえります。
まいあさ、がっこう へ いきます。
せんせい と はなします。
あの ひと は がくせい です。
ちち は かいしゃ で はたらいて います。
えき で ともだち を まちます。
でんしゃ で しごと へ いきます。
くるま で スーパー へ いきます。
この みせ は くじ に あきます。
おかね を はらいます。
すこし じかん が あります。
まいにち、にほんご を べんきょう します。
いま、ごはん を たべて います。
いっしょ に かえりましょう。
にほんご が すこし わかります。
えき の まえ で まちます。
くるま の うしろ に ひと が います。
ひだり に まがって ください。
みぎ に えき が あります。
そと で ともだち を まちます。
えき の ひがし に みせ が あります。
にし に おおきい やま が あります。
みなみ に こうえん が あります。
ほっかいどう は にほん の きた に あります。
これ は なん です か。
ごぜん はちじ に いえ を でます。
ごご さんじ に やすみます。
まいあさ ろくじ に おきます。
まいばん、にほんご を べんきょう します。
らいしゅう、ともだち に あいます。`.split('\n');
readings.forEach((reading,i)=>{const v=V.find(v=>v.id===`n5-v-${String(i+1).padStart(2,'0')}`);if(v)v.exampleReading=reading});
// Each pack has a stable ID namespace. Repeated loading is idempotent.
function addRows(pack,category,text,frame){
 const rows=text.trim().split('\n');
 rows.forEach((line,i)=>{
  const [term,reading,meaning,example,exampleReading,exampleMeaning]=line.split('|');
  const id=`n5-v-${pack}-${String(i+1).padStart(3,'0')}`;
  if(V.some(v=>v.id===id||v.term===term&&v.reading===reading))return;
  const format=s=>s.replaceAll('{term}',term).replaceAll('{reading}',reading).replaceAll('{meaning}',meaning);
  const f=frame||[];
  V.push({id,term,reading,meaning,category,example:example||format(f[0]),exampleReading:exampleReading||format(f[1]),exampleMeaning:exampleMeaning||format(f[2])});
 });
}
window.TENKA_N5_CONTENT={addRows};
addRows('17-family','Keluarga',`
父|ちち|ayah
母|はは|ibu
兄|あに|kakak laki-laki
姉|あね|kakak perempuan
弟|おとうと|adik laki-laki
妹|いもうと|adik perempuan
両親|りょうしん|kedua orang tua
家族|かぞく|keluarga
兄弟|きょうだい|saudara kandung
妻|つま|istri
夫|おっと|suami`,['私の{term}は元気です。','わたし の {reading} は げんき です。','{meaning} saya sehat.']);
addRows('17-people','Orang dan sapaan',`
お父さん|おとうさん|ayah Anda
お母さん|おかあさん|ibu Anda
お兄さん|おにいさん|kakak laki-laki Anda
お姉さん|おねえさん|kakak perempuan Anda
奥さん|おくさん|istri Anda
ご主人|ごしゅじん|suami Anda`,['{term}はお元気ですか。','{reading} は おげんき です か。','Apakah {meaning} sehat?']);
addRows('17-person','Identitas dan orang',`
人|ひと|orang|あの人は先生です。|あの ひと は せんせい です。|Orang itu guru.
男|おとこ|laki-laki|あの人は男の人です。|あの ひと は おとこ の ひと です。|Orang itu laki-laki.
女|おんな|perempuan|あの人は女の人です。|あの ひと は おんな の ひと です。|Orang itu perempuan.
男の子|おとこのこ|anak laki-laki|男の子が遊んでいます。|おとこのこ が あそんで います。|Seorang anak laki-laki sedang bermain.
女の子|おんなのこ|anak perempuan|女の子が本を読んでいます。|おんなのこ が ほん を よんで います。|Seorang anak perempuan sedang membaca buku.
子ども|こども|anak|子どもはもう寝ました。|こども は もう ねました。|Anaknya sudah tidur.
大人|おとな|orang dewasa|この切符は大人用です。|この きっぷ は おとなよう です。|Tiket ini untuk orang dewasa.
おじいさん|おじいさん|kakek / bapak lanjut usia|おじいさんと話しました。|おじいさん と はなしました。|Saya berbicara dengan kakek.
おばあさん|おばあさん|nenek / ibu lanjut usia|おばあさんは元気です。|おばあさん は げんき です。|Nenek sehat.
おじさん|おじさん|paman / bapak paruh baya|おじさんに会いました。|おじさん に あいました。|Saya bertemu paman.
おばさん|おばさん|bibi / ibu paruh baya|おばさんは店にいます。|おばさん は みせ に います。|Bibi ada di toko.
医者|いしゃ|dokter|あの人は医者です。|あの ひと は いしゃ です。|Orang itu dokter.
会社員|かいしゃいん|karyawan perusahaan|父は会社員です。|ちち は かいしゃいん です。|Ayah saya karyawan perusahaan.
生徒|せいと|murid|生徒が教室にいます。|せいと が きょうしつ に います。|Ada murid di ruang kelas.
留学生|りゅうがくせい|pelajar dari luar negeri|私は留学生です。|わたし は りゅうがくせい です。|Saya pelajar dari luar negeri.
外国人|がいこくじん|orang asing|外国人の友だちがいます。|がいこくじん の ともだち が います。|Saya punya teman orang asing.`);
addRows('17-body','Tubuh',`
頭|あたま|kepala
目|め|mata
耳|みみ|telinga
口|くち|mulut
歯|は|gigi
鼻|はな|hidung
手|て|tangan
足|あし|kaki
お腹|おなか|perut
体|からだ|tubuh
顔|かお|wajah`,['{term}が痛いです。','{reading} が いたい です。','{meaning} saya terasa sakit.']);
addRows('17-food','Makanan dan minuman',`
ご飯|ごはん|nasi / makanan
パン|パン|roti
卵|たまご|telur
魚|さかな|ikan
肉|にく|daging
牛肉|ぎゅうにく|daging sapi
鶏肉|とりにく|daging ayam
野菜|やさい|sayuran
果物|くだもの|buah-buahan
りんご|りんご|apel
みかん|みかん|jeruk mandarin
バナナ|バナナ|pisang
牛乳|ぎゅうにゅう|susu sapi
お茶|おちゃ|teh
紅茶|こうちゃ|teh hitam
コーヒー|コーヒー|kopi
ジュース|ジュース|minuman jus
砂糖|さとう|gula
塩|しお|garam
醤油|しょうゆ|kecap asin Jepang
バター|バター|mentega
お菓子|おかし|camilan / kue
飴|あめ|permen
ケーキ|ケーキ|kue cake
お弁当|おべんとう|bekal makanan
おにぎり|おにぎり|nasi kepal
豆腐|とうふ|tahu
ラーメン|ラーメン|mi ramen`,['{term}を買いました。','{reading} を かいました。','Saya membeli {meaning}.']);
addRows('17-food-special','Makan sehari-hari',`
水|みず|air|水を飲みます。|みず を のみます。|Saya minum air.
豚肉|ぶたにく|daging babi|私は豚肉を食べません。|わたし は ぶたにく を たべません。|Saya tidak makan daging babi.
お酒|おさけ|minuman beralkohol|私はお酒を飲みません。|わたし は おさけ を のみません。|Saya tidak minum alkohol.
朝ご飯|あさごはん|sarapan|朝ご飯を食べました。|あさごはん を たべました。|Saya sudah sarapan.
昼ご飯|ひるごはん|makan siang|昼ご飯は何ですか。|ひるごはん は なん です か。|Makan siangnya apa?
晩ご飯|ばんごはん|makan malam|晩ご飯を作ります。|ばんごはん を つくります。|Saya memasak makan malam.
食べ物|たべもの|makanan|好きな食べ物は何ですか。|すき な たべもの は なん です か。|Apa makanan kesukaanmu?
飲み物|のみもの|minuman|飲み物はお茶にします。|のみもの は おちゃ に します。|Untuk minuman saya memilih teh.
料理|りょうり|masakan / memasak|日本の料理を作ります。|にほん の りょうり を つくります。|Saya membuat masakan Jepang.
寿司|すし|sushi|これは寿司です。|これ は すし です。|Ini sushi.`);
addRows('17-places','Tempat',`
公園|こうえん|taman
郵便局|ゆうびんきょく|kantor pos
銀行|ぎんこう|bank
交番|こうばん|pos polisi
図書館|としょかん|perpustakaan
映画館|えいがかん|bioskop
大学|だいがく|universitas
大使館|たいしかん|kedutaan
食堂|しょくどう|kantin
レストラン|レストラン|restoran
喫茶店|きっさてん|kedai kopi
ホテル|ホテル|hotel
デパート|デパート|toserba
スーパー|スーパー|supermarket
本屋|ほんや|toko buku
八百屋|やおや|toko sayur
パン屋|パンや|toko roti
アパート|アパート|apartemen
バス停|バスてい|halte bus
プール|プール|kolam renang`,['駅の近くに{term}があります。','えき の ちかく に {reading} が あります。','Ada {meaning} di dekat stasiun.']);
addRows('17-home','Bagian rumah dan fasilitas',`
部屋|へや|kamar
台所|だいどころ|dapur
玄関|げんかん|pintu masuk rumah
庭|にわ|taman rumah
トイレ|トイレ|toilet
お手洗い|おてあらい|kamar kecil
お風呂|おふろ|bak mandi / kamar mandi
階段|かいだん|tangga
廊下|ろうか|lorong
エレベーター|エレベーター|lift
教室|きょうしつ|ruang kelas
入口|いりぐち|pintu masuk
出口|でぐち|pintu keluar`,['{term}はどこですか。','{reading} は どこ です か。','Di mana {meaning}?']);
addRows('17-items','Barang dan alat belajar',`
本|ほん|buku
辞書|じしょ|kamus
ノート|ノート|buku catatan
鉛筆|えんぴつ|pensil
ペン|ペン|pena
ボールペン|ボールペン|pulpen
消しゴム|けしゴム|penghapus
紙|かみ|kertas
手紙|てがみ|surat
葉書|はがき|kartu pos
切手|きって|prangko
新聞|しんぶん|koran
雑誌|ざっし|majalah
地図|ちず|peta
写真|しゃしん|foto
絵|え|gambar
時計|とけい|jam / arloji
鍵|かぎ|kunci
眼鏡|めがね|kacamata
箱|はこ|kotak
かばん|かばん|tas
財布|さいふ|dompet
傘|かさ|payung
コップ|コップ|gelas
茶碗|ちゃわん|mangkuk nasi
お皿|おさら|piring
箸|はし|sumpit
スプーン|スプーン|sendok
フォーク|フォーク|garpu
ナイフ|ナイフ|pisau
花瓶|かびん|vas bunga
ハンカチ|ハンカチ|sapu tangan
石鹸|せっけん|sabun`,['机の上に{term}があります。','つくえ の うえ に {reading} が あります。','Ada {meaning} di atas meja.']);
// Remove an N4 conditional from a legacy N5 example while preserving its lesson.
const advice=D.jlpt.N5.grammar.find(g=>g.id==='n5-g-51');
if(advice)Object.assign(advice,{example:'疲れていますから、早く寝たほうがいいです。',exampleReading:'つかれて います から、はやく ねた ほう が いい です。',exampleMeaning:'Karena kamu lelah, sebaiknya tidur lebih cepat.'});
})();
