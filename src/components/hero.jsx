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
      {/* Animated Background Bubbles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="bg-bubble"
          initial={{ y: 0, opacity: 0.4 }}
          animate={{ y: [-50, 50, -50], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 20 + i * 2, ease: 'easeInOut' }}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Floating Animated Shapes */}
      <motion.div
        className="floating-shape triangle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      />
      <motion.div
        className="floating-shape rectangle"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />

      {/* Main Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Hi, I'm Koushik Asrith Mulavisala
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A passionate Machine Learning Engineer and AI enthusiast
          </motion.p>

          <motion.button
            className="connect-button"
            onClick={handleScroll}
            whileHover={{ scale: 1.05, backgroundColor: '#1e40af', color: '#fff' }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            Let's Connect
          </motion.button>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/koushik-asrith-mulaveesala-b94b552b5/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring' }}
            >
              <FaLinkedin className="icon" />
            </motion.a>
            <motion.a
              href="https://github.com/Asrithmulaveesala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring' }}
            >
              <FaGithub className="icon" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
