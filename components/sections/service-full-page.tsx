import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import type { ServicePageContent } from "@/data/service-pages";
import { cn } from "@/lib/utils";

export function ServiceFullPage({ service }: { service: ServicePageContent }) {
  return (
    <main id="main-content" className="relative z-10">
      <Section id="service-hero" className="!pt-[calc(4.25rem+1.5rem)]">
        <Container>
          <GlassCard className="p-6 md:p-8">
            <p className="text-eyebrow">Service</p>
            <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {service.heroSummary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project
              </Link>
              <Link href="/" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                Back to Homepage
              </Link>
            </div>
          </GlassCard>
        </Container>
      </Section>

      <Section id="problem" className="section-divider">
        <Container>
          <SectionBlock title="Problem this solves">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{service.problem}</p>
          </SectionBlock>
        </Container>
      </Section>

      <Section id="builds" className="section-divider">
        <Container>
          <SectionBlock title="What Logicform builds">
            <BulletList items={service.builds} />
          </SectionBlock>
        </Container>
      </Section>

      <Section id="use-cases" className="section-divider">
        <Container>
          <SectionBlock title="Use cases">
            <BulletList items={service.useCases} />
          </SectionBlock>
        </Container>
      </Section>

      <Section id="stack" className="section-divider">
        <Container>
          <SectionBlock title="Tech stack / tools">
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-2.5 py-1 text-xs text-[var(--foreground-secondary)] md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </SectionBlock>
        </Container>
      </Section>

      <Section id="process" className="section-divider">
        <Container>
          <SectionBlock title="Process">
            <ol className="space-y-2">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground md:text-base">
                  <span className="mt-[0.1rem] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent-muted)] text-[11px] text-accent">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </SectionBlock>
        </Container>
      </Section>

      <Section id="pricing-deliverables" className="section-divider">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <SectionBlock title="Pricing range">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.pricingRange}
              </p>
            </SectionBlock>
            <SectionBlock title="Deliverables">
              <BulletList items={service.deliverables} />
            </SectionBlock>
          </div>
        </Container>
      </Section>

      <Section id="faq" className="section-divider">
        <Container>
          <div className="max-w-4xl">
            <p className="text-eyebrow">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Common questions
            </h2>
            <div className="mt-6 space-y-3">
              {service.faq.map((item) => (
                <GlassCard key={item.question} className="p-4 md:p-5">
                  <h3 className="text-base font-medium text-foreground">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact" className="section-divider">
        <Container>
          <GlassCard className="p-6 md:p-8">
            <p className="text-eyebrow">CTA</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {service.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {service.ctaText}
            </p>
            <Link href="/#contact" className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
              Start a Project
              <ArrowRight size={16} aria-hidden />
            </Link>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <GlassCard className="p-5 md:p-6">
      <p className="text-eyebrow">{title}</p>
      <div className="mt-4">{children}</div>
    </GlassCard>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground md:text-base">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
