import { useEffect, useState } from "react";
import EmailyImg from "../assets/Emaily.png";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const projectsSection = document.querySelector(".projects-section");
    if (!projectsSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(projectsSection);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="projects-section bg-black h-screen flex flex-col px-8">
      <div>
        <h1
          className={`text-white text-6xl font-mono text-left p-4 leading-none transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          FEATURED PROJECTS
        </h1>
        <p
          className={`text-white text-2xl font-mono text-left p-4 -mt-6 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          Here are some of my recent works showcasing my skills.
        </p>
      </div>
      <div className="flex flex-row items-center gap-8 p-12">
        {/* Left Column - Image */}
        <div className="w-1/2 flex justify-start">
          <img
            src={EmailyImg}
            alt="Emaily"
            className="w-[600px] h-auto rounded-lg"
          />
        </div>

        {/* Right Column - Text + Links */}
        <div className="w-1/2 flex flex-col gap-4 text-white text-left">
          <h1 className="text-3xl font-bold underline">Emaily.</h1>

          <p className="text-lg">
            In this project , I developed a full-stack web application feedback
            collection platform <br />
            that allows authenticated users to send mass emails to lists of
            recipients and
            <br /> collect structured feedback. built as part of an advanced
            training course in React, Redux, Node, and MongoDB.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/tzarhs/Emaily"
              target="_blank"
              className="text-lime-400 hover:text-lime-300 transition"
            >
              <span className="underline inline-flex items-center">
                GitHub
                <FaGithub className="ml-1" />
              </span>
            </a>
            <a
              href="https:/emaily-npo8.onrender.com/"
              target="_blank"
              className="text-lime-400 underline hover:text-lime-300 transition"
            >
              Live Demo &#x2197;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
