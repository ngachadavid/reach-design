import CTA from '@/app/components/global/CTA'
import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import ProjectsPage from '@/app/components/projects/ProjectsPage'
import React from 'react'

export const metadata = {
  title: "Projects | Reach Design Studio",
  description:
    "Explore selected projects by Reach Design Studio, an architectural firm in Nairobi, Kenya, including Muthaiga, Chuna, Garden Estate, and Runda Residences.",
  alternates: {
    canonical: "https://www.reachdesignstudio.com/projects"
  },
  openGraph: {
    title: "Projects | Reach Design Studio",
    description:
      "Selected architectural projects by Reach Design Studio – Nairobi-based architects delivering sustainable, context-driven, and innovative designs.",
    url: "https://www.reachdesignstudio.com/projects",
    siteName: "Reach Design Studio",
    images: [
      {
        url: "/homepage/reach.avif",
        width: 1200,
        height: 630,
        alt: "Reach Design Studio – Selected Projects"
      }
    ],
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Reach Design Studio",
    description:
      "Selected architectural projects by Reach Design Studio – Nairobi-based architects delivering sustainable, context-driven, and innovative designs.",
    images: ["/homepage/reach.avif"] 
  }
}

export default function page() {
  return (
    <div>
        <Navbar />
        <ProjectsPage />
        <CTA />
        <Footer />
    </div>
  )
}
