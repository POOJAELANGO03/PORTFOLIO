import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        {/* Section Header Animation */}
        <motion.div
          className="section-header"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}

        >
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="section-subtitle">
            Innovation isn’t what I do—it’s who I am.
          </p>
        </motion.div>

        <div className="about-content">
          {/* About Text Animation */}
          <motion.div
            className="about-text"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
             viewport={{ once: false, amount: 0.4 }}
          >
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
          </motion.div>

          {/* Timeline Animation */}
          <motion.div
            className="about-visual"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="experience-timeline">
              {[
                {
                  title: "MCA – Kongu Engineering College",
                  date: "2024 - Present",
                  desc: "Currently pursuing a Master’s in building intelligent apps with seamless UI/UX",
                },
                {
                  title: "BCA – Vellalar College for Women",
                  date: "2021 - 2024",
                  desc: "Developed scalable web applications using modern frameworks",
                },
                {
                  title: "HSC – Vidyaa Vikas Matric Hr. Sec. School",
                  date: "2019 - 2021",
                  desc: "Earned 83.67% in Computer Science & Mathematics stream",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                   viewport={{ once: false, amount: 0.4 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{item.title}</h4>
                    <span className="timeline-date">{item.date}</span>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
