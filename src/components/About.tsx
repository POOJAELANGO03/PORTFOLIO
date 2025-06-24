import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="section-subtitle">
            Discover my journey and what drives my passion for creating digital experiences
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card glass glow">
              <h3>My Story</h3>
              <p>
                With over 5 years of experience in design and development, I've had the privilege 
                of working with diverse clients and projects. My journey began with a fascination 
                for how design and technology can come together to solve real-world problems.
              </p>
              <p>
                I believe in the power of clean, intuitive design paired with robust, scalable code. 
                Every project is an opportunity to push boundaries and create something meaningful 
                that resonates with users.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number text-gradient">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number text-gradient">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number text-gradient">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Senior Designer</h4>
                  <span className="timeline-date">2022 - Present</span>
                  <p>Leading design initiatives and mentoring junior developers</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Full Stack Developer</h4>
                  <span className="timeline-date">2020 - 2022</span>
                  <p>Developed scalable web applications using modern frameworks</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>UI/UX Designer</h4>
                  <span className="timeline-date">2019 - 2020</span>
                  <p>Crafted user-centered designs for various digital platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">Core Values</h3>
          <div className="values-grid">
            <div className="value-card glass">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>Striving for perfection in every pixel and line of code</p>
            </div>
            <div className="value-card glass">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Embracing new technologies and creative solutions</p>
            </div>
            <div className="value-card glass">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.97L12 13l-1.99-4.03A2.5 2.5 0 0 0 7.76 8H5.24c-.8 0-1.54.37-2.01.97L1 16h2.5v6h2v-6h1.76l.74-1.48.74 1.48H10v6h2z"/>
                </svg>
              </div>
              <h4>Collaboration</h4>
              <p>Building strong partnerships and fostering teamwork</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;