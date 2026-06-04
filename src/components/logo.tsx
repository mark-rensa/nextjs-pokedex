import { motion } from "motion/react";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/pokeball.png"
          alt="Next.js logo"
          width={40}
          height={40}
          priority
          style={{ filter: "grayscale(100%)" }}
        />
      </motion.div>
      <span className="text-2xl font-bold">Next.js Pokédex</span>
    </div>
  );
}
