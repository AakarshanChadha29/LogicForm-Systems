"use client";

import Link from "next/link";
import { Code2, Link2, Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TerminalContactForm } from "@/components/sections/terminal-contact-form";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactSection({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="contact" className={compact ? "!pb-10" : "section-divider pb-16"}>
      <Container>
        <div className="premium-media overflow-hidden rounded-[var(--radius-xl)] p-6 md:p-9">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-eyebrow">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Bring the business problem. We will shape the system.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                Share the goal, bottleneck, timeline, existing tools, and decision makers. You will
                get a practical next step, not a vague sales call.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${siteConfig.contactEmail}`} className={buttonVariants({ size: "lg" })}>
                  <Mail size={16} aria-hidden />
                  Email directly
                </a>
              </div>
              <dl className="mt-8 grid gap-3 text-sm">
                <div>
                  <dt className="text-eyebrow">Contact</dt>
                  <dd className="mt-1 space-y-1">
                    <a href={`mailto:${siteConfig.contactEmail}`} className="block text-muted-foreground hover:text-accent">
                      {siteConfig.contactEmail}
                    </a>
                    <a href={`mailto:${siteConfig.infoEmail}`} className="block text-muted-foreground hover:text-accent">
                      {siteConfig.infoEmail}
                    </a>
                    <a href={`mailto:${siteConfig.enquiryEmail}`} className="block text-muted-foreground hover:text-accent">
                      {siteConfig.enquiryEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow">Engagement types</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Websites · Apps · Dashboards · Automation · Cloud · Technical partnership
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <TerminalContactForm />
              <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                <Link
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                >
                  <Link2 size={13} aria-hidden />
                  LinkedIn
                </Link>
                <Link
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-card)] px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                >
                  <Code2 size={13} aria-hidden />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
