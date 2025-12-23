'use client';

const projects = [
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
    <section className="bg-white text-black px-4 2xl:px-0 pt-32 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-[70%] text-start mt-10 mb-20">
          Selected projects that met our clients’ lot conditions, lifestyle, and budget.
        </h1>
         </div>

        {/* Projects list */}
        <div className="w-full flex flex-col pl-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-0"
            >
              {/* Left: Project name */}
              <div className="w-full md:w-1/4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Right: Image */}
              <div className="w-full md:w-3/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[80vh] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
     
    </section>
  );
}
