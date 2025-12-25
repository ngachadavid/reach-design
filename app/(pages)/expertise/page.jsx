import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import Services from '@/app/components/expertise/Services'
import ServicesHero from '@/app/components/expertise/ServicesHero'
import Stats from '@/app/components/expertise/Stats'
import React from 'react'

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
