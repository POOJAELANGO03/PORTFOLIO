import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profileImg from '../assets/PORTFOLIO PROFILE.jpeg';

const Hero: React.FC = () => {
  const darkPanelRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  
  // Staggered parallax refs
  const lightHelloRef = useRef<HTMLHeadingElement>(null);
  const lightNameRef = useRef<HTMLHeadingElement>(null);
  const darkHelloRef = useRef<HTMLHeadingElement>(null);
  const darkNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const darkPanel = darkPanelRef.current;
      if (!wrapper || !darkPanel) return;

      const wrapperTop = wrapper.offsetTop;
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const scrolledIntoSection = scrollY - wrapperTop;
      const scrollableDistance = wrapperHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / scrollableDistance));

      darkPanel.style.width = `${progress * 100}vw`;

      // STAGGERED PARALLAX: hello moves slower than I'm Pooja
      const helloSlideX = progress * -40; 
      const nameSlideX = progress * -60;
      
      if (lightHelloRef.current) lightHelloRef.current.style.transform = `translateX(${helloSlideX}vw)`;
      if (darkHelloRef.current) darkHelloRef.current.style.transform = `translateX(${helloSlideX}vw)`;
      
      if (lightNameRef.current) lightNameRef.current.style.transform = `translateX(${nameSlideX}vw)`;
      if (darkNameRef.current) darkNameRef.current.style.transform = `translateX(${nameSlideX}vw)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-wrapper" ref={wrapperRef}>
      <div className="hero-sticky">

        {/* ── BOTTOM LAYER: White BG ── */}
        <div className="hero-layer hero-layer-light">
          <div className="container hero-content">
            <div className="hero-bottom-left">
              <span className="hero-label">MCA'26</span>
            </div>
            <div className="hero-main-text text-right">
              <h1 className="hello-text" ref={lightHelloRef}>hello</h1>
              <h1 className="name-text" ref={lightNameRef}>I'm Pooja</h1>
            </div>
          </div>
        </div>

        {/* ── TOP LAYER: Dark Panel Wipe ── */}
        <div className="hero-dark-panel" ref={darkPanelRef}>
          <div className="hero-layer hero-layer-dark">
            {/* Profile Image - Only in Dark Layer */}
            <div className="hero-profile-container">
              <img src={profileImg} alt="Pooja Profile" className="hero-profile-img" />
            </div>

            <div className="container hero-content">
              <div className="hero-bottom-left">
                <span className="hero-label tagline-label">A 23 year old girl from India :)</span>
              </div>
              <div className="hero-main-text text-right">
                <h1 className="hello-text" ref={darkHelloRef}>hello</h1>
                <h1 className="name-text" ref={darkNameRef}>I'm Pooja</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
