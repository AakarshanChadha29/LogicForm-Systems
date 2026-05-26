import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { projectCaseStudies } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected project examples and delivery patterns from Logicform Systems across websites, dashboards, automation, and business systems.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Work"
          title="Systems built for real business operations"
          description="Selected examples of websites, dashboards, automation, and connected digital systems delivered with structured execution."
        />

        <Section id="work-content" className="section-divider pb-16">
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              {projectCaseStudies.map((project) => (
                <GlassCard key={project.id} className="p-6">
                  <p className="text-eyebrow">{project.label}</p>
                  <h2 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                    >
                      View project
                      <ArrowRight size={14} aria-hidden />
                    </Link>
                  ) : null}
                </GlassCard>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
