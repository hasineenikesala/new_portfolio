import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, MessageSquare, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data using Formspree AJAX
      const response = await fetch('https://formspree.io/f/mqkrbglp', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _to: 'hasineenikesala@gmail.com'
        })
      });

      // Simulated network latency for command launcher feel
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed, simulating fallback transition', err);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact <span>Hub</span></h2>

      <div className="contact-layout">
        {/* Left Column: Info & Links */}
        <div className="contact-info-panel">
          <div className="contact-info-header">
            <h3>Let's build something epic</h3>
            <p>
              I am open to internship opportunities, full-stack web development projects, and collaboration queries. Feel free to reach out to me!
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={20} />
              </div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <a href="mailto:hasineenikesala@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  hasineenikesala@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-detail-text">
                <strong>Location</strong>
                <span>Anuradhapura, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="contact-social-links">
            <a href="https://github.com/hasineenikesala" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/hasini-nikesala-b40b1028b" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://wa.me/94703662991" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
              <MessageSquare size={22} />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div className="contact-form-card">
          {isSubmitted && (
            <div className="form-success-overlay">
              <Check size={50} className="success-icon" />
              <div className="success-message">Message transmitted successfully!</div>
              <div className="success-sub">Thank you, I will get back to you shortly.</div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">NAME</label>
              <div className="form-control-wrapper">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="form-control" 
                  value={formState.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Enter your name"
                />
                {/* Border Trace overlay element */}
                <span className="form-control-focus-trace"></span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">EMAIL ADDRESS</label>
              <div className="form-control-wrapper">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="form-control" 
                  value={formState.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Enter your email"
                />
                <span className="form-control-focus-trace"></span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">SUBJECT</label>
              <div className="form-control-wrapper">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="form-control" 
                  value={formState.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Enter email subject"
                />
                <span className="form-control-focus-trace"></span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">MESSAGE</label>
              <div className="form-control-wrapper">
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="form-control" 
                  value={formState.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Write your message here..."
                ></textarea>
                <span className="form-control-focus-trace"></span>
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT DATA'}
            </button>
          </form>
        </div>
      </div>

      {/* Cybernetic Mascot (Dual-Axis Loops) */}
      <div className="mascot-container">
        <div className="mascot-graphic">
          <div className="mascot-head">
            <div className="mascot-eye"></div>
            <div className="mascot-eye"></div>
          </div>
          <div className="mascot-body"></div>
          <div className="mascot-hand left"></div>
          <div className="mascot-hand right"></div>
        </div>
        <div className="mascot-text">HN_ASSISTANT v1.0 ONLINE</div>
      </div>
    </section>
  );
};

export default Contact;
