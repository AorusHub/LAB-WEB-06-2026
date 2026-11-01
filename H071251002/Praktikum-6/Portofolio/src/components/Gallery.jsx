import foto1 from "../assets/gallery/foto1.jpg";
import foto2 from "../assets/gallery/foto2.jpg";
import foto3 from "../assets/gallery/foto3.jpg";
import foto4 from "../assets/gallery/foto4.jpg";

const fotos = [
    {
        id: 1,
        src: foto1,
        title: "My Design",
        category: "UI/UX & Canva",
        desc: "Design explorations & creative layouts.",
    },
    {
        id: 2,
        src: foto2,
        title: "My Moments",
        category: "Community",
        desc: "Memorable events & campus activities.",
    },
    {
        id: 3,
        src: foto3,
        title: "My Artwork",
        category: "Digital Art",
        desc: "Illustrations created with passion.",
    },
    {
        id: 4,
        src: foto4,
        title: "My Creativity",
        category: "Graphic & Video",
        desc: "Experiments in visual storytelling.",
    },
];

function Gallery() {
    return (
        <section id="projects" className="border-b-2 border-navy bg-pink/10 px-6 py-12 text-navy md:px-12 md:py-20 lg:px-20">
            <div className="mx-auto max-w-5xl">

                <div className="mb-10 text-center md:text-left">
                    <span className="inline-block rounded-full border-2 border-navy bg-amber-100 px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        Portfolio Showcase 
                    </span>

                    <h2 className="my-4 font-['Bricolage_Grotesque'] text-3xl font-bold md:text-4xl lg:text-5xl">
                        My <span className="text-pink underline decoration-navy decoration-4 underline-offset-4">Gallery</span>
                    </h2>

                    <p className="max-w-3xl leading-relaxed text-muted md:text-lg">
                        A collection of my creative work, favorite moments,
                        and little things that inspire me.
                    </p>
                </div>

        
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {fotos.map((foto) => (
                        <div
                            key={foto.id}
                            className="group overflow-hidden rounded-2xl border-2 border-navy bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-2 hover:border-pink hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div className="relative aspect-square overflow-hidden border-b-2 border-navy bg-cream">
                                <img
                                    src={foto.src}
                                    alt={foto.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <span className="absolute right-3 top-3 rounded-full border border-navy bg-pink px-2.5 py-1 text-[10px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    {foto.category}
                                </span>
                            </div>

                            <div className="p-4">
                                <h3 className="font-['Bricolage_Grotesque'] text-xl font-bold transition-colors group-hover:text-pink">
                                    {foto.title}
                                </h3>

                                <p className="mt-1 text-xs text-muted">
                                    {foto.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Gallery;