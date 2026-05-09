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
        "inline-flex items-center rounded-full border border-accent/20 bg-accent/5 font-mono font-medium text-accent/80",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs",
        className,
      )}
    >
      {name}
    </span>
  );
}
