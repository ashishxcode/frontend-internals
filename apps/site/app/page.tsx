import { chaptersByPart } from "@frontend-internals/content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const groups = chaptersByPart();

  return (
    <div className="px-4 sm:px-8 py-8 sm:py-16">
      <div className="mx-auto" style={{ maxWidth: "48rem" }}>
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-[var(--text-heading)]">
            frontend <span className="text-[var(--accent)]">internals</span>
          </h1>
          <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            Mastering frontend internals
          </p>
        </div>

        <div className="space-y-6">
          {Array.from(groups.entries()).map(([part, chs]) => (
            <section key={part}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-secondary)] ring-1 ring-[var(--border)] uppercase tracking-wider">
                  {part}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {chs.length}
                </span>
              </div>
              <div className="grid gap-px">
                {chs.map((ch) => (
                  <Link
                    key={ch.slug}
                    href={`/${ch.slug}`}
                    className="group flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors hover:bg-[var(--bg-tertiary)]"
                  >
                    <span className="font-mono text-xs text-[var(--text-muted)] w-8 shrink-0 text-right">
                      {ch.num}
                    </span>
                    <span className="flex-1 text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {ch.title}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] truncate max-w-[12rem] hidden sm:block">
                      {ch.description}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--text-muted)]">
          <p>Built with Next.js · MDX · Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
