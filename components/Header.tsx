"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import data from "@/data/portfolio.json";

const NAV = [
  { label: "About",      href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects",   href: "/projects" },
  { label: "Contact",    href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-bg-border/80 bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / brandmark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-wider transition-colors"
          aria-label="Abhishek Abhigyanam Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-accent font-bold transition-all group-hover:border-accent group-hover:bg-accent/20 group-hover:shadow-[0_0_18px_rgba(99,102,241,0.4)]">
            AA
          </span>
          <span className="text-ink group-hover:text-accent-bright transition-colors">
            abhi<span className="text-accent font-bold">.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {NAV.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-200 hover:text-ink",
                  isActive
                    ? "text-accent-bright"
                    : "text-ink-muted",
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-accent via-violet-light to-cyan-light shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/resume"
            className="text-xs font-medium text-ink-muted hover:text-ink transition-colors px-2 py-1.5"
          >
            Web CV
          </Link>
          <a
            href={data.meta.resumeUrl}
            download="Abhishek_Abhigyanam_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-bright transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] focus-visible:outline-offset-2"
          >
            <DownloadIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 rounded-lg border border-bg-border p-2 text-ink-muted hover:text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("block h-0.5 w-5 bg-current transition-transform duration-200", open && "translate-y-2 rotate-45")} />
          <span className={cn("block h-0.5 w-5 bg-current transition-opacity duration-200", open && "opacity-0")} />
          <span className={cn("block h-0.5 w-5 bg-current transition-transform duration-200", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-bg-border bg-bg-surface/95 px-6 pb-6 pt-4 backdrop-blur-2xl md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors py-1",
                    pathname === href ? "text-accent-bright" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-bg-border flex flex-col gap-3">
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="text-sm text-ink-muted hover:text-ink"
              >
                View Web Curriculum Vitae
              </Link>
              <a
                href={data.meta.resumeUrl}
                download="Abhishek_Abhigyanam_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent bg-accent/15 px-4 py-2.5 text-xs font-semibold text-accent-bright"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
