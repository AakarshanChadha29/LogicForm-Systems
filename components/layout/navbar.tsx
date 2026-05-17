"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/data/navigation";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
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
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-[var(--border)] bg-white/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Veltrix Labs home"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className={cn(buttonVariants({ size: "md" }), "hidden xl:inline-flex")}
        >
          Start a Project
        </Link>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-muted-foreground transition-colors hover:bg-[var(--surface-inset)] hover:text-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-white transition-all md:hidden",
          menuOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-[var(--surface-inset)] hover:text-foreground"
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
