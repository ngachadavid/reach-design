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
  const scrollTriggerRef = useRef(null);

  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (!project) return;

    // Only run on desktop (md and above)
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal) return;

    const scrollWidth = horizontal.scrollWidth;
    const windowWidth = window.innerWidth;

    const tl = gsap.to(horizontal, {
      x: -(scrollWidth - windowWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
      },
    });

    scrollTriggerRef.current = tl.scrollTrigger;

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [project]);

  const handleBack = () => {
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }
    router.back();
  };

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Top bar - Fixed */}
      <div className="fixed top-8 md:top-4 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center z-50">
        <Link href="/">
          <HousePlus className="h-6 md:h-8 w-6 md:w-8 text-white cursor-pointer drop-shadow-lg" />
        </Link>
        <button onClick={handleBack} className="text-white cursor-pointer">
          <X className="h-6 md:h-8 w-6 md:w-8 drop-shadow-lg" />
        </button>
      </div>

      {/* Mobile: Vertical scroll, Desktop: Horizontal scroll */}
      <div className="bg-black text-white">
        
        {/* Mobile version - normal vertical layout */}
        <div className="2xl:hidden min-h-screen">
          {/* Main hero image */}
          <div className="flex items-center justify-center px- py-20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Project details */}
          <div className="px-6 py-16">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
              {project.title}
            </h1>
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p><span className="text-white font-semibold">Location:</span> {project.location}</p>
              <p><span className="text-white font-semibold">Year:</span> {project.year}</p>
              <p><span className="text-white font-semibold">Category:</span> {project.category}</p>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-gray-200">{project.description}</p>
          </div>

          {/* Image gallery */}
          {project.images && project.images.map((img, idx) => (
            <div key={idx} className="px-2 py-8">
              <img
                src={img}
                alt={`${project.title} - Image ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}

          <div className="h-32" />
        </div>

        {/* Desktop version - horizontal scroll */}
        <div ref={containerRef} className="hidden 2xl:block relative h-screen overflow-hidden">
          <div ref={horizontalRef} className="flex h-full">
            
            {/* Section 1: Main hero image */}
            <div className="shrink-0 h-screen flex items-center justify-center w-screen">
              <img
                src={project.image}
                alt={project.title}
                className="h-[85vh] w-auto object-cover"
              />
            </div>

            {/* Section 2: Project details */}
            <div className="shrink-0 h-screen flex items-center justify-center px-16 bg-black" style={{ width: '50vw' }}>
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                  {project.title}
                </h1>
                <div className="space-y-3 text-base text-gray-300 mb-6">
                  <p><span className="text-white font-semibold">Location:</span> {project.location}</p>
                  <p><span className="text-white font-semibold">Year:</span> {project.year}</p>
                  <p><span className="text-white font-semibold">Category:</span> {project.category}</p>
                </div>
                <p className="text-lg leading-relaxed text-gray-200">{project.description}</p>
              </div>
            </div>

            {/* Section 3+: Image gallery */}
            {project.images && project.images.map((img, idx) => (
              <div
                key={idx}
                className="shrink-0 h-screen flex items-center justify-center w-screen"
              >
                <img
                  src={img}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="h-[85vh] w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}