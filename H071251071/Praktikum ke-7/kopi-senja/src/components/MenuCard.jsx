import { useState } from 'react'; 

function MenuCard({ item, onTambahPesanan }) { 
    const [tampilDetail, setTampilDetail] = useState(false);
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
                <div className="flex justify-between items-start mb-2"> 
                    <h3> {item.nama} </h3> <span> {item.kategori} </span> 
                </div> 
                <p className="font-semibold text-amber-900 mb-2"> Rp {item.harga.toLocaleString('id-ID')} </p> 
                <div className="mb-3"> 
                    {item.tersedia 
                    ? ( <span className="inline-block text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium"> Tersedia </span> ) 
                    : ( <span className="inline-block text-xs text-rose-600 bg-rose-50 px-2 py-0.5 rounded font-medium"> Stok Habis </span> )} 
                </div>   
                <button
                    type="button"
                    onClick={() => setTampilDetail(!tampilDetail)}
                    className="text-amber-600 hover:text-amber-800 text-sm font-medium"
                >
                    {tampilDetail ? 'Tutup Detail' : 'Lihat Detail'}
                </button>
                {tampilDetail && 
                ( <p className="text-sm text-slate-600 bg-amber-50 p-2.5 rounded-lg mb-3 border border-amber-100"> {item.deskripsi} </p> )}
                <div className="mt-2">
                    <button
                        type="button"
                        onClick={() => onTambahPesanan(item)}
                        disabled={!item.tersedia}
                        className={`w-full py-2 rounded-lg font-medium text-sm transition-colors ${
                        item.tersedia
                        ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                    >
                        {item.tersedia ? '+ Tambah ke Pesanan' : 'Habis'}
                    </button>  
                </div>
            </div>  
        </div>
    );
}
export default MenuCard;        