'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";

export default function Address() {
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
            className="bg-white text-black px-4 2xl:px-0 pb-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="w-full md:w-1/3">
                        <AnimatedH2 isVisible={isVisible}>(Reach Out to Us)</AnimatedH2>
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col">
                        {/* Address */}
                        <div className="grid grid-cols-3 gap-8 mb-10">
                            {/* Label */}
                            <p className="col-span-1 text-2xl font-semibold uppcase tracking-wider">
                                Address
                            </p>

                            {/* Details */}
                            <div className="col-span-2 text-lg leading-relaxed tracking-tight opacity-90">
                                <p>Apic Center</p>
                                <p>Muthithi Road, Westlands</p>
                                <p>Nairobi, Kenya</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="grid grid-cols-3 gap-8 border-t border-black/20 pt-10">
                            {/* Label */}
                            <p className="col-span-1 text-2xl font-semibold tracking-wider">
                                Social Media
                            </p>

                            {/* Links */}
                            <div className="col-span-2 flex flex-col gap-2 text-lg tracking-tight opacity-90">
                                <a href="https://instagram.com" className="hover:opacity-60 transition-opacity">
                                    Instagram
                                </a>
                                <a href="https://www.linkedin.com/company/reach-design-studio/" className="hover:opacity-60 transition-opacity">
                                    LinkedIn
                                </a>
                                <a href="https://www.youtube.com/@TheMillenialArchitect" className="hover:opacity-60 transition-opacity">
                                    YouTube
                                </a>
                                <a href="https://www.facebook.com/ReachStudio.ke" className="hover:opacity-60 transition-opacity">
                                    Facebook
                                </a>
                                 <a href="https://www.pinterest.com/reachstudiokenya/" className="hover:opacity-60 transition-opacity">
                                    Pinterest
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scrolling Email */}
            <div className="overflow-hidden whitespace-nowrap mt-10">
                <div 
                    className="inline-block"
                    style={{
                        animation: 'scroll 25s linear infinite'
                    }}
                >
                    <span className="text-9xl opacity-20 inline-block px-12">
                        architect@reachdesignstudio.com
                    </span>
                    <span className="text-9xl opacity-20 inline-block px-12">
                        architect@reachdesignstudio.com
                    </span>
                    <span className="text-9xl opacity-20 inline-block px-12">
                        architect@reachdesignstudio.com
                    </span>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }
            `}</style>
        </section>
    );
}