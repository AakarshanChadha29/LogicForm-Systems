import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { NeuralBackground } from "@/components/layout/neural-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
  themeColor: "#050505",
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
  authors: [{ name: siteConfig.founderName }],
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
        logo: `${siteConfig.url}/icon.svg`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.contactEmail,
            availableLanguage: ["English", "German", "Hindi"],
          },
        ],
        sameAs: [siteConfig.socialLinks.linkedin, siteConfig.socialLinks.github],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}#founder`,
        name: siteConfig.founderName,
        jobTitle: siteConfig.founderTitle,
        worksFor: { "@id": `${siteConfig.url}#organization` },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Technische Universität Berlin",
        },
        knowsAbout: [
          "AI systems",
          "Cloud infrastructure",
          "Full-stack software engineering",
          "IT operations",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        provider: {
          "@id": `${siteConfig.url}#organization`,
        },
        serviceType: [
          "AI and Automation Systems",
          "Full-Stack SaaS Engineering",
          "Cloud Infrastructure",
          "IT Systems and Operations",
          "Data and Dashboard Solutions",
        ],
        areaServed: ["Germany", "Europe", "India", "International"],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
