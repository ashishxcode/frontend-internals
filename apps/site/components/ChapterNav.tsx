"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type Chapter } from "@frontend-internals/content";

type Props = { prev?: Chapter; next?: Chapter };

export default function ChapterNav({ prev, next }: Props) {
  return (
    <nav className="flex justify-between items-stretch gap-4 mt-12 pt-6 border-t border-[var(--border)]">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className="group flex-1 flex flex-col gap-1 p-3 rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-hover-border)] transition-colors"
        >
          <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Previous
          </span>
          <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
            {prev.num}. {prev.title}
          </span>
        </Link>
      ) : <div className="flex-1" />}

      {next ? (
        <Link
          href={`/${next.slug}`}
          className="group flex-1 flex flex-col gap-1 items-end p-3 rounded-md border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--card-hover-border)] transition-colors text-right"
        >
          <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
            Next <ArrowRight className="h-3 w-3" />
          </span>
          <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-snug">
            {next.num}. {next.title}
          </span>
        </Link>
      ) : <div className="flex-1" />}
    </nav>
  );
}
