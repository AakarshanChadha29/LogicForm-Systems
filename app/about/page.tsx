import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Logicform Systems is led by a technical-commercial founder pair building premium digital systems for businesses in Germany, Europe, India, and international markets.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="About"
          title="A lean digital systems company for serious operators"
          description="Logicform Systems helps businesses move from scattered tools to connected websites, applications, dashboards, automation, and long-term technical partnership."
        />

        <Section id="about-content" className="section-divider pb-16">
          <Container className="space-y-4">
            <GlassCard className="p-6 md:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Logicform Systems is led by a technical-commercial founder pair.{" "}
                {siteConfig.founders.technical.name} focuses on architecture, systems, automation,
                and implementation. {siteConfig.founders.commercial.name} focuses on commercial
                clarity, client communication, positioning, and market execution. Together, they help
                businesses build systems that are both technically strong and commercially
                understandable.
              </p>
            </GlassCard>

            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {siteConfig.founders.technical.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  {siteConfig.founders.technical.title}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Full-stack systems, automation, dashboards, IT operations, cloud deployment,
                  AI-assisted workflows, and technical architecture.
                </p>
                <a
                  href={`mailto:${siteConfig.founders.technical.email}`}
                  className="mt-3 inline-block text-sm text-accent hover:text-[var(--accent-hover)]"
                >
                  {siteConfig.founders.technical.email}
                </a>
              </GlassCard>
              <GlassCard className="p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {siteConfig.founders.commercial.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  {siteConfig.founders.commercial.title}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Sales operations, market positioning, client communication, marketing clarity,
                  partnerships, and commercial execution.
                </p>
                <a
                  href={`mailto:${siteConfig.founders.commercial.email}`}
                  className="mt-3 inline-block text-sm text-accent hover:text-[var(--accent-hover)]"
                >
                  {siteConfig.founders.commercial.email}
                </a>
              </GlassCard>
            </div>

            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Build with Logicform
            </Link>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
