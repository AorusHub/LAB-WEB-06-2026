import foto1 from '../assets/gallery/p1.png'
import foto2 from '../assets/gallery/p2.jpeg'
import foto3 from '../assets/gallery/HSTVL.jpg'

const photos = [
  { id: 1, src: foto1, title: 'Sistem Rekomendasi Laptop (Proyek DAA)' },
  { id: 2, src: foto2, title: 'Random img 1' },
  { id: 3, src: foto3, title: 'Random img 2' },
]

export default function Gallery() {
  return (
    <section id="galeri" className="section gallery">
      <h2 className="section-title">Galeri</h2>
      <div className="gallery-grid">
        {photos.map((foto) => (
          <figure key={foto.id} className="gallery-card">
            <img src={foto.src} alt={foto.title} className="gallery-img" />
            <figcaption className="gallery-caption">{foto.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
