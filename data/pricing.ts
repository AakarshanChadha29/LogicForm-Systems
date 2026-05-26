export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  timeline: string;
  ctaLabel: string;
  recommended?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "digital-systems-audit",
    name: "Digital Systems Audit",
    price: "€2,000–€4,500",
    bestFor: "Businesses that need clarity before building.",
    includes: [
      "Website/system review",
      "Workflow review",
      "Automation opportunities",
      "Dashboard opportunities",
      "AI readiness",
      "Implementation roadmap",
    ],
    timeline: "1–2 weeks",
    ctaLabel: "Start Audit",
  },
  {
    id: "launch-website",
    name: "Launch Website System",
    price: "From €3,000",
    bestFor: "Small businesses, consultants, founders.",
    includes: [
      "Responsive website",
      "SEO-ready setup",
      "Contact/WhatsApp integration",
      "Deployment",
      "Basic analytics",
    ],
    timeline: "1–2 weeks",
    ctaLabel: "Launch Website",
  },
  {
    id: "premium-website-system",
    name: "Premium Website System",
    price: "From €6,500",
    bestFor: "Companies needing a stronger brand website and lead flow.",
    includes: [
      "Multi-page website",
      "Service landing pages",
      "Case study structure",
      "Advanced visual design",
      "SEO metadata and sitemap",
      "Analytics setup",
    ],
    timeline: "3–5 weeks",
    ctaLabel: "Build Premium Website",
  },
  {
    id: "dashboard-reporting-system",
    name: "Dashboard & Reporting System",
    price: "From €6,500",
    bestFor: "Businesses needing visibility over sales, operations, customers, or reports.",
    includes: [
      "Dashboard planning",
      "Data structure",
      "KPI design",
      "CRM/sheet/database integration",
      "Charts and reports",
      "Optional AI summaries",
    ],
    timeline: "3–6 weeks",
    ctaLabel: "Build Dashboard",
  },
  {
    id: "ai-workflow-system",
    name: "AI Workflow System",
    price: "From €7,500",
    bestFor: "Businesses with repetitive workflows and disconnected tools.",
    includes: [
      "Workflow mapping",
      "AI-assisted process",
      "Human approval logic",
      "API/tool integrations",
      "Testing",
      "Documentation",
    ],
    timeline: "3–6 weeks",
    ctaLabel: "Build AI Workflow",
  },
  {
    id: "business-systems-build",
    name: "Business Systems Build",
    price: "From €15,000",
    bestFor: "Dashboards, internal tools, portals, CRM-style systems, MVPs.",
    includes: [
      "Requirements mapping",
      "Full-stack build",
      "Database/API foundations",
      "Dashboard/admin interface",
      "Deployment",
      "Handover documentation",
    ],
    timeline: "4–8 weeks",
    ctaLabel: "Scope Business System",
    recommended: true,
  },
  {
    id: "technical-partner",
    name: "Technical Partner",
    price: "From €2,500/month",
    bestFor: "Ongoing technical support, improvements, automation, deployment.",
    includes: [
      "Monthly support",
      "Improvements",
      "Automation monitoring",
      "Troubleshooting",
      "Documentation",
      "Technical roadmap",
    ],
    timeline: "Ongoing",
    ctaLabel: "Discuss Partnership",
  },
];

export const pricingNote =
  "Launch partner pricing may be available for selected companies, case-study projects, or long-term partnerships. Final pricing depends on scope, integrations, timeline, data complexity, automation risk, and support requirements.";
