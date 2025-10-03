import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Assuming react-icons is installed

const ProjectCard = ({ project, prefersReducedMotion }) => {
  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : {
        y: -5, // Lift effect
        boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.5), 0 4px 6px -2px rgba(37, 99, 235, 0.05)", // Glow effect
        transition: { duration: 0.3 },
      }}
      className="bg-surface rounded-xl shadow-lg border border-surface-dark overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          srcSet="https://via.placeholder.com/480x300/111827/E5E7EB?text=Small+Image 480w,
                   https://via.placeholder.com/800x500/111827/E5E7EB?text=Medium+Image 800w,
                   https://via.placeholder.com/1200x750/111827/E5E7EB?text=Large+Image 1200w"
          sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px"
          src="https://via.placeholder.com/800x500/111827/E5E7EB?text=Default+Image" // Fallback for browsers that don't support srcset
          alt={project.title}
          loading="lazy"
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        {/* Placeholder for responsive srcset if needed later */}
        {/* <img
          srcSet={`small.jpg 480w, medium.jpg 800w`}
          sizes="(max-width: 600px) 480px, 800px"
          src="default.jpg"
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-text mb-2">{project.title}</h3>
        <p className="text-muted text-sm mb-4">{project.timeframe} | {project.role}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-accent text-white text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-text mb-4 line-clamp-3">{project.highlights[0]}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accentAlt transition-colors flex items-center space-x-1"
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accentAlt transition-colors flex items-center space-x-1"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
