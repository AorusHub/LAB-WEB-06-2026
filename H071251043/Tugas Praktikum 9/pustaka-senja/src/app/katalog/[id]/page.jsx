import Link from "next/link";
import pool from "@/lib/db";
import { parseId } from "@/lib/helpers";
import TombolHapus from "@/components/TombolHapus";

export const dynamic = "force-dynamic";

export default async function Detail({ params }) {
  const { id } = await params;
  const idAngka = parseId(id);

  let buku = null;
  if (idAngka !== null) {
    const hasil = await pool.query("SELECT * FROM buku WHERE id = $1", [idAngka]);
    buku = hasil.rows[0];
  }

  if (!buku) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">

        <h1 className="text-2xl font-bold text-red-800">
          Buku tidak ditemukan
        </h1>

        <p className="mt-2 text-red-700">
          Tidak ada buku dengan id &quot;{id}&quot; di koleksi Pustaka Senja.
        </p>

        <Link
          href="/katalog"
          className="mt-4 inline-block rounded-lg bg-amber-900 px-5 py-2 text-white hover:bg-amber-800"
        >
          Kembali ke Katalog
        </Link>

      </div>
    );
  }

  const { rows: rekomendasi} = await pool.query (
    "SELECT id, judul, penulis, tahun FROM buku WHERE kategori = $1 AND id <> $2 ORDER BY id",
    [buku.kategori, buku.id]
  );

  return (
    <div>
      <div className="rounded-xl border border-amber-200 bg-slate-900 p-8 shadow-sm">

        <div className="flex">
          <span className="text-xs font-semibold uppercase text-amber-700">
            {buku.kategori}
          </span>

          <div className="m-0 p-0 mb-auto ml-auto flex items-center gap-4 w-10 right-1">
            <Link
            href={`/katalog/${buku.id}/edit`}
            className="text-sm ml-auto font-medium text-blue-800 hover:translate-y-1"
            >
              ✏️
            </Link>
          </div>
        </div>

        <h1 className="mt-1 text-3xl font-bold text-amber-600">{buku.judul}</h1>
        <p className="mt-1 text-gray-400">oleh {buku.penulis}</p>
        <p className="text-sm text-gray-400">Terbit tahun {buku.tahun}</p>

        <span
          className={
            buku.tersedia
              ? "mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
              : "mt-4 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
          }
        >
          {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
        </span>

        <h2 className="mt-6 text-lg font-semibold text-amber-700">Sinopsis</h2>
        <p className="mt-2 leading-relaxed text-gray-400">{buku.sinopsis}</p>

        <div className="m-0 p-0 flex gap-7">
          <Link
          href="/katalog"
          className="mt-6 inline-block rounded-lg border border-amber-900 px-5 py-2 text-amber-700 hover:bg-slate-300"
          >
            Kembali ke Katalog
          </Link>

          <TombolHapus
          className="translate-y-3 hover:translate-y-4" 
          id={id} 
          judul={buku.judul}/>
        </div>

      </div>

      {rekomendasi.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-amber-200">
            Buku lain di kategori {buku.kategori}
          </h2>

          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {rekomendasi.map((item) => (
              <Link
                key={item.id}
                href={`/katalog/${item.id}`}
                className="rounded-xl border border-amber-200 bg-slate-300 p-4 hover:bg-slate-200"
              >
                <p className="font-semibold text-amber-900">{item.judul}</p>
                <p className="text-sm text-gray-600">{item.penulis}</p>
                <p className="text-xs text-gray-500">Terbit {item.tahun}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}