import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const darkPanelRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  
  // Refs for individual text lines to create staggered parallax
  const lightHelloRef = useRef<HTMLHeadingElement>(null);
  const lightNameRef = useRef<HTMLHeadingElement>(null);
  const darkHelloRef = useRef<HTMLHeadingElement>(null);
  const darkNameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      const darkPanel = darkPanelRef.current;
      if (!wrapper || !darkPanel) return;

      // Use document-relative position so progress = 0 when page loads
      const wrapperTop = wrapper.offsetTop;          // px from top of document
      const wrapperHeight = wrapper.offsetHeight;    // full 300vh height
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // How far we've scrolled INTO the hero section (negative = not there yet)
      const scrolledIntoSection = scrollY - wrapperTop;
      const scrollableDistance = wrapperHeight - viewportHeight;

      // progress goes 0 → 1 as we scroll through the section
      const progress = Math.max(0, Math.min(1, scrolledIntoSection / scrollableDistance));

      // Dark panel grows from 0vw → 100vw as you scroll
      darkPanel.style.width = `${progress * 100}vw`;

      // Staggered parallax: HELLO moves at one speed, NAME moves at another
      const helloSlideX = progress * -40; 
      const nameSlideX = progress * -60;
      
      if (lightHelloRef.current) lightHelloRef.current.style.transform = `translateX(${helloSlideX}vw)`;
      if (darkHelloRef.current) darkHelloRef.current.style.transform = `translateX(${helloSlideX}vw)`;
      
      if (lightNameRef.current) lightNameRef.current.style.transform = `translateX(${nameSlideX}vw)`;
      if (darkNameRef.current) darkNameRef.current.style.transform = `translateX(${nameSlideX}vw)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-wrapper" ref={wrapperRef}>
      <div className="hero-sticky">

        {/* ── BOTTOM LAYER: Black text on white ── */}
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

        {/* ── TOP LAYER: White text inside dark panel (clips in from left) ── */}
        <div className="hero-dark-panel" ref={darkPanelRef}>
          <div className="hero-layer hero-layer-dark">
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
