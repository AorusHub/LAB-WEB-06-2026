function Hero() {
    return (
        <section className="overflow-hidden border-b-2 border-navy bg-cream px-6 py-12 text-navy md:px-12 md:py-20 lg:px-20">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">

                <div className="w-full text-center md:w-1/2 md:text-left">
                    <span className="inline-block rounded-full border-2 border-navy bg-amber-100 px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        👋 What's up!
                    </span>

                    <h1 className="my-5 font-['Bricolage_Grotesque'] text-3xl font-bold md:text-4xl lg:text-5xl">
                        I'm <span className="text-pink underline decoration-navy decoration-4 underline-offset-4">Andi Fatimah</span> Azzahrah
                    </h1>

                    <p className="mb-6 leading-relaxed text-muted md:text-lg">
                        An Information Systems student with an interest in design and web development.
                         I enjoy exploring new ideas, learning new tools, and creating digital experiences 
                         that combine creativity with functionality.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                        <button
                            className="rounded-full border-2 border-navy bg-pink px-6 py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:scale-95"
                            onClick={() => console.log("Hi, hit me up!")}
                        >
                            Contact Me ↗
                        </button>

                        <a
                            className="rounded-full border-2 border-navy bg-white px-6 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:bg-amber-100 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:scale-95"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                <div className="flex w-full justify-center md:w-1/2">
                    <div className="group w-full max-w-xs sm:max-w-sm lg:max-w-md">
                        <div className="overflow-hidden rounded-3xl border-4 border-navy bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            <img
                                src="/Hero.png"
                                alt="Foto profil"
                                className="w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;