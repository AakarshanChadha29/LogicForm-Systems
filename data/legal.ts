export type LegalPageContent = {
  slug: string;
  title: string;
  description: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

// NOTE: Legal text below is placeholder content and should be reviewed by a qualified legal professional before final publication.

export const legalPages: LegalPageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How Logicform Systems handles personal data and website inquiries.",
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Logicform Systems respects your privacy and processes personal data in accordance with applicable data protection laws.",
          "This policy explains what information we collect, why we collect it, and how we use it when you visit our website or contact us.",
        ],
      },
      {
        heading: "Data we collect",
        paragraphs: [
          "When you submit an inquiry, we may collect your name, email address, company name, project details, and related communication content.",
          "We may also collect basic technical data such as browser type, device information, and page usage through standard analytics tools.",
        ],
      },
      {
        heading: "How we use data",
        paragraphs: [
          "We use inquiry data to respond to project requests, assess scope, and communicate about potential engagements.",
          "We do not sell personal data to third parties.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    description: "General terms governing use of the Logicform Systems website.",
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
        ],
      },
    ],
  },
  {
    slug: "gdpr",
    title: "GDPR Information",
    description: "Information for users regarding GDPR-related data rights and processing.",
    sections: [
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on your location, you may have rights to access, rectify, erase, restrict, or object to processing of your personal data.",
          "You may also have the right to data portability and to lodge a complaint with a supervisory authority.",
        ],
      },
      {
        heading: "Contact for privacy requests",
        paragraphs: [
          "For privacy-related requests, contact contact@logicformsystems.com with sufficient detail to identify your request.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "Information about cookies and similar technologies used on this website.",
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
          "We may use essential cookies required for site functionality and analytics cookies to understand traffic and improve content.",
        ],
      },
    ],
  },
  {
    slug: "imprint",
    title: "Imprint",
    description: "Legal imprint and company information for Logicform Systems.",
    sections: [
      {
        heading: "Company",
        paragraphs: [
          "Logicform Systems",
          "Website: https://logicformsystems.com",
          "Email: contact@logicformsystems.com",
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
