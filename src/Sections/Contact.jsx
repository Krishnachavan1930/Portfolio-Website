import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneVolume,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdAttachEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_oy2b4j9",
          "template_qp626bs",
          form.current,
          "IEMjTYzRIroeoO-L-"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message Sent!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message, please try again.");
          }
        );
    }
  };

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-12">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              Send a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  placeholder="Enter your email"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Write your message here
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Enter your message"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center">
              <MdAttachEmail className="text-blue-600 mr-4" size={28} />
              <span className="text-black text-lg">krishnachavan459@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaPhoneVolume className="text-blue-600 mr-4" size={28} />
                <span className="text-black text-lg">+91 9284769125</span>
              </div>
              <div className="flex items-center">
                <FaLocationDot className="text-blue-600 mr-4" size={28} />
                <span className="text-black text-lg">Nashik, Maharashtra</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mt-12 mb-6">
              Connect with Me
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FiGithub size={32} color="#181717" />

              </a>
              <a
                href="https://www.linkedin.com/in/krishna-chavan-882516249/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
               <FiLinkedin size={32} color="#0A66C2" />

              </a>
              <a
                href="https://wa.me/919284769125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaWhatsapp size={32} color="#25D366" />

              </a>
            </div>
          </div>
        </div>

       
<div className="mt-16 text-center">
  <motion.p
    className="text-gray-600 text-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      delay: 0.2,
    }}
  >
    I'm always excited to work on new projects and collaborate with
    fellow developers.
  </motion.p>
</div>
      </div>

      <div
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300 shadow-lg"
        onClick={ScrolltoTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={24} />
      </div>

      <footer className="mt-20 bg-gray-50 p-8 rounded-lg shadow-md text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/krishnachavan_1930"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <FaInstagram size={28} color="#E1306C" />

          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <FaFacebook size={28} color="#1877F2" />

          </a>
        </div>
        <p className="text-gray-600 text-lg">&copy; 2024 Krishna Chavan. All rights reserved.</p>
      </footer>
    </div>
  );
}