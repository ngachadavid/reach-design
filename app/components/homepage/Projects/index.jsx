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
    name: "Chuna House",
    handle: "chuna"
  },
  {
    name: "A Frame Cabins",
    handle: "a_frame"
  }
]

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="w-full">
      {
        projects.map( ({handle, name}, i) => {
          return <Gallery handle={handle} name={name} key={i}/>
        })
      }
    </main>
  )
}