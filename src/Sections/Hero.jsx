import React, { useState, useEffect, Suspense } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import NetworkBackground from "./NetworkBackground";
import Photograph from "../assets/Photograph.jpg";
// import Photograph from "../assets/Photograph.jpg";

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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white-200 to-white">
      <Suspense fallback={<div className="absolute inset-0 bg-gray-100" />}>
        <NetworkBackground />
      </Suspense>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full space-y-8 flex flex-col md:flex-row items-center justify-between">
          {/* Profile Picture */}
          <div className="w-full md:w-1/2 md:order-2 mb-8 md:mb-0 flex justify-center md:justify-end">
            <div className="w-full h-[490px] sm:h-[400px] md:h-[500px] lg:h-[550px] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] relative overflow-hidden rounded-full shadow-lg border-4 border-white transform hover:scale-105 transition-all duration-500">
              <img
                src={Photograph}
                alt="Krishna Chavan"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Animated Text */}
          <div className="w-full md:w-1/2 md:order-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
              Hi, I'm <span className="text-blue-600">Krishna Chavan</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
              {text}
              <span className="animate-blink text-blue-600">|</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Turning your ideas into powerful, beautiful, and responsive digital solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
              >
                <FaTwitter className="w-8 h-8" />
              </a>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-3 text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
