'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxHero() {
  const [heroData, setHeroData] = useState(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Fetch hero slides from Sanity
  useEffect(() => {
    async function fetchHero() {
      try {
        const data = await client.fetch(`*[_type == "hero"][0]{
          firstSlide, secondSlide, thirdSlide
        }`);
        setHeroData([data.firstSlide, data.secondSlide, data.thirdSlide]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchHero();
  }, []);

  // GSAP ScrollTrigger
  useEffect(() => {
    if (!heroData) return;

    const sections = [section1Ref.current, section2Ref.current, section3Ref.current];

    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: '+=100vh',
          pin: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [heroData]);

  // Loading skeleton - replaces the "return null"
  if (!heroData) {
    return (
      <div className="relative">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-screen w-full bg-white/70 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {heroData.map((hero, index) => (
        <section
          key={index}
          ref={index === 0 ? section1Ref : index === 1 ? section2Ref : section3Ref}
          className="relative h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${urlFor(hero.image).url()}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/5 via-black/40 to-transparent pointer-events-none" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-4 2xl:px-0">
              <div className="grid grid-cols-12 items-center text-white">

                <div className="col-span-12 md:col-span-4">
                  {index === 0 ? (
                    <h1 className="text-lg md:text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      Reach Design Studios
                    </h1>
                  ) : (
                    <p className="text-lg md:text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      Reach Design Studios
                    </p>
                  )}
                </div>

                <div className="col-span-12 md:col-span-8 md:text-center mt-6 md:mt-0">
                  <h2 className="text-4xl md:text-7xl leading-tight font-bold">
                    {hero.title.split(' ').map((word, wordIndex) => (
                      <motion.span
                        key={`${index}-${wordIndex}`}
                        className="inline-block mr-3 md:mr-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.7 }}
                        transition={{
                          duration: 0.6,
                          delay: wordIndex * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
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