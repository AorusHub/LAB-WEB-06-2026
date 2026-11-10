
"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";

const daftarKategori = [
  "Semua",
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
  "Favorit",
];

export default function KatalogClient({ daftarBuku, data }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [favoritIds, setFavoritIds] = useState([]);
  const [sembunyikanDipinjam, setSembunyikanDipinjam] = useState(false);

  // State pengurutan
  const [urut, setUrut] = useState(false);

  function toggleFavorit(id) {
    setFavoritIds((sebelumnya) =>
      sebelumnya.includes(id)
        ? sebelumnya.filter((item) => item !== id)
        : [...sebelumnya, id]
    );
  }

  // Filter berdasarkan kategori
  let bukuTampil = [...daftarBuku];

  if (kategoriAktif === "Favorit") {
    bukuTampil = bukuTampil.filter((buku) =>
      favoritIds.includes(buku.id)
    );
  } else if (kategoriAktif !== "Semua") {
    bukuTampil = bukuTampil.filter(
      (buku) => buku.kategori === kategoriAktif
    );
  }

  // Filter buku yang sedang dipinjam
  if (sembunyikanDipinjam) {
    bukuTampil = bukuTampil.filter((buku) => buku.tersedia);
  }

  // Pengurutan judul A-Z
  if (urut) {
    bukuTampil.sort((a, b) =>
      a.judul.localeCompare(b.judul, "id", {
        sensitivity: "base",
      })
    );
  }

  return (
    <div>
      {/* Filter kategori */}
      <div className="mt-4 flex flex-wrap gap-2">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setKategoriAktif(kategori)}
            className={
              kategoriAktif === kategori
                ? "rounded-full bg-amber-900 px-4 py-1 text-sm text-white"
                : "rounded-full border border-amber-900 px-4 py-1 text-sm text-amber-900 hover:bg-amber-200"
            }
          >
            {kategori}
          </button>
        ))}
      </div>

      {/* Filter status peminjaman */}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={sembunyikanDipinjam}
          onClick={() =>
            setSembunyikanDipinjam((sebelumnya) => !sebelumnya)
          }
          className={
            sembunyikanDipinjam
              ? "relative h-6 w-11 rounded-full bg-green-600 transition-colors"
              : "relative h-6 w-11 rounded-full bg-gray-400 transition-colors"
          }
        >
          <span
            className={
              sembunyikanDipinjam
                ? "absolute left-0.5 top-0.5 h-5 w-5 translate-x-5 rounded-full bg-white transition-transform"
                : "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform"
            }
          />
        </button>

        <span className="text-sm text-amber-100">
          Sembunyikan buku yang sedang dipinjam:{" "}
          <strong>
            {sembunyikanDipinjam ? "ON" : "OFF"}
          </strong>
        </span>
      </div>

      {/* Tombol pengurutan */}
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setUrut((sebelumnya) => !sebelumnya)}
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
        >
          {urut ? "↩ Urutan Default" : "↑ Urutkan Judul A-Z"}
        </button>
      </div>

      {/* Informasi jumlah buku */}
      <p className="mt-4 text-sm text-amber-100">
        Menampilkan {bukuTampil.length} buku dari {daftarBuku.length}
      </p>

      {/* Pesan jika buku kosong */}
      {bukuTampil.length === 0 && (
        <p className="mt-6 text-gray-400">
          {kategoriAktif === "Favorit"
            ? "Belum ada buku favorit. Tekan tombol Simpan pada kartu buku yang kamu sukai."
            : "Tidak ada buku yang cocok dengan filter saat ini."}
        </p>
      )}

      {/* Daftar kartu buku */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTampil.map((buku) => (
          <BukuCard
            key={buku.id}
            buku={buku}
            favorit={favoritIds.includes(buku.id)}
            onToggleFavorit={toggleFavorit}
          />
        ))}
      </div>
    </div>
  );
}
