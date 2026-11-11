import { useState } from "react";

function MenuCard({ id, nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article
      className={
        tersedia
          ? "flex flex-col rounded-lg border border-slate-200 bg-white p-4"
          : "flex flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 opacity-70"
      }
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold">{nama}</h3>
        <p className="font-bold text-indigo-900">
          Rp {harga.toLocaleString("id-ID")}
        </p>
      </div>

      {!tersedia && (
        <p className="mt-1 text-sm font-semibold text-red-700">
          Menu sedang habis
        </p>
      )}

      {detailTerbuka && (
        <div className="mt-2 rounded bg-slate-100 p-3 text-sm">
          <p>{deskripsi}</p>
          <p className="mt-1 text-slate-600">Kategori: {kategori}</p>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="rounded border border-indigo-900 px-3 py-1.5 text-sm text-indigo-900 hover:bg-indigo-50"
        >
          {detailTerbuka ? "Tutup detail" : "Lihat detail"}
        </button>
        <button
          type="button"
          disabled={!tersedia}
          onClick={() => onTambah(id, nama, harga)}
          className="ml-auto rounded bg-orange-400 px-4 py-1.5 text-sm font-bold text-indigo-950 hover:bg-orange-300 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
        >
          {tersedia ? "Tambah" : "Habis"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
