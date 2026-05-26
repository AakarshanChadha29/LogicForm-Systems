"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { deliveryPhases } from "@/data/process";
import { cn } from "@/lib/utils";

export function ProcessPreviewSection() {
  const [activeId, setActiveId] = useState(deliveryPhases[0]?.id);
  const activePhase = deliveryPhases.find((phase) => phase.id === activeId) ?? deliveryPhases[0];

  return (
    <Section id="process" className="section-divider">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Process"
            title="Structured Delivery"
            description="A clear path from discovery to optimization. Select a phase to see what happens at each step."
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {deliveryPhases.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActiveId(phase.id)}
                  className={cn(
                    "rounded-[var(--radius-md)] border px-3 py-2 text-left text-sm transition-colors",
                    activeId === phase.id
                      ? "border-[var(--border-strong)] bg-[var(--accent-muted)] text-foreground"
                      : "border-[var(--border)] bg-[var(--surface-card)] text-muted-foreground hover:border-[var(--border-strong)] hover:text-foreground",
                  )}
                >
                  <span className="font-mono text-xs text-accent">{phase.step}</span>
                  <span className="mt-0.5 block font-medium">{phase.title}</span>
                </button>
              ))}
            </div>

            {activePhase ? (
              <GlassCard className="p-6 md:p-7">
                <p className="font-mono text-xs text-accent">{activePhase.step}</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{activePhase.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {activePhase.description}
                </p>
              </GlassCard>
            ) : null}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
