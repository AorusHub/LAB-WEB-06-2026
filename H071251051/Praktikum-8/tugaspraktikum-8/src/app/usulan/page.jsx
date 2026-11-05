"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const kelasInput =
    "mt-1 w-full border-2 border-tinta/40 bg-white/60 px-3 py-2 focus:border-tinta focus:outline-none";

export default function UsulanPage() {
    const [nama, setNama] = useState("");
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [alasan, setAlasan] = useState("");
    const [peringatan, setPeringatan] = useState("");
    const [konfirmasi, setKonfirmasi] = useState("");
    const [daftarUsulan, setDaftarUsulan] = useState([]);

function handleSubmit(e) {
    e.preventDefault();

    if (!nama.trim() || !judul.trim() || !kategori || !alasan.trim()) {
        setKonfirmasi("");
        setPeringatan("Semua kolom wajib diisi sebelum usulan dikirim.");
        return;
    }

    const usulanBaru = {
        id: Date.now(),
        nama: nama.trim(),
        judul: judul.trim(),
        kategori,
        alasan: alasan.trim(),
    };

        setDaftarUsulan([usulanBaru, ...daftarUsulan]);
        setPeringatan("");
        setKonfirmasi(`Usulan "${usulanBaru.judul}" berhasil dikirim. Terima kasih!`);
        setNama("");
        setJudul("");
        setKategori("");
        setAlasan("");
    }

    return (
        <div className="space-y-8">
            <section className="bg-kertas p-8 shadow-[8px_8px_0_rgba(63,75,83,0.3)]">
                <h1 className="font-judul text-5xl font-semibold tracking-wider">
                    Usulan Buku
                </h1>
                <div className="my-4 h-0.5 w-16 bg-tinta" />
                <p className="max-w-xl text-tinta/80">
                    Ada buku yang ingin kamu baca di Pustaka Senja? Tulis judulnya di sini.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4" noValidate>
                    <div>
                        <label htmlFor="nama" className="text-sm font-medium">Nama pengusul</label>
                        <input id="nama" type="text" value={nama} onChange={(e) => setNama(e.target.value)}
                            className={kelasInput}
                        />
                    </div>

                    <div>
                        <label htmlFor="judul" className="text-sm font-medium">Judul buku yang diusulkan</label>
                        <input id="judul" type="text" value={judul} onChange={(e) => setJudul(e.target.value)}
                            className={kelasInput}
                        />
                    </div>

                    <div>
                        <label htmlFor="kategori" className="text-sm font-medium">Kategori</label>
                        <select id="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)}
                            className={kelasInput}
                        >
                            <option value="">Pilih kategori</option>
                            {daftarKategori.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="alasan" className="text-sm font-medium">Alasan usulan</label>
                        <textarea
                        id="alasan"
                            rows={4}
                            value={alasan}
                            onChange={(e) => setAlasan(e.target.value)}
                            className={kelasInput}
                        />
                    </div>

                    {peringatan && (
                        <p role="alert" className="bg-rose-100 px-3 py-2 text-sm text-rose-800">
                            {peringatan}
                        </p>
                    )}
                    {konfirmasi && (
                        <p role="status" className="bg-emerald-100 px-3 py-2 text-sm text-emerald-800">
                            {konfirmasi}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="bg-tinta px-5 py-2.5 text-sm font-medium text-kertas hover:bg-tinta/85"
                    >
                        Kirim usulan
                    </button>
                </form>
            </section>

            <section aria-labelledby="judul-usulan">
                <h2 id="judul-usulan" className="font-judul text-3xl font-semibold tracking-wider text-kertas">
                    Usulan sesi ini
                </h2>
                <div className="mb-5 mt-2 h-0.5 w-16 bg-kertas"/>

                {daftarUsulan.length === 0 ? (
                    <p className="text-kertas">Belum ada usulan. Kirim usulan pertamamu lewat form di atas.</p>
                ) : (
                    <ul className="grid gap-5 sm:grid-cols-2">
                        {daftarUsulan.map((usulan) => (
                            <li key={usulan.id} className="bg-kertas p-5 shadow-[5px_5px_0_rgba(63,75,83,0.3)]">
                                <p className="font-judul text-2xl font-semibold leading-tight">{usulan.judul}</p>
                                <p className="mt-1 text-xs text-tinta/60">
                                    {usulan.kategori}, diusulkan oleh {usulan.nama}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-tinta/80">{usulan.alasan}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}
