import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <section className="w-full h-screen flex flex-col">
        <Navbar />
        <Hero />
      </section>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
