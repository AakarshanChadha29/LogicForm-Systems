export type ServiceOffering = {
  id: string;
  label: string;
  title: string;
  icon: "bot" | "layers" | "cloud" | "operations" | "chart";
  description: string;
  outcomes: string[];
  capabilities: string[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "ai-automation",
    label: "Service 01",
    title: "AI & Automation Systems",
    icon: "bot",
    description:
      "Practical AI workflows and automation that reduce manual work and connect intelligence to real business processes.",
    outcomes: [
      "Less repetitive operational work",
      "Faster internal decision cycles",
      "Structured paths from prototype to production",
    ],
    capabilities: [
      "AI-assisted workflows",
      "Internal automation tools",
      "LLM and RAG prototypes",
      "Business process automation",
    ],
  },
  {
    id: "fullstack-saas",
    label: "Service 02",
    title: "Full-Stack SaaS Engineering",
    icon: "layers",
    description:
      "Custom web applications, dashboards, and customer-facing platforms built with modern full-stack architecture.",
    outcomes: [
      "Market-ready product interfaces",
      "Modular systems designed for growth",
      "Clear technical foundations for future features",
    ],
    capabilities: [
      "Next.js applications",
      "Dashboards and admin panels",
      "CRM and customer portals",
      "API-driven product delivery",
    ],
  },
  {
    id: "cloud-infrastructure",
    label: "Service 03",
    title: "Cloud, Infrastructure & Reliability",
    icon: "cloud",
    description:
      "Secure deployment patterns, cloud-ready architecture, and production discipline for systems that need to run reliably.",
    outcomes: [
      "Structured for scalable hosting",
      "Production readiness built into delivery",
      "Operational clarity from day one",
    ],
    capabilities: [
      "Secure deployment workflows",
      "Vercel and Node hosting patterns",
      "Cloud-ready system architecture",
      "Monitoring and production readiness",
    ],
  },
  {
    id: "it-operations",
    label: "Service 04",
    title: "IT Systems & Operations",
    icon: "operations",
    description:
      "Hands-on IT systems support grounded in real operational experience—from access workflows to internal tooling.",
    outcomes: [
      "Improved internal process reliability",
      "Better documentation and troubleshooting paths",
      "Stronger identity and access hygiene",
    ],
    capabilities: [
      "Google Workspace administration",
      "Atlassian and Jira workflows",
      "Identity and access workflows",
      "Technical support automation",
    ],
  },
  {
    id: "data-dashboards",
    label: "Service 05",
    title: "Data & Dashboard Solutions",
    icon: "chart",
    description:
      "SQL-backed reporting, operational dashboards, and data interfaces that help teams see and act on business information.",
    outcomes: [
      "Clearer operational visibility",
      "Reduced dependency on manual reporting",
      "Structured data workflows for decision-making",
    ],
    capabilities: [
      "SQL dashboards",
      "Reporting systems",
      "Business intelligence interfaces",
      "Operational data workflows",
    ],
  },
];
