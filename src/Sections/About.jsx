import React, { useState, useEffect } from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa"; // Imported icons
import { BsFillPhoneFill } from "react-icons/bs"; // For mobile
import { useNavigate } from "react-router-dom"; // React Router navigation
import { FaGraduationCap, FaUserTie } from "react-icons/fa"; // For Experience and Education

const AboutMeSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("opacity-100", "translate-y-0");
      }, index * 300);
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white-200 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Me Header */}
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 fade-in opacity-0 translate-y-8">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main About Information */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in opacity-0 translate-y-8">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">
              My Journey
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I’m a Full Stack Developer with a passion for creating dynamic,
              user-focused web applications. Whether it's front-end or back-end
              development, I’m committed to delivering efficient, clean, and
              scalable code. I always stay updated with new technologies to
              offer the best solutions for my clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I love collaborating with clients to bring their ideas to life.
              Whether it’s building custom websites, creating APIs, or mobile
              apps, I aim to deliver solutions that are functional and
              intuitive. I’m also active in the open-source community and enjoy
              mentoring fellow developers.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            {/* Front-end Development Card */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 fade-in opacity-0 translate-x-8 sm:mx-4 md:mx-0 lg:mx-0">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FaLaptopCode className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Front-end Development</h4>
              </div>
              <p className="text-sm opacity-90">
                Building interactive and responsive user interfaces with React,
                Next.js, and modern CSS
              </p>
            </div>

            {/* Back-end Development Card */}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 fade-in opacity-0 translate-x-8 sm:mx-4 md:mx-0 lg:mx-0">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FaServer className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Back-end Development</h4>
              </div>
              <p className="text-sm opacity-90">
                Developing scalable and secure backends using Node.js, Express,
                and MySQL
              </p>
            </div>

            {/* Mobile Development Card */}
            <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 fade-in opacity-0 translate-x-8 sm:mx-4 md:mx-0 lg:mx-0">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <BsFillPhoneFill className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold">
                  Mobile App Development
                </h4>
              </div>
              <p className="text-sm opacity-90">
                Creating cross-platform mobile apps using React Native
              </p>
            </div>
          </div>
        </div>

        {/* Buttons for Navigation */}
        <div className="mt-12 flex justify-center space-x-4 fade-in opacity-0 translate-y-8">
          <button
            onClick={() => navigate("/experience")}
            className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <FaUserTie className="w-6 h-6" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => navigate("/education")}
            className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <FaGraduationCap className="w-6 h-6" />
            <span>Education</span>
          </button>
        </div>

        {/* Skills Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/skills")}
            className="inline-flex bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <FaCode className="w-6 h-6" />
            <span>Skills</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
