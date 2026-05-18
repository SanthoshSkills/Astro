"use client";

import { useEffect, useRef } from "react";

interface StarfieldCanvasProps {
  activeSystem: string;
}

export default function StarfieldCanvas({ activeSystem }: StarfieldCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; size: number; opacity: number }[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starCount = 400;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

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

  // System-specific offsets for "Auto-glide" effect
  const getTransform = () => {
    switch (activeSystem) {
      case "vedic": return "translate3d(0, 0, 0) scale(1)";
      case "western": return "translate3d(-5%, -5%, 0) scale(1.1)";
      case "chinese": return "translate3d(5%, -5%, 0) scale(1.05)";
      case "mayan": return "translate3d(0, 5%, 0) scale(1.2)";
      default: return "translate3d(0, 0, 0) scale(1)";
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-transform duration-[2000ms] ease-out will-change-transform"
      style={{ transform: getTransform() }}
    />
  );
}
