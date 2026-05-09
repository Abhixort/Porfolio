import type { Metadata } from "next";
import TechTag from "@/components/TechTag";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import { makeMetadata } from "@/lib/metadata";
import type { Skill } from "@/lib/types";
import { groupBy } from "@/lib/utils";

export const metadata: Metadata = makeMetadata(
  "About",
  "Full Stack Engineer - Python, MERN, Odoo. Based in Noida, India.",
);

const CATEGORY_LABELS: Record<string, string> = {
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  platform: "Platforms",
  database: "Databases",
  devops: "DevOps & Cloud",
};

export default function AboutPage() {
  const grouped = groupBy(data.skills as Skill[], "category");

  return (
    <SectionWrapper>
      <SectionHeading
        label="// about me"
        title="Background"
        description="A fuller picture of how I work, what I focus on, and the product and engineering context I enjoy operating in."
      />
      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4 text-base leading-relaxed text-ink-muted">
          <p>{data.summary}</p>
          <p>
            Currently building Odoo modules at{" "}
            <span className="text-ink">{data.meta.currentCompany}</span> - from
            payment terminal integrations to Gantt planning tools that are
            already seeing traction on the Odoo App Store.
          </p>
          <p>
            I am especially motivated by product work that sits at the
            intersection of business workflows, clean user experience, and
            dependable backend behavior. Outside work I enjoy competitive
            programming on LeetCode and tinkering with ML-integrated dashboards.
          </p>
        </div>

        <aside className="space-y-4 rounded-xl border border-bg-border bg-bg-card p-6 text-sm">
          {[
            { label: "Location", value: data.meta.location },
            { label: "Current Role", value: data.meta.currentRole },
            { label: "Company", value: data.meta.currentCompany },
            { label: "Email", value: data.meta.email },
            { label: "Phone", value: data.meta.phone },
            { label: "Availability", value: data.meta.availability },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                {label}
              </p>
              <p className="mt-0.5 text-ink">{value}</p>
            </div>
          ))}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
              Response Time
            </p>
            <p className="mt-0.5 text-ink">{data.meta.responseTime}</p>
          </div>
        </aside>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="// focus"
          title="How I Add Value"
          description="The kinds of problems I naturally gravitate toward and the environments where I tend to deliver best."
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

      <div className="mt-20">
        <SectionHeading
          label="// capabilities"
          title="Skills & Technologies"
          description="A working toolkit shaped by day-to-day product delivery across frontend, backend, databases, ERP customization, and cloud workflows."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(CATEGORY_LABELS).map(([category, label]) => {
            const skills = grouped[category];

            if (!skills?.length) {
              return null;
            }

            return (
              <div key={category}>
                <p className="mb-3 font-mono text-xs text-accent">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <TechTag key={skill.name} name={skill.name} size="sm" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="// career"
          title="Work Experience"
          description="Highlights from the role where I have been building, integrating, and supporting production workflows for real customer use."
        />
        <div className="space-y-10">
          {data.experience.map((experience) => (
            <article
              key={experience.id}
              className="relative rounded-2xl border border-bg-border bg-bg-card p-8"
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-base font-medium text-ink">
                  {experience.role}
                </h3>
                <span className="text-sm text-accent">{experience.company}</span>
                <span className="ml-auto font-mono text-xs text-ink-dim">
                  {experience.period}
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                {experience.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {experience.summary}
              </p>

              <div className="mt-5 rounded-xl border border-accent/10 bg-accent/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {experience.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <TechTag key={`${experience.id}-${technology}`} name={technology} size="sm" />
                ))}
              </div>

              <ul className="mt-3 space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <li
                    key={`${experience.id}-${index}`}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="// academia"
          title="Education"
          description="Academic background that helped shape my software foundations, analytical thinking, and problem-solving approach."
        />
        <div className="space-y-6">
          {data.education.map((education) => (
            <div
              key={education.institution}
              className="rounded-lg border border-bg-border bg-bg-card px-6 py-5"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-ink">
                    {education.degree}
                  </p>
                  <p className="text-xs text-ink-muted">
                    {education.institution}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-accent">
                    {education.grade}
                  </p>
                  <p className="font-mono text-xs text-ink-dim">
                    {education.period}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {education.details.map((detail) => (
                  <li
                    key={`${education.institution}-${detail}`}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="// credentials"
          title="Certifications"
          description="Supplementary learning that reflects my interest in programming depth, networking basics, web engineering, and security awareness."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {data.certifications.map((certification) => (
            <article
              key={certification.title}
              className="rounded-xl border border-bg-border bg-bg-card p-6"
            >
              <p className="font-mono text-xs text-accent">
                {certification.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {certification.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
