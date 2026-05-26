export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  forDescription: string;
  includes: string[];
  timeline: string;
  ctaLabel: string;
  recommended?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "launch-website",
    name: "Launch Website",
    price: "From €999",
    forDescription:
      "Business websites, landing pages, product websites, and professional portfolios.",
    includes: [
      "Strategy and page structure",
      "Premium responsive design",
      "SEO-ready setup",
      "Contact form integration",
      "Performance optimization",
      "Deployment support",
    ],
    timeline: "1–2 weeks",
    ctaLabel: "Start Website",
  },
  {
    id: "business-systems-build",
    name: "Business Systems Build",
    price: "From €2,500",
    forDescription:
      "Dashboards, internal tools, CRM-style systems, admin panels, and automation workflows.",
    includes: [
      "Requirements mapping",
      "Dashboard or internal tool UI",
      "API and database foundations",
      "Workflow automation",
      "Deployment setup",
      "Handover documentation",
    ],
    timeline: "3–6 weeks",
    ctaLabel: "Scope a System",
    recommended: true,
  },
  {
    id: "ai-workflow-system",
    name: "AI Workflow System",
    price: "From €2,500",
    forDescription:
      "AI-powered workflows, document/email automation, human-in-the-loop approval systems, and tool integrations.",
    includes: [
      "AI workflow planning",
      "Automation setup",
      "Human approval logic",
      "Tool integration",
      "Testing and error handling",
      "Documentation",
    ],
    timeline: "2–5 weeks",
    ctaLabel: "Build AI Workflow",
  },
  {
    id: "technical-partner",
    name: "Technical Partner",
    price: "From €750/month",
    forDescription:
      "Ongoing technical support, improvements, automation, IT operations, monitoring, and roadmap support.",
    includes: [
      "Monthly engineering support",
      "Website and system updates",
      "Automation improvements",
      "Troubleshooting",
      "Documentation",
      "Technical roadmap support",
    ],
    timeline: "Ongoing",
    ctaLabel: "Discuss Partnership",
  },
];

export const pricingNote =
  "Final pricing depends on scope, integrations, timeline, and technical complexity.";
