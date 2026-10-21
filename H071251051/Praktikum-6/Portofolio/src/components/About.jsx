import cozyHotel from "../assets/project/cozythehotel-hero.jpeg";
import grocery from "../assets/project/grocery-hero.jpeg";
import lunabites from "../assets/project/lunabites-hero.png";
import fortAmsterdam from "../assets/project/fort-amsterdam.jpeg";

function About() {
    const dataDiri = [
        { id: 1, label: "Nama", nilai: "Rasyah Azizah Ode" },
        { id: 2, label: "Asal Sekolah", nilai: "MAN 1 Maluku Tengah" },
        { id: 3, label: "Kampus", nilai: "Universitas Hasanuddin" },
        { id: 4, label: "Program Studi", nilai: "Sistem Informasi" },
        { id: 5, label: "Asal", nilai: "Maluku Tengah" },
        { id: 6, label: "Hobi", nilai: "Membaca" },
    ];

    const proyek = [
        {
            id: 1,
            judul: "Cozy The Hotel",
            deskripsi: "CozyTheHotel adalah aplikasi desktop berbasis Java yang dirancang untuk mendigitalisasi dan mengotomatisasi operasional perhotelan. Sistem ini mengintegrasikan pengelolaan data tamu, pemesanan, pemantauan status kamar, hingga transaksi tamu keluar dalam satu platform yang terpusat.",
            gambar: cozyHotel,
            jenis: "Repositori GitHub",
            aksi: "Lihat di GitHub",
            link: "https://github.com/mtaqwin/CozyTheHotel-16",
            unduh: false,
        },
        {
            id: 2,
            judul: "Grocery Store",
            deskripsi: "Grocery-Store Program Grocery Store adalah aplikasi manajemen toko grosir berbasis Python yang dibuat dengan pendekatan Object-Oriented Programming (OOP). Program ini dirancang untuk membantu pengelolaan toko secara efisien melalui Command Line (CMD).",
            gambar: grocery,
            jenis: "Repositori GitHub",
            aksi: "Lihat di GitHub",
            link: "https://github.com/alim1925/Grocery-Store",
            unduh: false,
        },
        {
            id: 3,
            judul: "Lunabites",
            deskripsi: "Website UMKM kuliner bertema bulan, lengkap dengan form pemesanan, hitung total otomatis, dan mode malam menyesuaikan kenyamanan user.",
            gambar: lunabites,
            jenis: "File Proyek",
            aksi: "Unduh Proyek (.zip)",
            link: "/projects/lunabites.zip",
            unduh: true,
        },
        {
            id: 4,
            judul: "Fort Amsterdam",
            deskripsi: "Website wisata sejarah Benteng Amsterdam di Negeri Hila, dengan galeri, peta lokasi, dan formulir kunjungan.",
            gambar: fortAmsterdam,
            jenis: "File Proyek",
            aksi: "Unduh Proyek (.zip)",
            link: "/projects/fort-amsterdam.zip",
            unduh: true,
        },
    ];

    return (
        <div>
        <section id="tentang" className="bg-violet-50 py-16">
            <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-display text-3xl font-bold text-violet-950">
                Tentang Saya
            </h2>
            <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
                <p className="leading-relaxed text-slate-600">
                    Halo! Saya Rasyah, mahasiswa yang senang membangun website dari
                    nol. Saya belajar HTML, CSS, JavaScript, dan kini React untuk
                    membuat tampilan yang terstruktur. Bagi saya, website yang bagus
                    bukan hanya indah, tetapi juga nyaman dipakai di layar apa pun.
                </p>
                <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {dataDiri.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl bg-white p-4 shadow-sm"
                        >
                        <dt className="text-xs font-semibold uppercase tracking-wider text-violet-500">
                            {item.label}
                        </dt>
                        <dd className="mt-1 font-medium text-slate-800">
                            {item.nilai}
                        </dd>
                        </div>
                    ))}
                </dl>
            </div>
            </div>
        </section>

        <section id="proyek" className="bg-violet-700 py-16 text-white">
            <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center font-display text-3xl font-bold">
                Riwayat Proyek
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {proyek.map((item) => (
                <article key={item.id} className="flex flex-col overflow-hidden rounded-2xl bg-white text-slate-800 shadow-lg">
                    <img 
                        src={item.gambar} 
                        alt={item.judul} 
                        className="h-40 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col gap-2 p-4">
                    <span className="w-fit rounded-full bg-violet-100 px-3 py-0.5 text-xs font-semibold text-violet-700">
                        {item.jenis}
                    </span>
                    <h3 className="font-display text-lg font-bold">
                        {item.judul}
                    </h3>
                    <p className="flex-1 text-sm text-slate-600">
                        {item.deskripsi}
                    </p>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        download={item.unduh}
                        className="mt-2 rounded-full bg-violet-700 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-violet-600">
                        {item.aksi}
                    </a>
                    </div>
                </article>
                ))}
            </div>
            </div>
        </section>
        </div>
    );
}

export default About;