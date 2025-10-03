import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content';
import { getVariants } from '../lib/motionVariants';
import useScrollSection from '../hooks/useScrollSection';
import ProjectCard from '../components/ProjectCard';

const projectFilters = ['All', 'Web', 'AI', 'Mobile'];

const Projects = ({ prefersReducedMotion }) => {
  const { ref, hasAnimated } = useScrollSection(0.1);
  const [activeFilter, setActiveFilter] = useState('All');
  const { container, itemFade } = getVariants(prefersReducedMotion);

  const filteredProjects = projects.filter((project) =>
    activeFilter === 'All' ? true : project.tags.includes(activeFilter)
  );

  return (
    <section id="projects" className="py-16 md:py-24 bg-surface text-text">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-accent mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={prefersReducedMotion ? { duration: 0.01 } : { duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={prefersReducedMotion ? { duration: 0.01 } : { delay: 0.2, duration: 0.6 }}
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-lg transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-surface-dark text-muted hover:text-accent hover:bg-background'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemFade}
                layout
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              >
                <ProjectCard project={project} prefersReducedMotion={prefersReducedMotion} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
