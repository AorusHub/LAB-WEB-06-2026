import Link from "next/link";
import pool from "@/lib/db";
import { parseId } from "@/lib/helpers";
import FormBuku from "@/components/FormBuku";
import { updateBuku } from "../../actions";

export const dynamic = "force-dynamic";

export default async function EditBuku({ params }) {
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
          Tidak ada buku dengan id &quot;{id}&quot; yang bisa diedit
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

  const nilaiAwal = {
    judul: buku.judul,
    penulis: buku.penulis,
    kategori: buku.kategori,
    tahun: String(buku.tahun),
    tersedia: String(buku.tersedia),
    sinopsis: buku.sinopsis,
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-200">
        Edit Buku
      </h1>

      <FormBuku 
      action={updateBuku.bind(null, buku.id)}
      nilaiAwal={nilaiAwal}
      labelTombol={"Simpan Perubahan"}
      hrefBatal={`/katalog/${buku.id}`}
      />
    </div>
  );
}