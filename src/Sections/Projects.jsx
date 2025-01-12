import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, and secure payments.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/e-commerce",
      demo: "https://e-commerce-demo.com",
      slug: "e-commerce-platform",
      price: "$99.99"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com",
      slug: "task-management-app",
      price: "$49.99"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "OpenWeatherMap API", "Leaflet.js"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard-demo.com",
      slug: "weather-dashboard",
      price: "$29.99"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Advanced analytics platform for social media performance tracking and insights.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      github: "https://github.com/yourusername/social-analytics",
      demo: "https://social-analytics-demo.com",
      slug: "social-media-analytics",
      price: "$79.99"
    },
    {
      id: 5,
      title: "Virtual Event Platform",
      description: "Complete solution for hosting and managing virtual events and conferences.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "WebRTC", "Socket.io", "Node.js"],
      github: "https://github.com/yourusername/virtual-events",
      demo: "https://virtual-events-demo.com",
      slug: "virtual-event-platform",
      price: "$149.99"
    }
  ];

  const scrollContainer = (direction) => {
    const container = document.querySelector('.projects-container');
    const scrollAmount = direction === 'left' ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
          >
            <IoIosArrowBack className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={() => scrollContainer('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
          >
            <IoIosArrowForward className="w-6 h-6 text-gray-600" />
          </button>

          {/* Projects Container */}
          <div className="projects-container overflow-x-auto hide-scrollbar flex gap-6 pb-4">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-none w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transform transition-all duration-300 ease-in-out"
              >
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-blue-600 font-semibold">{project.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
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
