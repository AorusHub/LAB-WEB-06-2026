import { useState } from 'react'
import kopiSusu from '../assets/gallery/kopi_susu.jpg'
import americano from '../assets/gallery/Americano.jpg'
import cappuccino from '../assets/gallery/Cappuccino.jpg'
import matcha from '../assets/gallery/Matcha.jpg'
import tehTarik from '../assets/gallery/Teh_tarik.jpg'
import cokelatPanas from '../assets/gallery/Cokelat_panas.jpg'
import rotiBakar from '../assets/gallery/roti_bakar.jpg'
import pisangGoreng from '../assets/gallery/Pisang_Goreng.jpg'
import nasiGoreng from '../assets/gallery/Nasi_goreng.jpg'

const gambarMenu = {
    1: kopiSusu,
    2: americano,
    3: cappuccino,
    4: matcha,
    5: tehTarik,
    6: cokelatPanas,
    7: rotiBakar,
    8: pisangGoreng,
    9: nasiGoreng,
}

function MenuCard({ menu, onTambah }) {
    const [terbuka, setTerbuka] = useState(false)
    const { id, nama, kategori, harga, tersedia, deskripsi } = menu

    let kelasGambar = 'h-48 w-full object-cover'
    if (tersedia === false) {
        kelasGambar = 'h-48 w-full object-cover opacity-40'
    }

    let teksTombolDetail = 'Lihat detail'
    if (terbuka === true) {
        teksTombolDetail = 'Tutup detail'
    }

    let teksTombolTambah = 'Tambah'
    if (tersedia === false) {
        teksTombolTambah = 'Habis'
    }

    let detail = null
    if (terbuka === true) {
        detail = <p className="mt-2 text-sm">{deskripsi}</p>
    }

    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow">
        <img src={gambarMenu[id]} alt={nama} className={kelasGambar} />

        <div className="p-4">
            <p className="text-xs text-moss">{kategori}</p>
            <h3 className="font-display text-xl">{nama}</h3>
            <p className="font-medium">Rp {harga.toLocaleString('id-ID')}</p>

            {detail}

            <button
            type="button"
            onClick={() => setTerbuka(!terbuka)}
            className="mt-2 text-sm underline"
            >
            {teksTombolDetail}
            </button>

            <button
                type="button"
                disabled={!tersedia}
                onClick={() => onTambah(id)}
                className="mt-3 block w-full rounded-full bg-kombu py-2 text-bone disabled:bg-gray-400"
            >
            {teksTombolTambah}
            </button>
        </div>
        </div>
    )
}

export default MenuCard