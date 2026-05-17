"use client";

import Link from "next/link";
import { ArrowRight, Code2, Link2, Mail } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Website / Landing Page",
  "SaaS / Dashboard",
  "AI / Automation",
  "Cloud / Infrastructure",
  "IT Systems / Operations",
  "Ongoing Technical Partner",
] as const;

const budgetRanges = [
  "Under €1,000",
  "€1,000–€2,500",
  "€2,500–€5,000",
  "€5,000–€10,000",
  "€10,000+",
] as const;

const timelines = [
  "As soon as possible",
  "2–4 weeks",
  "1–3 months",
  "Flexible",
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState<(typeof projectTypes)[number]>(projectTypes[0]);
  const [budgetRange, setBudgetRange] = useState<(typeof budgetRanges)[number]>(budgetRanges[1]);
  const [timeline, setTimeline] = useState<(typeof timelines)[number]>(timelines[1]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const year = useMemo(() => new Date().getFullYear(), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType,
          budgetRange,
          timeline,
          message,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setHoneypot("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="section-divider pb-16">
      <Container>
        <div className="surface-card p-6 md:p-9">
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

            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-inset)] p-5">
              <p className="text-eyebrow">Project inquiry</p>

              {status === "success" ? (
                <p className="mt-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-4 text-sm leading-relaxed text-[var(--foreground-secondary)]">
                  Thanks — your inquiry has been sent. I&apos;ll review the scope and reply with practical next steps.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate>
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                  />

                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs text-muted-foreground">
                      Work email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="mb-1.5 block text-xs text-muted-foreground">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      autoComplete="organization"
                      placeholder="Company or project name"
                      className={inputClassName}
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-type" className="mb-1.5 block text-xs text-muted-foreground">
                        Project type
                      </label>
                      <select
                        id="contact-type"
                        value={projectType}
                        onChange={(event) => setProjectType(event.target.value as (typeof projectTypes)[number])}
                        className={inputClassName}
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="mb-1.5 block text-xs text-muted-foreground">
                        Budget range
                      </label>
                      <select
                        id="contact-budget"
                        value={budgetRange}
                        onChange={(event) => setBudgetRange(event.target.value as (typeof budgetRanges)[number])}
                        className={inputClassName}
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="mb-1.5 block text-xs text-muted-foreground">
                      Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={timeline}
                      onChange={(event) => setTimeline(event.target.value as (typeof timelines)[number])}
                      className={inputClassName}
                    >
                      {timelines.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs text-muted-foreground">
                      Project summary
                    </label>
                    <textarea
                      id="contact-message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                      minLength={20}
                      rows={4}
                      placeholder="What are you building? Goals, timeline, and constraints."
                      className={cn(inputClassName, "resize-y")}
                    />
                  </div>

                  {status === "error" ? (
                    <p className="text-sm text-red-600" role="alert">
                      Something went wrong. Please email{" "}
                      <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
                        {siteConfig.contactEmail}
                      </a>{" "}
                      directly.
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(buttonVariants({ size: "lg" }), "w-full")}
                  >
                    {status === "loading" ? "Sending…" : "Send inquiry"}
                    <ArrowRight size={16} aria-hidden />
                  </button>
                </form>
              )}

              <p className="mt-3 text-xs text-muted-foreground">
                Prefer email?{" "}
                <a href={`mailto:${siteConfig.contactEmail}`} className="underline hover:text-foreground">
                  {siteConfig.contactEmail}
                </a>
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-4">
                <Link
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-white px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Link2 size={13} aria-hidden />
                  LinkedIn
                </Link>
                <Link
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-white px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Code2 size={13} aria-hidden />
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          <footer className="mt-8 border-t border-[var(--border)] pt-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <Logo size="sm" linked={false} />
              <p className="text-xs text-muted-foreground">
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
