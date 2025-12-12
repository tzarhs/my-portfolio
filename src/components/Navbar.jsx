export default function Navbar() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black bg-opacity-50 backdrop-blur">
      <button className="text-white text-2xl font-bold py-2 px-6 transition-colors duration-300">
        GIANNIS TZARIS
      </button>
      <div className="flex gap-8">
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "#about")}
          className="text-white hover:text-lime-500 transition-colors duration-300 font-mono"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, "#projects")}
          className="text-white hover:text-lime-500 transition-colors duration-300 font-mono"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="text-white hover:text-lime-500 transition-colors duration-300 font-mono"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
