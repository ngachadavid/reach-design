import Address from '@/app/components/contact/Address'
import ContactHero from '@/app/components/contact/ContactHero'
import Contact from '@/app/components/global/Contact'
import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import React from 'react'

export const metadata = {
  title: "Contact Reach Design Studio | Architects in Nairobi, Kenya",
  description:
    "Reach Design Studio is a Nairobi, Kenya–based architectural firm. Contact us for inquiries, consultations, or project collaborations.",
  alternates: {
    canonical: "https://www.reachdesignstudio.com/contact"
  },
  openGraph: {
    title: "Contact Reach Design Studio | Architects in Nairobi, Kenya",
    description:
      "Reach Design Studio – Nairobi-based architectural firm. Contact us for inquiries, consultations, or project collaborations.",
    url: "https://www.reachdesignstudio.com/contact",
    siteName: "Reach Design Studio",
    images: [
      {
        url: "/homepage/reach.avif",
        width: 1200,
        height: 630,
        alt: "Reach Design Studio – Contact page in Nairobi, Kenya"
      }
    ],
    locale: "en_KE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Reach Design Studio | Architects in Nairobi, Kenya",
    description:
      "Reach Design Studio – Nairobi-based architectural firm. Contact us for inquiries, consultations, or project collaborations.",
    images: ["/homepage/reach.avif"]
  }
}

export default function Page() {
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
