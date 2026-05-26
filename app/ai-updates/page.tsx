import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { aiUpdates } from "@/data/ai-updates";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AI Updates",
  description:
    "Short practical updates on AI-assisted workflows, human-in-the-loop automation, and operational AI risks for businesses.",
  path: "/ai-updates",
});

export default function AiUpdatesPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="AI Updates"
          title="Practical AI changes for business operations"
          description="Short updates on how businesses can adopt AI-assisted workflows without losing control, clarity, or operational discipline."
        />

        <Section id="ai-updates-content" className="section-divider pb-16">
          <Container className="space-y-6">
            {aiUpdates.map((update) => (
              <GlassCard key={update.slug} id={update.slug} className="scroll-mt-28 p-6 md:p-8">
                <p className="text-xs text-[var(--foreground-secondary)]">{update.date}</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">{update.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{update.summary}</p>
                <div className="mt-4 space-y-4 prose-page">
                  {update.sections.map((section) => (
                    <div key={section.heading}>
                      <h3>{section.heading}</h3>
                      <p>{section.body}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
            <Link href="/contact" className="inline-flex text-sm font-medium text-accent hover:text-[var(--accent-hover)]">
              Discuss AI workflow opportunities with Logicform Systems
            </Link>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
