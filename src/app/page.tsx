"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarfieldCanvas from "@/components/background/StarfieldCanvas";
import ConstellationOverlay from "@/components/background/ConstellationOverlay";
import ChartEngine from "@/components/controls/ChartEngine";
import TimelineScrubber from "@/components/controls/TimelineScrubber";

const SYSTEM_LABELS: Record<string, string> = {
  vedic: "Nakshatra: Rohini",
  western: "Zodiac: Aries",
  chinese: "Lunar Mansion: Azure Dragon",
  mayan: "Day Sign: Imix",
};

export default function Home() {
  const [activeSystem, setActiveSystem] = useState("vedic");
  const [timelineValue, setTimelineValue] = useState(0);
  const [formData, setFormData] = useState({
    date: "1950-01-01",
    time: "12:00",
    location: "Global",
  });

  // System-specific "Camera" coordinates (X, Y, Zoom)
  const getCameraStyle = () => {
    switch (activeSystem) {
      case "vedic": return { transform: "translate3d(0, 50px, 0) scale(1)" };
      case "western": return { transform: "translate3d(-50px, -50px, 0) scale(2)" };
      case "chinese": return { transform: "translate3d(-200px, 50px, 0) scale(1.5)" };
      case "mayan": return { transform: "translate3d(0, -50px, 0) scale(2.5)" };
      default: return { transform: "translate3d(0, 0, 0) scale(1)" };
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Camera-Controlled Background Layer */}
      <div 
        className="fixed inset-0 z-0 transition-transform duration-[2500ms] cubic-bezier(0.2, 0, 0.2, 1) will-change-transform"
        style={getCameraStyle()}
      >
        <StarfieldCanvas activeSystem={activeSystem} />
        <ConstellationOverlay activeSystem={activeSystem} />
      </div>

      {/* Static UI Layer */}
      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col">
        {/* Top Controls */}
        <div className="p-8 flex justify-between items-start pointer-events-auto">
          <ChartEngine 
            activeSystem={activeSystem} 
            onSystemChange={setActiveSystem}
            formData={formData}
            onFormDataChange={setFormData}
          />
        </div>

        {/* Dynamic Center Text (Decoupled from Camera) */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center px-4"
            >
              <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.4em] uppercase text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] max-w-4xl mx-auto leading-relaxed">
                {SYSTEM_LABELS[activeSystem]}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls */}
        <div className="p-8 pb-12 pointer-events-auto">
          <TimelineScrubber 
            value={timelineValue} 
            onChange={setTimelineValue}
            startDate={formData.date}
          />
        </div>

        {/* Sticky Disclaimer */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-white/40 uppercase tracking-widest">
          For Educational/Entertainment Exploration Only
        </div>
      </div>
    </main>
  );
}
