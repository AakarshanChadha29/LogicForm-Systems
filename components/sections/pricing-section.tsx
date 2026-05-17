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
          title="Clear Packages for Serious Engineering Work"
          description="Transparent starting points for websites, custom systems, and ongoing technical partnership. Final scope is confirmed after a practical discovery conversation."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPackages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={cn(
                "surface-card-interactive flex h-full flex-col p-6",
                index === 1 && "border-[color-mix(in_srgb,var(--accent)_25%,var(--border))]",
              )}
            >
              <header className="mb-5">
                <p className="text-3xl font-semibold tracking-tight text-foreground">{pkg.price}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pkg.forDescription}
                </p>
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
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Timeline
                </p>
                <p className="mt-1 text-sm text-foreground">{pkg.timeline}</p>
                <Link
                  href="#contact"
                  className={cn(buttonVariants({ variant: index === 1 ? "primary" : "ghost", size: "lg" }), "mt-4")}
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
