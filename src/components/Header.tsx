import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav-brand">
          <span className="logo">POOJZ</span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;