import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Certificates from './components/Certificates'; 
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div id="certificates">
  <Certificates />
        </div>

      <Contact />

      <a
        href="/koushik_asrith_mulavisala.pdf"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Resume
      </a>

      <Footer />
    </div>
  );
};

export default App;
