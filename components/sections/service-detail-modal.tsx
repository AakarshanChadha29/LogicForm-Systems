"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { GlassModal } from "@/components/ui/glass-modal";
import { buttonVariants } from "@/components/ui/button";
import type { ServiceOffering } from "@/data/services";
import { serviceIconMap } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

type ServiceDetailModalProps = {
  service: ServiceOffering | null;
  onClose: () => void;
};

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const Icon = serviceIconMap[service.icon];
  const { detail } = service;
  const titleId = `${service.id}-modal-title`;
  const descriptionId = `${service.id}-modal-description`;

  return (
    <GlassModal
      open={Boolean(service)}
      onClose={onClose}
      titleId={titleId}
      descriptionId={descriptionId}
    >
      <p className="text-eyebrow">{service.label}</p>
      <div className="mt-3 flex items-start gap-3 pr-10">
        <span className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--accent-muted)] p-2.5 text-accent">
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <h2 id={titleId} className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {service.title}
          </h2>
          <p id={descriptionId} className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
            {detail.overview}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <ModalBlock title="Use cases" items={detail.useCases} />
        <ModalBlock title="Included" items={detail.included} />
      </div>

      <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
        <p className="text-eyebrow">Technical approach</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail.technicalApproach}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-[var(--border)] pt-5">
        <div>
          <p className="text-eyebrow">Starting price</p>
          <p className="mt-1 text-lg font-semibold text-accent">{detail.startingPrice}</p>
        </div>
        <div>
          <p className="text-eyebrow">Timeline</p>
          <p className="mt-1 text-sm text-foreground">{detail.timeline}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href="#contact"
          onClick={onClose}
          className={cn(buttonVariants({ size: "lg" }))}
        >
          {detail.ctaLabel}
          <ArrowRight size={16} aria-hidden />
        </Link>
        <Link
          href={service.fullPageHref}
          onClick={onClose}
          className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
        >
          Read full page
        </Link>
      </div>
    </GlassModal>
  );
}

function ModalBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
      <p className="text-eyebrow">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
            <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
