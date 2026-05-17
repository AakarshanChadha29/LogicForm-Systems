export type ProjectCaseStudy = {
  id: string;
  title: string;
  label: string;
  summary: string;
  stack: string[];
  highlights: string[];
  liveUrl?: string;
  featured?: boolean;
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
    label: "Full-Stack Digital Platform",
    featured: true,
    liveUrl: "https://www.arroyo-technologies.com/",
    summary:
      "Designed and built a full-stack digital platform for Arroyo Technologies, presenting ionization-based water purification systems for residential, hospitality, school, and commercial environments.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "SEO",
      "Product Storytelling",
    ],
    highlights: [
      "Full-stack delivery with responsive UI and product storytelling",
      "SEO structure and performance-focused implementation",
      "Product, application, and legal/documentation pages",
      "Contact flow and international market positioning",
    ],
    modal: {
      overview:
        "End-to-end full-stack platform for Arroyo Technologies—translating complex ionization-based water purification technology into a clear, professional digital presence for residential, hospitality, school, and commercial buyers.",
      architecture: [
        "Structured content hierarchy for product and application pages",
        "Responsive layout system for international stakeholders",
        "SEO and metadata foundation for discoverability",
        "Legal and documentation structure for commercial trust",
        "Performance-oriented implementation for global audiences",
      ],
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      outcome:
        "A market-ready platform that presents industrial water purification systems with clarity, credibility, and practical business structure.",
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
    highlights: [
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
    highlights: [
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
