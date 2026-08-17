# TENKA 日本語 🇯🇵

**TENKA** adalah PWA belajar bahasa Jepang yang dibuat untuk pembelajaran mandiri: JLPT N5–N1, flashcard, bunpou, quiz 30 detik, listening, SRS, kakijun, dan kosakata Kaigo/keperawatan termasuk latihan 申し送り.

> 今日も少しずつ。 — Sedikit demi sedikit setiap hari.

## Status

Ini adalah **V0.1 / fondasi V1**. UI dan sistem utama sudah berjalan, tetapi materi N5–N1 masih berupa data awal/demo dan akan diperluas bertahap. Fokus konten pertama adalah **N5 + Kaigo**.

## Fitur yang sudah ada

- JLPT N5, N4, N3, N2, N1 terpisah
- Flashcard kanji dan kosakata dengan animasi flip
- Furigana/bacaan, romaji, arti Indonesia, dan contoh kalimat
- Bunpou per level dengan penjelasan Indonesia
- Quiz pilihan ganda dengan timer 30 detik
- Listening quiz
- Sound effect benar/salah + voice Jepang + Meme Mode
- Progress lokal, streak, best score, dan jumlah quiz
- SRS dasar / review card
- Daily Mission
- Kaigo・Keperawatan tanpa level JLPT
- Kosakata medis & latihan 申し送り
- Kakijun / stroke-order demo dan canvas latihan menulis kanji
- PWA / Add to Home Screen di iPhone

## Menjalankan secara lokal

Service worker/PWA perlu HTTP(S). Jalankan dari folder project:

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

V0.1 menggunakan `localStorage`, jadi belum perlu akun maupun server. Cloud sync dapat ditambahkan pada versi berikutnya.

## Struktur konten

Materi utama ada di `data.js`. Dengan begitu database kosakata, kanji, bunpou, dan Kaigo dapat diperluas tanpa membongkar UI utama.

## Kakijun

Beberapa kanji awal memiliki stroke path demo. Untuk materi penuh akan digunakan dataset stroke-order yang terverifikasi, dengan atribusi/lisensi yang sesuai.

## Audio

Voice Jepang menggunakan speech synthesis dari perangkat. Sound effect dibuat secara programatik dan tidak mengambil klip audio berhak cipta dari anime.
