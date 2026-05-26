import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { homepagePricingPackages } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function FeaturedPackagesSection() {
  return (
    <Section id="packages" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-eyebrow">Featured packages</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Three engagement paths for most businesses
              </h2>
            </div>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Most clients start with one of these packages. Scope, integrations, and timeline are
              confirmed after discovery—so you know what you are buying before build begins.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {homepagePricingPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.06}>
              <GlassCard
                interactive
                className={cn(
                  "flex h-full flex-col p-5 md:p-6",
                  pkg.recommended && "border-[var(--border-strong)] premium-glow",
                )}
              >
                {pkg.recommended ? (
                  <span className="mb-3 w-fit rounded-full border border-[var(--border-strong)] bg-[var(--accent-muted)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                    Most selected
                  </span>
                ) : (
                  <span className="mb-3 block h-[22px]" aria-hidden />
                )}
                <p className="text-2xl font-semibold tracking-tight text-foreground">{pkg.price}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{pkg.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{pkg.bestFor}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                  Timeline · {pkg.timeline}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
            >
              See full pricing detail
              <ArrowRight size={14} aria-hidden />
            </Link>
            <span className="hidden h-4 w-px bg-[var(--border)] sm:block" aria-hidden />
            <Link
              href="/services/systems-audit"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Start with a Digital Systems Audit from €1,200
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
