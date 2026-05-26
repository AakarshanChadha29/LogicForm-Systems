"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  Cloud,
  Globe,
  LayoutDashboard,
  MonitorCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";

const sidebarModules = [
  { label: "Website", icon: Globe },
  { label: "Automation", icon: Workflow },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "AI Assist", icon: Bot },
  { label: "Human Review", icon: ShieldCheck },
  { label: "Deployment", icon: Cloud },
] as const;

const workflowSteps = [
  "Lead Captured",
  "AI Summary",
  "Human Approval",
  "CRM Update",
  "Report Generated",
] as const;

const statuses = [
  "System Active",
  "Human Control Enabled",
  "Workflow Synced",
  "Deployment Ready",
] as const;

export function LogicformSystemsConsole({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative min-h-[360px] md:min-h-[420px]", className)}>
      <GlassCard className="relative h-full overflow-hidden p-3 md:p-4 premium-glow">
        <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.02)_65%,transparent_100%)] blur-3xl" />

        <div className="relative rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.45)] px-3 py-2">
          <p className="text-xs font-medium text-[var(--foreground-secondary)]">
            Logicform Systems Console
          </p>
        </div>

        <div className="relative mt-3 grid gap-3 lg:grid-cols-[0.95fr_1.25fr_0.9fr]">
          <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[var(--foreground-secondary)]">
              Modules
            </p>
            <div className="mt-2 space-y-2">
              {sidebarModules.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)] px-2.5 py-2"
                >
                  <span className="rounded-[var(--radius-sm)] bg-[var(--accent-muted)] p-1 text-accent">
                    <Icon size={12} aria-hidden />
                  </span>
                  <span className="text-[11px] text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[var(--foreground-secondary)]">
              Workflow
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {workflowSteps.map((step, index) => (
                <div key={step} className="contents">
                  <motion.div
                    className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)] px-2 py-1.5 text-[10px] text-foreground md:text-[11px]"
                    animate={prefersReducedMotion ? undefined : { opacity: [0.82, 1, 0.82] }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            duration: 2.6,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.22,
                          }
                    }
                  >
                    {step}
                  </motion.div>
                  {index < workflowSteps.length - 1 ? (
                    <motion.span
                      className="text-accent"
                      aria-hidden
                      animate={prefersReducedMotion ? undefined : { opacity: [0.35, 1, 0.35] }}
                      transition={
                        prefersReducedMotion
                          ? undefined
                          : {
                              duration: 1.4,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.16,
                            }
                      }
                    >
                      →
                    </motion.span>
                  ) : null}
                </div>
              ))}
            </div>
            <motion.div
              className="mt-3 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
              animate={prefersReducedMotion ? undefined : { backgroundPositionX: ["0%", "100%"] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
              }
              style={{ backgroundSize: "220% 100%" }}
            />
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[var(--foreground-secondary)]">
              Status
            </p>
            <motion.ul
              className="mt-2 space-y-2"
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView={prefersReducedMotion ? {} : "visible"}
              viewport={{ once: true, amount: 0.45 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
              }}
            >
              {statuses.map((status) => (
                <motion.li
                  key={status}
                  className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)] px-2.5 py-2 text-[11px] text-foreground"
                  variants={
                    prefersReducedMotion
                      ? {}
                      : { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }
                  }
                >
                  <CheckCircle2 size={12} className="text-accent" aria-hidden />
                  {status}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.55)] px-3 py-2 font-mono text-[10px] text-[var(--foreground-secondary)] md:text-[11px]">
          <span className="text-accent">logicform deploy --workflow client-system</span>
          <motion.span
            aria-hidden
            className="ml-1 inline-block"
            animate={prefersReducedMotion ? undefined : { opacity: [1, 0, 1] }}
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
            }
          >
            _
          </motion.span>
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] ring-1 ring-inset ring-[rgba(255,255,255,0.04)]" />
        <MonitorCheck
          size={16}
          className="absolute right-4 top-4 text-[var(--foreground-secondary)]"
          aria-hidden
        />
      </GlassCard>
    </div>
  );
}
