'use client';
import { motion } from 'framer-motion';

export default function Gallery({ name, images }) {
  return (
    <div className="h-100 md:h-screen" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}>
      <div className="w-full h-full relative">
        <img
          key={`${name}-background`}
          src={images.background}
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 px-8 z-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-white text-center">{name}</h2>

        <div className="h-[40vw] w-[70vw] rounded-[1.5vw] overflow-hidden">
          <img
            key={`${name}-1`}
            src={images.vignette}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop: side by side layout */}
      <div className="hidden md:block">
        {/* Project Name left */}
        <div className="fixed left-[5vw] top-1/2 -translate-y-1/2 text-white z-10">
          <h2 className="text-5xl 2xl:text-7xl font-extrabold tracking-tight">{name}</h2>
        </div>

        {/* Vignette right */}
        <div className="h-[25vw] w-[30vw] fixed top-1/2 right-[5vw] -translate-y-1/2 rounded-[1.5vw] overflow-hidden">
          <img
            key={`${name}-1`}
            src={images.vignette}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
