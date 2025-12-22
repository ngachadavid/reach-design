'use client';
import { useState, useEffect, useRef } from "react";
import AnimatedH2 from "../global/AnimatedH2";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const statementsRef = useRef([]);
  
  // Initialize refs array
  if (statementsRef.current.length === 0) {
    statementsRef.current = Array(4).fill(null);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (statementsRef.current.length === 0) return;
      
      const viewportCenter = window.innerHeight / 2;
      
      // Find which statement is closest to viewport center
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      statementsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const statementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(statementCenter - viewportCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });
      
      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "(About Us)";
  const statements = [
    "honor heritage.",
    "innovate responsibly.",
    "craft together.",
    "envision tomorrow."
  ];
  const description =
    "Since 2018, we've been redefining architecture and interior design—integrating cultural heritage, sustainability, and AI-powered innovation.";

  return (
    <div ref={sectionRef} className="bg-white text-black px-4 2xl:px-0 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Animated H2 */}
        <AnimatedH2 isVisible={isVisible}>{text}</AnimatedH2>

        {/* Right: Statements + description */}
        <div className="flex flex-col gap-2 relative">
          {/* Floating "We" that slides down */}
          <div 
            className="absolute left-0 text-lg md:text-4xl font-extrabold leading-relaxed tracking-tight transition-all duration-1000 ease-out pointer-events-none"
            style={{
              top: statementsRef.current[activeIndex] 
                ? statementsRef.current[activeIndex].offsetTop 
                : 0
            }}
          >
            We
          </div>
          
          {/* Statements without "We" */}
          {statements.map((stmt, idx) => (
            <p 
              key={idx}
              ref={(el) => (statementsRef.current[idx] = el)}
              className="text-lg md:text-4xl font-extrabold leading-relaxed tracking-tight transition-opacity duration-300"
              style={{
                paddingLeft: '4rem',
                opacity: activeIndex === idx ? 1 : 0.4
              }}
            >
              {stmt}
            </p>
          ))}

          <p className="mt-4 text-lg md:text-xl leading-relaxed tracking-tight font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}