"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type MermaidProps = {
  chart: string;
  caption?: string;
};

function themeConfig(isDark: boolean) {
  return {
    theme: "base" as const,
    themeVariables: {
      // Backgrounds
      background: isDark ? "#0d1117" : "#ffffff",
      mainBkg: isDark ? "#1e293b" : "#eff6ff",
      secondaryColor: isDark ? "#161b22" : "#f8f9fa",
      tertiaryColor: isDark ? "#1c2128" : "#ffffff",
      clusterBkg: isDark ? "#161b22" : "#f8f9fa",
      clusterBorder: isDark ? "#30363d" : "#e5e7eb",

      // Nodes
      primaryColor: isDark ? "#1e293b" : "#eff6ff",
      primaryBorderColor: isDark ? "#3b82f6" : "#93c5fd",
      primaryTextColor: isDark ? "#93c5fd" : "#2563eb",
      nodeBorder: isDark ? "#3b82f6" : "#bfdbfe",
      nodeTextColor: isDark ? "#e5e7eb" : "#374151",

      // Lines / edges
      lineColor: isDark ? "#30363d" : "#d1d5db",
      edgeLabelBackground: isDark ? "#161b22" : "#ffffff",
      labelTextColor: isDark ? "#9ca3af" : "#6b7280",
      labelBoxBkgColor: isDark ? "#1c2128" : "#ffffff",
      labelBoxBorderColor: isDark ? "#30363d" : "#e5e7eb",

      // Titles
      titleColor: isDark ? "#f9fafb" : "#111827",

      // Sequence diagram
      actorBorder: isDark ? "#525252" : "#d1d5db",
      actorBkg: isDark ? "#161b22" : "#f8f9fa",
      actorTextColor: isDark ? "#e5e7eb" : "#374151",
      actorLineColor: isDark ? "#30363d" : "#e5e7eb",
      signalColor: isDark ? "#3b82f6" : "#2563eb",
      signalTextColor: isDark ? "#e5e7eb" : "#374151",
      sequenceNumberColor: isDark ? "#6b7280" : "#9ca3af",
      activationBorderColor: isDark ? "#3b82f6" : "#93c5fd",
      activationBkgColor: isDark ? "#1e293b" : "#eff6ff",

      // Loop / opt / alt boxes
      loopTextColor: isDark ? "#3b82f6" : "#2563eb",

      // Typography
      fontSize: "16px",
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    },
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      curve: "basis" as const,
      padding: 24,
    },
    sequence: {
      useMaxWidth: false,
      hideUnusedParticipants: true,
      mirrorActors: false,
      bottomMarginAdj: 16,
    },
  };
}

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
        const config = themeConfig(isDark);

        mermaid.initialize({
          startOnLoad: false,
          ...config,
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
    return () => {
      cancelled = true;
    };
  }, [chart, resolvedTheme]);

  if (error) {
    return (
      <figure className="my-6">
        <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
        {caption && (
          <figcaption className="text-center text-xs text-[var(--text-muted)] mt-2">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-6">
      <div className="flex justify-center p-5 bg-[var(--bg)] border border-[var(--border)] rounded-xl shadow-sm">
        {svg ? (
          <div
            className="mermaid-svg"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
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
