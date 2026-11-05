import Link from "next/link";

function Hero({ nama, slogan, lokasi, jam }) {
    return (
        <section className="relative grid overflow-hidden bg-kertas shadow-[8px_8px_0_rgba(63,75,83,0.3)] md:grid-cols-[1.15fr_1fr]">
            <div className="relative p-8 sm:p-12">
                <span aria-hidden="true" className="absolute left-8 top-0 h-8 w-5 bg-tinta" />
                <h1 className="mt-6 font-judul text-5xl font-semibold tracking-wider sm:text-6xl">
                    {nama}
                </h1>
                <div className="my-5 h-0.5 w-16 bg-tinta" />
                <p className="max-w-md leading-relaxed text-tinta/80">{slogan}</p>

                <div className="mt-8 bg-tinta p-5 text-sm leading-relaxed text-kertas">
                    <p>{lokasi}</p>
                    <p className="mt-1 text-kertas/70">{jam}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                <Link
                    href="/katalog"
                    className="bg-tinta hover:bg-tinta/85 text-kertas font-medium px-5 py-2.5 text-sm transition"
                >
                    Lihat Katalog
                </Link>
                <Link
                    href="/usulan"
                    className="border-2 border-tinta hover:bg-gurun/40 font-medium px-5 py-2.5 text-sm transition"
                >
                    Usulkan Buku
                </Link>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="relative min-h-64 overflow-hidden bg-linear-to-b from-surya via-gurun to-gobelin"
            >
                <div className="absolute left-1/2 top-1/3 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-kertas/70 bg-surya" />
                <p className="absolute bottom-6 right-8 font-judul text-8xl font-bold text-tinta [writing-mode:horizontal-rl] sm:text-9xl">
                    Senja
                </p>
            </div>
        </section>
    );
}

export default Hero;
