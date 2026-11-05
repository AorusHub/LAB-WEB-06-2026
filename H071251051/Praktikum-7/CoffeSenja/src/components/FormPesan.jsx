import { useState } from 'react'

function FormPesan({ jumlahItem, onKirim }) {
    const [nama, setNama] = useState('')
    const [meja, setMeja] = useState('')
    const [catatan, setCatatan] = useState('')
    const [galatPesanan, setGalatPesanan] = useState('')
    const [galatNama, setGalatNama] = useState('')
    const [galatMeja, setGalatMeja] = useState('')
    const [galatCatatan, setGalatCatatan] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        let pesanPesanan = ''
        let pesanNama = ''
        let pesanMeja = ''
        let pesanCatatan = ''

        if (jumlahItem === 0) {
        pesanPesanan = 'Pesanan masih kosong. Tambahkan menu dulu.'
        }

        if (nama.trim() === '') {
        pesanNama = 'Nama wajib diisi.'
        } else if (nama.trim().length < 3) {
        pesanNama = 'Nama minimal 3 karakter.'
        }

        const nomorMeja = Number(meja)
        if (meja.trim() === '') {
        pesanMeja = 'Nomor meja wajib diisi.'
        } else if (Number.isInteger(nomorMeja) === false || nomorMeja < 1) {
        pesanMeja = 'Nomor meja harus berupa angka bulat lebih dari 0.'
        }

        if (catatan.trim() === '') {
        pesanCatatan = 'Catatan wajib diisi.'
        } else if (catatan.trim().length < 3) {
        pesanCatatan = 'Catatan minimal 3 karakter.'
        }

        setGalatPesanan(pesanPesanan)
        setGalatNama(pesanNama)
        setGalatMeja(pesanMeja)
        setGalatCatatan(pesanCatatan)

        if (pesanPesanan !== '' || pesanNama !== '' || pesanMeja !== '' || pesanCatatan !== '') {
        return
        }

        onKirim(nama.trim())
        setNama('')
        setMeja('')
        setCatatan('')
    }

    let tampilGalatPesanan = null
    if (galatPesanan !== '') {
        tampilGalatPesanan = (
        <p className="mt-4 text-red-700" role="alert">
            {galatPesanan}
        </p>
        )
    }

    let tampilGalatNama = null
    let kelasInputNama = 'mt-1 w-full rounded-lg border border-noir/30 bg-white px-3 py-2'
    if (galatNama !== '') {
        kelasInputNama = 'mt-1 w-full rounded-lg border border-red-700 bg-white px-3 py-2'
        tampilGalatNama = (
        <p className="mt-1 text-sm text-red-700" role="alert">
            {galatNama}
        </p>
        )
    }

    let tampilGalatMeja = null
    let kelasInputMeja = 'mt-1 w-full rounded-lg border border-noir/30 bg-white px-3 py-2'
    if (galatMeja !== '') {
        kelasInputMeja = 'mt-1 w-full rounded-lg border border-red-700 bg-white px-3 py-2'
        tampilGalatMeja = (
        <p className="mt-1 text-sm text-red-700" role="alert">
            {galatMeja}
        </p>
        )
    }

    let tampilGalatCatatan = null
    let kelasInputCatatan = 'mt-1 w-full rounded-lg border border-noir/30 bg-white px-3 py-2'
    if (galatCatatan !== '') {
        kelasInputCatatan = 'mt-1 w-full rounded-lg border border-red-700 bg-white px-3 py-2'
        tampilGalatCatatan = (
        <p className="mt-1 text-sm text-red-700" role="alert">
            {galatCatatan}
        </p>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="rounded-2xl bg-bone p-6 text-noir">
        <h3 className="font-display text-2xl">Data Pemesan</h3>

        <label htmlFor="nama" className="mt-4 block text-sm">Nama</label>
        <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className={kelasInputNama}
        />
        {tampilGalatNama}

        <label htmlFor="meja" className="mt-4 block text-sm">Nomor Meja</label>
        <input
            id="meja"
            type="text"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            className={kelasInputMeja}
        />
        {tampilGalatMeja}

        <label htmlFor="catatan" className="mt-4 block text-sm">Catatan (opsional)</label>
        <textarea
            id="catatan"
            rows="3"
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="Contoh: kurang manis, tanpa es"
            className={kelasInputCatatan}
        />
        {tampilGalatCatatan}

        {tampilGalatPesanan}

        <button
            type="submit"
            className="mt-6 w-full rounded-full bg-kombu py-3 text-bone"
        >
            Kirim Pesanan
        </button>
        </form>
    )
}

export default FormPesan