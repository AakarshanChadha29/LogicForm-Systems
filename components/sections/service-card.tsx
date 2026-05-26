import type { ServiceOffering } from "@/data/services";
import { serviceIconMap } from "@/lib/service-icons";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: ServiceOffering;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = serviceIconMap[service.icon];

  return (
    <article className={cn("surface-card-interactive flex h-full flex-col p-6", className)}>
      <header className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-eyebrow">{service.label}</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
        </div>
        <span className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--accent-muted)] p-2 text-accent">
          <Icon size={17} strokeWidth={1.75} aria-hidden />
        </span>
      </header>

      <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <div className="mt-6 border-t border-[var(--border)] pt-5">
        <p className="text-eyebrow">Capabilities</p>
        <ul className="mt-3 space-y-2">
          {service.capabilities.map((item) => (
            <li key={item} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-[var(--border)] pt-5">
        <p className="text-eyebrow">Outcomes</p>
        <ul className="mt-3 space-y-1.5">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="text-sm text-muted-foreground/90">
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
