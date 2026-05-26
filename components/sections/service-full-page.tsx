import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import type { ServicePageContent } from "@/data/service-pages";
import { cn } from "@/lib/utils";

const whoForBySlug: Record<ServicePageContent["slug"], string> = {
  "systems-audit":
    "Businesses that need clarity before investing in websites, dashboards, automation, or internal tools.",
  websites:
    "Founders, consultants, and companies that need a credible website with structure, SEO, and lead flow.",
  "ai-automation":
    "Teams with repetitive workflows, manual handoffs, and disconnected tools across daily operations.",
  dashboards:
    "Businesses that need visibility over sales, operations, customers, reporting, or internal performance.",
  "custom-web-apps":
    "Companies that need portals, MVPs, admin panels, or internal tools shaped around real workflows.",
  "it-operations":
    "Teams that need stronger access workflows, documentation, support processes, and operational reliability.",
  "cloud-maintenance":
    "Businesses with live systems that need dependable deployment, monitoring, and ongoing maintenance.",
  "technical-partner":
    "Growing teams that need a lean technical partner for continuous improvements and roadmap execution.",
};

const relatedBySlug: Record<ServicePageContent["slug"], Array<{ title: string; href: string }>> = {
  "systems-audit": [
    { title: "Websites", href: "/services/websites" },
    { title: "AI Automation", href: "/services/ai-automation" },
    { title: "Technical Partner", href: "/services/technical-partner" },
  ],
  websites: [
    { title: "Custom Web Apps", href: "/services/custom-web-apps" },
    { title: "Cloud Maintenance", href: "/services/cloud-maintenance" },
    { title: "Systems Audit", href: "/services/systems-audit" },
  ],
  "ai-automation": [
    { title: "Dashboards", href: "/services/dashboards" },
    { title: "IT Operations", href: "/services/it-operations" },
    { title: "Technical Partner", href: "/services/technical-partner" },
  ],
  dashboards: [
    { title: "Custom Web Apps", href: "/services/custom-web-apps" },
    { title: "AI Automation", href: "/services/ai-automation" },
    { title: "Systems Audit", href: "/services/systems-audit" },
  ],
  "custom-web-apps": [
    { title: "Dashboards", href: "/services/dashboards" },
    { title: "Cloud Maintenance", href: "/services/cloud-maintenance" },
    { title: "Technical Partner", href: "/services/technical-partner" },
  ],
  "it-operations": [
    { title: "Cloud Maintenance", href: "/services/cloud-maintenance" },
    { title: "AI Automation", href: "/services/ai-automation" },
    { title: "Systems Audit", href: "/services/systems-audit" },
  ],
  "cloud-maintenance": [
    { title: "Websites", href: "/services/websites" },
    { title: "Custom Web Apps", href: "/services/custom-web-apps" },
    { title: "Technical Partner", href: "/services/technical-partner" },
  ],
  "technical-partner": [
    { title: "AI Automation", href: "/services/ai-automation" },
    { title: "Dashboards", href: "/services/dashboards" },
    { title: "Cloud Maintenance", href: "/services/cloud-maintenance" },
  ],
};

export function ServiceFullPage({ service }: { service: ServicePageContent }) {
  const whoFor = whoForBySlug[service.slug];
  const relatedServices = relatedBySlug[service.slug];

  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero eyebrow="Service" title={service.title} description={service.heroSummary}>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Start a Project
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "ghost", size: "lg" })}>
              All Services
            </Link>
          </div>
        </PageHero>

        <Section id="who-for" className="section-divider">
          <Container>
            <SectionBlock title="Who this is for">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{whoFor}</p>
            </SectionBlock>
          </Container>
        </Section>

        <Section id="problem" className="section-divider">
          <Container>
            <SectionBlock title="Problems this solves">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{service.problem}</p>
            </SectionBlock>
          </Container>
        </Section>

        <Section id="builds" className="section-divider">
          <Container>
            <SectionBlock title="What we build">
              <BulletList items={service.builds} />
            </SectionBlock>
          </Container>
        </Section>

        <Section id="use-cases" className="section-divider">
          <Container>
            <SectionBlock title="Example use cases">
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

        <Section id="package" className="section-divider">
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              <SectionBlock title="Typical package">
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

        <Section id="related" className="section-divider">
          <Container>
            <SectionBlock title="Related services">
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2 text-sm text-[var(--foreground-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SectionBlock>
          </Container>
        </Section>

        <Section id="contact" className="section-divider pb-16">
          <Container>
            <GlassCard className="p-6 md:p-8">
              <p className="text-eyebrow">Next step</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {service.ctaTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.ctaText}
              </p>
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
                Tell us what you need
                <ArrowRight size={16} aria-hidden />
              </Link>
            </GlassCard>
          </Container>
        </Section>
      </main>
    </SiteShell>
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
