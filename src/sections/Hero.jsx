import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
// import Particles from 'react-tsparticles'; // Assuming this is installed
import { personalInfo } from '../data/content';
import { getVariants } from '../lib/motionVariants';

// Placeholder for Particles component
const Particles = ({ options }) => <div className="absolute inset-0 z-0"></div>;

const Hero = ({ prefersReducedMotion }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { fadeIn, slideInFromLeft } = getVariants(prefersReducedMotion);

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 200]);

  // Typing effect for role
  const [displayedRole, setDisplayedRole] = useState('');
  const roleToType = personalInfo.role;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedRole(roleToType);
      return;
    }

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < roleToType.length) {
        setDisplayedRole((prev) => prev + roleToType.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // Typing speed

    return () => clearInterval(typingInterval);
  }, [roleToType, prefersReducedMotion]);

  // Parallax effect on mouse move for heading
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const headingX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const headingY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  return (
    <section id="hero" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {!prefersReducedMotion && (
        <Particles
          options={{
            fullScreen: { enable: false },
            particles: {
              number: {
                value: 30, // Light density
                density: { enable: true, area: 800 },
              },
              color: { value: "#E5E7EB" },
              shape: { type: "circle" },
              opacity: { value: 0.3, random: true },
              size: { value: 3, random: true },
              links: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
                bounce: false,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          style={prefersReducedMotion ? {} : { x: headingX, y: headingY }}
          className="text-5xl md:text-7xl font-poppins font-bold text-text mb-4 leading-tight"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
          Hi, I'm <span className="text-accent">Mohit Kumar</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-inter text-muted mb-6"
          variants={slideInFromLeft}
          initial="hidden"
          animate="show"
        >
          <span className="text-accent">{displayedRole}</span>
        </motion.p>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-text mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={prefersReducedMotion ? { duration: 0.01 } : { delay: 0.5, duration: 0.8 }}
        >
          {personalInfo.summary}
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={prefersReducedMotion ? { duration: 0.01 } : { delay: 0.8, duration: 0.8 }}
        >
          <a href="#projects" className="bg-accent hover:bg-accentAlt text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
            View Projects
          </a>
          <a href="#contact" className="border border-accent text-accent hover:bg-accent hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
