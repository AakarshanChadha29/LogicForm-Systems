export type LegalPageContent = {
  slug: string;
  title: string;
  description: string;
  lastUpdated?: string;
  notice?: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

// NOTE: Legal text should be reviewed by a qualified legal professional before final publication.

export const legalPages: LegalPageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How Logicform Systems handles personal data, project inquiries, and website communication.",
    lastUpdated: "27 May 2026",
    notice:
      "This policy is written for clarity and should be reviewed against the final company structure, hosting setup, analytics tools, and processor list before publication.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Logicform Systems designs, builds, and maintains websites, internal tools, dashboards, automation systems, and AI-assisted workflows.",
          "When you use this website or contact us about a project, we may process personal data so we can respond, understand your request, prepare a proposal, and deliver agreed services.",
        ],
      },
      {
        heading: "Personal data we may collect",
        paragraphs: [
          "Inquiry data may include your name, email address, company name, role, website, budget range, project details, preferred contact method, and any information you choose to include in a message.",
          "Technical data may include device type, browser type, approximate location derived from technical signals, pages visited, referrer, time of visit, and basic security logs.",
          "Project data may include requirements, meeting notes, workflow details, documents, screenshots, system descriptions, and access information that you provide during discovery or delivery.",
        ],
      },
      {
        heading: "Why we process personal data",
        paragraphs: [
          "We process inquiry and communication data to respond to requests, assess project fit, prepare scopes, manage client relationships, and provide support.",
          "We process technical data to keep the website secure, understand performance, diagnose issues, and improve user experience.",
          "Where a project uses AI-assisted workflows, data should be handled according to the agreed project scope, access controls, and privacy requirements. Sensitive or regulated data should not be submitted unless the processing arrangement has been agreed in writing.",
        ],
      },
      {
        heading: "Legal bases",
        paragraphs: [
          "Depending on the context, processing may be based on legitimate interests, steps taken before entering into a contract, performance of a contract, consent, or compliance with legal obligations.",
          "Where consent is used, you can withdraw it at any time. Withdrawal does not affect processing that happened before consent was withdrawn.",
        ],
      },
      {
        heading: "Sharing and processors",
        paragraphs: [
          "We do not sell personal data. We may share data with service providers that help us operate the website, communicate with clients, host systems, manage email, process forms, monitor security, or deliver agreed work.",
          "Where required, processors should be subject to appropriate contractual safeguards, confidentiality obligations, and security measures.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Inquiry data is kept only as long as needed to respond, manage follow-up, maintain business records, or comply with legal obligations.",
          "Client and project records may be retained for the duration of the engagement and for a reasonable period afterwards for support, accounting, legal, and operational continuity purposes.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on applicable law, you may have rights to access, rectify, erase, restrict, object to processing, and receive a portable copy of your personal data.",
          "You may also have the right to lodge a complaint with a relevant supervisory authority. To make a privacy request, contact contact@logicformsystems.com with enough detail for us to identify and respond to the request.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    description: "General terms governing use of the Logicform Systems website.",
    lastUpdated: "27 May 2026",
    notice:
      "These website terms describe general website use only. Client projects should be governed by a separate proposal, statement of work, or services agreement.",
    sections: [
      {
        heading: "Website use",
        paragraphs: [
          "By accessing this website, you agree to use it for lawful purposes only.",
          "Content on this website is provided for general information and does not constitute a binding offer unless confirmed in a separate written agreement.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All website content, branding, and materials remain the property of Logicform Systems unless otherwise stated.",
          "You may not copy, reproduce, modify, distribute, or commercially reuse website content without written permission, except where allowed by applicable law.",
        ],
      },
      {
        heading: "Project information",
        paragraphs: [
          "Information on this website is provided to help visitors understand possible services, engagement models, and starting points.",
          "Prices, timelines, and service descriptions are indicative unless confirmed in a written proposal or agreement.",
        ],
      },
      {
        heading: "External links and third-party tools",
        paragraphs: [
          "This website may reference third-party platforms, tools, or services. Those references do not mean that Logicform Systems controls or endorses every third-party policy, feature, or availability claim.",
          "Use of third-party services during a client project may be subject to separate terms, pricing, data protection obligations, and security requirements.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "We aim to keep website information accurate and useful, but we do not guarantee that the website will always be available, complete, or error-free.",
          "Nothing on this website limits liability where such limitation is not permitted by applicable law.",
        ],
      },
    ],
  },
  {
    slug: "gdpr",
    title: "GDPR and Data Rights",
    description: "Clear information about GDPR rights, data handling, processors, and privacy requests.",
    lastUpdated: "27 May 2026",
    notice:
      "This page explains the intended privacy posture in plain English. It is not legal advice and should be checked against the final business setup, processors, and client contracts.",
    sections: [
      {
        heading: "Our GDPR posture",
        paragraphs: [
          "Logicform Systems aims to design websites, forms, dashboards, automations, and AI-assisted workflows with privacy, access control, and data minimisation in mind.",
          "For client work, GDPR responsibilities depend on the role Logicform Systems plays in the project. In some contexts we may act as an independent controller; in others, we may act as a processor under client instructions.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "The GDPR gives individuals rights over their personal data, including the right of access, rectification, erasure, restriction, objection, and data portability where the conditions for those rights are met.",
          "You may also have the right to complain to a supervisory authority if you believe your personal data has not been handled correctly.",
        ],
      },
      {
        heading: "Data minimisation and purpose limitation",
        paragraphs: [
          "We aim to collect only the information needed to understand an inquiry, deliver a project, maintain systems, or meet legal and operational obligations.",
          "Project data should be scoped carefully so unnecessary personal data is not imported into dashboards, automations, AI prompts, logs, or support workflows.",
        ],
      },
      {
        heading: "AI-assisted workflows",
        paragraphs: [
          "AI can support drafting, summarising, classification, routing, and automation, but privacy requirements still apply. Human review, access control, logging, and clear processing instructions remain important.",
          "Where AI tools process client data, the tool choice, data categories, retention settings, and processor terms should be reviewed before use.",
        ],
      },
      {
        heading: "Security and access control",
        paragraphs: [
          "Good systems work should include role-based access, least-privilege permissions, secure deployment practices, backup planning, and practical monitoring.",
          "The exact measures depend on project scope, data sensitivity, hosting choices, and the third-party platforms involved.",
        ],
      },
      {
        heading: "Contact for privacy requests",
        paragraphs: [
          "For privacy-related requests, contact contact@logicformsystems.com with sufficient detail to identify your request.",
          "We may need to verify your identity before acting on certain requests, especially where the request involves access, deletion, or disclosure of personal data.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "Information about cookies and similar technologies used on this website.",
    lastUpdated: "27 May 2026",
    notice:
      "The final cookie wording should match the actual analytics, tracking, consent, and hosting tools enabled on the live website.",
    sections: [
      {
        heading: "What are cookies",
        paragraphs: [
          "Cookies are small text files stored on your device to help websites function, remember preferences, and understand usage patterns.",
        ],
      },
      {
        heading: "How we use cookies",
        paragraphs: [
          "We may use essential cookies required for site functionality, security, and performance.",
          "If analytics, advertising, or embedded third-party tools are enabled, they should be disclosed clearly and, where required, controlled through consent settings.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can usually control cookies through your browser settings. Blocking some cookies may affect website functionality.",
          "If a cookie consent tool is used on the website, it should allow visitors to make and update choices where required by applicable law.",
        ],
      },
    ],
  },
  {
    slug: "imprint",
    title: "Imprint",
    description: "Legal imprint and company information for Logicform Systems.",
    lastUpdated: "27 May 2026",
    notice:
      "The imprint must be completed with the final legal address, registration, tax, and responsible-party details required for the business jurisdiction before publication.",
    sections: [
      {
        heading: "Company",
        paragraphs: [
          "Logicform Systems",
          "Website: https://logicformsystems.com",
          "Email: contact@logicformsystems.com",
          "Legal address: to be completed before publication",
          "Registration or tax details: to be completed before publication where legally required",
        ],
      },
      {
        heading: "Responsible for content",
        paragraphs: [
          "Logicform Systems",
          "Represented by Aakarshan Chadha and Francesca Manes",
        ],
      },
    ],
  },
];

export const legalPageBySlug = Object.fromEntries(legalPages.map((page) => [page.slug, page])) as Record<
  string,
  LegalPageContent
>;
