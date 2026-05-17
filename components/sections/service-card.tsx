import { BarChart3, Bot, CloudCog, Headset, Layers3 } from "lucide-react";

import type { ServiceOffering } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap = {
  bot: Bot,
  layers: Layers3,
  cloud: CloudCog,
  operations: Headset,
  chart: BarChart3,
} as const;

type ServiceCardProps = {
  service: ServiceOffering;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6 transition-[border-color,box-shadow,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white/[0.03] hover:shadow-[0_14px_38px_-28px_rgba(0,162,255,0.45)]",
        className,
      )}
    >
      <header className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent/90">
            {service.label}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
        </div>
        <span className="rounded-md border border-white/20 bg-white/5 p-2 text-muted-foreground">
          <Icon size={18} aria-hidden />
        </span>
      </header>

      <p className="text-sm leading-relaxed text-zinc-300">{service.description}</p>

      <div className="mt-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Capabilities
        </p>
        <ul className="mt-2 space-y-2">
          {service.capabilities.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
              <span className="mt-[0.44rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/85" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-white/10 pt-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Outcomes
        </p>
        <ul className="mt-2 space-y-1.5">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="text-sm text-zinc-400">
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
