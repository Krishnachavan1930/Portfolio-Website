import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BookOpen, Calendar, MapPin, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EducationItem = ({
  institution,
  degree,
  date,
  location,
  cgpa,
  coursework,
  delay,
}) => {
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
        <h3 className="text-2xl font-bold text-indigo-600 mb-2">
          {institution}
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          <BookOpen className="w-4 h-4 mr-2" />
          <span className="font-semibold">{degree}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        {cgpa && (
          <div className="flex items-center text-gray-600 mb-4">
            <Award className="w-4 h-4 mr-2" />
            <span>CGPA: {cgpa}</span>
          </div>
        )}
        {coursework && coursework.length > 0 && (
          <>
            <h4 className="font-semibold text-gray-700 mb-2">Coursework:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {coursework.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
};

const EducationPage = () => {
  const pageControls = useAnimation();
  const pageRef = useRef(null);
  const pageInView = useInView(pageRef, { once: true });
  const navigate = useNavigate();

  useEffect(() => {
    if (pageInView) {
      pageControls.start("visible");
    }
  }, [pageControls, pageInView]);

  const educationData = [
    {
      institution: "Sandip Institute of Technology and Research Centre",
      degree: "B.E in Computer Engineering",
      date: "2022 – 2026",
      location: "Nashik, Maharashtra",
      cgpa: "8.52",
      coursework: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Machine Learning",
      ],
    },
    {
      institution: "Badrinarayan Barwale Junior College",
      degree: "Class 12 (HSC Board)",
      date: "2020 – 2022",
      location: "Jalna, Maharashtra",
    },
    {
      institution: "Vivekananda English School",
      degree: "Class 10 (CBSE Board)",
      date: "2020",
      location: "Partur, Maharashtra",
    },
    {
      institution: "RP International School",
      degree: "SR KG to Class 8",
      date: "2008 – 2018",
      location: "Badnapur, Maharashtra",
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
          Educational Journey
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} delay={index * 0.2} />
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

export default EducationPage;
