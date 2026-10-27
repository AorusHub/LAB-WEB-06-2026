import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen px-3 py-4 sm:px-6 sm:py-7">
      <div className="paper-lines mx-auto max-w-6xl overflow-hidden border border-white/70 shadow-xl">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Gallery />
        </main>
        <Footer />
      </div>
      <p className="mx-auto mt-3 max-w-6xl text-center text-xs text-white/90">
        Built with React + Vite · Styled with Tailwind CSS
      </p>
    </div>
  );
}

export default App;