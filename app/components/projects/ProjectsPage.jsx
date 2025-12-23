'use client';
import Link from 'next/link';
import { projects, slugify } from '@/app/lib/projects';

export default function ProjectsPage() {
  return (
    <section className="bg-white text-black px-4 2xl:px-0 pt-32 pb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-[70%] mt-10 mb-24">
          Selected projects that met our clients' lot conditions, lifestyle, and budget.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, idx) => {
            const slug = slugify(project.title);
            return (
              <Link
                key={`${slug}-${idx}`}
                href={`/projects/${slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden transition-all duration-300 ease-out group-hover:rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-all duration-300 ease-out group-hover:brightness-75"
                  />
                </div>
                <h2 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight">
                  {project.title}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}