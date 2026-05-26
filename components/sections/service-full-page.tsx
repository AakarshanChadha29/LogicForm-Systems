import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { PlatformEcosystemStrip } from "@/components/sections/platform-ecosystem-strip";
import { buttonVariants } from "@/components/ui/button";
import type { ServicePageContent } from "@/data/service-pages";
import { cn } from "@/lib/utils";

const whoForBySlug: Record<ServicePageContent["slug"], string> = {
  "systems-audit":
    "You know the business feels scattered, but you do not want to spend money building the wrong thing first.",
  websites:
    "You need a serious web presence that explains the company, builds trust, captures leads, and connects to the way you operate.",
  "ai-automation":
    "Your team repeats the same admin, email, document, CRM, or reporting tasks and needs automation without losing human control.",
  dashboards:
    "You need one reliable view of customers, pipeline, delivery, finance, performance, or operations instead of manual reporting.",
  "custom-web-apps":
    "You need a portal, internal tool, MVP, admin panel, or workflow system that generic software cannot provide.",
  "it-operations":
    "Your internal technical operations need cleaner access, documentation, support workflows, and practical structure.",
  "cloud-maintenance":
    "You already have live systems, websites, or apps and need deployment, monitoring, maintenance, and technical care.",
  "technical-partner":
    "You need ongoing technical execution and decision support without hiring a large agency or full internal team immediately.",
};

const plainLanguageBySlug: Record<ServicePageContent["slug"], string> = {
  "systems-audit":
    "We review how work currently moves through the business, identify the biggest bottlenecks, and turn that into a practical build order.",
  websites:
    "We create the website as a business system: clear messaging, page structure, lead capture, analytics, SEO foundations, and deployment.",
  "ai-automation":
    "We connect repetitive steps across your tools, add AI where it saves time, and keep approval checkpoints where judgment matters.",
  dashboards:
    "We turn scattered data into a dashboard that helps people see what is happening and decide what to do next.",
  "custom-web-apps":
    "We design and build software around your workflow, so the tool fits the business instead of the business bending around the tool.",
  "it-operations":
    "We make internal technical work easier to run: access, onboarding, support, documentation, tool setup, and repeatable processes.",
  "cloud-maintenance":
    "We keep production systems healthy through deployment care, monitoring, updates, performance checks, and reliability improvements.",
  "technical-partner":
    "We become the technical execution partner for ongoing improvements, roadmap decisions, fixes, releases, and system evolution.",
};

const relatedBySlug: Record<ServicePageContent["slug"], Array<{ title: string; href: string }>> = {
  "systems-audit": [
    { title: "Website System", href: "/services/websites" },
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
    { title: "CRM / Client Systems", href: "/services/custom-web-apps" },
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
    { title: "Website System", href: "/services/websites" },
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
  const relatedServices = relatedBySlug[service.slug];
  const platformStripItems = [...service.platforms, ...service.developerTools, ...service.techStack];

  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero eyebrow="Service" title={service.title} description={service.heroSummary}>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
              Share your idea
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "w-full sm:w-auto")}
            >
              All services
            </Link>
          </div>
        </PageHero>

        <Section id="service-visual" className="!pt-0">
          <Container>
            <div className="premium-media grid overflow-hidden rounded-[var(--radius-xl)] lg:grid-cols-[1.02fr_0.98fr]">
              <div className="relative min-h-[260px] overflow-hidden md:min-h-[360px]">
                <Image
                  src={service.visualImage}
                  alt={`${service.title} visual system map`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-eyebrow">Plain English</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  What this actually means
                </h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  {plainLanguageBySlug[service.slug]}
                </p>
                <div className="mt-6 border-t border-[var(--border-subtle)] pt-5">
                  <p className="text-eyebrow">Best for</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground-secondary)]">
                    {whoForBySlug[service.slug]}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <PlatformEcosystemStrip
          compact
          eyebrow="Tool ecosystem"
          title="Built around the stack your work already touches."
          description={`For ${service.title}, we plan the client-facing platforms, developer tools, automation layers, and AI touchpoints together so the final system feels connected instead of patched together.`}
          items={platformStripItems}
        />

        <Section id="understanding" className="section-divider">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
              <div>
                <p className="text-eyebrow">Business outcome</p>
                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  The point is not just technology. It is a better way to run the business.
                </h2>
              </div>
              <div className="space-y-6">
                <ContentPanel title="Problem this solves">
                  <p>{service.problem}</p>
                </ContentPanel>
                <ContentPanel title="What we build">
                  <BulletList items={service.builds} />
                </ContentPanel>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="scope" className="section-divider">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <ContentPanel title="Example use cases">
                <BulletList items={service.useCases} />
              </ContentPanel>
              <ContentPanel title="Technical reader notes">
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--foreground-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </ContentPanel>
              <ContentPanel title="Tools we may connect">
                <div className="flex flex-wrap gap-2">
                  {service.platforms.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--foreground-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </ContentPanel>
            </div>
          </Container>
        </Section>

        <Section id="integration-fit" className="section-divider">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-eyebrow">AI and integrations</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  The system can keep moving after the first version.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <ContentPanel title="How this can connect">
                  <BulletList items={service.integrationIdeas} />
                </ContentPanel>
                <ContentPanel title="Developer toolkit">
                  <div className="flex flex-wrap gap-2">
                    {service.developerTools.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--foreground-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4">
                    We choose the exact implementation stack based on data access, security,
                    maintainability, budget, and the tools your team already uses.
                  </p>
                </ContentPanel>
              </div>
            </div>
          </Container>
        </Section>

        <Section id="process" className="section-divider">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-eyebrow">How delivery works</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Clear sequence, fewer surprises.
                </h2>
              </div>
              <ol className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                {service.process.map((step, index) => (
                  <li key={step} className="grid gap-3 py-5 md:grid-cols-[4rem_1fr]">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-7 text-[var(--foreground-secondary)] md:text-base">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        <Section id="package" className="section-divider">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              <ContentPanel title="Typical investment">
                <p>{service.pricingRange}</p>
              </ContentPanel>
              <ContentPanel title="Deliverables">
                <BulletList items={service.deliverables} />
              </ContentPanel>
            </div>
          </Container>
        </Section>

        <Section id="faq" className="section-divider">
          <Container>
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-eyebrow">FAQ</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Common questions
                </h2>
              </div>
              <div className="space-y-3">
                {service.faq.map((item) => (
                  <div key={item.question} className="border-b border-[var(--border-subtle)] pb-5">
                    <h3 className="text-base font-medium text-foreground">{item.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground md:text-base">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section id="related" className="section-divider">
          <Container>
            <ContentPanel title="Related services">
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--foreground-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </ContentPanel>
          </Container>
        </Section>

        <Section id="contact" className="section-divider pb-16">
          <Container>
            <div className="premium-media rounded-[var(--radius-xl)] p-6 md:p-8">
              <p className="text-eyebrow">Next step</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {service.ctaTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                {service.ctaText}
              </p>
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-6")}>
                Share your idea
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}

function ContentPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] p-5 md:p-6">
      <p className="text-eyebrow">{title}</p>
      <div className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground md:text-base">
          <CheckCircle2 size={16} className="mt-1 shrink-0 text-accent" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
