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
    name: "Chuna Estate Residence",
    handle: "chuna"
  },
  {
    name: "A Frame Houses",
    handle: "a_frame"
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
    <main className="w-full py-20">
      {
        projects.map( ({handle, name}, i) => {
          return <Gallery handle={handle} name={name} key={i}/>
        })
      }
    </main>
  )
}