import React from 'react'
import Navbar from './components/global/Navbar'
import Hero from './components/homepage/Hero'
import About from './components/homepage/About'
import Intro from './components/homepage/Intro'
import ProjectsIntro from './components/homepage/Projects/ProjectsIntro'
import Process from './components/homepage/Process'
import FeaturedArticles from './components/homepage/FeaturedArticles'
import Contact from './components/global/Contact'
import Footer from './components/global/Footer'

export const metadata = {
  title: "Reach Design Studio",
  description:
    "Reach Design Studio is a Nairobi, Kenya–based architectural firm exploring ideas through sketches, 3D models and AI simulations to craft sustainable spaces.",
  alternates: {
    canonical: "https://www.reachdesignstudio.com/"
  },
  openGraph: {
    title: "Reach Design Studio",
    description:
      "Context-driven architecture rooted in humane modernism, balancing innovation, environmental responsibility and thoughtful design.",
    url: "https://www.reachdesignstudio.com/",
    siteName: "Reach Design Studio",
    images: [
      {
        url: "/homepage/reach.avif",
        width: 1200,
        height: 630,
        alt: "Reach Design Studio – Architectural practice in Nairobi, Kenya"
      }
    ],
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reach Design Studio",
    description:
      "Context-driven architecture rooted in humane modernism and environmental responsibility.",
    images: ["/homepage/reach.avif"]
  }
}

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Intro />
      <ProjectsIntro />
      <Process />
      <FeaturedArticles />
      <Contact />
      <Footer />
    </div>
  )
}
