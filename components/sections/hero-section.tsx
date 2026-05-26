"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  Globe,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FloatingOrb } from "@/components/ui/floating-orb";
import { GlassCard } from "@/components/ui/glass-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const floatingCards = [
  { label: "Website", icon: Globe, x: "8%", y: "10%", delay: 0 },
  { label: "Automation", icon: Bot, x: "58%", y: "6%", delay: 0.4 },
  { label: "Dashboard", icon: LayoutDashboard, x: "12%", y: "52%", delay: 0.8 },
  { label: "AI Assist", icon: Sparkles, x: "62%", y: "48%", delay: 1.1 },
  { label: "Human Approval", icon: ShieldCheck, x: "36%", y: "72%", delay: 1.4 },
] as const;

function HeroVisual({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative min-h-[320px] md:min-h-[380px]", className)}>
      <FloatingOrb className="absolute -right-6 top-0" size="lg" delay={0.2} />
      <FloatingOrb className="absolute -left-8 bottom-4" size="md" delay={0.8} />

      <GlassCard className="relative h-full overflow-hidden p-4 md:p-5 premium-glow">
        <div className="border-b border-[var(--border)] pb-3">
          <p className="text-eyebrow">System preview</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Websites · workflows · dashboards · control</p>
        </div>

        <div className="relative mt-4 min-h-[240px] md:min-h-[280px]">
          {floatingCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className="absolute w-[44%] max-w-[11rem] sm:w-[42%]"
                style={{ left: card.x, top: card.y }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -6, 0], opacity: [0.92, 1, 0.92] }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        duration: 5 + card.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: card.delay,
                      }
                }
              >
                <div className="glass-card-interactive flex items-center gap-2 px-3 py-2.5">
                  <span className="rounded-[var(--radius-sm)] bg-[var(--accent-muted)] p-1 text-accent">
                    <Icon size={14} aria-hidden />
                  </span>
                  <span className="text-[11px] font-medium text-foreground sm:text-xs">{card.label}</span>
                </div>
              </motion.div>
            );
          })}

          <div className="absolute bottom-0 left-0 right-0 rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.55)] px-3 py-2.5 font-mono text-[10px] text-[var(--foreground-secondary)]">
            <span className="text-accent">workflow</span>
            <span className="text-muted-foreground"> · automate · review · deploy</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="hero" className="!pt-[calc(4.25rem+1.5rem)] !pb-10 md:!pt-[calc(4.25rem+2.5rem)]">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14"
        >
          <div>
            <span className="badge-pill px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)]">
              AI-first systems · Websites · Dashboards · Automation
            </span>

            <h1 className="mt-5 max-w-[14ch] text-balance text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem]">
              <span className="gold-gradient-text">Build Smarter</span>{" "}
              <span className="text-foreground">Digital Systems</span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Logicform Solutions creates websites, automation workflows, dashboards, and internal
              tools that help businesses work faster without losing human control.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project
              </Link>
              <Link href="#services" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                Explore Services
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" aria-hidden />
                Germany · Europe · International
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" aria-hidden />
                From €999
              </span>
            </div>
          </div>

          <HeroVisual className="w-full lg:justify-self-end" />
        </motion.div>
      </Container>
    </Section>
  );
}
