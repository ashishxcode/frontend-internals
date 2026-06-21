export type Chapter = {
  num: string;
  title: string;
  slug: string;
  part: string;
  description: string;
};

const parts: Record<string, string> = {
  "01": "JavaScript Runtime",
  "02": "JavaScript Runtime",
  "03": "React Internals",
  "04": "React Internals",
  "05": "React Internals",
  "06": "React Internals",
  "07": "Browser Internals",
  "08": "Performance",
  "09": "TypeScript",
  "10": "Architecture",
  "11": "Architecture",
  "12": "Interview Preparation",
  "13": "Networking & Security",
  "14": "Networking & Security",
  "15": "Web Platform & Quality",
  "16": "Web Platform & Quality",
  "17": "Web Platform & Quality",
  "18": "Web Platform & Quality",
  "19": "Rendering & Build",
  "20": "Rendering & Build",
  "21": "Rendering & Build",
  "22": "Advanced Topics",
  "23": "Advanced Topics",
  "24": "Advanced Topics",
  "25": "Advanced Topics",
  "26": "Advanced Topics",
  "27": "Advanced Topics",
  "28": "Coding & Practice",
  "29": "Coding & Practice",
  "30": "Coding & Practice",
  "31": "Tooling & Workflow",
  "32": "Tooling & Workflow",
  "33": "Tooling & Workflow",
};

export const chapters: Chapter[] = [
  { num: "00", title: "Roadmap", slug: "00-roadmap", part: "Overview", description: "Full topic map and learning path" },
  { num: "01", title: "JavaScript Runtime & Memory Model", slug: "01-javascript-runtime", part: "JavaScript Runtime", description: "Execution context, call stack, heap, closures, memory model" },
  { num: "02", title: "Event Loop, Microtasks & Promises", slug: "02-event-loop", part: "JavaScript Runtime", description: "Event loop, microtasks, macrotasks, async/await, Promises" },
  { num: "03", title: "React Rendering", slug: "03-react-rendering", part: "React Internals", description: "setState → Update Queue → Scheduler pipeline" },
  { num: "04", title: "React Fiber", slug: "04-react-fiber", part: "React Internals", description: "Fiber architecture, render/commit phases, lanes" },
  { num: "05", title: "Hook Internals", slug: "05-hook-internals", part: "React Internals", description: "Hook mechanics, stale closures, custom hooks" },
  { num: "06", title: "Reconciliation & Keys", slug: "06-reconciliation", part: "React Internals", description: "Diffing algorithm, keys, reconciliation" },
  { num: "07", title: "Browser Rendering Pipeline", slug: "07-browser-rendering", part: "Browser Internals", description: "DOM/CSSOM, layout, paint, composite" },
  { num: "08", title: "Performance", slug: "08-performance", part: "Performance", description: "Virtualization, memoization, bundle optimization, Web Vitals" },
  { num: "09", title: "TypeScript Type System", slug: "09-typescript", part: "TypeScript", description: "Generics, mapped types, conditional types, utility types" },
  { num: "10", title: "Data Fetching & TanStack Query", slug: "10-tanstack-query", part: "Architecture", description: "Server state, caching, mutations, optimistic updates" },
  { num: "11", title: "Architecture & System Design", slug: "11-architecture", part: "Architecture", description: "State location, folder structure, design systems" },
  { num: "12", title: "Mock Interviews", slug: "12-mock-interviews", part: "Interview Preparation", description: "Machine-coding playbook, system design framework" },
  { num: "13", title: "Networking & HTTP", slug: "13-networking-http", part: "Networking & Security", description: "HTTP/1.1·2·3, caching, CORS, WebSockets, CDN" },
  { num: "14", title: "Web Security", slug: "14-web-security", part: "Networking & Security", description: "XSS, CSRF, CSP, SameSite, token storage" },
  { num: "15", title: "Testing", slug: "15-testing", part: "Web Platform & Quality", description: "Unit, integration, e2e testing strategies" },
  { num: "16", title: "CSS & Layout Engine", slug: "16-css-layout", part: "Web Platform & Quality", description: "Cascade, specificity, flexbox, grid, stacking context" },
  { num: "17", title: "Web Platform APIs", slug: "17-web-platform-apis", part: "Web Platform & Quality", description: "IntersectionObserver, ResizeObserver, Web Workers, Storage" },
  { num: "18", title: "Forms & Validation", slug: "18-forms-validation", part: "Web Platform & Quality", description: "React Hook Form, Zod, controlled inputs, validation" },
  { num: "19", title: "Rendering Strategies", slug: "19-rendering-strategies", part: "Rendering & Build", description: "CSR, SSR, SSG, ISR, RSC, hydration" },
  { num: "20", title: "Build Tooling & Modules", slug: "20-build-tooling-modules", part: "Rendering & Build", description: "Vite, Webpack, ESM vs CJS, tree-shaking, code-splitting" },
  { num: "21", title: "State Management", slug: "21-state-management", part: "Rendering & Build", description: "useReducer, Zustand, Jotai, Redux, Context" },
  { num: "22", title: "Error Handling", slug: "22-error-handling", part: "Advanced Topics", description: "Error boundaries, Suspense, error recovery patterns" },
  { num: "23", title: "Accessibility", slug: "23-accessibility", part: "Advanced Topics", description: "ARIA, keyboard nav, screen readers, semantic HTML" },
  { num: "24", title: "React Design Patterns", slug: "24-react-design-patterns", part: "Advanced Topics", description: "Compound components, render props, HOCs, hooks" },
  { num: "25", title: "Debugging & DevTools", slug: "25-debugging-devtools", part: "Advanced Topics", description: "Chrome DevTools, React Profiler, performance debugging" },
  { num: "26", title: "Animation & Framer Motion", slug: "26-animation", part: "Advanced Topics", description: "CSS animations, Framer Motion, gesture handling" },
  { num: "27", title: "Git, CI/CD & Deployment", slug: "27-git-cicd-deploy", part: "Advanced Topics", description: "Git workflows, CI/CD pipelines, deployment strategies" },
  { num: "28", title: "JavaScript Coding Problems", slug: "28-javascript-coding-problems", part: "Coding & Practice", description: "Debounce, throttle, deep clone, Promise.all, memoize" },
  { num: "29", title: "React Machine Coding", slug: "29-react-machine-coding", part: "Coding & Practice", description: "Searchable dropdown, tabs, modal, infinite scroll, OTP" },
  { num: "30", title: "Component API Design", slug: "30-component-api-design", part: "Coding & Practice", description: "Button, Modal, Table, Select, Data Grid API contracts" },
  { num: "31", title: "Tailwind CSS", slug: "31-tailwind-css", part: "Tooling & Workflow", description: "Design tokens, dark mode, responsive, cn(), shadcn/ui" },
  { num: "32", title: "AI Coding Workflows", slug: "32-ai-coding-workflows", part: "Tooling & Workflow", description: "Cursor, Claude Code, prompt engineering, verification" },
  { num: "33", title: "Product Thinking & Edge Cases", slug: "33-product-thinking-edge-cases", part: "Tooling & Workflow", description: "Four states, double-submit, optimistic updates, offline" },
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
