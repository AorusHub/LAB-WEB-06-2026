"use client";

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import gambarBuku from "@/data/gambarBuku";

const warnaSampul = {
    Teknologi: "bg-awan",
    Fiksi: "bg-gobelin", 
    PengembanganDiri: "bg-gurun",
};

function BukuCard({id, judul, penulis, kategori, tahun, tersedia}) {
    const [favorit, setFavorit] = useState(false);

    return (
        <article className="flex bg-kertas shadow-[5px_5px_0_rgba(63,75,83,0.3)]">
            <div aria-hidden="true" className={`w-3 shrink-0 ${warnaSampul[kategori] ?? "bg-gurun"}`}/>
            <div className="flex flex-1 flex-col">
                <div className="relative h-64 w-full border-b-2 border-tinta/10 bg-white">
                    <Image 
                        src={`/gallery/${gambarBuku[id]}`}
                        alt={`Sampul buku ${judul}`}
                        fill
                        sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-3"
                    />
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <span className={`"mb-3 w-fit px-2 py-0.5 text-xs font-medium ${
                            tersedia
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-rose-100 text-rose-800"
                        }`}
                    >
                        {tersedia ? "Tersedia" : "Sedang Dipinjam"}
                    </span>

                    <h3 className="font-judul text-2xl font-semibold leading-tight">{judul}</h3>
                    <p className="mt-1 text-sm text-tinta/80">{penulis}</p>
                    <p className="mt-3 text-xs text-tinta/60">
                        {kategori}, terbit {tahun}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5">
                        <button 
                            onClick={() => setFavorit(!favorit)}
                            className={`border-2 border-tinta text-sm px-3 py-1.5 transition ${
                                favorit ? "bg-surya font-semibold" : "hover:bg-gurun/40"
                            }`}>
                                {favorit ? "♥ Tersimpan" : "♡ Simpan"}
                            </button>
                            <Link href={`/katalog/${id}`} className="text-sm font-medium text-tinta hover:underline">
                                Lihat Detail &rarr;
                            </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default BukuCard;