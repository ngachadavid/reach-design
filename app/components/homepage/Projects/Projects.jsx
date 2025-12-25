'use client';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import Gallery from '@/app/components/gallery';

const projects = [
  {
    name: "Muthaiga Residence",
    handle: "muthaiga"
  },
  {
    name: "Pan African Residence",
    handle: "pan_african"
  },
  {
    name: "Chuna Estate Residence",
    handle: "chuna"
  }
]

export default function Projects() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="w-full pt-10 md:pt-20">
      {
        projects.map( ({handle, name}, i) => {
          return <Gallery handle={handle} name={name} key={i}/>
        })
      }
    </main>
  )
}