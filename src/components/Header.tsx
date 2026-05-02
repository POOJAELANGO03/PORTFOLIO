import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Stay transparent throughout the long Hero scroll (300vh)
      // Only show the frame when we approach the next section
      setIsScrolled(window.scrollY > window.innerHeight * 2.0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, path: string) => {
    setIsMenuOpen(false);

    if (path) {
      navigate(path);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== '/') {
        // If we are on another page (like /about), go to home first
        navigate('/');
        // Wait a tiny bit for the page to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`header ${isScrolled || location.pathname === '/about' ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav-brand">
          {location.pathname === '/about' ? (
            <button 
              className="nav-link hover-target" 
              onClick={() => handleNavClick('', '/')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Back to Home
            </button>
          ) : (
            <span className="logo" onClick={() => handleNavClick('', '/')} style={{cursor: 'pointer'}}>POOJZ</span>
          )}
        </div>
        
        {location.pathname !== '/about' && (
          <>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <button 
                  className="nav-link hover-target" 
                  onClick={() => handleNavClick('', '/')}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link hover-target" 
                  onClick={() => handleNavClick('', '/about')}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link hover-target" 
                  onClick={() => handleNavClick('projects', '')}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link hover-target" 
                  onClick={() => handleNavClick('skills', '')}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link hover-target" 
                  onClick={() => handleNavClick('contact', '')}
                >
                  Contact
                </button>
              </li>
            </ul>

            <button 
              className={`hamburger hover-target ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;