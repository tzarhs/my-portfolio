import { useEffect, useState } from "react";
import EmailyImg from "../assets/Emaily.png";
import BlogImg from "../assets/Blog.png";
import ECommerceImg from "../assets/ECommerce.png";
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
    <div className="projects-section bg-black min-h-screen flex flex-col px-8">
      <div>
        <h1
          className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-mono text-left p-4 leading-none transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          FEATURED PROJECTS
        </h1>
        <p
          className={`text-white text-base sm:text-md md:text-lg lg:text-2xl font-mono text-left p-4 -mt-6 transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          Here are some of my recent works showcasing my skills.
        </p>
      </div>
      {/* First Project */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 p-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="bg-gray-500 rounded-2xl p-4 shadow-md">
            <img
              src={EmailyImg}
              alt="emaily"
              className="w-[600px] h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-white text-left mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold underline">
            Emaily
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-lg">
            In this project , I developed a full-stack web application feedback
            collection platform <br />
            that allows authenticated users to send mass emails to lists of
            recipients and
            <br /> collect structured feedback. Built as part of an advanced
            training course in React, Redux, Node, and MongoDB.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/tzarhs/Emaily"
              target="_blank"
              className="text-lime-400 hover:text-lime-300 transition underline inline-flex items-center"
            >
              GitHub <FaGithub className="ml-1" />
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
      "{/* Second Project */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 p-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="bg-gray-500 rounded-2xl p-4 shadow-md">
            <img
              src={BlogImg}
              alt="blog"
              className="w-[600px] h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-white text-left mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold underline">
            My-Blog
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg">
            A full-stack blog application built with Node.js, Express, and
            MongoDB that allows users to create, read, update, and delete blog
            posts.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/tzarhs/my-blog"
              target="_blank"
              className="text-lime-400 hover:text-lime-300 transition underline inline-flex items-center"
            >
              GitHub <FaGithub className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      {/* Third Project */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 p-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="bg-gray-500 rounded-2xl p-4 shadow-md">
            <img
              src={ECommerceImg}
              alt="ecommerce"
              className="w-[600px] h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-white text-left mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold underline">
            E-Commerce
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg">
            Currently working on an E-Commerce website with 2 of my friends.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/Stamkopoulos/e-commerce"
              target="_blank"
              className="text-lime-400 hover:text-lime-300 transition underline inline-flex items-center"
            >
              GitHub <FaGithub className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
