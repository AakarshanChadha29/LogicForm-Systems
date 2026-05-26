"use client";

import Link from "next/link";
import { ArrowRight, Bot, LayoutDashboard, SearchCheck, ShieldCheck, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

const systemPaths = [
  {
    title: "I need a serious website",
    text: "Launch or redesign a credible business website with structure, SEO, and lead flow.",
    href: "/services/websites",
    cta: "Explore Website System",
    icon: Globe,
  },
  {
    title: "I want to automate manual work",
    text: "Reduce repetitive tasks and connect your tools with human-controlled automation.",
    href: "/services/ai-automation",
    cta: "Explore Automation",
    icon: Bot,
  },
  {
    title: "I need a dashboard or internal tool",
    text: "Track customers, operations, workflows, and reporting in one connected system.",
    href: "/services/dashboards",
    cta: "Explore Dashboard Tools",
    icon: LayoutDashboard,
  },
  {
    title: "I need ongoing technical support",
    text: "Get a lean technical partner for improvements, deployment, and maintenance.",
    href: "/services/technical-partner",
    cta: "Explore Partnership",
    icon: ShieldCheck,
  },
  {
    title: "I don't know what to build first",
    text: "Start with a systems audit and implementation roadmap before committing to build.",
    href: "/services/systems-audit",
    cta: "Start with Audit",
    icon: SearchCheck,
  },
] as const;

export function BuildPathSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="find-your-system" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Find Your System"
          title="Start with the problem you need solved"
          description="Choose the path that matches your current business challenge. We will guide you to the right service or next step."
        />

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {systemPaths.map((path) => {
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
                  <span className="inline-flex w-fit rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                    <Icon size={16} aria-hidden />
                  </span>
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
