import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
  {
    variants: {
      variant: {
        primary:
          "border border-[rgba(255,235,166,0.36)] bg-[linear-gradient(135deg,#f6dc7b_0%,#d0aa3d_52%,#a98424_100%)] text-[#080706] shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_18px_42px_-28px_rgba(246,220,123,0.72)] hover:border-[rgba(255,239,183,0.58)] hover:brightness-110",
        ghost:
          "border border-[var(--border)] bg-[var(--surface-card)] text-[var(--foreground-secondary)] backdrop-blur-sm hover:border-[var(--border-strong)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]",
      },
      size: {
        md: "h-10 px-4",
        lg: "h-11 px-5 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
