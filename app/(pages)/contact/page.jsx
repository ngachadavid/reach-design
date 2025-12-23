import ContactHero from '@/app/components/contact/ContactHero'
import Contact from '@/app/components/global/Contact'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <ContactHero />
        <Contact />
    </div>
  )
}
