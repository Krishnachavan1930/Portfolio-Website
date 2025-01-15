import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Certificate from "./Sections/Certificate";
import ContactPage from "./Sections/Contact";
import ExperiencePage from "./Sections/ExperiencePage"; // Add this import
import Education from "./Sections/Education";
import SkillsPage from "./Sections/SkillsPage";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const certiRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        certiRef={certiRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={heroRef} id="home">
                <HeroSection />
              </div>
              <div ref={aboutRef} id="about">
                <About />
              </div>
              <div ref={projectsRef} id="projects">
                <Projects />
              </div>
              <div ref={certiRef} id="certificates">
                <Certificate />
              </div>
              <div ref={contactRef} id="contact">
                <ContactPage />
              </div>
            </>
          }
        />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<SkillsPage></SkillsPage>} />
      </Routes>
    </Router>
  );
}

export default App;
