import data from "@/data/portfolio.json";

const SOCIAL = [
  { label: "GitHub", href: data.meta.github },
  { label: "LinkedIn", href: data.meta.linkedin },
  { label: "LeetCode", href: data.meta.leetcode },
];

export default function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-xs text-ink-dim">
            Copyright {new Date().getFullYear()} {data.meta.name}.
          </p>
          <p className="mt-1 text-xs text-ink-dim">
            {data.meta.role} | {data.meta.location}
          </p>
        </div>
        <nav aria-label="Social links" className="flex gap-6">
          {SOCIAL.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-muted transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
