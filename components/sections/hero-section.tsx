"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Cloud, Database, LayoutDashboard, Shield } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustBullets = [
  "TU Berlin engineering foundation",
  "Germany-based · Europe & international delivery",
  "Production systems, not demo projects",
] as const;

const architectureLayers = [
  { label: "Application layer", detail: "Dashboards · APIs · Admin UI", icon: LayoutDashboard },
  { label: "AI & automation", detail: "Workflows · Integrations · Agents", icon: Cloud },
  { label: "Data & infrastructure", detail: "Cloud · Databases · Observability", icon: Database },
  { label: "Security & operations", detail: "Access · Monitoring · Handover", icon: Shield },
] as const;

const pipelineSteps = ["Ingest", "Process", "Automate", "Deliver"] as const;

function HeroVisual({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="border-b border-[var(--border)] bg-[var(--surface-inset)] px-4 py-3 md:px-5">
        <p className="text-eyebrow">System overview</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Architecture · AI pipelines · Operations
        </p>
      </div>

      <div className="space-y-3 p-4 md:p-5">
        {architectureLayers.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.label}
              className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-white px-3 py-2.5"
            >
              <span className="mt-0.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] p-1.5 text-accent">
                <Icon size={14} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-medium text-foreground">{layer.label}</p>
                <p className="text-[11px] text-muted-foreground">{layer.detail}</p>
              </div>
            </div>
          );
        })}

        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-3">
          <p className="text-[11px] font-medium text-foreground">AI / cloud pipeline</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {pipelineSteps.map((step, index) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-white px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {step}
                </span>
                {index < pipelineSteps.length - 1 ? (
                  <span className="text-[10px] text-[var(--border-strong)]" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[#0f172a] p-3 font-mono text-[10px] leading-relaxed text-slate-300">
          <p>
            <span className="text-blue-400">const</span> delivery ={" "}
            <span className="text-emerald-400">{"{"}</span>
          </p>
          <p className="pl-3">
            stack: <span className="text-amber-200">&quot;Next.js · TypeScript&quot;</span>,
          </p>
          <p className="pl-3">
            focus: <span className="text-amber-200">&quot;production-ready&quot;</span>
          </p>
          <p>
            <span className="text-emerald-400">{"}"}</span>;
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="hero" className="pt-20 pb-8 md:pt-28 md:pb-12">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div className="max-w-xl">
            <p className="text-eyebrow">Veltrix Labs · Engineering Consultancy</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.06]">
              Engineering Production-Grade Software, AI, and Infrastructure.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Veltrix Labs helps startups, founders, and growing businesses design, build, and
              scale secure software systems, automation workflows, dashboards, cloud platforms, and
              operational tools.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project
              </Link>
              <Link
                href="#projects"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                View Case Studies
              </Link>
            </div>

            <ul className="mt-10 space-y-2.5 border-t border-[var(--border)] pt-8">
              {trustBullets.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-px w-3 shrink-0 bg-accent/70" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual className="lg:max-w-md lg:justify-self-end" />
        </motion.div>
      </Container>
    </Section>
  );
}
