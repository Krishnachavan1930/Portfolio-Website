import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExperienceItem = ({ title, company, location, date, description, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
      }}
      className="mb-8 bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
    >
      <h3 className="text-2xl font-bold text-indigo-600 mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <Briefcase className="w-4 h-4 mr-2" />
        <span className="font-semibold">{company}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true });
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    if (pageInView) {
      pageControls.start('visible');
    }
  }, [pageControls, pageInView]);

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Univoc Foundation',
      location: 'Noida',
      date: 'Nov 2024 - Jan 2024',
      description: [
        'Developed scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
        'Created RESTful APIs for efficient data management, improving functionality and performance.',
        'Optimized web apps for mobile responsiveness and performance across devices.',
        'Collaborated with teams to enhance UI/UX design and maintain consistency.',
        'Applied security best practices to protect user data and application integrity.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Cloud Counselage Pvt Ltd',
      location: 'Mumbai',
      date: 'June 2024 - Sep 2024',
      description: [
        'Contributed to the development of full-stack web applications, focusing on delivering scalable and user-friendly solutions.',
        'Designed and implemented efficient architectures to support responsive interfaces and streamlined user workflows.',
        'Utilized Git for version control to ensure smooth collaboration and maintain code quality throughout the development lifecycle.',
      ],
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate={pageControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Professional Experience
        </h1>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} delay={index * 0.2} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
