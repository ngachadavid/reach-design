import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import Services from '@/app/components/services/Services'
import ServicesHero from '@/app/components/services/ServicesHero'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <ServicesHero />
    <Services />
    <Footer />
    </>
  )
}
