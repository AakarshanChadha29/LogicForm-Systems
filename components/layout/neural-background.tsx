"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export function NeuralBackground() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(30);
  const radialBackground = useMotionTemplate`radial-gradient(circle at ${pointerX}% ${pointerY}%, rgba(0, 162, 255, 0.22), transparent 40%)`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25 md:opacity-40" />

      <motion.div
        aria-hidden
        className={cn(
          "absolute inset-0 hidden md:block",
          prefersReducedMotion && "opacity-40",
        )}
        style={{ background: radialBackground }}
        onMouseMove={(event) => {
          if (prefersReducedMotion) return;

          const bounds = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - bounds.left) / bounds.width) * 100;
          const y = ((event.clientY - bounds.top) / bounds.height) * 100;
          pointerX.set(x);
          pointerY.set(y);
        }}
        animate={prefersReducedMotion ? { opacity: 0.35 } : { opacity: 0.65 }}
        transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
      />
    </div>
  );
}
