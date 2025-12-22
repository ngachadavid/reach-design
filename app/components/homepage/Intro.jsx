import DividerArrow2 from "../global/DividerArrow2";

export default function Intro() {
  return (
    <section className="bg-white text-black px-4 2xl:px-0 pt-0 pb-20">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold">
          Using a process built around you
        </h3>

        <p className="mt-6 text-lg md:text-xl leading-relaxed tracking-tight w-full md:w-[80%]">
          We begin by listening—understanding
          your needs, context, and ambitions—then combine research, sustainable
          thinking, and emerging technologies to shape thoughtful, responsive
          architecture. Every decision is guided by clarity, collaboration, and
          a commitment to designing spaces that endure.
        </p>

        <DividerArrow2 />
      </div>
    </section>
  );
}
