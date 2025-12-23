import Address from '@/app/components/contact/Address'
import ContactHero from '@/app/components/contact/ContactHero'
import BlackNavbar from '@/app/components/global/BlackNavBar'
import Contact from '@/app/components/global/Contact'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
        <BlackNavbar />
        <ContactHero />
        <Address />
        <Contact />
    </div>
  )
}
