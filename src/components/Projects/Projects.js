import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Firma-works Application',
    description: 'Final Year Project developed using React, JavaScript, HTML and CSS. A comprehensive platform for business management and workflow optimization.',
    image: 'https://via.placeholder.com/600x340?text=Firma-works',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Responsive UI Design',
    description: 'Academic project focusing on creating responsive web interfaces that adapt to different screen sizes and devices.',
    image: 'https://via.placeholder.com/600x340?text=UI+Design',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'RESTful API Integration',
    description: 'Implemented backend connectivity using RESTful APIs to fetch and manipulate data dynamically.',
    image: 'https://via.placeholder.com/600x340?text=API+Integration',
    technologies: ['JavaScript', 'REST API', 'Node.js'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Team-based Development Project',
    description: 'Collaborated in a team environment following Agile methodologies and using Git for version control.',
    image: 'https://via.placeholder.com/600x340?text=Team+Project',
    technologies: ['Git', 'Agile', 'Scrum'],
    github: '#',
    liveDemo: '#',
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-header"
      >
        <h2>My Projects</h2>
        <div className="underline"></div>
        <p>Here are some of the projects I've worked on.</p>
      </motion.div>

      <motion.div
        className="projects-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={item}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 