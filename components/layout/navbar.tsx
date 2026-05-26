"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { navigationItems } from "@/data/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300",
        scrolled
          ? "border-[var(--border)] bg-[rgba(5,5,5,0.88)] shadow-[0_1px_0_rgba(212,175,55,0.08)] backdrop-blur-xl"
          : "border-transparent bg-[rgba(5,5,5,0.55)] backdrop-blur-md",
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between gap-4">
        <Logo size="md" className="max-w-[10.5rem] sm:max-w-none" />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className={cn(buttonVariants({ size: "md" }), "hidden sm:inline-flex")}
          >
            Start a Project
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-[rgba(8,8,8,0.96)] backdrop-blur-xl transition-all lg:hidden",
          menuOpen ? "max-h-[28rem]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className={cn(buttonVariants({ size: "md" }), "mt-3 w-full justify-center")}
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </Link>
        </Container>
      </div>
    </header>
  );
}
