export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/homepage/reach.avif')",
      }}
    >

      {/* Bottom-left text */}
      <div className="absolute bottom-12 left-16 max-w-xl text-white">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Designing the Future:
        </h1>
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Sustainable, Smart, and Culturally Rooted Architecture
        </p>
      </div>
    </section>
  );
}
