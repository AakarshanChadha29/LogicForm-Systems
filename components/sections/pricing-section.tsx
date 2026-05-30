import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { buttonVariants } from "@/components/ui/button";
import {
  homepagePricingPackages,
  pricingAuditNote,
  pricingNote,
} from "@/data/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <Section id="pricing" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Clear starting prices, scoped per project"
          description="Every project is scoped individually. We confirm your number in the first conversation — no surprise ranges, no vague estimates."
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {homepagePricingPackages.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "relative flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] p-6 md:p-7",
                pkg.recommended &&
                  "border-[var(--border-strong)] bg-[linear-gradient(160deg,rgba(200,168,76,0.12),rgba(255,255,255,0.035))]",
              )}
            >
              {pkg.recommended ? (
                <span className="absolute right-4 top-4 rounded-full border border-[var(--border-strong)] bg-[rgba(0,0,0,0.52)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Most selected
                </span>
              ) : null}

              <header className={cn("mb-5", pkg.recommended && "pr-24")}>
                {/* Service name appears ABOVE price */}
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground-secondary)]">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{pkg.price}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{pkg.priceNote}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.bestFor}</p>
              </header>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-[var(--accent)] font-bold">›</span>
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
                  href={pkg.ctaHref}
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

        <p className="mt-6 text-sm text-[var(--foreground-secondary)]">{pricingAuditNote}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{pricingNote}</p>
        <Link
          href="/pricing"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
        >
          View detailed pricing
          <ArrowRight size={14} aria-hidden />
        </Link>
      </Container>
    </Section>
  );
}
