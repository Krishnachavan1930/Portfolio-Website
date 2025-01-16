import React, { useState, useEffect, useRef, Suspense } from "react";
import { FileDown, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import Photograph from "/Picture.jpg";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
  ];

  const typingRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingRef.current = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingRef.current);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <Suspense fallback={<div className="absolute inset-0 bg-gray-100" />}>
        <NetworkBackground />
      </Suspense>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
          {/* Profile Picture - Mobile First */}
          <div className="w-full md:hidden mb-8 animate-fadeIn">
            <div className="relative w-[250px] h-[250px] mx-auto rounded-full border-8 border-black overflow-hidden bg-[#FFE4E1] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img
                src={Photograph}
                alt="Profile of Krishna Chavan"
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-[#B8860B] text-3xl md:text-4xl font-bold animate-fadeIn">
                Hello!
              </h2>
              <div className="inline-block animate-slideIn">
                <p className="bg-[#B8860B] text-white px-6 py-2 rounded-full text-lg md:text-xl">
                  I'm Krishna Chavan
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn">
                I'm a <span className="text-[#20B2AA]">{text}</span>
                <span className="text-[#20B2AA] animate-blink">|</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0 animate-fadeIn px-4 md:px-0">
                Expert in Frontend, Backend, and Mobile App Development.
                Creating seamless user experiences and powerful backend systems.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn px-4 md:px-0">
              <a
                href="#work"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-[#8A2BE2] hover:bg-[#7B1FA2] text-white rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8A2BE2] text-sm md:text-base"
              >
                My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1oHht65gJwgqksRRCo3YOgawCcHp801ot/view?usp=sharing"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 text-sm md:text-base"
              >
                Download CV
                <FileDown className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 md:space-x-6 pt-6 animate-fadeIn px-4 md:px-0">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/krishna-chavan-882516249/",
                },
                { icon: Github, href: "https://github.com/Krishnachavan1930" },
                { icon: MessageSquare, href: "https://wa.me/919284769125" },
                { icon: Mail, href: "mailto:krishnachavan.tech@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#20B2AA]"
                  aria-label={`Visit my ${social.icon.name} profile`}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Picture - Desktop Only */}
          <div className="hidden md:flex w-1/2 justify-end animate-fadeIn">
            <div className="relative w-[400px] h-[400px] rounded-full border-8 border-black overflow-hidden bg-[#FFE4E1] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <img
                src={Photograph}
                alt="Profile of Krishna Chavan"
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
