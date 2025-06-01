import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <div className="app">
        <Header />

        <motion.main
          className="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="about-section">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>About Me</h2>
              <div className="underline"></div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="about-text">
                Highly motivated and passionate Front-end Developer with a strong foundation in programming,
                data structures, algorithms, and software development. I focus on creating responsive and
                user-friendly web applications using modern technologies and best practices.
              </p>

              <motion.div
                className="education"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3>Education</h3>
                <div className="education-item">
                  <h4>Bachelor in Computer Applications</h4>
                  <p>Sri Guru Gobind Singh College, Sector 26, Chandigarh</p>
                </div>
              </motion.div>

              <motion.div
                className="interests"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3>Hobbies &amp; Interests</h3>
                <ul className="interests-list">
                  <li>Playing volleyball</li>
                  <li>Playing cricket</li>
                  <li>Exploring the Internet</li>
                </ul>
              </motion.div>
            </motion.div>
          </section>

          <Skills />
          <Projects />
          <Contact />
        </motion.main>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Mohit Kumar. All Rights Reserved.</p>
        </motion.footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
