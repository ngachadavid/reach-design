'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import Button from "../global/Button";

const articles = [
    {
        image: "/articles/dira.avif",
        title: "The Role of AI in Architecture: A Look at Dirah AI | Climatic Design App",
        description: "AI is transforming architecture by enabling climate-driven design decisions, improving efficiency, and supporting sustainable and adaptive built environments.",
        date: "Aug 08, 2025"
    },
    {
        image: "/articles/bio.avif",
        title: "The Role of Technology in Architecture: AI, Drones & Beyond",
        description: "Emerging technologies like AI and drones are redefining architecture workflows, enhancing precision, visualization, and collaboration in modern design projects.",
        date: "Jan 01, 2025"
    },
    {
        image: "/articles/kerara.avif",
        title: "Climate-Responsive Architecture: The Future of Sustainable Design",
        description: "Climate-responsive design prioritizes environmental context, energy efficiency, and adaptive solutions to create architecture that responds to local ecosystems.",
        date: "Nov 11, 2024"
    },
];

export default function FeaturedArticles() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            {
                threshold: window.innerWidth < 768 ? 0.1 : 0.3,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white text-black px-4 2xl:px-0 py-20 min-h-[60vh]"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="w-full md:w-1/3">
                        <AnimatedH2 isVisible={isVisible}>
                            (Featured Articles)
                        </AnimatedH2>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            ...curated thoughts on Architecture, Innovation, and Culture.
                        </h3>
                    </div>
                </div>

                {/* Articles grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <div
                            key={idx}
                            className="group bg-white cursor-pointer overflow-hidden rounded-xl shadow-lg"
                        >
                            {/* Image */}
                            <div className="overflow-hidden h-96">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h4 className="text-lg font-bold mb-1">{article.title}</h4>
                                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                                <p className="text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Button text="Read More Articles" href="/contact" />
            </div>
        </section>
    );
}
