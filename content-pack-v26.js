// N5 practice policy: conservative semantic exclusions and contextual kana audio.
(()=>{
'use strict';
const D=window.TENKA_DATA;if(!D?.jlpt?.N5)return;
const groups=[
  /pelajar|mahasiswa|murid|siswa/,/pegawai|karyawan|pekerja|staf/,/guru|pengajar/,/pria|laki.laki/,/wanita|perempuan/,
  /ayah|bapak|papa/,/ibu|bunda|mama/,/kakak|abang/,/adik/,/orang.tua|ayah|ibu/,/teman|kawan|sahabat/,
  /rumah|kediaman/,/ruang|kamar/,/toilet|wc|kamar.kecil/,/kantor|perusahaan/,/restoran|rumah.makan/,/toko|warung/,
  /buku|bacaan/,/pesawat|kapal.terbang/,/kereta|trem/,/sepeda|sepedah/,/mobil|kendaraan/,
  /baik|bagus|oke|boleh|cukup|lumayan/,/cantik|indah|elok/,/mudah|gampang/,/sulit|susah/,/pandai|pintar|mahir|terampil/,
  /cepat|lekas|kencang/,/lambat|pelan/,/besar|luas/,/kecil|sempit/,/sedikit|beberapa/,
  /mengerti|paham|memahami|tahu|mengetahui/,/berbicara|berkata|mengatakan|ucapan/,/menyebut|mengucapkan/,/melihat|menonton/,
  /memakai|menggunakan|mengenakan/,/belajar|mempelajari/,/bekerja|pekerjaan|kerja/,/mulai|memulai/,/selesai|akhir|berakhir/,
  /istirahat|libur/,/senang|gembira|suka/,/benci|tidak.suka/,/ingat|mengingat|hafal/,/makan|santap|nasi/,
  /minum|air/,/pulang|kembali/,/memberi|memberikan|menerima/,/membawa|memegang|memiliki|punya/,/pintu|gerbang/,
  /hadiah|kado/,/kemarin|kemaren/,/besok|esok/,/malam|petang/,/minggu|pekan/,/pukul|jam|waktu/,
  /berjalan|jalan|melangkah/,/memanggil|menamai|nama/,/minta|memohon|tolong/,/maaf|permisi/,/terima.kasih|makasih/
];
const stop=new Set(['untuk','dengan','dalam','pada','dari','atau','yang','secara','bentuk','kata','sebagai','sesuai','lebih','sangat','sesuatu']);
const umbrellaTerms=new Set(['人','方','動物','食べ物','飲み物','果物','物','もの','所','ところ','服','事','こと','品物']);
const cache=new Map();
function features(c){
  const key=c.id+'|'+c.meaning;if(cache.has(key))return cache.get(key);
  const text=String(c.meaning||'').toLowerCase().replace(/\([^)]*\)/g,' ').replace(/[^a-z0-9]+/g,' ').trim();
  const value={text,words:text.split(' ').filter(w=>w.length>=4&&!stop.has(w)),groups:groups.flatMap((g,i)=>g.test(text)?[i]:[])};
  cache.set(key,value);return value;
}
function allowed(target,candidate){
  const targetTerm=target.term||target.kanji,candidateTerm=candidate.term||candidate.kanji;
  if(target.id===candidate.id||umbrellaTerms.has(candidateTerm)||targetTerm&&targetTerm===candidateTerm)return false;
  const a=features(target),b=features(candidate);if(!a.text||!b.text)return false;
  if(a.text===b.text||a.text.length>=3&&b.text.includes(a.text)||b.text.length>=3&&a.text.includes(b.text))return false;
  if(a.words.some(w=>b.text.includes(w))||b.words.some(w=>a.text.includes(w))||a.groups.some(g=>b.groups.includes(g)))return false;
  if(umbrellaTerms.has(targetTerm)&&target.category&&target.category===candidate.category)return false;
  return true;
}
function primaryReading(c){return String(c.reading||c.term||c.kanji||'').split('・')[0].trim()}
function voice(c){return c.exampleReading?primaryReading(c)+'。'+c.exampleReading:(c.term||c.kanji||c.reading)}
window.TENKA_N5_QUIZ={allowed,primaryReading,voice};
})();
