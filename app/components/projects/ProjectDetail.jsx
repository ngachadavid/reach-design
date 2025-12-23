'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/app/lib/projects';
import { HousePlus, X } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const params = useParams();
  const { slug } = params;
  const router = useRouter();
  const horizontalRef = useRef(null);
  const containerRef = useRef(null);

  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) return;

    const container = containerRef.current;
    const sections = gsap.utils.toArray('.scroll-section');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${sections.length * 100}%`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [project]);

  // Clean up before navigation
  const handleBack = () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    router.back();
  };

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Top bar - Fixed */}
      <div className="fixed top-4 left-8 right-8 flex justify-between items-center z-50">
        <Link href="/">
          <HousePlus className="h-8 w-8 text-white cursor-pointer drop-shadow-lg" />
        </Link>
        <button onClick={handleBack} className="text-white cursor-pointer">
          <X className="h-8 w-8 drop-shadow-lg" />
        </button>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative h-screen overflow-hidden bg-black">
        <div ref={horizontalRef} className="flex h-full w-fit">
          
          {/* Section 1: Main hero image */}
          <div className="scroll-section shrink-0 w-[90vw] h-screen relative pt-20">
            <img
              src={project.image}
              alt={project.title}
              className="w-auto h-full object-cover mx-auto"
            />
          </div>

          {/* Section 2: Project details */}
          <div className="scroll-section shrink-0 w-[90vw] h-screen flex items-center justify-center px-16 md:px-32">
            <div className="max-xl text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                {project.title}
              </h1>
              <div className="space-y-3 text-lg md:text-xl text-gray-300 mb-8">
                <p><span className="text-white font-semibold">Location:</span> {project.location}</p>
                <p><span className="text-white font-semibold">Year:</span> {project.year}</p>
                <p><span className="text-white font-semibold">Category:</span> {project.category}</p>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-200">{project.description}</p>
            </div>
          </div>

          {/* Section 3+: Image gallery */}
          {project.images && project.images.map((img, idx) => (
            <div
              key={idx}
              className="scroll-section shrink-0 w-[90vw] h-screen flex items-center justify-center pt-20"
            >
              <img
                src={img}
                alt={`${project.title} - Image ${idx + 1}`}
                className="w-auto h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}