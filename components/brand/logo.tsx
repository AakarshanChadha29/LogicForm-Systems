"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
  className?: string;
  linked?: boolean;
  framed?: boolean;
  showTagline?: boolean;
};

const LOGO_ALT = "Logicform Systems logo";

const markLogoSource = "/logo-mark.svg";

const sizes = {
  sm: {
    mark: { width: 28, height: 28 },
    full: { width: 164, height: 28 },
  },
  md: {
    mark: { width: 36, height: 36 },
    full: { width: 210, height: 36 },
  },
  lg: {
    mark: { width: 44, height: 44 },
    full: { width: 244, height: 44 },
  },
} as const;

function LogoText({
  size,
  showTagline,
}: {
  size: LogoProps["size"];
  showTagline?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex min-w-0 flex-col justify-center leading-none",
        size === "sm" && "gap-0.5",
        size === "md" && "gap-1",
        size === "lg" && "gap-1",
      )}
    >
      <span className="inline-flex items-baseline gap-2">
        <span
          className={cn(
            "gold-gradient-text font-semibold tracking-[0.01em]",
            size === "sm" && "text-sm",
            size === "md" && "text-[1.02rem]",
            size === "lg" && "text-[1.14rem]",
          )}
        >
          Logicform
        </span>
        <span
          className={cn(
            "font-medium tracking-[0.01em] text-[var(--foreground-secondary)]",
            size === "sm" && "text-sm",
            size === "md" && "text-[1.02rem]",
            size === "lg" && "text-[1.14rem]",
          )}
        >
          Systems
        </span>
      </span>
      {showTagline ? (
        <span className="hidden font-mono text-[0.5rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)] sm:block">
          Digital Systems Studio
        </span>
      ) : null}
    </span>
  );
}

function LogoFrame({
  children,
  size,
  className,
}: {
  children: ReactNode;
  size: LogoProps["size"];
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)]",
        "border border-[var(--border-subtle)] bg-[var(--surface-card)]/90",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_20px_-8px_rgba(212,175,55,0.2)]",
        "backdrop-blur-sm",
        size === "sm" && "px-1.5 py-1",
        size === "md" && "px-2 py-1.5",
        size === "lg" && "px-2.5 py-2",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Logo({
  variant = "full",
  size = "md",
  className,
  linked = true,
  framed = true,
  showTagline = false,
}: LogoProps) {
  const dimensions = sizes[size][variant === "mark" ? "mark" : "full"];
  const [showTextFallback, setShowTextFallback] = useState(false);

  const mark = showTextFallback ? (
    <span
      aria-hidden
      className="grid size-5 rotate-45 place-items-center border border-[var(--accent)] bg-[var(--accent-muted)]"
    >
      <span className="size-1.5 bg-[var(--accent)]" />
    </span>
  ) : (
    <Image
      src={markLogoSource}
      alt={LOGO_ALT}
      width={variant === "mark" ? dimensions.width : sizes[size].mark.width}
      height={variant === "mark" ? dimensions.height : sizes[size].mark.height}
      priority={size === "md" && linked}
      unoptimized
      onError={() => setShowTextFallback(true)}
      className={cn(
        "h-auto max-h-full w-auto max-w-full shrink-0 object-contain object-left",
        variant === "mark" && className,
      )}
    />
  );

  const content =
    variant === "mark" ? (
      mark
    ) : (
      <span className={cn("inline-flex items-center gap-2.5", className)}>
        {mark}
        <LogoText size={size} showTagline={showTagline} />
      </span>
    );

  const logoBody = framed ? (
    <LogoFrame size={size} className={linked ? undefined : className}>
      {content}
    </LogoFrame>
  ) : (
    <span className={cn("inline-flex items-center", className)}>{content}</span>
  );

  if (!linked) {
    return logoBody;
  }

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex min-w-0 shrink-0 items-center", framed ? className : undefined)}
    >
      {logoBody}
    </Link>
  );
}
