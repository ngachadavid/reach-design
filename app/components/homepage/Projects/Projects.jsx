'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import Gallery from '@/app/components/gallery';
import { slugify } from '@/app/lib/projects';
import Link from 'next/link';

const projects = [
  {
    name: "Muthaiga Residence",
    images: {
      background: "/projects/muth2.avif",
      vignette: "/projects/muth5.avif"
    }
  },
  {
    name: "Pan African Residence",
    images: {
      background: "/projects/pan.avif",
      vignette: "/projects/pan3.avif"
    }
  },
  {
    name: "Chuna Estate Residence",
    images: {
      background: "/projects/chuna.avif",
      vignette: "/projects/chuna3.avif"
    }
  }
];

export default function Projects() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full pt-10 md:pt-20">
      {projects.map((project, i) => (
        <Link
          key={i}
          href={`/projects/${slugify(project.name)}`}
          className="block cursor-pointer"
        >
          <Gallery name={project.name} images={project.images} />
        </Link>
      ))}
    </main>
  );
}
