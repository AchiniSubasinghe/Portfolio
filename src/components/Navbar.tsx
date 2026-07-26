"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while menu is open
  useEffect(() => {
    if (!menuOpen) return;

    document.body.classList.add("nav-open");

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4 md:px-6 lg:px-8 xl:max-w-7xl xl:px-10">
        <Link
          href="/"
          className="font-handwritten shrink-0 text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          AS
        </Link>

        {/* Desktop links */}
        <ul className="hidden min-w-0 items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={[
                    "interactive-surface relative block whitespace-nowrap rounded-full px-2 py-1.5 text-sm font-medium lg:px-2.5 xl:px-3",
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:bg-surface-elevated hover:text-foreground",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile / tablet hamburger */}
        <button
          type="button"
          className="interactive-surface inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border-strong p-2.5 text-foreground hover:border-accent/50 hover:bg-accent-soft lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-border lg:hidden"
        >
          <ul className="mx-auto flex max-h-[min(70dvh,28rem)] max-w-6xl flex-col gap-1 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4 sm:py-4 md:px-6 lg:px-8 xl:max-w-7xl xl:px-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      "interactive-surface block min-h-11 rounded-lg px-3 py-3 text-base font-medium",
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:bg-surface-elevated hover:text-foreground",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
