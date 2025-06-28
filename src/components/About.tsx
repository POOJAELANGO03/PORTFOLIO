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

       
      </div>
    </section>
  );
};

export default About;
