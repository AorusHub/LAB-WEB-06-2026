"use client";

import {useState} from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
    const [kategoriAktif, setKategoriAktif] = useState("Semua");
    const bukuTampil = kategoriAktif === "Semua" ? dataBuku : dataBuku.filter((buku) => buku.kategori === kategoriAktif);
    return (
        <div className="space-y-8">
            <section className="bg-kertas p-8 shadow-[8px_8px_0_rgba(63,75,83,0.3)]">
                <h1 className="font-judul text-5xl font-semibold tracking-wider">Katalog Buku</h1>
                <div className="my-4 h-0.5 w-16 bg-tinta"/>
                <p className="max-w-xl text-tinta/80">Pilihlah buku yang anda suka di koleksi kami. Lalu buka detail buku untuk
                    membaca sinopsisnya.
                </p>

                <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter kategori"> {daftarKategori.map((kategori) => (
                    <button
                        key={kategori}
                        type="button"
                        onClick={() => setKategoriAktif(kategori)}
                        aria-pressed={kategoriAktif === kategori}
                        className={`border-2 border-tinta px-4 py-1.5 text-sm transition-colors ${
                            kategoriAktif === kategori
                            ? "bg-tinta text-kertas"
                            : "hover:bg-gurun/40"
                        }`}
                        >
                            {kategori}
                        </button>
                    ))}
                </div>
            </section>
            <p className="text-sm text-kertas">Menampilkan {bukuTampil.length} buku</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {bukuTampil.map((buku) => (
                    <BukuCard
                        key={buku.id}
                        judul={buku.judul}
                        penulis={buku.penulis}
                        kategori={buku.kategori}
                        tahun={buku.tahun}
                        tersedia={buku.tersedia}
                    />
                ))}
            </div>
        </div>
    );
}
