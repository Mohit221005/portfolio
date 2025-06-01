import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaReact, FaAngular, FaJs,
  FaDatabase, FaGitAlt, FaJava, FaCode
} from 'react-icons/fa';

const skills = [
  { name: 'HTML/CSS', icon: <FaHtml5 />, level: 90 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'React', icon: <FaReact />, level: 80 },
  { name: 'Angular', icon: <FaAngular />, level: 75 },
  { name: 'C++', icon: <FaCode />, level: 70 },
  { name: 'Java', icon: <FaJava />, level: 65 },
  { name: 'MySQL', icon: <FaDatabase />, level: 60 },
  { name: 'Git/GitHub', icon: <FaGitAlt />, level: 80 }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-header"
      >
        <h2>Technical Skills</h2>
        <div className="underline"></div>
      </motion.div>

      <motion.div
        className="skills-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div className="skill-card" key={index} variants={item}>
            <div className="skill-icon">
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
            <div className="progress-container">
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills; 