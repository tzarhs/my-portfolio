import { useEffect, useState } from "react";
import EmailyImg from "../assets/Emaily.png";
import BlogImg from "../assets/Blog.png";
import ECommerceImg from "../assets/ECommerce.png";
import { FaGithub } from "react-icons/fa";
import cartImg from "../assets/Cart.png";
import checkoutImg from "../assets/Checkout.png";
import homeImg from "../assets/Home.png";
import stripeImg from "../assets/Stripe.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [homeImg, cartImg, checkoutImg, stripeImg];

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
      { threshold: 0.1 },
    );

    observer.observe(projectsSection);
    return () => observer.disconnect();
  }, []);

  // Image slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
        <div
          className={`w-full lg:w-1/2 flex justify-center lg:justify-start transition-opacity duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="bg-gray-500 rounded-2xl p-4 shadow-md">
            <img
              src={EmailyImg}
              alt="emaily"
              className="w-full max-w-[700px] h-auto rounded-lg"
            />
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 flex flex-col gap-4 text-white text-left mt-4 lg:mt-0 transition-opacity duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold underline">
            Emaily
          </h1>

          <p className="text-justify max-w-prose text-sm sm:text-base md:text-lg lg:text-lg">
            A full-stack feedback collection platform that allows authenticated
            users to send bulk emails to recipient lists and collect structured
            feedback, developed as part of advanced training in React, Redux,
            Node.js, and MongoDB.
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
              href="https://emaily-npo8.onrender.com"
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
        <div
          className={`w-full lg:w-1/2 flex justify-center lg:justify-start transition-opacity duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="bg-gray-500 rounded-2xl p-4 shadow-md">
            <img
              src={BlogImg}
              alt="blog"
              className="w-full max-w-[700px] h-auto rounded-lg"
            />
          </div>
        </div>

        <div
          className={`w-full lg:w-1/2 flex flex-col gap-4 text-white text-left mt-4 lg:mt-0 transition-opacity duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold underline">
            My-Blog
          </h1>
          <p className="text-sm text-justify max-w-prose sm:text-base md:text-lg lg:text-lg">
            A full-stack blog application developed with Node.js, Express, and
            MongoDB, enabling users to create, read, update, and delete blog
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
            <a
              href="https://my-blog-five-gamma-46.vercel.app/"
              target="_blank"
              className="text-lime-400 underline hover:text-lime-300 transition"
            >
              Live Demo &#x2197;
            </a>
          </div>
        </div>
      </div>
      {/* Third Project */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 p-12">
        <div
          className={`w-full lg:w-1/2 flex justify-center lg:justify-start transition-opacity duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="relative bg-gray-500 rounded-2xl p-4 shadow-md">
            <img
              src={images[currentIndex]}
              alt="ecommerce"
              className="w-full max-w-[700px] h-auto rounded-lg transition-all duration-500"
            />

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 flex flex-col gap-4 text-white text-left mt-4 lg:mt-0 transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold underline">
            E-Commerce
          </h1>
          <p className="text-sm text-justify max-w-prose sm:text-base md:text-lg lg:text-lg">
            I am currently working as part of a team on the development of a
            modern e-commerce website. My contributions include designing and
            implementing the Home page, Cart, and Checkout features, as well as
            integrating Stripe for secure online payments.{" "}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/Stamkopoulos/e-commerce"
              target="_blank"
              className="text-lime-400 hover:text-lime-300 transition underline inline-flex items-center"
            >
              GitHub <FaGithub className="ml-1" />
            </a>
            <a
              href="https://qloset-smoky.vercel.app/"
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
