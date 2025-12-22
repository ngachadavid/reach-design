'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        "We begin by understanding context, constraints, and ambition—using research and insight to frame a clear direction.",
    },
    {
      title: "Concept & Design",
      description:
        "Ideas are explored through sketching, modeling, and simulation, balancing creativity with responsibility.",
    },
    {
      title: "Refinement & Documentation",
      description:
        "Designs are developed with precision using BIM, drawings, and visualizations to ensure clarity and buildability.",
    },
    {
      title: "Build & Implement",
      description:
        "We collaborate closely through execution, aligning design intent with construction for well-resolved spaces.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left */}
        <div className="w-full md:w-1/3">
          <AnimatedH2 isVisible={isVisible}>(Our Process)</AnimatedH2>
        </div>

        {/* Right */}
        <div className="w-full md:w-2/3">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">
            Guided by principles that remain constant from concept to completion.
          </h3>

          <Swiper
            grabCursor
            spaceBetween={32}
            slidesPerView={1.15}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
          >
            {process.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-full bg-neutral-100 rounded-2xl p-8 flex flex-col gap-6">
                  <span className="text-sm font-medium opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h4 className="text-2xl font-extrabold tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-base leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
