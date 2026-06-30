import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Get normalized coordinate delta (-1 to 1) relative to screen center
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      setParallax({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero" className="hero-section">
        {/* Dynamic Watermark with parallax mouse-move depth physics */}
        <div 
          className="hero-watermark"
          style={{
            transform: `translate(calc(-50% + ${parallax.x * 30}px), calc(-50% + ${parallax.y * 30}px))`
          }}
        >
          HASINI NIKESALA
        </div>

        <div className="hero-center">
          <div className="portrait-wrapper">
            <img 
              src="/profile.png" 
              alt="Hasini Nikesala Portrait" 
              className="portrait-image" 
            />
            {/* Re-engineered counter-rotating linear gradient rings */}
            <div className="portrait-ring-outer"></div>
            <div className="portrait-ring-inner"></div>

            {/* Left Geometric Pointer with laser pulse animations */}
            <div className="pointer-line-left">
              <span className="pointer-tag-left">Software Development</span>
            </div>

            {/* Right Geometric Pointer with laser pulse animations */}
            <div className="pointer-line-right">
              <span className="pointer-tag-right">IT Undergraduate</span>
            </div>
          </div>

          <div className="hero-info">
            <h1 className="hero-name">Hasini Nikesala</h1>
            <p className="hero-title">Intern Software Engineer | Full Stack Developer</p>
          </div>
        </div>

        {/* Pulsing scroll downward indicator */}
        <div className="scroll-indicator" onClick={handleScrollToAbout}>
          SCROLL
        </div>
      </section>
    </>
  );
};

export default Hero;
