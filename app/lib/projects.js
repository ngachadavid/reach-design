// Helper function to create slugs
export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-')    
    .replace(/--+/g, '-')     
    .trim();
};

export const projects = [
  {
    title: "Mespomolitan Building",
    image: "/projects/mes.avif",
    images: [
      "/projects/mes2.avif",
      "/projects/mes.avif",
      "/projects/mes2.avif",
    ],
    description: "A modern commercial building in the heart of the city",
    location: "Nairobi, Kenya"
  },
  {
    title: "Chuna Estate Residence",
    image: "/images/chuna/background.webp",
    description: "Luxury residential estate with modern amenities",
    year: "2023",
    location: "Chuna, Nairobi"
  },
  {
    title: "A Frame House",
    image: "/images/a_frame/background.webp",
    description: "Contemporary A-frame design with panoramic views",
    year: "2023",
    location: "Nairobi County"
  },
  {
    title: "Muthaiga Residence",
    image: "/images/muthaiga/background.webp",
    description: "Elegant family home in prestigious Muthaiga",
    year: "2022",
    location: "Muthaiga, Nairobi"
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projects.find((project) => slugify(project.title) === slug);
};

// Helper function to get all slugs (useful for static generation)
export const getAllProjectSlugs = () => {
  return projects.map((project) => slugify(project.title));
};