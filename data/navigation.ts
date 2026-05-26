export const navigationItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "AI Updates", href: "/ai-updates" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "AI Updates", href: "/ai-updates" },
    { label: "FAQ", href: "/faq" },
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
