'use client';

import { motion } from "framer-motion";

export default function Button() {
  return (
    <motion.div 
      className="relative inline-block bg-white px-4 py-3 border-2 border-black rounded-3xl cursor-pointer group"
      whileHover={{ backgroundColor: "#000000", borderColor: "#ffffff" }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative text-black font-normal text-lg group-hover:text-white transition-colors duration-300">
        How It Works
      </span>
    </motion.div>
  );
}