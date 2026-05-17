export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  forDescription: string;
  includes: string[];
  timeline: string;
  ctaLabel: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "launchpad",
    name: "Launchpad Website",
    price: "From €999",
    forDescription:
      "Business websites, product websites, landing pages, and professional portfolios.",
    includes: [
      "Strategy and page structure",
      "Premium responsive UI",
      "SEO-ready setup",
      "Contact integration",
      "Performance and accessibility optimization",
      "Deployment support",
    ],
    timeline: "1–2 weeks",
    ctaLabel: "Start Launchpad",
  },
  {
    id: "systems-build",
    name: "Systems Build",
    price: "From €2,500",
    forDescription:
      "Dashboards, CRM tools, SaaS MVPs, admin panels, and automation workflows.",
    includes: [
      "Requirements mapping",
      "Full-stack application development",
      "Dashboard/admin UI",
      "API and database foundations",
      "Authentication-ready architecture",
      "Deployment and handover documentation",
    ],
    timeline: "3–6 weeks",
    ctaLabel: "Scope a System",
  },
  {
    id: "technical-partner",
    name: "Technical Partner",
    price: "From €750/month",
    forDescription:
      "Ongoing engineering, automation, IT operations, infrastructure, improvements, and support.",
    includes: [
      "Monthly engineering support",
      "Feature updates",
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
