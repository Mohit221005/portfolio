import React from 'react';
import { motion } from 'framer-motion';
import { navLinks, personalInfo, socialLinks } from '../data/content';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { getVariants } from '../lib/motionVariants';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
};

const Footer = ({ prefersReducedMotion }) => {
  const { fadeIn } = getVariants(prefersReducedMotion);

  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="bg-surface text-muted py-8 border-t border-surface-dark"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <a href="#hero" className="text-2xl font-bold text-accent hover:text-accentAlt transition-colors duration-300 mb-4 md:mb-0">
            {personalInfo.name.split(' ')[0]}<span className="text-text">.</span>
          </a>
          <ul className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} className="hover:text-accent transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return Icon ? (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
                  aria-label={link.name}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ) : null;
            })}
          </div>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
