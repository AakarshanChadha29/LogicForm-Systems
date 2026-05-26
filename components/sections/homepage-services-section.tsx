import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
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
      <h3 className={cn("font-semibold tracking-tight text-foreground", compact ? "text-lg" : "text-3xl")}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{whoFor}</p>
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
  const primaryServices = homepageServiceCards.filter((service) =>
    ["website-system", "custom-web-apps", "dashboards", "ai-automation"].includes(service.id),
  );

  return (
    <Section id="services" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
            <p className="text-eyebrow">Services</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              One partner for the digital layers that make work move.
            </h2>
            </div>
            <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
              We do not sell disconnected deliverables. We build the visible front end, the internal
              operating layer, and the workflows that connect them.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="premium-media mt-10 overflow-hidden rounded-[var(--radius-xl)]">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-[var(--border)] p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <p className="text-eyebrow">Flagship engagement</p>
                <div className="mt-4">
                  <ServiceCardContent {...featured} />
                </div>
              </div>
              <div className="flex flex-col justify-center bg-[rgba(0,0,0,0.24)] p-6 md:p-8 lg:p-10">
                <p className="text-eyebrow">Operating model</p>
                <div className="mt-5 space-y-5">
                  {[
                    ["01", "Map the business workflow before designing screens."],
                    ["02", "Build the smallest production-grade system that solves the real bottleneck."],
                    ["03", "Connect data, approvals, reporting, and maintenance from the start."],
                  ].map(([step, text]) => (
                    <div key={step} className="grid grid-cols-[2.5rem_1fr] gap-4">
                      <span className="font-mono text-xs text-accent">{step}</span>
                      <p className="border-b border-[var(--border-subtle)] pb-4 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {primaryServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <div className="h-full border-t border-[var(--border-subtle)] pt-5">
                <ServiceCardContent {...service} compact />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Not sure what should come first?{" "}
          <Link href="/services/systems-audit" className="text-accent hover:text-[var(--accent-hover)]">
            Start with a Digital Systems Audit
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-accent hover:text-[var(--accent-hover)]">
            send the business problem
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
