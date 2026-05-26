"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceDetailModal } from "@/components/sections/service-detail-modal";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { serviceOfferings, type ServiceOffering } from "@/data/services";
import { serviceIconMap } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

export function VisualServicesPreviewSection() {
  const [activeService, setActiveService] = useState<ServiceOffering | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="services" className="section-divider">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Services"
            title="System Layers We Build"
            description="Web presence, operations, analytics, and AI workflows designed as one connected system."
          />
        </ScrollReveal>

        <motion.ul
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {serviceOfferings.map((service, index) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <motion.li
                key={service.id}
                variants={
                  prefersReducedMotion
                    ? {}
                    : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }
                }
              >
                <GlassCard
                  interactive
                  className={cn(
                    "group flex h-full flex-col p-5 transition-transform",
                    index === 1 && "border-[var(--border-strong)]",
                  )}
                >
                  <span className="inline-flex w-fit rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
                    <Icon size={18} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.previewTagline}
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors group-hover:text-[var(--accent-hover)]"
                    >
                      Explore
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <Link
                      href={service.fullPageHref}
                      className="text-xs text-[var(--foreground-secondary)] transition-colors hover:text-foreground"
                    >
                      Read full page
                    </Link>
                  </div>
                </GlassCard>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>

      <ServiceDetailModal service={activeService} onClose={() => setActiveService(null)} />
    </Section>
  );
}
