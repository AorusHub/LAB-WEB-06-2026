import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function BerandaPage() {
    const total = dataBuku.length;
    const tersedia = dataBuku.filter((buku) => buku.tersedia).length;
    const dipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

    const statistik = [
        { label: "Total Koleksi Buku", nilai: total, gaya: "bg-tinta text-kertas" },
        { label: "Buku Tersedia", nilai: tersedia, gaya: "bg-kertas text-tinta" },
        { label: "Buku Dipinjam", nilai: dipinjam, gaya: "bg-kertas text-tinta" },
    ];

    return (
        <div className="space-y-10">
            <Hero
                nama="Pustaka Senja"
                slogan="Ruang baca tenang di dekat kampus. Datang sepulang kuliah, pilih satu buku, dan baca sampai matahari turun."
                lokasi="Jl. Perintis Kemerdekaan, dekat gerbang kampus"
                jam="Buka setiap hari, pukul 14.00 sampai 20.00"
            />

            <section>
                <h2 className="font-judul text-3xl font-semibold tracking-wider text-kertas">
                    Koleksi kami
                </h2>
                <div className="mb-5 mt-2 h-0.5 w-16 bg-kertas" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {statistik.map((item) => (
                        <div
                            key={item.label}
                            className={`p-6 shadow-[5px_5px_0_rgba(63,75,83,0.3)] ${item.gaya}`}
                        >
                            <p className="font-judul text-6xl font-semibold">{item.nilai}</p>
                            <p className="mt-2 text-sm opacity-80">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
