'use client';

import WhiteButton from "./WhiteButton";

export default function CTA() {
  return (
    <section className="bg-black text-white px-4 2xl:px-0 py-10 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left: SVG + Text */}
          <div className="flex items-center gap-6">
            <img
              src="/images/cta.svg"
              alt=""
              className="w-40 md:w-48 h-40 md:h-48 object-contain"
            />

            <h3 className="text-2xl md:text-5xl font-extrabold tracking-tight max-w-xl">
              Let’s shape the space that you’ve been envisioning...
            </h3>
          </div>

          {/* Right: Button */}
          <div className="shrink-0">
            <WhiteButton text="Contact Us" href="/contact" />
          </div>

        </div>
      </div>
    </section>
  );
}
