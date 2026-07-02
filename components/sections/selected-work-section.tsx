import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { selectedWorkItems } from "@/data/selected-work";
import { cn } from "@/lib/utils";

export function SelectedWorkSection() {
  const [featured, ...supporting] = selectedWorkItems;

  return (
    <Section id="selected-work" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-eyebrow">Selected work</p>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Proof should feel concrete.
              </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
              We show delivered work clearly and label concept work honestly. The goal is not a
              portfolio wall. It is evidence of structured thinking, production care, and commercial
              clarity.
            </p>
          </div>
        </ScrollReveal>

        {featured ? (
          <ScrollReveal delay={0.08}>
            <article className="mt-10 grid overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[rgba(255,255,255,0.035)] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--foreground-secondary)]">
                  <span className="text-accent">Delivered</span>
                  <span aria-hidden>·</span>
                  <span>{featured.label}</span>
                </div>
                <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  {featured.outcome}
                </p>
                <div className="mt-8 grid gap-5 border-t border-[var(--border-subtle)] pt-6 md:grid-cols-2">
                  <div>
                    <p className="text-eyebrow">Problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {featured.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-eyebrow">Built</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {featured.built}
                    </p>
                  </div>
                </div>
                {featured.href ? (
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                  >
                    View live project
                    <ExternalLink size={14} aria-hidden />
                  </a>
                ) : null}
              </div>

              <div className="border-t border-[var(--border)] bg-[rgba(0,0,0,0.24)] p-6 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <p className="text-eyebrow">System layers</p>
                <div className="mt-6 space-y-4">
                  {featured.layers.map((layer, index) => (
                    <div key={layer} className="grid grid-cols-[2.5rem_1fr] items-center gap-4">
                      <span className="font-mono text-xs text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="border-b border-[var(--border-subtle)] py-3 text-sm text-[var(--foreground-secondary)]">
                        {layer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ) : null}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {supporting.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.06}>
              <article
                className={cn(
                  "h-full rounded-[var(--radius-lg)] border border-[var(--border-subtle)] p-5 md:p-6",
                  item.isConcept && "border-dashed",
                )}
              >
                <p className="text-xs text-[var(--foreground-secondary)]">
                  {item.isConcept ? "Concept" : "Internal build"} · {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.outcome}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <Link
            href="/about#our-work"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
          >
            View the client story
            <ArrowRight size={14} aria-hidden />
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
