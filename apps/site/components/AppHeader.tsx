"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { chapters } from "@frontend-internals/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function AppHeader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  const chapter = chapters.find((c) => `/${c.slug}` === pathname);
  const title = chapter ? `${chapter.num}. ${chapter.title}` : "frontend internals";

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) setProgress(Math.min((scrollTop / docHeight) * 100, 100));
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="flex h-12 items-center gap-3 px-4">
        <SidebarTrigger className="-ml-1 size-8" />
        {title ? (
          <span className="text-sm font-medium text-[var(--text)] truncate">{title}</span>
        ) : null}
        <div className="flex-1" />
        <ThemeToggle />
        <a
          href="https://github.com/ashishxcode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0"
        >
          @ashishxcode
        </a>
      </div>
      <div className="h-0.5 bg-[var(--border)]">
        <div
          className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
