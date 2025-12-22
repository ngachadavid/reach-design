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

        {/* Divider SVG */}
      <div className="w-20 md:w-36">
        <svg
          width="225"
          height="263"
          viewBox="0 0 225 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="divider arrow">
            <path
              id="line"
              d="M206.266 254C208.962 237.817 204.219 197.643 192.253 183.319C168.466 154.842 133.459 157.189 122.955 172.686C117.983 180.022 121.891 189.92 130.855 195.38C140.842 201.464 149.167 190.281 149.464 183.748C160.964 147.471 159 73 115.455 63.2918C71.5809 53.5103 97.5219 100.217 109.454 83.8518C130.855 54.5 -6.5736 40.4912 2.4283 1.99998"
              stroke="#000" 
              strokeWidth="3"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="tip"
              d="M223.143 239.988C220.861 240.441 219.017 241.787 217.108 243.035C210.84 247.134 205.4 253.553 203.638 261.002C202.926 252.741 199.217 242.255 191.406 238.394"
              stroke="#000" 
              strokeWidth="3"
              strokeMiterlimit="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      </div>
    </section>
  );
}
