export type ProjectMockupType = "browser" | "dashboard" | "terminal" | "app";

export type ProjectCaseStudy = {
  id: string;
  title: string;
  label: string;
  sublabel?: string;
  isConcept?: boolean;
  summary: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  featured?: boolean;
  mockupType: ProjectMockupType;
  modal: {
    overview: string;
    problem: string;
    solution: string;
    architecture: string[];
    tools: string[];
    outcome: string;
  };
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "custom-saas-crm-platforms",
    title: "Custom SaaS & CRM Platform Engineering",
    label: "Business Systems Engineering",
    featured: true,
    isConcept: true,
    mockupType: "dashboard",
    summary:
      "Custom dashboards, CRM views, and workflow systems for teams that need operational control and less manual work.",
    stack: [
      "Next.js",
      "TypeScript",
      "SQL",
      "API Design",
      "Dashboards",
      "Workflow Automation",
    ],
    highlights: [
      "Built for evolving business needs",
      "Reduced manual operational work",
      "Integration-ready architecture",
    ],
    modal: {
      overview:
        "Bespoke SaaS-style systems—dashboards, CRM views, admin panels, and workflow tools aligned to how a business operates.",
      problem:
        "Teams relied on spreadsheets and disconnected tools, creating reporting delays and inconsistent operational visibility.",
      solution:
        "Centralized dashboards, role-aware interfaces, and modular data models designed for reporting and future automation.",
      architecture: [
        "Modular application boundaries for maintainable growth",
        "Role-aware interfaces for internal and customer-facing use",
        "Data models designed for reporting and operational visibility",
        "Integration-ready structure for future services and automations",
      ],
      tools: ["Next.js", "React", "TypeScript", "SQL", "Node.js", "REST APIs"],
      outcome:
        "Teams gain centralized operations, better reporting quality, and software that can grow without rebuilding from scratch.",
    },
  },
  {
    id: "scholar-ai-tu-berlin",
    title: "Scholar-AI",
    label: "Concept · Internal",
    sublabel: "TU Berlin · Research Support Concept",
    isConcept: true,
    mockupType: "terminal",
    summary:
      "AI-assisted academic tooling concept for research workflows, retrieval, and structured knowledge access.",
    stack: [
      "Python",
      "RAG Concepts",
      "Information Retrieval",
      "Research Workflows",
      "Evaluation Design",
    ],
    highlights: [
      "Source-grounded retrieval workflows",
      "Document-oriented research support",
      "Extensible pipeline design",
    ],
    modal: {
      overview:
        "Research support tooling combining retrieval, structured knowledge access, and intelligent workflow assistance in academic contexts.",
      problem:
        "Research teams needed faster ways to navigate large document sets without sacrificing source traceability or quality control.",
      solution:
        "Retrieval-oriented architecture with separated indexing, reasoning, and presentation layers plus evaluation-aware design.",
      architecture: [
        "Document-oriented retrieval and indexing strategy",
        "Workflow design for research query and synthesis tasks",
        "Separation between retrieval, reasoning, and presentation layers",
        "Evaluation-aware approach for quality-sensitive outputs",
      ],
      tools: ["Python", "RAG Patterns", "Vector Retrieval", "FastAPI Concepts"],
      outcome:
        "A credible foundation for academic teams exploring AI-assisted knowledge workflows with practical guardrails.",
    },
  },
];
