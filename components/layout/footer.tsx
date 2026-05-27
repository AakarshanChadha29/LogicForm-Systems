import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[rgba(0,0,0,0.35)]">
      <Container className="py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="lg" linked={false} framed={false} showTagline />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium digital systems for businesses that need clarity, execution, and long-term
              technical partnership.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a href={`mailto:${siteConfig.contactEmail}`} className="block text-muted-foreground hover:text-accent">
                {siteConfig.contactEmail}
              </a>
              <a href={`mailto:${siteConfig.infoEmail}`} className="block text-muted-foreground hover:text-accent">
                {siteConfig.infoEmail}
              </a>
              <a href={`mailto:${siteConfig.enquiryEmail}`} className="block text-muted-foreground hover:text-accent">
                {siteConfig.enquiryEmail}
              </a>
            </div>
          </div>

          <div>
            <p className="text-eyebrow">Company</p>
            <nav aria-label="Footer company links" className="mt-4 flex flex-col gap-2">
              {footerLinks.company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-eyebrow">Legal</p>
            <nav aria-label="Footer legal links" className="mt-4 flex flex-col gap-2">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-eyebrow">Delivery</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Remote-first systems work for businesses operating across teams, tools, and markets.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
