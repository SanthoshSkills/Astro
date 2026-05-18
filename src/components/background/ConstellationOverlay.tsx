"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AstrologicalSign } from "@/lib/mock-data";

interface ConstellationOverlayProps {
  activeSign: AstrologicalSign;
}

export default function ConstellationOverlay({ activeSign }: ConstellationOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <svg className="w-full h-full overflow-visible">
        <AnimatePresence mode="wait">
          <motion.g
            key={activeSign.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="origin-center translate-x-1/2 translate-y-1/2"
          >
            {activeSign.paths.map((path, i) => (
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
