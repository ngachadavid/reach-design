'use client';

import DividerArrow3 from "../global/DividerArrow3";

export default function ContactHero() {
  return (
    <section className="bg-black text-white px-4 2xl:px-0 pt-32 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight w-[70%] text-center mx-auto mt-10">
          Reach out to discuss your vision and how we can bring it to life together.
        </h1>

        {/* Image */}
        <div className="mt-16">
          <img
            src="/images/reach2.avif"
            alt="Reach Design Studio contact"
            className="w-full h-[60vh] object-cover object-center"
          />
        </div>

        {/* Description */}
        <div className="mt-16 flex justify-end">
          <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-xl">
            At Reach Designs, every project begins with a conversation. An opportunity to understand
            intent, context, and ambition. Whether you’re exploring a new idea,
            navigating a design challenge, or seeking a thoughtful collaborator,
            we welcome the dialogue.
          </p>
        </div>
      </div>
      <DividerArrow3 />
    </section>
  );
}
