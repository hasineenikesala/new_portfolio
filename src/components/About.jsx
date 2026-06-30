import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{ padding: '60px 20px' }}>
      <div className="about-canvas">
        <h2 className="about-header">About Me</h2>
        
        <p className="about-bio">
          Enthusiastic Information Systems undergraduate with practical experience in full-stack 
          web development, software design, and database management. Skilled in modern web 
          technologies including React.js, Node.js, Express.js, Spring Boot, PHP, MySQL, and MongoDB. 
          Developed multiple academic and personal projects demonstrating strong problem-solving, 
          teamwork, and software development skills.
        </p>

        {/* Dynamic Hover Grid Blocks */}
        <div className="about-grid">
          {/* Card 1: Education */}
          <div className="about-card">
            <div className="about-card-tag">EDUCATION</div>
            <h3 className="about-card-title">BSc in Information Systems</h3>
            <p className="about-card-subtext">Rajarata University of Sri Lanka</p>
          </div>

          {/* Card 2: Academic Status */}
          <div className="about-card">
            <div className="about-card-tag">ACADEMIC STATUS</div>
            <h3 className="about-card-title">Year 3 of 4</h3>
            <p className="about-card-subtext">GPA: 3.49/4.0 | Exp. 2027</p>
          </div>

          {/* Card 3: Experience */}
          <div className="about-card">
            <div className="about-card-tag">EXPERIENCE</div>
            <h3 className="about-card-title">Web Developer Intern</h3>
            <p className="about-card-subtext">Devora (Pvt) Ltd. (Nov 2025 - Feb 2026)</p>
          </div>
        </div>

        {/* Pulsing Action Download CTA */}
        <div className="cv-button-container">
          <a 
            href="/Hasini_Nikesala_CV.pdf" 
            download="Hasini_Nikesala_CV.pdf" 
            className="cv-download-btn"
          >
            <Download size={18} />
            Get My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
