import React, { useEffect, useState } from 'react';
import './Hero.css';
import profile from "../assets/Profile 2.jpg"





const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['FrontEnd Developer', 'Mobile Applications', 'UI/UX Designer'];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
  <div className="floating-shapes">
    <div className="shape shape-1"></div>
    <div className="shape shape-2"></div>
    <div className="shape shape-3"></div>
    <div className="shape shape-4"></div>

    {/* Extra floating shapes - same style */}
    <div className="shape shape-5"></div>
    <div className="shape shape-6"></div>
    <div className="shape shape-7"></div>
  </div>
</div>


      <div className="container hero-content">
        <div className="hero-text animate-fadeInUp">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            <span className="name">POOJA ELANGO</span>
            <br />
            <span className="role text-gradient">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>
          <p className="hero-description">
            Architect of intelligent interfaces, fusing algorithmic precision with expressive design.
            I craft transformative digital experiences where AI, aesthetics, and functionality converge seamlessly.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={scrollToProjects}>
              View My Work
            </button>
          </div>
        </div>

       <div className="hero-visual">
  <div className="hero-image-container">
    <div className="hero-ring"></div> {/* <- Ring behind image */}
    <div className="hero-image">
      <div className="profile-placeholder">
        <div className="profile-icon">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  </div>
</div>





        
      </div>

      
    </section>
  );
};

export default Hero;
