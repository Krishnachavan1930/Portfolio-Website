import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaNodeJs,
  FaArrowLeft,
} from "react-icons/fa"; // Add FaArrowLeft
import { BsFillPhoneFill } from "react-icons/bs";
import { DiReact, DiNodejs, DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiMysql, SiExpress } from "react-icons/si";
import { useNavigate } from "react-router-dom"; // React Router v6 hook for navigation

const SkillsPage = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory in React Router v6

  const handleBackClick = () => {
    navigate("/"); // Navigate to the homepage or previous page
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white-200 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
          My <span className="text-blue-600">Skills</span>
        </h2>

        {/* Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Front-end Development */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="w-12 h-12 text-blue-600" />
              <h3 className="text-2xl font-semibold ml-4">
                Front-end Development
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex justify-center items-center space-x-2">
                <DiReact className="w-10 h-10 text-cyan-500" />
                <span>React</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <SiNextdotjs className="w-10 h-10 text-black" />
                <span>Next.js</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <SiTailwindcss className="w-10 h-10 text-teal-400" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FaCode className="w-10 h-10 text-yellow-500" />
                <span>HTML/CSS</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <DiJavascript1 className="w-10 h-10 text-yellow-400" />
                <span>JavaScript</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Building dynamic, responsive, and modern user interfaces with the
              latest technologies.
            </p>
          </div>

          {/* Back-end Development */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaServer className="w-12 h-12 text-purple-600" />
              <h3 className="text-2xl font-semibold ml-4">
                Back-end Development
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex justify-center items-center space-x-2">
                <FaNodeJs className="w-10 h-10 text-green-500" />
                <span>Node.js</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <SiExpress className="w-10 h-10 text-gray-700" />
                <span>Express</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <SiMysql className="w-10 h-10 text-blue-600" />
                <span>MySQL</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <DiMongodb className="w-10 h-10 text-green-600" />
                <span>MongoDB</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Developing scalable, efficient, and secure back-end solutions
              using various technologies.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <BsFillPhoneFill className="w-12 h-12 text-pink-600" />
              <h3 className="text-2xl font-semibold ml-4">
                Mobile App Development
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex justify-center items-center space-x-2">
                <FaMobileAlt className="w-10 h-10 text-purple-500" />
                <span>React Native</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <BsFillPhoneFill className="w-10 h-10 text-pink-600" />
                <span>Expo</span>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-4">
              Building cross-platform mobile applications for iOS and Android
              with React Native and Expo.
            </p>
          </div>
        </div>

        {/* Back Button with Icon aligned to the left */}
        <button
          onClick={handleBackClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg mt-12 block ml-4 hover:bg-blue-700 transition duration-300 flex items-center justify-start space-x-2"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
    </section>
  );
};

export default SkillsPage;
