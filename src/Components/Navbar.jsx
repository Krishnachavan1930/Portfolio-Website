import React, { useState } from "react";
import { Menu, X, User, Code, Award, Mail, Linkedin, Home } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, link: "#home" },
    { name: "About", icon: User, link: "#about" },
    { name: "Projects", icon: Code, link: "#projects" },
    { name: "Certificates", icon: Award, link: "#certificates" },
    { name: "Contact", icon: Mail, link: "#contact" },
  ];

  return (
    <div className="w-full font-sans">
  {/* Promotional Banner */}
<div className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-3 px-6">
  <div className="max-w-6xl mx-auto flex items-center justify-center text-center text-sm sm:text-base">
    <p className="text-center">
      Welcome! I specialize in crafting innovative websites and apps that bring your ideas to life.{" "}
      <a href="#contact" className="text-yellow-300 hover:text-white hover:underline transition-all duration-300">
        Get Started Today &gt;
      </a>
    </p>
  </div>
</div>



      {/* Main Navigation */}
      <nav className="bg-gradient-to-b from-blue-200 to-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl text-gray-800 hover:text-blue-600 transition duration-300">
              Krishna
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
                >
                  <item.icon size={18} />
                  <span className="text-lg">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Connect Button */}
            <div className="hidden md:block">
              <a
                href="https://www.linkedin.com/in/krishna-chavan-882516249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin size={18} />
                <span>Connect</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/krishna-chavan-882516249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin size={18} />
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
