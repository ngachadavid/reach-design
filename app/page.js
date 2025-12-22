import React from 'react'
import Navbar from './components/global/Navbar'
import Hero from './components/homepage/Hero'
import About from './components/homepage/About'
import Projects from './components/homepage/Projects'
import Intro from './components/homepage/Intro'
import ProjectsIntro from './components/homepage/ProjectsIntro'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Intro />
      <ProjectsIntro />
      <Projects />
    </div>
  )
}
