import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { getVariants } from '../lib/motionVariants';
import useScrollSection from '../hooks/useScrollSection';

const About = ({ prefersReducedMotion }) => {
  const { ref, hasAnimated } = useScrollSection(0.2);
  const { container, itemFade } = getVariants(prefersReducedMotion);

  return (
    <section id="about" className="py-16 md:py-24 bg-surface text-text">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-accent mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={prefersReducedMotion ? { duration: 0.01 } : { duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemFade} className="space-y-4">
            <p className="text-lg leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-lg leading-relaxed">
              I'm Mohit Kumar, an aspiring full-stack developer passionate about building dynamic and responsive web applications. I focus on creating modern user experiences with sound engineering practices. I am always eager to learn new technologies and improve my skills.
            </p>
          </motion.div>
          <motion.div variants={itemFade} className="bg-background p-6 rounded-xl shadow-lg border border-surface-dark">
            <h3 className="text-xl font-semibold text-accent mb-4">Details</h3>
            <ul className="space-y-2">
              <li><span className="font-medium text-muted">Location:</span> {personalInfo.location}</li>
              <li><span className="font-medium text-muted">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-text hover:text-accentAlt transition-colors">{personalInfo.email}</a></li>
              <li><span className="font-medium text-muted">Phone:</span> {personalInfo.phone}</li>
              <li><span className="font-medium text-muted">Availability:</span> Open to new opportunities</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
