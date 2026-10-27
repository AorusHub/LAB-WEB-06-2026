const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "PostgreSQL",
  "Git & GitHub",
];

function Skills() {
  return (
    <section id="skills" className="border-y border-stone-300 bg-white/35 px-5 py-12 sm:px-10 sm:py-14">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="handwritten mb-1 text-sm">tools in my backpack</p>
          <h2 className="text-3xl font-black sm:text-4xl">Things I'm learning</h2>
        </div>
        <span className="handwritten text-sm">one step at a time ✿</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`sticker rounded-sm px-4 py-3 text-sm font-black sm:text-base ${
              index % 3 === 0
                ? "bg-[#dceaff]"
                : index % 3 === 1
                  ? "bg-[#d9f2e4]"
                  : "bg-[#fff0b8]"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-stone-600">
        These are technologies I've explored through coursework and projects. I'm still learning
        and improving my foundations.
      </p>
    </section>
  );
}

export default Skills;