"use client";

import { useState, useEffect, useCallback } from "react";
import GlassPanel from "@/components/ui/GlassPanel";

interface TimelineScrubberProps {
  value: number;
  onChange: (value: number) => void;
  startDate: string;
}

export default function TimelineScrubber({ value, onChange, startDate }: TimelineScrubberProps) {
  const [localValue, setLocalValue] = useState(value);

  // Debounce the parent update to prevent CPU lag
  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(localValue);
    }, 50); // 50ms debounce for responsiveness without thrashing

    return () => clearTimeout(handler);
  }, [localValue, onChange]);

  const getYearLabel = (val: number) => {
    const startYear = new Date(startDate).getFullYear() || 1950;
    return startYear + Math.floor(val);
  };

  return (
    <GlassPanel className="w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="text-xs uppercase tracking-widest text-white/50">Fluid Timeline</h3>
            <div className="text-2xl font-light tabular-nums">
              A.D. {getYearLabel(localValue)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-white/40 uppercase">Active Transit</div>
            <div className="text-sm text-gold">Jupiter Mahadasha</div>
          </div>
        </div>

        <div className="relative group py-4">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={localValue}
            onChange={(e) => setLocalValue(parseFloat(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-gold hover:accent-gold/80 transition-all"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-1 pointer-events-none opacity-20 text-[8px] uppercase tracking-tighter">
            <span>DOB</span>
            <span>+25Y</span>
            <span>+50Y</span>
            <span>+75Y</span>
            <span>+100Y</span>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
