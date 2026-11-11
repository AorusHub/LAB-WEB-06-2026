const skills = [
  'Basis data dan SQL',
  'Machine Learning',
  'Pemodelan proses bisnis (UML dan BPMN)',
  'Manajemen proyek TI',
]

export default function Skills() {
  return (
    <section id="keahlian" className="section skills">
      <h2 className="section-title">Keahlian</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
