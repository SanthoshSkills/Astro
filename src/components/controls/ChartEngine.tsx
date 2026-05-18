"use client";

import { useState } from "react";
import GlassPanel from "@/components/ui/GlassPanel";
import { cn } from "@/lib/utils";

interface ChartEngineProps {
  activeSystem: string;
  onSystemChange: (system: string) => void;
  formData: { date: string; time: string; location: string };
  onFormDataChange: (data: { date: string; time: string; location: string }) => void;
}

export default function ChartEngine({ 
  activeSystem, 
  onSystemChange,
  formData,
  onFormDataChange
}: ChartEngineProps) {
  const systems = [
    { id: "vedic", label: "Vedic" },
    { id: "western", label: "Western" },
    { id: "chinese", label: "Chinese" },
    { id: "mayan", label: "Mayan" },
  ];

  return (
    <div className="flex flex-col gap-6 w-[400px]">
      {/* Birth Data Form */}
      <GlassPanel>
        <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">Origin Parameters</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] text-white/40 uppercase">Date</label>
              <input 
                type="date" 
                value={formData.date}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50 transition-all"
                onChange={(e) => onFormDataChange({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-white/40 uppercase">Time</label>
              <input 
                type="time" 
                value={formData.time}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50 transition-all"
                onChange={(e) => onFormDataChange({ ...formData, time: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-white/40 uppercase">Location</label>
            <input 
              type="text" 
              value={formData.location}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50 transition-all"
              onChange={(e) => onFormDataChange({ ...formData, location: e.target.value })}
            />
          </div>
        </div>
      </GlassPanel>

      {/* System Selection Matrix */}
      <GlassPanel className="flex-1">
        <div className="flex gap-2 p-1 bg-black/20 rounded-xl mb-6">
          {systems.map((s) => (
            <button
              key={s.id}
              onClick={() => onSystemChange(s.id)}
              className={cn(
                "flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300",
                activeSystem === s.id 
                  ? "bg-white/10 text-white shadow-lg" 
                  : "text-white/40 hover:text-white/60"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="min-h-[200px] flex flex-col items-center justify-center text-center">
          {activeSystem === "mayan" ? (
            <MayanInterlock />
          ) : (
            <div className="space-y-2">
              <div className="text-2xl font-light">
                {activeSystem === "vedic" && "Rohini Nakshatra"}
                {activeSystem === "western" && "Aries Sun"}
                {activeSystem === "chinese" && "Year of the Dragon"}
              </div>
              <p className="text-xs text-white/40 max-w-[250px]">
                Calculated based on {formData.date} at {formData.time}
              </p>
            </div>
          )}
        </div>
      </GlassPanel>
    </div>
  );
}

function MayanInterlock() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Haab Wheel (Outer) */}
      <div className="absolute inset-0 animate-[spin_60s_linear_infinite] opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
          {[...Array(18)].map((_, i) => (
            <line 
              key={i} 
              x1="50" y1="2" x2="50" y2="8" 
              transform={`rotate(${i * 20} 50 50)`} 
              stroke="white" strokeWidth="0.5" 
            />
          ))}
        </svg>
      </div>

      {/* Tzolk'in Wheel (Inner) */}
      <div className="absolute inset-4 animate-[spin_20s_linear_infinite_reverse] opacity-60">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="48" fill="none" stroke="gold" strokeWidth="1" />
          {[...Array(13)].map((_, i) => (
            <text 
              key={i} 
              x="50" y="10" 
              transform={`rotate(${i * (360/13)} 50 50)`} 
              className="text-[8px] fill-gold font-bold"
              textAnchor="middle"
            >
              {i + 1}
            </text>
          ))}
        </svg>
      </div>

      <div className="z-10 text-xs font-bold text-white uppercase tracking-tighter">
        Interlock
      </div>
    </div>
  );
}
