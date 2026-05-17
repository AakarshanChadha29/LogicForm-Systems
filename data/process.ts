export type DeliveryPhase = {
  id: string;
  step: string;
  title: string;
  description: string;
};

export const deliveryPhases: DeliveryPhase[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    description:
      "Clarify business goals, constraints, stakeholders, and technical risks before committing to architecture.",
  },
  {
    id: "architecture",
    step: "02",
    title: "Architecture",
    description:
      "Define system boundaries, data flows, security posture, and an execution roadmap aligned to production needs.",
  },
  {
    id: "engineering",
    step: "03",
    title: "Engineering",
    description:
      "Build core product logic, integrations, and interfaces with disciplined structure and review checkpoints.",
  },
  {
    id: "deployment",
    step: "04",
    title: "Deployment",
    description:
      "Prepare environments, release workflows, monitoring foundations, and operational handover for real usage.",
  },
  {
    id: "optimization",
    step: "05",
    title: "Optimization",
    description:
      "Improve reliability, performance, and maintainability as usage grows and requirements evolve.",
  },
];
