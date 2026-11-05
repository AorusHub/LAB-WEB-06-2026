function RingkasanPesanan({ pesanan, totalHarga, onTambah, onKurang }) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <h2 className="font-heading text-xl font-bold text-stone-900">
          Ringkasan Pesanan
        </h2>

        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
          {pesanan.reduce((acc, item) => acc + item.jumlah, 0)} Item
        </span>
      </div>

      {pesanan.length === 0 ? (
        <div className="py-8 text-center text-stone-400">
          <p className="text-3xl">☕</p>
          <p className="mt-2 text-sm">
            Belum ada menu yang dipilih.
          </p>
        </div>
      ) : (
        <div className="my-4 divide-y divide-stone-100 max-h-64 overflow-y-auto pr-1">
          {pesanan.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3 text-sm"
            >
              <div>
                <p className="font-bold text-stone-800">
                  {item.nama}
                </p>

                <p className="text-xs text-stone-400">
                  Rp{item.harga.toLocaleString("id-ID")} x {item.jumlah}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onKurang(item.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100"
                  >
                    −
                  </button>

                  <span className="font-bold">
                    {item.jumlah}
                  </span>

                  <button
                    type="button"
                    onClick={() => onTambah(item)}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-700 text-white hover:bg-amber-800"
                  >
                    +
                  </button>
                </div>
              </div>

              <span className="font-heading font-bold text-amber-900">
                Rp{(item.harga * item.jumlah).toLocaleString("id-ID")}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 border-t border-stone-200 pt-4 flex items-center justify-between">
        <span className="text-sm text-stone-500 font-medium">
          Total Tagihan
        </span>

        <span className="font-heading text-2xl font-extrabold text-amber-950">
          Rp{totalHarga.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}

export default RingkasanPesanan;