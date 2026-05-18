"use client";

import { useEffect, useRef } from "react";

interface StarfieldCanvasProps {
  activeSystem: string;
  timelineValue: number;
  startDate: string;
  activeSign: any; // Using any for brevity in interface expansion
}

export default function StarfieldCanvas({ activeSystem, timelineValue, startDate, activeSign }: StarfieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; opacity: number; seedX: number; seedY: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = 600;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          seedX: Math.random(),
          seedY: Math.random(),
          x: 0,
          y: 0,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const rotationOffset = (timelineValue * 0.05) % (Math.PI * 2);

      // Draw Background Stars
      stars.forEach((star) => {
        const radius = Math.sqrt(Math.pow(star.seedX * 2 - 1, 2) + Math.pow(star.seedY * 2 - 1, 2)) * Math.max(canvas.width, canvas.height);
        const angle = Math.atan2(star.seedY * 2 - 1, star.seedX * 2 - 1) + rotationOffset;

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        if (x > -100 && x < canvas.width + 100 && y > -100 && y < canvas.height + 100) {
          ctx.globalAlpha = star.opacity * 0.5;
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(x, y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Major Constellation Stars (The "Actuals")
      if (activeSign && activeSign.starPoints) {
        activeSign.starPoints.forEach(([sx, sy]: [number, number]) => {
          // Major stars don't rotate with the background to stay synced with SVG overlay
          const x = centerX + sx;
          const y = centerY + sy;

          ctx.globalAlpha = 1;
          ctx.fillStyle = "#FFD700"; // Gold
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2); // Larger stars
          ctx.fill();
          
          // Outer glow for major stars
          ctx.shadowBlur = 15;
          ctx.shadowColor = "gold";
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
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
