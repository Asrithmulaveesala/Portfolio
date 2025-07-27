import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'Programming Languages',
      items: 'Python, R, C++',
      icon: '💻',
    },
    {
      title: 'ML Frameworks',
      items: 'TensorFlow, PyTorch, Scikit-learn',
      icon: '🧠',
    },
    {
      title: 'Data Processing',
      items: 'Pandas, NumPy, OpenCV',
      icon: '📊',
    },
    {
      title: 'Deep Learning',
      items: 'CNN, RNN, Transformers',
      icon: '🔬',
    },
    {
      title: 'Model Deployment',
      items: 'Flask, FastAPI, Docker',
      icon: '🚀',
    },
    {
      title: 'Data Visualization',
      items: 'Matplotlib, Seaborn, Plotly',
      icon: '📈',
    },
    {
      title: 'Cloud & DevOps',
      items: 'AWS, GCP, MLflow',
      icon: '☁️',
    },
    {
      title: 'Tools & Platforms',
      items: 'Jupyter, VS Code, Git',
      icon: '🛠️',
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon-title">
              <span className="skill-icon">{skill.icon}</span>
              <div className="skill-title">{skill.title}</div>
            </div>
            <div className="skill-items">{skill.items}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
