export type HomepageServiceCard = {
  id: string;
  title: string;
  whoFor: string;
  includes: string[];
  outcome: string;
  href: string;
  featured?: boolean;
};

export const featuredHomepageService: HomepageServiceCard = {
  id: "business-systems-build",
  title: "Business Systems Build",
  whoFor:
    "Companies that need an operational system: dashboards, internal tools, automations, portals, or CRM-style workflows built around how the team really works.",
  includes: [
    "Requirements and workflow mapping",
    "Full-stack application or dashboard build",
    "Integrations, data foundations, and deployment",
    "Documentation and structured handover",
  ],
  outcome:
    "One connected operating layer your team can use, maintain, and explain to stakeholders.",
  href: "/contact",
  featured: true,
};

export const homepageServiceCards: HomepageServiceCard[] = [
  {
    id: "website-system",
    title: "Website System",
    whoFor: "Companies that need a credible web presence with clear positioning, conversion paths, and production-grade build quality.",
    includes: ["Responsive structure", "SEO-ready setup", "Lead capture", "Deployment"],
    outcome: "A website that supports trust, inbound interest, and cleaner lead handling.",
    href: "/services/websites",
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    whoFor: "Teams that need portals, MVPs, or internal tools shaped around actual workflows.",
    includes: ["Application architecture", "Role-based access", "API and data layer", "Production deployment"],
    outcome: "Software that fits the business instead of forcing the business around generic tools.",
    href: "/services/custom-web-apps",
  },
  {
    id: "dashboards",
    title: "Dashboards & Reporting",
    whoFor: "Operators who need live visibility over sales, delivery, customers, finance, or KPIs.",
    includes: ["KPI design", "Data connections", "Dashboard UI", "Reporting logic"],
    outcome: "Decisions based on one reliable operating view, not scattered spreadsheets.",
    href: "/services/dashboards",
  },
  {
    id: "ai-automation",
    title: "AI Workflow Automation",
    whoFor: "Businesses with repetitive handoffs across email, CRM, documents, and operations.",
    includes: ["Workflow mapping", "Automation build", "Human approval points", "Monitoring and docs"],
    outcome: "Less manual work with humans still in control where it matters.",
    href: "/services/ai-automation",
  },
  {
    id: "cloud-maintenance",
    title: "Cloud & Maintenance",
    whoFor: "Teams with live systems that need reliable hosting, domains, and ongoing care.",
    includes: ["Deployment setup", "Monitoring baseline", "Performance review", "Maintenance cadence"],
    outcome: "Critical systems stay stable, observable, and maintainable.",
    href: "/services/cloud-maintenance",
  },
  {
    id: "it-operations",
    title: "IT Operations",
    whoFor: "Growing teams that need cleaner access workflows, documentation, and support structure.",
    includes: ["Process review", "Tool configuration", "SOP documentation", "Support workflows"],
    outcome: "More reliable day-to-day operations with less friction and ambiguity.",
    href: "/services/it-operations",
  },
  {
    id: "technical-partner",
    title: "Technical Partnership",
    whoFor: "Businesses that want ongoing improvements, support, and technical roadmap execution.",
    includes: ["Monthly support", "System improvements", "Automation care", "Roadmap guidance"],
    outcome: "A lean partner model instead of agency overhead or ad-hoc freelancers.",
    href: "/services/technical-partner",
  },
];

export const whatWeBuildLayers = [
  {
    title: "Digital presence",
    detail: "Websites and landing systems that explain, convert, and connect to your operations.",
  },
  {
    title: "Applications & tools",
    detail: "Custom web apps, portals, and internal tools built around real workflows.",
  },
  {
    title: "Visibility & control",
    detail: "Dashboards and reporting that replace manual updates and scattered spreadsheets.",
  },
  {
    title: "Automation & AI",
    detail: "Workflows that accelerate execution while keeping human approval where judgment matters.",
  },
  {
    title: "Infrastructure & partnership",
    detail: "Deployment, maintenance, IT operations, and ongoing technical partnership.",
  },
] as const;
