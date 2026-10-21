function About() {
  const personalData = [
    { id: 1, label: 'Nama', value: 'Aiman Amil' },
    { id: 2, label: 'NIM', value: 'H071251071' },
    { id: 3, label: 'Status', value: 'Mahasiswa' },
    { id: 4, label: 'Minat', value: 'Web development' },
  ]

  return (
    <section id="about" className="bg-[#e8ede4]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e66b48]">Sedikit tentang saya</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#202c29] sm:text-5xl">
            Selalu ada hal baru untuk dipelajari.
          </h2>
        </div>
        <div>
          <p className="max-w-2xl text-base leading-7 text-[#53625d] sm:text-lg sm:leading-8">
            Saya Aiman, seorang mahasiswa yang tertarik pada teknologi dan
            kreativitas. Saya menikmati proses memahami sebuah masalah,
            mencoba berbagai pendekatan, lalu membangun solusi web yang rapi
            dan mudah digunakan.
          </p>
          <dl className="mt-8 grid grid-cols-2 border-t border-[#202c29]/15">
            {personalData.map((item) => (
              <div key={item.id} className="border-b border-[#202c29]/15 py-4 pr-3">
                <dt className="text-xs uppercase tracking-widest text-[#738079]">{item.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-[#202c29]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About