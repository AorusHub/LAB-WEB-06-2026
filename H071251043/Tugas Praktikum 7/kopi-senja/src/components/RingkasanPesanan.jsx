function RingkasanPesanan({ pesanan }) {
  const jumlahItem = pesanan.reduce(
    (total, item) => total + item.jumlah,
    0
  );

  const totalHarga = pesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  return (
    <section className="mx-auto max-w-6xl px-4 pb-8">
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Ringkasan Pesanan
        </h2>

        {pesanan.length === 0 ? (
          <p className="text-gray-500">
            Belum ada pesanan.
          </p>
        ) : (
          <div className="space-y-3">
            {pesanan.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 border-b border-gray-100 pb-3"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {item.nama}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.jumlah} x Rp
                    {item.harga.toLocaleString("id-ID")}
                  </p>
                </div>

                <p className="font-semibold text-gray-700">
                  Rp
                  {(item.harga * item.jumlah).toLocaleString(
                    "id-ID"
                  )}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex justify-between">
          <span className="text-gray-600">
            Jumlah item
          </span>
          <span className="font-bold">{jumlahItem}</span>
        </div>

        <div className="mt-2 flex justify-between text-lg">
          <span className="font-bold">Total</span>
          <span className="font-bold text-amber-700">
            Rp{totalHarga.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
