import AboutHero from '@/app/components/about/AboutHero'
import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <AboutHero />
        <Footer />
    </div>
  )
}
