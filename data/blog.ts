export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  sections: Array<{ heading: string; body: string }>;
  ctaHref: string;
  ctaLabel: string;
  sources?: Array<{ label: string; href: string }>;
};

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export const blogPosts: BlogPost[] = [
  {
    slug: "eu-ai-act-readiness-august-2026",
    title: "EU AI Act Readiness: What Businesses Should Prepare Before August 2026",
    description:
      "A practical systems checklist for teams using AI in workflows, dashboards, customer communication, and internal operations.",
    date: "2026-05-27",
    category: "Compliance",
    readingTime: "7 min read",
    ctaHref: "/services/ai-governance",
    ctaLabel: "Start AI Governance Review",
    sources: [
      {
        label: "EU AI Act — EUR-Lex Official Text",
        href: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
      },
      {
        label: "European Commission — AI Act timeline",
        href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
      },
      {
        label: "EU AI Office — Compliance guidance",
        href: "https://digital-strategy.ec.europa.eu/en/policies/ai-office",
      },
    ],
    sections: [
      {
        heading: "Treat AI readiness as systems work",
        body: "The useful question is not simply whether a tool uses AI. It is where AI touches business data, who can approve outputs, what gets logged, and which workflows depend on automated decisions.",
      },
      {
        heading: "Map every AI-assisted workflow",
        body: "Create a register of AI use cases across marketing, support, sales, operations, reporting, and internal tools. For each workflow, record the purpose, data inputs, provider, human review point, and business impact if the output is wrong.",
      },
      {
        heading: "Watch the August 2026 milestone",
        body: "European Commission guidance states that the AI Act applies progressively, with major rules becoming applicable around 2 August 2026 and some exceptions for later dates. Timelines and support measures may change, so teams should verify current official guidance before making compliance decisions.",
      },
      {
        heading: "Build controls before the deadline",
        body: "Practical preparation includes access control, prompt and output review, data minimisation, vendor checks, incident handling, audit trails, and clear ownership for AI-assisted processes. These controls also make the business easier to operate.",
      },
    ],
  },
  {
    slug: "choose-right-business-automation-system",
    title: "How to Choose the Right Business Automation System",
    description:
      "A practical guide to selecting automation that fits your workflows, team size, and operational risk profile.",
    date: "2026-05-10",
    category: "Automation",
    readingTime: "6 min read",
    ctaHref: "/services/ai-automation",
    ctaLabel: "Explore AI Workflow Automation",
    sources: [
      {
        label: "McKinsey — The state of AI in 2024",
        href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
      },
      {
        label: "Gartner — Business process automation market",
        href: "https://www.gartner.com/en/information-technology/insights/business-process-automation",
      },
    ],
    sections: [
      {
        heading: "Start with workflow pain, not tools",
        body: "The best automation projects begin with a clear operational bottleneck: repeated data entry, slow approvals, or disconnected handoffs between teams.",
      },
      {
        heading: "Evaluate integration requirements early",
        body: "List the systems involved—CRM, email, spreadsheets, support tools—and confirm whether data ownership and access permissions are understood before build starts.",
      },
      {
        heading: "Keep human control where judgment matters",
        body: "Automate repetitive execution, but preserve review steps for pricing, compliance, customer communication, and strategic decisions.",
      },
    ],
  },
  {
    slug: "website-vs-web-application",
    title: "Website vs Web Application: What Does Your Business Need?",
    description:
      "Understand when a marketing website is enough and when your business requires a custom web application or internal tool.",
    date: "2026-05-12",
    category: "Strategy",
    readingTime: "5 min read",
    ctaHref: "/services/custom-web-apps",
    ctaLabel: "Explore Custom Web Applications",
    sources: [
      {
        label: "Statista — Global website count 2024",
        href: "https://www.statista.com/statistics/1327521/number-of-websites-worldwide/",
      },
      {
        label: "W3Techs — Web technology usage statistics",
        href: "https://w3techs.com/technologies",
      },
    ],
    sections: [
      {
        heading: "Websites explain and convert",
        body: "A website system is ideal when your primary goal is credibility, lead capture, service clarity, and brand positioning.",
      },
      {
        heading: "Web applications operate the business",
        body: "Custom web apps make sense when teams need login areas, workflows, dashboards, customer portals, or product functionality beyond static pages.",
      },
      {
        heading: "Many businesses need both over time",
        body: "A strong website can be phase one, followed by dashboards, automations, and internal tools as operations mature.",
      },
    ],
  },
  {
    slug: "why-growing-businesses-need-dashboards",
    title: "Why Growing Businesses Need Operational Dashboards",
    description:
      "Dashboards turn scattered reporting into one operational view for sales, delivery, support, and leadership decisions.",
    date: "2026-05-15",
    category: "Dashboards",
    readingTime: "5 min read",
    ctaHref: "/services/dashboards",
    ctaLabel: "Explore Dashboards & Reporting",
    sources: [
      {
        label: "Tableau — State of Data & Analytics",
        href: "https://www.tableau.com/reports/data-trends",
      },
      {
        label: "Gartner — Data & Analytics leadership survey",
        href: "https://www.gartner.com/en/data-analytics",
      },
    ],
    sections: [
      {
        heading: "Scattered data kills decision speed",
        body: "When key numbers live in spreadsheets, email threads, and disconnected tools, leadership spends more time finding data than acting on it.",
      },
      {
        heading: "One view changes how teams operate",
        body: "An operational dashboard that shows sales pipeline, delivery status, support volume, and key KPIs in one place reduces meeting load, clarifies priorities, and surfaces problems early.",
      },
      {
        heading: "Start with the decisions you need to make",
        body: "The best dashboards are built backwards from real decisions: what does a team leader need to know every morning to run their area well?",
      },
    ],
  },
  {
    slug: "ai-in-business-operations",
    title: "AI in Business Operations: Where It Actually Helps",
    description:
      "A grounded look at where AI creates real operational value and where the hype still outpaces the reality for most businesses.",
    date: "2026-05-18",
    category: "AI",
    readingTime: "6 min read",
    ctaHref: "/services/ai-automation",
    ctaLabel: "Map an AI Workflow",
    sources: [
      {
        label: "McKinsey Global Institute — AI and the future of work",
        href: "https://www.mckinsey.com/featured-insights/artificial-intelligence/ai-automation-and-the-future-of-work-ten-things-to-solve-for",
      },
      {
        label: "OpenAI — Business use case research",
        href: "https://openai.com/research",
      },
      {
        label: "MIT Technology Review — AI in enterprise",
        href: "https://www.technologyreview.com/topic/artificial-intelligence/",
      },
    ],
    sections: [
      {
        heading: "High-value AI is mostly invisible",
        body: "The AI use cases delivering real ROI in most businesses are not product features — they are internal: summarising documents, routing requests, drafting first versions, and flagging anomalies in data.",
      },
      {
        heading: "Automation works best at handoff points",
        body: "Where work moves from one person, tool, or team to another is usually where time is lost. AI can reduce that friction — not by replacing judgment, but by removing the manual steps around it.",
      },
      {
        heading: "Risk follows stakes",
        body: "The higher the business impact of a wrong output, the more important human review becomes. Automate the low-stakes repetition. Keep humans in the loop for decisions that carry weight.",
      },
    ],
  },
  {
    slug: "digital-systems-audit-before-building",
    title: "Why You Should Audit Before You Build",
    description:
      "Most costly rebuild projects were avoidable. A structured audit before build commitment prevents budget waste and sets the right technical direction.",
    date: "2026-05-22",
    category: "Strategy",
    readingTime: "5 min read",
    ctaHref: "/services/systems-audit",
    ctaLabel: "Book a Systems Audit",
    sources: [
      {
        label: "Standish Group — CHAOS Report on project success rates",
        href: "https://www.standishgroup.com/",
      },
      {
        label: "McKinsey — Why do so many IT projects fail?",
        href: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value",
      },
    ],
    sections: [
      {
        heading: "Most rebuilds are unnecessary",
        body: "The most common cause of expensive rebuilds is not bad technology — it is building the wrong thing first. A short audit surfaces what actually needs to change before budget is committed.",
      },
      {
        heading: "What a good audit covers",
        body: "Current tools, workflows, data structure, bottlenecks, AI opportunities, integration dependencies, and what should be built versus bought. The output is a clear priority list with reasoning.",
      },
      {
        heading: "Speed comes from clarity",
        body: "Teams that audit first move faster in build — not slower. They know what they are building, why, and in what order. The build itself has fewer surprises.",
      },
    ],
  },
];

export const blogPostBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
);

export { formatDate };
