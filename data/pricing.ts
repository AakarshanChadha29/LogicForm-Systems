export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  timeline: string;
  ctaLabel: string;
  ctaHref: string;
  recommended?: boolean;
};

export const homepagePricingPackages: PricingPackage[] = [
  {
    id: "website-system",
    name: "Website System",
    price: "€2,500–€7,500",
    bestFor: "Businesses that need a serious website that explains the offer clearly, builds trust, captures leads, and is ready to publish.",
    includes: [
      "Positioning, page structure, and responsive build",
      "SEO-ready metadata and fast production setup",
      "Contact flow, lead capture, and analytics basics",
      "Deployment, handover, and launch support",
    ],
    timeline: "2–5 weeks",
    ctaLabel: "Launch Website",
    ctaHref: "/services/websites",
  },
  {
    id: "business-system",
    name: "Business System",
    price: "€8,000–€30,000",
    bestFor: "Teams that need a dashboard, internal tool, automation, portal, or connected workflow to replace manual operations.",
    includes: [
      "Requirements mapping and build priority plan",
      "Dashboard, web app, CRM flow, or automation build",
      "Integrations, data foundations, and AI-assisted steps where useful",
      "Testing, deployment, documentation, and handover",
    ],
    timeline: "4–12 weeks",
    ctaLabel: "Scope Business System",
    ctaHref: "/contact",
    recommended: true,
  },
  {
    id: "technical-partner",
    name: "Technical Partner",
    price: "€2,000–€6,000/month",
    bestFor: "Teams that want ongoing technical execution, support, maintenance, automation improvement, and roadmap guidance.",
    includes: [
      "Monthly support and improvements",
      "Automation and deployment care",
      "Troubleshooting and documentation",
      "Technical roadmap guidance",
    ],
    timeline: "Ongoing",
    ctaLabel: "Discuss Partnership",
    ctaHref: "/services/technical-partner",
  },
];

export const pricingAuditNote =
  "Not sure what to build first? Start with a Digital Systems & AI Audit from €1,200 to map the right website, app, dashboard, CRM, or automation path.";

export const pricingNote =
  "Final pricing depends on scope, integrations, data complexity, automation risk, content depth, and support requirements. If the full system is too large for day one, we can start with a focused phase and grow it deliberately.";
