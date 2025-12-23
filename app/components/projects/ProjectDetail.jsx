'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/app/lib/projects';

export default function ProjectDetail() {
  const params = useParams(); 
  const { slug } = params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="bg-black text-white h-screen px-4 2xl:px-0 py-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {project.title}
        </h1>
        
        <p className="text-lg text-gray-600 mb-2">
          {project.location} • {project.year}
        </p>
        
        <p className="text-xl mb-8">{project.description}</p>
        
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-[80vh] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}