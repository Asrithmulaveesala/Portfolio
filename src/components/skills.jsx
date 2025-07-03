import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'Python', 'Flask', 'ML', 'SQL', 'Git','Java','Python','Data analyst','MySql','Php'
];

const Skills = () => {
  return (
    <motion.section id="skills" className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
  <motion.div
    key={idx}
    className="skill-card"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.2, delay: idx * 0.04 }}
  >
    {skill}


          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
