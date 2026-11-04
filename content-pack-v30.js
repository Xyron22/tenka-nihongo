// Stage 9B-2: original, sentence-by-sentence workplace handoffs.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.kaigo)return;
const items=[
{
 id:'h-13',workplacePack:'9B-2',topic:'meal-count',reportId:'r-13',
 segments:[
  {text:'昼食の食札は、予定の42枚に対して41枚でした。',reading:'ちゅうしょく の しょくさつ は、よてい の よんじゅうにまい に たいして よんじゅういちまい でした。',meaning:'Kartu makan siang berjumlah 41 lembar, sedangkan rencananya 42 lembar.'},
  {text:'担当者に報告し、名簿との照合をお願いしています。',reading:'たんとうしゃ に ほうこく し、めいぼ との しょうごう を おねがい して います。',meaning:'Sudah dilaporkan kepada penanggung jawab dan diminta dicocokkan dengan daftar nama.'},
  {text:'確認は、まだ終わっていません。',reading:'かくにん は、まだ おわって いません。',meaning:'Pengecekannya belum selesai.'}
 ],
 question:'Bagaimana status pengecekan selisih kartu dalam operan ini?',
 choices:['Pengecekan selesai dan 42 lembar sudah tersedia.','Pencocokan dengan daftar nama sudah diminta, tetapi belum selesai.','Jumlah yang diperlukan sudah diubah menjadi 41 lembar.','Nama pemilik kartu yang kurang sudah dipastikan.'],answer:1
},
{
 id:'h-14',workplacePack:'9B-2',topic:'meal-identity',reportId:'r-14',
 segments:[
  {text:'Aさん用のトレーに、別の方の食札が付いていました。',reading:'エーさんよう の トレー に、べつ の かた の しょくさつ が ついて いました。',meaning:'Pada nampan untuk A-san terpasang kartu makan milik orang lain.'},
  {text:'そのトレーは、まだお渡ししていません。',reading:'その トレー は、まだ おわたし して いません。',meaning:'Nampan itu belum diberikan.'},
  {text:'担当者に確認をお願いしています。',reading:'たんとうしゃ に かくにん を おねがい して います。',meaning:'Penanggung jawab sudah diminta melakukan pengecekan.'}
 ],
 question:'Apa yang disampaikan tentang nampan untuk A-san?',
 choices:['Makanannya sudah diberikan kepada A-san.','Nama pada kartu sudah dipastikan benar.','Jenis makanannya sudah diganti sendiri.','Ada perbedaan nama pada kartu dan nampannya belum diberikan.'],answer:3
},
{
 id:'h-15',workplacePack:'9B-2',topic:'linen-stock',reportId:'r-15',
 segments:[
  {text:'清潔なシーツは5枚必要ですが、棚には3枚ありました。',reading:'せいけつな シーツ は ごまい ひつよう ですが、たな には さんまい ありました。',meaning:'Diperlukan 5 lembar seprai bersih, tetapi sebelumnya di rak ada 3 lembar.'},
  {text:'不足していた2枚は、担当者が補充しました。',reading:'ふそく して いた にまい は、たんとうしゃ が ほじゅう しました。',meaning:'Dua lembar yang kurang sudah ditambahkan oleh penanggung jawab.'},
  {text:'現在は5枚そろっています。',reading:'げんざい は ごまい そろって います。',meaning:'Sekarang 5 lembar sudah tersedia lengkap.'}
 ],
 question:'Berapa lembar seprai bersih yang tersedia sekarang?',
 choices:['5 lembar; kekurangan 2 lembar sudah diisi.','3 lembar; pengisian belum dilakukan.','2 lembar; hanya jumlah yang ditambahkan.','7 lembar; jumlah kebutuhan ditambah 2.'],answer:0
},
{
 id:'h-16',workplacePack:'9B-2',topic:'wheelchair-fault',reportId:'r-16',
 segments:[
  {text:'倉庫の車椅子は、ブレーキをかけても右の車輪が動くことを担当者に報告しました。',reading:'そうこ の くるまいす は、ブレーキ を かけても みぎ の しゃりん が うごく こと を たんとうしゃ に ほうこく しました。',meaning:'Sudah dilaporkan bahwa roda kanan kursi roda di gudang tetap bergerak walaupun rem dipasang.'},
  {text:'現在は使用していません。',reading:'げんざい は しよう して いません。',meaning:'Saat ini kursi roda tersebut tidak digunakan.'},
  {text:'点検が終わったという連絡は、まだありません。',reading:'てんけん が おわった という れんらく は、まだ ありません。',meaning:'Belum ada kabar bahwa pemeriksaan alat sudah selesai.'}
 ],
 question:'Apa status kursi roda yang dilaporkan?',
 choices:['Sudah diperbaiki dan kembali digunakan.','Belum dilaporkan kepada siapa pun.','Tidak digunakan; belum ada konfirmasi pemeriksaan selesai.','Penyebab kerusakannya sudah dipastikan.'],answer:2
},
{
 id:'h-17',workplacePack:'9B-2',topic:'call-fault',reportId:'r-17',
 segments:[
  {text:'201号室のナースコールは、ボタンを押しても表示ランプが点きませんでした。',reading:'にひゃくいちごうしつ の ナースコール は、ボタン を おしても ひょうじランプ が つきませんでした。',meaning:'Lampu indikator alat panggil perawat kamar 201 tidak menyala walaupun tombol ditekan.'},
  {text:'看護師に報告し、担当者に確認をお願いしています。',reading:'かんごし に ほうこく し、たんとうしゃ に かくにん を おねがい して います。',meaning:'Sudah dilaporkan kepada perawat dan penanggung jawab diminta mengeceknya.'},
  {text:'原因は、まだ分かっていません。',reading:'げんいん は、まだ わかって いません。',meaning:'Penyebabnya belum diketahui.'}
 ],
 question:'Informasi mana yang benar-benar sudah diketahui?',
 choices:['Listrik seluruh bangsal padam.','Lampu tidak menyala saat tombol ditekan; penyebabnya belum diketahui.','Kabelnya sudah dipastikan putus.','Seluruh alat panggil sudah diperbaiki.'],answer:1
},
{
 id:'h-18',workplacePack:'9B-2',topic:'wet-floor',reportId:'r-18',
 segments:[
  {text:'浴室の前の廊下は、床が濡れていたため、担当者に連絡しました。',reading:'よくしつ の まえ の ろうか は、ゆか が ぬれて いた ため、たんとうしゃ に れんらく しました。',meaning:'Penanggung jawab sudah dihubungi karena lantai koridor depan ruang mandi basah.'},
  {text:'その後、清掃が終わりました。',reading:'そのご、せいそう が おわりました。',meaning:'Setelah itu pembersihan sudah selesai.'},
  {text:'床が乾いたことも確認しました。',reading:'ゆか が かわいた こと も かくにん しました。',meaning:'Lantainya juga sudah dipastikan kering.'}
 ],
 question:'Apa informasi terbaru setelah penanggung jawab dihubungi?',
 choices:['Pembersihan belum dimulai.','Lantai masih dipastikan basah.','Orang yang menumpahkan air sudah diketahui.','Pembersihan selesai dan lantai sudah dipastikan kering.'],answer:3
},
{
 id:'h-19',workplacePack:'9B-2',topic:'storage-location',reportId:'r-19',
 segments:[
  {text:'洗濯ネットは、洗濯室の棚では見つかりませんでした。',reading:'せんたくネット は、せんたくしつ の たな では みつかりませんでした。',meaning:'Kantong jaring cucian tidak ditemukan di rak ruang cuci.'},
  {text:'担当者に確認したところ、リネン室に保管されていると分かりました。',reading:'たんとうしゃ に かくにん した ところ、リネンしつ に ほかん されて いる と わかりました。',meaning:'Setelah bertanya kepada penanggung jawab, diketahui barangnya disimpan di ruang linen.'},
  {text:'そこで、必要な分を受け取りました。',reading:'そこで、ひつような ぶん を うけとりました。',meaning:'Di sana sudah diterima sejumlah yang diperlukan.'}
 ],
 question:'Dalam kasus ini, di mana kantong jaring cucian akhirnya ditemukan?',
 choices:['Di ruang linen.','Di rak ruang cuci yang pertama diperiksa.','Di ruang mandi.','Stoknya dipastikan habis di semua tempat.'],answer:0
},
{
 id:'h-20',workplacePack:'9B-2',topic:'work-progress',reportId:'r-20',
 segments:[
  {text:'タオルの補充は終わっています。',reading:'タオル の ほじゅう は おわって います。',meaning:'Pengisian persediaan handuk sudah selesai.'},
  {text:'枕カバーは枚数を確認しているため、まだ補充していません。',reading:'まくらカバー は まいすう を かくにん して いる ため、まだ ほじゅう して いません。',meaning:'Sarung bantal belum ditambahkan karena jumlahnya sedang diperiksa.'},
  {text:'確認後に補充する予定です。',reading:'かくにんご に ほじゅう する よてい です。',meaning:'Rencananya persediaan akan diisi setelah pengecekan.'}
 ],
 question:'Pekerjaan mana yang sudah selesai, dan mana yang masih direncanakan?',
 choices:['Handuk dan sarung bantal sudah selesai diisi.','Handuk belum diisi, tetapi sarung bantal sudah selesai.','Handuk sudah selesai; sarung bantal akan diisi setelah jumlahnya diperiksa.','Tidak ada pekerjaan yang sudah selesai.'],answer:2
}
];
D.kaigo.handoff=D.kaigo.handoff||[];
const ids=new Set(D.kaigo.handoff.map(h=>h.id));
for(const h of items){
 h.text=h.segments.map(s=>s.text).join('');h.reading=h.segments.map(s=>s.reading).join('');h.meaning=h.segments.map(s=>s.meaning).join(' ');
 if(!ids.has(h.id)){D.kaigo.handoff.push(h);ids.add(h.id)}
}
})();
