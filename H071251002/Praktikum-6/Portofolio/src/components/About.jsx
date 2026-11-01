const data = [
    { id: 1, title: "My Name", text: "Andi Fatimah Azzahrah", icon: "👤", badge: "Full Name" },
    { id: 2, title: "Education", text: "Information Systems Student", icon: "🎓", badge: "Major" },
    { id: 3, title: "University", text: "Hasanuddin University", icon: "🏛️", badge: "Campus" },
    { id: 4, title: "Based In", text: "Makassar, Indonesia", icon: "📍", badge: "Location" },
];

function About() {
    return (
        <section id="about" className="border-b-2 border-navy bg-white px-6 py-12 text-navy md:px-12 md:py-20 lg:px-20">
            <div className="mx-auto max-w-5xl">

                <div className="mb-12 text-center md:text-left">
                    <span className="inline-block rounded-full border-2 border-navy bg-amber-100 px-4 py-1 text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        Get To Know Me 
                    </span>

                    <h2 className="my-4 font-['Bricolage_Grotesque'] text-3xl font-bold md:text-4xl lg:text-5xl">
                        About <span className="text-pink underline decoration-navy decoration-4 underline-offset-4">Me</span>
                    </h2>

                    
                    <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                        Currently exploring the world of design and technology, from
                        experimenting with creative tools to building my first web projects.
                        I’m always learning, trying new things, and finding better ways
                        to bring my ideas to life.
                    </p>

                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col justify-between rounded-2xl border-2 border-navy bg-cream p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-2 hover:border-pink hover:bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-navy bg-white text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-pink/20">
                                    {item.icon}
                                </span>

                                <span className="text-[10px] font-bold uppercase tracking-widest text-pink">
                                    {item.badge}
                                </span>
                            </div>

                            <div>
                                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-pink">
                                    {item.title}
                                </p>

                                <p className="font-['Bricolage_Grotesque'] text-lg font-bold leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default About;
