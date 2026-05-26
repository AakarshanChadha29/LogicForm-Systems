import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { featuredHomepageService, homepageServiceCards } from "@/data/homepage-services";
import { cn } from "@/lib/utils";

function ServiceCardContent({
  title,
  whoFor,
  includes,
  outcome,
  href,
  compact = false,
}: {
  title: string;
  whoFor: string;
  includes: string[];
  outcome: string;
  href: string;
  compact?: boolean;
}) {
  return (
    <>
      <h3 className={cn("font-semibold tracking-tight text-foreground", compact ? "text-lg" : "text-2xl")}>
        {title}
      </h3>
      <div className="mt-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[rgba(0,0,0,0.28)] px-3 py-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
          Best for
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{whoFor}</p>
      </div>
      <div className="mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
          Includes
        </p>
        <ul className="mt-2 space-y-1.5">
          {includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--foreground-secondary)]">
        <span className="font-medium text-foreground">Outcome: </span>
        {outcome}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
      >
        Read full service page
        <ArrowRight size={14} aria-hidden />
      </Link>
    </>
  );
}

export function HomepageServicesSection() {
  const featured = featuredHomepageService;

  return (
    <Section id="services" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-eyebrow">Services</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Systems built for real business operations
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you need a website, an internal tool, automation, or a long-term technical
              partner, each engagement is scoped around operational clarity—not a list of unrelated
              features.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <GlassCard className="mt-8 overflow-hidden border-[var(--border-strong)] premium-glow">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-[var(--border)] p-6 md:p-8 lg:border-b-0 lg:border-r">
                <span className="rounded-full border border-[var(--border-strong)] bg-[var(--accent-muted)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Flagship build
                </span>
                <div className="mt-4">
                  <ServiceCardContent {...featured} />
                </div>
              </div>
              <div className="flex flex-col justify-center bg-[rgba(0,0,0,0.35)] p-6 md:p-8">
                <p className="text-eyebrow">System preview</p>
                <div className="mt-3 space-y-2 font-mono text-[11px] text-[var(--foreground-secondary)]">
                  <div className="rounded border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2">
                    intake → map workflows → build → integrate → deploy
                  </div>
                  <div className="rounded border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2">
                    dashboard · automation · approvals · reporting
                  </div>
                  <div className="rounded border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2 text-accent">
                    human-owned decisions at every critical step
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {homepageServiceCards.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <GlassCard interactive className="flex h-full flex-col p-5 md:p-6">
                <ServiceCardContent {...service} compact />
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Not sure where to start?{" "}
          <Link href="/services/systems-audit" className="text-accent hover:text-[var(--accent-hover)]">
            Begin with a Digital Systems Audit
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-accent hover:text-[var(--accent-hover)]">
            tell us what you are trying to build
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
