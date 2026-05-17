export type ProjectCaseStudy = {
  id: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  impact: string[];
  liveUrl?: string;
  modal: {
    overview: string;
    architecture: string[];
    tools: string[];
    outcome: string;
  };
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    id: "arroyo-technologies",
    title: "Arroyo Technologies",
    label: "Full-Stack Corporate Platform",
    liveUrl: "https://www.arroyo-technologies.com/",
    summary:
      "Full-stack website and digital platform for Arroyo Technologies, presenting an advanced ionization-based water purification system for international markets.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "SEO",
      "Product Storytelling",
    ],
    impact: [
      "Built to support international market positioning",
      "Structured for technical credibility with industrial buyers",
      "Designed for clarity, performance, and responsive delivery",
      "Focused on business-facing presentation, not demo-level polish",
    ],
    modal: {
      overview:
        "End-to-end full-stack delivery for a corporate platform that communicates complex product technology to international stakeholders with confidence and clarity.",
      architecture: [
        "Component-driven frontend with structured content hierarchy",
        "Performance-oriented rendering for global audiences",
        "Responsive layout system for desktop and mobile buyers",
        "SEO and metadata foundation for discoverability",
      ],
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      outcome:
        "Delivered a market-ready digital presence that aligns product storytelling with engineering credibility.",
    },
  },
  {
    id: "custom-saas-crm-platforms",
    title: "Custom SaaS & CRM Platform Engineering",
    label: "Business Systems Engineering",
    summary:
      "Custom dashboard, CRM, and workflow systems for businesses that need internal tools, reporting, automation, and operational control.",
    stack: [
      "Next.js",
      "TypeScript",
      "SQL",
      "API Design",
      "Dashboards",
      "Workflow Automation",
    ],
    impact: [
      "Designed for scalability across evolving business needs",
      "Focused on reducing manual work in daily operations",
      "Structured for future automation and integrations",
      "Built around practical requirements, not generic templates",
    ],
    modal: {
      overview:
        "Engineering approach for bespoke SaaS-style systems—dashboards, CRM views, admin panels, and workflow tools aligned to how a business actually operates.",
      architecture: [
        "Modular application boundaries for maintainable growth",
        "Role-aware interfaces for internal and customer-facing use",
        "Data models designed for reporting and operational visibility",
        "Integration-ready structure for future services and automations",
      ],
      tools: [
        "Next.js",
        "React",
        "TypeScript",
        "SQL",
        "Node.js",
        "REST APIs",
      ],
      outcome:
        "Enables teams to centralize operations, improve reporting quality, and scale internal software without rebuilding from scratch.",
    },
  },
  {
    id: "scholar-ai-tu-berlin",
    title: "Scholar-AI",
    label: "TU Berlin · Research Support Concept",
    summary:
      "AI-assisted academic tooling concept connected to computational engineering, intelligent information workflows, and research-oriented automation.",
    stack: [
      "Python",
      "RAG Concepts",
      "Information Retrieval",
      "Research Workflows",
      "Evaluation Design",
    ],
    impact: [
      "Structured for source-grounded academic retrieval workflows",
      "Designed to support complex document-oriented research tasks",
      "Focused on practical automation in knowledge-heavy environments",
      "Built with extensibility for future model and pipeline upgrades",
    ],
    modal: {
      overview:
        "Concept and engineering direction for research support tooling that combines retrieval, structured knowledge access, and intelligent workflow assistance in academic contexts.",
      architecture: [
        "Document-oriented retrieval and indexing strategy",
        "Workflow design for research query and synthesis tasks",
        "Separation between retrieval, reasoning, and presentation layers",
        "Evaluation-aware approach for quality-sensitive outputs",
      ],
      tools: ["Python", "RAG Patterns", "Vector Retrieval", "FastAPI Concepts"],
      outcome:
        "Provides a credible foundation for academic and research teams exploring AI-assisted knowledge workflows without overpromising unverified production metrics.",
    },
  },
];
