import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <a
        href="/KoushikAsrith_resume.pdf"
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
