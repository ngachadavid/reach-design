import AboutHero from '@/app/components/about/AboutHero'
import Application from '@/app/components/about/ApplicationForm'
import Careers from '@/app/components/about/Careers'
import Positions from '@/app/components/about/Positions'
import FoundersSection from '@/app/components/about/Team'
import CTA from '@/app/components/global/CTA'
import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export default function page() {
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
