import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      
      {/* Floating Shapes */}
      <motion.div className="floating-shape triangle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
      />
      
      <motion.div className="floating-shape rectangle"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Koushik Asrith Mulavisala
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            A passionate Full Stack Developer and AI enthusiast
          </motion.p>

          <motion.button
            className="connect-button"
            onClick={handleScroll}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            Let's Connect
          </motion.button>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            <a href="https://www.linkedin.com/in/koushik-asrith-mulaveesala-b94b552b5/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/Asrithmulaveesala" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
