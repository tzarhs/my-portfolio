import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText("j.tzaris@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="contact-section relative bg-black min-h-screen flex flex-col justify-center items-center px-8">
      <div className="flex flex-col items-start gap-4">
        <h1
          className={`text-white text-6xl font-mono text-left leading-none transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          LET&apos;S CONNECT
        </h1>

        <div className="flex flex-col items-start">
          <h4
            className={`text-white text-lg font-mono text-left transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            Find me at{" "}
            <span
              className="cursor-pointer underline transition-colors duration-200 hover:text-lime-400"
              onClick={handleCopy}
              title="Click to copy"
            >
              j.tzaris@gmail.com
            </span>
          </h4>

          {/* Toast — real layout element */}
          <div
            className={`text-sm font-mono bg-lime-400 text-black px-3 py-1 rounded-md mt-1 transition-all duration-300 ${
              copied
                ? "opacity-100 max-h-10 translate-y-0"
                : "opacity-0 max-h-0 -translate-y-1 overflow-hidden"
            }`}
          >
            Copied!
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/tzarhs" target="_blank" rel="noreferrer">
            <FaGithub className="text-lime-500 text-3xl hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://www.linkedin.com/in/giannis-tzaris/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-lime-500 text-3xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
