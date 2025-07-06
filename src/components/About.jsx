import React from 'react';
import './About.css';
import ProfilePic from '../assets/profile.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-content">
        
        <div className="about-image">
          <img src={ProfilePic} alt="KoushikAsrith Mulavisala" />
        </div>

        <div className="about-text">
          <p>
            Hey there! I'm <strong>KoushikAsrith Mulavisala</strong>, a passionate developer who enjoys building efficient, modern web experiences.
            From crafting user-friendly interfaces to developing powerful backend systems, I love turning ideas into reality.
          </p>

          <ul className="about-points">
            <li>💡 Solving real-world problems with clean, maintainable code.</li>
            <li>🎨 Designing responsive, engaging user interfaces.</li>
            <li>🤖 Exploring Machine Learning, AI, and emerging tech trends.</li>
          </ul>

          <h3 className="about-subheading">⚡ My Superpowers:</h3>
          <ul className="about-skills">
            <li>Machine learning</li>
            <li>Python</li>
            <li>Java</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>Flask</li>
            <li>Sql</li>
          </ul>

          <p>When I'm not coding, you’ll catch me exploring new tech, brainstorming innovative ideas, or enjoying a great cup of coffee ☕.</p>
        </div>

      </div>
    </section>
  );
};

export default About;
