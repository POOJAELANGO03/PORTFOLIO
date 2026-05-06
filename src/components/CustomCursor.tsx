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
      if (target.closest('a, button, .hover-target, input, textarea, label, [role="button"], .gallery-img-wrapper')) {
        setIsHovered(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .hover-target, input, textarea, label, [role="button"], .gallery-img-wrapper')) {
        setIsHovered(false);
      }
    };

    const loop = () => {
      // Smooth lag for outer circle, instant for inner dot
      innerX += (mouseX - innerX) * 1;
      innerY += (mouseY - innerY) * 1;

      outerX += (mouseX - outerX) * 0.15;
      outerY += (mouseY - outerY) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerX}px, ${outerY}px, 0)`;
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
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
