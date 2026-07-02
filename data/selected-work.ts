export type SelectedWorkItem = {
  id: string;
  title: string;
  label: string;
  isConcept?: boolean;
  problem: string;
  built: string;
  outcome: string;
  layers: string[];
  href?: string;
};

export const selectedWorkItems: SelectedWorkItem[] = [
  {
    id: "arroyo-technologies",
    title: "Arroyo Technologies",
    label: "Client project · Website & digital system",
    problem:
      "Complex industrial product positioning made it hard for buyers to understand applications, trust the brand, and reach the right information quickly.",
    built:
      "A full digital presence with structured product storytelling, application-focused pages, SEO-ready architecture, and a commercial contact flow.",
    outcome:
      "A market-ready platform that presents water purification systems with clarity, credibility, and practical business structure.",
    layers: ["Website system", "SEO structure", "Product storytelling", "Lead capture", "Deployment"],
    href: "https://www.arroyo-technologies.com/",
  },
  {
    id: "logicform-brand-platform",
    title: "LogicForm Systems Brand & Website Platform",
    label: "Internal build · Brand & web platform",
    problem:
      "The company needed a premium, structured digital presence that explains connected systems—not a generic services brochure.",
    built:
      "Brand direction, service architecture, multi-page site structure, service detail pages, pricing anchors, blog, FAQ, and contact flows.",
    outcome:
      "A cohesive platform that presents LogicForm as a serious digital systems partner with clear paths to inquiry.",
    layers: [
      "Brand & messaging",
      "Multi-page website",
      "Service pages",
      "SEO metadata",
      "Content structure",
    ],
    href: "https://logicformsystems.com",
  },
  {
    id: "dashboard-crm-concept",
    title: "Dashboard / CRM Operations Concept",
    label: "Concept · Operations visibility system",
    isConcept: true,
    problem:
      "Many teams track pipeline, delivery, and support in separate spreadsheets—with no shared operational view or reliable reporting rhythm.",
    built:
      "A concept for a unified operations dashboard: pipeline stages, account health, workflow status, weekly reporting, and role-based views for leadership and ops.",
    outcome:
      "Illustrates how LogicForm approaches operational systems—connected data, clear KPIs, and interfaces teams can actually use daily.",
    layers: [
      "Dashboard UI concept",
      "CRM-style pipeline",
      "Reporting layer",
      "Role-based views",
      "Integration-ready structure",
    ],
  },
];
