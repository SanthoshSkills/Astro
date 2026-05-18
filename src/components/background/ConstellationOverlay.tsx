"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ConstellationOverlayProps {
  activeSystem: string;
}

const systemsData: Record<string, { name: string; paths: string[] }> = {
  vedic: {
    name: "Nakshatra: Rohini",
    paths: ["M100,100 L150,200 L250,150 L200,50 Z"],
  },
  western: {
    name: "Zodiac: Aries",
    paths: ["M300,300 L400,350 L450,250"],
  },
  chinese: {
    name: "Lunar Mansion: Azure Dragon",
    paths: ["M600,100 L650,150 L750,120 L800,200"],
  },
  mayan: {
    name: "Day Sign: Imix",
    paths: ["M400,500 A50,50 0 1,1 500,500 A50,50 0 1,1 400,500"],
  },
};

export default function ConstellationOverlay({ activeSystem }: ConstellationOverlayProps) {
  const data = systemsData[activeSystem] || systemsData.vedic;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <AnimatePresence mode="wait">
          <motion.g
            key={activeSystem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {data.paths.map((path, i) => (
              <motion.path
                key={i}
                d={path}
                fill="none"
                stroke="gold"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                filter="drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))"
              />
            ))}
          </motion.g>
        </AnimatePresence>
      </svg>

      {/* Dynamic Text Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSystem}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h2 className="text-4xl font-light tracking-[0.3em] uppercase text-white/80">
            {data.name}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
