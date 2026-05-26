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
              Premium digital systems · Germany · Europe · India
            </span>

            <h1 className="mt-5 max-w-[18ch] text-balance text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem]">
              Build the digital system your business{" "}
              <span className="gold-gradient-text">actually needs.</span>
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Logicform Systems designs and builds premium websites, dashboards, automations, internal
              tools, and AI-assisted workflows for businesses that need clear execution, not scattered
              software experiments.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Tell us what you need
              </Link>
              <Link href="#find-your-system" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                Find the right system
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" aria-hidden />
                Websites · Apps · Dashboards · Automation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-accent" aria-hidden />
                AI-assisted execution · Human-owned decisions
              </span>
            </div>
          </div>

          <LogicformSystemsConsole className="w-full lg:justify-self-end" />
        </motion.div>
      </Container>
    </Section>
  );
}
