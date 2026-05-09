import type { Metadata } from "next";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata(
  "Resume",
  "Download or view the resume of Abhishek Abhigyanam - Full Stack Software Engineer.",
);

export default function ResumePage() {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <SectionHeading
          label="// curriculum vitae"
          title="Resume"
          description="View the PDF inline, open it in a new tab, or download it directly. The resume covers my experience in Odoo development, full-stack product delivery, integrations, and workflow-focused engineering."
        />
        <div className="flex flex-wrap gap-3">
          <a
            href={data.meta.resumeUrl}
            download
            className="shrink-0 rounded-md border border-accent/40 px-5 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/10"
          >
            Download PDF
          </a>
          <a
            href={data.meta.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md border border-bg-border px-5 py-2 text-sm font-medium text-ink-muted transition-all hover:border-accent/30 hover:text-ink"
          >
            Open in New Tab
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {data.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-bg-border bg-bg-card p-5"
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

      <div className="mt-8 rounded-xl border border-bg-border bg-bg-card p-6">
        <p className="font-mono text-xs text-accent">Resume Snapshot</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="text-sm leading-relaxed text-ink-muted">
            {data.summary}
          </p>
          <div className="space-y-3">
            {data.focusAreas.map((area) => (
              <div key={area.title}>
                <p className="text-sm font-medium text-ink">{area.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-bg-border">
        <iframe
          src={`${data.meta.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="h-[80vh] w-full"
          title="Abhishek Abhigyanam Resume"
        />
      </div>

      <p className="mt-4 text-center text-xs text-ink-dim">
        Can&apos;t see the PDF?{" "}
        <a
          href={data.meta.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Open in new tab
        </a>
        .
      </p>
    </SectionWrapper>
  );
}
