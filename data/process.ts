export type DeliveryPhase = {
  id: string;
  step: string;
  title: string;
  description: string;
  focus: string[];
};

export const deliveryPhases: DeliveryPhase[] = [
  {
    id: "discover",
    step: "01",
    title: "Discovery & Scoping",
    description:
      "We clarify goals, constraints, users, and technical risks before writing production code.",
    focus: [
      "Business requirements and success criteria",
      "System boundaries and integration points",
      "Delivery timeline and priority mapping",
    ],
  },
  {
    id: "build",
    step: "02",
    title: "Build & Integration",
    description:
      "Core product, workflows, APIs, and interfaces are implemented with clean structure and practical testing.",
    focus: [
      "Incremental delivery with review checkpoints",
      "Secure patterns for auth, data, and access",
      "Documentation for maintainability",
    ],
  },
  {
    id: "deliver",
    step: "03",
    title: "Delivery & Production Support",
    description:
      "Systems are prepared for real usage with deployment readiness, handover, and optional ongoing support.",
    focus: [
      "Production deployment and operational checks",
      "Performance and accessibility validation",
      "Support path for improvements and iterations",
    ],
  },
];
