import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { faqItems } from "@/data/faq";

export function FaqPreviewSection() {
  const previewItems = faqItems.slice(0, 4);

  return (
    <Section id="faq-preview" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions before you start"
          description="Straight answers about scope, pricing, timelines, and how Logicform Systems works with growing businesses."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {previewItems.map((item) => (
            <GlassCard key={item.question} className="p-5 md:p-6">
              <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </GlassCard>
          ))}
        </div>

        <Link
          href="/faq"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-[var(--accent-hover)]"
        >
          View full FAQ
          <ArrowRight size={14} aria-hidden />
        </Link>
      </Container>
    </Section>
  );
}
