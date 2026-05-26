import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { serviceOfferings, type ServiceOffering } from "@/data/services";
import { serviceIconMap } from "@/lib/service-icons";

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
          title="Connected systems for modern business operations"
          description="Logicform Systems builds websites, applications, dashboards, automation, cloud infrastructure, IT operations workflows, and ongoing technical partnership."
        />

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
                      Read full service page
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
                  Digital Systems Audit
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
