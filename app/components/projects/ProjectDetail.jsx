'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { HousePlus, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const params = useParams();
  const { slug } = params;
  const router = useRouter();
  const horizontalRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const [project, setProject] = useState(null);

  // Fetch project from Sanity
  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && slug.current == $slug][0]{
          title,
          mainImage,
          "images": images[].asset->url,
          description,
          location,
          noOfStories,
          siteArea
        }`,
        { slug }
      )
      .then((data) => {
        if (!data) notFound();
        setProject(data);
      })
      .catch(console.error);
  }, [slug]);

  // GSAP horizontal scroll
  useEffect(() => {
    if (!project) return;
    if (window.innerWidth < 768) return; // only run on desktop

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
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-8 md:top-4 left-4 md:left-8 right-4 md:right-8 flex justify-between items-center z-50">
        <Link href="/">
          <HousePlus className="h-6 md:h-8 w-6 md:w-8 text-white cursor-pointer drop-shadow-lg" />
        </Link>
        <button onClick={handleBack} className="text-white cursor-pointer">
          <X className="h-6 md:h-8 w-6 md:w-8 drop-shadow-lg" />
        </button>
      </div>

      <div className="bg-black text-white">
        {/* Mobile vertical scroll */}
        <div className="2xl:hidden min-h-screen">
          {project.mainImage && (
            <div className="flex items-center justify-center pt-20 px-4">
              <img
                src={urlFor(project.mainImage).width(1200).url()}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}

          {/* Project details */}
          <div className="px-6 py-16">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">{project.title}</h1>

            <div className="space-y-2 text-sm text-gray-300 mb-6">
              {project.location && <p><span className="text-white font-semibold">Location:</span> {project.location}</p>}
              {project.noOfStories && <p><span className="text-white font-semibold">Stories:</span> {project.noOfStories}</p>}
              {project.siteArea && <p><span className="text-white font-semibold">Site Area:</span> {project.siteArea} m²</p>}
            </div>

            {project.description && (
              <p className="text-sm md:text-base leading-relaxed text-gray-200">{project.description}</p>
            )}
          </div>

          {/* Image gallery */}
          {project.images && project.images.map((img, idx) => (
            <div key={idx} className="px-2 py-8">
              <img
                src={img}
                alt={`${project.title} - Image ${idx + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}

          <div className="h-32" />
        </div>

        {/* Desktop horizontal scroll */}
        <div ref={containerRef} className="hidden 2xl:block relative h-screen overflow-hidden">
          <div ref={horizontalRef} className="flex h-full">
            {/* Main hero image */}
            {project.mainImage && (
              <div className="shrink-0 h-screen flex items-center justify-center w-screen pt-20">
                <img
                  src={urlFor(project.mainImage).width(1200).url()}
                  alt={project.title}
                  className="h-full w-auto object-cover rounded-lg"
                />
              </div>
            )}

            {/* Project details */}
            <div className="shrink-0 h-screen flex items-center justify-center px-16 bg-black" style={{ width: '50vw' }}>
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">{project.title}</h1>

                <div className="space-y-3 text-base text-gray-300 mb-6">
                  {project.location && <p><span className="text-white font-semibold">Location:</span> {project.location}</p>}
                  {project.noOfStories && <p><span className="text-white font-semibold">Stories:</span> {project.noOfStories}</p>}
                  {project.siteArea && <p><span className="text-white font-semibold">Site Area:</span> {project.siteArea} m²</p>}
                </div>

                {project.description && (
                  <p className="text-lg leading-relaxed text-gray-200">{project.description}</p>
                )}
              </div>
            </div>

            {/* Image gallery */}
            {project.images && project.images.map((img, idx) => (
              <div key={idx} className="shrink-0 h-screen flex items-center justify-center w-screen pt-20">
                <img
                  src={img}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="h-full w-auto object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
