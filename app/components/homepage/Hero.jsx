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
    { image: '/images/rrrreach.webp', title: 'Reach Design Studios' },
    { image: '/images/reach3.webp', title: 'Innovation & Creativity' },
    { image: '/images/rrreach.jpg', title: 'Exceptional Design' }];

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
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-12 w-full">
            <div className="max-w-7xl mx-auto px-4 2xl:px-0 text-white">
              <h1 className="text-4xl md:text-7xl leading-tight font-bold">
                {hero.title}
              </h1>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
