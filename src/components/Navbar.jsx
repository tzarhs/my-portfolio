import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, target) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu when link is clicked
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <button className="text-white text-md sm:text-2xl font-bold py-1 px-2 transition-colors duration-300">
        GIANNIS TZARIS
      </button>

      {/* Links */}
      <>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 md:gap-6 text-sm md:text-base">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-8 mt-20 px-8">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="text-white hover:text-lime-500 transition-colors duration-300 font-mono text-xl"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="text-white hover:text-lime-500 transition-colors duration-300 font-mono text-xl"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="text-white hover:text-lime-500 transition-colors duration-300 font-mono text-xl"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </>
    </nav>
  );
}
