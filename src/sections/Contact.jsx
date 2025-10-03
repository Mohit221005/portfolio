import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/content';
import { getVariants } from '../lib/motionVariants';
import useScrollSection from '../hooks/useScrollSection';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
  phone: FaPhone,
};

const Contact = ({ prefersReducedMotion }) => {
  const { ref: sectionRef, hasAnimated } = useScrollSection(0.1);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const { fadeIn, slideInFromLeft, itemFade } = getVariants(prefersReducedMotion);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your actual EmailJS service ID, template ID, and Public Key
    const serviceId = 'YOUR_SERVICE_ID'; 
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY'; // This is your EmailJS User ID

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background text-text">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-accent mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={prefersReducedMotion ? { duration: 0.01 } : { duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          ref={sectionRef}
          variants={fadeIn}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface p-8 rounded-xl shadow-lg border border-surface-dark"
        >
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={slideInFromLeft}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-text text-sm font-medium mb-2">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-background border border-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text transition-all duration-200"
                whileFocus={prefersReducedMotion ? {} : { scale: 1.01, borderColor: '#2563EB', boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)' }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text text-sm font-medium mb-2">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-background border border-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text transition-all duration-200"
                whileFocus={prefersReducedMotion ? {} : { scale: 1.01, borderColor: '#2563EB', boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)' }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-text text-sm font-medium mb-2">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-md bg-background border border-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none text-text resize-y transition-all duration-200"
                whileFocus={prefersReducedMotion ? {} : { scale: 1.01, borderColor: '#2563EB', boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.5)' }}
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accentAlt transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
            )}
          </motion.form>

          <motion.div variants={itemFade} className="space-y-6 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-accent mb-4">Get in Touch</h3>
            <p className="text-lg text-text">Feel free to reach out to me through any of the following channels:</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-lg">
                <FaEnvelope className="text-accent" />
                <motion.a href={`mailto:${personalInfo.email}`} className="text-text hover:text-accentAlt transition-colors"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  {personalInfo.email}
                </motion.a>
              </div>
              <div className="flex items-center space-x-3 text-lg">
                <FaPhone className="text-accent" />
                <span className="text-text">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-lg">
                <FaLinkedin className="text-accent" />
                <motion.a href={`https://www.linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-text hover:text-accentAlt transition-colors"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  {personalInfo.linkedin}
                </motion.a>
              </div>
            </div>
            <div className="flex space-x-6 mt-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return Icon ? (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-300 transform hover:scale-110"
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                  >
                    <Icon size={30} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
