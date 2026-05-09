import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-medium text-ink">Page not found</h1>
      <p className="mt-3 text-base text-ink-muted">
        This URL doesn&apos;t exist. Try heading back home.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md border border-bg-border px-6 py-2 text-sm text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
      >
        &lt;- Back to home
      </Link>
    </div>
  );
}
