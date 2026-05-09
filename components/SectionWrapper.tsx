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
      className={cn("mx-auto max-w-5xl px-6 py-20", className)}
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
    <div className="mb-12 space-y-2">
      <p className="font-mono text-xs text-accent">{label}</p>
      <h2 className="text-3xl font-medium text-ink">{title}</h2>
      {description && (
        <p className="max-w-xl text-base text-ink-muted">{description}</p>
      )}
    </div>
  );
}
