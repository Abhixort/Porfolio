import type { Metadata } from "next";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata(
  "Contact",
  "Get in touch with Abhishek Abhigyanam - open to new roles and collaborations.",
);

const LINKS = [
  {
    label: "Email",
    value: data.meta.email,
    href: `mailto:${data.meta.email}`,
    desc: "Best for detailed enquiries",
  },
  {
    label: "Phone",
    value: data.meta.phone,
    href: `tel:${data.meta.phone}`,
    desc: "Useful for quick coordination and follow-ups",
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: data.meta.github,
    desc: "Open-source work and contributions",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: data.meta.linkedin,
    desc: "Professional network and updates",
  },
  {
    label: "LeetCode",
    value: "LeetCode Profile",
    href: data.meta.leetcode,
    desc: "Competitive programming profile",
  },
];

export default function ContactPage() {
  return (
    <SectionWrapper>
      <SectionHeading
        label="// reach out"
        title="Get in Touch"
        description="I am open to full-time software engineering opportunities and thoughtful collaborations. If your work involves product delivery, integrations, or workflow-heavy systems, I would be happy to connect."
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {LINKS.map(({ label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-xl border border-bg-border bg-bg-card p-6 transition-all hover:border-accent/30 hover:bg-bg-card/80"
            >
              <p className="font-mono text-xs text-accent">{label}</p>
              <p className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                {value}
              </p>
              <p className="text-xs text-ink-dim">{desc}</p>
            </a>
          ))}
        </div>

        <aside className="rounded-xl border border-accent/20 bg-accent/5 p-6">
          <p className="font-mono text-xs text-accent">Availability</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {data.meta.availability}
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                Current role
              </p>
              <p className="mt-1 text-ink">
                {data.meta.currentRole} at {data.meta.currentCompany}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                Location
              </p>
              <p className="mt-1 text-ink">{data.meta.location}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                Response time
              </p>
              <p className="mt-1 text-ink">{data.meta.responseTime}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="// collaboration"
          title="Best Reasons to Reach Out"
          description="I am especially interested in conversations around the kinds of engineering problems I already enjoy solving."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {data.focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-bg-border bg-bg-card p-6"
            >
              <p className="font-mono text-xs text-accent">{area.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
