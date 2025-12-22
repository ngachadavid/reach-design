export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/homepage/reach.avif')",
      }}
    >

      {/* Bottom-left text */}
      <div className="absolute bottom-12 left-16 text-white">
        <h1 className="text-4xl md:text-7xl leading-tight font-bold ">
          Designing the Future:
        </h1>
        <p className="mt-2 text-2xl md:text-4xl font-semibold leading-relaxed">
          Sustainable, Smart, and Culturally Rooted Architecture
        </p>
      </div>
    </section>
  );
}
