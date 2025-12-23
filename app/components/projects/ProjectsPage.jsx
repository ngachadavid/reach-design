'use client';

const projects = [
  {
    title: "Mespomolitan Building",
    image: "/projects/mes.avif",
  },
  {
    title: "Chuna Estate Residence",
    image: "/images/chuna/background.webp",
  },
  {
    title: "A Frame Houses",
    image: "/images/a_frame/background.webp",
  },
  {
    title: "Muthaiga Residence",
    image: "/images/muthaiga/background.webp",
  },
  {
    title: "Chuna Estate Residence",
    image: "/images/chuna/background.webp",
  },
  {
    title: "A Frame Houses",
    image: "/images/a_frame/background.webp",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-white text-black px-4 2xl:px-0 pt-32 pb-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-[70%] mt-10 mb-24">
          Selected projects that met our clients’ lot conditions, lifestyle, and budget.
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group cursor-pointer"
              role="button"
              tabIndex={0}
            >
              {/* Image wrapper */}
              <div className="relative overflow-hidden transition-all duration-300 ease-out group-hover:rounded-sm">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[70vh] object-cover transition-all duration-300 ease-out group-hover:brightness-75"
                />
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
