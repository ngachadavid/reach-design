'use client';

export default function Positions() {
  const positions = [
    "Interior Designer",
    "Social Media Manager",
    "Junior Architect",
    "Project Manager",
  ];

  return (
    <section className="bg-white text-black px-4 2xl:px-0 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left */}
          <div className="w-full md:w-1/3">
            <p className="text-base md:text-xl font-medium tracking-tight">
              [Open Positions]
            </p>
          </div>

          {/* Right */}
          <div className="w-full md:w-2/3">
            <ul className="flex flex-col gap-6">
              {positions.map((role, idx) => (
                <li
                  key={idx}
                  className="text-lg md:text-2xl tracking-tight border-b border-black/20 pb-4"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
