"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type MermaidProps = {
  chart: string;
  caption?: string;
};

export default function Mermaid({ chart, caption }: MermaidProps) {
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    setSvg(null);
    setError(null);

    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        const isDark = resolvedTheme === "dark";

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? "dark" : "base",
          themeVariables: isDark ? {
            background: "#0d1117",
            primaryColor: "#1e293b",
            primaryBorderColor: "#3b82f6",
            primaryTextColor: "#93c5fd",
            lineColor: "#30363d",
            secondaryColor: "#161b22",
            tertiaryColor: "#1c2128",
            fontSize: "13px",
            fontFamily: "Inter, system-ui, sans-serif",
          } : {
            background: "#ffffff",
            primaryColor: "#eff6ff",
            primaryBorderColor: "#3b82f6",
            primaryTextColor: "#2563eb",
            lineColor: "#d1d5db",
            secondaryColor: "#f8f9fa",
            tertiaryColor: "#ffffff",
            fontSize: "13px",
            fontFamily: "Inter, system-ui, sans-serif",
          },
          flowchart: { useMaxWidth: true, htmlLabels: true },
        });

        if (!cancelled) {
          const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
          const { svg: rendered } = await mermaid.render(id, chart);
          setSvg(rendered);
        }
      } catch (e) {
        if (!cancelled) {
          console.error("Mermaid error:", e);
          setError("Diagram render failed");
        }
      }
    }

    render();
    return () => { cancelled = true; };
  }, [chart, resolvedTheme]);

  if (error) {
    return (
      <figure className="my-6">
        <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
        {caption && <figcaption className="text-center text-xs text-[var(--text-muted)] mt-2">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className="my-6">
      <div className="flex justify-center p-5 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
        {svg ? (
          <div dangerouslySetInnerHTML={{ __html: svg }} />
        ) : (
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <span className="w-3 h-3 rounded-full border-2 border-[var(--text-muted)] border-t-transparent animate-spin" />
            Loading diagram...
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-[var(--text-muted)] mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
