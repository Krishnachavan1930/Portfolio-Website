import React, { useState, useEffect, Suspense } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NetworkBackground from "./NetworkBackground";
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
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Network Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gray-100" />}>
        <NetworkBackground />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full space-y-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Animated Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
              Hi, I'm <span className="text-blue-600">Krishna Chavan</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
              {text}
              <span className="animate-blink text-blue-600">|</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
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
            <div className="w-96 h-[350px] sm:w-96 sm:h-[550px] md:w-128 md:h-[550px] lg:w-144 lg:h-[500px] relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-tr from-blue-200 via-white to-blue-50">
              <img
                src={Photograph}
                alt="Krishna Chavan"
                className="relative w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
