import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-6xl px-6 py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 space-y-3">
      <div className="inline-flex items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-xs font-semibold text-accent-bright">
        {label}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}
