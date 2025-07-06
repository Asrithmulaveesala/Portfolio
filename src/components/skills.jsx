import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 80, icon: '' },
    { name: 'CSS', percentage: 65, icon: '' },
    { name: 'JavaScript', percentage: 40, icon: '' },
    { name: 'Python', percentage: 90, icon: '' },
    { name: 'Java', percentage: 80, icon: '' },
    { name: 'Power Bi', percentage: 55, icon: '' },
    { name: 'Machine learning', percentage: 75, icon: '' },
    { name: 'React.js', percentage: 65, icon: '' },
    { name: 'Node.js', percentage: 50, icon: '' }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Super Powers</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-row">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
            </div>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
