import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
      slug: "e-commerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://task-manager-demo.com",
      slug: "task-management-app"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "OpenWeatherMap API", "Leaflet.js"],
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard-demo.com",
      slug: "weather-dashboard"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
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
    </section>
  );
};

export default Projects;
