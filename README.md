# TENKA 日本語 🇯🇵

**TENKA** adalah PWA belajar bahasa Jepang yang dibuat untuk pembelajaran mandiri: JLPT N5–N1, flashcard, bunpou, quiz 30 detik, listening, SRS, kakijun, dan kosakata Kaigo/keperawatan termasuk latihan 申し送り.

> 今日も少しずつ。 — Sedikit demi sedikit setiap hari.

## Status

Kurikulum **N5 CLOSED** pada branch `stage-8a1-n5-kanji`: Bunpou, Kotoba, Kanji/Bushu dan alur latihan telah melewati audit coverage serta regresi. PR #16 tetap **draft**; perubahan ini belum di-merge atau di-deploy ke situs publik. Level lain dan Kaigo berkembang secara terpisah.

Rincian scope, sumber, hasil audit dan batas rilis ada di [laporan N5 CLOSED](docs/N5_CLOSED.md) dan [checkpoint bertahap](docs/N5_CHECKPOINTS.md). Penutupan kurikulum tidak mengubah progres belajar pengguna. Inventaris materi mengikuti audit silang rujukan; jumlahnya tidak dinyatakan sebagai daftar resmi JLPT.

## Fitur yang sudah ada

- JLPT N5, N4, N3, N2, N1 terpisah
- Flashcard kanji dan kosakata dengan animasi flip
- Bacaan kana, arti Indonesia, dan contoh kalimat; romaji pada kartu yang menyediakannya
- Bunpou N5 dengan fungsi, kapan dipakai, kesalahan umum, dua contoh, dan contrast
- Quiz pilihan ganda dengan timer 30 detik
- Listening kosakata N5 dengan bacaan dan konteks kana untuk homofon
- Pembahasan jawaban, contoh dan penjelasan setelah quiz N5
- Sound effect jawaban + voice Jepang untuk awal/akhir sesi
- Progress lokal, streak, best score, dan jumlah quiz
- SRS dasar / review card
- Daily Mission
- Kaigo・Keperawatan tanpa level JLPT
- Kosakata medis & latihan 申し送り
- Bushu, komponen visual dan mnemonic sebagai alat bantu ingatan
- Kakijun N5 dari KanjiVG terverifikasi serta canvas latihan menulis
- PWA / Add to Home Screen di iPhone

## Menjalankan secara lokal

Aplikasi perlu HTTP(S). Jalankan dari folder project:

```bash
python3 -m http.server 8080
```

Kemudian buka `http://localhost:8080`.

## iPhone

Setelah aplikasi di-host melalui HTTPS:

1. Buka TENKA di Safari.
2. Tekan **Share**.
3. Pilih **Add to Home Screen**.
4. TENKA dapat dibuka sebagai aplikasi standalone.

## Penyimpanan progres

Progres memakai `localStorage` (`tenka-progress`), jadi belum perlu akun maupun server. Progres tetap berada di perangkat/browser tempat belajar.

## Struktur konten

Data dasar ada di `data.js`, dilengkapi content pack yang dimuat berurutan oleh `index.html`. Coverage N5 dan sumber Kanji ada di `docs/`. ID materi lama dipertahankan agar progres tetap terbaca.

## Kakijun

Seluruh Kanji N5 memakai goresan berurutan KanjiVG dan metadata Bushu/jumlah goresan KANJIDIC2. Lihat [sumber dan lisensi](docs/N5_KANJI_SOURCES.md). Canvas untuk latihan bebas dan tidak menilai kebenaran tulisan.

## Audio

Pengucapan materi memakai speech synthesis perangkat. SFX quiz dan VOICEVOX Nemo untuk awal/akhir sesi disiapkan oleh pipeline build; sistem audio memiliki fallback runtime.

## Pemeriksaan

Jalankan `bash scripts/check-local.sh` untuk syntax dan seluruh regresi. Tes mengikuti manifest runtime terkini, memeriksa kualitas konten/coverage, semua target quiz N5, sesi dan progres lama. CI juga memvalidasi aset/build. Browser QA opsional tersedia di `tests/n5-browser-smoke.cjs`; petunjuknya ada di laporan N5 CLOSED.
