import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExperienceItem = ({ company, role, date, location, responsibilities, delay }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
      className="mb-12 relative"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-indigo-200 rounded-full">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: delay + 0.5 }}
          className="w-full bg-indigo-600 rounded-full"
        />
      </div>
      <div className="ml-8 bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
        <h3 className="text-2xl font-bold text-indigo-600 mb-2">{company}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Briefcase className="w-4 h-4 mr-2" />
          <span className="font-semibold">{role}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        {responsibilities && responsibilities.length > 0 && (
          <>
            <h4 className="font-semibold text-gray-700 mb-2">
              Responsibilities:
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (pageInView) {
      pageControls.start("visible");
    }
  }, [pageControls, pageInView]);

  const experienceData = [
    {
      company: "TechnoHacks EduTech",
      role: "Software Developer Intern",
      date: "Jan 2023 – Jun 2023",
      location: "Remote",
      responsibilities: [
        "Developed, debugged, and tested C++ code for educational software.",
        "Collaborated with a team of developers to design modular solutions.",
        "Improved the performance of existing code by optimizing algorithms.",
      ],
    },
    {
      company: "Smart India Hackathon 2024",
      role: "Team Leader",
      date: "March 2024",
      location: "India",
      responsibilities: [
        "Led a team to create a cross-platform alumni management system.",
        "Integrated features like event management, job portals, and networking tools.",
        "Ensured timely completion of project milestones under pressure.",
      ],
    },
    {
      company: "Cloud Consulage Pvt. Ltd.",
      role: "Frontend Developer Intern",
      date: "Jun 2024 – Aug 2024",
      location: "Remote",
      responsibilities: [
        "Built the College Navigator website for students to search and explore colleges.",
        "Focused on responsive design and cross-browser compatibility.",
        "Worked on React.js to create dynamic and user-friendly interfaces.",
      ],
    },
  ];

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8"
    >
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {experienceData.map((exp, index) => (
            <ExperienceItem key={index} {...exp} delay={index * 0.2} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => navigate(-1)}
            className="mb-8 px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
