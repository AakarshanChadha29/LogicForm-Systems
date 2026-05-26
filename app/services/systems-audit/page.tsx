import type { Metadata } from "next";

import { ServiceFullPage } from "@/components/sections/service-full-page";
import { servicePageBySlug } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const service = servicePageBySlug["systems-audit"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: "/services/systems-audit" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/systems-audit`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function SystemsAuditPage() {
  return <ServiceFullPage service={service} />;
}
