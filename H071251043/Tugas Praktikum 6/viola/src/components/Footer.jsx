function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-stone-900 bg-[#d9f2e4] px-5 py-8 sm:px-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="handwritten mb-1 text-sm">thanks for stopping by!</p>
          <h2 className="text-2xl font-black">Let's stay connected.</h2>
          <p className="mt-2 text-sm">&copy; 2026 Viola Velisitas Davina</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-bold">
          <a
            className="underline underline-offset-4 hover:text-stone-600"
            href="https://github.com/violavelisitas"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="underline underline-offset-4 hover:text-stone-600"
            href="https://www.linkedin.com/in/viola-velisitas-davina"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="underline underline-offset-4 hover:text-stone-600"
            href="mailto:violavelisitas15@gmail.com"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;