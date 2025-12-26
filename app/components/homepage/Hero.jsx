'use client'
import { motion } from "framer-motion";

export default function Hero() {
  const heading = "Reach Design Studios";
  const description = "Sustainable, Smart & Culturally Rooted";

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/rrrreach.webp')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-0" />

      {/* Bottom text */}
      <div className="absolute bottom-12 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 2xl:px-0 text-white">
          {/* Animated H1 */}
          <h1 className="text-4xl md:text-7xl leading-tight font-bold">
            {heading.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.5, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Animated Description */}
          <motion.p
            className="mt-3 text-2xl md:text-4xl font-semibold leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: heading.length * 0.03 + 0.2, duration: 0.8, ease: "easeOut" }}
          >
            {description.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: heading.length * 0.03 + 0.2 + index * 0.05 }}
              >
                {word}
              </motion.span>
            ))}

            <span className="relative inline-block">
              {/* Underline only for the word 'Architecture' */}
              Architecture
              <span className="absolute left-0 -bottom-3 w-full">
                <motion.svg
                  viewBox="0 0 412 26"
                  className="w-full h-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <motion.path
                    d="M255.8,23.8c-35.1-1.6-92.1-2.1-99.5-3-7-.8-6.6-1.9-.7-2.6
             39.4-3.2,81.7,1.2,121.9-2.5 3.1-.7-2.6-1.4-4-1.6
             -46.3-3.1-94.4-1.2-140.4-3.3
             -16.6-.8-11.7-1.6 2.5-1.8
             82.3-1.2,165.4,1,247.6-1.1
             7.1-.3,15.8-.5,21.7-1.5"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: heading.length * 0.03 + 0.5,
                    }}
                  />
                </motion.svg>
              </span>
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
