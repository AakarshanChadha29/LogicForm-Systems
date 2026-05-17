"use client";

import Link from "next/link";
import { ArrowRight, Code2, Link2, Mail } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const terminalLines = [
  "Initializing Veltrix delivery protocol...",
  "Scope: AI · SaaS · Cloud · IT Systems",
  "Status: Consultation channel open",
  "Action: Share your project brief",
] as const;

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [typedLineIndex, setTypedLineIndex] = useState(0);
  const [typedCharCount, setTypedCharCount] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentLine = terminalLines[typedLineIndex];
  const terminalDisplay = prefersReducedMotion
    ? terminalLines
    : terminalLines.map((line, index) => {
        if (index < typedLineIndex) return line;
        if (index > typedLineIndex) return "";
        return line.slice(0, typedCharCount);
      });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const tick = window.setTimeout(
      () => {
        if (typedCharCount < currentLine.length) {
          setTypedCharCount((value) => value + 1);
          return;
        }

        if (typedLineIndex < terminalLines.length - 1) {
          setTypedLineIndex((value) => value + 1);
          setTypedCharCount(0);
          return;
        }

        setTypedLineIndex(0);
        setTypedCharCount(0);
      },
      typedCharCount < currentLine.length ? 30 : 900,
    );

    return () => window.clearTimeout(tick);
  }, [currentLine.length, prefersReducedMotion, typedCharCount, typedLineIndex]);

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
    <Section id="contact" className="pb-14">
      <Container>
        <div className="rounded-[var(--radius-xl)] border border-white/12 bg-white/[0.02] p-6 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-accent/90">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Start a Project with Veltrix Labs
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Tell us what you are building—website, SaaS platform, automation workflow,
                dashboard, or ongoing technical support. We will respond with a practical
                next step.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                  Start a Project
                </Link>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className={buttonVariants({ variant: "ghost", size: "lg" })}
                >
                  <Mail size={16} aria-hidden />
                  Email Us
                </a>
              </div>

              <div
                className="mt-6 rounded-[var(--radius-lg)] border border-white/12 bg-[#0b0f17]/75 p-4 font-mono"
                aria-hidden={prefersReducedMotion ?? undefined}
              >
                <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  veltrix://consultation/status
                </p>
                <div className="space-y-2 text-sm text-zinc-300">
                  {terminalDisplay.map((line, index) => (
                    <p key={terminalLines[index]}>
                      <span className="mr-2 text-accent">{">"}</span>
                      <span>{line}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Project Brief
              </p>
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    placeholder="Work email"
                    className="w-full rounded-[var(--radius-md)] border border-white/20 bg-black/55 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Project summary
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={4}
                    placeholder="What are you building? Timeline, goals, and constraints."
                    className="w-full resize-y rounded-[var(--radius-md)] border border-white/20 bg-black/55 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
                  />
                </div>
                <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full")}>
                  Send Project Brief
                  <ArrowRight size={16} aria-hidden />
                </button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                Submit opens your email client to {siteConfig.contactEmail}.
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Network
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <Link2 size={13} aria-hidden />
                    LinkedIn
                  </Link>
                  <Link
                    href={siteConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    <Code2 size={13} aria-hidden />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-7 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>
                © {year} {siteConfig.name}. All rights reserved.
              </p>
              <nav aria-label="Footer" className="flex flex-wrap gap-4">
                {footerLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-white"
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
