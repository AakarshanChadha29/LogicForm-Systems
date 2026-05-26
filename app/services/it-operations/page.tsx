import type { Metadata } from "next";

import { ServiceFullPage } from "@/components/sections/service-full-page";
import { servicePageBySlug } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const service = servicePageBySlug["it-operations"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: "/services/it-operations" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/it-operations`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ItOperationsPage() {
  return <ServiceFullPage service={service} />;
}
