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
    "Premium pricing anchors for website systems, business systems, and ongoing technical partnership from Logicform Systems.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Pricing"
          title="Pricing for serious systems work"
          description="Three common engagement paths. Final scope is confirmed after discovery so the build matches the business problem, technical risk, and support needs."
        />

        <Section id="pricing-content" className="section-divider pb-16">
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {homepagePricingPackages.map((pkg) => (
                <article
                  key={pkg.id}
                  className={cn(
                    "flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] p-6",
                    pkg.recommended && "border-[var(--border-strong)] bg-[var(--accent-muted)]",
                  )}
                >
                  <p className="text-3xl font-semibold text-foreground">{pkg.price}</p>
                  <h2 className="mt-3 text-xl font-semibold text-foreground">{pkg.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{pkg.bestFor}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
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
