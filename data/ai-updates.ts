export type AiUpdate = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  sections: Array<{ heading: string; body: string }>;
};

export const aiUpdates: AiUpdate[] = [
  {
    slug: "ai-agents-for-business-operations",
    title: "AI Agents for Business Operations",
    summary:
      "Where agent-style automation helps operations—and where it creates unnecessary risk for small teams.",
    date: "2026-05-20",
    sections: [
      {
        heading: "Use agents for bounded tasks",
        body: "Agents work best when scope is clear: summarizing inbound requests, preparing draft responses, or collecting data from known systems.",
      },
      {
        heading: "Avoid open-ended autonomy early",
        body: "Most businesses benefit more from structured workflows with AI assist steps than from fully autonomous agents.",
      },
    ],
  },
  {
    slug: "human-in-the-loop-automation",
    title: "Human-in-the-Loop Automation",
    summary:
      "Why approval checkpoints make AI-assisted workflows safer and more adoptable inside real businesses.",
    date: "2026-05-23",
    sections: [
      {
        heading: "Automation should accelerate, not replace judgment",
        body: "Human review points protect quality on customer-facing actions, financial decisions, and compliance-sensitive workflows.",
      },
      {
        heading: "Design approvals into the workflow",
        body: "The best systems show what changed, why it changed, and who approved it—creating operational trust.",
      },
    ],
  },
  {
    slug: "ai-workflow-risks-for-small-teams",
    title: "AI Workflow Risks for Small Teams",
    summary:
      "Common pitfalls when small teams adopt AI automation without process clarity or ownership.",
    date: "2026-05-25",
    sections: [
      {
        heading: "Tool sprawl without system design",
        body: "Adding AI tools to disconnected processes often increases complexity instead of reducing it.",
      },
      {
        heading: "Missing documentation and fallback paths",
        body: "Every automated workflow needs a manual fallback, logging, and a named owner for maintenance.",
      },
    ],
  },
];

export const aiUpdateBySlug = Object.fromEntries(aiUpdates.map((item) => [item.slug, item])) as Record<
  string,
  AiUpdate
>;
