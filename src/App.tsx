import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroMobile from "./components/HeroMobile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <Navbar />
        <Hero />
        <HeroMobile />
      </section>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
