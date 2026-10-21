import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f6f0] text-[#202c29]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
