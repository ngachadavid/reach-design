import React from 'react'
import Navbar from './components/global/Navbar'
import Hero from './components/homepage/Hero'
import About from './components/homepage/About'
import Intro from './components/homepage/Intro'
import ProjectsIntro from './components/homepage/Projects/ProjectsIntro'
import Process from './components/homepage/Process'
import FeaturedArticles from './components/homepage/FeaturedArticles'

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
    </div>
  )
}
