"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import data from "@/data/portfolio.json";

const ROLES = [
  "Software Engineer",
  "Python & Odoo Backend Specialist",
  "FastAPI & Celery Architect",
  "Distributed Systems Builder",
  "AWS EC2 Cloud & DevOps Engineer",
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [firstName, ...restOfName] = data.meta.name.split(" ");

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((index) => (index + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      className="relative mx-auto flex min-h-[calc(100dvh-72px)] max-w-6xl flex-col justify-center px-6 py-20 lg:py-24"
      aria-label="Hero"
    >
      {/* Background ambient grid with soft mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--tw-gradient-stops)), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 45%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl space-y-7">
        {/* Availability Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-bright backdrop-blur-md opacity-0 [animation-fill-mode:forwards]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span>{data.meta.availability}</span>
        </div>

        {/* Title / Name */}
        <div className="animate-fade-up animate-delay-100 space-y-2 opacity-0 [animation-fill-mode:forwards]">
          <h1 className="text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {firstName}{" "}
            <span className="text-gradient font-light">{restOfName.join(" ")}</span>
          </h1>

          {/* Dynamic role banner */}
          <div className="flex items-center gap-2 font-mono text-lg sm:text-xl text-ink-muted h-9">
            <span className="text-accent">&gt;</span>
            <span className="text-ink font-semibold" aria-live="polite">
              {displayed}
            </span>
            <span className="animate-blink inline-block h-5 w-2 bg-accent">&nbsp;</span>
          </div>
        </div>

        {/* Summary text */}
        <div className="animate-fade-up animate-delay-200 max-w-2xl space-y-3 opacity-0 [animation-fill-mode:forwards]">
          <p className="text-base sm:text-lg leading-relaxed text-ink-muted">
            {data.summary}
          </p>
          <p className="text-sm leading-relaxed text-ink-dim">
            Currently at{" "}
            <span className="text-ink font-medium">{data.meta.currentCompany}</span> in{" "}
            <span className="text-ink font-medium">{data.meta.location}</span>. Focused on
            scalable REST APIs, payment integrations, Generative AI OCR modules, and AWS EC2 deployments.
          </p>
        </div>

        {/* Action buttons */}
        <div className="animate-fade-up animate-delay-300 flex flex-wrap items-center gap-3.5 pt-1 opacity-0 [animation-fill-mode:forwards]">
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 focus-visible:outline-offset-4"
          >
            Explore Projects
          </Link>
          <Link
            href="/experience"
            className="rounded-lg border border-bg-border bg-bg-card/80 px-6 py-3 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:bg-bg-card hover:text-accent-bright"
          >
            Work Experience
          </Link>
          <a
            href={data.meta.resumeUrl}
            download="Abhishek_Abhigyanam_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-5 py-3 text-sm font-medium text-accent-bright transition-all hover:border-accent hover:bg-accent/15"
          >
            <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Stat badges */}
        <div className="animate-fade-up animate-delay-400 grid gap-3.5 pt-4 opacity-0 sm:grid-cols-2 lg:grid-cols-4 [animation-fill-mode:forwards]">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 relative overflow-hidden group hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent-light font-semibold">
                  {stat.highlight || stat.label}
                </p>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-ink-muted group-hover:text-ink transition-colors leading-snug">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Social and quick contacts */}
        <div className="animate-fade-up animate-delay-500 flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-ink-muted opacity-0 [animation-fill-mode:forwards]">
          {[
            { label: "GitHub", href: data.meta.github },
            { label: "LinkedIn", href: data.meta.linkedin },
            { label: "LeetCode", href: data.meta.leetcode },
            { label: data.meta.email, href: `mailto:${data.meta.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-bright flex items-center gap-1"
            >
              <span>{label}</span>
              <span className="text-accent">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
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
