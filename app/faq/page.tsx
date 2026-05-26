import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { faqItems } from "@/data/faq";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Logicform Systems services, pricing, timelines, automation, dashboards, and ongoing support.",
  path: "/faq",
});

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="FAQ"
          title="Questions before you start a project"
          description="Clear answers about what Logicform Systems builds, how projects work, and what to expect."
        />

        <Section id="faq-content" className="section-divider pb-16">
          <Container className="space-y-3">
            {faqItems.map((item) => (
              <GlassCard key={item.question} className="p-5 md:p-6">
                <h2 className="text-base font-semibold text-foreground">{item.question}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </GlassCard>
            ))}
            <p className="pt-4 text-sm text-muted-foreground">
              Still have questions? Contact{" "}
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-accent hover:text-[var(--accent-hover)]">
                {siteConfig.contactEmail}
              </a>
              .
            </p>
            <Link href="/contact" className="inline-flex text-sm font-medium text-accent hover:text-[var(--accent-hover)]">
              Go to contact page
            </Link>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
