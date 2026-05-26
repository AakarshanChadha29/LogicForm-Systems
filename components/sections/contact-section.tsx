"use client";

import Link from "next/link";
import { Code2, Link2, Mail } from "lucide-react";
import { useMemo } from "react";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TerminalContactForm } from "@/components/sections/terminal-contact-form";
import { buttonVariants } from "@/components/ui/button";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Section id="contact" className="section-divider pb-16">
      <Container>
        <div className="glass-card p-6 md:p-9">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Start a project with clear scope
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Share your goals, timeline, and constraints. You will receive a practical engineering
                perspective—not a generic sales pitch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${siteConfig.contactEmail}`} className={buttonVariants({ size: "lg" })}>
                  <Mail size={16} aria-hidden />
                  Email directly
                </a>
              </div>
              <dl className="mt-8 grid gap-3 text-sm">
                <div>
                  <dt className="text-eyebrow">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-muted-foreground hover:text-accent">
                      {siteConfig.contactEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-eyebrow">Engagement types</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Websites · SaaS · Automation · Cloud · Ongoing technical partnership
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

          <footer className="mt-8 border-t border-[var(--border)] pt-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <Logo size="sm" linked={false} framed={false} />
              <p className="text-xs text-muted-foreground">
                © {year} {siteConfig.name}. All rights reserved.
              </p>
              <nav aria-label="Footer" className="flex flex-wrap gap-4">
                {footerLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </footer>
        </div>
      </Container>
    </Section>
  );
}
