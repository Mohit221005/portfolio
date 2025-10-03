import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks, personalInfo } from '../data/content';
import { getVariants } from '../lib/motionVariants';

const Header = ({ prefersReducedMotion }) => {
  const [activeLink, setActiveLink] = useState('home');
  const { fadeIn } = getVariants(prefersReducedMotion);

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 'home';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].path);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjusted to trigger active link a bit earlier when section is mostly in view
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActive = navLinks[i].name.toLowerCase();
            break;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(targetId);
    }
  };

  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-90 backdrop-blur-sm shadow-lg"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-accent hover:text-accentAlt transition-colors duration-300">
          {personalInfo.name.split(' ')[0]}<span className="text-text">.</span>
        </a>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                onClick={(e) => handleClick(e, link.path)}
                className={`relative text-text hover:text-accent transition-colors duration-300
                  ${activeLink === link.name.toLowerCase() ? 'font-semibold text-accent' : ''}`}
              >
                {link.name}
                {activeLink === link.name.toLowerCase() && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-accent"
                    transition={prefersReducedMotion ? { duration: 0.01 } : { type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
