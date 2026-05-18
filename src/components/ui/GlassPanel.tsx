import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div className={cn("glass p-6 rounded-2xl", className)}>
      {children}
    </div>
  );
}
