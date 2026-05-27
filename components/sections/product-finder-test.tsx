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
  { explanation: string; plainMeaning: string; firstStep: string; features: string[]; href: string }
> = {
  website: {
    explanation:
      "Your first problem is probably trust and clarity. People need to understand what you do, why it matters, and how to contact you without confusion.",
    plainMeaning:
      "A Website System is not just pages. It is your business story, service explanation, lead capture, analytics, and the first step into your sales process.",
    firstStep: "Start with your offer, audience, pages, contact flow, and launch plan.",
    features: ["Clear service pages", "Trust-building structure", "Contact and lead flow", "Analytics and SEO basics"],
    href: "/services/websites",
  },
  webApp: {
    explanation:
      "Your work does not fit inside a normal template or simple form. You may need a custom online system built around your exact process.",
    plainMeaning:
      "A Custom Web App can be a client portal, admin panel, booking system, MVP, internal tool, or private workspace with logins and custom rules.",
    firstStep: "Start by mapping users, actions, data, permissions, and the workflow the app must support.",
    features: ["Custom workflow", "Login or role access", "Data and API layer", "Production deployment"],
    href: "/services/custom-web-apps",
  },
  dashboard: {
    explanation:
      "Your business needs clearer visibility. The issue is not only collecting data; it is making the right numbers easy to see and act on.",
    plainMeaning:
      "A Dashboard brings scattered numbers into one view: sales, leads, projects, revenue, delivery, customers, or operations.",
    firstStep: "Start by choosing the decisions you want the dashboard to help you make.",
    features: ["Important metrics", "Data source connections", "Leadership views", "Automated reporting"],
    href: "/services/dashboards",
  },
  crm: {
    explanation:
      "Your lead or client process needs structure. The pain is probably missed follow-ups, scattered notes, unclear stages, or poor handoffs.",
    plainMeaning:
      "A CRM / Client System keeps clients, leads, stages, tasks, notes, reminders, and account history in one place.",
    firstStep: "Start by defining your client stages and what should happen at each stage.",
    features: ["Client records", "Pipeline stages", "Follow-up reminders", "Reporting and handoffs"],
    href: "/services/custom-web-apps",
  },
  automation: {
    explanation:
      "Your team is spending too much time on repeat work. The right move may be to connect tools and let routine steps happen automatically.",
    plainMeaning:
      "An Automation System moves information between tools, creates reminders, drafts summaries, routes requests, and can use AI where it saves time.",
    firstStep: "Start with one repeated workflow that wastes time every week.",
    features: ["Workflow mapping", "AI-assisted steps", "Human approval points", "Monitoring and fallback logic"],
    href: "/services/ai-automation",
  },
};

const finderQuestions: FinderQuestion[] = [
  {
    question: "What are you trying to fix first?",
    options: [
      {
        label: "People should understand us and contact us",
        detail: "This usually means your website, message, service pages, and contact flow need to be stronger.",
        scores: { website: 3, crm: 1 },
      },
      {
        label: "We lose track of leads or clients",
        detail: "This usually means you need a cleaner place for client stages, notes, follow-ups, and tasks.",
        scores: { crm: 3, webApp: 1 },
      },
      {
        label: "We cannot see the numbers clearly",
        detail: "This usually means your data is scattered and needs to become one simple decision view.",
        scores: { dashboard: 3, automation: 1 },
      },
      {
        label: "Too much work is repeated manually",
        detail: "This usually means the same emails, files, reminders, updates, or approvals happen again and again.",
        scores: { automation: 3, dashboard: 1 },
      },
      {
        label: "We need a custom online tool",
        detail: "This usually means a portal, app, admin panel, booking flow, or private workspace with custom logic.",
        scores: { webApp: 3, crm: 1 },
      },
    ],
  },
  {
    question: "Where does the problem happen most?",
    options: [
      { label: "Before someone becomes a client", detail: "They are researching, comparing, reading, or deciding whether to trust you.", scores: { website: 3 } },
      { label: "When managing clients or projects", detail: "The problem is in follow-ups, stages, notes, ownership, or daily delivery.", scores: { crm: 2, webApp: 2 } },
      { label: "In reports and meetings", detail: "People ask for updates because the current numbers are not easy to find.", scores: { dashboard: 3 } },
      { label: "Between different tools", detail: "Information has to move from one app, inbox, sheet, or system to another.", scores: { automation: 3 } },
    ],
  },
  {
    question: "What result would feel most valuable?",
    options: [
      { label: "More serious enquiries", detail: "The right people understand the offer and know exactly how to reach out.", scores: { website: 3 } },
      { label: "One clean client view", detail: "You can see who needs attention, what stage they are in, and what happens next.", scores: { crm: 3, dashboard: 1 } },
      { label: "Numbers that update themselves", detail: "Reports become easier because the important numbers are already visible.", scores: { dashboard: 3, automation: 1 } },
      { label: "Less admin every week", detail: "Routine updates, reminders, summaries, and handoffs happen with less manual work.", scores: { automation: 3 } },
      { label: "A system built around our way of working", detail: "The business needs something more specific than a template or standard SaaS tool.", scores: { webApp: 3 } },
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
              Not sure what to build? Start with the problem.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Choose the sentence that sounds closest to your situation. You do not need technical
              words. The test translates your business pain into the right starting direction:
              website, app, dashboard, client system, or automation.
            </p>
            <div className="mt-5 grid max-w-xl gap-2 text-sm text-[var(--foreground-secondary)]">
              {[
                "Website: people need to understand and trust you.",
                "Dashboard: you need clearer numbers.",
                "Automation: repeated work should happen faster.",
                "Client system: leads and clients need a clean process.",
              ].map((item) => (
                <p key={item} className="border-l border-[var(--border-strong)] pl-3">
                  {item}
                </p>
              ))}
            </div>
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
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Pick the closest option. It does not need to be perfect; this is only a first
                  direction.
                </p>
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
                <div className="mt-5 grid gap-3">
                  <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      What that means
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {recommendation.plainMeaning}
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      First practical step
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {recommendation.firstStep}
                    </p>
                  </div>
                </div>
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
                    Send this result
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
