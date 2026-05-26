import type { Metadata } from "next";

import { ServiceFullPage } from "@/components/sections/service-full-page";
import { servicePageBySlug } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const service = servicePageBySlug.websites;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: "/services/websites" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/websites`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function WebsitesPage() {
  return <ServiceFullPage service={service} />;
}
