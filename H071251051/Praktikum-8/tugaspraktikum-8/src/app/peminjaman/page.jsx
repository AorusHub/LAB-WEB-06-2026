import Link from "next/link";
import dataBuku from "@/data/dataBuku";

const aturan = [
    { judul: "Lama peminjaman", isi: "Setiap buku dapat dipinjam selama 7 hari." },
    { judul: "Jumlah buku", isi: "Maksimal 2 buku dalam satu waktu untuk satu peminjam." },
    { judul: "Syarat", isi: "Tunjukkan kartu mahasiswa atau identitas lain kepada pengelola." },
    { judul: "Perpanjangan", isi: "Hubungi pengelola sebelum masa pinjam berakhir." },
];

export default function PeminjamanPage() {
    const sedangDipinjam = dataBuku.filter((buku) => !buku.tersedia);

    return (
        <div className="space-y-8">
            <section className="bg-kertas p-8 shadow-[8px_8px_0_rgba(63,75,83,0.3)]">
                <h1 className="font-judul text-5xl font-semibold tracking-wider">
                    Informasi Peminjaman Buku
                </h1>
                <div className="my-4 h-0.5 w-16 bg-tinta" />
                <p className="max-w-xl text-tinta/80">
                    Ketentuan eminjam buku mohon diperhatikan agar pengalaman membaca di Pustaka Senja tetap nyaman bagi semua pengunjung.
                    Dan daftar buku yang sedang dipinjam.
                </p>
            </section>

            <section>
                <h2 className="font-judul text-3xl font-semibold tracking-wider">
                    Aturan Peminjaman
                </h2>
                <div className="mb-5 mt-2 h-0.5 w-16 bg-tinta" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {aturan.map((item) => (
                        <div key={item.judul} className="bg-kertas p-5 shadow-[5px_5px_0_rgba(63,75,83,0.3)]">
                            <h3 className="font-judul text-2xl font-semibold">
                                {item.judul}
                            </h3>
                            <p className="mt-2 text-sm leanding-relaxed text-tinta/80">
                                {item.isi}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="font-judul text-3xl font-semibold tracking-wider">
                    Buku yang Sedang Dipinjam
                </h2>
                <div className="mb-5 mt-2 h-0.5 w-16 bg-tinta" />
                <ul className="space-y-3">
                    {sedangDipinjam.map((buku) => (
                        <li key={buku.id} className="flex flex-wrap items-center justify-between gap-2 bg-kertas px-5 py-4 shadow-[5px_5px_0_rgba(63,75,83,0.3)]">
                            <div>
                                <p className="font-judul text-lg font-semibold">{buku.judul}</p>
                                <p className="text-sm text-tinta/70">{buku.penulis}</p>
                            </div>
                            <Link href={`/katalog/${buku.id}`} className="text-sm font-medium hover:underline">
                                Lihat Detail
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}