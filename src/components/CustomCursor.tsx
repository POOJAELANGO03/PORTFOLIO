import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CustomCursor.css';

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  // Reset hover state on route change (fixes stuck cursor)
  useEffect(() => {
    setIsHovered(false);
  }, [location.pathname]);

  useEffect(() => {
    let mouseX = -100, mouseY = -100;
    let outerX = -100, outerY = -100;
    let innerX = -100, innerY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .hover-target')) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .hover-target')) {
        setIsHovered(false);
      }
    };

    // Outer ring follows with smooth lag (0.25)
    // Inner ring follows with very slight lag (0.55)
    const loop = () => {
      outerX += (mouseX - outerX) * 0.25;
      outerY += (mouseY - outerY) * 0.25;
      
      innerX += (mouseX - innerX) * 0.55;
      innerY += (mouseY - innerY) * 0.55;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerX}px, ${outerY}px)`;
      }
      
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${innerX}px, ${innerY}px)`;
      }

      animId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    animId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Large lagging outer ring — shows arrow on hover */}
      <div ref={outerRef} className={`c-outer ${isHovered ? 'hovered' : ''}`}>
        <span className="c-arrow">→</span>
      </div>
      {/* Small instant inner dot — hides on hover */}
      <div ref={innerRef} className={`c-inner ${isHovered ? 'hovered' : ''}`} />
    </>
  );
};

export default CustomCursor;
