"use client";

import { Building2, Code2, Megaphone, Users2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const founderModel = [
  {
    icon: Code2,
    role: "Technical Founder",
    detail:
      "TU Berlin background with full-stack engineering, DevOps, and AI-native implementation across product and operations.",
  },
  {
    icon: Megaphone,
    role: "Commercial Founder",
    detail:
      "Sales and marketing operator with regional market-building experience, including practical GTM execution in Italy.",
  },
] as const;

const partnerSignals = [
  { icon: Building2, label: "Lean by design", text: "Senior execution without agency bloat." },
  { icon: Users2, label: "Operator-led", text: "Business and technical decisions stay aligned." },
] as const;

export function FounderOperatorStorySection() {
  return (
    <Section id="founder" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow">Founder-Operator Model</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Built by a technical founder and a commercial founder.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              Logicform Systems combines architecture depth with market execution to deliver serious
              systems outcomes, not freelance-style output.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {founderModel.map(({ icon: Icon, role, detail }, index) => (
            <ScrollReveal key={role} delay={index * 0.08}>
              <GlassCard className="h-full p-6">
                <span className="inline-flex rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {detail}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.16}>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {partnerSignals.map(({ icon: Icon, label, text }) => (
              <GlassCard key={label} className="p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex rounded-[var(--radius-sm)] bg-[var(--accent-muted)] p-1.5 text-accent">
                    <Icon size={14} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
