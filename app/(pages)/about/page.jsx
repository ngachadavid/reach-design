import AboutHero from '@/app/components/about/AboutHero'
import Application from '@/app/components/about/ApplicationForm'
import Careers from '@/app/components/about/Careers'
import Positions from '@/app/components/about/Positions'
import FoundersSection from '@/app/components/about/Team'
import CTA from '@/app/components/global/CTA'
import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export const metadata = {
  title: "About Reach Design Studio | Architects in Nairobi, Kenya",
  description:
    "Reach Design Studio is a Nairobi, Kenya–based architectural firm delivering humane modern architecture. Learn about our team, process, and design philosophy.",
  alternates: {
    canonical: "https://www.reachdesignstudio.com/about"
  },
  openGraph: {
    title: "About Reach Design Studio | Architects in Nairobi, Kenya",
    description:
      "Discover Reach Design Studio, a Nairobi-based architectural firm. Learn about our team, design process, and commitment to context-driven, sustainable architecture.",
    url: "https://www.reachdesignstudio.com/about",
    siteName: "Reach Design Studio",
    images: [
      {
        url: "/images/reach1.webp",
        width: 1200,
        height: 630,
        alt: "Reach Design Studio – About page in Nairobi, Kenya"
      }
    ],
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Reach Design Studio | Architects in Nairobi, Kenya",
    description:
      "Discover Reach Design Studio, a Nairobi-based architectural firm. Learn about our team, design process, and commitment to context-driven, sustainable architecture.",
    images: ["/images/reach1.webp"]
  }
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <FoundersSection />
      <Careers />
      <Positions />
      <Application />
      <CTA />
      <Footer />
    </div>
  )
}
