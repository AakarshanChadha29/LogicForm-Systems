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
};

const LOGO_ALT = "Logicform Systems logo";

const markLogoSource = "/logo-mark.svg";

const sizes = {
  sm: {
    mark: { width: 26, height: 26 },
    full: { width: 148, height: 25 },
  },
  md: {
    mark: { width: 32, height: 32 },
    full: { width: 188, height: 32 },
  },
  lg: {
    mark: { width: 38, height: 38 },
    full: { width: 220, height: 37 },
  },
} as const;

function LogoText({ size }: { size: LogoProps["size"] }) {
  return (
    <span
      className={cn(
        "leading-none",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
      )}
    >
      <span className="font-semibold tracking-tight text-[var(--foreground)]">Logicform</span>
      <span className="ml-2 font-medium tracking-tight text-[var(--foreground-secondary)]">
        Systems
      </span>
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
}: LogoProps) {
  const dimensions = sizes[size][variant === "mark" ? "mark" : "full"];
  const [showTextFallback, setShowTextFallback] = useState(false);

  const mark = showTextFallback ? (
    <span className="font-semibold text-accent">LF</span>
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
        <LogoText size={size} />
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
