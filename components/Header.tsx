"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import data from "@/data/portfolio.json";

const NAV = [
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume",   href: "/resume" },
  { label: "Contact",  href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-bg-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / wordmark */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest text-accent hover:text-accent-muted transition-colors"
          aria-label="Home"
        >
          AA<span className="text-ink-dim">.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden gap-8 md:flex">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm transition-colors hover:text-ink",
                pathname === href
                  ? "text-accent font-medium"
                  : "text-ink-muted",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={data.meta.resumeUrl}
          download
          className="hidden items-center gap-2 rounded-md border border-accent/40 px-4 py-1.5 text-xs font-medium text-accent transition-all hover:bg-accent/10 hover:border-accent md:flex"
        >
          Download CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("block h-px w-6 bg-ink-muted transition-transform duration-200", open && "translate-y-2.5 rotate-45")} />
          <span className={cn("block h-px w-6 bg-ink-muted transition-opacity duration-200", open && "opacity-0")} />
          <span className={cn("block h-px w-6 bg-ink-muted transition-transform duration-200", open && "-translate-y-2.5 -rotate-45")} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-bg-border bg-bg-surface px-6 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-sm transition-colors",
                    pathname === href ? "text-accent" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={data.meta.resumeUrl}
                download
                className="inline-block rounded border border-accent/40 px-4 py-2 text-xs text-accent"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
