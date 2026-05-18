"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ConstellationOverlayProps {
  activeSystem: string;
}

const systemsData: Record<string, { name: string; paths: string[] }> = {
  vedic: {
    name: "Nakshatra: Rohini",
    paths: ["M-100,-100 L-50,0 L50,-50 L0,-150 Z"],
  },
  western: {
    name: "Zodiac: Aries",
    paths: ["M-50,50 L50,100 L100,0"],
  },
  chinese: {
    name: "Lunar Mansion: Azure Dragon",
    paths: ["M100,-100 L150,-50 L250,-80 L300,0"],
  },
  mayan: {
    name: "Day Sign: Imix",
    paths: ["M-50,50 A50,50 0 1,1 50,50 A50,50 0 1,1 -50,50"],
  },
};

export default function ConstellationOverlay({ activeSystem }: ConstellationOverlayProps) {
  const data = systemsData[activeSystem] || systemsData.vedic;

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <svg className="w-full h-full overflow-visible">
        <AnimatePresence mode="wait">
          <motion.g
            key={activeSystem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="origin-center translate-x-1/2 translate-y-1/2"
          >
            {data.paths.map((path, i) => (
              <motion.path
                key={i}
                d={path}
                fill="none"
                stroke="gold"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                filter="drop-shadow(0 0 12px rgba(255, 215, 0, 0.8))"
              />
            ))}
          </motion.g>
        </AnimatePresence>
      </svg>
    </div>
  );
}
