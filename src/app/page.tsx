"use client";

import { useState } from "react";
import StarfieldCanvas from "@/components/background/StarfieldCanvas";
import ChartEngine from "@/components/controls/ChartEngine";

import { VEDIC_NAKSHATRAS, WESTERN_ZODIAC, CHINESE_ZODIAC, MAYAN_SIGNS } from "@/lib/mock-data";

export default function Home() {
  const [activeSystem, setActiveSystem] = useState("vedic");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPanorama, setIsPanorama] = useState(false);
  const formData = { date: "1950-01-01", time: "12:00", location: "Global" };

  const getSystemList = (system: string) => {
    switch (system) {
      case "western": return WESTERN_ZODIAC;
      case "chinese": return CHINESE_ZODIAC;
      case "mayan": return MAYAN_SIGNS;
      default: return VEDIC_NAKSHATRAS;
    }
  };

  const currentList = getSystemList(activeSystem);
  const activeSign = currentList[carouselIndex % currentList.length];
  const activeSigns = isPanorama ? currentList : [activeSign];

  const nextSign = () => setCarouselIndex((prev) => (prev + 1) % currentList.length);
  const prevSign = () => setCarouselIndex((prev) => (prev - 1 + currentList.length) % currentList.length);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <StarfieldCanvas 
          activeSystem={activeSystem} 
          timelineValue={0}
          startDate={"1950-01-01"}
          activeSigns={activeSigns}
          isPanorama={isPanorama}
        />
      </div>

      {/* UI Layer */}
      <div className="absolute inset-0 z-50 pointer-events-none p-8 flex flex-col">
        {/* Top Controls */}
        <div className="flex justify-between items-start pointer-events-auto">
          <ChartEngine 
            activeSystem={activeSystem} 
            onSystemChange={(sys) => { setActiveSystem(sys); setCarouselIndex(0); }}
            activeSign={activeSign}
            onNext={nextSign}
            onPrev={prevSign}
            isPanorama={isPanorama}
            onTogglePanorama={() => setIsPanorama(!isPanorama)}
          />

          {/* Instrumental Discovery Panel (Hidden in Panorama) */}
          {!isPanorama && (
            <div className="w-64 p-4 rounded-lg border border-white/5 hud-border hidden md:block shrink-0 pointer-events-auto">
              <div className="text-[10px] uppercase text-gold mb-2 flex justify-between">
                <span>Sensor: RA/DEC</span>
                <span className="animate-pulse">Active</span>
              </div>
              <div className="space-y-3 font-mono">
                <div>
                  <div className="text-[8px] text-white/40 uppercase">Constellation Focus</div>
                  <div className="text-sm truncate">
                    {activeSign.names.en} <br/>
                    <span className="text-white/60">{activeSign.names.ml} / {activeSign.names.ta} / {activeSign.names.hi}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Dynamic Center Text */}
        {!isPanorama && activeSign && (
          <div className="flex-1 flex flex-col justify-center items-center pointer-events-none p-8 z-10">
            <div className="text-center max-w-xl pointer-events-auto">
              <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.3em] uppercase text-white/95 leading-tight mb-6">
                {activeSign.name}
              </h2>
              <p className="text-sm text-white/80 font-light leading-relaxed max-h-32 overflow-y-auto bg-black/40 backdrop-blur-sm p-4 border border-white/5 rounded-lg">
                {activeSign.story}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
