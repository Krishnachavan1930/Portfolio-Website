import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import CertificatePage from './Sections/Certificatepage'
import ContactPage from './Sections/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <CertificatePage></CertificatePage>
      <ContactPage></ContactPage>
    </Router>
  )
}

export default App
