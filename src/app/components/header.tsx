"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex items-center gap-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/*<Image
          src="/pokeball.png"
          alt="Next.js logo"
          width={215}
          height={216}
          priority
        />*/}
      </motion.div>
      <span className="text-5xl font-bold">Next.js Pokédex</span>
    </div>
  );
}
