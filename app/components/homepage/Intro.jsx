'use client';
import { useState, useEffect, useRef } from "react";
import DividerArrow2 from "../global/DividerArrow2";
import Button from "../global/Button";

export default function About() {
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
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    return (
        <section ref={sectionRef} className="bg-white text-black px-4 2xl:px-0 pt-0 pb-20">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-4xl font-bold">Using a process built around you</h3>

                <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight w-full md:w-[80%]">
                    We begin by listening—understanding your needs, context, and ambitions—then combine research, sustainable
                    thinking, and emerging technologies to shape thoughtful, responsive
                    architecture. Every decision is guided by clarity, collaboration, and
                    a commitment to designing spaces that endure.
                </p>
                <div className="w-full md:w-[80%] flex justify-center mt-6">
                    <Button text="Contact Us" href="/contact" />
                </div>
            </div>

            <DividerArrow2 />
        </section>
    );
}
