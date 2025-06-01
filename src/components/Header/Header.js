import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.button
        className="contact-btn"
        onClick={scrollToContact}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPhoneAlt /> Contact Me
      </motion.button>

      <div className="header-content">
        <motion.div
          className="profile-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Use a placeholder image URL for now - replace with actual image */}
          <img
            src="/images/profile.jpg"
            alt="Mohit Kumar"
            className="profile-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150?text=MK';
              e.target.onerror = null;
            }}
          />
        </motion.div>

        <motion.div
          className="header-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1>Mohit Kumar</h1>
          <h2>Front-end Developer</h2>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:100mohitk@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="header-wave"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </motion.header>
  );
};

export default Header; 