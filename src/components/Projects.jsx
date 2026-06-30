import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const projects = [
    {
      title: 'Watch Sale E-Commerce',
      tech: 'React.js, Node.js, Express.js, MongoDB',
      url: 'https://github.com/hasineenikesala/watch-sale-system.git',
      desc: 'A full-stack watch e-commerce platform offering product discovery, shopping cart logic, secure user authentication, and admin inventory controls.',
      blueprint: (
        <svg className="project-blueprint-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="24" />
          <line x1="50" y1="50" x2="50" y2="32" strokeWidth="2" />
          <line x1="50" y1="50" x2="68" y2="50" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <line x1="50" y1="14" x2="50" y2="20" />
          <line x1="50" y1="80" x2="50" y2="86" />
          <line x1="14" y1="50" x2="20" y2="50" />
          <line x1="80" y1="50" x2="86" y2="50" />
        </svg>
      )
    },
    {
      title: 'Blood Bank & Donor Management',
      tech: 'PHP, MySQL, HTML, CSS, JavaScript',
      url: 'https://github.com/hasineenikesala/blood-bank---donor-management-system.git',
      desc: 'A management portal linking donors with local blood banks, showcasing real-time inventory counts, eligibility checks, and request routing.',
      blueprint: (
        <svg className="project-blueprint-svg" viewBox="0 0 100 100">
          {/* Heartbeat ECG background line */}
          <path d="M10 55h20l5-15 6 30 6-20 4 10 5-5h24" strokeWidth="1" strokeDasharray="3 3" />
          {/* Detailed blood drop icon */}
          <path d="M50 22 C50 22 72 50 72 66 A22 22 0 0 1 28 66 C28 50 50 22 50 22 Z" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Study Buddy App',
      tech: 'TypeScript, CSS',
      url: 'https://github.com/hasineenikesala/studybuddy-sri-lanka.git',
      desc: 'A student collaboration tool for tracking courses, sharing study materials, and planning tasks with an intuitive frontend deck system.',
      blueprint: (
        <svg className="project-blueprint-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="8" />
          <circle cx="25" cy="30" r="5" />
          <circle cx="75" cy="30" r="5" />
          <circle cx="30" cy="75" r="5" />
          <circle cx="70" cy="75" r="5" />
          <line x1="50" y1="50" x2="25" y2="30" strokeDasharray="3 3" />
          <line x1="50" y1="50" x2="75" y2="30" strokeDasharray="3 3" />
          <line x1="50" y1="50" x2="30" y2="75" strokeDasharray="3 3" />
          <line x1="50" y1="50" x2="70" y2="75" strokeDasharray="3 3" />
          <line x1="25" y1="30" x2="75" y2="30" />
          <line x1="30" y1="75" x2="70" y2="75" />
        </svg>
      )
    },
    {
      title: 'IoT-Based Environment Control System',
      tech: 'IoT Integration, System Testing',
      url: 'https://github.com/hasineenikesala/environment_control_system',
      desc: 'An automated environmental monitoring hub that aggregates sensor data, visualizes conditions, and schedules climate adjustment sequences.',
      blueprint: (
        <svg className="project-blueprint-svg" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="4" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="18" />
          <line x1="50" y1="20" x2="50" y2="80" />
          <line x1="20" y1="50" x2="80" y2="50" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <path d="M28 50 A22 22 0 0 1 72 50" strokeWidth="1" />
          <path d="M35 50 A15 15 0 0 1 65 50" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Game Lobby System',
      tech: 'React.js, Tailwind CSS',
      url: 'https://github.com/hasineenikesala/game_lobby.git',
      desc: 'An interactive hub connecting multiplayer gamers with lobby rooms, matching queues, and real-time chat lobbies.',
      blueprint: (
        <svg className="project-blueprint-svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="32" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
          <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="5 5" />
          <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="5 5" />
          <path d="M 28 28 L 20 28 L 20 20 L 28 20" strokeWidth="2" />
          <path d="M 72 28 L 80 28 L 80 20 L 72 20" strokeWidth="2" />
          <path d="M 28 72 L 20 72 L 20 80 L 28 80" strokeWidth="2" />
          <path d="M 72 72 L 80 72 L 80 80 L 72 80" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: 'Private University Web Application',
      tech: 'HTML5, CSS3, PHP, MySQL',
      url: 'https://github.com/hasineenikesala/privateuniproject.git',
      desc: 'A university web portal that streamlines student registration, course scheduling, grading systems, and administrative record management.',
      blueprint: (
        <svg className="project-blueprint-svg" viewBox="0 0 100 100">
          <polygon points="50,15 15,32 85,32" strokeWidth="2" />
          <rect x="12" y="76" width="76" height="8" rx="1" />
          <rect x="8" y="84" width="84" height="4" />
          <rect x="24" y="32" width="8" height="44" />
          <rect x="46" y="32" width="8" height="44" />
          <rect x="68" y="32" width="8" height="44" />
          <line x1="5" y1="52" x2="95" y2="52" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const maxIndex = projects.length - itemsPerPage;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  return (
    <section id="projects">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      
      <div className="carousel-container">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {projects.map((proj, idx) => (
            <div className="carousel-slide" key={idx}>
              <div className="project-card">
                <div className="project-cover">
                  {/* Custom inline code blueprint vector graphics */}
                  {proj.blueprint}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-tech">{proj.tech}</p>
                <p className="project-desc">{proj.desc}</p>
                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-btn"
                >
                  View Project
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button 
            onClick={prevSlide} 
            className="carousel-btn"
            disabled={currentIndex === 0}
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide} 
            className="carousel-btn"
            disabled={currentIndex >= maxIndex}
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
