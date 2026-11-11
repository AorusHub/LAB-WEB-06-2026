function RingkasanPesanan({ pesanan, jumlahPesanan, totalHarga }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="mb-3 font-serif text-xl font-bold">Ringkasan Pesanan</h2>

      {pesanan.length === 0 && (
        <p className="text-sm text-slate-600">
          Belum ada pesanan. Tekan Tambah pada menu yang kamu mau.
        </p>
      )}

      <ul className="divide-y divide-slate-200">
        {pesanan.map((item) => (
          <li key={item.id} className="flex justify-between gap-2 py-2 text-sm">
            <span>
              {item.nama} x {item.jumlah}
            </span>
            <span className="font-semibold">
              Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex justify-between border-t-2 border-indigo-950 pt-3 font-bold">
        <span>{jumlahPesanan} item</span>
        <span>Rp {totalHarga.toLocaleString("id-ID")}</span>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
