"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState, type ReactNode } from "react";

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

const fullLogoSources = ["/logo.png", "/logo.svg"] as const;
const markLogoSource = "/logo-mark.svg";

const sizes = {
  sm: {
    mark: { width: 26, height: 26 },
    full: { width: 132, height: 22 },
  },
  md: {
    mark: { width: 32, height: 32 },
    full: { width: 168, height: 28 },
  },
  lg: {
    mark: { width: 36, height: 36 },
    full: { width: 192, height: 32 },
  },
} as const;

function LogoTextFallback({ size }: { size: LogoProps["size"] }) {
  return (
    <span
      className={cn(
        "font-semibold tracking-tight",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
      )}
    >
      <span className="text-[var(--foreground)]">Logicform</span>{" "}
      <span className="text-[var(--foreground-secondary)]">Systems</span>
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
  const [sourceIndex, setSourceIndex] = useState(0);
  const [showTextFallback, setShowTextFallback] = useState(false);

  const src = variant === "mark" ? markLogoSource : fullLogoSources[sourceIndex];

  const handleImageError = useCallback(() => {
    if (variant === "mark") {
      setShowTextFallback(true);
      return;
    }

    setSourceIndex((current) => {
      const next = current + 1;
      if (next < fullLogoSources.length) {
        return next;
      }
      setShowTextFallback(true);
      return current;
    });
  }, [variant]);

  const content = showTextFallback ? (
    <LogoTextFallback size={size} />
  ) : (
    <Image
      key={src}
      src={src}
      alt={LOGO_ALT}
      width={dimensions.width}
      height={dimensions.height}
      priority={size === "md" && linked}
      unoptimized={src.endsWith(".svg")}
      onError={handleImageError}
      className={cn(
        "h-auto max-h-full w-auto max-w-full shrink-0 object-contain object-left",
        variant === "full" && "brightness-[1.02] contrast-[1.02]",
        className,
      )}
    />
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
