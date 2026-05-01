import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Inner dot follows mouse instantly
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    // Outer ring follows mouse with smooth lag (LERP)
    const loop = () => {
      outerX += (mouseX - outerX) * 0.1;
      outerY += (mouseY - outerY) * 0.1;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerX}px, ${outerY}px)`;
      }

      animId = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Large lagging outer circle */}
      <div ref={outerRef} className="c-outer" />
      {/* Small instant inner circle */}
      <div ref={innerRef} className="c-inner" />
    </>
  );
};

export default CustomCursor;
