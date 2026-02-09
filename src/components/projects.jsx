import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';

import todoImage from '../assets/todolist.png';
import cropImage from '../assets/crop-prediction.png';
import portfolioImage from '../assets/portfolio.png';

const projectList = [
  {
    title: "Todo list app",
    description: "A responsive Todo List app built with React, enabling users to add, complete, and manage daily tasks interactively.",
    github: "https://github.com/Asrithmulaveesala/todolist",
    demo: "https://todolist-murex-psi-97.vercel.app/",
    image: todoImage
  },
  {
    title: "Crop Prediction Tool",
    description: "Flask app to predict crops using ML and deployed with Render.",
    github: "https://github.com/Asrithmulaveesala/crop_prediction",
    demo: "https://crop-prediction-1-7flo.onrender.com/",
    image: cropImage
  },
  {
    title: "Heart disease prediction",
    description: "A best suitable machine learning model to predict heart diease.",
    github: "https://github.com/Asrithmulaveesala/heart-diease",
    demo: "",
    image: heartImage
  }
];

const Projects = () => {
  return (
    <motion.section id="projects" className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
