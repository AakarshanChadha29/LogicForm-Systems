"use client";

import Link from "next/link";
import { ArrowRight, BrainCircuit, Settings2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const operatingFocus = [
  {
    icon: Settings2,
    name: "Systems architecture",
    role: "Build, connect, and maintain",
    detail:
      "Websites, platforms, dashboards, automation workflows, deployment, and technical operations are shaped around the business problem.",
  },
  {
    icon: BrainCircuit,
    name: "AI and platform clarity",
    role: "Choose what is worth using",
    detail:
      "Tooling decisions are filtered through budget, team capacity, maintenance risk, and measurable business value.",
  },
] as const;

export function FounderOperatorStorySection() {
  return (
    <Section id="operating-model" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
            <p className="text-eyebrow">Operating model</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Built for companies that need clear technical ownership.
            </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
              Logicform Systems connects strategy, implementation, and maintenance so businesses can
              choose the right stack, launch cleanly, and keep improving after the first release.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-0 border-y border-[var(--border-subtle)] md:grid-cols-2">
          {operatingFocus.map(({ icon: Icon, name, role, detail }, index) => (
            <ScrollReveal key={name} delay={index * 0.08}>
              <article className="h-full border-b border-[var(--border-subtle)] py-7 md:border-b-0 md:border-r md:px-7 last:md:border-r-0">
                <span className="inline-flex text-accent">
                  <Icon size={18} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {detail}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12}>
          <div className="mt-7 max-w-3xl">
            <p className="text-pretty text-base leading-8 text-[var(--foreground-secondary)]">
              The goal is simple: systems that can be explained, shipped, maintained, and improved
              without adding more confusion to the business.
            </p>
          </div>
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
