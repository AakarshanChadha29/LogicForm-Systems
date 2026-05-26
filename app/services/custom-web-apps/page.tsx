import type { Metadata } from "next";

import { ServiceFullPage } from "@/components/sections/service-full-page";
import { servicePageBySlug } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const service = servicePageBySlug["custom-web-apps"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: "/services/custom-web-apps" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/custom-web-apps`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function CustomWebAppsPage() {
  return <ServiceFullPage service={service} />;
}
