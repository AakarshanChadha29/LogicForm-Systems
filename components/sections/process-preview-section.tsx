"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { deliveryPhases } from "@/data/process";

export function ProcessPreviewSection() {
  return (
    <Section id="process" className="section-divider">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Process"
            title="A calmer way to build serious systems"
            description="Every engagement starts with operational clarity, then moves through architecture, implementation, launch, and measured improvement."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-2 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
            {deliveryPhases.map((phase) => (
              <article
                key={phase.id}
                className="grid gap-4 py-6 md:grid-cols-[5rem_0.7fr_1fr] md:items-start"
              >
                <p className="font-mono text-xs text-accent">{phase.step}</p>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {phase.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
