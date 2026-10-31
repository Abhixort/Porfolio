import type { Metadata } from "next";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata(
  "Contact",
  "Get in touch with Abhishek Abhigyanam - Software Engineer open to engineering roles & collaborations.",
);

const LINKS = [
  {
    label: "Email",
    value: data.meta.email,
    href: `mailto:${data.meta.email}`,
    desc: "Direct communication for roles and technical queries",
  },
  {
    label: "Phone",
    value: data.meta.phone,
    href: `tel:${data.meta.phone}`,
    desc: "Available for quick coordination and interviews",
  },
  {
    label: "GitHub",
    value: "github.com/Abhixort",
    href: data.meta.github,
    desc: "Explore repositories, backend systems, and CI/CD pipelines",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhishek-abhigyanam",
    href: data.meta.linkedin,
    desc: "Professional career updates and recommendations",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/ABHI_GYANAM",
    href: data.meta.leetcode,
    desc: "Algorithmic problem solving and data structures",
  },
  {
    label: "Portfolio",
    value: "abhishek-abhigyanam.vercel.app",
    href: data.meta.siteUrl,
    desc: "Live portfolio and interactive digital resume",
  },
];

export default function ContactPage() {
  return (
    <SectionWrapper>
      <SectionHeading
        label="Connect"
        title="Get in Touch"
        description="I am open to full-time Software Engineering roles, backend microservice opportunities, and technical collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {LINKS.map(({ label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-3 rounded-2xl border border-bg-border bg-bg-card/70 backdrop-blur-xl p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-card/95 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-accent-bright">{label}</p>
                <p className="mt-2 text-sm font-semibold text-ink group-hover:text-accent-bright transition-colors">
                  {value}
                </p>
              </div>
              <p className="text-xs text-ink-dim leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>

        <aside className="glass-card rounded-2xl border border-accent/25 bg-accent/5 p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-accent-bright">
                Availability
              </p>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
              {data.meta.availability}
            </p>

            <div className="mt-6 space-y-4 text-sm border-t border-accent/15 pt-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim font-bold">
                  Current role
                </p>
                <p className="mt-0.5 text-ink font-semibold">
                  {data.meta.currentRole} at {data.meta.currentCompany}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim font-bold">
                  Location
                </p>
                <p className="mt-0.5 text-ink font-semibold">{data.meta.location}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim font-bold">
                  Response time
                </p>
                <p className="mt-0.5 text-ink font-semibold">{data.meta.responseTime}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-accent/15">
            <a
              href={data.meta.resumeUrl}
              download="Abhishek_Abhigyanam_Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="Discussion Points"
          title="Best Reasons to Reach Out"
          description="I am particularly enthusiastic about conversations regarding high-performance APIs, distributed queues, and production architecture."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.focusAreas.map((area, idx) => (
            <article
              key={area.title}
              className="glass-card rounded-2xl p-6 group hover:border-accent/40"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-xs font-bold text-accent-bright mb-3">
                0{idx + 1}
              </div>
              <p className="font-mono text-xs text-accent-bright font-semibold">{area.title}</p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
                {area.description}
              </p>
            </article>
          ))}
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
