'use client';

import { useEffect, useRef, useState } from 'react';

export default function DividerArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-10 bg-white text-black">
      <svg
        ref={ref}
        width="260"
        height="170"
        viewBox="0 0 357 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Main line */}
        <path
          d="M355.377 2C355.377 102.685 321.875 149.594 226.369 161.434C185.004 166.562 18.6108 161.434 18.6108 262"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isVisible ? 'animate-draw-line' : ''}
          style={{
            strokeDasharray: 1000,
            strokeDashoffset: isVisible ? 0 : 1000,
            transition: 'stroke-dashoffset 1.6s ease-in-out'
          }}
        />

        {/* Arrow tip */}
        <path
          d="M4.10686 244.355C6.01943 245.128 7.40235 246.589 8.85801 247.978C13.6383 252.54 17.313 258.941 17.6124 265.599C19.6026 258.667 24.5722 250.344 32.0167 248.371"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className={isVisible ? 'animate-draw-arrow' : ''}
          style={{
            strokeDasharray: 300,
            strokeDashoffset: isVisible ? 0 : 300,
            transition: 'stroke-dashoffset 0.8s ease-in-out 1.4s'
          }}
        />
      </svg>
    </div>
  );
}