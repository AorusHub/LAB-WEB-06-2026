import {useState} from 'react'

function FormPesan({totalItem, onResetPesanan, setPesanSukses}) {
    const [nama, setNama] = useState(''); 
    const [nomorMeja, setNomorMeja] = useState('');
    const [pesanError, setPesanError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setPesanError('');
        setPesanSukses('');
        if (totalItem === 0) {
            setPesanError('Pesanan masih kosong, silahkan pilih menu terlebih dahulu');
            return;
        }
        if (!nama.trim()) {
            setPesanError('Harap isi nama terlebih dahulu');
            return;
        }
        if (!nomorMeja.trim() || isNaN(nomorMeja)) {
            setPesanError('Harap masukkan nomor meja yang valid');
            return;
        }
        setPesanSukses(`Terima kasih ${nama}, pesanan Anda telah diterima. Pesanan akan dibawa ke meja nomor ${nomorMeja}.`);
        onResetPesanan();
        setNama('');
        setNomorMeja('');
    }
    return (
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow-sm border border-amber-100 space-y-4">
            <h2 className="text-lg font-bold text-amber-900 border-b pb-2">Data Pemesan</h2>
            {pesanError && (
                <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-lg">
                    {pesanError}
                </div>
            )}
            <div>
                <label htmlFor="nama-pemesan" className="block text-xs font-semibold text-slate-700 mb-1">Nama pemesan</label>
                <input
                    id="nama-pemesan"
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
            </div>
            <div>
                <label htmlFor="nomor-meja" className="block text-xs font-semibold text-slate-700 mb-1">Nomor Meja</label>
                <input
                    id="nomor-meja"
                    type="text"
                    value={nomorMeja}
                    onChange={(e) => setNomorMeja(e.target.value)}
                    placeholder="Masukkan nomor meja"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
            </div>
            <div className="text-sm text-slate-600">
                <label htmlFor="catatan" className="block text-xs font-semibold text-slate-700 mb-1">Catatan</label>
                <textarea
                    id="catatan"
                    rows="3"
                    placeholder="Masukkan catatan (jika ada)"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-lg font-bold text-sm shadow transition-colors"
                onClick={() => console.log('Silahkan ditunggu pesanannya ya')}
            >
                Kirim Pesanan
            </button>

        </form>
    );
}
export default FormPesan;