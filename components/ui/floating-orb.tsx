"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type FloatingOrbProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
};

const sizeMap = {
  sm: "h-24 w-24",
  md: "h-40 w-40",
  lg: "h-56 w-56",
} as const;

export function FloatingOrb({ className, size = "md", delay = 0 }: FloatingOrbProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.22),rgba(212,175,55,0.04)_55%,transparent_70%)] blur-2xl",
        sizeMap[size],
        className,
      )}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -12, 0],
              opacity: [0.45, 0.7, 0.45],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }
      }
    />
  );
}
