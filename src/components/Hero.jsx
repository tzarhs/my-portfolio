import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

import heroImg from "../assets/giannis.jpg";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <section className="hero-section min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            className={`text-white font-mono leading-none transition-all duration-1000
        text-4xl sm:text-5xl md:text-6xl lg:text-[100px]
        ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }
      `}
          >
            Hi, I am
            <br />
            Giannis Tzaris.
          </h1>

          <h2
            className={`text-white font-mono mt-4 transition-all duration-1000 delay-300
        text-lg sm:text-xl md:text-2xl lg:text-[35px]
        ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }
      `}
          >
            Aspiring Software Developer
          </h2>
        </div>

        <div
          className={`w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 transition-opacity duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <img
            src={heroImg}
            alt="Giannis Tzaris"
            className="
        rounded-full object-cover
        h-60 w-60
        sm:h-72 sm:w-72
        md:h-80 md:w-80
        lg:h-[500px] lg:w-[500px]
      "
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
