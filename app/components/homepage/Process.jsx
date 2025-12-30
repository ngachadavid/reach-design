'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import DividerArrow from "../global/DividerArrow";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const process = [
    {
      title: "Research & Vision",
      description:
        "We start by understanding your needs, analyzing the site, and using AI-driven climate insights to ensure the design aligns with sustainability, cultural context, and functionality.",
    },
    {
      title: "Concept & Design",
      description:
        "We explore ideas through sketches, 3D models, and AI-powered simulations, balancing innovation with environmental responsibility to craft meaningful, future-proof spaces.",
    },
    {
      title: "Refinement & Documentation",
      description:
        "Using BIM, high-fidelity renderings, and technical drawings, we finalize every detail—ensuring that the design is buildable, efficient, and ready for execution.",
    },
    {
      title: "Build & Implement",
      description:
        "We collaborate with contractors and use drone mapping, AI site analysis, and sustainability-focused construction to bring the design to life with precision and efficiency.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 pt-10 md:pt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="w-full md:w-1/3">
            <AnimatedH2 isVisible={isVisible}>(Our Process)</AnimatedH2>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Guided by principles that remain constant from concept to completion...
            </h3>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {process.map((item, i) => (
            <div
              key={i}
              style={{
                transitionDelay: `${i * 120}ms`,
              }}
              className={`
      bg-neutral-300 rounded-2xl p-8 flex flex-col gap-6
      transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
            >
              <span className="text-4xl font-light opacity-80 font-[--font-mono]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4 className="text-2xl font-extrabold tracking-tight">
                {item.title}
              </h4>

              <p className="text-base leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
      <DividerArrow isVisible={isVisible} />
    </section>
  );
}
