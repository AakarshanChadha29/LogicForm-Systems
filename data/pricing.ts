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
    bestFor: "Businesses that need a serious website with positioning, conversion flow, SEO structure, and production deployment.",
    includes: [
      "Responsive website structure",
      "SEO-ready setup",
      "Contact and lead capture",
      "Deployment and analytics basics",
    ],
    timeline: "2–5 weeks",
    ctaLabel: "Launch Website",
    ctaHref: "/services/websites",
  },
  {
    id: "business-system",
    name: "Business System",
    price: "€8,000–€30,000",
    bestFor: "Dashboards, internal tools, automations, portals, and connected workflows that replace manual operations.",
    includes: [
      "Requirements and system mapping",
      "Dashboard, app, or automation build",
      "Integrations and data foundations",
      "Deployment and handover",
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
    bestFor: "Teams that need a reliable technical partner for roadmap execution, support, maintenance, and system improvement.",
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
  "Need clarity before building? Start with a Digital Systems Audit from €1,200.";

export const pricingNote =
  "Final pricing depends on scope, integrations, data complexity, automation risk, content depth, and support requirements. Smaller implementation phases are possible when a project needs to start lean and grow deliberately.";
