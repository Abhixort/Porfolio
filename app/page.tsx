import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import TechTag from "@/components/TechTag";
import data from "@/data/portfolio.json";
import { baseMetadata } from "@/lib/metadata";
import type { Project } from "@/lib/types";

export const metadata: Metadata = baseMetadata;

export default function HomePage() {
  const featured = (data.projects as Project[]).filter((project) => project.featured);

  return (
    <>
      <HeroSection />

      <SectionWrapper id="focus" className="border-t border-bg-border">
        <SectionHeading
          label="// strengths"
          title="What I Bring"
          description="I work best where product context, engineering depth, and delivery ownership overlap."
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
      </SectionWrapper>

      <SectionWrapper id="featured-projects">
        <SectionHeading
          label="// selected work"
          title="Featured Projects"
          description="A closer look at the dashboards, workflow tools, and integration-heavy products I have built end to end."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm text-ink-muted transition-colors hover:text-accent"
          >
            All projects -&gt;
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" className="border-t border-bg-border">
        <SectionHeading
          label="// toolbox"
          title="Tech Stack"
          description="The technologies I reach for most often when building production-ready web products and platform customizations."
        />
        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill) => (
            <TechTag key={skill.name} name={skill.name} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
