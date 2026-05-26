import type { ProjectMockupType } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectMockupPreviewProps = {
  type: ProjectMockupType;
  title: string;
  className?: string;
};

export function ProjectMockupPreview({ type, title, className }: ProjectMockupPreviewProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-3",
        className,
      )}
      aria-hidden
    >
      <div className="mb-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[rgba(212,175,55,0.45)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(255,255,255,0.12)]" />
        <span className="h-2 w-2 rounded-full bg-[rgba(255,255,255,0.12)]" />
        <span className="ml-2 truncate text-[10px] text-muted-foreground">{title}</span>
      </div>

      {type === "browser" ? <BrowserMockup /> : null}
      {type === "dashboard" ? <DashboardMockup /> : null}
      {type === "terminal" ? <TerminalMockup /> : null}
      {type === "app" ? <AppMockup /> : null}
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="space-y-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[rgba(0,0,0,0.35)] p-3">
      <div className="h-2 w-2/3 rounded bg-[var(--accent-muted)]" />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 h-16 rounded bg-[rgba(255,255,255,0.06)]" />
        <div className="h-16 rounded bg-[rgba(212,175,55,0.12)]" />
      </div>
      <div className="h-2 w-full rounded bg-[rgba(255,255,255,0.05)]" />
      <div className="h-2 w-4/5 rounded bg-[rgba(255,255,255,0.05)]" />
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[rgba(0,0,0,0.35)] p-3">
      <div className="h-10 rounded bg-[rgba(212,175,55,0.14)]" />
      <div className="h-10 rounded bg-[rgba(255,255,255,0.06)]" />
      <div className="col-span-2 h-20 rounded bg-[rgba(255,255,255,0.05)]" />
      <div className="h-8 rounded bg-[rgba(255,255,255,0.05)]" />
      <div className="h-8 rounded bg-[rgba(212,175,55,0.1)]" />
    </div>
  );
}

function TerminalMockup() {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[rgba(0,0,0,0.5)] p-3 font-mono text-[10px] leading-relaxed text-[var(--foreground-secondary)]">
      <p>
        <span className="text-accent">$</span> retrieve --sources grounded
      </p>
      <p className="text-[var(--accent-hover)]">pipeline ready · eval mode on</p>
      <p className="mt-2 text-muted-foreground">index: docs · status: ok</p>
    </div>
  );
}

function AppMockup() {
  return (
    <div className="flex gap-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[rgba(0,0,0,0.35)] p-3">
      <div className="w-1/3 space-y-2">
        <div className="h-3 rounded bg-[rgba(212,175,55,0.2)]" />
        <div className="h-3 rounded bg-[rgba(255,255,255,0.06)]" />
        <div className="h-3 rounded bg-[rgba(255,255,255,0.06)]" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-12 rounded bg-[rgba(255,255,255,0.06)]" />
        <div className="h-3 rounded bg-[rgba(255,255,255,0.05)]" />
        <div className="h-3 w-2/3 rounded bg-[rgba(255,255,255,0.05)]" />
      </div>
    </div>
  );
}
