import Link from "next/link";
import data from "@/data/portfolio.json";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Web CV", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "GitHub", href: data.meta.github },
  { label: "LinkedIn", href: data.meta.linkedin },
  { label: "LeetCode", href: data.meta.leetcode },
  { label: "Email", href: `mailto:${data.meta.email}` },
];

export default function Footer() {
  return (
    <footer className="no-print border-t border-bg-border/80 bg-bg-surface/50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-mono text-xs font-bold text-accent-bright">AA.dev</span>
            <span className="text-bg-border-light">&bull;</span>
            <span className="text-xs text-ink-muted">{data.meta.name}</span>
          </div>
          <p className="text-xs text-ink-dim">
            {data.meta.role} &bull; {data.meta.location}
          </p>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ink-muted">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-accent-bright"
            >
              {label}
            </Link>
          ))}
          <a
            href={data.meta.resumeUrl}
            download="Abhishek_Abhigyanam_Resume.pdf"
            className="text-accent-light hover:text-accent-bright font-semibold"
          >
            Download PDF
          </a>
        </nav>

        {/* Social Links */}
        <nav aria-label="Social links" className="flex items-center gap-5 text-xs text-ink-muted">
          {SOCIAL.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-bright font-mono"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
