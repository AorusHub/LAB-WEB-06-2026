import Link from "next/link";
import pool from "@/lib/db";
import KatalogClient from "@/components/KatalogClient";

export const dynamic = "force-dynamic";

export default async function Katalog() {
  const { rows } = await pool.query("SELECT * FROM buku ORDER BY id");

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-bold text-amber-200">Katalog Buku</h1>
        <Link
        href="/katalog/tambah"
        className="rounded-lg bg-amber-900 px-4 py-2 text-sm text-white hover:bg-amber-800">
          + Tambah Buku
        </Link>
      </div>

      <KatalogClient daftarBuku={rows}/>
    </div>

  );
}