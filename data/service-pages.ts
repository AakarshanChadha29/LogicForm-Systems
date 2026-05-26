export type ServicePageContent = {
  slug:
    | "systems-audit"
    | "websites"
    | "ai-automation"
    | "dashboards"
    | "custom-web-apps"
    | "it-operations"
    | "cloud-maintenance"
    | "technical-partner";
  title: string;
  description: string;
  heroSummary: string;
  visualImage: string;
  problem: string;
  builds: string[];
  useCases: string[];
  techStack: string[];
  platforms: string[];
  developerTools: string[];
  integrationIdeas: string[];
  process: string[];
  pricingRange: string;
  deliverables: string[];
  faq: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "systems-audit",
    title: "Digital Systems & AI Audit",
    description: "Technical, operational, and AI-readiness audit to decide what to build first.",
    heroSummary:
      "A structured review of your current tools, workflows, bottlenecks, and AI opportunities that produces a practical systems roadmap.",
    visualImage: "/brand/service-systems-audit.png",
    problem:
      "Many teams know operations feel fragmented but do not know where to start. Without a clear sequence, they over-buy tools, build in the wrong order, and lose momentum.",
    builds: [
      "Current-state systems map across website, CRM, data, operations, and reporting",
      "Bottleneck analysis for revenue, execution, and internal handoffs",
      "AI opportunity review: where automation can help and where human approval should stay",
      "Phased roadmap with priorities, effort, and implementation recommendations",
      "Architecture notes for integrations, data ownership, and governance",
    ],
    useCases: [
      "Preparing for a digital transformation initiative",
      "Deciding between automation, dashboard, or web application first",
      "Aligning technical and commercial teams around one roadmap",
      "Pre-investment system planning before execution",
    ],
    techStack: ["Process mapping", "Systems architecture", "AI-readiness review", "API landscape review"],
    platforms: ["Google Workspace", "Notion", "Miro", "Airtable", "HubSpot", "Jira", "Confluence"],
    developerTools: ["Architecture diagrams", "Workflow maps", "Requirements docs", "Access review", "Data flow notes"],
    integrationIdeas: [
      "Map lead, client, delivery, finance, and reporting flows before choosing tools",
      "Identify where AI can summarize, draft, route, or check work safely",
      "Create a phased build order so the first investment supports the second",
    ],
    process: [
      "Discovery and stakeholder interviews",
      "Workflow and tooling analysis",
      "Risk and dependency review",
      "Roadmap and implementation sequencing",
      "Executive walkthrough and next-step brief",
    ],
    pricingRange: "EUR1,200 - EUR4,000 depending on scope and number of systems assessed.",
    deliverables: [
      "Systems audit report",
      "Prioritized roadmap",
      "AI and automation opportunity map",
      "Architecture recommendations",
      "90-day action plan",
    ],
    faq: [
      {
        question: "How long does the audit take?",
        answer: "Most audits run 1-2 weeks depending on team availability and system complexity.",
      },
      {
        question: "Can this include vendor/tool recommendations?",
        answer: "Yes. Recommendations are included when they materially improve your roadmap.",
      },
    ],
    ctaTitle: "Start with clarity before you build",
    ctaText: "Book a Digital Systems & AI Audit and get a practical roadmap for what to fix, automate, build, and maintain first.",
    metaTitle: "Digital Systems & AI Audit | Logicform Systems",
    metaDescription:
      "Logicform Systems delivers systems audits and implementation roadmaps to help businesses prioritize the right digital systems first.",
    keywords: ["systems audit", "digital roadmap", "workflow analysis", "operations audit"],
  },
  {
    slug: "websites",
    title: "Website System",
    description: "Credible business websites built as part of a wider operating system.",
    heroSummary:
      "Launch or redesign a business website that communicates clearly, converts reliably, and connects with your operational stack.",
    visualImage: "/brand/service-websites.png",
    problem:
      "Many websites look acceptable but fail operationally: weak structure, poor conversion flow, disconnected lead capture, and no system integration.",
    builds: [
      "Conversion-aware website architecture and page strategy",
      "High-performance responsive frontend with premium visual language",
      "Lead and contact workflows connected to CRM or internal processes",
      "SEO metadata, technical structure, and analytics foundations",
    ],
    useCases: [
      "Launching a new company website",
      "Repositioning a brand for enterprise credibility",
      "Improving inbound lead quality from web traffic",
      "Replacing outdated CMS or fragmented pages",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GA4 / analytics tooling"],
    platforms: ["Google Analytics", "Search Console", "HubSpot", "Zoho CRM", "Resend", "Calendly", "Google Workspace"],
    developerTools: ["GitHub", "Vercel", "Figma", "Lighthouse", "ESLint", "Responsive QA"],
    integrationIdeas: [
      "Connect contact and quote requests to CRM, email, or an internal intake board",
      "Track high-intent actions instead of only page views",
      "Prepare the site for future dashboards, automation, and client portals",
    ],
    process: [
      "Messaging and structure workshop",
      "Wireframe and visual direction",
      "Build and content integration",
      "QA, SEO setup, and performance pass",
      "Launch and handover",
    ],
    pricingRange: "EUR2,500 - EUR7,500 based on scope, content depth, and integrations.",
    deliverables: [
      "Production-ready website",
      "Analytics and conversion tracking setup",
      "SEO-ready metadata and technical structure",
      "Editorial and maintenance handover guide",
    ],
    faq: [
      {
        question: "Do you handle both redesign and greenfield websites?",
        answer: "Yes. We handle redesigns, migrations, and new builds.",
      },
      {
        question: "Can you connect forms directly to our CRM?",
        answer: "Yes. CRM and workflow integrations are part of delivery scope.",
      },
    ],
    ctaTitle: "Build a website that works like a system",
    ctaText: "Start your website system project with clear scope and timeline.",
    metaTitle: "Business Website Systems | Logicform Systems",
    metaDescription:
      "Logicform Systems builds high-performance business websites connected to CRM, automation, and analytics workflows.",
    keywords: ["business website", "website redesign", "nextjs website", "conversion website"],
  },
  {
    slug: "ai-automation",
    title: "Automation System",
    description: "AI-assisted workflows that remove repetitive work without losing control.",
    heroSummary:
      "Design and deploy automation flows that connect tools, reduce manual effort, and preserve human approvals where judgment matters.",
    visualImage: "/brand/service-ai-automation.png",
    problem:
      "Operations often depend on copy-paste steps across inboxes, spreadsheets, and CRMs. This creates delays, errors, and opaque ownership.",
    builds: [
      "Workflow mapping across lead, operations, and reporting flows",
      "Automation pipelines with validation and human checkpoints",
      "AI-assisted summarization, drafting, and routing steps",
      "Monitoring and fallback logic for operational reliability",
    ],
    useCases: [
      "Lead qualification and routing automation",
      "Internal request processing with human approval",
      "Automated report generation and distribution",
      "CRM and support workflow synchronization",
    ],
    techStack: ["OpenAI APIs", "Node.js", "Next.js", "Webhooks", "Zapier / Make / custom orchestration"],
    platforms: ["OpenAI", "Make", "Zapier", "n8n", "Google Workspace", "Slack", "Microsoft Teams", "HubSpot"],
    developerTools: ["API clients", "Webhook testing", "Logging", "Version control", "Prompt evaluation", "Runbooks"],
    integrationIdeas: [
      "Route leads, tasks, files, and approvals across the tools your team already uses",
      "Use AI for drafting, classification, summarization, and operator support",
      "Keep exception handling and human approval visible from day one",
    ],
    process: [
      "Current workflow analysis",
      "Automation blueprint and risk checks",
      "Build and integration",
      "Validation with real scenarios",
      "Rollout and optimization",
    ],
    pricingRange: "EUR6,000 - EUR25,000 depending on complexity and number of workflows.",
    deliverables: [
      "Production automation workflows",
      "Human-in-the-loop checkpoints",
      "Operational monitoring setup",
      "Runbook and support documentation",
    ],
    faq: [
      {
        question: "Will automation remove human oversight?",
        answer:
          "No. We keep human review on high-impact decisions while automating repetitive execution.",
      },
      {
        question: "Can you work with our existing tools?",
        answer: "Yes. Most delivery is integration-first, not tool replacement-first.",
      },
    ],
    ctaTitle: "Automate execution, keep control",
    ctaText: "Scope an automation system built for your operating model.",
    metaTitle: "AI Workflow Automation Services | Logicform Systems",
    metaDescription:
      "Logicform Systems builds AI-assisted automation workflows with human approval logic for reliable business execution.",
    keywords: ["ai automation", "workflow automation", "human in the loop", "business automation"],
  },
  {
    slug: "dashboards",
    title: "Dashboard / Internal Tool",
    description: "Operational dashboards and internal systems for visibility and control.",
    heroSummary:
      "Build dashboards and internal tools that unify your data and workflows into one reliable operating interface.",
    visualImage: "/brand/service-dashboards.png",
    problem:
      "Data is often scattered across tools with no shared source of truth. Teams spend time collecting numbers instead of acting on them.",
    builds: [
      "Role-specific dashboards for leadership and operations",
      "Custom internal tools for workflow management",
      "Data pipelines from CRM, spreadsheets, and APIs",
      "Alerts and summary layers for faster decisions",
    ],
    useCases: [
      "Sales and pipeline tracking",
      "Operations and delivery monitoring",
      "Customer support and SLA visibility",
      "Executive reporting and KPI governance",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "REST APIs", "Charting libraries"],
    platforms: ["Google Sheets", "Airtable", "HubSpot", "Looker Studio", "Power BI", "Stripe", "GA4"],
    developerTools: ["SQL modeling", "API integrations", "Role-based views", "Data validation", "Chart libraries"],
    integrationIdeas: [
      "Pull live data from CRM, spreadsheets, forms, finance tools, or custom databases",
      "Create role-specific views for founders, operations, sales, and delivery teams",
      "Add alerts and AI summaries so reports become action signals",
    ],
    process: [
      "Metrics and workflow definition",
      "Data model and integration planning",
      "Interface and tool build",
      "Validation with stakeholders",
      "Adoption and iteration",
    ],
    pricingRange: "EUR6,000 - EUR30,000 depending on data sources and complexity.",
    deliverables: [
      "Live dashboard or internal tool",
      "Connected data integrations",
      "Access model and governance notes",
      "Operator guide and handover",
    ],
    faq: [
      {
        question: "Can this replace spreadsheet-based reporting?",
        answer: "Yes. We frequently replace fragmented spreadsheet reporting with live dashboards.",
      },
      {
        question: "Do you support multi-role views?",
        answer: "Yes. Dashboards can be tailored by role, function, and access level.",
      },
    ],
    ctaTitle: "Make decisions from one source of truth",
    ctaText: "Build a dashboard system aligned to your operations.",
    metaTitle: "Business Dashboards & Internal Tools | Logicform Systems",
    metaDescription:
      "Logicform Systems builds dashboards and internal tools that connect data, workflows, and operations into one system.",
    keywords: ["dashboards", "internal tools", "kpi dashboard", "operations reporting"],
  },
  {
    slug: "custom-web-apps",
    title: "Custom Web Applications",
    description: "Product-grade web applications and portals built around real workflows.",
    heroSummary:
      "Develop custom web applications, portals, and operational software tailored to your business model and growth stage.",
    visualImage: "/brand/service-custom-web-apps.png",
    problem:
      "Off-the-shelf tools rarely fit core workflows end-to-end. Teams compromise process quality or create brittle manual workarounds.",
    builds: [
      "Custom application architecture and feature design",
      "Secure authentication and role-based access patterns",
      "Integrated APIs and data workflows",
      "Scalable frontend and backend foundations",
    ],
    useCases: [
      "Client portals and partner workspaces",
      "Operations software for internal teams",
      "SaaS MVPs and product prototypes",
      "Specialized workflow tools unavailable off-the-shelf",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Vercel / cloud services"],
    platforms: ["Stripe", "Resend", "Clerk/Auth", "Supabase", "Neon", "HubSpot", "Google Workspace"],
    developerTools: ["GitHub", "Prisma", "API design", "Database schema", "QA flows", "Deployment pipelines"],
    integrationIdeas: [
      "Build portals, admin panels, CRMs, MVPs, and internal systems around your exact process",
      "Connect payments, email, authentication, files, analytics, and external APIs",
      "Design the foundation so automation and reporting can be added later",
    ],
    process: [
      "Product and workflow discovery",
      "System design and scope definition",
      "Build in delivery milestones",
      "QA and stakeholder validation",
      "Production deployment and support",
    ],
    pricingRange: "EUR8,000 - EUR45,000 depending on feature scope.",
    deliverables: [
      "Production-ready application",
      "Data and integration layer",
      "Deployment and release setup",
      "Technical documentation and handover",
    ],
    faq: [
      {
        question: "Do you build MVPs only, or long-term systems too?",
        answer: "Both. We can launch MVPs and continue as a technical partner post-launch.",
      },
      {
        question: "Can this integrate with existing CRM or ERP tools?",
        answer: "Yes. Integration is planned during architecture and delivery scope.",
      },
    ],
    ctaTitle: "Build software around your operations",
    ctaText: "Discuss your custom web application scope with Logicform Systems.",
    metaTitle: "Custom Web Application Development | Logicform Systems",
    metaDescription:
      "Logicform Systems builds custom web applications, portals, and product systems aligned with real business workflows.",
    keywords: ["custom web app", "saas mvp", "client portal", "internal platform"],
  },
  {
    slug: "it-operations",
    title: "IT Operations",
    description: "Reliable internal technical operations and support systems.",
    heroSummary:
      "Improve day-to-day technical operations with structured access workflows, process documentation, and practical support systems.",
    visualImage: "/brand/service-it-operations.png",
    problem:
      "Internal operations become fragile when access, support, and process ownership are undocumented or inconsistent across teams.",
    builds: [
      "Identity and access workflow structures",
      "Operational support processes and escalation paths",
      "SOP documentation for recurring technical tasks",
      "Tooling configuration for team reliability",
    ],
    useCases: [
      "Scaling team access and onboarding workflows",
      "Improving internal support consistency",
      "Reducing repeated operational friction",
      "Preparing for compliance and governance maturity",
    ],
    techStack: ["Google Workspace", "Atlassian", "Service workflows", "Documentation systems"],
    platforms: ["Google Workspace", "Atlassian", "Jira", "Confluence", "Slack", "Microsoft 365", "Notion"],
    developerTools: ["Access matrices", "SOP templates", "Support workflows", "Permission reviews", "Operational runbooks"],
    integrationIdeas: [
      "Standardize onboarding, offboarding, support requests, and access approvals",
      "Connect internal requests to Jira, email, Slack, or documentation workflows",
      "Create simple operational systems that a growing team can actually follow",
    ],
    process: [
      "Operations discovery",
      "Gap and risk analysis",
      "Process and tooling implementation",
      "Documentation and enablement",
      "Stabilization support",
    ],
    pricingRange: "EUR1,500 - EUR7,500 depending on operational scope.",
    deliverables: [
      "Operational process map",
      "Configured support workflows",
      "Access and governance documentation",
      "Team enablement notes",
    ],
    faq: [
      {
        question: "Is this suitable for non-technical teams?",
        answer: "Yes. We design processes to be operable by mixed technical and business teams.",
      },
      {
        question: "Can you improve existing IT support workflows?",
        answer: "Yes. Most engagements optimize what you already use before introducing new tools.",
      },
    ],
    ctaTitle: "Stabilize internal operations",
    ctaText: "Build dependable IT operations workflows with Logicform Systems.",
    metaTitle: "IT Operations Systems & Support | Logicform Systems",
    metaDescription:
      "Logicform Systems helps teams improve IT operations with access workflows, documentation, and practical support systems.",
    keywords: ["it operations", "access workflows", "internal support", "technical operations"],
  },
  {
    slug: "cloud-maintenance",
    title: "Cloud Maintenance",
    description: "Deployment, monitoring, and ongoing maintenance for critical systems.",
    heroSummary:
      "Keep your digital systems reliable with structured deployment pipelines, cloud operations, and proactive maintenance.",
    visualImage: "/brand/service-cloud-maintenance.png",
    problem:
      "Many businesses launch systems but underinvest in maintenance. The result is slow drift, outages, and avoidable operational risk.",
    builds: [
      "Cloud deployment and release management setup",
      "Domain, SSL, DNS, and environment governance",
      "Monitoring and incident-response baselines",
      "Performance and stability maintenance workflows",
    ],
    useCases: [
      "Maintaining client-facing websites and portals",
      "Supporting internal apps with uptime requirements",
      "Improving deployment reliability",
      "Reducing technical debt and regression risk",
    ],
    techStack: ["Vercel", "Cloud hosting", "DNS/SSL", "Monitoring tooling", "Release workflows"],
    platforms: ["Vercel", "Cloudflare", "GitHub", "Google Analytics", "Search Console", "Resend", "Domain DNS"],
    developerTools: ["CI/CD", "Environment variables", "Monitoring", "Uptime checks", "Dependency updates", "Backups"],
    integrationIdeas: [
      "Keep websites, portals, APIs, and dashboards deployable without last-minute panic",
      "Add monitoring and maintenance routines around live systems",
      "Document domains, DNS, SSL, environments, and release processes clearly",
    ],
    process: [
      "Infrastructure and risk assessment",
      "Deployment and observability setup",
      "Maintenance cadence definition",
      "Routine updates and optimization",
      "Quarterly reliability review",
    ],
    pricingRange: "EUR1,500/month - EUR4,500/month based on environment scope.",
    deliverables: [
      "Managed deployment pipelines",
      "Monitoring and alert baseline",
      "Monthly maintenance report",
      "Stability and performance actions log",
    ],
    faq: [
      {
        question: "Do you offer one-time setup and ongoing support?",
        answer: "Yes. We offer both initial setup and monthly technical maintenance.",
      },
      {
        question: "Can you support existing hosted systems?",
        answer: "Yes. We can assume support for systems already in production.",
      },
    ],
    ctaTitle: "Keep critical systems production-ready",
    ctaText: "Set up reliable cloud maintenance and deployment support.",
    metaTitle: "Cloud Deployment & Maintenance | Logicform Systems",
    metaDescription:
      "Logicform Systems provides cloud deployment, monitoring, and maintenance services for business-critical digital systems.",
    keywords: ["cloud maintenance", "deployment support", "vercel", "website maintenance"],
  },
  {
    slug: "technical-partner",
    title: "Technical Partner",
    description: "Ongoing product and systems partnership for growth-stage teams.",
    heroSummary:
      "Work with Logicform Systems as a lean technical partner for continuous improvements, system evolution, and execution support.",
    visualImage: "/brand/service-technical-partner.png",
    problem:
      "Most growing businesses do not need a large agency. They need a reliable partner who can translate priorities into shipping outcomes.",
    builds: [
      "Quarterly systems planning and backlog shaping",
      "Continuous delivery across website, automation, and internal tooling",
      "Technical decision support for leadership and operations",
      "Release management, quality control, and production support",
    ],
    useCases: [
      "Fractional technical leadership for founder-led teams",
      "Execution partner for non-technical management",
      "Multi-system improvements across web and operations",
      "Long-term roadmap ownership and implementation",
    ],
    techStack: ["Next.js", "Automation platforms", "Cloud stack", "Analytics tooling", "Collaboration stack"],
    platforms: ["GitHub", "Vercel", "Jira", "Linear", "Notion", "Confluence", "Slack", "OpenAI"],
    developerTools: ["Roadmaps", "Backlogs", "Release notes", "Architecture reviews", "QA checklists", "Technical docs"],
    integrationIdeas: [
      "Turn founder or operations priorities into shipped improvements month by month",
      "Coordinate website, app, automation, dashboard, and cloud work under one roadmap",
      "Use AI and automation where it improves delivery without making the system fragile",
    ],
    process: [
      "Monthly priorities and operating review",
      "Scope and milestone definition",
      "Continuous build cycles",
      "Review, release, and iteration",
      "Quarterly strategy refresh",
    ],
    pricingRange: "EUR2,000/month - EUR8,000/month based on support scope.",
    deliverables: [
      "Monthly delivery plan",
      "Implemented systems improvements",
      "Technical review and risk notes",
      "Roadmap updates and priority recommendations",
    ],
    faq: [
      {
        question: "Is this like hiring a fractional CTO?",
        answer:
          "It includes many fractional CTO outcomes, plus hands-on technical execution and delivery support.",
      },
      {
        question: "Can this start small and scale over time?",
        answer: "Yes. Engagements can start with focused priorities and expand as needed.",
      },
    ],
    ctaTitle: "Add a serious technical partner to your team",
    ctaText: "Discuss an ongoing partnership model for your business systems.",
    metaTitle: "Technical Partner Services | Logicform Systems",
    metaDescription:
      "Logicform Systems acts as a lean technical partner for continuous software, automation, and systems execution.",
    keywords: ["technical partner", "fractional technical leadership", "ongoing development support"],
  },
];

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<ServicePageContent["slug"], ServicePageContent>;
