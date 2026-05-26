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
    role: "Technical Founder",
    detail:
      "Aakarshan leads systems architecture, full-stack development, automation workflows, dashboards, deployment, and technical operations.",
  },
  {
    icon: Megaphone,
    name: siteConfig.founders.commercial.name,
    role: "Commercial Founder",
    detail:
      "Francesca leads positioning, client communication, sales operations, commercial structure, and market-facing clarity.",
  },
] as const;

export function FounderOperatorStorySection() {
  return (
    <Section id="founders" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow">Founder team</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Technical execution and commercial judgement in one team
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              Logicform Systems is led by two founders with complementary ownership: one accountable
              for how systems are built, one accountable for how they are positioned, sold, and
              sustained commercially.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {founders.map(({ icon: Icon, name, role, detail }, index) => (
            <ScrollReveal key={name} delay={index * 0.08}>
              <GlassCard className="h-full p-6 md:p-7">
                <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {detail}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <GlassCard className="mt-4 border-[var(--border-strong)] p-5 md:p-6">
            <p className="text-pretty text-sm leading-relaxed text-[var(--foreground-secondary)] md:text-base">
              Together, they bring technical execution and commercial judgement into one operating
              model: systems that can be built, explained, sold, maintained, and improved.
            </p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
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
