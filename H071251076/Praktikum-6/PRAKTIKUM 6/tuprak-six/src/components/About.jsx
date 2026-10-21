const biodata = [
  { id: 1, label: 'Nama', value: 'Christian Jordan Suryadi' },
  { id: 2, label: 'Program studi', value: 'Sistem Informasi' },
  { id: 3, label: 'Kampus', value: 'Universitas Hasanuddin' },
  { id: 4, label: 'Domisili', value: 'Makassar' },
  { id: 5, label: 'Email', value: 'test@gmail.com' },
]

export default function About() {
  return (
    <section id="tentang" className="section about">
      <h2 className="section-title">Tentang saya</h2>
      <div className="about-body">
        <p className="about-text">
          
        </p>
        <dl className="about-list">
          {biodata.map((item) => (
            <div key={item.id} className="about-item">
              <dt className="about-label">{item.label}</dt>
              <dd className="about-value">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
