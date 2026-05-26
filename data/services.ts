export type ServiceIcon =
  | "globe"
  | "bot"
  | "chart"
  | "layers"
  | "operations"
  | "cloud"
  | "book";

export type ServiceDetail = {
  overview: string;
  useCases: string[];
  included: string[];
  technicalApproach: string;
  startingPrice: string;
  timeline: string;
  ctaLabel: string;
};

export type ServiceOffering = {
  id: string;
  label: string;
  title: string;
  fullPageHref: string;
  previewTagline: string;
  icon: ServiceIcon;
  description: string;
  outcomes: string[];
  capabilities: string[];
  detail: ServiceDetail;
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "websites-digital-presence",
    label: "Service 01",
    title: "Websites & Digital Presence",
    fullPageHref: "/services/websites",
    previewTagline: "Credible websites built for speed, structure, and conversion.",
    icon: "globe",
    description:
      "Modern business websites, landing pages, product websites, and professional portfolios built with responsive design, SEO structure, and performance in mind.",
    outcomes: [
      "A credible digital presence that reflects your business clearly",
      "Structure built for search, speed, and mobile visitors",
      "Pages designed to support leads, trust, and conversions",
    ],
    capabilities: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Website redesign",
      "SEO-ready structure",
    ],
    detail: {
      overview:
        "Modern websites, landing pages, product websites, and portfolios built for credibility, speed, and conversion.",
      useCases: [
        "Business website",
        "Landing page",
        "Product website",
        "Portfolio",
        "Website redesign",
      ],
      included: [
        "Structure and strategy",
        "Responsive UI",
        "SEO-ready setup",
        "Contact integration",
        "Deployment",
      ],
      technicalApproach:
        "Next.js, TypeScript, Tailwind CSS, SEO metadata, performance optimization, responsive design.",
      startingPrice: "From €999",
      timeline: "1–2 weeks",
      ctaLabel: "Start Website Project",
    },
  },
  {
    id: "ai-workflow-automation",
    label: "Service 02",
    title: "AI & Workflow Automation",
    fullPageHref: "/services/ai-automation",
    previewTagline: "Automate repetitive work with human approval where it matters.",
    icon: "bot",
    description:
      "AI-first workflows and automation systems that reduce repetitive work while keeping human approval where judgment matters.",
    outcomes: [
      "Less time lost to manual, repetitive tasks",
      "Automation with clear human checkpoints where needed",
      "Connected tools that support daily operations",
    ],
    capabilities: [
      "AI workflow automation",
      "Email and document automation",
      "Human-in-the-loop approvals",
      "Tool integrations",
      "Prompt and workflow design",
    ],
    detail: {
      overview:
        "AI-powered workflows that connect your tools, reduce manual steps, and keep people in control of important decisions.",
      useCases: [
        "Email and document automation",
        "Approval workflows",
        "Internal task routing",
        "CRM or ops integrations",
        "AI-assisted reporting",
      ],
      included: [
        "Workflow planning",
        "Automation setup",
        "Human approval logic",
        "Tool integration",
        "Testing and documentation",
      ],
      technicalApproach:
        "Workflow orchestration, API integrations, LLM-assisted steps, logging, and human-in-the-loop checkpoints.",
      startingPrice: "From €2,500",
      timeline: "2–5 weeks",
      ctaLabel: "Build AI Workflow",
    },
  },
  {
    id: "dashboards-reporting",
    label: "Service 03",
    title: "Dashboards & Reporting Systems",
    fullPageHref: "/services/dashboards",
    previewTagline: "Operational dashboards that turn data into clear decisions.",
    icon: "chart",
    description:
      "Operational dashboards and reporting systems that help businesses understand performance, track KPIs, and make better decisions.",
    outcomes: [
      "Clear visibility into performance and key metrics",
      "Reporting that replaces scattered spreadsheets",
      "Faster decisions backed by structured data",
    ],
    capabilities: [
      "Business dashboards",
      "CRM dashboards",
      "SQL reporting",
      "Google Sheets / Excel automation",
      "AI-powered summaries",
    ],
    detail: {
      overview:
        "Dashboards and reporting systems that give teams a reliable view of performance, pipelines, and KPIs.",
      useCases: [
        "Executive KPI dashboard",
        "CRM reporting",
        "Operations tracking",
        "Sales pipeline visibility",
        "Automated weekly reports",
      ],
      included: [
        "Requirements mapping",
        "Dashboard UI",
        "Data connections",
        "Reporting logic",
        "Handover documentation",
      ],
      technicalApproach:
        "Next.js dashboards, SQL reporting, API integrations, charting, and optional AI summaries.",
      startingPrice: "From €2,500",
      timeline: "3–6 weeks",
      ctaLabel: "Scope a Dashboard",
    },
  },
  {
    id: "custom-web-applications",
    label: "Service 04",
    title: "Custom Web Applications",
    fullPageHref: "/services/custom-web-apps",
    previewTagline: "Web apps and internal tools shaped around how you work.",
    icon: "layers",
    description:
      "Full-stack web applications, admin panels, customer portals, MVPs, and internal tools designed around real business needs.",
    outcomes: [
      "Software shaped around how your team actually works",
      "A practical path from concept to usable product",
      "Systems that can grow with new features and users",
    ],
    capabilities: [
      "SaaS MVPs",
      "Admin panels",
      "Customer portals",
      "Internal tools",
      "API integrations",
    ],
    detail: {
      overview:
        "Custom web applications, admin panels, portals, and MVPs designed around real workflows—not generic templates.",
      useCases: [
        "SaaS MVP",
        "Admin panel",
        "Customer portal",
        "Internal ops tool",
        "API-backed product",
      ],
      included: [
        "Requirements mapping",
        "Application UI",
        "API and data foundations",
        "Authentication-ready structure",
        "Deployment and handover",
      ],
      technicalApproach:
        "Next.js, TypeScript, REST APIs, SQL databases, role-based access, and modular architecture.",
      startingPrice: "From €2,500",
      timeline: "3–6 weeks",
      ctaLabel: "Scope a System",
    },
  },
  {
    id: "it-systems-operations",
    label: "Service 05",
    title: "IT Systems & Operations",
    fullPageHref: "/services/it-operations",
    previewTagline: "Practical IT workflows, access, and documentation for daily ops.",
    icon: "operations",
    description:
      "Practical IT systems support for teams that need better workflows, access management, documentation, and operational reliability.",
    outcomes: [
      "Cleaner access and identity practices",
      "Documented workflows teams can follow consistently",
      "More reliable day-to-day internal operations",
    ],
    capabilities: [
      "Google Workspace setup",
      "Jira and Atlassian workflows",
      "Access and identity processes",
      "SOP documentation",
      "Troubleshooting systems",
    ],
    detail: {
      overview:
        "Hands-on IT systems support for access, workflows, documentation, and operational reliability.",
      useCases: [
        "Workspace setup",
        "Jira / Atlassian workflows",
        "Access management",
        "SOP documentation",
        "Internal support processes",
      ],
      included: [
        "Process review",
        "Tool configuration",
        "Access workflows",
        "Documentation",
        "Troubleshooting support",
      ],
      technicalApproach:
        "Google Workspace, Atlassian, identity workflows, SOP structure, and practical operational tooling.",
      startingPrice: "From €750",
      timeline: "1–4 weeks",
      ctaLabel: "Discuss IT Support",
    },
  },
  {
    id: "cloud-deployment-maintenance",
    label: "Service 06",
    title: "Cloud, Deployment & Maintenance",
    fullPageHref: "/services/cloud-maintenance",
    previewTagline: "Deploy, monitor, and maintain systems your business relies on.",
    icon: "cloud",
    description:
      "Deployment, hosting, domain setup, monitoring, performance optimization, and ongoing technical maintenance for business-critical systems.",
    outcomes: [
      "Stable hosting and deployment for live systems",
      "Domains, email, and monitoring set up properly",
      "Ongoing care so critical tools stay dependable",
    ],
    capabilities: [
      "Vercel deployment",
      "Domain and email setup",
      "Monitoring setup",
      "Performance optimization",
      "Monthly maintenance",
    ],
    detail: {
      overview:
        "Deployment, hosting, domains, monitoring, and ongoing maintenance for business-critical systems.",
      useCases: [
        "Website deployment",
        "App hosting",
        "Domain and email setup",
        "Performance tuning",
        "Monthly maintenance",
      ],
      included: [
        "Deployment setup",
        "Domain configuration",
        "Monitoring foundations",
        "Performance review",
        "Maintenance plan",
      ],
      technicalApproach:
        "Vercel, DNS, SSL, observability basics, performance optimization, and structured release practices.",
      startingPrice: "From €750/month",
      timeline: "Ongoing",
      ctaLabel: "Discuss Maintenance",
    },
  },
  {
    id: "strategy-training-documentation",
    label: "Service 07",
    title: "Strategy, Training & Documentation",
    fullPageHref: "/services/systems-audit",
    previewTagline: "Clear guidance so teams can adopt systems with confidence.",
    icon: "book",
    description:
      "Technical strategy, team training, and documentation that helps businesses adopt new systems without losing operational clarity.",
    outcomes: [
      "Clearer decisions before major build commitments",
      "Teams that understand how to use new systems",
      "Documentation that supports onboarding and operations",
    ],
    capabilities: [
      "Technical discovery sessions",
      "System roadmap planning",
      "Team training workshops",
      "SOP and user documentation",
      "Handover playbooks",
    ],
    detail: {
      overview:
        "Strategy sessions, training, and documentation that help teams plan, adopt, and operate new systems effectively.",
      useCases: [
        "Technical discovery",
        "Roadmap planning",
        "Team onboarding",
        "SOP documentation",
        "Tool adoption training",
      ],
      included: [
        "Discovery sessions",
        "Written recommendations",
        "Training walkthroughs",
        "Documentation templates",
        "Handover materials",
      ],
      technicalApproach:
        "Structured discovery, architecture notes, practical documentation, and workshop-style training.",
      startingPrice: "From €750",
      timeline: "1–3 weeks",
      ctaLabel: "Book a Strategy Session",
    },
  },
];
