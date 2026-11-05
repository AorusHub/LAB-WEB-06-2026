"use client";

import { useState } from "react";
import dataBuku from "@/data/DataBuku";
import BukuCard from "@/components/BukuCard";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri", "Favorit"];

export default function Katalog() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [favoritIds, setFavoritIds] = useState([]);
  const [sembunyikanDipinjam, setSembunyikanDipinjam] = useState(false);

  function toggleFavorit(id) {
    setFavoritIds((sebelumnya) =>
      sebelumnya.includes(id)
        ? sebelumnya.filter((item) => item !== id)
        : [...sebelumnya, id]
    );
  }

  let bukuTampil;
  if (kategoriAktif === "Semua") {
    bukuTampil = dataBuku;
  } else if (kategoriAktif === "Favorit") {
    bukuTampil = dataBuku.filter((buku) => favoritIds.includes(buku.id));
  } else {
    bukuTampil = dataBuku.filter((buku) => buku.kategori === kategoriAktif);
  }

  if (sembunyikanDipinjam) {
    bukuTampil = bukuTampil.filter((buku) => buku.tersedia);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-200">Katalog Buku</h1>

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

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={sembunyikanDipinjam}
          onClick={() => setSembunyikanDipinjam((sebelumnya) => !sebelumnya)}
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
                : "absolute left-0.5 top-0.5 h-5 w-5 translate-x-0 rounded-full bg-white transition-transform"
            }
          />
        </button>
        <span className="text-sm text-amber-100">
          Sembunyikan buku yang sedang dipinjam:{" "}
          <strong>{sembunyikanDipinjam ? "ON" : "OFF"}</strong>
        </span>
      </div>

      <p className="mt-4 text-sm text-amber-100">
        Menampilkan {bukuTampil.length} buku dari {dataBuku.length}
      </p>

      {bukuTampil.length === 0 && (
        <p className="mt-6 text-gray-400">
          {kategoriAktif === "Favorit"
            ? "Belum ada buku favorit. Tekan tombol Simpan pada kartu buku yang kamu sukai."
            : "Tidak ada buku yang cocok dengan filter saat ini."}
        </p>
      )}

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