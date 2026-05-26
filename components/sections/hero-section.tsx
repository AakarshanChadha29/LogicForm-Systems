"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LogicformSystemsConsole } from "@/components/sections/logicform-systems-console";
import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="hero" className="!pt-[calc(4.25rem+1.5rem)] !pb-10 md:!pt-[calc(4.25rem+2.5rem)]">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14"
        >
          <div>
            <span className="badge-pill px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)]">
              Digital systems for modern businesses
            </span>

            <h1 className="mt-5 max-w-[16ch] text-balance text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem]">
              <span className="gold-gradient-text">Turn Business Chaos</span>{" "}
              <span className="text-foreground">Into Working Digital Systems</span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Logicform Systems builds websites, automations, dashboards, internal tools, and
              AI-assisted workflows that help businesses work faster without losing human control.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project
              </Link>
              <Link href="#services" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                Explore Systems
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" aria-hidden />
                Germany · Europe · International
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" aria-hidden />
                From €999
              </span>
            </div>
          </div>

          <LogicformSystemsConsole className="w-full lg:justify-self-end" />
        </motion.div>
      </Container>
    </Section>
  );
}
