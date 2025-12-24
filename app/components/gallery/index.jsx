import { motion } from 'framer-motion';

export default function index({ handle, name }) {

  return (
    <div className="h-100 md:h-screen" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}>
      <div className="w-full h-full relative">
        <img
          key={`${handle}-background`}
          src={`/images/${handle}/background.avif`}
          alt="image"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Mobile: Stacked layout (name top, vignette bottom) */}
      <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 px-8 z-10">
        {/* Project Name on top */}
        <h2 className="text-2xl font-extrabold tracking-tight text-white text-center">
          {name}
        </h2>

        {/* Vignette below */}
        <div className="h-[40vw] w-[70vw] rounded-[1.5vw] overflow-hidden">
          <img
            key={`${handle}-1`}
            src={`/images/${handle}/1.avif`}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Desktop: Side by side layout (name left, vignette right) */}
      <div className="hidden md:block">
        {/* Project Name on the left */}
        <div className="fixed left-[5vw] top-1/2 -translate-y-1/2 text-white z-10">
          <h2 className="text-5xl 2xl:text-7xl font-extrabold tracking-tight">
            {name}
          </h2>
        </div>

        {/* Vignette on the right */}
        <div className="h-[25vw] w-[30vw] fixed top-1/2 right-[5vw] -translate-y-1/2 rounded-[1.5vw] overflow-hidden">
          <img
            key={`${handle}-1`}
            src={`/images/${handle}/1.avif`}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}