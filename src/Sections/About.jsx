import React, { useState, useEffect } from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa"; // Imported icons
import { BsFillPhoneFill } from "react-icons/bs"; // For mobile

const AboutMeSection = () => {
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('opacity-100', 'translate-y-0');
      }, index * 300);
    });
  }, []);

  const toggleExperience = () => {
    setShowExperience(prevState => !prevState);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-200 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* About Me Header */}
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800 fade-in opacity-0 translate-y-8">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main About Information */}
          <div className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in opacity-0 translate-y-8">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">My Journey</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I’m a Full Stack Developer with a passion for creating dynamic, user-focused web applications. Whether it's front-end or back-end development, I’m committed to delivering efficient, clean, and scalable code. I always stay updated with new technologies to offer the best solutions for my clients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I love collaborating with clients to bring their ideas to life. Whether it’s building custom websites, creating APIs, or mobile apps, I aim to deliver solutions that are functional and intuitive. I’m also active in the open-source community and enjoy mentoring fellow developers.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            {/* Front-end Development Card */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 fade-in opacity-0 translate-x-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FaLaptopCode className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Front-end Development</h4>
              </div>
              <p className="text-sm opacity-90">
                Building interactive and responsive user interfaces with React, Next.js, and modern CSS
              </p>
            </div>

            {/* Back-end Development Card */}
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 fade-in opacity-0 translate-x-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <FaServer className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Back-end Development</h4>
              </div>
              <p className="text-sm opacity-90">
                Developing scalable and secure backends using Node.js, Express, and MySQL
              </p>
            </div>

            {/* Mobile Development Card */}
            <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-6 rounded-xl text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2 fade-in opacity-0 translate-x-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <BsFillPhoneFill className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Mobile App Development</h4>
              </div>
              <p className="text-sm opacity-90">
                Creating cross-platform mobile apps using React Native
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={toggleExperience}
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg fade-in opacity-0 translate-y-8"
          >
            {showExperience ? "Hide Experience" : "Show Experience"}
          </button>
        </div>

        {/* Experience Section */}
        {showExperience && (
          <div className="mt-16 bg-white rounded-xl shadow-xl p-8 fade-in opacity-0 translate-y-8 transition-all duration-1000">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">My Experience</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I’ve had the opportunity to work with diverse teams on a variety of projects. My experience spans across multiple industries, ranging from startups to established enterprises. I focus on delivering results and improving processes with a strong foundation in Full Stack Development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Some of the highlights of my experience include:
            </p>
            <ul className="list-disc ml-6 mt-4 text-lg text-gray-700">
              <li>
                Full Stack Developer Intern at <strong>Univoc Foundation</strong> (Nov 2024 - Jan 2024):
                <ul className="list-inside mt-2 text-sm text-gray-600">
                  <li>Developed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                  <li>Created RESTful APIs for efficient data management, improving functionality and performance.</li>
                  <li>Optimized web apps for mobile responsiveness and performance across devices.</li>
                  <li>Collaborated with teams to enhance UI/UX design and maintain consistency.</li>
                  <li>Applied security best practices to protect user data and application integrity.</li>
                </ul>
              </li>
              <li>
                Software Engineer Intern at <strong>Cloud Counselage Pvt Ltd</strong> (June 2024 - Sep 2024):
                <ul className="list-inside mt-2 text-sm text-gray-600">
                  <li>Contributed to the development of full-stack web applications, focusing on delivering scalable and user-friendly solutions.</li>
                  <li>Designed and implemented efficient architectures to support responsive interfaces and streamlined user workflows.</li>
                  <li>Utilized Git for version control to ensure smooth collaboration and maintain code quality throughout the development lifecycle.</li>
                </ul>
              </li>
              <li>
                Led the development of the <strong>Job Portal</strong> project using the MERN stack:
                <ul className="list-inside mt-2 text-sm text-gray-600">
                  <li>Developed a robust job portal enabling users to apply for jobs and recruiters to post job listings.</li>
                  <li>Executed a responsive design for enhanced user experience across devices.</li>
                  <li>Optimized backend architecture for scalability and seamless integration with the frontend.</li>
                </ul>
              </li>
              <li>
                Developed an <strong>Uber Website Clone</strong> using React.js and Node.js:
                <ul className="list-inside mt-2 text-sm text-gray-600">
                  <li>Designed and developed a functional Uber clone with real-time location tracking using Google Maps API.</li>
                  <li>Integrated user authentication for secure login and registration processes.</li>
                  <li>Enforced a dynamic ride booking system with route optimization features.</li>
                  <li>Ensured responsive and intuitive UI for a seamless user experience.</li>
                </ul>
              </li>
              <li>
                Led the <strong>Smart India Hackathon</strong> Institute Level competition (Aug 2023):
                <ul className="list-inside mt-2 text-sm text-gray-600">
                  <li>Recognized as one of the top 30 finalists for demonstrating exceptional problem-solving skills and innovative solutions.</li>
                </ul>
              </li>
            </ul>
          </div>
        )}

        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
