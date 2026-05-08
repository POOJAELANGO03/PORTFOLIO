import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutLeft from '../assets/ABOUT LEFT.jpeg';
import aboutCenter from '../assets/ABOUT CENTER.jpeg';
import aboutRight from '../assets/ABOUT RIGHT 1.jpeg';
import aboutRight2 from '../assets/ABOUT RIGHT 2.jpeg';
const Contact: React.FC = () => {
  return (
    <>
      <div className="contact-marquee-wrapper">
        <div className="contact-marquee">
          <div className="contact-marquee-content">
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
          </div>
          <div className="contact-marquee-content" aria-hidden="true">
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
            <span>IDEATE.</span>
            <span>IMPLEMENT.</span>
            <span>ITERATE.</span>
          </div>
        </div>
      </div>

      <div className="contact-gallery-section">
        <div className="contact-gallery-container">
          <div className="contact-gallery-grid">
            <motion.div 
              className="gallery-img-wrapper"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={aboutLeft} alt="Pooja Elango working on a project" />
            </motion.div>
            <motion.div 
              className="gallery-img-wrapper center-img"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img src={aboutCenter} alt="Pooja Elango presentation" />
            </motion.div>
            <motion.div 
              className="gallery-img-wrapper"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src={aboutRight} alt="Pooja Elango collaboration" />
            </motion.div>
            <motion.div 
              className="gallery-img-wrapper"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src={aboutRight2} alt="Pooja Elango development session" />
            </motion.div>
          </div>
          
          <motion.div 
            className="know-more-btn-wrapper"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="know-more-btn">
              Know more about me
            </Link>
          </motion.div>
        </div>
      </div>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-inner">
            {/* Left Side */}
          <motion.div
            className="contact-left"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="contact-title">Always keen<br />for a good<br />collab</h2>

            <div className="contact-pills">
              <a href="mailto:poojaelango03@gmail.com" className="contact-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                poojaelango03@gmail.com
              </a>

            </div>
          </motion.div>

          {/* Right Side: Social Icons & Spinning Circle */}
          <motion.div
            className="contact-right"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="spinning-circle-wrapper hover-target">
              <svg viewBox="0 0 200 200" width="180" height="180" className="spinning-svg">
                <defs>
                  <path
                    id="textPath"
                    d="M 100, 100 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                  />
                </defs>
                <text className="spinning-text">
                  <textPath href="#textPath" startOffset="0%">
                    Id love to say Hi Drop me a text <tspan fill="#ff0000">*</tspan>
                  </textPath>
                </text>
              </svg>
              <div className="spinning-asterisk">*</div>
            </div>

            <div className="contact-social-icons">
              <a href="https://www.linkedin.com/in/poojaelango03/" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/POOJAELANGO03" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
