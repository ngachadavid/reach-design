import Address from '@/app/components/contact/Address'
import ContactHero from '@/app/components/contact/ContactHero'
import Contact from '@/app/components/global/Contact'
import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <ContactHero />
        <Address />
        <Contact />
        <Footer />
    </div>
  )
}
