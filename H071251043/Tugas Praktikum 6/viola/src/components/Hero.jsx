function Hero() {
  function handleContactClick() {
    console.log("Viola's portfolio contact button clicked!");
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-stone-300 px-5 pb-16 pt-12 text-center sm:px-12 sm:pb-20 sm:pt-16"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="mb-3 flex flex-wrap items-center justify-center gap-3 sm:gap-8">
          <span className="sticker rounded-full bg-[#d9f2e4] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
            Learning by building
          </span>
          <span className="handwritten text-sm">my little corner of the internet</span>
          <span className="sticker rounded-full bg-[#fff0b8] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
            Curious by nature
          </span>
        </div>

        <p className="handwritten mb-1 text-sm">hello, my name is</p>
        <div className="relative mb-5 inline-block border-2 border-[#df9474] px-5 py-2 sm:px-12 sm:py-3">
          <span className="font-display text-6xl font-black uppercase leading-none tracking-tight sm:text-8xl">
            Viola
          </span>
          <span className="absolute -right-3 -top-3 rotate-12 text-2xl">✳</span>
        </div>

        <p className="mb-7 max-w-2xl text-base font-semibold leading-relaxed sm:text-2xl">
          Information Systems student exploring technology,
          <span className="mx-1 inline-block rounded bg-[#d9f2e4] px-2">one project</span>
          at a time. <span aria-hidden="true">✿</span>
        </p>

        <div className="mb-6 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
          <div className="relative order-2 w-28 rotate-[-3deg] border-4 border-white bg-white p-1 shadow-md sm:order-1 sm:w-32">
            <span className="tape" aria-hidden="true" />
            <img
              src="/profile.jpeg"
              alt="Placeholder for Viola's profile"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="handwritten py-1 text-center text-xs">that's me!</p>
          </div>
          <div className="order-1 max-w-md text-center sm:order-2 sm:text-left">
            <p className="handwritten text-lg leading-relaxed sm:text-xl">
              I'm building my foundation in web development while exploring AI,
              data science, and cybersecurity to discover where I want to grow next.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              <span className="rounded-full bg-[#dceaff] px-3 py-1 text-xs font-bold">Web Development</span>
              <span className="rounded-full bg-[#d9f2e4] px-3 py-1 text-xs font-bold">AI & Data</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleContactClick}
          className="rounded-md border-2 border-stone-900 bg-stone-900 px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[4px_4px_0_#d9f2e4] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#fff0b8]"
        >
          Let's connect ↗
        </button>
      </div>
      <span className="absolute bottom-5 left-6 hidden rotate-[-9deg] rounded bg-[#fff0b8] px-3 py-2 text-xs font-bold sm:block">
        still learning ★
      </span>
      <span className="absolute bottom-7 right-7 hidden rotate-6 rounded bg-[#d9f2e4] px-3 py-2 text-xs font-bold sm:block">
        made with curiosity
      </span>
    </section>
  );
}

export default Hero;