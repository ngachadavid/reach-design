'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";

const teamMembers = [
  {
    name: "Victor Kiarie",
    title: "Chief Executive Officer",
    image: "/images/vic.avif",
  },
  {
    name: "Ithiel Tembo",
    title: "Graduate Architect",
    image: "/images/ithiel.avif",
  },
];

export default function Team() {
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
      className="bg-white text-black px-4 2xl:px-0 pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-1/3">
            <AnimatedH2 isVisible={isVisible}>(Meet the Team)</AnimatedH2>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              ...each member of our team delivers the same care and integrity
              that has come to define Reach Design Studio.
            </h3>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {/* Image */}
              <div className="w-full h-115 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="text-xl font-bold tracking-tight">
                  {member.name}
                </p>
                <p className="text-base uppercase font-medium opacity-90">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
