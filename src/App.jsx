import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        class="fixed right-4 bottom-4 transform -translate-x-1/2 bg-white  hover:bg-lime-500 py-2 px-4 rounded-full duration-300"
      >
        &#8593;
      </button>
    </>
  );
}

export default App;
