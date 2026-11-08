# Tugas 03 — Crypto Currency Ticker (MSIM4401)

Aplikasi web mobile yang menampilkan data **cryptocurrency** dari API publik
[Coinlore](https://api.coinlore.net/api/tickers/). Dibangun dengan **Vue 3 +
TypeScript + Vite**, dengan tampilan yang dibungkus di dalam **frame ponsel
(iPhone-style)** sehingga terlihat seperti demo aplikasi mobile sungguhan.

> **Tugas Praktikum MSIM4401** — Pemrograman Berbasis Perangkat Bergerak

---

## 👤 Identitas

| Field         | Nilai                      |
| ------------- | -------------------------- |
| **Nama**      | Ananda Purnomo             |
| **NIM**       | 052714972                  |
| **Program Studi** | Sistem Informasi       |
| **Fakultas**  | Sains dan Teknologi        |

---

## ✨ Fitur

- Menampilkan daftar cryptocurrency dengan atribut **Rank**, **Name**,
  **Symbol**, dan **Price (USD)**.
- Data diambil secara *real-time* dari API Coinlore.
- Tombol **Refresh** untuk memuat ulang data (dengan ikon berputar saat *loading*).
- Tampilan dibungkus dalam **frame ponsel** bergaya iPhone (bezel + sudut membulat),
  tanpa *scrollbar* yang terlihat.
- Desain modern dan responsif (menggunakan Flexbox + *media query*).

---

## 🛠️ Teknologi

- [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Coinlore API](https://www.coinlore.com/cryptocurrency-data-api)

---

## 📁 Struktur Proyek

```
tugas-3-pemrograman-berbasis-perangkat-bergerak/
├── index.html                     # Entry HTML (dengan meta viewport)
├── package.json                   # Dependensi & script
├── tsconfig.json                  # Konfigurasi TypeScript
├── vite.config.ts                 # Konfigurasi Vite + plugin Vue
└── src/
    ├── main.ts                    # Entry point aplikasi
    ├── App.vue                    # Komponen utama (header, refresh, daftar)
    ├── api.ts                     # Service fetch data ke API Coinlore
    ├── types.ts                   # Interface Coin & TickersResponse
    ├── style.css                  # Style global
    ├── vue-shims.d.ts             # Deklarasi tipe untuk file .vue
    └── components/
        ├── CoinItem.vue           # Komponen satu baris data crypto
        └── PhoneFrame.vue         # Frame ponsel (iPhone-style)
```

### Penjelasan Singkat File

- **`main.ts`** — membuat instance Vue dan *mount* komponen `App.vue`.
- **`App.vue`** — komponen utama: menyimpan state (`coins`, `loading`, `error`),
  memanggil API saat *mount* dan saat tombol Refresh ditekan, lalu merender daftar.
- **`api.ts`** — fungsi `fetchTickers()` melakukan `fetch` ke endpoint API dan
  mengembalikan data bertipe `TickersResponse`.
- **`types.ts`** — mendefinisikan tipe data `Coin` dan `TickersResponse` agar
  *type-safe*.
- **`CoinItem.vue`** — menampilkan satu baris data (Rank, Name + Symbol, Price USD).
- **`PhoneFrame.vue`** — membungkus konten aplikasi di dalam frame ponsel.
- **`vue-shims.d.ts`** — deklarasi agar TypeScript mengenali file `.vue`.

---

## 🚀 Cara Menjalankan

### Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- npm (sudah termasuk dalam Node.js)

### Langkah-langkah

```bash
# 1. Clone repository
git clone <url-repository>
cd tugas-3-pemrograman-berbasis-perangkat-bergerak

# 2. Install dependensi
npm install

# 3. Jalankan server development
npm run dev
```

Setelah perintah `npm run dev`, buka URL yang muncul di terminal
(biasanya `http://localhost:5173`).

### Build Produksi

```bash
npm run build     # menghasilkan folder dist/
npm run preview   # pratinjau hasil build
```

---

## 📡 Sumber Data (API)

```
GET https://api.coinlore.net/api/tickers/
```

Endpoint ini mengembalikan daftar cryptocurrency dalam format JSON dengan
atribut di antaranya:

| Field       | Keterangan                      |
| ----------- | ------------------------------- |
| `rank`      | Peringkat cryptocurrency        |
| `name`      | Nama cryptocurrency             |
| `symbol`    | Simbol (misal BTC, ETH, USDT)   |
| `price_usd` | Harga dalam USD                 |

---

## 📝 Catatan

- Aplikasi ini dibuat untuk keperluan tugas praktikum, dengan fokus pada
  tampilan *mobile-first*.
- Data yang ditampilkan dibatasi 100 cryptocurrency pertama (dapat diubah
  melalui parameter `limit` di `src/api.ts`).
