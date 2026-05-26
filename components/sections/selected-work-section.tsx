import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { selectedWorkItems } from "@/data/selected-work";
import { cn } from "@/lib/utils";

export function SelectedWorkSection() {
  return (
    <Section id="selected-work" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-eyebrow">Selected work</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Selected systems we can build
              </h2>
            </div>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              A mix of delivered work, internal platform builds, and concept systems that show how
              Logicform approaches connected digital infrastructure. Concepts are labelled clearly—no
              fake client claims.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 space-y-5">
          {selectedWorkItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.06}>
              <GlassCard
                className={cn(
                  "overflow-hidden",
                  item.isConcept && "border-dashed border-[var(--border-strong)]",
                )}
              >
                <div className="grid lg:grid-cols-[1fr_0.72fr]">
                  <div className="border-b border-[var(--border)] p-6 md:p-7 lg:border-b-0 lg:border-r">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
                          item.isConcept
                            ? "border-[var(--border-strong)] text-[var(--foreground-secondary)]"
                            : "border-[var(--border-strong)] bg-[var(--accent-muted)] text-accent",
                        )}
                      >
                        {item.isConcept ? "Concept" : "Delivered"}
                      </span>
                      <span className="text-xs text-[var(--foreground-secondary)]">{item.label}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {item.title}
                    </h3>
                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                          Problem
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                          What was built
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.built}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                          Outcome
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                          {item.outcome}
                        </p>
                      </div>
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                      >
                        View live project
                        <ExternalLink size={14} aria-hidden />
                      </a>
                    ) : null}
                  </div>
                  <div className="flex flex-col justify-between bg-[rgba(0,0,0,0.32)] p-6 md:p-7">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                        System layers
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.layers.map((layer) => (
                          <li
                            key={layer}
                            className="rounded border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2 font-mono text-[11px] text-[var(--foreground-secondary)]"
                          >
                            {layer}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.isConcept ? (
                      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                        Concept work illustrates approach and system thinking—not a delivered client
                        engagement.
                      </p>
                    ) : null}
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
          >
            View work overview
            <ArrowRight size={14} aria-hidden />
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
