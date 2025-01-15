import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const ProjectDetail = () => {
  const { slug } = useParams();

  // This would typically come from an API or database
  const projects = {
    "e-commerce-platform": {
      title: "E-Commerce Platform",
      fullDescription: `A comprehensive e-commerce solution built with modern web technologies. This platform provides a seamless shopping experience with features including:

      • User authentication and profile management
      • Product catalog with advanced filtering and search
      • Shopping cart and wishlist functionality
      • Secure payment processing with Stripe
      • Order tracking and history
      • Admin dashboard for product and order management
      
      The application is built with performance and scalability in mind, utilizing React for the frontend and Node.js for the backend, with MongoDB as the database.`,
      image: "/placeholder.svg?height=600&width=800",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "Redux",
        "JWT",
      ],
      github: "https://github.com/yourusername/e-commerce",
      demo: "https://e-commerce-demo.com",
      challenges: `One of the main challenges was implementing real-time inventory management while handling concurrent transactions. This was solved by implementing optimistic updates on the frontend and a robust queuing system on the backend to ensure data consistency.`,
      learnings: `Through this project, I gained extensive experience in:
      • Integrating payment gateways and ensuring secure transactions
      • Optimizing database queries for large product catalogs
      • Implementing efficient state management in a complex React application
      • Handling user authentication and authorization
      • Deploying and scaling a full-stack application`,
    },
    // Add other projects here...
  };

  const project = projects[slug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <Link
            to="/projects"
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="prose max-w-none mb-6">
            <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
            <p className="whitespace-pre-line">{project.fullDescription}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">
              Challenges & Solutions
            </h2>
            <p>{project.challenges}</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Key Learnings</h2>
            <p className="whitespace-pre-line">{project.learnings}</p>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <FaGithub className="w-6 h-6 mr-2" />
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <FaExternalLinkAlt className="w-6 h-6 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
