"use client";

import { Bot, CheckCircle2, ShieldCheck, UserRound } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const balancePoints = [
  {
    icon: Bot,
    title: "Automation where it saves time",
    detail: "Repeatable workflows, integrations, and AI-assisted steps.",
  },
  {
    icon: UserRound,
    title: "Human control where judgment matters",
    detail: "Approvals, review points, and clear ownership.",
  },
  {
    icon: ShieldCheck,
    title: "Systems teams can operate",
    detail: "Documentation, monitoring, and practical handover.",
  },
] as const;

export function AiHumanBalanceSection() {
  return (
    <Section id="approach" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              AI-First, Human-Controlled
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Logicform Solutions designs systems that move faster without removing the people who
              make the decisions.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {balancePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={point.title} delay={index * 0.06}>
                <GlassCard className="h-full p-5 text-center md:text-left">
                  <span className="mx-auto inline-flex rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent md:mx-0">
                    <Icon size={18} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.detail}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.12}>
          <GlassCard className="mt-5 flex items-start gap-3 p-4 md:p-5">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              The goal is not maximum automation—it is the right mix of software, AI, and human
              oversight for your business context.
            </p>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
