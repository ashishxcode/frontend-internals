"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { Search, ArrowRight } from "lucide-react";
import type { Chapter } from "@frontend-internals/content";

type SearchDialogProps = { chapters: Chapter[] };

export default function SearchDialog({ chapters }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Chapter[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const fuseRef = useRef<Fuse<Chapter> | null>(null);

  useEffect(() => {
    fuseRef.current = new Fuse(chapters, {
      keys: [
        { name: "title", weight: 2 },
        { name: "description", weight: 1 },
        { name: "part", weight: 0.5 },
      ],
      threshold: 0.4,
    });
  }, [chapters]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setOpen(v => !v); }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpenSearch() { setOpen(true); }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("open-search", onOpenSearch);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("open-search", onOpenSearch);
    };
  }, []);

  useEffect(() => {
    if (open) { setQuery(""); setResults([]); setSelectedIdx(0); requestAnimationFrame(() => inputRef.current?.focus()); }
  }, [open]);

  const search = useCallback((val: string) => {
    setQuery(val);
    if (!val.trim() || !fuseRef.current) { setResults([]); setSelectedIdx(0); return; }
    setResults(fuseRef.current.search(val).map(r => r.item));
    setSelectedIdx(0);
  }, []);

  const navigate = useCallback((slug: string) => {
    setOpen(false);
    router.push(`/${slug}`);
  }, [router]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && results[selectedIdx]) { e.preventDefault(); navigate(results[selectedIdx].slug); }
  }

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 bg-[var(--bg-overlay)] backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
        <div
          className="w-full max-w-lg rounded-xl border border-[var(--border)] bg-[var(--bg)] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => search(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search chapters..."
              className="flex-1 bg-transparent text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--bg-tertiary)] px-1.5 py-0.5 text-[11px] font-medium text-[var(--text-muted)]">
              ESC
            </kbd>
          </div>

          {query.trim() && results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.map((ch, idx) => (
                <li key={ch.slug}>
                  <button
                    onClick={() => navigate(ch.slug)}
                    onMouseEnter={() => setSelectedIdx(idx)}
                    className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      idx === selectedIdx
                        ? "bg-[var(--accent-light)] text-[var(--accent)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                    }`}
                  >
                    <span className={`font-mono text-xs w-7 shrink-0 ${idx === selectedIdx ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                      {ch.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="font-medium">{ch.title}</span>
                      <p className={`truncate text-xs mt-0.5 ${idx === selectedIdx ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                        {ch.part} — {ch.description}
                      </p>
                    </div>
                    <ArrowRight className={`h-4 w-4 shrink-0 ${idx === selectedIdx ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`} />
                  </button>
                </li>
              ))}
            </ul>
          ) : query.trim() ? (
            <div className="px-4 py-8 text-center text-sm text-[var(--text-muted)]">
              No chapters found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-xs text-[var(--text-muted)]">
              Type to search across {chapters.length} chapters
            </div>
          )}

          <div className="hidden sm:flex items-center gap-4 border-t border-[var(--border)] px-4 py-2 text-[11px] text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border)] bg-[var(--bg-tertiary)] px-1 py-0.5 font-mono">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border)] bg-[var(--bg-tertiary)] px-1 py-0.5 font-mono">↵</kbd> Open
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-[var(--border)] bg-[var(--bg-tertiary)] px-1 py-0.5 font-mono">Esc</kbd> Close
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
