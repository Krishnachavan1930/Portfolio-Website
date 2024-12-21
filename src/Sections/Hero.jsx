import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Photograph from "../assets/Photograph.jpg"; // Import the image

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, text]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Animated Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Hi, I'm <span className="text-blue-600">Krishna Chavan</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            {text}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            Passionate about creating robust and scalable web applications.
            Let's build something amazing together!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="w-96 h-[350px] sm:w-96 sm:h-[550px] md:w-128 md:h-[550px] lg:w-144 lg:h-[500px] relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-lg hover:border-blue-600 transition-all duration-500">
            {/* Animated Square Border */}
            <div className="absolute inset-0 border-4 border-blue-600 animate-pulse rounded-lg"></div>
            <img
              src={Photograph} // Use the imported image here
              alt="Your Name"
              className="w-full h-full object-cover transform hover:scale-99 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
