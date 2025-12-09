import { useEffect, useState } from "react";

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
    <div className="projects-section bg-black h-screen flex items-center px-8">
      <div>
        <h1
          className={`text-white text-[80px] font-mono text-left p-4 leading-none transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          Featured Projects
        </h1>
      </div>
    </div>
  );
}
