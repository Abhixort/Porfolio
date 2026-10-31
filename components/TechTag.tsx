import { cn } from "@/lib/utils";

interface TechTagProps {
  name: string;
  size?: "sm" | "md";
  className?: string;
}

export default function TechTag({ name, size = "md", className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-bg-border bg-bg-surface/70 font-mono font-medium text-ink-muted transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent-bright",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
        className,
      )}
    >
      {name}
    </span>
  );
}
