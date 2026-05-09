import type { Metadata } from "next";
import { makeMetadata } from "@/lib/metadata";
import ProjectCard from "@/components/ProjectCard";
import { SectionWrapper, SectionHeading } from "@/components/SectionWrapper";
import data from "@/data/portfolio.json";
import type { Project } from "@/lib/types";

export const metadata: Metadata = makeMetadata(
  "Projects",
  "Full-stack projects built with MERN, Python, and Odoo by Abhishek Abhigyanam.",
);

export default function ProjectsPage() {
  const projects = data.projects as Project[];

  return (
    <SectionWrapper>
      <SectionHeading
        label="// my work"
        title="Projects"
        description="A deeper look at the dashboards, workflow tools, and full-stack systems I have designed around real operational needs."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading
          label="// project lens"
          title="What These Projects Reflect"
          description="Across different domains, the common thread in my work is practical product thinking paired with maintainable implementation."
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

      <div className="mt-12 rounded-xl border border-dashed border-bg-border p-8 text-center">
        <p className="text-sm text-ink-dim">
          More builds are in progress. You can explore additional repositories on{" "}
          <a
            href={data.meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>{" "}
          or reach out if you want a walkthrough of any project.
        </p>
      </div>
    </SectionWrapper>
  );
}
