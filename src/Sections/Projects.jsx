import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import JobPortalImage from "../assets/JobPortal.jpeg";
import VirtualAssistant from "../assets/VirtualAssistant.avif";
import Uber from "../assets/Uber.jpeg";
import MeraBestie from "../assets/MeraBestie.Webp";
import DigitalClock from "../assets/DigitalClock.jpg";
import Spotify from "../assets/Spotify.webp";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "NaukriSearch (Job Portal)",
      description:
        "A job portal built using the MERN stack where recruiters can post jobs and list companies. Students and job seekers can apply for jobs with separate logins for recruiters and applicants.",
      image: JobPortalImage, // Correct the reference here
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Krishnachavan1930/Job_Portal.git",
      demo: "https://naukri-search-demo.com",
      slug: "naukri-search",
      price: "Free",
    },
    {
      id: 2,
      title: "Shifra Virtual Assistant",
      description:
        "A voice-enabled virtual assistant built using React, JavaScript, and Tailwind CSS, which answers every question asked by the user in voice format.",
      image: VirtualAssistant,
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      github:
        "https://github.com/Krishnachavan1930/Shifra-Virtual_Assistent-using-React.git",
      demo: "https://shifra-virtual-assistant-demo.com",
      slug: "shifra-virtual-assistant",
      price: "Free",
    },
    {
      id: 3,
      title: "Uber-Like Website (MERN Stack)",
      description:
        "A MERN stack-based website that mimics the Uber app, where users can sign in as passengers or cab drivers. The application also integrates the Google Maps API for real-time location tracking.",
      image: Uber, // Correct the reference here
      technologies: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Google Maps API",
      ],
      github: "https://github.com/Krishnachavan1930/Uber-Clone-App-.git",
      demo: "https://uber-like-website-demo.com",
      slug: "uber-like-website",
      price: "Free",
    },
    {
      id: 4,
      title: "MeraBestie E-Commerce Website (MERN Stack)",
      description:
        "A fully-functional e-commerce website built with the MERN stack that allows users to browse products, add them to their cart, and make secure payments. Includes features like product management and user authentication.",
      image: MeraBestie, // Correct the reference here
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/yourusername/merabestie-e-commerce",
      demo: "https://merabestie-e-commerce-demo.com",
      slug: "merabestie-e-commerce",
      price: "$99.99",
    },
    {
      id: 6,
      title: "Digital Clock",
      description:
        "A simple digital clock that displays the correct current time using HTML, CSS, and JavaScript.",
      image: DigitalClock, // Correct the reference here
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/digital-clock",
      demo: "https://digital-clock-demo.com",
      slug: "digital-clock",
      price: "$0.00",
    },

    {
      id: 6,
      title: "Spotify Website Clone",
      description:
        "A simple Spotify website clone built using HTML and CSS, designed for practicing front-end concepts.",
      image: Spotify, // Correct the reference here
      technologies: ["HTML", "CSS"],
      github: "https://github.com/yourusername/spotify-website-clone",
      demo: "https://spotify-website-clone-demo.com",
      slug: "spotify-website-clone",
      price: "$0.00",
    },

    {
      id: 7,
      title: "Virtual Event Platform",
      description:
        "Complete solution for hosting and managing virtual events and conferences.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "WebRTC", "Socket.io", "Node.js"],
      github: "https://github.com/yourusername/virtual-events",
      demo: "https://virtual-events-demo.com",
      slug: "virtual-event-platform",
      price: "$149.99",
    },
  ];

  const scrollContainer = (direction) => {
    const container = document.querySelector(".projects-container");
    const scrollAmount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-blue-600">Projects</span>
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
          >
            <IoIosArrowBack className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={() => scrollContainer("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
          >
            <IoIosArrowForward className="w-6 h-6 text-gray-600" />
          </button>

          {/* Projects Container */}
          <div className="projects-container overflow-x-auto hide-scrollbar flex gap-6 pb-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transform transition-all duration-500 ease-in-out"
              >
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-blue-600 font-semibold">
                      {project.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
