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
    title: "Muthaiga Residence",
    image: "/projects/muth.avif",
    images: [
      "/projects/muth1.avif",
      "/projects/muth2.avif",
      "/projects/muth3.avif",
      "/projects/muth4.avif",
      "/projects/muth5.avif",
    ],
    description: "Elegant family home in prestigious Muthaiga",
    projectFacts: {
      Location: "Muthaiga North, Nairobi",
      "Site Area": "1800sqm m2",
      "No of Stories": "4",
      Service: "Architectural Design",
    },
  },
   {
    title: "Pan African Residence",
    image: "/projects/pan.avif",
    images: [
      "/projects/pan1.avif",
      "/projects/pan2.avif",
      "/projects/pan3.avif",
      "/projects/pan4.avif",
      "/projects/pan5.avif",
    ],
    description: "Elegant family home in prestigious Muthaiga",
    projectFacts: {
      Location: "Runda, Nairobi.",
      "Site Area": "1,000sqm m2",
      "No of Stories": "3",
      Service: "Architectural & Interior Design",
    },
  },
   {
    title: "Garden Estate",
    image: "/projects/gard4.avif",
    images: [
      "/projects/gard3.avif",
      "/projects/gard.avif",
      "/projects/gard1.avif",
    ],
    description: "Elegant family home in prestigious Muthaiga",
    projectFacts: {
      Location: "Ridgeways, Nairobi",
      "Site Area": "345 m2",
      "No of Stories": "5",
      Service: "Architecture",
    },
  },
   {
    title: "Chuna Estate Residence",
    image: "/projects/chuna.avif",
     images: [
      "/projects/chuna1.avif",
      "/projects/chuna2.avif",
      "/projects/chuna3.avif",
      "/projects/chuna4.avif",
      "/projects/chuna5.avif",
    ],
    description: "Luxury residential estate with modern amenities",
     projectFacts: {
      Location: "Kitengela, Machakos",
      "Site Area": "1290 m2",
      "No of Stories": "2",
      Service: "Architecture",
    },
  },
  {
    title: "Mespomolitan Building",
    image: "/projects/mes.avif",
    images: [
      "/projects/mes2.avif",
      "/projects/mes.avif",
      "/projects/mes2.avif",
    ],
    description: "We used the latest architectural and interior design techniques to create this masterpiece.",
    projectFacts: {
      Location: "Kigali, Rwanda",
      "Site Area": "411 m2",
      "No of Stories": "1",
    },
  },
  {
    title: "A Frame House",
    image: "/images/a_frame/background.webp",
    description: "Contemporary A-frame design with panoramic views",
    projectFacts: {
      Location: "Nairobi County",
      Year: "2023",
    },
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
