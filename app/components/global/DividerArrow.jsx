'use client';

import { motion } from "framer-motion";

export default function DividerArrow() {
  return (
    <div className="w-full flex justify-center py-10 bg-white text-black">
      <svg
        width="260"
        height="170"
        viewBox="0 0 357 268"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Main line */}
        <motion.path
          d="M355.377 2C355.377 102.685 321.875 149.594 226.369 161.434C185.004 166.562 18.6108 161.434 18.6108 262"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Arrow tip */}
        <motion.path
          d="M4.10686 244.355C6.01943 245.128 7.40235 246.589 8.85801 247.978C13.6383 252.54 17.313 258.941 17.6124 265.599C19.6026 258.667 24.5722 250.344 32.0167 248.371"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}