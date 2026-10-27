function FormPesan({
  namaPelanggan,
  setNamaPelanggan,
  nomorMeja,
  setNomorMeja,
  catatan,
  setCatatan,
  pesan,
  onSubmit,
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8">
      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl bg-white p-5 shadow-sm"
      >
        <h2 className="text-xl font-bold text-gray-800">
          Data Pemesanan
        </h2>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Nama pelanggan
          </label>
          <input
            type="text"
            value={namaPelanggan}
            onChange={(e) => setNamaPelanggan(e.target.value)}
            placeholder="Masukkan nama"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Nomor meja
          </label>
          <input
            type="number"
            min="1"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            placeholder="Contoh: 3"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Catatan
          </label>
          <input
            type="text"
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="Masukkan catatan"
            className="w-full rounded-lg border p-3"
          />
        </div>

        {pesan && (
          <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800">
            {pesan}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-700 p-3 font-semibold text-white hover:bg-amber-500"
        >
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;