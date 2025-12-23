'use client';
import { useState, useEffect, useRef } from "react";
import AnimatedH2 from "../../global/AnimatedH2";
import Projects from "./Projects";
import Button from "../../global/Button";

export default function ProjectsIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useRef(null);  // Changed from sectionRef
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
      { threshold: 0.1 }  // Lowered threshold
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => headerRef.current && observer.unobserve(headerRef.current);
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

  return (
    <section className="bg-white text-black pb-20">
      {/* Header - constrained width */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 2xl:px-0">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="w-full md:w-1/3">
            <AnimatedH2 isVisible={isVisible}>(Selected Projects)</AnimatedH2>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              ...and we work with you to make it yours.
            </h3>
          </div>
        </div>
      </div>

      {/* Projects - full width */}
      <Projects />

      {/* Button - centered */}
      <div className="flex justify-center mt-10">
        <Button text="See More Projects" href="/projects" />
      </div>
    </section>
  );
}