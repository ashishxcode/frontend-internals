"use client";

import { useRef, useState, type ReactNode } from "react";
import { Copy, Check } from "lucide-react";

type CodeBlockProps = {
  children?: ReactNode;
  className?: string;
};

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const code = preRef.current?.textContent || "";
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
    }
  };

  const lang = typeof className === "string"
    ? className.replace("language-", "").trim()
    : "";

  return (
    <div className="relative group my-6">
      <div className="absolute top-0 right-0 flex items-center gap-2 p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
        {lang ? (
          <span className="text-[11px] font-mono uppercase tracking-wider select-none text-[#9ca3af]">
            {lang}
          </span>
        ) : null}
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium bg-[#1c2128] hover:bg-[#252d38] transition-all text-[#9ca3af]"
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? (
            <><Check className="h-3.5 w-3.5 text-[#10b981]" />Copied</>
          ) : (
            <><Copy className="h-3.5 w-3.5" />Copy</>
          )}
        </button>
      </div>
      <pre
        ref={preRef}
        className="overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-sm leading-6 text-[#e5e7eb] border border-[#30363d]"
      >
        {children}
      </pre>
    </div>
  );
}
