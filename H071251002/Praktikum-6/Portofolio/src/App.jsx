import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;