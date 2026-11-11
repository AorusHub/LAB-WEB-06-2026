function RingkasanPesanan({ pesanan, totalItem, totalHarga, onTambah, onKurang, onHapus, onResetPesanan }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm border border-amber-100 space-y-4">
            <h2 className="text-lg font-bold text-amber-900 border-b pb-2">Ringkasan Pesanan</h2>
            {pesanan.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-4"> Belum ada dipesan </p>
            ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {pesanan.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-sm border-b pb-2 border-slate-100">
                            <div className="flex-1 pr-2">
                                <div className="font-semibold text-slate-800">{item.nama}</div>
                                <div className="text-xs text-slate-500">Rp {item.harga.toLocaleString('id-ID')} * {item.jumlah}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => onKurang(item.id)}
                                    className="w-6 h-6 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                                >
                                    -
                                </button>
                                <span className="font-medium w-4 text-center">{item.jumlah}</span>
                                <button
                                    type="button"
                                    onClick={() => onTambah(item)}
                                    className="w-6 h-6 rounded bg-amber-100 hover:bg-amber-200 text-amber-700 font-bold text-xs"
                                >
                                    +
                                </button>
                                <button
                                    type="button"
                                    onClick={() => onHapus(item.id)}
                                    className="text-xs text-rose-500 hover:text-rose-700 ml-1"
                                >
                                    x
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="border-t pt-3 space-y-1 text-sm text-slate-700">
                <div className="flex justify-between text-slate-600"> 
                    <span>Total Item:</span> 
                    <span className="font-semibold text-slate-800">{totalItem}</span> 
                </div> 
                <div className="flex justify-between text-base font-bold text-amber-950 pt-1"> 
                    <span>Total Harga:</span> 
                    <span>Rp {totalHarga.toLocaleString('id-ID')}</span> 
                </div>
                <button
                    type="button"
                    onClick={onResetPesanan}
                    disabled={pesanan.length === 0}
                    className="w-full py-2 bg-rose-500 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50 text-white rounded-lg font-bold text-sm shadow transition-colors"
                >
                    Hapus Pesanan
                </button>
            </div>
        </div>
    );
}
export default RingkasanPesanan;