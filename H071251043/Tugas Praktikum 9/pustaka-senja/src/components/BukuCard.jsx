"use client";

import Link from "next/link";
import TombolHapus from "./TombolHapus";


export default function BukuCard({ buku, favorit, onToggleFavorit }) {
  const { id, judul, penulis, kategori, tahun, tersedia } = buku;

  return (
    <div className="relative flex flex-col rounded-xl border border-slate-200 bg-slate-900 p-5 shadow-sm hover:bg-slate-800">

      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold uppercase text-amber-700">
          {kategori}
        </span>

        <div className="relative z-10 ml-auto">
          <Link
            href={`/katalog/${id}/edit`}
            aria-label={`Edit ${judul}`}
            className="inline-block text-sm font-medium hover:translate-y-1"
          >
            ✏️
          </Link>
        </div>
      </div>

      <h2 className="mt-1 text-lg font-bold text-amber-400">{judul}</h2>
      <p className="text-sm text-gray-400">{penulis}</p>
      <p className="text-sm text-gray-400">Terbit {tahun}</p>

      <span
        className={
          tersedia
            ? "mt-3 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800"
            : "mt-3 w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-red-800"
        }
      >
        {tersedia ? "Tersedia" : "Sedang Dipinjam"}
      </span>

      <div className="mt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onToggleFavorit(id)}
          className={
            favorit
              ? "relative z-10 rounded-lg bg-pink-600 px-3 py-1 text-sm text-white"
              : "relative z-10 rounded-lg border border-pink-600 px-3 py-1 text-sm text-pink-600"
          }
        >
          {favorit ? "Favorit" : "Simpan"}
        </button>

        <Link
          href={`/katalog/${id}`}
          className="text-sm font-medium text-amber-400 underline after:absolute after:inset-0"
        >
        </Link>

        <div className="relative z-10">
          <TombolHapus id={id} judul={judul} />
        </div>
      </div>
    </div>
  );
}