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
      <section class="h-full bg-black flex items-center justify-between px-8">
        <div class="w-1/2">
          <h1
            class={`text-white text-[100px] font-mono text-left p-4 leading-none transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            Hi, i am
            <br />
            Giannis Tzaris.
          </h1>
          <h2
            class={`text-white text-[35px] font-mono text-left p-4 -mt-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            Software Developer
          </h2>
        </div>

        <div class="w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Giannis Tzaris"
            class="h-[500px] w-[500px] rounded-full object-cover"
          />
        </div>

        <button
          onClick={() => window.scrollBy(0, 1000)}
          class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white  hover:bg-lime-500 py-2 px-4 rounded-full duration-300"
        >
          &#8595;
        </button>
      </section>
    </>
  );
}

export default Hero;
