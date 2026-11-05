"use client";

import Link from "next/link";

export default function BukuCard({ buku, favorit, onToggleFavorit }) {
  const { id, judul, penulis, kategori, tahun, tersedia } = buku;

  return (
    <div className="flex flex-col rounded-xl border border-amber-200 bg-amber-200 p-5 shadow-sm">
      <span className="text-xs font-semibold uppercase text-amber-700">
        {kategori}
      </span>

      <h2 className="mt-1 text-lg font-bold text-amber-900">{judul}</h2>
      <p className="text-sm text-gray-600">{penulis}</p>
      <p className="text-sm text-gray-500">Terbit {tahun}</p>

      <span
        className={
          tersedia
            ? "mt-3 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
            : "mt-3 w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-red-800"
        }
      >
        {tersedia ? "Tersedia" : "Sedang Dipinjam"}
      </span>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => onToggleFavorit(id)}
          className={
            favorit
              ? "rounded-lg bg-pink-600 px-3 py-1 text-sm text-white"
              : "rounded-lg border border-pink-600 px-3 py-1 text-sm text-pink-600"
          }
        >
          {favorit ? "Favorit" : "Simpan"}
        </button>

        <Link
          href={`/katalog/${id}`}
          className="text-sm font-medium text-amber-900 underline"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}