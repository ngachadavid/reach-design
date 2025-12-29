'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxHero() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const heroData = [
    { image: '/images/urban.jpg', title: 'Architecture & Urban Design' },
    { image: '/images/int.webp', title: 'Interior Design' },
    { image: '/images/reach.webp', title: 'Climatic Design Consultancy' }];

  useEffect(() => {
    const sections = [section1Ref.current, section2Ref.current, section3Ref.current];

    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        gsap.to(section, {
          // opacity: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        });
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: '+=100vh',
          pin: true,
          pinSpacing: false
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {heroData.map((hero, index) => (
        <section
          key={index}
          ref={index === 0 ? section1Ref : index === 1 ? section2Ref : section3Ref}
          className="relative h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${hero.image}')` }} 
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/5 via-black/40 to-transparent pointer-events-none" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 2xl:px-0">
              <div className="grid grid-cols-12 items-center text-white">

                <div className="col-span-12 md:col-span-4">
                  <h1 className="text-lg md:text-xl tracking-widest">
                    Reach Design Studios
                  </h1>
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-8 md:text-center mt-6 md:mt-0">
                  <h2 className="text-4xl md:text-7xl leading-tight font-bold">
                    {hero.title}
                  </h2>
                </div>

              </div>
            </div>
          </div>


        </section>
      ))}
    </div>
  );
}
