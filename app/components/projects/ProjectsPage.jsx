'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);

  // IntersectionObserver for fade/slide-in animation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : 0.25,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  // Fetch projects from Sanity
  useEffect(() => {
    client
      .fetch(`*[_type == "project"] | order(priority desc){
      title,
      "slug": slug.current,
      mainImage,
    }`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);


  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-full md:w-[70%] mb-24">
          Selected projects that met our clients' lot conditions, lifestyle, and budget.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 2xl:gap-x-8 gap-y-14">
          {projects.map((project, idx) => (
            <Link
              key={`${project.slug}-${idx}`}
              href={`/projects/${project.slug}`}
              style={{ transitionDelay: `${idx * 140}ms` }}
              className={`
                group cursor-pointer block
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              <div className="relative overflow-hidden">
                {project.mainImage && (
                  <img
                    src={urlFor(project.mainImage).width(1200).url()}
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-all duration-300 ease-out group-hover:grayscale"
                  />
                )}

                {/* Title inside the image */}
                <div className="absolute bottom-0 left-0 px-4 py-2 bg-white transition-colors duration-300 ease-out group-hover:bg-black">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-black transition-colors duration-300 ease-out group-hover:text-white">
                    {project.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
