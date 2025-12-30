'use client';

import { useEffect, useRef, useState } from 'react';

export default function DividerArrow3() {
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
        width="170"
        height="160"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        style={{ transform: 'scaleX(-1)' }}
      >
        {/* Main line */}
        <path
          d="M206.266 254C208.962 237.817 204.219 197.643 192.253 183.319C168.466 154.842 133.459 157.189 122.955 172.686C117.983 180.022 121.891 189.92 130.855 195.38C140.842 201.464 149.167 190.281 149.464 183.748C160.964 147.471 159 73 115.455 63.2918C71.5809 53.5103 97.5219 100.217 109.454 83.8518C130.855 54.5 -6.5736 40.4912 2.4283 1.99998"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: isVisible ? 0 : 1200,
            transition: 'stroke-dashoffset 1.6s ease-in-out'
          }}
        />

        {/* Arrow tip */}
        <path
          d="M223.143 239.988C220.861 240.441 219.017 241.787 217.108 243.035C210.84 247.134 205.4 253.553 203.638 261.002C202.926 252.741 199.217 242.255 191.406 238.394"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
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