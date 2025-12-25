'use client';

import DividerArrow from "../global/DividerArrow";

export default function ServicesHero() {
  return (
    <section className="bg-white text-black px-4 2xl:px-0 pt-32 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-full md:w-[70%] text-center mx-auto mt-10">
          Discover the services that turn your architectural dreams into tangible spaces.
        </h1>

        {/* Image */}
        {/* <div className="mt-16">
          <img
            src="/images/reach.webp"
            alt="Reach Design Studio contact"
            className="w-full h-[60vh] object-cover object-center"
          />
        </div> */}

        {/* Description */}
        <div className="mt-16 flex justify-end">
          <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-xl">
            Our services are built around the belief that great design begins with understanding. By combining architectural insight with creative problem-solving, we deliver design solutions that respond to both vision and practicality. <br/> Each design is unique, crafted to add commercial, social and aesthetic value while expressing our responsibility to safeguard the planet, nurture our team and enhance the lives of people who use the spaces we create.
          </p>
        </div>
      </div>
      <DividerArrow />
    </section>
  );
}
