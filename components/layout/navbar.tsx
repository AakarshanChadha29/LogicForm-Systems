"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Veltrix Labs home"
          className="text-sm font-semibold tracking-wide text-white transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white transition-colors hover:border-accent/45 hover:text-accent xl:inline-flex"
        >
          Start a Project →
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-muted-foreground transition-colors hover:text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-white/10 transition-all md:hidden",
          menuOpen ? "max-h-72" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-2 py-4">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-sm text-white transition-colors hover:border-accent/45 hover:text-accent"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project →
          </Link>
        </Container>
      </div>
    </header>
  );
}
