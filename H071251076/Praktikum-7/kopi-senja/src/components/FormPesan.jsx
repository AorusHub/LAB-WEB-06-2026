import { useState } from "react";

function FormPesan({ jumlahPesanan, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [catatan, setCatatan] = useState("");
  const [errors, setErrors] = useState({ nama: "", meja: "", pesanan: "" });
  const [terkirim, setTerkirim] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const errorBaru = { nama: "", meja: "", pesanan: "" };
    const nomorMeja = Number(meja);

    if (nama.trim().length < 2) {
      errorBaru.nama = "Nama wajib diisi, minimal 2 karakter.";
    }
    if (meja.trim() === "" || !Number.isInteger(nomorMeja) || nomorMeja < 1) {
      errorBaru.meja = "Nomor meja harus berupa angka bulat, minimal 1.";
    }
    if (jumlahPesanan === 0) {
      errorBaru.pesanan = "Pesanan masih kosong. Pilih menu terlebih dahulu.";
    }

    setErrors(errorBaru);

    if (errorBaru.nama || errorBaru.meja || errorBaru.pesanan) {
      setTerkirim(false);
      return;
    }

    onKirim(); // induk mengosongkan pesanan
    setNama("");
    setMeja("");
    setCatatan("");
    setTerkirim(true);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="mb-3 font-serif text-xl font-bold">Kirim Pesanan</h2>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <div>
          <label htmlFor="nama" className="mb-1 block text-sm font-semibold">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            placeholder="Nama pemesan"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.nama && (
            <p className="mt-1 text-sm text-red-700">{errors.nama}</p>
          )}
        </div>

        <div>
          <label htmlFor="meja" className="mb-1 block text-sm font-semibold">
            Nomor meja
          </label>
          <input
            id="meja"
            type="number"
            min="1"
            placeholder="Contoh: 5"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.meja && (
            <p className="mt-1 text-sm text-red-700">{errors.meja}</p>
          )}
        </div>

        <div>
          <label htmlFor="catatan" className="mb-1 block text-sm font-semibold">
            Catatan 
          </label>
          <input
            id="catatan"
            type="text"
            placeholder="catatan"
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {errors.pesanan && (
          <p className="rounded bg-red-50 p-2 text-sm text-red-700">
            {errors.pesanan}
          </p>
        )}

        <button
          type="submit"
          className="rounded bg-indigo-950 px-4 py-2 font-bold text-white hover:bg-indigo-900"
        >
          Kirim pesanan
        </button>
      </form>

        <button
          onClick={onKirim}
          className="rounded bg-indigo-950 px-20 py-2 font-bold text-white hover:bg-indigo-900"
        >
          Hapus Pesanan
        </button>

      {terkirim && (
        <p className="mt-3 rounded bg-green-50 p-3 text-sm font-semibold text-green-800">
          Terima kasih, pesanan sudah terkirim!
        </p>
      )}
    </section>
  );
}

export default FormPesan;
