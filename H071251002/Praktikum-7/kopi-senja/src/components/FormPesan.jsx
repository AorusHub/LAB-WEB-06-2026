
function FormPesan({
  namaPelanggan,
  setNamaPelanggan,
  nomorMeja,
  setNomorMeja,
  catatanPesanan,
  setCatatanPesanan,
  onSubmit,
}) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg">
      <h2 className="font-heading mb-4 text-xl font-bold text-stone-900">
        Informasi Pemesan
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            Nama Pelanggan
          </label>
          <input
            type="text"
            value={namaPelanggan}
            onChange={(e) => setNamaPelanggan(e.target.value)}
            placeholder="Masukkan nama Anda"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 p-3.5 text-sm text-stone-800 outline-none transition focus:border-amber-700 focus:bg-white focus:ring-2 focus:ring-amber-700/20"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            Nomor Meja (1-20)
          </label>
          <input
            type="number"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            placeholder="Contoh: 5"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 p-3.5 text-sm text-stone-800 outline-none transition focus:border-amber-700 focus:bg-white focus:ring-2 focus:ring-amber-700/20"
          />
        </div>

        {/* Catatan Pesanan */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            Catatan Pesanan (Opsional)
          </label>
          <textarea
            value={catatanPesanan}
            onChange={(e) => setCatatanPesanan(e.target.value)}
            placeholder="Contoh: gula sedikit, es dipisah..."
            rows={3}
            className="w-full resize-none rounded-2xl border border-stone-200 bg-stone-50 p-3.5 text-sm text-stone-800 outline-none transition focus:border-amber-700 focus:bg-white focus:ring-2 focus:ring-amber-700/20"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-2xl bg-amber-700 py-4 font-heading text-sm font-bold text-white shadow-lg transition hover:bg-amber-800 active:scale-98"
        >
          Konfirmasi & Bayar Pesanan
        </button>
      </form>
    </div>
  );
}

export default FormPesan;