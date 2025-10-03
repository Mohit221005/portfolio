import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import { AnimatePresence, motion } from 'framer-motion'
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion'
import React, { Suspense, lazy } from 'react'

const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:bg-accent focus:text-white focus:p-3 focus:rounded-b-md">
        Skip to main content
      </a>
      <AnimatePresence mode="wait">
        <motion.div
          key="portfolio-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0.01 } : { duration: 0.5, ease: "easeOut" }}
        >
          <Header prefersReducedMotion={prefersReducedMotion} />
          <main id="main-content" className="relative">
            <Hero prefersReducedMotion={prefersReducedMotion} />
            <Suspense fallback={<div>Loading sections...</div>}>
              <About prefersReducedMotion={prefersReducedMotion} />
              <Skills prefersReducedMotion={prefersReducedMotion} />
              <Projects prefersReducedMotion={prefersReducedMotion} />
              <Contact prefersReducedMotion={prefersReducedMotion} />
            </Suspense>
          </main>
          <Suspense fallback={<div>Loading footer...</div>}>
            <Footer prefersReducedMotion={prefersReducedMotion} />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
