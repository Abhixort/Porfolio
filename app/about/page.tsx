import type { Metadata } from "next";
import TechTag from "@/components/TechTag";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import { makeMetadata } from "@/lib/metadata";
import type { Skill } from "@/lib/types";
import { groupBy } from "@/lib/utils";

export const metadata: Metadata = makeMetadata(
  "About",
  "Software Engineer specializing in Python, Odoo backend, REST APIs, and distributed systems. Based in Noida, India.",
);

const CATEGORY_LABELS: Record<string, string> = {
  language: "Languages",
  backend: "Backend & APIs",
  ai: "AI & Machine Learning",
  data: "Data & Async Processing",
  devops: "DevOps & Cloud",
  frontend_tools: "Testing, Tools & Frontend",
};

export default function AboutPage() {
  const grouped = groupBy(data.skills as Skill[], "category");

  return (
    <SectionWrapper>
      <SectionHeading
        label="Professional Profile"
        title="About Me"
        description="A comprehensive look at my software engineering background, production systems delivery, and core technical competencies."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4 text-base leading-relaxed text-ink-muted">
          <p>{data.summary}</p>
          <p>
            Currently working as a <span className="text-ink font-semibold">Software Engineer</span> at{" "}
            <span className="text-accent-bright font-semibold">{data.meta.currentCompany}</span> in{" "}
            <span className="text-ink font-semibold">{data.meta.location}</span>. I have built and published commercial Odoo App Store modules achieving over 185+ sales, designed Generative AI-powered document OCR systems, and deployed high-throughput production infrastructure on AWS EC2.
          </p>
          <p>
            I specialize in building reliable, scalable backend platforms using Python, FastAPI, Redis, Celery, and PostgreSQL. Outside work, I actively sharpen my analytical problem-solving through competitive programming on LeetCode.
          </p>
        </div>

        <aside className="space-y-4 rounded-2xl border border-bg-border bg-bg-card/70 backdrop-blur-xl p-6 text-sm">
          {[
            { label: "Location", value: data.meta.location },
            { label: "Current Role", value: data.meta.currentRole },
            { label: "Company", value: data.meta.currentCompany },
            { label: "Email", value: data.meta.email },
            { label: "Phone", value: data.meta.phone },
            { label: "Availability", value: data.meta.availability },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim font-bold">
                {label}
              </p>
              <p className="mt-0.5 text-ink font-medium">{value}</p>
            </div>
          ))}
          <div className="pt-2 border-t border-bg-border/60">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent-light font-bold">
              Response Time
            </p>
            <p className="mt-0.5 text-ink">{data.meta.responseTime}</p>
          </div>
        </aside>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="Core Competencies"
          title="How I Add Value"
          description="The kinds of backend architectures, integrations, and enterprise systems where I deliver the highest impact."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.focusAreas.map((area, idx) => (
            <article
              key={area.title}
              className="glass-card rounded-2xl p-6 relative group hover:border-accent/40"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-mono text-xs font-bold text-accent-bright mb-3">
                0{idx + 1}
              </div>
              <h3 className="text-base font-semibold text-ink group-hover:text-accent-bright transition-colors">
                {area.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="Technical Toolbox"
          title="Skills & Technologies"
          description="A working toolkit shaped by production delivery across high-throughput APIs, Celery workers, ERP modules, databases, and cloud infrastructure."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(CATEGORY_LABELS).map(([category, label]) => {
            const skills = grouped[category];

            if (!skills?.length) {
              return null;
            }

            return (
              <div key={category} className="glass-card rounded-2xl p-6 border border-bg-border">
                <p className="mb-3.5 font-mono text-xs font-bold text-accent-bright uppercase tracking-wider">
                  {label}
                </p>
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            label="Career Milestones"
            title="Work Experience"
            description="Production software engineering delivering scalable REST APIs, commercial Odoo App Store modules, and AWS deployments."
          />
          <div className="mb-12">
            <a
              href="/experience"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-bright transition-all hover:bg-accent/20"
            >
              <span>View In-Depth Breakdown</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {data.experience.map((experience) => (
            <article
              key={experience.id}
              className="glass-card rounded-2xl border border-bg-border p-8"
            >
              <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold text-ink">
                  {experience.role}
                </h3>
                <span className="text-sm font-semibold text-accent-bright">{experience.company}</span>
                <span className="ml-auto font-mono text-xs text-ink-dim">
                  {experience.period}
                </span>
              </div>
              <p className="font-mono text-xs text-ink-dim mb-4">
                {experience.location}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-ink-muted">
                {experience.summary}
              </p>

              <div className="mt-5 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-light font-bold">
                  Key Commercial & Engineering Impact
                </p>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  {experience.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <TechTag key={`${experience.id}-${technology}`} name={technology} size="sm" />
                ))}
              </div>

              <ul className="mt-5 space-y-2.5">
                {experience.highlights.slice(0, 5).map((highlight, index) => (
                  <li
                    key={`${experience.id}-${index}`}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="Academia"
          title="Education"
          description="Academic foundation in Computer Science and Engineering, quantitative problem solving, and analytical thinking."
        />
        <div className="space-y-5">
          {data.education.map((education) => (
            <div
              key={education.institution}
              className="glass-card rounded-2xl border border-bg-border p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-bold text-ink">
                    {education.degree}
                  </p>
                  <p className="text-xs text-ink-muted mt-0.5">
                    {education.institution}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-xs font-semibold text-accent-bright">
                    {education.grade}
                  </p>
                  <p className="font-mono text-xs text-ink-dim">
                    {education.period}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-1.5">
                {education.details.map((detail) => (
                  <li
                    key={`${education.institution}-${detail}`}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          label="Credentials"
          title="Certifications & Training"
          description="Continuous learning spanning backend programming, networking fundamentals, web architecture, and security."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {data.certifications.map((certification) => (
            <article
              key={certification.title}
              className="glass-card rounded-2xl border border-bg-border p-6"
            >
              <p className="font-mono text-xs font-bold text-accent-bright">
                {certification.title}
              </p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
                {certification.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
