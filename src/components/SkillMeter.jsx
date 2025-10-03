import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const SkillMeter = ({ name, proficiency, prefersReducedMotion }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const springConfig = prefersReducedMotion ? { stiffness: 1000, damping: 50, mass: 1 } : { stiffness: 100, damping: 10, mass: 1 }; // Faster for reduced motion

  const progressValue = useSpring(0, springConfig);
  const width = useTransform(progressValue, (v) => `${v}%`);
  const displayedProficiency = useTransform(progressValue, Math.round);

  useEffect(() => {
    if (isInView) {
      progressValue.set(proficiency);
    }
  }, [isInView, proficiency, progressValue]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <p className="text-lg text-text">{name}</p>
        <motion.p className="text-sm text-muted font-mono">{displayedProficiency.get()}%</motion.p>
      </div>
      <div className="w-full bg-surface-light rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-accent"
          style={{ width }}
          transition={prefersReducedMotion ? { duration: 0.01 } : {}}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillMeter;
