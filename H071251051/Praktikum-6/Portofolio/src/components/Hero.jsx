function Hero() {
    const handleClick = () => {
        console.log("Tombol su di klik: Danke sudah berkunjung!");
    };

    return (
        <section 
            id="home"
            className="overflow-hidden bg-linear-to-br from-violet-950 via-violet-900 to-indigo-900 text-white">
                <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-10 px-4 py-16 md:flex-row md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                            Halo, Saya 
                        </p>
                        <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Rasyah Azizah Ode
                        </h1>
                        <p className="mx-auto mt-5 max-w-xl text-violet-100/80 md:mx-0">
                            Mahasiswa Universitas Hasanuddin yang sedang belajar pengembangan
                            web. Saya suka membuat tampilan yang rapi, responsif, dan
                            menyenangkan dilihat.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                            <button
                                onClick={handleClick}
                                className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-violet-950 transition hover:bg-amber-200">
                                    Salam kenal
                            </button>
                        <a 
                            href="https://github.com/rasyahode"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10">
                            GitHub Saya 
                        </a>
                    </div>
                </div>

                <div className="relative w-56 shrink-0 sm:w-64 lg:w-80">
                    <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-6 rounded-2xl bg-amber-300/80 sm:translate-x-4 sm:translate-y-4"></div>
                    <figure className="relative rotate-3 rounded-2xl bg-orange-50 p-3 pb-2 shadow-2xl transition-transform duration-500 hover:rotate-0 sm:p-4 sm:pb-3">
                        <img 
                            src="/foto-saya.jpeg"
                            alt="Foto rasyah"
                            className="aspect-4/5 w-full rounded-lg object-cover object-[50%_20%]">
                        </img>
                        <figcaption className="py-2 text-center font-hand text-2xl text-violet-900 sm:text-3xl">
                            (^^ゞ)
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;