# Kedai Kopi Senja

Halaman pemesanan mandiri untuk Kedai Kopi Senja (Tugas Praktikum 7: React Hooks, State & Props).

## Menjalankan

```bash
npm install
npm run dev
```

Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Teknologi

React (Vite), function component, `useState`, Tailwind CSS v3.

## Pembagian state

| State | Letak | Alasan |
|---|---|---|
| `kategoriAktif` | App | Dipakai Navbar (tombol), MenuList (filter), dan Footer |
| `pesanan` | App | Dipakai Navbar, RingkasanPesanan, dan FormPesan |
| `detailTerbuka` | MenuCard | Dimiliki tiap kartu, tidak memengaruhi menu lain |
| `nama`, `meja`, `errors`, `terkirim` | FormPesan | Hanya dipakai form |

Jumlah item dan total harga dihitung dari `pesanan` di App (bukan state tambahan),
sehingga angka di Navbar dan ringkasan selalu sama.
