"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, BrainCircuit, Globe2, MapPin, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig } from "@/lib/site";

const credibilityMarkers = [
  "TU Berlin · Computational Engineering Sciences",
  "Germany-based with practical Europe and India market understanding",
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
    <Section id="founder">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="max-w-4xl"
        >
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent/90">
            Founder & Technical Leadership
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {siteConfig.founderName}
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
            <MapPin size={14} className="text-accent" aria-hidden />
            {siteConfig.founderTitle} · Based in Germany
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200">
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
              <li key={marker} className="flex gap-3 text-sm text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/90" />
                <span>{marker}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {capabilityMarkers.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[11px] text-zinc-300"
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
