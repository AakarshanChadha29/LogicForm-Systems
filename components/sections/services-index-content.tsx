import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { PlatformEcosystemStrip } from "@/components/sections/platform-ecosystem-strip";
import { serviceOfferings, type ServiceOffering } from "@/data/services";
import { serviceIconMap } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

const catalogOrder = [
  "websites-digital-presence",
  "custom-web-applications",
  "dashboards-reporting",
  "ai-workflow-automation",
  "cloud-deployment-maintenance",
  "it-systems-operations",
  "strategy-training-documentation",
] as const;

const orderedServices = catalogOrder
  .map((id) => serviceOfferings.find((service) => service.id === id))
  .filter((service): service is ServiceOffering => Boolean(service));

export function ServicesIndexContent() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Services"
          title="Choose the system your business actually needs"
          description="Explore the core service paths, or use the Logicform Finder if you are not sure whether the next step is a website, app, dashboard, client system, or automation."
        />

        <PlatformEcosystemStrip compact className="!pt-0" />

        <Section id="service-guidance" className="section-divider !py-10">
          <Container>
            <div className="grid gap-5 border-y border-[var(--border-subtle)] py-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-eyebrow">Guided route</p>
                <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  If you are unsure, let the Finder point you to the right service path.
                </h2>
              </div>
              <Link href="/finder" className={cn(buttonVariants({ size: "lg" }), "w-full md:w-auto")}>
                Take the finder
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>

        <Section id="services-catalogue" className="section-divider pb-16">
          <Container>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {orderedServices.map((service) => {
                const Icon = serviceIconMap[service.icon];
                return (
                  <GlassCard key={service.id} interactive className="flex h-full flex-col p-6">
                    <span className="inline-flex w-fit rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                      <Icon size={18} aria-hidden />
                    </span>
                    <h2 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Link
                      href={service.fullPageHref}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                    >
                      Understand this service
                      <ArrowRight size={14} aria-hidden />
                    </Link>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--foreground-secondary)] hover:text-foreground"
                    >
                      Get guidance
                      <ArrowRight size={14} aria-hidden />
                    </Link>
                  </GlassCard>
                );
              })}
            </div>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-inset)] p-5">
              <p className="text-sm text-muted-foreground">
                Need clarity before building? Explore the{" "}
                <Link href="/services/systems-audit" className="text-accent hover:text-[var(--accent-hover)]">
                  Digital Systems & AI Audit
                </Link>{" "}
                or view{" "}
                <Link href="/pricing" className="text-accent hover:text-[var(--accent-hover)]">
                  pricing anchors
                </Link>
                .
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
