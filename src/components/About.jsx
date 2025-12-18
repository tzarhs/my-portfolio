import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section relative bg-black h-screen flex items-center px-8">
      <div>
        <h1
          className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-mono text-left p-4 leading-none transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          ABOUT ME
        </h1>
        <p
          className={`text-white sm:text-base md:text-lg lg:text-2xl font-mono text-left p-4 -mt-6 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          Applied Informatics graduate with a solid understanding of web
          development and backend technologies. <br />
          Experienced with JavaScript, PHP, React and MongoDB through academic
          projects and personal work.
          <br /> Looking for an entry-level software developer role to apply my
          skills, continue learning and <br />
          build a career in software development.
        </p>
      </div>
      {/* <button
        onClick={() =>
          window.scrollBy({ top: 1000, left: 0, behavior: "smooth" })
        }
        class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white  hover:bg-lime-500 py-2 px-4 rounded-full duration-300"
      >
        &#8595;
      </button> */}
    </section>
  );
}
