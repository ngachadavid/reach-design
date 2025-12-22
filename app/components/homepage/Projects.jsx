'use client';
// import styles from './page.module.css'
// import Gallery from '../components/gallery';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Gallery from './Gallery';

const projects = [
  {
    name: "Dyal Thak",
    handle: "dyal_thak"
  },
  {
    name: "Leidinger Matthias",
    handle: "leidinger_matthias"
  },
  {
    name: "Mark Rammers",
    handle: "mark_rammers"
  },
  {
    name: "Landon Speers",
    handle: "landon_speers"
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
     <main className={styles.main}>
      {
        projects.map( ({handle}, i) => {
          return <Gallery handle={handle} key={i}/>
        })
      }
      {/* <Description projects={projects}/> */}
    </main>
  )
}