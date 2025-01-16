import React, { useState } from "react";
import { Award, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

function App() {
  const [showMore, setShowMore] = useState(false);

  const mainCertificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      description:
        "Advanced web development certification covering modern full-stack technologies",
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      description: "Professional certification for AWS cloud architecture",
    },
    {
      title: "Data Science Specialization",
      issuer: "Coursera",
      date: "2022",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description:
        "Comprehensive data science and machine learning certification",
    },
  ];

  const additionalCertificates = [
    { title: "JavaScript Advanced", issuer: "Udemy", date: "2023" },
    { title: "React Native", issuer: "Meta", date: "2023" },
    { title: "Python Programming", issuer: "Codecademy", date: "2022" },
    { title: "UI/UX Design", issuer: "Google", date: "2022" },
    { title: "Cybersecurity Basics", issuer: "IBM", date: "2022" },
    { title: "Agile Development", issuer: "Coursera", date: "2022" },
    { title: "Docker Essentials", issuer: "Linux Foundation", date: "2021" },
    { title: "GraphQL Master", issuer: "Apollo", date: "2021" },
    { title: "TypeScript", issuer: "Microsoft", date: "2021" },
    { title: "Node.js Advanced", issuer: "OpenJS Foundation", date: "2021" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-900 to-gray-800 text-Black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Professional Certifications
          </h1>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development
          </p>
        </div>

        {/* Main Certificates */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white-800/50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>
              <div className="flex items-start mb-4">
                <Award className="w-6 h-6 text-blue-400 mr-2 flex-shrink-0" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-gray-400 mb-2">{cert.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certificates */}
        <div className="bg-white-800/30 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center justify-between text-xl font-semibold mb-6 hover:text-blue-400 transition-colors"
          >
            <span>Additional Certifications</span>
            {showMore ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>

          {showMore && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalCertificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">{cert.date}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
