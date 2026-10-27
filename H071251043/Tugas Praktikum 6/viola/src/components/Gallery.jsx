import kbsImage from "../assets/gallery/kbs.jpeg";
import simbakoImage from "../assets/gallery/simbako.jpeg";
import olalaImage from "../assets/gallery/olala.png";
import palsImage from "../assets/gallery/pals.jpeg";

const projects = [
  {
    id: 1,
    title: "KBS Calculator",
    category: "Python · Coursework",
    description:
      "A text-based multifunction calculator for arithmetic, basic statistics, factorials, GCD/LCM, 3D shapes, and unit conversions.",
    image: kbsImage,
    color: "bg-[#dceaff]",
    number: "01",
  },
  {
    id: 2,
    title: "SIMBAKO",
    category: "Java · JavaFX · Team project",
    description:
      "A desktop application for product management, inventory, and transactions. Add a short note about your own contribution here.",
    image: simbakoImage,
    color: "bg-[#d9f2e4]",
    number: "02",
  },
  {
    id: 3,
    title: "Kios Olala",
    category: "HTML · CSS · JavaScript",
    description:
      "A website for a real family food business, applying web development to a practical small-business context.",
    image: olalaImage,
    color: "bg-[#fff0b8]",
    number: "03",
  },
  {
    id: 4,
    title: "PALS",
    category: "React · Express · Firebase · ML · Team project",
    description:
      "A collaborative English-learning platform exploring personalized recommendations through quiz results and learner-behaviour data.",
    image: palsImage,
    color: "bg-[#dceaff]",
    number: "04",
  },
];

function Gallery() {
  return (
    <section id="projects" className="px-5 py-12 sm:px-10 sm:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="handwritten mb-1 text-sm">a few things I've made</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Projects & experiments</h2>
        </div>
        <span className="rounded-full bg-[#fff0b8] px-3 py-2 text-[10px] font-black uppercase tracking-widest">
          selected work
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((foto) => (
          <article
            key={foto.id}
            className="project-card relative border border-stone-300 bg-[#fbfaf5] p-3 shadow-[4px_5px_0_rgba(35,35,35,0.08)]"
          >
            <div className={`relative mb-4 overflow-hidden p-3 ${foto.color}`}>
              <span className="tape" aria-hidden="true" />
              <img
                src={foto.image}
                alt={`${foto.title} project preview`}
                className="aspect-[16/10] w-full border-4 border-white bg-white object-cover shadow-md"
              />
              <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black">
                PROJECT {foto.number}
              </span>
            </div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-stone-500">
              {foto.category}
            </p>
            <h3 className="mb-2 text-2xl font-black">{foto.title}</h3>
            <p className="handwritten text-sm leading-6 text-stone-700">{foto.description}</p>
          </article>
        ))}
      </div>

      <p className="handwritten mt-8 text-center text-sm">
        More projects, more lessons, more things to figure out. ✿
      </p>
    </section>
  );
}

export default Gallery;