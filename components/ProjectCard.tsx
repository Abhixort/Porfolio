import type { Project } from "@/lib/types";
import TechTag from "./TechTag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-bg-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:bg-bg-card/80 hover:shadow-lg hover:shadow-accent/5">
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px at 50% 0%, rgba(110,231,183,0.04) 0%, transparent 80%)",
        }}
      />

      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-ink transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs text-ink-dim">{project.subtitle}</p>
        </div>

        <div className="flex shrink-0 gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-ink-dim transition-colors hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-ink-dim transition-colors hover:text-accent"
            >
              <ExternalIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <div className="space-y-3">
        <div className="rounded-lg border border-bg-border/80 bg-bg/30 p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Problem
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {project.problem}
          </p>
        </div>

        <div className="rounded-lg border border-accent/10 bg-accent/5 p-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Impact
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {project.impact}
          </p>
        </div>

        <ul className="space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={`${project.id}-${highlight}`}
              className="flex gap-3 text-sm leading-relaxed text-ink-muted"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <TechTag key={tech} name={tech} size="sm" />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <ProjectLink href={project.github}>Frontend Repo</ProjectLink>
        {project.githubBackend && (
          <ProjectLink href={project.githubBackend}>Backend Repo</ProjectLink>
        )}
        {project.live && <ProjectLink href={project.live}>Live Demo</ProjectLink>}
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent transition-colors hover:border-accent/40 hover:bg-accent/10"
    >
      {children}
    </a>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
