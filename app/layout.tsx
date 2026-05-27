import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google";

import { NeuralBackground } from "@/components/layout/neural-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const pageTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  category: "technology",
  authors: [
    { name: siteConfig.founders.technical.name },
    { name: siteConfig.founders.commercial.name },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: pageTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.svg`,
        email: siteConfig.contactEmail,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.contactEmail,
            availableLanguage: ["English", "German", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.enquiryEmail,
          },
        ],
        sameAs: [siteConfig.socialLinks.linkedin, siteConfig.socialLinks.github],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#founder-technical`,
        name: siteConfig.founders.technical.name,
        jobTitle: siteConfig.founders.technical.title,
        email: siteConfig.founders.technical.email,
        worksFor: { "@id": `${siteConfig.url}#organization` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#founder-commercial`,
        name: siteConfig.founders.commercial.name,
        jobTitle: siteConfig.founders.commercial.title,
        email: siteConfig.founders.commercial.email,
        worksFor: { "@id": `${siteConfig.url}#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        provider: { "@id": `${siteConfig.url}#organization` },
        serviceType: [
          "Websites and Digital Presence",
          "Custom Web Applications",
          "Dashboards and Reporting",
          "AI Workflow Automation",
          "Cloud Deployment and Maintenance",
          "IT Systems and Operations",
          "Technical Partnership",
        ],
        areaServed: siteConfig.markets,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-clip bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-sm focus:text-[#0a0a0a]"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div data-theme="dark" className="relative min-h-screen">
          <NeuralBackground />
          {children}
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
