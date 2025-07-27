import React from 'react';
import './About.css';
import ProfilePic from '../assets/profile.jpg'; 

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
  Hey there! I'm <strong>Koushik Asrith Mulavisala</strong>, a dedicated Machine Learning Engineer who thrives on creating intelligent, data-driven solutions.
  From building robust ML models to deploying scalable AI systems, I’m passionate about transforming data into real-world impact.
</p>

<ul className="about-points">
  <li>🧠 Solving complex problems using machine learning and deep learning techniques.</li>
  <li>📊 Designing end-to-end pipelines for data preprocessing, training, and deployment.</li>
  <li>🚀 Staying at the forefront of AI trends, research, and innovative technologies.</li>
</ul>
          

          <h3 className="about-subheading">⚡ My Skills :</h3>
          <ul className="about-skills">
            <li>Machine learning</li>
            <li>Python</li>
            <li>Java</li>
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
