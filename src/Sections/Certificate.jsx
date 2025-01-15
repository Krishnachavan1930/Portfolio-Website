import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCode, FaArrowRight } from "react-icons/fa"; // Added FaArrowRight for "Click Me" icon

const certificates = [
  {
    id: 1,
    title: "Advanced React Development",
    issuer: "React Academy",
    date: "June 15, 2023",
    recipient: "John Doe",
    instructor: "Dr. Jane Smith",
    description:
      "This course provided in-depth knowledge of advanced React features such as hooks, context API, and state management.",
    icon: <FaReact className="text-6xl text-blue-500" />, // Increased icon size to 6xl
  },
  {
    id: 2,
    title: "Node.js Mastery",
    issuer: "Node Institute",
    date: "August 22, 2023",
    recipient: "John Doe",
    instructor: "Prof. Alan Turing",
    description:
      "Focused on backend development using Node.js, including building RESTful APIs and working with databases.",
    icon: <FaNodeJs className="text-6xl text-green-500" />, // Increased icon size to 6xl
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    issuer: "CS School",
    date: "October 5, 2023",
    recipient: "John Doe",
    instructor: "Sarah Johnson",
    description:
      "Covers essential data structures and algorithms used in problem-solving and optimizing code performance.",
    icon: <FaCode className="text-6xl text-purple-500" />, // Increased icon size to 6xl
  },
];

const CertificateCard = ({ certificate, onClick }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer relative overflow-hidden group h-[380px]"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div className="flex items-center justify-center mb-4">
      {" "}
      {/* Changed to center the icon */}
      {certificate.icon}
    </div>
    <h3 className="text-xl font-semibold text-blue-600 text-center">
      {certificate.title} {/* Centered the title */}
    </h3>
    <p className="mt-2 text-gray-600 text-center">
      Issuer: {certificate.issuer}
    </p>{" "}
    {/* Centered the text */}
    <p className="text-gray-600 text-center">Date: {certificate.date}</p>{" "}
    {/* Centered the text */}
    <p className="mt-2 text-gray-500 text-sm text-center">
      {certificate.description}
    </p>{" "}
    {/* Centered the text */}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    ></motion.div>
    {/* Click Me Icon */}
    <div className="absolute bottom-4 right-4 text-2xl text-gray-500 opacity-80 group-hover:opacity-100 transition-opacity">
      <FaArrowRight />
    </div>
  </motion.div>
);

const FullCertificate = ({ certificate }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-blue-600">{certificate.title}</h2>
      {certificate.icon}
    </div>
    <p className="mt-2 text-gray-600">Issuer: {certificate.issuer}</p>
    <p className="text-gray-600">Date: {certificate.date}</p>
    <p className="text-gray-600">Recipient: {certificate.recipient}</p>
    <p className="text-gray-600">Instructor: {certificate.instructor}</p>
    <p className="mt-4 text-gray-500">{certificate.description}</p>
  </motion.div>
);

const CertificatePage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center text-blue-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-black inline-block mr-2 px-2 py-1">
            My Most Valuable
          </span>
          Certificates
        </motion.h1>
        {selectedCertificate ? (
          <div>
            <motion.button
              onClick={() => setSelectedCertificate(null)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Certificates
            </motion.button>
            <FullCertificate certificate={selectedCertificate} />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {certificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onClick={() => setSelectedCertificate(cert)}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
