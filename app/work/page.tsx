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
    "Selected project examples and delivery patterns from LogicForm Systems across websites, dashboards, automation, and business systems.",
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
                <GlassCard key={project.id} className="flex flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-eyebrow">{project.label}</p>
                      {project.sublabel && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{project.sublabel}</p>
                      )}
                    </div>
                    {project.isConcept && (
                      <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface-inset)] px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wider text-muted-foreground">
                        Concept · Internal
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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
                  ) : project.isConcept ? (
                    <p className="mt-4 text-xs text-muted-foreground italic">
                      Internal concept — not a live client project
                    </p>
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
