import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { arroyoTestimonial } from "@/data/trust";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="section-divider py-[calc(var(--section-space)*0.75)]">
      <Container>
        <SectionHeader
          eyebrow="Client Proof"
          title="Verified Client Feedback"
          description="Approved feedback from a delivered client engagement. We do not publish fabricated testimonials."
        />

        <article className="surface-card max-w-3xl p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-inset)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--accent-secondary)]">
              {arroyoTestimonial.label}
            </span>
            <Quote size={20} className="shrink-0 text-[var(--border-strong)]" aria-hidden />
          </div>

          <blockquote className="mt-5 text-lg leading-relaxed text-[var(--foreground-secondary)]">
            &ldquo;{arroyoTestimonial.quote}&rdquo;
          </blockquote>

          <footer className="mt-6 border-t border-[var(--border)] pt-5">
            <p className="text-sm font-semibold text-foreground">{arroyoTestimonial.reviewerName}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{arroyoTestimonial.reviewerRole}</p>
            <p className="mt-1 text-sm text-muted-foreground">{arroyoTestimonial.company}</p>
            <Link
              href={arroyoTestimonial.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
            >
              Visit Live Project
              <ArrowUpRight size={15} aria-hidden />
            </Link>
          </footer>
        </article>
      </Container>
    </Section>
  );
}
