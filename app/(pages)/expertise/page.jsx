import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import Services from '@/app/components/expertise/Services'
import ServicesHero from '@/app/components/expertise/ServicesHero'
import Stats from '@/app/components/expertise/Stats'
import React from 'react'

export const metadata = {
  title: "Our Expertise | Reach Design Studio",
  description:
    "We deliver climate-responsive, sustainable, and technology-driven design solutions across interior design, residential, commercial, and mixed-use projects.",
  alternates: {
    canonical: "https://www.reachdesignstudio.com/expertise"
  },
  openGraph: {
    title: "Our Expertise | Reach Design Studio",
    description:
      "Explore Reach Design Studio’s range of services: architecture, interior design, climatic consultancy, residential and commercial projects, sustainable design, and ArchViz renderings.",
    url: "https://www.reachdesignstudio.com/expertise",
    siteName: "Reach Design Studio",
    images: [
      {
        url: "/homepage/reach.avif",
        width: 1200,
        height: 630,
        alt: "Reach Design Studio – Expertise in architecture, interior design, and sustainable projects"
      }
    ],
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Expertise | Reach Design Studio",
    description:
      "Discover Reach Design Studio’s architectural services in Nairobi, Kenya. From architecture and interior design to sustainable projects and ArchViz, we deliver future-ready spaces.",
    images: ["/homepage/reach.avif"]
  }
}


export default function page() {
  return (
    <>
    <Navbar />
    <ServicesHero />
    <Services />
    <Stats />
    <Footer />
    </>
  )
}
