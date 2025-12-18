export default function Navbar() {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <button className="text-white text-xl sm:text-2xl font-bold py-1 px-2 transition-colors duration-300">
        GIANNIS TZARIS
      </button>

      {/* Links */}
      <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
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
