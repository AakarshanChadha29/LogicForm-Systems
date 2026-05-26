import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { whatWeBuildLayers } from "@/data/homepage-services";

export function WhatWeBuildSection() {
  return (
    <Section id="what-we-build" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <SectionHeader
              eyebrow="What we build"
              title="Connected systems, not isolated deliverables"
              description="Logicform Systems designs and builds the layers businesses need to operate with clarity—from public-facing websites to internal tools, automation, and ongoing technical partnership."
              className="mb-0 max-w-none"
            />
            <GlassCard className="p-5 md:p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Most engagements combine two or more layers: a credible web presence, operational
                visibility, workflow automation, and the infrastructure to keep it running. We scope
                what matters first, then connect the rest over time.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
              >
                View full services catalogue
                <ArrowRight size={14} aria-hidden />
              </Link>
            </GlassCard>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeBuildLayers.map((layer, index) => (
            <ScrollReveal key={layer.title} delay={index * 0.05}>
              <GlassCard className="h-full p-5">
                <p className="text-sm font-semibold text-foreground">{layer.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{layer.detail}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
