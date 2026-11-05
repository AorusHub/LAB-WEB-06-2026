import Link from "next/link";
import Image from "next/image";
import dataBuku from "@/data/dataBuku";
import gambarBuku from "@/data/gambarBuku";

export default async function DetailBuku({ params }) {
    const {id} = await params;
    const buku = dataBuku.find((item) => item.id === id);

    if (!buku) {
        return (
            <section className="bg-kertas p-8 text-center shadow-[8px_8px_0_rgba(63,75,83,0.3)] sm:p-12">
                <h1 className="font-judul text-3xl font-semibold tracking-wider sm:text-4xl">
                    Buku dengan ID &quot;{id}&quot; tidak ditemukan!
                </h1>
                <div className="mx-auto my-5 h-0.5 w-16 bg-tinta" />
                <p className="mb-6 text-tinta/80">
                    Buku yang kamu cari tidak ada di koleksi kami.
                </p>
                <Link
                    href="/katalog"
                    className="inline-block bg-tinta px-5 py-2.5 text-sm font-medium text-kertas hover:bg-tinta/85"
                >
                    &larr; Kembali Ke Katalog
                </Link>
            </section>
        );
    }

    const info = [
        {label: "Penulis", isi: buku.penulis},
        {label: "Kategori", isi: buku.kategori},
        {label: "Tahun Terbit", isi: buku.tahun},
        {label: "Status", isi: buku.tersedia ? "Tersedia" : "Tidak Tersedia"},
    ];

    return (
        <article className="relative bg-kertas p-8 shadow-[8px_8px_0_rgba(63,75,83,0.3)] sm:p-12">
            <span aria-hidden="true" className="absolute left-8 top-0 h-8 w-5 bg-tinta" />
            <h1 className="mt-6 font-judul text-4xl font-semibold leading-tight tracking-wider sm:text-5xl">
                {buku.judul}
            </h1>
            <div className="my-5 h-0.5 w-16 bg-tinta" />

            <div className="flex flex-col gap-6 sm:flex-row">
                <div className="relative h-72 w-full shrink-0 border-2 border-tinta bg-white sm:w-52">
                    <Image
                        src={`/gallery/${gambarBuku[buku.id]}`}
                        alt={`Sampul buku ${buku.judul}`}
                        fill
                        sizes="(min-width: 640px) 208px, 100vw"
                        className="object-contain p-2"
                    />
                </div>

                <dl className="grid flex-1 content-start gap-x-8 gap-y-4 sm:grid-cols-2">
                    {info.map((item) => (
                        <div key={item.label}>
                            <dt className="text-xs text-tinta/70">{item.label}</dt>
                            <dd className="mt-0.5 font-medium">{item.isi}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="mt-8 bg-tinta p-6 text-kertas">
                <h2 className="font-judul text-2xl font-semibold tracking-wider">Sinopsis</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-kertas/90">
                    {buku.sinopsis}
                </p>
            </div>

            <Link
                href="/katalog"
                className="mt-8 inline-block border-2 border-tinta px-5 py-2.5 text-sm font-medium hover:bg-gurun/40"
            >
                &larr; Kembali ke Katalog
            </Link>
        </article>
    );
}