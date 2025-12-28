'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import Link from "next/link";
import { articles } from "@/app/lib/articles"; // ✅ central source of truth

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

    // Helper function to extract plain text from HTML content
    const getPreview = (content) => {
        if (!content) return "";
        // Strip HTML tags and get first 150 characters
        const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        return text.length > 150 ? text.substring(0, 150) + '...' : text;
    };

    return (
        <section
            ref={sectionRef}
            className="bg-white text-black px-4 2xl:px-0 pb-10 md:py-20 min-h-[60vh]"
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
                <div className="grid md:grid-cols-3 gap-4 2xl:gap-8">
                    {articles.map((article, idx) => (
                        <Link
                            key={idx}
                            href={`/articles/${article.slug}`}
                            style={{
                                transitionDelay: `${idx * 140}ms`,
                            }}
                            className={`
      group bg-white cursor-pointer block
      transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-96 object-cover transition-all duration-500 md:group-hover:h-80"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h4 className="text-lg font-bold mb-1">{article.title}</h4>
                                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                                <p className="hidden md:block text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {getPreview(article.content)}
                                </p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}