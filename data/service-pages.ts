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
  problem: string;
  builds: string[];
  useCases: string[];
  techStack: string[];
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
    title: "Systems Audit",
    description: "Technical and operational audit to decide what to build first.",
    heroSummary:
      "A structured review of your current tools, workflows, and bottlenecks that produces a practical systems roadmap.",
    problem:
      "Many teams know operations feel fragmented but do not know where to start. Without a clear sequence, they over-buy tools, build in the wrong order, and lose momentum.",
    builds: [
      "Current-state systems map across website, CRM, data, operations, and reporting",
      "Bottleneck analysis for revenue, execution, and internal handoffs",
      "Phased roadmap with priorities, effort, and implementation recommendations",
      "Architecture notes for integrations, data ownership, and governance",
    ],
    useCases: [
      "Preparing for a digital transformation initiative",
      "Deciding between automation, dashboard, or web application first",
      "Aligning technical and commercial teams around one roadmap",
      "Pre-investment system planning before execution",
    ],
    techStack: ["Miro", "Notion", "Google Workspace", "Process mapping", "API landscape review"],
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
    ctaText: "Book a systems audit and get a practical roadmap for execution.",
    metaTitle: "Systems Audit Services | Logicform Systems",
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
