import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-app">
      {/* GLOBAL RESPONSIBLE NAVBAR */}
      <Navbar />

      {/* 1. HERO VIEW */}
      <Hero />

      {/* 2. ABOUT ME CANVAS */}
      <About />

      {/* 3. INTERACTIVE PROJECTS DECK CAROUSEL */}
      <Projects />

      {/* 4. TECHNICAL ARSENAL GRID */}
      <Skills />

      {/* 5. HIGHLIGHTS GRID MATRIX */}
      <Highlights />

      {/* 6. CONTACT HUB & LIVE EMAIL TRANSMISSION */}
      <Contact />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-scroll-text">THANK'S FOR SCROLLING!</div>
        <p className="footer-copyright">
          &copy; 2026 Hasini Nikesala. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
