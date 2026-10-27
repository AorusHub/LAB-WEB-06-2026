function RingkasanPesanan({ itemPesanan, jumlahItem, totalHarga, onKurang, onTambah, onHapus }) {
    let pesanKosong = null
    if (itemPesanan.length === 0) {
        pesanKosong = <p className="mt-4">Belum ada pesanan.</p>
    }

    return (
        <div className="rounded-2xl bg-bone p-6 text-noir">
        <h3 className="font-display text-2xl">Ringkasan Pesanan</h3>

        {pesanKosong}

        {itemPesanan.map((item) => (
            <div key={item.id} className="mt-4 border-b border-noir/20 pb-3">
            <p className="font-medium">{item.nama}</p>
            <p className="text-sm">
                Rp {item.harga.toLocaleString('id-ID')} x {item.jumlah}
            </p>

            <div className="mt-2 flex items-center gap-2">
                <button
                type="button"
                onClick={() => onKurang(item.id)}
                className="h-8 w-8 rounded-full bg-tan"
                >
                -
                </button>
                <span>{item.jumlah}</span>
                <button
                type="button"
                onClick={() => onTambah(item.id)}
                className="h-8 w-8 rounded-full bg-tan"
                >
                +
                </button>
                <button
                type="button"
                onClick={() => onHapus(item.id)}
                className="ml-2 text-sm underline"
                >
                Hapus
                </button>
            </div>
            </div>
        ))}

        </div>
    )
}

export default RingkasanPesanan