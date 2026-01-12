import "./App.css";
import { useEffect, useState } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowUp(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {showUp && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed right-8 bottom-8 bg-white hover:bg-lime-500 py-2 px-4 rounded-full animate-bounce duration-300"
        >
          &#8593;
        </button>
      )}
      <Footer />
    </>
  );
}

export default App;
