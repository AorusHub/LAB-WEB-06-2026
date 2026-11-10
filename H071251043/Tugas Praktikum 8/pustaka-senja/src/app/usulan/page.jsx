"use client";

import { useState } from "react";

const pilihanKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

export default function Usulan() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");
  const [pesan, setPesan] = useState(null);
  const [daftarUsulan, setDaftarUsulan] = useState([]);
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const errorBaru = {};

    if (nama.trim() === "") errorBaru.nama = "Nama pengusul wajib diisi.";
    if (judul.trim() === "") errorBaru.judul = "Judul buku wajib diisi.";
    if (kategori === "") errorBaru.kategori = "Kategori wajib dipilih.";
    if (alasan.trim() === "") errorBaru.alasan = "Alasan usulan wajib diisi.";

    if (Object.keys(errorBaru).length > 0) {
      setErrors(errorBaru);
      setPesan({
        tipe: "error",
        teks: "Formulir belum lengkap. Periksa kolom yang ditandai merah.",
    });
    return;
  }

setErrors({});

    const usulanBaru = {
      id: Date.now(),
      nama: nama.trim(),
      judul: judul.trim(),
      kategori: kategori,
      alasan: alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPesan({ tipe: "sukses", teks: "Usulan berhasil dikirim. Terima kasih!" });

    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-600">Usulan Buku</h1>
      <p className="mt-1 text-gray-400">
        Ada buku yang ingin dihadirkan di Pustaka Senja? Usulkan di sini.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 space-y-4 rounded-xl border border-amber-200 bg-slate-200 p-6 shadow-sm"
      >
        <div>
          <label className="block text-sm font-medium text-amber-800">
            Nama Pengusul <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className={
              errors.nama
              ? "mt-1 w-full rounded-lg border border-red-500 bg-white text-black px-3 py-2"
              : "mt-1 w-full rounded-lg border border-gray-300 bg-white text-black px-3 py-2"
            }
        />
        {errors.nama && (
          <p className="mt-1 text-sm text-red-600">{errors.nama}</p>
        )}
        </div>

        <div>
          <label className="block text-sm font-medium text-amber-800">
            Judul Buku yang Diusulkan <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-amber-800">
            Kategori <span className="text-red-600">*</span>
          </label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
          >
            <option value="">Pilih kategori</option>
            {pilihanKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-amber-800">
            Alasan Usulan <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={4}
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-black"
          />
        </div>

        {pesan && (
          <p
            className={
              pesan.tipe === "error"
                ? "rounded-lg bg-red-100 px-4 py-2 text-sm text-red-800"
                : "rounded-lg bg-green-100 px-4 py-2 text-sm text-green-800"
            }
          >
            {pesan.teks}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-amber-800 px-5 py-2 text-white hover:bg-amber-700"
        >
          Kirim Usulan
        </button>
      </form>

      {daftarUsulan.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-amber-900">Usulan Terkirim</h2>
          <ul className="mt-3 space-y-3">
            {daftarUsulan.map((usulan) => (
              <li
                key={usulan.id}
                className="rounded-xl border border-amber-200 bg-white p-4"
              >
                <p className="font-semibold text-amber-900">{usulan.judul}</p>
                <p className="text-sm text-gray-600">
                  {usulan.kategori} · diusulkan oleh {usulan.nama}
                </p>
                <p className="mt-1 text-sm text-gray-700">{usulan.alasan}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}