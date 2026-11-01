const skills = [
    "Figma",
    "Canva",
    "Alight Motion",
    "CapCut",
    "Ibis Paint",
];

function Skills() {
    return (
        <section
            id="skills"
            className="border-b-2 border-navy bg-amber-100/60 px-6 py-12 text-navy md:px-12 md:py-20 lg:px-20"
        >
            <div className="mx-auto max-w-5xl">
                <p className="mb-2 font-semibold uppercase tracking-wider text-pink">
                    What I Can Do
                </p>

                <h2 className="mb-8 font-['Bricolage_Grotesque'] text-3xl font-bold md:text-4xl">
                    My Skills
                </h2>

                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="rounded-xl border-2 border-navy bg-white px-5 py-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:bg-pink hover:text-white"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
