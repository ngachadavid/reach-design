"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";

export default function Stats() {
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
            className="bg-black text-white px-4 2xl:px-0 py-24"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <AnimatedH2 isVisible={isVisible}>(By the Numbers)</AnimatedH2>
                </div>

                {/* Stats Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                    {/* Vertical Divider */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/30" />

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col justify-between gap-20 pr-0 md:pr-16">
                        {/* Upper Left */}
                        <div className="mt-0 md:mt-32 border-b border-white/30 pt-8">
                            <p className="text-4xl md:text-6xl font-semibold mb-4">
                                100<span className="text-white/60">+</span>
                            </p>
                            <p className="text-white/70 max-w-sm mb-8">
                                Site and Climate Analyses Conducted
                            </p>
                        </div>

                        {/* Lower Left */}
                        <div>
                            <p className="text-4xl md:text-6xl font-semibold mb-4">
                                5.0<span className="text-white/60">%</span>
                            </p>
                            <p className="text-white/70 max-w-sm">
                                Average build costs are within 5% of our pre-design estimates
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col justify-between gap-20 pl-0 md:pl-16">
                        {/* Upper Right */}
                        <div className="max-sm:border-t border-b border-white/30 pb-10 md:pb-20">
                            <div className="flex items-end mb-4">
                                <p className="text-4xl md:text-6xl font-semibold mb-4">
                                    10<span className="text-white/60">+</span>
                                </p>
                                <svg
                                    viewBox="0 0 61 95"
                                    fill="currentColor"
                                    className="w-20 h-20 mb-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22.542 2C22.5714 10.0367 19.8178 24.5742 41 28.0879C27.8508 29.9718 22.8259 40.0599 22.5445 53C22.222 43.2324 23.5717 31.9537 2 28.8623C22.704 27.2375 22.4168 10.2591 22.542 2Z" ></path>
                                    <path d="M43.1243 42C43.1539 50.0367 37.5756 64.9588 59 68.4725C45.7004 70.3564 43.4114 80.0599 43.1268 93C42.8006 83.232 42.1336 71.8678 27 68.608C41.669 66.89 41.4216 52.9673 43.1243 42Z"></path>
                                </svg>

                            </div>
                            <p className="text-white/70 max-w-sm">
                                Active Design Studies
                            </p>
                        </div>

                        {/* Lower Right */}
                        <div className="border-b border-white/30 max-sm:-mt-20 pb-10 mb-0 md:mb-32">
                            <div className="flex items-end mb-4">
                                {/* Number */}
                                <p className="text-4xl md:text-6xl font-semibold leading-none">
                                    <span className="text-white/60">&gt;</span>500
                                </p>

                                {/* SVG */}
                                <svg
                                    viewBox="0 0 86 86"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-20 h-20 mb-10"
                                    fill="currentColor"
                                >
                                    <path d="M47.6478 72.6377C48.098 74.3978 52.1095 73.2517 64.7581 67.8075C78.1434 62.0358 80.8861 60.2755 79.6581 58.4745C77.9388 56.0184 46.9928 69.7723 47.6478 72.6377Z" />
                                    <path d="M17.4744 15.7819C12.3168 17.5011 11.9483 18.6063 12.3576 31.0502C12.767 43.9034 13.2993 46.2367 15.7143 46.3595C20.0942 46.5641 21.0767 43.1257 21.3632 27.2024C21.5679 15.4545 21.2813 14.513 17.4744 15.7819Z" />
                                    <path d="M51.8995 24.0097C48.1746 25.1967 47.0694 26.3839 44.163 32.2375C35.6079 49.6343 28.1168 61.3823 35.3212 58.9263C38.2684 57.9438 40.1924 54.8738 50.8761 34.8572C56.7297 23.7641 56.8934 22.4542 51.8995 24.0097Z" />
                                </svg>
                            </div>

                            <p className="text-white/70 max-w-sm">
                                Land parcels evaluated
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
