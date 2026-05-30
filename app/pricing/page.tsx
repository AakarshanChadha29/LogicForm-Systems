import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import {
  homepagePricingPackages,
  pricingAuditNote,
  pricingNote,
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Clear starting prices for website systems, business systems, and ongoing technical partnership from LogicForm Systems. Every project scoped individually.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Pricing"
          title="Clear starting prices, scoped per project"
          description="Three common engagement paths. Every project is scoped individually — we confirm your number in the first conversation."
        />

        <Section id="pricing-content" className="section-divider pb-16">
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {homepagePricingPackages.map((pkg) => (
                <article
                  key={pkg.id}
                  className={cn(
                    "relative flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] p-6",
                    pkg.recommended && "border-[var(--border-strong)] bg-[var(--accent-muted)]",
                  )}
                >
                  {pkg.recommended && (
                    <span className="absolute right-4 top-4 rounded-full border border-[var(--border-strong)] bg-[rgba(0,0,0,0.52)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                      Most selected
                    </span>
                  )}
                  {/* Name above price */}
                  <h2 className="text-lg font-semibold text-[var(--foreground-secondary)]">{pkg.name}</h2>
                  <p className="mt-2 text-3xl font-semibold text-foreground">{pkg.price}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{pkg.priceNote}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{pkg.bestFor}</p>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="shrink-0 text-[var(--accent)] font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={pkg.ctaHref} className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
                    {pkg.ctaLabel}
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--foreground-secondary)]">{pricingAuditNote}</p>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{pricingNote}</p>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
