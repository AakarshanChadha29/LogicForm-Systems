"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Cloud, Database, LayoutDashboard, Shield } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { trustSignals } from "@/data/trust";
import { cn } from "@/lib/utils";

const architectureLayers = [
  { label: "Application layer", detail: "Dashboards · APIs · Admin UI", icon: LayoutDashboard },
  { label: "AI & automation", detail: "Workflows · Integrations", icon: Cloud },
  { label: "Infrastructure", detail: "Cloud · Data · Observability", icon: Database },
  { label: "Security & ops", detail: "Access · Monitoring", icon: Shield },
] as const;

function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="border-b border-[var(--border)] bg-[var(--surface-inset)] px-4 py-3">
        <p className="text-eyebrow">Delivery architecture</p>
        <p className="mt-0.5 text-xs text-muted-foreground">From concept to production operations</p>
      </div>
      <div className="grid gap-2 p-4 sm:grid-cols-2">
        {architectureLayers.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.label}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-white px-3 py-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-[var(--radius-sm)] bg-[var(--accent-muted)] p-1 text-accent">
                  <Icon size={13} aria-hidden />
                </span>
                <p className="text-xs font-medium text-foreground">{layer.label}</p>
              </div>
              <p className="mt-1 pl-7 text-[11px] text-muted-foreground">{layer.detail}</p>
            </div>
          );
        })}
      </div>
      <div className="border-t border-[var(--border)] bg-[#0f172a] px-4 py-3 font-mono text-[10px] leading-relaxed text-slate-300">
        <span className="text-blue-400">export</span> const stack ={" "}
        <span className="text-amber-200">&quot;Next.js · TypeScript · Cloud&quot;</span>;
      </div>
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
          className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-14"
        >
          <div>
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)] shadow-[var(--shadow-card)]">
              Packages from <span className="ml-1 text-accent">€999</span>
              <span className="mx-2 text-[var(--border-strong)]">·</span>
              Germany · Europe · International
            </span>

            <h1 className="mt-5 max-w-[18ch] text-balance text-[2.35rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem]">
              Engineering Production-Grade Software, AI, and Infrastructure.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Veltrix Labs helps startups, founders, and growing businesses design, build, and scale
              secure software systems, automation workflows, dashboards, cloud platforms, and
              operational tools.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project
              </Link>
              <Link href="#projects" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                View Case Studies
              </Link>
            </div>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <div
                  key={signal.id}
                  className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-white/80 px-3 py-2.5"
                >
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-xs font-medium text-foreground">{signal.label}</p>
                    <p className="text-[11px] text-muted-foreground">{signal.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <HeroVisual className="w-full lg:justify-self-end" />
        </motion.div>
      </Container>
    </Section>
  );
}
