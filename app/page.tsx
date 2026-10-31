import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import TechTag from "@/components/TechTag";
import data from "@/data/portfolio.json";
import { baseMetadata } from "@/lib/metadata";
import type { Project, PublishedModule } from "@/lib/types";

export const metadata: Metadata = baseMetadata;

export default function HomePage() {
  const featured = (data.projects as Project[]).filter((project) => project.featured).slice(0, 4);
  const modules = data.publishedModules as PublishedModule[];

  return (
    <>
      <HeroSection />

      {/* Published Commercial Modules Showcase */}
      <SectionWrapper id="store-modules" className="border-t border-bg-border/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            label="Commercial Impact"
            title="Published Odoo App Store Modules"
            description="Production modules built in Python and Owl.js, actively serving enterprise clients worldwide with over 185+ commercial sales."
          />
          <div className="mb-12">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent-bright transition-all hover:border-accent hover:bg-accent/20"
            >
              <span>Full Experience Breakdown</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-accent/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-md border border-accent/30 bg-accent/15 px-2.5 py-0.5 font-mono text-xs font-bold text-accent-bright">
                    {mod.sales}
                  </span>
                  <span className="font-mono text-[11px] text-ink-dim">
                    {mod.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ink group-hover:text-accent-bright transition-colors">
                  {mod.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  {mod.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-bg-border/60 flex flex-wrap gap-1.5">
                {mod.tags.map((tag) => (
                  <TechTag key={tag} name={tag} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Core Engineering Strengths */}
      <SectionWrapper id="focus" className="border-t border-bg-border/80">
        <SectionHeading
          label="Core Competencies"
          title="What I Bring to Engineering Teams"
          description="Experienced in turning business requirements into resilient architectures, robust APIs, and scalable production workflows."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.focusAreas.map((area, idx) => (
            <article
              key={area.title}
              className="glass-card rounded-2xl p-6 relative group hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent-bright mb-4 group-hover:scale-105 transition-transform">
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
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper id="featured-projects" className="border-t border-bg-border/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            label="Backend & Distributed Systems"
            title="Featured Engineering Projects"
            description="Deep dive into asynchronous distributed microservices, Generative AI OCR, real-time WebSocket bidding, and scalable cloud systems."
          />
          <div className="mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-bg-border bg-bg-card px-4 py-2 text-xs font-semibold text-ink-muted transition-all hover:border-accent/40 hover:text-accent-bright"
            >
              <span>View All 5 Projects</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Toolbox / Skills */}
      <SectionWrapper id="skills" className="border-t border-bg-border/80">
        <SectionHeading
          label="Technical Toolbox"
          title="Skills & Technologies"
          description="A production-tested toolkit refined through high-throughput API development, Celery background queues, AWS deployments, and Odoo ERP modules."
        />
        <div className="glass-card rounded-2xl p-8 border border-bg-border">
          <div className="flex flex-wrap gap-2.5">
            {data.skills.map((skill) => (
              <TechTag key={skill.name} name={skill.name} size="md" />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Quick CTA Banner */}
      <SectionWrapper className="border-t border-bg-border/80">
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-accent/30 bg-gradient-to-br from-bg-card via-bg-surface to-accent/5 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Looking for a dependable Software Engineer?
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              Open to full-time Software Engineering roles, distributed systems, Python/FastAPI backend, and enterprise Odoo development.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30"
              >
                Get in Touch
              </Link>
              <a
                href={data.meta.resumeUrl}
                download="Abhishek_Abhigyanam_Resume.pdf"
                className="rounded-lg border border-accent/40 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent-bright transition-all hover:bg-accent/20"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
