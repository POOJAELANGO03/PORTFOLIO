import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const darkPanelRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);

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
                <h1 className="hello-text">hello</h1>
                <h1 className="name-text">I'm</h1>
                <h1 className="name-text">Pooja</h1>
              </div>
          </div>
        </div>

        {/* ── TOP LAYER: White text inside dark panel (clips in from left) ── */}
        <div className="hero-dark-panel" ref={darkPanelRef}>
          <div className="hero-layer hero-layer-dark">
            <div className="container hero-content">
              <div className="hero-main-text text-left">
                <h1 className="hello-text">hello</h1>
                <h1 className="name-text">I'm</h1>
                <h1 className="name-text">Pooja</h1>
              </div>
              <div className="hero-bottom-right">
                <span className="hero-label text-right">A 23 YEAR OLD GIRL FROM INDIA :)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
