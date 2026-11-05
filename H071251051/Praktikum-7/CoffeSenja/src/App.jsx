import { useState } from 'react'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import RingkasanPesanan from './components/RingkasanPesanan'
import FormPesan from './components/FormPesan'
import Footer from './components/Footer'

const dataMenu = [
    { id: 1, nama: 'Kopi Susu', kategori: 'Kopi', harga: 18000, tersedia: true, deskripsi: 'Espresso dengan susu segar dan gula aren.' },
    { id: 2, nama: 'Americano', kategori: 'Kopi', harga: 15000, tersedia: true, deskripsi: 'Espresso dengan air panas, rasa kuat dan bersih.' },
    { id: 3, nama: 'Cappuccino', kategori: 'Kopi', harga: 22000, tersedia: true, deskripsi: 'Espresso, susu panas, dan busa susu tebal.' },
    { id: 4, nama: 'Matcha Latte', kategori: 'Non-Kopi', harga: 24000, tersedia: true, deskripsi: 'Teh hijau matcha dengan susu.' },
    { id: 5, nama: 'Teh Tarik', kategori: 'Non-Kopi', harga: 14000, tersedia: false, deskripsi: 'Teh susu yang ditarik hingga berbusa.' },
    { id: 6, nama: 'Cokelat Panas', kategori: 'Non-Kopi', harga: 20000, tersedia: true, deskripsi: 'Cokelat pekat dengan susu hangat.' },
    { id: 7, nama: 'Roti Bakar', kategori: 'Makanan', harga: 16000, tersedia: true, deskripsi: 'Roti tebal dengan selai cokelat dan keju.' },
    { id: 8, nama: 'Pisang Goreng', kategori: 'Makanan', harga: 12000, tersedia: false, deskripsi: 'Pisang goreng renyah dengan taburan keju.' },
    { id: 9, nama: 'Nasi Goreng', kategori: 'Makanan', harga: 25000, tersedia: true, deskripsi: 'Nasi goreng kampung dengan telur mata sapi.' },
]

const daftarPesanKucing = [
    'Meong! Mau pesan apa hari ini?',
    'Purr... Kopi Susu enak lho ☕',
    'Nyam! Roti Bakar juga mantap 🍞',
    'Jangan lupa isi nomor mejamu ya!',
    'Terima kasih sudah mengelusku 💕',
]

