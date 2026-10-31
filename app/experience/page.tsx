import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import TechTag from "@/components/TechTag";
import data from "@/data/portfolio.json";
import { makeMetadata } from "@/lib/metadata";
import type { PublishedModule } from "@/lib/types";

export const metadata: Metadata = makeMetadata(
  "Work Experience",
  "Professional software engineering experience at Webkul Software Pvt. Ltd. - APIs, Odoo App Store modules, AI OCR, AWS EC2, and payments.",
);

export default function ExperiencePage() {
  const exp = data.experience[0];
  const modules = data.publishedModules as PublishedModule[];

  return (
    <SectionWrapper>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
        <SectionHeading
          label="Career Milestones"
          title="Work Experience"
          description="Detailed breakdown of production systems, commercial App Store modules, cloud architectures, and customer deliverables."
        />
        <div className="shrink-0">
          <a
            href={data.meta.resumeUrl}
            download="Abhishek_Abhigyanam_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 text-xs font-semibold text-accent-bright transition-all hover:border-accent hover:bg-accent/20"
          >
            <DownloadIcon className="h-4 w-4" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>

      {/* Main Experience Hero Card */}
      <article className="glass-card rounded-2xl p-7 sm:p-10 border border-bg-border relative overflow-hidden mb-16">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-bg-border/70 pb-6 mb-6">
          <div>
            <span className="inline-block rounded-md border border-accent/30 bg-accent/15 px-3 py-1 font-mono text-xs font-bold text-accent-bright mb-2">
              Full-Time Role
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              {exp.role}
            </h2>
            <p className="text-base text-accent-light font-medium mt-1">
              {exp.company} &bull; <span className="text-ink-dim font-mono text-xs">{exp.location}</span>
            </p>
          </div>
          <p className="font-mono text-sm text-ink-muted shrink-0">
            {exp.period}
          </p>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-ink-muted mb-6">
          {exp.summary}
        </p>

        {/* Impact callout */}
        <div className="rounded-xl border border-accent/25 bg-accent/5 p-5 mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-bright font-bold">
            Key Traction & Business Impact
          </p>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-muted">
            {exp.impact}
          </p>
        </div>

        {/* Technologies used */}
        <div className="mb-8">
          <p className="font-mono text-xs text-ink-dim uppercase tracking-wider mb-3 font-semibold">
            Technologies Applied in Production
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <TechTag key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>

        {/* 10 Core Production Deliverables */}
        <div>
          <p className="font-mono text-xs text-accent-bright uppercase tracking-wider mb-4 font-semibold">
            Key Deliverables & Responsibilities (10 Technical Domains)
          </p>
          <ul className="space-y-4">
            {exp.highlights.map((highlight, index) => {
              const [prefix, ...rest] = highlight.split(":");
              return (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-bg-border/60 bg-bg-surface/40 p-4 transition-all hover:border-bg-border-light hover:bg-bg-surface/70"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div className="text-sm leading-relaxed text-ink-muted">
                    {rest.length > 0 ? (
                      <>
                        <strong className="text-ink font-semibold">{prefix}:</strong>
                        <span>{rest.join(":")}</span>
                      </>
                    ) : (
                      <span>{highlight}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </article>

      {/* Commercial Odoo App Store Modules Grid */}
      <div className="mb-16">
        <SectionHeading
          label="Commercial Traction"
          title="Published Modules (185+ Sales)"
          description="A closer look at the modules published on the official Odoo App Store, engineered for real enterprise clients."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="glass-card rounded-2xl p-6 border border-bg-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-md border border-accent/40 bg-accent/15 px-3 py-1 font-mono text-xs font-bold text-accent-bright">
                    {mod.sales}
                  </span>
                  <span className="font-mono text-[11px] text-ink-dim">
                    {mod.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">
                  {mod.name}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-bg-border/60 flex flex-wrap gap-1.5">
                {mod.tags.map((tag) => (
                  <TechTag key={tag} name={tag} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Navigation Footer */}
      <div className="rounded-2xl border border-bg-border bg-bg-card/50 p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="text-base font-semibold text-ink">
            Want to see project architectures & code?
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted mt-1">
            Explore FastAPI distributed services, Celery workers, and AI document systems.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 transition-all"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-bg-border px-5 py-2.5 text-xs font-medium text-ink-muted hover:border-accent hover:text-ink transition-all"
          >
            Get in Touch
          </Link>
        </div>
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
