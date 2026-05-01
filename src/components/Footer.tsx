import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bar">
          <p className="footer-copy">© {currentYear} Pooja Elango. All rights reserved.</p>
          <p className="footer-made">Designed & Built with passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
