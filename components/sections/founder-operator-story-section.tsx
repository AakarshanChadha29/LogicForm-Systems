"use client";

import Link from "next/link";
import { ArrowRight, Code2, Megaphone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/lib/site";

const founders = [
  {
    icon: Code2,
    name: siteConfig.founders.technical.name,
    role: siteConfig.founders.technical.title,
    detail:
      "Focused on full-stack systems, automation, dashboards, IT operations, cloud deployment, AI-assisted workflows, and technical architecture.",
  },
  {
    icon: Megaphone,
    name: siteConfig.founders.commercial.name,
    role: siteConfig.founders.commercial.title,
    detail:
      "Focused on sales operations, market positioning, client communication, marketing clarity, partnerships, and commercial execution.",
  },
] as const;

export function FounderOperatorStorySection() {
  return (
    <Section id="founders" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow">Founder Team</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              A technical-commercial founder pair built for serious systems delivery
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              Logicform Systems is led by a technical-commercial founder pair. Aakarshan focuses on
              architecture, systems, automation, and implementation. Francesca focuses on commercial
              clarity, client communication, positioning, and market execution. Together, they help
              businesses build systems that are both technically strong and commercially
              understandable.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {founders.map(({ icon: Icon, name, role, detail }, index) => (
            <ScrollReveal key={name} delay={index * 0.08}>
              <GlassCard className="h-full p-6">
                <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">{role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {detail}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
          >
            Learn more about Logicform Systems
            <ArrowRight size={14} aria-hidden />
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
