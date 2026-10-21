function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-28"
    >
      <div className="relative z-10">
        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#e66b48]">
          <span className="h-px w-8 bg-[#e66b48]" />
          Portofolio · 2026
        </p>
        <h1 className="max-w-2xl font-serif text-5xl leading-[1.04] text-[#202c29] sm:text-7xl">
          Halo, saya <span className="text-[#e66b48]">Aiman.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-[#53625d] sm:text-lg sm:leading-8">
          Mahasiswa yang senang merangkai ide menjadi pengalaman digital yang
          sederhana, berguna, dan terasa dekat dengan manusia.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#gallery"
            className="inline-flex items-center gap-3 rounded-full bg-[#202c29] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e66b48]"
          >
            Jelajahi karya <span aria-hidden="true">↘</span>
          </a>
          <button
            type="button"
            onClick={() => console.log('Terima kasih sudah berkunjung!')}
            className="text-sm font-semibold text-[#53625d] underline decoration-[#e66b48] decoration-2 underline-offset-4 transition-colors hover:text-[#e66b48]"
          >
            Sapa saya
          </button>
        </div>
        <p className="mt-12 font-mono text-xs tracking-wide text-[#8a9891]">H071251071 / INDONESIA</p>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="relative aspect-4/5 overflow-hidden bg-[#d9ded1]">
          <img
            src="/Aiman_Amil.jpg"
            alt="Foto profil Aiman Amil"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-[#f7f6f0] px-4 py-3 sm:bottom-6 sm:left-6">
            <p className="font-serif text-lg text-[#202c29]">Aiman Amil</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#738079]">
              Belajar · Berkarya · Berkembang
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero