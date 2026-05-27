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
    previewTagline: "A premium website that explains your offer and turns visitors into inquiries.",
    icon: "globe",
    description:
      "Modern business websites, landing pages, product websites, and professional portfolios built to make your offer clear, trustworthy, fast, and easy to contact.",
    outcomes: [
      "A digital presence that explains what you do in plain business language",
      "Search, speed, and mobile foundations ready for real visitors",
      "A lead path that makes it easier for the right people to contact you",
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
        "Modern websites, landing pages, product websites, and portfolios built for credibility, speed, SEO structure, and lead conversion.",
      useCases: [
        "Business website",
        "Landing page",
        "Product website",
        "Portfolio",
        "Website redesign",
      ],
      included: [
        "Positioning and page structure",
        "Responsive UI and conversion sections",
        "SEO-ready metadata and performance basics",
        "Contact integration and lead path",
        "Deployment and launch handover",
      ],
      technicalApproach:
        "Next.js, TypeScript, Tailwind CSS, SEO metadata, performance optimization, responsive design.",
      startingPrice: "From €2,500",
      timeline: "2–5 weeks",
      ctaLabel: "Plan a Website",
    },
  },
  {
    id: "ai-workflow-automation",
    label: "Service 02",
    title: "AI Workflow Automation",
    fullPageHref: "/services/ai-automation",
    previewTagline: "Reduce repetitive work while keeping people in control of decisions.",
    icon: "bot",
    description:
      "AI-assisted workflows and automation systems that reduce repetitive work, connect tools, and keep human approval where judgment matters.",
    outcomes: [
      "Less time lost to manual, repetitive tasks",
      "Automation with clear human checkpoints where needed",
      "Connected tools that support daily operations instead of adding more chaos",
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
        "AI-assisted workflows that connect your tools, reduce manual steps, and keep people in control of important decisions.",
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
      startingPrice: "From €6,000",
      timeline: "3–8 weeks",
      ctaLabel: "Map an AI Workflow",
    },
  },
  {
    id: "dashboards-reporting",
    label: "Service 03",
    title: "Dashboards & Reporting",
    fullPageHref: "/services/dashboards",
    previewTagline: "Dashboards that replace scattered reports with one clear operating view.",
    icon: "chart",
    description:
      "Operational dashboards and reporting systems that help teams see performance, track KPIs, and stop relying on scattered spreadsheets.",
    outcomes: [
      "Clear visibility into performance and key metrics",
      "Reporting that replaces scattered spreadsheets and repeated manual updates",
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
        "Dashboards and reporting systems that give teams a reliable view of performance, pipelines, KPIs, and weekly decisions.",
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
      startingPrice: "From €6,000",
      timeline: "4–10 weeks",
      ctaLabel: "Scope a Dashboard",
    },
  },
  {
    id: "custom-web-applications",
    label: "Service 04",
    title: "Custom Web Applications",
    fullPageHref: "/services/custom-web-apps",
    previewTagline: "Custom portals, admin tools, and MVPs built around real workflows.",
    icon: "layers",
    description:
      "Full-stack web applications, admin panels, customer portals, MVPs, and internal tools designed around the way your team actually works.",
    outcomes: [
      "Software shaped around how your team actually works",
      "A practical path from rough idea to usable product",
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
      startingPrice: "From €8,000",
      timeline: "5–12 weeks",
      ctaLabel: "Scope a System",
    },
  },
  {
    id: "it-systems-operations",
    label: "Service 05",
    title: "IT Systems & Operations",
    fullPageHref: "/services/it-operations",
    previewTagline: "Cleaner access, documentation, and tool workflows for daily operations.",
    icon: "operations",
    description:
      "Practical IT systems support for teams that need cleaner workflows, access management, documentation, and more reliable operations.",
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
      startingPrice: "From €1,500",
      timeline: "1–4 weeks",
      ctaLabel: "Discuss IT Support",
    },
  },
  {
    id: "cloud-deployment-maintenance",
    label: "Service 06",
    title: "Cloud, Deployment & Maintenance",
    fullPageHref: "/services/cloud-maintenance",
    previewTagline: "Keep important websites, apps, and systems deployed, monitored, and cared for.",
    icon: "cloud",
    description:
      "Deployment, hosting, domain setup, monitoring, performance optimization, and ongoing technical maintenance for systems your business depends on.",
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
      startingPrice: "From €1,500/month",
      timeline: "Ongoing",
      ctaLabel: "Discuss Maintenance",
    },
  },
  {
    id: "strategy-training-documentation",
    label: "Service 07",
    title: "Digital Systems & AI Audit",
    fullPageHref: "/services/systems-audit",
    previewTagline: "A practical audit that tells you what to build, automate, or fix first.",
    icon: "book",
    description:
      "A practical audit of tools, workflows, bottlenecks, AI opportunities, and implementation priorities before you commit budget to the wrong build.",
    outcomes: [
      "Clearer decisions before major build commitments",
      "A practical roadmap for systems, AI, automation, and integrations",
      "Documentation that supports implementation and operations",
    ],
    capabilities: [
      "Systems audit",
      "AI opportunity mapping",
      "Implementation roadmap",
      "SOP and workflow documentation",
      "Handover playbooks",
    ],
    detail: {
      overview:
        "A focused audit that helps teams understand what to build, automate, connect, improve, or leave alone first.",
      useCases: [
        "Technical discovery",
        "Roadmap planning",
        "AI readiness review",
        "SOP documentation",
        "Tool and workflow audit",
      ],
      included: [
        "Discovery sessions",
        "Written recommendations",
        "AI opportunity map",
        "Documentation templates",
        "Handover materials",
      ],
      technicalApproach:
        "Structured discovery, architecture notes, practical documentation, and workshop-style training.",
      startingPrice: "From €1,200",
      timeline: "1–3 weeks",
      ctaLabel: "Book an Audit",
    },
  },
];
