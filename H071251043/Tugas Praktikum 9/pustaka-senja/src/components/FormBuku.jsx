"use client";

import { useActionState } from "react";
import Link from "next/link";

const pilihanKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

function kelasInput(adaError) {
  return adaError
    ? "mt-1 w-full rounded-lg border border-red-500 bg-white px-3 py-2 text-gray-900"
    : "mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900";
}

export default function FormBuku({ action, nilaiAwal, labelTombol, hrefBatal }) {
  const [state, formAction, pending] = useActionState(action, {
    errors: {},
    values: nilaiAwal,
  });
  const { errors, values } = state;

  return (
    <form 
    action={formAction}
    noValidate
    className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-blue-950 p-6 shadow-sm"
    >
      {errors.umum && (
        <p className="rounded-lg bg-slate-200 px-4 py-2 text-sm text-red-800">
          {errors.umum}
        </p>
      )}

      <div>
        <label htmlFor="judul" className="block text-sm font-medium text-white-900">
          Judul
          <span className="text-red-600">
            *
          </span>
        </label>

        <input 
        id="judul"
        name="judul"
        type="text"
        defaultValue={values.judul}
        className={kelasInput(errors.judul)}
        />

        {errors.judul && <p className="mt-1 text-sm text-red-600">{errors.judul}</p>}
      </div>

      <div>
        <label 
        htmlFor="penulis"
        className="block text-sm font-medium text-white-900">
          Penulis
          <span className="text-red-600">
            *
          </span>
        </label>

        <input
        id="penulis"
        name="penulis"
        type="text"
        defaultValue={values.penulis}
        className={kelasInput(errors.penulis)}
        />
        
        {errors.penulis && <p className="mt-1 text-sm text-red-600">{errors.penulis}</p>}
      </div>

      <div>
        <label 
        htmlFor="kategori"
        className="block text-sm font-medium text-white-900">
          Kategori
          <span className="text-red-600">
            *
          </span>
        </label>

        <select
        id="kategori"
        name="kategori"
        defaultValue={values.kategori}
        className={kelasInput(errors.kategori)}
        >
          <option 
          value="">
            Pilih kategori
          </option>
          {pilihanKategori.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.kategori && <p className="mt-1 text-sm text-red-600">{errors.kategori}</p>}
      </div>

      <div>
        <label 
        htmlFor="tahun"
        className="block text-sm font-medium text-white-900">
          Tahun terbit
          <span className="text-red-600">
            *
          </span>
        </label>

        <input
        id="tahun"
        name="tahun"
        type="number"
        defaultValue={values.tahun}
        className={kelasInput(errors.tahun)}
        />
        
        {errors.tahun && <p className="mt-1 text-sm text-red-600">{errors.tahun}</p>}
      </div>

      <div>
        <label 
        htmlFor="tersedia"
        className="block text-sm font-medium text-white-900">
          Status Ketersediaan
          <span className="text-red-600">
            *
          </span>
        </label>

        <select
        id="tersedia"
        name="tersedia"
        defaultValue={values.tersedia}
        className={kelasInput(errors.tersedia)}
        >
          <option value="true">
            Tersedia
          </option>

          <option value="false">
            Sedang Dipinjam
          </option>
        </select>

        {errors.tersedia && <p className="mt-1 text-sm text-red-600">{errors.tersedia}</p>}
      </div>

      <div>
        <label 
        htmlFor="sinopsis"
        className="block text-sm font-medium text-white-900">
          Sinopsis
          <span className="text-red-600">
            *
          </span>
        </label>

        <textarea
        id="sinopsis"
        name="sinopsis"
        rows={4}
        defaultValue={values.sinopsis}
        className={kelasInput(errors.sinopsis)}
        />
        
        {errors.sinopsis && <p className="mt-1 text-sm text-red-600">{errors.sinopsis}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-slate-950 px-5 py-2 text-white hover:bg-slate-900 disabled:opacity-60" 
        >
          {pending ? "Menyimpan..." : labelTombol}
        </button>

        <Link href={hrefBatal}  className="text-sm text-white underline">
        Batal
        </Link>
      </div>

    </form>
  );

}