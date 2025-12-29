'use client';
import { useState, useEffect, useRef } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import DividerArrow from "../global/DividerArrow";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const statementsRef = useRef([]);

  // init refs
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
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      statementsRef.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "(About Us)";
  const statements = [
    "We honor heritage.",
    "We innovate responsibly.",
    "We craft together.",
    "We envision tomorrow.",
  ];

  const description =
    "Since 2018, we've been redefining architecture and interior design—integrating cultural heritage, sustainability, and AI-powered innovation.";

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 pt-44 pb-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left */}
        <div className="w-full md:w-1/3">
          <AnimatedH2 isVisible={isVisible}>{text}</AnimatedH2>
        </div>

        {/* Right */}
        <div className="w-full md:w-2/3 flex flex-col gap-3">
          {statements.map((stmt, idx) => (
            <p
              key={idx}
              ref={(el) => (statementsRef.current[idx] = el)}
              className="text-lg md:text-4xl font-extrabold leading-relaxed tracking-tight transition-opacity duration-300"
              style={{
                opacity: activeIndex === idx ? 1 : 0.4,
              }}
            >
              {stmt}
            </p>
          ))}

          <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight font-normal w-full md:w-[80%]">
            {description}
          </p>
        </div>
      </div>
  <DividerArrow isVisible={isVisible} />
    </section>
  );
}
