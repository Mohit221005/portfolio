import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';
import { getVariants } from '../lib/motionVariants';
import useScrollSection from '../hooks/useScrollSection';
import SkillMeter from '../components/SkillMeter';

const Skills = ({ prefersReducedMotion }) => {
  const { ref, hasAnimated } = useScrollSection(0.1);
  const { container, itemFade } = getVariants(prefersReducedMotion);

  return (
    <section id="skills" className="py-16 md:py-24 bg-background text-text">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-accent mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={prefersReducedMotion ? { duration: 0.01 } : { duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              variants={itemFade}
              className="bg-surface p-6 rounded-xl shadow-lg border border-surface-dark"
            >
              <h3 className="text-xl font-semibold text-text mb-4 text-accent">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill) => (
                  <SkillMeter
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    prefersReducedMotion={prefersReducedMotion} // Pass down the prop
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
