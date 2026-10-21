function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'UI Design']

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-col justify-between gap-5 border-b border-[#202c29]/15 pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e66b48]">Yang sedang saya asah</p>
          <h2 className="mt-3 font-serif text-4xl text-[#202c29] sm:text-5xl">Keahlian</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#738079]">Teknologi dan proses kreatif yang saya gunakan untuk membangun ide.</p>
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-3 border-b border-[#202c29]/10 py-5">
            <span className="font-mono text-xs text-[#e66b48]">0{index + 1}</span>
            <span className="text-sm font-semibold text-[#202c29]">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills