'use client';

import DividerArrow from "../global/DividerArrow";
import StackedImages from "../global/StackedImages";

export default function ServicesHero() {
  return (
    <section className="bg-white text-black px-4 2xl:px-0 pt-32 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-full md:w-[70%] text-center mx-auto">
            Discover the services that turn your architectural dreams into tangible spaces.
          </h1>
        </div>

        {/* Description */}
        <div className="mt-16 flex flex-col md:flex-row items-stretch gap-6 2xl:gap-12">
          {/* Left side: StackedImages */}
          <div className="w-full md:w-[50%] 2xl:w-[40%]">
            <StackedImages />
          </div>

          {/* Right side: Description */}
          <div className="w-full md:w-[50%] 2xl:w-[60%] flex items-center">
            <p className="text-lg md:text-xl leading-relaxed tracking-tight">
              Our services are built around the belief that great design begins with understanding. By combining architectural insight with creative problem-solving, we deliver design solutions that respond to both vision and practicality. <br /> Each design is unique, crafted to add commercial, social and aesthetic value while expressing our responsibility to safeguard the planet, nurture our team and enhance the lives of people who use the spaces we create.
            </p>
          </div>
        </div>


      </div>
      <DividerArrow />
    </section>
  );
}
