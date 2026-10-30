import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

export function ScrollReveal({
  children,
  className = '',
  variant = 'slideUp', // 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'zoomIn'
  delayMs = 0,
  durationMs = 700,
  threshold = 0.1
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`
      }}
      className={`scroll-reveal reveal-${variant} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
