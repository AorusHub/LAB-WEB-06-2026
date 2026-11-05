import CozyTheHotelOOP16 from "../assets/gallery/CoztTheHotelOOP16.jpeg";
import Sisfo25 from "../assets/gallery/galeriWithCicpo.jpeg";
import Matiks from "../assets/gallery/kegiatanMAtIKS.jpeg";
import AP3 from "../assets/gallery/midprojekgroceryStoresAP3.jpeg";

function Gallery() {
    const galeriFoto = [
        { id: 1, src: CozyTheHotelOOP16, judul: "CozyTheHotel OOP-16" },
        { id: 2, src: Sisfo25, judul: "Sisfo25" },
        { id: 3, src: Matiks, judul: "Matiks" },
        { id: 4, src: AP3, judul: "Grocery Stores AP-3" },
    ];

    return (
        <section id="galeri" className="bg-violet-50 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-center font-display text-3xl font-bold text-violet-950">
                    Galeri
                </h2>
                <p className="mt-2 text-center text-slate-500"> </p>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galeriFoto.map((foto) => (
                        <figure key={foto.id} className="overflow-hidden rounded-2xl bg-white shadow-md">
                            <div className="overflow-hidden">
                                <img
                                    src={foto.src}
                                    alt={foto.judul}
                                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                            </div>
                            <figcaption className="p-3 text-center font-medium text-slate-700">
                                {foto.judul}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;