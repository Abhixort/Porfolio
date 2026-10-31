"use client";

import Link from "next/link";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import TechTag from "@/components/TechTag";
import data from "@/data/portfolio.json";
import type { PublishedModule } from "@/lib/types";

export default function ResumePage() {
  const exp = data.experience[0];
  const modules = data.publishedModules as PublishedModule[];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <SectionWrapper>
      {/* Top action header */}
      <div className="no-print flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
        <SectionHeading
          label="Curriculum Vitae"
          title="Digital Resume & CV"
          description="A clean, responsive, web-native overview of my technical profile, commercial production experience, and engineering credentials."
        />
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={data.meta.resumeUrl}
            download="Abhishek_Abhigyanam_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
          >
            <DownloadIcon className="h-4 w-4" />
            <span>Download Official PDF</span>
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-lg border border-bg-border bg-bg-card px-4 py-2.5 text-xs font-medium text-ink-muted transition-all hover:border-accent/40 hover:text-ink"
          >
            <PrinterIcon className="h-4 w-4" />
            <span>Print CV</span>
          </button>
          <a
            href={data.meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-bg-border bg-bg-card px-4 py-2.5 text-xs font-medium text-ink-muted transition-all hover:border-accent/40 hover:text-ink"
          >
            <ExternalIcon className="h-4 w-4" />
            <span>Open PDF</span>
          </a>
        </div>
      </div>

      {/* Main Resume Sheet / Container */}
      <div className="print-clean glass-card rounded-2xl border border-bg-border p-8 sm:p-12 shadow-2xl relative">
        {/* Header Information */}
        <header className="border-b border-bg-border pb-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                {data.meta.name}
              </h1>
              <p className="mt-1 text-lg font-semibold text-accent-bright">
                {data.meta.role}
              </p>
            </div>
            <p className="font-mono text-xs sm:text-sm text-ink-dim">
              {data.meta.location}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-ink-muted">
            <a href={`tel:${data.meta.phone}`} className="hover:text-accent transition-colors">
              {data.meta.phone}
            </a>
            <span className="text-bg-border-light">&bull;</span>
            <a href={`mailto:${data.meta.email}`} className="hover:text-accent transition-colors">
              {data.meta.email}
            </a>
            <span className="text-bg-border-light">&bull;</span>
            <a href={data.meta.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LeetCode
            </a>
            <span className="text-bg-border-light">&bull;</span>
            <a href={data.meta.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              GitHub
            </a>
            <span className="text-bg-border-light">&bull;</span>
            <a href={data.meta.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
            <span className="text-bg-border-light">&bull;</span>
            <a href={data.meta.siteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              abhishek-abhigyanam.vercel.app
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
            <span>Summary</span>
            <span className="h-px flex-1 bg-bg-border" />
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
            {data.summary}
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-10">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
            <span>Work Experience</span>
            <span className="h-px flex-1 bg-bg-border" />
          </h2>

          <div className="rounded-xl border border-bg-border/70 bg-bg-surface/30 p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-ink">
                {exp.role} <span className="text-accent-bright font-medium">| {exp.company}</span>
              </h3>
              <span className="font-mono text-xs text-ink-dim shrink-0">
                {exp.period}
              </span>
            </div>

            <p className="font-mono text-xs text-ink-dim mb-5">
              {exp.location}
            </p>

            <ul className="space-y-3">
              {exp.highlights.map((bullet, idx) => {
                const [title, ...rest] = bullet.split(":");
                return (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-ink-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div>
                      {rest.length > 0 ? (
                        <>
                          <strong className="text-ink font-semibold">{title}:</strong>
                          <span>{rest.join(":")}</span>
                        </>
                      ) : (
                        <span>{bullet}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Commercial Modules Traction */}
        <section className="mb-10">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
            <span>Published Odoo App Store Modules (185+ Sales)</span>
            <span className="h-px flex-1 bg-bg-border" />
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div key={mod.name} className="rounded-xl border border-bg-border/60 bg-bg-surface/40 p-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-bold text-xs text-ink">{mod.name}</span>
                  <span className="rounded bg-accent/15 px-2 py-0.5 font-mono text-[11px] font-bold text-accent-bright">
                    {mod.sales}
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted line-clamp-2 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
            <span>Technical Skills</span>
            <span className="h-px flex-1 bg-bg-border" />
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-4">
              <p className="font-mono text-xs font-semibold text-accent-light mb-1.5">
                Languages
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                Python, JavaScript, C++
              </p>
            </div>

            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-4">
              <p className="font-mono text-xs font-semibold text-accent-light mb-1.5">
                Backend & APIs
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                Odoo (Python), FastAPI, Django, REST APIs, OpenAPI, JWT/OTP Authentication, Role-Based Authorization
              </p>
            </div>

            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-4">
              <p className="font-mono text-xs font-semibold text-accent-light mb-1.5">
                AI & Machine Learning
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                Generative AI, AI-powered OCR
              </p>
            </div>

            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-4">
              <p className="font-mono text-xs font-semibold text-accent-light mb-1.5">
                Data & Async Processing
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                PostgreSQL, Redis, Caching, Celery, Message Queues, Background Processing, Rate Limiting
              </p>
            </div>

            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-4">
              <p className="font-mono text-xs font-semibold text-accent-light mb-1.5">
                DevOps & Cloud
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                AWS EC2, Nginx, Linux, Odoo Deployment, Odoo.sh, Docker, Docker Compose, GitHub Actions (CI/CD)
              </p>
            </div>

            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-4">
              <p className="font-mono text-xs font-semibold text-accent-light mb-1.5">
                Testing, Tools & Frontend
              </p>
              <p className="text-xs sm:text-sm text-ink-muted">
                Pytest, Git, GitHub, Postman; React.js, Next.js, Owl.js
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
            <span>Projects</span>
            <span className="h-px flex-1 bg-bg-border" />
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-base font-bold text-ink">
                  E-Commerce Order Management Platform
                </h3>
                <span className="font-mono text-xs text-accent-light">
                  Python, FastAPI, PostgreSQL, Redis, Celery, Docker, AWS
                </span>
              </div>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Designed REST APIs for authentication, products, inventory, cart, and orders, with JWT authentication and role-based authorization; added Redis caching, API rate limiting, and asynchronous order processing with Celery.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Modeled an indexed PostgreSQL schema with transaction handling; containerized services with Docker Compose; added Pytest unit and integration tests and a GitHub Actions CI/CD pipeline.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-bg-border/60 bg-bg-surface/30 p-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-base font-bold text-ink">
                  Distributed Notification Platform
                </h3>
                <span className="font-mono text-xs text-accent-light">
                  Python, FastAPI, Redis, Celery, PostgreSQL, Docker
                </span>
              </div>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Built an asynchronous notification-processing architecture with retry and failure handling for workers, and idempotent processing to prevent duplicate notifications.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    Added scheduled notifications, user notification preferences, rate limiting, and Redis-backed queues; documented the API with OpenAPI.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
            <span>Education</span>
            <span className="h-px flex-1 bg-bg-border" />
          </h2>

          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-bg-border/40 pb-3">
                <div>
                  <p className="text-sm font-bold text-ink">{edu.degree}</p>
                  <p className="text-xs text-ink-muted">{edu.institution}</p>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-ink-dim">
                  <span className="text-accent-bright font-semibold">{edu.grade}</span>
                  <span>&bull;</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="no-print mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-bg-border p-6 text-center sm:text-left">
        <p className="text-sm text-ink-muted">
          Need a copy of the official PDF resume for review or ATS submission?
        </p>
        <a
          href={data.meta.resumeUrl}
          download="Abhishek_Abhigyanam_Resume.pdf"
          className="rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
        >
          Download PDF File
        </a>
      </div>
    </SectionWrapper>
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

function PrinterIcon({ className }: { className?: string }) {
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
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
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
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}
