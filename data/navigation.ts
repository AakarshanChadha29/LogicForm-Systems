export const navigationItems = [
  { label: "Services", href: "/services" },
  { label: "System Finder", href: "/finder" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const footerLinks = {
  company: [
    { label: "Services", href: "/services" },
    { label: "System Finder", href: "/finder" },
    { label: "Pricing", href: "/pricing" },
    { label: "Our work", href: "/about#our-work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms", href: "/legal/terms-and-conditions" },
    { label: "GDPR", href: "/legal/gdpr" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
    { label: "Imprint", href: "/legal/imprint" },
  ],
} as const;
