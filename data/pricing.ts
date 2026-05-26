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
    price: "From €1,500–€3,500",
    bestFor: "Businesses that need a credible, conversion-ready web presence.",
    includes: [
      "Responsive website structure",
      "SEO-ready setup",
      "Contact and lead capture",
      "Deployment and analytics basics",
    ],
    timeline: "1–3 weeks",
    ctaLabel: "Launch Website",
    ctaHref: "/services/websites",
  },
  {
    id: "business-system",
    name: "Business System",
    price: "From €4,500–€12,000",
    bestFor: "Dashboards, internal tools, automations, and connected operational systems.",
    includes: [
      "Requirements and system mapping",
      "Dashboard, app, or automation build",
      "Integrations and data foundations",
      "Deployment and handover",
    ],
    timeline: "3–8 weeks",
    ctaLabel: "Scope Business System",
    ctaHref: "/contact",
    recommended: true,
  },
  {
    id: "technical-partner",
    name: "Technical Partner",
    price: "From €1,500/month",
    bestFor: "Teams needing ongoing technical support, improvements, and roadmap execution.",
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
  "Need clarity before building? Start with a Digital Systems Audit from €750.";

export const pricingNote =
  "Launch partner pricing may be available for selected companies, case-study projects, or long-term partnerships. Final pricing depends on scope, integrations, timeline, data complexity, automation risk, and support requirements.";
