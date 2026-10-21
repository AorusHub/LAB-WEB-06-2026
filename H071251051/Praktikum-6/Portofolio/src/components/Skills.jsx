function Skills() {
    const keahlian = ["HTML", "CSS", "Java", "Python", "Graddle",];

    return (
        <section id="keahlian" className="bg-white py-16">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="font-display text-3xl font-bold text-violet-950">
                    Currently Exploring
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {keahlian.map((skill, index) => (
                        <span key = {index} className="rounded-full bg-violet-100 px-5 py-2 font-medium text-violet-700 transition hover:bg-violet-700 hover:text-white">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}   

export default Skills;
