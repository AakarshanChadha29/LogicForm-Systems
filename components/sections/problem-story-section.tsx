"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const disconnectedCards = [
  "Email",
  "Spreadsheet",
  "Website",
  "CRM",
  "WhatsApp",
  "Documents",
] as const;

const connectedCards = [
  "Website system",
  "Automation workflow",
  "Dashboard",
  "Human approval",
  "Cloud deployment",
] as const;

export function ProblemStorySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="story" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow">The Problem</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Your business has tools. But not always a system.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              Most growing businesses rely on disconnected websites, spreadsheets, emails, CRMs,
              documents, and manual workflows. Logicform Systems connects these pieces into digital
              systems that are easier to operate, automate, and scale.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <GlassCard className="mt-8 overflow-hidden p-5 md:p-7">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                  Disconnected
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {disconnectedCards.map((item, index) => (
                    <motion.div
                      key={item}
                      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2 text-xs text-muted-foreground md:text-sm"
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : { y: [0, -4, 0], opacity: [0.88, 1, 0.88] }
                      }
                      transition={
                        prefersReducedMotion
                          ? undefined
                          : {
                              duration: 4.8 + index * 0.25,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.12,
                            }
                      }
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="mx-auto flex w-full max-w-[13rem] items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--surface-card)] px-4 py-5 text-center"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 rgba(212,175,55,0.15)",
                          "0 0 30px rgba(212,175,55,0.22)",
                          "0 0 0 rgba(212,175,55,0.15)",
                        ],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                }
              >
                <p className="text-sm font-medium leading-snug text-foreground">
                  <span className="gold-gradient-text">Logicform Systems</span>
                  <br />
                  Core
                </p>
              </motion.div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Connected
                </p>
                <motion.div
                  className="mt-4 space-y-2"
                  initial={prefersReducedMotion ? false : "hidden"}
                  whileInView={prefersReducedMotion ? {} : "visible"}
                  viewport={{ once: true, amount: 0.35 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } },
                  }}
                >
                  {connectedCards.map((item) => (
                    <motion.div
                      key={item}
                      className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(212,175,55,0.09)] px-3 py-2 text-xs text-[var(--foreground-secondary)] md:text-sm"
                      variants={
                        prefersReducedMotion
                          ? {}
                          : {
                              hidden: { opacity: 0, x: 12 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                            }
                      }
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
