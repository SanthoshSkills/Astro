"use client";

import { useEffect, useRef } from "react";
import { AstrologicalSign } from "@/lib/mock-data";

interface StarfieldCanvasProps {
  activeSystem: string;
  timelineValue: number;
  startDate: string;
  activeSigns: AstrologicalSign[];
  isPanorama: boolean;
}

export default function StarfieldCanvas({ activeSystem, timelineValue, startDate, activeSigns, isPanorama }: StarfieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeSignsRef = useRef(activeSigns);
  const isPanoramaRef = useRef(isPanorama);

  useEffect(() => {
    activeSignsRef.current = activeSigns;
    isPanoramaRef.current = isPanorama;
  }, [activeSigns, isPanorama]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { size: number; opacity: number; seedX: number; seedY: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = 1200;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          seedX: Math.random(),
          seedY: Math.random(),
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Background Stars (Full Sky - Static)
      stars.forEach((star) => {
        const drawX = star.seedX * canvas.width;
        const drawY = star.seedY * canvas.height;

        ctx.globalAlpha = star.opacity * 0.9;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Constellations
      const currentSigns = activeSignsRef.current;
      if (currentSigns) {
        currentSigns.forEach((sign) => {
          // Draw Major Stars
          if (sign.starPoints) {
            sign.starPoints.forEach(([sx, sy]: [number, number]) => {
              const drawX = sx + (sign.celestialX * canvas.width);
              const drawY = sy + (sign.celestialY * canvas.height);

              ctx.globalAlpha = 1;
              ctx.fillStyle = "#FFFFFF";
              ctx.beginPath();
              ctx.arc(drawX, drawY, 2, 0, Math.PI * 2); 
              ctx.fill();
              
              ctx.shadowBlur = 10;
              ctx.shadowColor = "white";
              ctx.beginPath();
              ctx.arc(drawX, drawY, 2, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            });
          }

          // Draw Tracing
          if (sign.paths) {
            ctx.strokeStyle = "#FFD700";
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.shadowBlur = 8;
            ctx.shadowColor = "gold";

            sign.paths.forEach((pathStr) => {
              ctx.save();
              ctx.translate(sign.celestialX * canvas.width, sign.celestialY * canvas.height);
              ctx.stroke(new Path2D(pathStr));
              ctx.restore();
            });
            ctx.shadowBlur = 0;
          }

          // Draw Name in Panorama Mode
          if (isPanoramaRef.current) {
            ctx.fillStyle = "#FFD700";
            ctx.font = "bold 14px monospace"; // Increased size and added bold
            ctx.shadowBlur = 5;
            ctx.shadowColor = "black";
            ctx.fillText(sign.names.en, (sign.celestialX * canvas.width) + 15, (sign.celestialY * canvas.height) + 15);
            ctx.shadowBlur = 0;
          }
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
