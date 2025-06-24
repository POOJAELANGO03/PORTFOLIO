import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="section-subtitle">
            Innovation isn’t what I do—it’s who I am.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card glass glow">
              <h3>My Story</h3>
              <p>
                Rooted in a deep fascination for human-computer synergy, my journey from academia to applied innovation has been a pursuit of purposeful design and intelligent engineering.
                As a postgraduate in Computer Applications, I’ve architected AI-infused systems, crafted inclusive assistive technologies, and shaped seamless digital experiences.
              </p>
              <p>
                My work bridges aesthetic clarity with algorithmic logic—merging React Native, Firebase, and UI/UX design to deliver solutions that are not just functional, but deeply resonant. 
                Each project is a canvas where empathy meets execution, and where innovation is measured by impact.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>MCA – Kongu Engineering College</h4>
                  <span className="timeline-date">2024 - Present</span>
                  <p>Currently pursuing a Master’s in building intelligent apps with seamless UI/UX</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>BCA – Vellalar College for Women</h4>
                  <span className="timeline-date">2021 - 2024</span>
                  <p>Developed scalable web applications using modern frameworks</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4> HSC – Vidyaa Vikas Matric Hr. Sec. School</h4>
                  <span className="timeline-date">2019 - 2021</span>
                  <p>Earned 83.67% in Computer Science & Mathematics stream</p>
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
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>Striving for perfection in every pixel and line of code</p>
            </div>
            <div className="value-card glass">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Embracing new technologies and creative solutions</p>
            </div>
            <div className="value-card glass">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.97L12 13l-1.99-4.03A2.5 2.5 0 0 0 7.76 8H5.24c-.8 0-1.54.37-2.01.97L1 16h2.5v6h2v-6h1.76l.74-1.48.74 1.48H10v6h2z" />
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
