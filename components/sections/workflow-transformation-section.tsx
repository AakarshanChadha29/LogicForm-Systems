"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, CheckCircle2, Database, FileText, Mail, Table2, Workflow } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const scattered = [
  { label: "Email", icon: Mail },
  { label: "Spreadsheets", icon: Table2 },
  { label: "Client notes", icon: FileText },
  { label: "Data", icon: Database },
] as const;

const systemSteps = [
  "Map the cluster",
  "Connect the tools",
  "Add AI where useful",
  "Keep human approval",
  "Move forward with a maintainable system",
] as const;

export function WorkflowTransformationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="workflow-transformation" className="section-divider">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-eyebrow">From cluster to system</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Your tools are not the problem. The missing system is.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              We turn scattered websites, spreadsheets, inboxes, CRM notes, reports, and manual
              approvals into one clearer operating layer. Then we integrate AI where it helps the
              team move faster without losing control.
            </p>
          </div>

          <div className="premium-media relative overflow-hidden rounded-[var(--radius-xl)] p-5 md:p-6">
            <div className="grid gap-5 md:grid-cols-[0.86fr_1.14fr] md:items-center">
              <div className="grid grid-cols-2 gap-3">
                {scattered.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] p-3"
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : { y: [0, index % 2 === 0 ? -5 : 5, 0], opacity: [0.72, 1, 0.72] }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            duration: 4 + index * 0.3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }
                    }
                  >
                    <Icon size={16} className="text-accent" aria-hidden />
                    <p className="mt-3 text-sm font-medium text-foreground">{label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="relative rounded-[var(--radius-lg)] border border-[var(--border)] bg-[rgba(0,0,0,0.28)] p-5">
                <motion.div
                  className="absolute -left-8 top-1/2 hidden h-[1px] w-8 bg-[var(--border-strong)] md:block"
                  animate={prefersReducedMotion ? undefined : { opacity: [0.2, 1, 0.2] }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }
                />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-muted)] text-accent">
                    <Workflow size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Logicform operating layer</p>
                    <p className="text-xs text-muted-foreground">systemised · AI-ready · maintainable</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {systemSteps.map((step, index) => (
                    <motion.div
                      key={step}
                      className="flex items-center gap-3 text-sm text-[var(--foreground-secondary)]"
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 8 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                    >
                      {index === 2 ? (
                        <BrainCircuit size={15} className="text-accent" aria-hidden />
                      ) : (
                        <CheckCircle2 size={15} className="text-accent" aria-hidden />
                      )}
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
