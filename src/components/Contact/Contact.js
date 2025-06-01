import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import {
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaUser
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: 'Address', value: '#404 Chandimandir, Panchkula, 134107, India' },
    { icon: <FaPhoneAlt />, label: 'Phone', value: '+91 7986145477' },
    { icon: <FaEnvelope />, label: 'Email', value: '100mohitk@gmail.com' },
    { icon: <FaCalendarAlt />, label: 'Birth Date', value: '05/12/2004' },
    { icon: <FaUser />, label: 'Nationality', value: 'Indian' }
  ];

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-header"
      >
        <h2>Get In Touch</h2>
        <div className="underline"></div>
        <p>Feel free to contact me for any work or suggestions</p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3>Contact Information</h3>
          <ul>
            {contactInfo.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-content">
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3>Send Me a Message</h3>
          <form className="contact-form" onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 