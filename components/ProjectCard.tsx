import type { Project } from "@/lib/types";
import TechTag from "./TechTag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-bg-border bg-bg-card/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-bg-card/95 hover:shadow-2xl hover:shadow-black/50">
      {/* Soft gradient aura on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px at 50% 0%, rgba(99,102,241,0.09) 0%, transparent 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Title and external links */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent-bright">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-accent-light">{project.subtitle}</p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-bg-border bg-bg-surface text-ink-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live link`}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-bg-border bg-bg-surface text-ink-muted transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent-bright"
              >
                <ExternalIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {/* Problem & Impact Breakdown */}
        <div className="space-y-3 mb-5">
          <div className="rounded-xl border border-bg-border/90 bg-bg-surface/50 p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-ink-dim font-bold">
              Engineering Challenge
            </p>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-ink-muted">
              {project.problem}
            </p>
          </div>

          <div className="rounded-xl border border-accent/20 bg-accent/5 p-3.5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-accent-light font-bold">
              Key Impact & Result
            </p>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-ink-muted">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Highlights List */}
        <ul className="mb-6 space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li
              key={`${project.id}-${idx}`}
              className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Chips */}
        <div className="mt-auto pt-4 border-t border-bg-border/70 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechTag key={tech} name={tech} size="sm" />
          ))}
        </div>
      </div>
    </article>
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
