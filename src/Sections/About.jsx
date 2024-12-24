import React from "react";
import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";

const AboutMeSection = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">My Journey</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              As a Full Stack Developer, I've honed my skills in creating seamless, efficient, and user-centric web applications. My passion for technology drives me to constantly explore new frameworks and methodologies, ensuring I'm always at the forefront of web development.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing tech blogs, or mentoring aspiring developers. I believe in the power of community and continuous learning in the ever-evolving world of technology.
            </p>
          </div>

          <div className="col-span-1 space-y-6">
            <SkillCard
              icon={<FaCode className="w-8 h-8 text-white" />}
              title="Front-end Mastery"
              description="Crafting responsive UIs with React, Next.js, and modern CSS"
              color="bg-gradient-to-r from-blue-400 to-blue-600"
            />
            <SkillCard
              icon={<FaServer className="w-8 h-8 text-white" />}
              title="Back-end Expertise"
              description="Building robust APIs with Node.js, Express, and databases"
              color="bg-gradient-to-r from-purple-400 to-purple-600"
            />
            <SkillCard
              icon={<FaMobileAlt className="w-8 h-8 text-white" />}
              title="Mobile Development"
              description="Creating cross-platform apps with React Native"
              color="bg-gradient-to-r from-pink-400 to-pink-600"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, description, color }) => {
  return (
    <div className={`${color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1`}>
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
};

export default AboutMeSection;

