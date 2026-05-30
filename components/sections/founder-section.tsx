"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, BrainCircuit, Globe2, MapPin, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/lib/site";

const credibilityMarkers = [
  "TU Berlin · Computational Engineering Sciences",
  "Remote-first delivery with cross-market business understanding",
  "IT operations experience across support, access workflows, and internal systems",
  "End-to-end ownership from requirements to production delivery",
] as const;

const capabilityMarkers = [
  { label: "AI & Automation", icon: BrainCircuit },
  { label: "Secure Infrastructure", icon: ShieldCheck },
  { label: "Full-Stack Product Engineering", icon: BadgeCheck },
  { label: "International Delivery", icon: Globe2 },
] as const;

export function FounderSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="founder" className="section-divider">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="max-w-3xl"
        >
          <p className="text-eyebrow">Founder & Technical Leadership</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {siteConfig.founders.technical.name}
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-accent" aria-hidden />
            {siteConfig.founders.technical.title} · Remote-first delivery
          </p>

          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            I combine computational engineering, IT operations, and full-stack software
            development to build practical systems that solve real business problems—not
            demo projects that fall apart in production.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {siteConfig.name} is led with a consultancy mindset: understand the operational
            context, design the right system, and deliver with discipline. My background
            spans IT support and infrastructure tooling, identity and access workflows,
            automation, dashboards, CRM-style systems, and modern product engineering with
            React, Next.js, Python, Java, and SQL.
          </p>

          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {credibilityMarkers.map((marker) => (
              <li key={marker} className="text-sm text-muted-foreground">
                <span>{marker}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {capabilityMarkers.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)] px-3 py-1.5 text-[11px] text-muted-foreground"
              >
                <Icon size={13} className="text-accent" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
