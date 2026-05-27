import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { legalPageBySlug, legalPages } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPageBySlug[slug];
  if (!page) return {};

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/legal/${page.slug}`,
  });
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = legalPageBySlug[slug];
  if (!page) notFound();

  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero eyebrow="Legal" title={page.title} description={page.description} />
        <Section id="legal-content" className="section-divider pb-16">
          <Container className="max-w-3xl prose-page">
            <div className="mb-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5">
              {page.lastUpdated ? (
                <p className="font-mono text-xs font-semibold uppercase text-[var(--accent)]">
                  Last updated: {page.lastUpdated}
                </p>
              ) : null}
              {page.notice ? (
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{page.notice}</p>
              ) : null}
            </div>
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
