import React, { useState } from "react";
import { Menu, X, User, Code, Award, Mail, Linkedin, Home } from 'lucide-react';

const Navbar = ({ heroRef, aboutRef, projectsRef, certiRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, ref: heroRef },
    { name: "About", icon: User, ref: aboutRef },
    { name: "Projects", icon: Code, ref: projectsRef },
    { name: "Certificates", icon: Award, ref: certiRef },
    { name: "Contact", icon: Mail, ref: contactRef },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full font-sans">
      {/* Promotional Banner */}
      <div className="w-full bg-gray-100 text-gray-800 py-2 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center text-center text-sm sm:text-base">
          <p className="text-center">
            Welcome! I specialize in crafting innovative websites and apps that bring your ideas to life.{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
            >
              Get Started Today &gt;
            </a>
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 font-semibold text-2xl text-gray-900 hover:text-gray-700 transition duration-300">
              Krishna
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-105"
                >
                  <item.icon size={18} className="text-gray-500" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Connect Button */}
            <div className="hidden md:block">
              <a
                href="https://www.linkedin.com/in/krishna-chavan-882516249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={16} />
                <span>Connect</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  <item.icon size={18} className="text-gray-500" />
                  <span>{item.name}</span>
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/krishna-chavan-882516249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin size={18} className="text-gray-500" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

