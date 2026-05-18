"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarfieldCanvas from "@/components/background/StarfieldCanvas";
import ConstellationOverlay from "@/components/background/ConstellationOverlay";
import ChartEngine from "@/components/controls/ChartEngine";
import TimelineScrubber from "@/components/controls/TimelineScrubber";

import { getActiveSign } from "@/lib/calculations";

export default function Home() {
  const [activeSystem, setActiveSystem] = useState("vedic");
  const [timelineValue, setTimelineValue] = useState(0);
  const [formData, setFormData] = useState({
    date: "1950-01-01",
    time: "12:00",
    location: "Global",
  });

  const activeSign = getActiveSign(activeSystem, formData.date, timelineValue);

  // System-specific "Camera" coordinates (X, Y, Zoom) for dynamic responsive visuals
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
        <StarfieldCanvas 
          activeSystem={activeSystem} 
          timelineValue={timelineValue}
          startDate={formData.date}
          activeSign={activeSign}
        />
        <ConstellationOverlay activeSign={activeSign} />
      </div>

      {/* Static UI Layer (Viewport absolute bounds to prevent overflows) */}
      <div className="absolute inset-0 z-50 pointer-events-none p-8">
        
        {/* Left Control Panel (Scrolls internally if screen is short) */}
        <div className="absolute top-8 left-8 bottom-8 w-[350px] flex flex-col gap-4 overflow-y-auto no-scrollbar pointer-events-auto">
          <ChartEngine 
            activeSystem={activeSystem} 
            onSystemChange={setActiveSystem}
            formData={formData}
            onFormDataChange={setFormData}
            activeSign={activeSign}
          />
        </div>

        {/* Right HUD Panel */}
        <div className="absolute top-8 right-8 w-64 p-4 rounded-lg border border-white/5 hud-border hidden md:block pointer-events-auto bg-black/30 backdrop-blur-md">
          <div className="text-[10px] uppercase text-gold mb-2 flex justify-between">
            <span>Sensor: RA/DEC</span>
            <span className="animate-pulse">Active</span>
          </div>
          <div className="space-y-3 font-mono">
            <div>
              <div className="text-[8px] text-white/40 uppercase">Constellation Focus</div>
              <div className="text-sm truncate">
                {activeSign?.name || "N/A"} <br/>
                {activeSign?.names ? (
                  <span className="text-[10px] text-white/60">
                    {activeSign.names.ml || "—"} / {activeSign.names.ta || "—"} / {activeSign.names.hi || "—"}
                  </span>
                ) : null}
              </div>
            </div>
            <div>
              <div className="text-[8px] text-white/40 uppercase">Spectral Class</div>
              <div className="text-sm">G2V (Solar Analog)</div>
            </div>
            <div>
              <div className="text-[8px] text-white/40 uppercase">Timeline Sync</div>
              <div className="text-sm">{formData.date || "1950-01-01"} + {Math.floor(timelineValue)}Y</div>
            </div>
          </div>
        </div>

        {/* Center Presentation Layer */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none p-8 z-10">
          <AnimatePresence mode="wait">
            {activeSign && (
              <motion.div
                key={activeSign.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-center max-w-xl pointer-events-auto mt-[-100px] md:mt-0"
              >
                <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.3em] uppercase text-white/95 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] leading-tight text-balance mb-6">
                  {activeSign.name}
                </h2>
                {activeSign.story && (
                  <p className="text-xs text-white/80 font-light leading-relaxed max-h-32 overflow-y-auto bg-black/40 backdrop-blur-sm p-4 border border-white/5 rounded-lg select-text">
                    {activeSign.story}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Timeline Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl pointer-events-auto p-4 z-20">
          <TimelineScrubber 
            value={timelineValue} 
            onChange={setTimelineValue}
            startDate={formData.date}
          />
        </div>

        {/* Sticky Disclaimer */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-[8px] text-white/30 uppercase tracking-widest pointer-events-none">
          For Educational/Entertainment Exploration Only
        </div>
      </div>
    </main>
  );
}
