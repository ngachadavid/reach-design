'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import StackedImages from "../global/StackedImages";

export default function AboutHero() {
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

  const contents = [
    {
      title: "A New Vision for African Architecture",
      description: "For too long, architecture in Africa has been shaped by imported ideas that often ignore the realities of our climate, our people, and our ways of life. We are here to redefine what African architecture can be—an architecture that is:",
      points: [
        { label: "Culturally Rooted", text: "Drawing from Africa's diverse traditions, materials, and indigenous design principles." },
        { label: "Climate-Responsive", text: "Harnessing passive design, local materials, and AI-driven environmental insights to create sustainable buildings that work with, not against, their surroundings." },
        { label: "Technology-Driven", text: "Leveraging AI, drones, and advanced visualization tools to push African architecture into the future while staying true to its essence." }
      ]
    },
    {
      title: "A Bridge Between Past and Future",
      description: "entally respo",
      points: [
        { label: "Timeless", text: "Built with respect for traditional craftsmanship and local knowledge that has shaped our environments for centuries." },
        { label: "Forward-Thinking", text: "Integrating modern construction methods, smart building systems, and sustainable practices." },
        { label: "Community-Centered", text: "Designed to strengthen social bonds and reflect the values of the people who will inhabit them." }
      ]
    },
    {
      title: "Innovation with Purpose",
      description: "Technology should serve people and place. Every tool we use—from AI climate analysis to drone surveying—is deployed with intention to create architecture that:",
      points: [
        { label: "Responds to Context", text: "Understanding site conditions, local climate patterns, and cultural context before the first line is drawn." },
        { label: "Maximizes Efficiency", text: "Reducing waste, optimizing energy use, and choosing materials that make sense for African conditions." },
        { label: "Inspires Change", text: "Demonstrating that world-class, sustainable architecture can be achieved without compromising identity or affordability." }
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 pt-32 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mt-10 mb-16">
          {/* Sticky Title */}
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <AnimatedH2 isVisible={isVisible}>(Who We Are)</AnimatedH2>
            <div>
              <StackedImages />
            </div>
          </div>

          {/* Content - Scrollable */}
          <div className="w-full md:w-2/3 space-y-20">
            {contents.map((content, idx) => (
              <div key={idx}>
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  {content.title}
                </h3>
                <p className="mt-6 text-2xl md:text-xl leading-relaxed tracking-tight">
                  {content.description}
                </p>
                <ul className="mt-4 list-disc list-inside space-y-3 text-base md:text-lg">
                  {content.points.map((point, pointIdx) => (
                    <li key={pointIdx}>
                      <span className="font-bold">{point.label}</span> – {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}