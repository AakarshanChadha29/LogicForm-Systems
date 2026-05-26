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
};

export const blogPosts: BlogPost[] = [
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
    ctaLabel: "Explore Dashboard Systems",
    sections: [
      {
        heading: "Spreadsheets stop scaling",
        body: "As teams grow, manual reporting becomes slower, less reliable, and harder to maintain across departments.",
      },
      {
        heading: "Dashboards create shared visibility",
        body: "Role-based dashboards help leadership and operations teams see the same numbers, trends, and exceptions in real time.",
      },
      {
        heading: "Good dashboards drive action",
        body: "The goal is not more charts—it is faster decisions, clearer accountability, and fewer blind spots.",
      },
    ],
  },
  {
    slug: "ai-automation-for-small-businesses",
    title: "AI Automation for Small Businesses: What to Automate First",
    description:
      "Practical first automation targets for small teams that want speed without losing control.",
    date: "2026-05-18",
    category: "AI",
    readingTime: "6 min read",
    ctaHref: "/services/ai-automation",
    ctaLabel: "Build an AI Workflow",
    sections: [
      {
        heading: "Automate high-frequency, low-judgment tasks first",
        body: "Lead routing, document summarization, status updates, and report drafting are strong early candidates.",
      },
      {
        heading: "Avoid automating unclear processes",
        body: "If a workflow is inconsistent today, automation will usually amplify the confusion. Clarify the process first.",
      },
      {
        heading: "Measure time saved and error reduction",
        body: "Successful automation projects define success in operational terms: hours saved, fewer handoffs, faster response times.",
      },
    ],
  },
  {
    slug: "plan-custom-web-application-before-building",
    title: "How to Plan a Custom Web Application Before Building",
    description:
      "A structured planning approach for founders and operators preparing a custom app, portal, or internal system.",
    date: "2026-05-22",
    category: "Product",
    readingTime: "7 min read",
    ctaHref: "/services/systems-audit",
    ctaLabel: "Start with a Systems Audit",
    sections: [
      {
        heading: "Define the job the system must do",
        body: "Start with the operational outcome: what decision, workflow, or customer experience must improve after launch.",
      },
      {
        heading: "Map users, roles, and data ownership",
        body: "Identify who uses the system, what each role can do, and where data comes from before designing screens.",
      },
      {
        heading: "Sequence delivery in phases",
        body: "A phased roadmap reduces risk, speeds time to value, and makes budget planning more realistic.",
      },
    ],
  },
];

export const blogPostBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post])) as Record<
  string,
  BlogPost
>;
