export type Chapter = {
  num: string;
  title: string;
  slug: string;
  part: string;
  description: string;
};

const parts: Record<string, string> = {
  "01": "Foundations",
  "02": "Foundations",
  "03": "Foundations",
  "04": "React Internals",
  "05": "React Internals",
  "06": "React Internals",
  "07": "React Internals",
  "08": "React Internals",
  "09": "Browser & Performance",
  "10": "Browser & Performance",
  "11": "Browser & Performance",
  "12": "Web Platform",
  "13": "Web Platform",
  "14": "Web Platform",
  "15": "Web Platform",
  "16": "Architecture & State",
  "17": "Architecture & State",
  "18": "Architecture & State",
  "19": "Architecture & State",
  "20": "Build & Deploy",
  "21": "Build & Deploy",
  "22": "Build & Deploy",
  "23": "Quality & Testing",
  "24": "Quality & Testing",
  "25": "Quality & Testing",
  "26": "Networking",
  "27": "Interview Prep",
  "28": "Interview Prep",
  "29": "Interview Prep",
  "30": "Interview Prep",
  "31": "Interview Prep",
  "32": "Interview Prep",
  "33": "Modern Workflow",
  "34": "Modern Workflow",
};

export const chapters: Chapter[] = [
  // ── Phase 1: Foundations ──────────────────────────────────────
  { num: "01", title: "Roadmap", slug: "00-roadmap", part: "Foundations", description: "Full topic map and learning path" },
  { num: "02", title: "JavaScript Runtime & Memory Model", slug: "01-javascript-runtime", part: "Foundations", description: "Execution context, call stack, heap, closures, memory model" },
  { num: "03", title: "Event Loop, Microtasks & Promises", slug: "02-event-loop", part: "Foundations", description: "Event loop, microtasks, macrotasks, async/await, Promises" },

  // ── Phase 2: React Internals ─────────────────────────────────
  { num: "04", title: "React Rendering", slug: "03-react-rendering", part: "React Internals", description: "setState → Update Queue → Scheduler pipeline" },
  { num: "05", title: "React Fiber", slug: "04-react-fiber", part: "React Internals", description: "Fiber architecture, render/commit phases, lanes" },
  { num: "06", title: "Hook Internals", slug: "05-hook-internals", part: "React Internals", description: "Hook mechanics, stale closures, custom hooks" },
  { num: "07", title: "Reconciliation & Keys", slug: "06-reconciliation", part: "React Internals", description: "Diffing algorithm, keys, reconciliation" },
  { num: "08", title: "React Design Patterns", slug: "24-react-design-patterns", part: "React Internals", description: "Compound components, render props, HOCs, hooks" },

  // ── Phase 3: Browser & Performance ───────────────────────────
  { num: "09", title: "Browser Rendering Pipeline", slug: "07-browser-rendering", part: "Browser & Performance", description: "DOM/CSSOM, layout, paint, composite" },
  { num: "10", title: "CSS & Layout Engine", slug: "16-css-layout", part: "Browser & Performance", description: "Cascade, specificity, flexbox, grid, stacking context" },
  { num: "11", title: "Performance", slug: "08-performance", part: "Browser & Performance", description: "Virtualization, memoization, bundle optimization, Web Vitals" },

  // ── Phase 4: Web Platform ────────────────────────────────────
  { num: "12", title: "Web Platform APIs", slug: "17-web-platform-apis", part: "Web Platform", description: "IntersectionObserver, ResizeObserver, Web Workers, Storage" },
  { num: "13", title: "Forms & Validation", slug: "18-forms-validation", part: "Web Platform", description: "React Hook Form, Zod, controlled inputs, validation" },
  { num: "14", title: "Animation & Framer Motion", slug: "26-animation", part: "Web Platform", description: "CSS animations, Framer Motion, gesture handling" },
  { num: "15", title: "Web Security", slug: "14-web-security", part: "Web Platform", description: "XSS, CSRF, CSP, SameSite, token storage" },

  // ── Phase 5: Architecture & State ────────────────────────────
  { num: "16", title: "State Management", slug: "21-state-management", part: "Architecture & State", description: "useReducer, Zustand, Jotai, Redux, Context" },
  { num: "17", title: "Data Fetching & TanStack Query", slug: "10-tanstack-query", part: "Architecture & State", description: "Server state, caching, mutations, optimistic updates" },
  { num: "18", title: "Architecture & System Design", slug: "11-architecture", part: "Architecture & State", description: "State location, folder structure, design systems" },
  { num: "19", title: "Error Handling", slug: "22-error-handling", part: "Architecture & State", description: "Error boundaries, Suspense, error recovery patterns" },

  // ── Phase 6: Build & Deploy ──────────────────────────────────
  { num: "20", title: "Build Tooling & Modules", slug: "20-build-tooling-modules", part: "Build & Deploy", description: "Vite, Webpack, ESM vs CJS, tree-shaking, code-splitting" },
  { num: "21", title: "Rendering Strategies", slug: "19-rendering-strategies", part: "Build & Deploy", description: "CSR, SSR, SSG, ISR, RSC, hydration" },
  { num: "22", title: "Git, CI/CD & Deployment", slug: "27-git-cicd-deploy", part: "Build & Deploy", description: "Git workflows, CI/CD pipelines, deployment strategies" },

  // ── Phase 7: Quality & Testing ───────────────────────────────
  { num: "23", title: "Testing", slug: "15-testing", part: "Quality & Testing", description: "Unit, integration, e2e testing strategies" },
  { num: "24", title: "Accessibility", slug: "23-accessibility", part: "Quality & Testing", description: "ARIA, keyboard nav, screen readers, semantic HTML" },
  { num: "25", title: "Debugging & DevTools", slug: "25-debugging-devtools", part: "Quality & Testing", description: "Chrome DevTools, React Profiler, performance debugging" },

  // ── Phase 8: Networking ──────────────────────────────────────
  { num: "26", title: "Networking & HTTP", slug: "13-networking-http", part: "Networking", description: "HTTP/1.1·2·3, caching, CORS, WebSockets, CDN" },

  // ── Phase 9: Interview Prep ──────────────────────────────────
  { num: "27", title: "TypeScript Type System", slug: "09-typescript", part: "Interview Prep", description: "Generics, mapped types, conditional types, utility types" },
  { num: "28", title: "Mock Interviews", slug: "12-mock-interviews", part: "Interview Prep", description: "Machine-coding playbook, system design framework" },
  { num: "29", title: "JavaScript Coding Problems", slug: "28-javascript-coding-problems", part: "Interview Prep", description: "Debounce, throttle, deep clone, Promise.all, memoize" },
  { num: "30", title: "React Machine Coding", slug: "29-react-machine-coding", part: "Interview Prep", description: "Searchable dropdown, tabs, modal, infinite scroll, OTP" },
  { num: "31", title: "Component API Design", slug: "30-component-api-design", part: "Interview Prep", description: "Button, Modal, Table, Select, Data Grid API contracts" },
  { num: "32", title: "Frontend System Design", slug: "34-system-design", part: "Interview Prep", description: "Component libraries, real-time systems, design systems, architecture decisions" },

  // ── Phase 10: Modern Workflow ────────────────────────────────
  { num: "33", title: "Product Thinking & Edge Cases", slug: "33-product-thinking-edge-cases", part: "Modern Workflow", description: "Four states, double-submit, optimistic updates, offline" },
  { num: "34", title: "Tailwind CSS", slug: "31-tailwind-css", part: "Modern Workflow", description: "Design tokens, dark mode, responsive, cn(), shadcn/ui" },
  { num: "35", title: "AI Coding Workflows", slug: "32-ai-coding-workflows", part: "Modern Workflow", description: "Cursor, Claude Code, prompt engineering, verification" },
];

export const chaptersByPart = () => {
  const map = new Map<string, Chapter[]>();
  for (const ch of chapters) {
    const list = map.get(ch.part) || [];
    list.push(ch);
    map.set(ch.part, list);
  }
  return map;
};

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacent(slug: string): { prev?: Chapter; next?: Chapter } {
  const idx = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? chapters[idx - 1] : undefined,
    next: idx < chapters.length - 1 ? chapters[idx + 1] : undefined,
  };
}
