'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";

const services = [
  {
    title: "Architecture & Urban Design",
    image: "/images/reach3.webp",
    description:
      "We design climate-responsive, culturally rooted, and technology-driven architecture that redefines spaces in Africa. By blending AI-powered insights and innovative design principles, we create efficient buildings that honor tradition while embracing modern advancements."
  },
  {
    title: "Interior Design",
    image: "/images/reach.webp",
    description:
      "Our interior spaces balance aesthetics, functionality, and sustainability to enhance well-being and energy efficiency. We integrate local craftsmanship, smart technologies, and modern design to create spaces that are both visually compelling and highly efficient."
  },
  {
    title: "Climatic Design Consultancy",
    image: "/images/reach.webp",
    description:
      "We help architects, developers, and policymakers create climate-smart, energy-efficient buildings through research-driven strategies. Using DIRAH AI, we optimize building performance, reduce energy consumption, and support resilient built environments."
  },
  {
    title: "Residential Architecture",
    image: "/images/reach.webp",
    description:
      "We design homes that respond to climate, lifestyle, and cultural context. Each residential project balances comfort, efficiency, and timeless design to create living spaces that feel personal, functional, and connected to their surroundings."
  },
  {
    title: "Commercial Architecture",
    image: "/images/reach.webp",
    description:
      "Our commercial architecture is driven by performance, identity, and long-term value. We create efficient, adaptable spaces that support business growth while delivering strong architectural character and sustainability."
  },
  {
    title: "Mixed-Use Developments",
    image: "/images/reach.webp",
    description:
      "We design integrated mixed-use environments that seamlessly combine living, working, and social spaces. Through strategic planning and contextual design, we create vibrant developments that enhance urban connectivity and functionality."
  },
  {
    title: "Sustainable Design",
    image: "/images/reach.webp",
    description:
      "Sustainability is embedded in every project we undertake. We apply passive design strategies, material intelligence, and energy-efficient systems to reduce environmental impact while delivering future-ready architecture."
  },
  {
    title: "Project Management",
    image: "/images/reach.webp",
    description:
      "We manage projects from concept to completion, aligning design intent, quality, timelines, and budgets. Through clear coordination and structured oversight, we ensure efficient execution and seamless delivery."
  },
  {
    title: "Furniture, Fixtures & Equipment",
    image: "/images/reach.webp",
    description:
      "We assist in the selection and specification of furniture, fixtures, and equipment (FF&E) to complement our designs. Our expertise ensures that every element is functional, aesthetically pleasing, and aligned with the overall vision of the project."
  },
  {
    title: "ArchViz Renders & Animations",
    image: "/images/reach.webp",
    description:
      "We create high-quality architectural visualizations that bring designs to life before construction begins. Through detailed renders and immersive animations, we help clients and stakeholders clearly experience the intended space."
  }
];


export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="w-full md:w-1/3">
            <AnimatedH2 isVisible={isVisible}>(What We Do)</AnimatedH2>
          </div>
        </div>

        {/* Services List */}
        <div className="relative space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Mobile Version */}
              <div className="md:hidden border-t border-gray-300">
                <div 
                  className="flex items-center justify-between py-6 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {/* Service Name */}
                  <div className="text-xl font-medium tracking-tight">
                    {service.title}
                  </div>

                  {/* Plus/Minus Icon */}
                  <div className="text-2xl font-light transition-transform duration-300">
                    {expandedIndex === index ? '−' : '+'}
                  </div>
                </div>

                {/* Expanded Description */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedIndex === index 
                      ? 'max-h-96 opacity-100 pb-6' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-sm text-black leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </div>

              {/* Desktop Version */}
              <div 
                className="hidden md:block"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Border Top - Only shows on hover */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-px bg-gray-300 transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative flex items-center py-8 cursor-pointer">
                  {/* Service Name */}
                  <div className="text-4xl font-medium tracking-tight transition-colors duration-300">
                    {service.title}
                  </div>

                  {/* Hover Content - Absolutely positioned to break out of bottom border only */}
                  <div 
                    className={`absolute right-0 top-0 flex items-start gap-8 transition-all duration-500 z-10 ${
                      hoveredIndex === index 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    {/* Image */}
                    <div className="w-72 h-80 overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Description */}
                    <div className="w-80 text-base text-black leading-relaxed">
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}