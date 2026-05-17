export type EngagementModel = {
  id: string;
  name: string;
  positioning: string;
  targetClient: string;
  valueProposition: string;
  deliverables: string[];
  idealOutcomes: string[];
  engagementStyle: string;
  ctaLabel: string;
};

export const engagementModels: EngagementModel[] = [
  {
    id: "launchpad",
    name: "Launchpad",
    positioning:
      "For landing pages, business websites, technical portfolios, and product websites",
    targetClient:
      "Founders and businesses establishing a credible market presence in Europe, India, or internationally.",
    valueProposition:
      "A professional, conversion-focused digital presence that communicates technical quality and earns trust quickly.",
    deliverables: [
      "Information architecture and page structure",
      "Premium UI implementation with responsive design",
      "SEO, accessibility, and performance-focused delivery",
      "Clear calls to action for inquiries and consultations",
    ],
    idealOutcomes: [
      "Market-ready professional presence",
      "Stronger first-impression credibility",
      "Clear path for prospects to contact you",
    ],
    engagementStyle: "Defined-scope build · Timeline agreed upfront",
    ctaLabel: "Discuss Launchpad",
  },
  {
    id: "systems-build",
    name: "Systems Build",
    positioning:
      "For dashboards, CRM tools, SaaS platforms, and automation workflows",
    targetClient:
      "Teams that need custom software systems aligned to real operational workflows—not off-the-shelf limitations.",
    valueProposition:
      "Custom software engineered around your business processes, data needs, and growth plans.",
    deliverables: [
      "Requirements mapping and system scoping",
      "Full-stack application development",
      "Dashboards, workflows, and integration foundations",
      "Production-oriented handover documentation",
    ],
    idealOutcomes: [
      "Purpose-built internal or customer-facing system",
      "Reduced manual work in core processes",
      "Structured foundation for future features",
    ],
    engagementStyle: "Phased delivery · Milestone-based execution",
    ctaLabel: "Scope Systems Build",
  },
  {
    id: "technical-partner",
    name: "Technical Partner",
    positioning:
      "For ongoing engineering, automation, IT systems, infrastructure, and product support",
    targetClient:
      "Growing businesses that need dependable technical execution without building a full in-house team immediately.",
    valueProposition:
      "Reliable long-term technical partnership across software delivery, automation, and operational systems.",
    deliverables: [
      "Ongoing development and system improvements",
      "Automation and infrastructure support",
      "Technical troubleshooting and documentation",
      "Prioritized roadmap execution with clear communication",
    ],
    idealOutcomes: [
      "Consistent engineering execution over time",
      "Faster response to technical priorities",
      "Lower friction between business goals and implementation",
    ],
    engagementStyle: "Retainer or flexible partnership · Custom cadence",
    ctaLabel: "Explore Partnership",
  },
];
