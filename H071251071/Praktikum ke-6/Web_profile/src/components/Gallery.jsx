import foto1 from '../assets/gallery/foto1.jpg'
import foto2 from '../assets/gallery/foto2.png'
import foto3 from '../assets/gallery/foto3.jpg'
import foto4 from '../assets/gallery/foto4.png'

function Gallery() {
  const photos = [
    { id: 1, src: foto1, title: 'Potret', category: 'Momen pilihan' },
    { id: 2, src: foto2, title: 'Web', category: 'Design' },
    { id: 3, src: foto3, title: 'Keseharian', category: 'Catatan visual' },
    { id: 4, src: foto4, title: 'Web lainnya', category: 'Collection' },
  ]

  return (
    <section id="gallery" className="bg-[#202c29] text-[#f7f6f0]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ed9a7f]">Kumpulan momen</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Galeri</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#c1cbc5]">Fragmen kecil dari hal-hal yang menginspirasi saya.</p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {photos.map((foto) => (
            <figure key={foto.id} className="group min-w-0">
              <div className="aspect-4/5 overflow-hidden bg-[#52605a]">
                <img
                  src={foto.src}
                  alt={foto.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="pt-3">
                <p className="font-serif text-lg">{foto.title}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#aebbb4]">{foto.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery