"use client";

import Link from "next/link";
import { ArrowRight, Code2, Link2, Mail } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      `From: ${email}`,
      "",
      message || "Please describe your project goals, timeline, and constraints.",
    ].join("\n");
    const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Project inquiry — Veltrix Labs")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Section id="contact" className="section-divider pb-16">
      <Container>
        <div className="surface-card p-6 md:p-9">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-eyebrow">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Discuss your next system
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Share your project scope, timeline, and constraints. We respond with a
                practical engineering perspective—not a generic sales pitch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${siteConfig.contactEmail}`} className={buttonVariants({ size: "lg" })}>
                  <Mail size={16} aria-hidden />
                  Email Us
                </a>
              </div>
              <dl className="mt-8 grid gap-3 text-sm">
                <div>
                  <dt className="text-eyebrow">Email</dt>
                  <dd className="mt-1 text-muted-foreground">{siteConfig.contactEmail}</dd>
                </div>
                <div>
                  <dt className="text-eyebrow">Engagement types</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Websites · SaaS · Automation · Cloud · Ongoing technical partnership
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-inset)] p-5">
              <p className="text-eyebrow">Project inquiry</p>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs text-muted-foreground">
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs text-muted-foreground">
                    Project summary
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    placeholder="What are you building? Timeline, goals, and constraints."
                    className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-card)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  />
                </div>
                <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full")}>
                  Send inquiry
                  <ArrowRight size={16} aria-hidden />
                </button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                Opens your email client to {siteConfig.contactEmail}.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                <Link
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Link2 size={13} aria-hidden />
                  LinkedIn
                </Link>
                <Link
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Code2 size={13} aria-hidden />
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          <footer className="mt-8 border-t border-[var(--border)] pt-6">
            <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>
                © {year} {siteConfig.name}. All rights reserved.
              </p>
              <nav aria-label="Footer" className="flex flex-wrap gap-4">
                {footerLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-foreground"
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
