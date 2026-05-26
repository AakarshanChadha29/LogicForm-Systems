"use client";

import { FloatingOrb } from "@/components/ui/floating-orb";

export function NeuralBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,rgba(212,175,55,0.09),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_100%_20%,rgba(212,175,55,0.06),transparent_60%)]" />
      <FloatingOrb className="absolute left-[8%] top-[18%] opacity-60" size="lg" delay={0.3} />
      <FloatingOrb className="absolute right-[6%] top-[42%] opacity-50" size="md" delay={1.2} />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(212, 175, 55, 0.05) 1px, transparent 1px),
            linear-gradient(to right, rgba(212, 175, 55, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 88%)",
        }}
      />
    </div>
  );
}
