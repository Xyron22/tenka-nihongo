// Stage 10A-5: original N4 possibility, inference, appearance and characteristic likeness.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N4)return;
const rows=[
{
 id:'n4-g-32',title:'～かもしれない',meaning:'mungkin ～',pattern:'V・いA普通形 + かもしれない／N・なA + かもしれない（sekarang positif: tanpa だ）',
 explanation:'～かもしれない menyatakan suatu kemungkinan tanpa memastikannya sebagai fakta. Bentuk sopannya adalah ～かもしれません. Pembicara masih mengakui ada kemungkinan lain.',
 usage:'Menyampaikan dugaan yang belum pasti, kemungkinan kejadian mendatang atau identitas yang belum dikonfirmasi. Ini bukan pola niat atau jadwal.',
 whenToUse:'Gunakan 降るかもしれません、寒いかもしれません、先生かもしれません、静かかもしれません. Untuk lampau/negatif gunakan bentuk biasa yang sesuai, misalnya 来なかったかもしれません.',
 watchOut:'Tidak ada persentase keyakinan yang tetap untuk semua kalimat. Hindari menganggap dugaan otomatis menjadi kebenaran hanya karena bentuknya sopan. N／なA positif sekarang tidak memakai だ tepat sebelum かもしれない.',
 commonMistake:'先生だかもしれません dan 雨が降りますかもしれません keliru. Gunakan 先生かもしれません dan 雨が降るかもしれません.',
 example:'明日は雨が降るかもしれません。',exampleReading:'あした は あめ が ふる かも しれません。',exampleMeaning:'Besok mungkin akan turun hujan.',
 extraExample:'あの人は新しい先生かもしれません。',extraExampleReading:'あの ひと は あたらしい せんせい かも しれません。',extraExampleMeaning:'Orang itu mungkin guru yang baru.',
 contrast:'～かもしれない menyampaikan kemungkinan yang masih terbuka. ～はずだ menyampaikan perkiraan berdasarkan alasan yang dianggap mendukung. ～予定だ menyampaikan rencana/jadwal, bukan tingkat kemungkinan.',
 quiz:{prompt:'あの人は先生〔　〕。まだ確認していません。',reading:'あの ひと は せんせい〔　〕。まだ かくにんして いません。',context:'Saya belum mengetahui pekerjaannya. Saya hanya ingin mengatakan “mungkin dia guru”, tanpa menetapkan benar atau tidaknya.',choices:['かもしれません','でした','ではありません','ではありませんでした'],answer:0,explanation:'先生かもしれません mempertahankan kemungkinan tanpa memastikan identitasnya. でした menetapkan keadaan lampau; dua bentuk ではありません menegaskan bukan guru, bukan menyatakan kemungkinan guru yang masih terbuka.'}
},
{
 id:'n4-g-33',title:'～はずだ／～はずがない',meaning:'semestinya menurut alasan/bukti ～ / tidak mungkin menurut alasan/bukti ～',pattern:'V・いA普通形 + はず／Nの・なAな + はず + だ／がない',
 explanation:'～はずだ menyampaikan bahwa suatu hal diperkirakan benar berdasarkan alasan, informasi atau keadaan yang diketahui. ～はずがない menyampaikan penilaian bahwa hal itu tidak mungkin sesuai alasan tersebut.',
 usage:'Membandingkan hasil yang diharapkan dengan jadwal atau pengetahuan yang tersedia. Ini adalah perkiraan pembicara dan dapat terbukti keliru jika informasi dasarnya salah atau keadaan berubah.',
 whenToUse:'Gunakan 来るはずです、安いはずです、休みのはずです、静かなはずです. Negatif kuat terhadap kemungkinan dapat memakai 来るはずがありません. Perhatikan bentuk の untuk N dan な untuk なA.',
 watchOut:'はずだ bukan perintah moral atau kewajiban “harus”. Bedakan 来ないはずです, yaitu diperkirakan tidak datang, dari 来るはずがありません, yaitu dinilai tidak mungkin datang. Keduanya bukan bukti mutlak tentang dunia nyata.',
 commonMistake:'休みだはずです dan 静かのはずです keliru pada pola sekarang positif. Gunakan 休みのはずです dan 静かなはずです. Untuk kewajiban gunakan pola kewajiban yang sesuai, bukan mengganti semuanya dengan はず.',
 example:'時刻表では、電車はもうすぐ来るはずです。',exampleReading:'じこくひょう では、でんしゃ は もうすぐ くる はず です。',exampleMeaning:'Menurut jadwal, kereta semestinya segera datang.',
 extraExample:'田中さんは今、海外にいるので、この部屋にいるはずがありません。',extraExampleReading:'たなかさん は いま、かいがい に いる ので、この へや に いる はず が ありません。',extraExampleMeaning:'Karena sekarang Tanaka berada di luar negeri, menurut informasi itu dia tidak mungkin berada di ruangan ini.',
 contrast:'～はずだ adalah dugaan berdasar alasan; ～かもしれない menyatakan kemungkinan lebih terbuka tanpa menetapkan persentase tetap. ～なければならない adalah kewajiban. ～はずがない menyangkal kemungkinan, bukan menyampaikan larangan.',
 quiz:{prompt:'田中さんは今、海外にいます。今ここにいる〔　〕。',reading:'たなかさん は いま、かいがい に います。いま ここ に いる〔　〕。',context:'Informasi yang saya gunakan menyebut Tanaka secara fisik sedang di luar negeri. Saya menyimpulkan ia tidak mungkin sekaligus berada di ruangan saya sekarang.',choices:['はずがありません','予定です','ところです','つもりです'],answer:0,explanation:'いるはずがありません menyangkal kemungkinan berdasarkan informasi lokasi. 予定 adalah rencana, ところ adalah tahap kegiatan, dan つもり adalah niat; ketiganya tidak menyatakan kesimpulan tidak mungkin berada di dua lokasi fisik sekaligus.'}
},
{
 id:'n4-g-34',title:'～そうだ（見た目・兆し）',meaning:'kelihatannya ～ / tampak akan ～',pattern:'Vます tanpa ます + そうだ／いA buang い + そうだ／なA + そうだ',
 explanation:'～そうだ pada unit ini menyampaikan kesan dari penampilan atau tanda yang terlihat, termasuk kejadian yang tampak akan terjadi. Ini berbeda sambungan dan fungsinya dari そうだ untuk menyampaikan kabar yang didengar.',
 usage:'Mengatakan makanan tampak enak sebelum dicicipi, seseorang terlihat gembira, atau hujan tampak akan turun berdasarkan keadaan langit.',
 whenToUse:'Gunakan 降りそうです、おいしそうです、元気そうです. Bentuk yang perlu diperhatikan: いい→よさそう、ない→なさそう. Untuk menerangkan N gunakan そうな: おいしそうなパン. Untuk cara tindakan gunakan そうに: 楽しそうに話す.',
 watchOut:'Jangan memakai そう hanya untuk menyebut fakta yang sudah jelas sebagai pengamatan langsung. Bedakan おいしそうです, yaitu kelihatannya enak, dari おいしいそうです, yaitu kabarnya enak. Unit ini menargetkan penampilan/tanda, bukan laporan kabar.',
 commonMistake:'おいしいそうです tidak menyatakan kesan tampak enak pada pola ini karena い harus dilepas. いいそうです juga bukan bentuk penampilan “tampaknya baik”; gunakan よさそうです.',
 example:'このパンはおいしそうです。',exampleReading:'この ぱん は おいしそう です。',exampleMeaning:'Roti ini kelihatannya enak.',
 extraExample:'雨が降りそうなので、傘を持っていきます。',extraExampleReading:'あめ が ふりそう なので、かさ を もって いきます。',extraExampleMeaning:'Karena tampaknya akan hujan, saya akan membawa payung.',
 contrast:'～そうだ pada unit ini memakai pangkal verba/形容詞 untuk kesan dari tanda. ～ようだ dapat menyimpulkan dari informasi yang diamati; ～らしい dapat menyampaikan dugaan berdasarkan kabar. Laporan kabar ～そうだ mempunyai sambungan berbeda dan tidak dihitung sebagai tujuan unit penampilan ini.',
 quiz:{prompt:'まだ食べていませんが、見た目はとてもおいし〔　〕。',reading:'まだ たべて いません が、みため は とても おいし〔　〕。',context:'Saya belum mencicipi dan belum mendengar penilaian orang. Dari tampilannya saja, makanan tampak enak. Pilih bentuk penampilan.',choices:['そうです','いそうです','くそうです','なそうです'],answer:0,explanation:'おいしい melepas い menjadi おいしそうです untuk penampilan. おいしいそうです mempunyai fungsi laporan kabar yang berbeda, sedangkan konteks hanya menyebut tampilan. おいしくそう／おいしなそう bukan bentuk penampilan positif yang benar.'}
},
{
 id:'n4-g-35',title:'～ようだ／～ような／～ように',meaning:'tampaknya ～ berdasarkan petunjuk / seperti ～',pattern:'V・いA普通形 + ようだ／Nの・なAな + ようだ／Nのような + N／Nのように + V',
 explanation:'～ようだ dapat menyampaikan kesimpulan berdasarkan petunjuk yang diamati atau pengalaman, serta perbandingan “seperti”. Bentuk ような menerangkan kata benda dan ように menerangkan cara atau sifat sesuai susunannya.',
 usage:'Menyimpulkan keadaan dari tanda yang tersedia atau menggambarkan bentuk/cara dengan membandingkannya terhadap sesuatu yang dikenal. Maknanya tetap perlu dibedakan dari tujuan pada ～ように.',
 whenToUse:'Gunakan いないようです untuk kesimpulan, 静かなようです setelah なA, dan 魚のようです setelah N. Untuk perbandingan sebelum N gunakan 魚のような雲; untuk cara tindakan gunakan 鳥のように飛ぶ.',
 watchOut:'Kesimpulan dengan ようだ tetap merupakan penilaian berdasarkan petunjuk, bukan verifikasi otomatis. N memerlukan の dan なA memerlukan な. よう pada pola ini bukan akhiran bentuk kehendak seperti 食べよう.',
 commonMistake:'魚ようです dan 静かのようです keliru. Gunakan 魚のようです dan 静かなようです. Untuk menerangkan kata benda pilih ような, bukan ように.',
 example:'部屋が暗いです。誰もいないようです。',exampleReading:'へや が くらい です。だれも いない よう です。',exampleMeaning:'Kamarnya gelap. Tampaknya tidak ada siapa-siapa.',
 extraExample:'この雲は魚のようです。',extraExampleReading:'この くも は さかな の よう です。',extraExampleMeaning:'Awan ini tampak seperti ikan.',
 contrast:'～ようだ dapat memberi kesimpulan dari petunjuk atau perbandingan. ～みたいだ sering menjadi padanan percakapan yang lebih santai. NのようなN dan NのようにV menerangkan unsur berbeda; ～ようになる menyatakan perubahan kemampuan/kebiasaan, bukan perbandingan ini.',
 quiz:{prompt:'この雲の形は魚〔　〕。',reading:'この くも の かたち は さかな〔　〕。',context:'Bentuk awan menyerupai ikan. Lengkapi perbandingan dengan よう setelah kata benda 魚.',choices:['のようです','ようです','なようです','だようです'],answer:0,explanation:'Kata benda 魚 memakai の sebelum よう: 魚のようです. よう langsung setelah N, な untuk N, dan だよう tidak membentuk pola perbandingan yang benar pada kalimat ini.'}
},
{
 id:'n4-g-36',title:'～みたいだ／～みたいな／～みたいに',meaning:'sepertinya ～ / mirip atau seperti ～（percakapan）',pattern:'V・いA普通形 + みたいだ／N・なA + みたいだ／みたいな + N／みたいに + V・A',
 explanation:'～みたいだ dipakai dalam percakapan untuk menyampaikan dugaan dari keadaan atau kemiripan. Seperti ようだ, bentuknya dapat berubah menjadi みたいな untuk menerangkan N dan みたいに untuk menerangkan cara/sifat.',
 usage:'Menggambarkan sesuatu yang tampaknya terjadi atau membandingkan suatu bentuk/suasana dengan hal lain. Gaya bahasanya lebih santai dan perlu disesuaikan dengan lawan bicara serta jenis tulisan.',
 whenToUse:'Gunakan 閉まったみたいです untuk dugaan, 魚みたいな形 untuk bentuk yang mirip ikan, dan 春みたいに暖かい untuk perbandingan sifat. Setelah N tidak memakai の seperti pada Nのようだ.',
 watchOut:'みたい pada unit ini bukan 見たい yang berarti ingin melihat. みたい tidak berubah menjadi みたく untuk pola perbandingan standar yang dilatih; gunakan みたいに. Dugaan tetap tidak sama dengan kepastian.',
 commonMistake:'魚のみたいな形 dan 春みたいな暖かい mencampur sambungan. Gunakan 魚みたいな形 untuk N dan 春みたいに暖かい untuk sifat 暖かい.',
 example:'電気が消えています。もう店は閉まったみたいです。',exampleReading:'でんき が きえて います。もう みせ は しまった みたい です。',exampleMeaning:'Lampunya padam. Sepertinya tokonya sudah tutup.',
 extraExample:'この雲は魚みたいな形です。',extraExampleReading:'この くも は さかな みたいな かたち です。',extraExampleMeaning:'Awan ini bentuknya seperti ikan.',
 contrast:'魚みたいだ dan 魚のようだ sama-sama dapat menyatakan kemiripan; みたい lebih bercorak percakapan. みたいな menerangkan N, sedangkan みたいに menerangkan cara/sifat. 見たい adalah keinginan melihat dan berbeda pembentukan.',
 quiz:{prompt:'冬なのに、今日は春〔　〕暖かいです。',reading:'ふゆ なのに、きょう は はる〔　〕あたたかい です。',context:'Walaupun musim dingin, hari ini hangat seperti musim semi. Pilih bentuk みたい yang menerangkan sifat 暖かい, bukan kata benda.',choices:['みたいに','みたいな','みたいの','みたいだに'],answer:0,explanation:'春みたいに暖かい memakai に untuk menerangkan sifat hangat. みたいな memerlukan kata benda sesudahnya. みたいの dan みたいだに tidak membentuk perbandingan sifat yang benar pada susunan ini.'}
},
{
 id:'n4-g-37',title:'～らしい（推定・伝聞）',meaning:'katanya / tampaknya menurut informasi ～',pattern:'V・いA普通形 + らしい／N・なA + らしい（sekarang positif: tanpa だ）',
 explanation:'らしい pada unit ini menyampaikan dugaan yang didukung informasi atau kabar yang diterima. Pembicara mempunyai alasan untuk mempercayainya, tetapi tidak menyajikannya sebagai sesuatu yang sudah dipastikan sendiri.',
 usage:'Menceritakan informasi dari percakapan, bacaan atau petunjuk lain. Sumber dapat dijelaskan dengan 友達の話では. Jangan membatasi semua らしい hanya pada informasi yang didengar melalui telinga.',
 whenToUse:'Gunakan できたらしいです、おいしいらしいです、学生らしいです. Untuk bentuk sekarang positif setelah N／なA, tidak ada だ. Makna harus dibaca bersama konteks sumber informasi.',
 watchOut:'学生らしい dapat berarti kabarnya mahasiswa atau bersifat khas mahasiswa dalam penggunaan lain. Konteks sumber informasi pada unit ini menargetkan dugaan status, bukan penilaian sifat khas.',
 commonMistake:'学生だらしいです dan おいしくらしいです keliru pada pola dugaan ini. Gunakan 学生らしいです dan おいしいらしいです. Jangan menganggap らしい otomatis membuktikan kabar tersebut benar.',
 example:'友達の話では、駅の前に新しい店ができたらしいです。',exampleReading:'ともだち の はなし では、えき の まえ に あたらしい みせ が できた らしい です。',exampleMeaning:'Menurut cerita teman, katanya ada toko baru yang sudah dibuka di depan stasiun.',
 extraExample:'あの店のケーキはおいしいらしいです。',extraExampleReading:'あの みせ の けーき は おいしい らしい です。',extraExampleMeaning:'Katanya kue di toko itu enak.',
 contrast:'らしい pada unit ini adalah dugaan berdasarkan informasi. Nらしい pada unit sifat khas menerangkan karakter yang dianggap cocok dengan N. ～ようだ sering menyimpulkan dari petunjuk yang dialami; perbedaan sumber/nuansa tidak boleh diubah menjadi persentase keyakinan yang mutlak.',
 quiz:{prompt:'あの人は学生〔　〕です。友達からそう聞きました。',reading:'あの ひと は がくせい〔　〕です。ともだち から そう ききました。',context:'Teman memberi informasi bahwa orang itu mahasiswa. Saya menyampaikan dugaan status berdasarkan kabar tersebut. Pilih sambungan らしい setelah N.',choices:['らしい','のらしい','ならしい','だらしい'],answer:0,explanation:'学生らしいです menyampaikan kabar/dugaan status dalam konteks ini. N tidak memerlukan の／な／だ tepat sebelum らしい pada pola sekarang positif. Konteks 友達から聞きました membedakannya dari penggunaan sifat khas.'}
},
{
 id:'n4-g-38',title:'Nらしい（特徴）',meaning:'khas ～ / sesuai ciri yang dikenal dari ～',pattern:'N + らしい／Nらしい + N／Nらしく + V',
 explanation:'Nらしい pada unit ini menerangkan sifat atau ciri yang dianggap khas dari orang, musim atau hal tersebut. Bentuk ini berfungsi seperti い形容詞, sehingga らしく dapat menerangkan tindakan.',
 usage:'Menggambarkan cuaca yang terasa sesuai musimnya atau perilaku yang sesuai karakter seseorang yang sudah dikenal. Penilaian tetap mengikuti sudut pandang dan konteks pembicara.',
 whenToUse:'Gunakan 春らしい日 untuk hari yang berciri musim semi, atau 彼女らしい untuk perilaku yang khas dirinya. Sebelum verba, gunakan らしく seperti 自分らしく話す. Negatifnya dapat berupa らしくない.',
 watchOut:'Bentuk ini tidak membuktikan bahwa semua anggota suatu kelompok mempunyai sifat yang sama. 学生らしい juga mempunyai bacaan makna “kabarnya mahasiswa”; cari konteks apakah yang dibicarakan status berdasarkan kabar atau ciri khas.',
 commonMistake:'春らしな日 salah karena らしい berperilaku seperti い形容詞. Gunakan 春らしい日. Untuk menerangkan cara bertindak, jangan memakai 自分らしい話す; gunakan 自分らしく話す.',
 example:'今日は春らしい暖かい日です。',exampleReading:'きょう は はるらしい あたたかい ひ です。',exampleMeaning:'Hari ini hari yang hangat, khas musim semi.',
 extraExample:'みんなを手伝うのは、彼女らしいですね。',extraExampleReading:'みんな を てつだう の は、かのじょらしい です ね。',extraExampleMeaning:'Membantu semua orang itu memang khas dirinya, ya.',
 contrast:'Nらしい di sini menyebut ciri khas, sedangkan dugaan ～らしい menyampaikan informasi yang belum dipastikan. 春みたいな dapat membandingkan sesuatu dengan musim semi; 春らしい menonjolkan ciri yang dianggap khas musim semi. Makna ditentukan konteks, bukan bentuk saja.',
 quiz:{prompt:'「今日は春らしい天気です」の「らしい」は何を表しますか。',reading:'「きょう は はるらしい てんき です」の「らしい」は なに を あらわします か。',context:'Saya menggambarkan cuaca hangat yang terasa khas musim semi. Yang ditanyakan adalah makna らしい pada konteks ciri cuaca tersebut.',choices:['ciri yang khas musim semi','kabar bahwa sekarang pasti musim semi','kemampuan melakukan kegiatan musim semi','larangan melakukan kegiatan musim semi'],answer:0,explanation:'春らしい天気 pada konteks ini menggambarkan ciri yang dianggap khas musim semi. Ini bukan laporan kabar tentang status musim, bukan kemampuan, dan bukan larangan. Bentuk yang sama perlu ditafsirkan dari konteksnya.'}
},
{
 id:'n4-g-39',title:'～に見える／～く見える',meaning:'tampak / terlihat seperti atau bersifat ～',pattern:'N・なA + に見える／いA buang い + く見える',
 explanation:'～に見える／～く見える menyampaikan kesan visual tentang sifat atau identitas yang terlihat. Kesan itu dapat berbeda dari keadaan sebenarnya; pembicara menjelaskan bagaimana sesuatu tampak dari penglihatannya.',
 usage:'Membandingkan tampilan ruangan dengan foto, mengatakan seseorang tampak bugar, atau menyebut kesan bahwa seseorang terlihat seperti mahasiswa.',
 whenToUse:'N: 学生に見える. なA: 元気に見える. いA: 広い→広く見える、若い→若く見える. Bentuk sopannya 見えます.',
 watchOut:'見える tanpa pelengkap sifat juga dapat berarti terlihat dalam arti masuk jangkauan pandangan, misalnya 山が見えます. Unit ini menargetkan kesan visual, bukan kemampuan sengaja melihat atau bukti tentang identitas sebenarnya.',
 commonMistake:'広いに見えます dan 元気な見えます keliru. Gunakan 広く見えます dan 元気に見えます. Jangan menyimpulkan status seseorang pasti benar hanya dari 学生に見えます.',
 example:'この部屋は写真で見るより広く見えます。',exampleReading:'この へや は しゃしん で みる より ひろく みえます。',exampleMeaning:'Ruangan ini terlihat lebih luas daripada ketika dilihat pada foto.',
 extraExample:'あの人は学生に見えます。',extraExampleReading:'あの ひと は がくせい に みえます。',extraExampleMeaning:'Orang itu terlihat seperti mahasiswa.',
 contrast:'～に／く見える menyoroti kesan visual. ～らしい pada pola dugaan dapat memakai informasi yang diterima; ～ようだ mempunyai cakupan kesimpulan/perbandingan yang lebih luas. 山が見える berarti gunung terlihat, sedangkan 若く見える berarti tampak muda.',
 quiz:{prompt:'この部屋は、実際の広さよりも広〔　〕見えます。',reading:'この へや は、じっさい の ひろさ よりも ひろ〔　〕みえます。',context:'Saya membahas kesan visual: ruangan tampak lebih luas daripada ukuran sebenarnya. Lengkapi perubahan い形容詞 広い sebelum 見えます.',choices:['く','いに','な','の'],answer:0,explanation:'広い melepas い dan menjadi 広く見えます. に dipakai setelah N／なA, bukan sebagai 広いに. な／の juga tidak membentuk pelengkap kesan visual dari 広い pada susunan ini.'}
}
];
for(const row of rows){const old=D.jlpt.N4.grammar.find(g=>g.id===row.id);if(old)Object.assign(old,row);else D.jlpt.N4.grammar.push(row);}
})();
