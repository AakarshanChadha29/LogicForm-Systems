import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
  className?: string;
  linked?: boolean;
};

const sizes = {
  sm: { mark: 28, full: { width: 132, height: 28 } },
  md: { mark: 36, full: { width: 156, height: 36 } },
  lg: { mark: 44, full: { width: 180, height: 40 } },
} as const;

export function Logo({
  variant = "full",
  size = "md",
  className,
  linked = true,
}: LogoProps) {
  const dimensions = sizes[size];
  const src = variant === "mark" ? "/logo-mark.svg" : "/logo.svg";
  const alt = siteConfig.name;
  const width = variant === "mark" ? dimensions.mark : dimensions.full.width;
  const height = variant === "mark" ? dimensions.mark : dimensions.full.height;

  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={size === "md"}
      className={cn("h-auto w-auto shrink-0", className)}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex items-center", className)}
    >
      {image}
    </Link>
  );
}
