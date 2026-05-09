"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import data from "@/data/portfolio.json";

const ROLES = [
  "Full Stack Engineer",
  "MERN Stack Developer",
  "Odoo Module Builder",
  "Python Developer",
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
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((index) => (index + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      className="relative mx-auto flex min-h-[calc(100dvh-64px)] max-w-5xl flex-col justify-center px-6 py-24"
      aria-label="Hero"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--tw-gradient-stops)), linear-gradient(90deg, #6ee7b7 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl space-y-6">
        <p className="animate-fade-up font-mono text-sm text-accent opacity-0 [animation-fill-mode:forwards]">
          Hi, I&apos;m
        </p>

        <h1 className="animate-fade-up animate-delay-100 text-5xl font-medium tracking-tight text-ink opacity-0 sm:text-6xl lg:text-7xl [animation-fill-mode:forwards]">
          {firstName}
          <br />
          <span className="text-ink-dim">{restOfName.join(" ")}</span>
        </h1>

        <p className="animate-fade-up animate-delay-200 h-8 font-mono text-lg text-ink-muted opacity-0 [animation-fill-mode:forwards]">
          <span aria-live="polite">{displayed}</span>
          <span className="animate-blink ml-0.5 inline-block w-0.5 bg-accent">&nbsp;</span>
        </p>

        <div className="animate-fade-up animate-delay-300 space-y-3 opacity-0 [animation-fill-mode:forwards]">
          <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
            {data.meta.tagline}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-dim">
            Currently working as{" "}
            <span className="text-ink">{data.meta.currentRole}</span> at{" "}
            <span className="text-ink">{data.meta.currentCompany}</span> in{" "}
            <span className="text-ink">{data.meta.location}</span>, with a focus
            on production-grade workflows, integrations, and full-stack product
            delivery.
          </p>
        </div>

        <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-4 opacity-0 [animation-fill-mode:forwards]">
          <Link
            href="/projects"
            className="rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-bg transition-all hover:bg-accent-muted hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-offset-4"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-bg-border px-6 py-2.5 text-sm font-medium text-ink-muted transition-all hover:border-accent/40 hover:text-ink"
          >
            Get in Touch
          </Link>
        </div>

        <div className="animate-fade-up animate-delay-400 grid gap-3 pt-2 opacity-0 sm:grid-cols-3 [animation-fill-mode:forwards]">
          {data.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-bg-border bg-bg-card/70 p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-fade-up animate-delay-400 flex items-center gap-6 pt-2 opacity-0 [animation-fill-mode:forwards]">
          {[
            { label: "GitHub", href: data.meta.github },
            { label: "LinkedIn", href: data.meta.linkedin },
            { label: "LeetCode", href: data.meta.leetcode },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-dim transition-colors hover:text-accent"
            >
              {label} -&gt;
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
