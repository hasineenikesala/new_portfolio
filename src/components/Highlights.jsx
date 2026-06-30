import React from 'react';
import { Award, Trophy, Users } from 'lucide-react';

const Highlights = () => {
  return (
    <section id="highlights">
      <h2 className="section-title">Professional <span>Highlights</span></h2>

      <div className="highlights-grid">
        {/* Certifications Timeline */}
        <div className="highlights-col">
          <h3 className="highlights-col-title">
            <Award size={22} />
            Certifications
          </h3>
          <ul className="highlights-list">
            <li className="highlights-item">
              <strong>MERN Stack Development</strong>
              <span className="highlights-desc">IDET Certification</span>
            </li>
            <li className="highlights-item">
              <strong>Web Development & Python</strong>
              <span className="highlights-desc">University of Moratuwa (UOM 2025)</span>
            </li>
            <li className="highlights-item">
              <strong>Cybersecurity & Ethical Hacking</strong>
              <span className="highlights-desc">E-Nenasala Certification</span>
            </li>
            <li className="highlights-item">
              <strong>AI/ML Engineer Certification</strong>
              <span className="highlights-desc">SLIIT (2025)</span>
            </li>
            <li className="highlights-item">
              <strong>Cloud Operations & AWS</strong>
              <span className="highlights-desc">IDET Certification</span>
              <div>
                <span className="pulse-badge">
                  <span className="pulse-dot"></span>
                  In Progress
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Hackathons Timeline */}
        <div className="highlights-col">
          <h3 className="highlights-col-title">
            <Trophy size={22} />
            Hackathons
          </h3>
          <ul className="highlights-list">
            <li className="highlights-item">
              <strong>Code Sprint 11</strong>
              <span className="highlights-desc">Informatics Institute of Technology (IIT)</span>
            </li>
            <li className="highlights-item">
              <strong>Bitcode</strong>
              <span className="highlights-desc">Rajarata University of Sri Lanka (RJT)</span>
            </li>
          </ul>
        </div>

        {/* Leadership Timeline */}
        <div className="highlights-col">
          <h3 className="highlights-col-title">
            <Users size={22} />
            Leadership & Engagement
          </h3>
          <ul className="highlights-list">
            <li className="highlights-item">
              <strong>Event Coordinator</strong>
              <span className="highlights-desc">BITCODE IT Exhibition / Event (RJT)</span>
            </li>
            <li className="highlights-item">
              <strong>Committee Member</strong>
              <span className="highlights-desc">Computer Society / BITSA Association (RJT)</span>
            </li>
            <li className="highlights-item">
              <strong>Committee Member</strong>
              <span className="highlights-desc">Gavel Club (RJT)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
