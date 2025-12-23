'use client';

import { motion } from "framer-motion";

export default function DividerArrow3() {
  return (
    <div className="w-full flex justify-center py-20 bg-black text-white">
      <svg
        width="170"
        height="160"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible -scale-x-100"
      >
        {/* Main line */}
        <motion.path
          d="M206.266 254C208.962 237.817 204.219 197.643 192.253 183.319C168.466 154.842 133.459 157.189 122.955 172.686C117.983 180.022 121.891 189.92 130.855 195.38C140.842 201.464 149.167 190.281 149.464 183.748C160.964 147.471 159 73 115.455 63.2918C71.5809 53.5103 97.5219 100.217 109.454 83.8518C130.855 54.5 -6.5736 40.4912 2.4283 1.99998"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          initial={{ strokeDasharray: "1 1", strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Arrow tip */}
        <motion.path
          d="M223.143 239.988C220.861 240.441 219.017 241.787 217.108 243.035C210.84 247.134 205.4 253.553 203.638 261.002C202.926 252.741 199.217 242.255 191.406 238.394"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          initial={{ strokeDasharray: "1 1", strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}
