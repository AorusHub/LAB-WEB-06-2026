const personalDetails = [
  { id: 1, label: "Study", value: "Information Systems" },
  { id: 2, label: "Currently learning", value: "Web Development" },
  { id: 3, label: "Exploring", value: "AI, Data Science & Cybersecurity" },
  { id: 4, label: "Based in", value: "Indonesia" },
];

function About() {
  return (
    <section id="about" className="px-5 py-12 sm:px-10 sm:py-16">
      <div className="mb-7 flex items-center justify-between gap-3">
        <p className="handwritten text-sm">a little about me</p>
        <span className="rounded-full border border-stone-400 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
          01 / About
        </span>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-sm rotate-[-2deg] border-4 border-white bg-white p-2 shadow-lg">
          <span className="tape" aria-hidden="true" />
          <div className="paper-grid flex aspect-[5/4] items-center justify-center bg-[#dceaff] p-5 text-center">
            <div>
              <span className="text-4xl">✎</span>
              <img
                src="/learning.jpeg"
                alt="My learning journey"
                className="aspect-[5/4] w-full object-cover"
              />              
            </div>
          </div>
          <p className="handwritten py-2 text-center text-sm">learning journey</p>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
            Curious mind, <span className="underline decoration-[#8ccdb0] decoration-8 underline-offset-2">hands-on learner.</span>
          </h2>
          <p className="handwritten text-base leading-8 sm:text-lg">
            I'm an Information Systems student who enjoys learning by building practical projects.
            I'm currently strengthening my web development skills while exploring AI and data science.
            I'm also curious about cybersecurity and hope to discover the area where I can make the
            most meaningful contribution.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {personalDetails.map((item) => (
              <div key={item.id} className="border-l-4 border-[#8ccdb0] bg-white/70 px-4 py-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;