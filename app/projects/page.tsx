import type { Metadata } from "next";
import { makeMetadata } from "@/lib/metadata";
import ProjectCard from "@/components/ProjectCard";
import { SectionWrapper, SectionHeading } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = makeMetadata(
  "Projects",
  "Backend microservices, distributed queue architectures, Generative AI OCR, and real-time systems by Abhishek Abhigyanam.",
);

export default function ProjectsPage() {
  const projects = data.projects as Project[];

  return (
    <SectionWrapper>
      <SectionHeading
        label="Engineered Systems"
        title="Featured Projects"
        description="A closer look at the distributed backend architectures, microservices, asynchronous worker pipelines, and AI systems I have designed and deployed."
      />

      <div className="grid gap-7 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          label="Architectural Principles"
          title="How I Design Systems"
          description="Across high-throughput REST APIs, asynchronous worker tasks, and cloud deployments, these core engineering principles guide every architecture."
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
              <h3 className="text-base font-semibold text-ink group-hover:text-accent-bright transition-colors">
                {area.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-bg-border/90 bg-bg-card/40 p-8 sm:p-10 text-center">
        <h3 className="text-base font-semibold text-ink mb-2">
          Looking for custom architectures or specialized repositories?
        </h3>
        <p className="text-sm text-ink-muted max-w-xl mx-auto leading-relaxed">
          More backend repositories and enterprise modules are actively maintained. Explore my open-source code on{" "}
          <a
            href={data.meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-bright hover:underline font-semibold"
          >
            GitHub
          </a>{" "}
          or connect with me directly for a technical walkthrough.
        </p>
      </div>
    </SectionWrapper>
  );
}
