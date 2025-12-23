import Footer from '@/app/components/global/Footer'
import Navbar from '@/app/components/global/Navbar'
import ProjectsPage from '@/app/components/projects/ProjectsPage'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar />
        <ProjectsPage />
        <Footer />
    </div>
  )
}
