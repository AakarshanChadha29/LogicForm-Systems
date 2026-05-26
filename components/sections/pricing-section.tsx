import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { buttonVariants } from "@/components/ui/button";
import { pricingNote, pricingPackages } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <Section id="pricing" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Premium Build Paths with Clear Anchors"
          description="Structured public anchor pricing for serious digital systems work. Final scope is defined after technical discovery."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "glass-card-interactive relative flex h-full flex-col p-6",
                pkg.recommended &&
                  "border-[var(--border-strong)] bg-[linear-gradient(160deg,rgba(212,175,55,0.16),rgba(255,255,255,0.04))] shadow-[0_24px_64px_-30px_rgba(212,175,55,0.55)]",
              )}
            >
              {pkg.recommended ? (
                <span className="absolute right-4 top-4 rounded-full border border-[var(--border-strong)] bg-[rgba(0,0,0,0.52)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Recommended
                </span>
              ) : null}

              <header className={cn("mb-5", pkg.recommended && "pr-24")}>
                <p className="text-3xl font-semibold tracking-tight text-foreground">{pkg.price}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {pkg.name}
                </h3>
                <div className="mt-3 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[rgba(0,0,0,0.32)] px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                    Best for
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{pkg.bestFor}</p>
                </div>
              </header>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--foreground-secondary)]">
                  Timeline
                </p>
                <p className="mt-1 text-sm text-foreground">{pkg.timeline}</p>
                <Link
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: pkg.recommended ? "primary" : "ghost", size: "lg" }),
                    "mt-4 w-full sm:w-auto",
                  )}
                >
                  {pkg.ctaLabel}
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">{pricingNote}</p>
      </Container>
    </Section>
  );
}