function App() {
    const [kategoriAktif, setKategoriAktif] = useState('Semua')
    const [kataCari, setKataCari] = useState('')
    const [pesanan, setPesanan] = useState([])
    const [ucapan, setUcapan] = useState('')
    const [elus, setElus] = useState(0)

    const pesanKucing = daftarPesanKucing[elus % daftarPesanKucing.length]

    const itemPesanan = pesanan.map((p) => {
        const menu = dataMenu.find((m) => m.id === p.id)
        return { ...menu, jumlah: p.jumlah }
    })

    const jumlahItem = itemPesanan.reduce((total, item) => total + item.jumlah, 0)
    const totalHarga = itemPesanan.reduce((total, item) => total + item.harga * item.jumlah, 0)

    function tambahPesanan(id) {
        const menu = dataMenu.find((m) => m.id === id)
        if (menu.tersedia === false) {
        return
        }

        setUcapan('')
        setPesanan((sebelumnya) => {
        const sudahAda = sebelumnya.find((p) => p.id === id)
        if (sudahAda) {
            return sebelumnya.map((p) => {
            if (p.id === id) {
                return { ...p, jumlah: p.jumlah + 1 }
            }
            return p
            })
        }
        return [...sebelumnya, { id: id, jumlah: 1 }]
        })
    }

    function kurangPesanan(id) {
        setPesanan((sebelumnya) => {
        const dikurangi = sebelumnya.map((p) => {
            if (p.id === id) {
            return { ...p, jumlah: p.jumlah - 1 }
            }
            return p
        })
        return dikurangi.filter((p) => p.jumlah > 0)
        })
    }

    function hapusPesanan(id) {
        setPesanan((sebelumnya) => sebelumnya.filter((p) => p.id !== id))
    }

    function kirimPesanan(nama) {
        setUcapan('Terima kasih, ' + nama + '! Pesananmu sedang kami siapkan.')
        setPesanan([])
    }

    function elusKucing() {
        setElus((sebelumnya) => sebelumnya + 1)
    }

    let kelasGambarKucing = 'mx-auto w-full mix-blend-multiply'
    if (elus > 0) {
        kelasGambarKucing = 'mx-auto w-full mix-blend-multiply animate-goyang motion-reduce:animate-none'
    }

    let teksElus = 'Klik kucingnya ya!'
    if (elus > 0) {
        teksElus = 'Sudah dielus ' + elus + ' kali'
    }

    let kotakUcapan = null
    if (ucapan !== '') {
        kotakUcapan = (
        <div className="mt-6 rounded-2xl bg-moss px-5 py-4 text-kombu" role="status">
            {ucapan}
        </div>
        )
    }

    return (
        <div className="min-h-screen">
        <Navbar jumlahItem={jumlahItem} totalHarga={totalHarga} />

        <header className="bg-kombu text-bone">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-moss">Kedai Kopi Senja</p>
                <h1 className="font-display text-5xl leading-tight md:text-6xl">
                Pesan Sendiri,
                <br />
                <span className="underline decoration-moss decoration-4 underline-offset-8">Tanpa Antre</span>
                </h1>
                <p className="mt-6 max-w-md text-bone/80">
                Pilih menu favoritmu langsung dari meja. Kopi, non-kopi, dan makanan hangat, dibuat segar setiap hari.
                </p>
                <a
                href="#menu"
                className="mt-8 inline-block rounded-full bg-tan px-7 py-3 font-medium text-noir transition hover:bg-bone"
                >
                Lihat Menu
                </a>
            </div>

            <div className="mx-auto w-full max-w-xs sm:max-w-sm">
                <div
                className="mb-4 rounded-2xl bg-tan px-4 py-3 text-center text-sm font-medium text-noir shadow-lg"
                role="status"
                >
                {pesanKucing}
                </div>

                <button
                type="button"
                onClick={elusKucing}
                aria-label="Elus kucing"
                className="block w-full rounded-3xl bg-bone p-6 shadow-xl transition hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-moss active:scale-95"
                >
                <img
                    key={elus}
                    src="/kucing.jpg"
                    alt="Kucing lucu membawa bunga tulip"
                    className={kelasGambarKucing}
                />
                <span className="mt-2 block text-center text-sm text-noir/70">{teksElus}</span>
                </button>
            </div>
            </div>
        </header>

        <section className="bg-bone">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 sm:grid-cols-3">
            {[
                ['☕', 'Kopi Pilihan', 'Espresso dengan biji pilihan dan takaran pas.'],
                ['🍞', 'Dibuat Segar', 'Roti dan makanan dimasak saat dipesan.'],
                ['📲', 'Pesan dari Meja', 'Tanpa antre di kasir saat jam makan siang.'],
            ].map(([ikon, judul, teks]) => (
                <div key={judul}>
                <div className="text-3xl">{ikon}</div>
                <h3 className="mt-2 font-display text-xl">{judul}</h3>
                <p className="mt-1 text-sm text-noir/70">{teks}</p>
                </div>
            ))}
            </div>
        </section>

        <MenuList
            daftarMenu={dataMenu}
            kategoriAktif={kategoriAktif}
            onGantiKategori={setKategoriAktif}
            kataCari={kataCari}
            onGantiKataCari={setKataCari}
            onTambah={tambahPesanan}
        />

        <section id="pesanan" className="bg-kombu text-bone">
            <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-display text-4xl">Pesananmu</h2>

            {kotakUcapan}

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <RingkasanPesanan
                    itemPesanan={itemPesanan}
                    jumlahItem={jumlahItem}
                    totalHarga={totalHarga}
                    onKurang={kurangPesanan}
                    onTambah={tambahPesanan}
                    onHapus={hapusPesanan}
                />
                <FormPesan jumlahItem={jumlahItem} onKirim={kirimPesanan} />
            </div>
            </div>
        </section>

        <Footer />
        </div>
    )
}

export default App