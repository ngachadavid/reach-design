'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import { Divide } from "lucide-react";
import DividerArrow3 from "../global/DividerArrow3";

const reasons = [
  {
    image: "/icons/career.svg",
    alt: "Icon representing collaborative culture",
    text: "A collaborative culture where ideas are shared openly and creativity thrives across disciplines.",
  },
  {
    image: "/icons/career1.svg",
    alt: "Icon representing growth and project opportunities",
    text: "Opportunities to grow through meaningful projects that challenge how architecture is researched, designed, and built.",
  },
  {
    image: "/icons/career3.svg",
    alt: "Icon representing forward-thinking and sustainable environment",
    text: "A forward-thinking environment that embraces technology, sustainability, and experimentation.",
  },
];


export default function Careers() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white text-black px-4 2xl:px-0 md:pt-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left */}
                    <div className="w-full md:w-1/3">
                        <AnimatedH2 isVisible={isVisible}>
                            (Why Work with Us)
                        </AnimatedH2>
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-2/3 flex flex-col gap-10">
                        {reasons.map((reason, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-6 border-t border-black/20 pt-10"
                            >
                                {/* Icon */}
                                <div className="shrink-0 flex items-center justify-center">
                                    <img
                                        src={reason.image}
                                         alt={reason.alt}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>

                                {/* Text */}
                                <p className="text-lg md:text-2xl leading-relaxed tracking-tight">
                                    {reason.text}
                                </p>
                            </div>
                        ))}
                        <div>
                            <p className="text-base md:text-xl leading-relaxed tracking-tight border-t border-black/20 pt-10">
                                We’re always looking for passionate, innovative, and forward-thinking minds to join our team. At Reach Design Studio, we blend architecture, sustainability, and technology to create spaces that are climate-responsive, culturally grounded, and future-ready.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <DividerArrow3 />
        </section>
    );
}
