"use client";

import GlassPanel from "@/components/ui/GlassPanel";
import { cn } from "@/lib/utils";

interface ChartEngineProps {
  activeSystem: string;
  onSystemChange: (system: string) => void;
  activeSign: any;
  onNext: () => void;
  onPrev: () => void;
  isPanorama: boolean;
  onTogglePanorama: () => void;
}

export default function ChartEngine({ 
  activeSystem, 
  onSystemChange,
  activeSign,
  onNext,
  onPrev,
  isPanorama,
  onTogglePanorama
}: ChartEngineProps) {
  const systems = [
    { id: "vedic", label: "Vedic" },
    { id: "western", label: "Western" },
    { id: "chinese", label: "Chinese" },
    { id: "mayan", label: "Mayan" },
  ];

  return (
    <div className="flex flex-col gap-6 w-[400px]">
      <GlassPanel>
        <div className="flex gap-2 p-1 bg-black/20 rounded-xl mb-6">
          {systems.map((s) => (
            <button
              key={s.id}
              onClick={() => onSystemChange(s.id)}
              className={cn(
                "flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 pointer-events-auto",
                activeSystem === s.id 
                  ? "bg-white/10 text-white shadow-lg" 
                  : "text-white/40 hover:text-white/60"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl mb-4">
            <button onClick={onPrev} disabled={isPanorama} className={cn("px-4 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 transition-colors pointer-events-auto", isPanorama && "opacity-30 cursor-not-allowed")}>Prev</button>
            <div className={cn("text-sm font-light text-white/80 px-4 transition-opacity", isPanorama && "opacity-30")}>{activeSign.name}</div>
            <button onClick={onNext} disabled={isPanorama} className={cn("px-4 py-2 bg-white/5 rounded-lg text-xs hover:bg-white/10 transition-colors pointer-events-auto", isPanorama && "opacity-30 cursor-not-allowed")}>Next</button>
        </div>

        <button 
          onClick={onTogglePanorama}
          className={cn(
            "w-full px-4 py-3 rounded-lg text-xs uppercase tracking-widest transition-all",
            isPanorama ? "bg-gold text-black" : "bg-white/5 text-white"
          )}
        >
          {isPanorama ? "Panorama Active" : "Enable Panorama"}
        </button>
      </GlassPanel>
    </div>
  );
}
