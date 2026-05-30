import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AI Governance Systems",
  description:
    "Practical AI governance frameworks, audit trails, risk classification, and EU AI Act compliance documentation for businesses using AI in operations.",
  path: "/services/ai-governance",
  keywords: ["EU AI Act", "AI governance", "AI compliance", "AI risk classification", "August 2026"],
});

const tiers = [
  {
    name: "AI Use Inventory",
    price: "From €1,500",
    description: "A clear register of every AI-assisted workflow, tool, and decision point across your business.",
    includes: [
      "Discovery sessions with key team members",
      "AI use case inventory document",
      "Risk classification by workflow",
      "Plain-language summary for leadership",
    ],
    timeline: "1–2 weeks",
  },
  {
    name: "Controls & Audit Trail",
    price: "From €3,000",
    description: "Human-in-the-loop controls, logging setup, and audit trails that meet regulatory expectations.",
    includes: [
      "Human approval point design",
      "Logging and audit trail implementation",
      "Access control review",
      "Incident handling documentation",
    ],
    timeline: "2–4 weeks",
    recommended: true,
  },
  {
    name: "Compliance Package",
    price: "From €5,500",
    description: "Full documentation package for EU AI Act readiness, including risk documentation and vendor reviews.",
    includes: [
      "Everything in Controls & Audit Trail",
      "EU AI Act risk documentation",
      "Vendor and provider compliance checks",
      "Data minimisation review",
      "Board-ready compliance summary",
    ],
    timeline: "3–6 weeks",
  },
  {
    name: "Ongoing Governance",
    price: "From €1,200/month",
    description: "Continuous governance support — monitoring new AI use, updating documentation, and staying ahead of regulation.",
    includes: [
      "Monthly AI use review",
      "Documentation updates",
      "New workflow risk assessment",
      "Regulatory update briefings",
    ],
    timeline: "Ongoing",
  },
];

const toolsTable = [
  { area: "Audit trails", tools: "Structured logging, database audit tables, event streams" },
  { area: "Risk classification", tools: "EU AI Act risk taxonomy, use case scoring frameworks" },
  { area: "Human-in-the-loop", tools: "Approval workflows, override interfaces, manual review queues" },
  { area: "Documentation", tools: "Policy templates, compliance checklists, vendor questionnaires" },
  { area: "Monitoring", tools: "Observability dashboards, anomaly alerts, output review sampling" },
];

export default function AIGovernancePage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="AI Governance Systems · New"
          title="Practical AI governance before the August 2026 deadline"
          description="The EU AI Act brings new obligations for businesses using AI in operations, decisions, and customer interactions. We help you map, classify, control, and document AI use — practically, not theoretically."
        />

        {/* Urgency banner */}
        <Section id="urgency" className="!py-0">
          <Container>
            <div className="rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[var(--accent-muted)] px-5 py-4">
              <p className="text-sm font-medium text-[var(--accent)]">
                August 2026 deadline approaching — major EU AI Act obligations apply from 2 August 2026.
                Teams starting now have time to do this properly.
              </p>
            </div>
          </Container>
        </Section>

        {/* Problem */}
        <Section id="problem" className="section-divider">
          <Container>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-3">The problem</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Most businesses using AI have no documented governance
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                AI tools have been adopted fast — in marketing, support, operations, reporting, and internal workflows.
                Very few businesses have a clear register of what AI touches, who approves outputs, what gets logged,
                or how to handle an incident. The EU AI Act changes that. We help you build governance that is practical
                to operate, not just a compliance box-tick.
              </p>
            </div>
          </Container>
        </Section>

        {/* Tiers */}
        <Section id="tiers" className="section-divider pb-8">
          <Container>
            <p className="text-eyebrow mb-6">Engagement tiers</p>
            <div className="grid gap-4 md:grid-cols-2">
              {tiers.map((tier) => (
                <GlassCard
                  key={tier.name}
                  className={`flex flex-col p-6 ${tier.recommended ? "border-[var(--accent)]" : ""}`}
                >
                  {tier.recommended && (
                    <span className="mb-3 self-start rounded-full border border-[var(--accent)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                  <p className="mt-1 text-2xl font-bold text-[var(--accent)]">{tier.price}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{tier.timeline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[rgba(255,255,255,0.75)]">
                        <span className="mt-0.5 text-[var(--accent)]">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </Container>
        </Section>

        {/* Tools table */}
        <Section id="tools" className="section-divider pb-8">
          <Container>
            <p className="text-eyebrow mb-6">Technical approach</p>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface-inset)]">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Area</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tools &amp; Methods</th>
                  </tr>
                </thead>
                <tbody>
                  {toolsTable.map((row, i) => (
                    <tr key={row.area} className={i < toolsTable.length - 1 ? "border-b border-[var(--border-subtle)]" : ""}>
                      <td className="px-4 py-3 font-medium text-foreground">{row.area}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section id="cta" className="section-divider pb-16">
          <Container>
            <GlassCard className="p-8 md:p-10">
              <Shield size={32} className="text-[var(--accent)] mb-4" />
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                Start your AI governance review
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
                Tell us which AI tools your team uses and where. We will map the risk, design the controls,
                and produce documentation your business can actually operate from.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                  Start AI Governance Review
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link href="/blog/eu-ai-act-readiness-august-2026" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                  Read the EU AI Act guide
                </Link>
              </div>
            </GlassCard>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
