import React from 'react'
import Navbar from './components/global/Navbar'
import Hero from './components/homepage/Hero'
import About from './components/homepage/About'
import Projects from './components/homepage/Projects'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}
