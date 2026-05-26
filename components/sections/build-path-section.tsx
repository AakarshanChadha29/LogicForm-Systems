"use client";

import Link from "next/link";
import { ArrowRight, Bot, Cloud, LayoutDashboard, SearchCheck, ShieldCheck, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

const buildPaths = [
  {
    title: "Website System",
    text: "Launch or redesign a credible business website.",
    href: "/services/websites",
    cta: "Explore Website System",
    icon: Globe,
    visual: "website",
  },
  {
    title: "Automation System",
    text: "Reduce repetitive work and connect your tools.",
    href: "/services/ai-automation",
    cta: "Explore Automation",
    icon: Bot,
    visual: "automation",
  },
  {
    title: "Dashboard / Internal Tool",
    text: "Track data, customers, workflows, and operations.",
    href: "/services/dashboards",
    cta: "Explore Dashboard Tools",
    icon: LayoutDashboard,
    visual: "dashboard",
  },
  {
    title: "Technical Partner",
    text: "Ongoing support, improvements, deployment, and maintenance.",
    href: "/services/technical-partner",
    cta: "Explore Partnership",
    icon: ShieldCheck,
    visual: "partner",
  },
  {
    title: "Systems Audit",
    text: "Not sure what to build first? Start with a roadmap.",
    href: "/services/systems-audit",
    cta: "Start with Audit",
    icon: SearchCheck,
    visual: "audit",
  },
] as const;

type BuildPathCard = (typeof buildPaths)[number];

function CardMiniVisual({ type }: { type: BuildPathCard["visual"] }) {
  if (type === "website") {
    return (
      <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.35)] p-2">
        <div className="h-1.5 w-16 rounded-full bg-[var(--accent)]/60" />
        <div className="mt-2 h-8 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)]" />
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.35)] p-2">
        <div className="flex items-center justify-between text-[10px] text-[var(--foreground-secondary)]">
          <span className="rounded bg-[var(--accent-muted)] px-1.5 py-0.5">Trigger</span>
          <span className="text-accent">→</span>
          <span className="rounded bg-[var(--accent-muted)] px-1.5 py-0.5">Action</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent)]/15 via-[var(--accent)] to-[var(--accent)]/15" />
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.35)] p-2">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-3 rounded bg-[var(--accent-muted)]" />
          <div className="h-3 rounded bg-[var(--surface-card)]" />
          <div className="h-3 rounded bg-[var(--surface-card)]" />
          <div className="col-span-2 h-5 rounded bg-[var(--surface-card)]" />
          <div className="h-5 rounded bg-[var(--accent-muted)]" />
        </div>
      </div>
    );
  }

  if (type === "partner") {
    return (
      <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.35)] p-2">
        <div className="flex items-center justify-between text-[10px] text-[var(--foreground-secondary)]">
          <span>Support</span>
          <span>Deploy</span>
          <span>Improve</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-[var(--surface-card)]">
          <div className="h-1.5 w-2/3 rounded-full bg-[var(--accent)]/65" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.35)] p-2">
      <div className="flex items-center justify-between text-[10px] text-[var(--foreground-secondary)]">
        <span>Website</span>
        <span>Automation</span>
        <span>CRM</span>
      </div>
      <div className="mt-2 flex items-center gap-1 text-[10px] text-accent">
        <Cloud size={12} aria-hidden />
        <span>Roadmap generated</span>
      </div>
    </div>
  );
}

export function BuildPathSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="build-path" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Build Path"
          title="Choose Your Build Path"
          description="Start with the system your business needs most."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {buildPaths.map((path) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                variants={
                  prefersReducedMotion
                    ? {}
                    : { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }
                }
              >
                <GlassCard
                  interactive
                  className={cn(
                    "group flex h-full flex-col p-5 md:p-6",
                    "border-[var(--border)] hover:border-[var(--border-strong)]",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                      <Icon size={16} aria-hidden />
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]/70 shadow-[0_0_14px_rgba(212,175,55,0.4)]" />
                  </div>

                  <div className="mt-4">
                    <CardMiniVisual type={path.visual} />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{path.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{path.text}</p>

                  <Link
                    href={path.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-[var(--accent-hover)]"
                  >
                    {path.cta}
                    <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
