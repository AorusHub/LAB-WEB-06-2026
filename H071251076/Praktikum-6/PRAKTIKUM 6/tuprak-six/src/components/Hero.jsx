export default function Hero() {
  const handleClick = () => {
    console.log('what you doing here hmmmmm?')
  }

  return (
    <section id="beranda" className="hero">
      <div className="hero-text">
        <p className="hero-greeting">Halo, saya</p>
        <h1 className="hero-name">Christian Jordan Suryadi</h1>
        <p className="hero-desc">
          Just some dude who likes DBMS thingy. And AI and game dev.
        </p>
        <button type="button" className="hero-button" onClick={handleClick}>
          Say Hello
        </button>
      </div>
      <div className="hero-photo-wrap">
        <img
          src="/gato.jpeg"
          alt="Foto profil Christian Jordan Suryadi"
          className="hero-photo"
        />
      </div>
    </section>
  )
}
