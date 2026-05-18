"use client";

import { useState } from "react";
import StarfieldCanvas from "@/components/background/StarfieldCanvas";
import ConstellationOverlay from "@/components/background/ConstellationOverlay";
import ChartEngine from "@/components/controls/ChartEngine";
import TimelineScrubber from "@/components/controls/TimelineScrubber";

export default function Home() {
  const [activeSystem, setActiveSystem] = useState("vedic");
  const [timelineValue, setTimelineValue] = useState(0);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Layer (Fixed) */}
      <div className="fixed inset-0 z-0">
        <StarfieldCanvas activeSystem={activeSystem} />
        <ConstellationOverlay activeSystem={activeSystem} />
      </div>

      {/* UI Layer (Floating) */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-auto">
          <ChartEngine 
            activeSystem={activeSystem} 
            onSystemChange={setActiveSystem} 
          />
        </div>

        <div className="absolute bottom-12 left-8 right-8 pointer-events-auto">
          <TimelineScrubber 
            value={timelineValue} 
            onChange={setTimelineValue} 
          />
        </div>

        {/* Sticky Disclaimer */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-white/40 uppercase tracking-widest pointer-events-none">
          For Educational/Entertainment Exploration Only
        </div>
      </div>
    </main>
  );
}
