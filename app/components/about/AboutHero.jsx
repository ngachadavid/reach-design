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

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 pt-32 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mt-10 mb-16">
          {/* Sticky Title */}
          <div className="w-full md:w-[40%] md:sticky md:top-32">
            <AnimatedH2 isVisible={isVisible}>(Who We Are)</AnimatedH2>
            <div className="mt-10">
              <StackedImages />
            </div>
          </div>

          {/* Content - Scrollable */}
          <div className="w-full md:w-[60%] space-y-20">
            
            {/* Section 1: A New Vision for African Architecture */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                A New Vision for African Architecture
              </h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight">
                For too long, architecture in Africa has been shaped by imported ideas that often ignore the realities of our climate, our people, and our ways of life. We are here to redefine what African architecture can be—an architecture that is:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-3 text-base md:text-lg">
                <li>
                  <span className="font-bold">Culturally Rooted</span> – Drawing from Africa's diverse traditions, materials, and indigenous design principles.
                </li>
                <li>
                  <span className="font-bold">Climate-Responsive</span> – Harnessing passive design, local materials, and AI-driven environmental insights to create sustainable buildings that work with, not against, their surroundings.
                </li>
                <li>
                  <span className="font-bold">Technology-Driven</span> – Leveraging AI, drones, and advanced visualization tools to push African architecture into the future while staying true to its essence.
                </li>
              </ul>
            </div>

            {/* Section 2: A Bridge Between Past and Future */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                A Bridge Between Past and Future
              </h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight">
                We see ourselves as the link between Africa’s architectural heritage and its technological future. Our work honors the wisdom of traditional African spaces, integrating them with modern solutions that make buildings smarter, more efficient, and environmentally responsible.
              </p>
            </div>

            {/* Section 3: Innovation with Purpose */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Innovation with Purpose
              </h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight">
                We are not just building structures—we are building a movement. A movement that embraces progress without erasing identity, that champions sustainability without compromising beauty, and that uses technology to amplify, not replace, African ingenuity.
              </p>
              <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight">
                By redefining how architecture is approached on the continent, we are paving the way for a future where African cities and spaces are designed for Africans, by Africans, using the best of both tradition and innovation.
              </p>
             
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}