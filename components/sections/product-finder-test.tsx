"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FinderCategory = "website" | "webApp" | "dashboard" | "crm" | "automation";

type FinderOption = {
  label: string;
  detail: string;
  scores: Partial<Record<FinderCategory, number>>;
};

type FinderQuestion = {
  question: string;
  options: FinderOption[];
};

const categoryLabels: Record<FinderCategory, string> = {
  website: "Website System",
  webApp: "Custom Web App",
  dashboard: "Dashboard",
  crm: "CRM / Client System",
  automation: "Automation System",
};

const recommendations: Record<
  FinderCategory,
  { explanation: string; features: string[]; href: string }
> = {
  website: {
    explanation:
      "You likely need a stronger public-facing system: positioning, service pages, lead capture, SEO foundations, and a reliable launch setup.",
    features: ["Clear offer structure", "Conversion-ready pages", "Contact and CRM handoff", "Analytics and SEO basics"],
    href: "/services/websites",
  },
  webApp: {
    explanation:
      "Your business probably needs software shaped around a real workflow: a portal, internal tool, MVP, or custom application.",
    features: ["Role-based workflows", "Custom interface", "Data and API layer", "Production deployment"],
    href: "/services/custom-web-apps",
  },
  dashboard: {
    explanation:
      "Your next useful system is likely visibility: one place to see KPIs, pipeline, delivery, customers, and operational signals.",
    features: ["KPI design", "Data source connections", "Leadership views", "Automated reporting"],
    href: "/services/dashboards",
  },
  crm: {
    explanation:
      "You may need a cleaner client-management layer: pipeline, account history, follow-ups, tasks, and handoffs in one operating view.",
    features: ["Client records", "Pipeline stages", "Follow-up workflows", "Reporting and reminders"],
    href: "/services/custom-web-apps",
  },
  automation: {
    explanation:
      "Your biggest gain is likely removing repetitive manual work while keeping human approval where business judgment matters.",
    features: ["Workflow mapping", "AI-assisted steps", "Human approval checkpoints", "Monitoring and fallback logic"],
    href: "/services/ai-automation",
  },
};

const finderQuestions: FinderQuestion[] = [
  {
    question: "What feels most painful right now?",
    options: [
      {
        label: "We need better leads",
        detail: "People do not understand or trust the offer quickly enough.",
        scores: { website: 3, crm: 1 },
      },
      {
        label: "Client work is hard to manage",
        detail: "Follow-ups, stages, notes, and handoffs live in too many places.",
        scores: { crm: 3, webApp: 1 },
      },
      {
        label: "We cannot see the numbers clearly",
        detail: "Reporting is scattered across tools, spreadsheets, or manual updates.",
        scores: { dashboard: 3, automation: 1 },
      },
      {
        label: "Too much work is manual",
        detail: "The team repeats the same copy-paste, email, document, or CRM tasks.",
        scores: { automation: 3, dashboard: 1 },
      },
      {
        label: "We need a custom online system",
        detail: "Off-the-shelf tools do not fit how the business actually works.",
        scores: { webApp: 3, crm: 1 },
      },
    ],
  },
  {
    question: "Where would the solution live?",
    options: [
      { label: "Public website", detail: "Visitors, prospects, and search traffic.", scores: { website: 3 } },
      { label: "Internal team workspace", detail: "Operators, sales, support, delivery, or management.", scores: { webApp: 2, dashboard: 2, crm: 1 } },
      { label: "Client or partner portal", detail: "External users need a login or shared workspace.", scores: { webApp: 3, crm: 1 } },
      { label: "Behind the scenes", detail: "The work should happen automatically across tools.", scores: { automation: 3 } },
    ],
  },
  {
    question: "What would make the business feel more under control?",
    options: [
      { label: "More serious brand presence", detail: "Clearer story, credibility, and conversion.", scores: { website: 3 } },
      { label: "One view of clients and pipeline", detail: "Who needs attention, what stage they are in, and what happens next.", scores: { crm: 3, dashboard: 1 } },
      { label: "Live dashboards", detail: "Numbers that are updated and easy to explain.", scores: { dashboard: 3 } },
      { label: "Less repetitive admin", detail: "Automated summaries, routing, reminders, and document flows.", scores: { automation: 3 } },
      { label: "A tool no template can provide", detail: "A product or workflow that needs custom logic.", scores: { webApp: 3 } },
    ],
  },
];

const emptyScores: Record<FinderCategory, number> = {
  website: 0,
  webApp: 0,
  dashboard: 0,
  crm: 0,
  automation: 0,
};

export function ProductFinderTest() {
  const [answers, setAnswers] = useState<number[]>([]);
  const activeQuestion = finderQuestions[answers.length];

  const result = useMemo(() => {
    const scores = { ...emptyScores };
    answers.forEach((optionIndex, questionIndex) => {
      const option = finderQuestions[questionIndex]?.options[optionIndex];
      if (!option) return;
      Object.entries(option.scores).forEach(([category, score]) => {
        scores[category as FinderCategory] += score ?? 0;
      });
    });

    return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "website") as FinderCategory;
  }, [answers]);

  const recommendation = recommendations[result];
  const progress = Math.round((answers.length / finderQuestions.length) * 100);

  return (
    <Section id="product-finder" className="section-divider">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-eyebrow">Product Finder Test</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Not sure what you need? Let the problem choose.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Answer a few business-focused questions and get a practical recommendation: website,
              custom web app, dashboard, CRM, or automation.
            </p>
          </div>

          <div className="premium-media overflow-hidden rounded-[var(--radius-xl)] p-5 md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
              <div>
                <p className="font-mono text-xs text-accent">logicform.finder</p>
                <p className="mt-1 text-sm text-muted-foreground">{progress}% mapped</p>
              </div>
              <button
                type="button"
                onClick={() => setAnswers([])}
                className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
                aria-label="Restart Product Finder Test"
              >
                <RotateCcw size={15} aria-hidden />
              </button>
            </div>

            {activeQuestion ? (
              <div className="pt-5">
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Question {answers.length + 1} of {finderQuestions.length}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {activeQuestion.question}
                </h3>
                <div className="mt-5 grid gap-3">
                  {activeQuestion.options.map((option, index) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setAnswers((existing) => [...existing, index])}
                      className="group rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] p-4 text-left transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-card-hover)]"
                    >
                      <span className="text-sm font-semibold text-foreground">{option.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {option.detail}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="pt-5">
                <p className="text-eyebrow">Recommended direction</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  {categoryLabels[result]}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {recommendation.explanation}
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {recommendation.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--foreground-secondary)]"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                    Share your idea
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                  <Link
                    href={recommendation.href}
                    className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "w-full sm:w-auto")}
                  >
                    Read this service
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
