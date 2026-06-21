import { readFileSync, writeFileSync, mkdirSync, existsSync, renameSync } from "fs";
import { join } from "path";

const root = join(import.meta.dirname, "..");
const contentDir = join(root, "content");
mkdirSync(contentDir, { recursive: true });

const chapters = {
  "00-roadmap": { title: "Roadmap", chapter: "00", part: "Overview", description: "Full topic map and learning path" },
  "01-javascript-runtime": { title: "JavaScript Runtime & Memory Model", chapter: "01", part: "JavaScript Runtime", description: "Execution context, call stack, heap, closures, memory model" },
  "02-event-loop": { title: "Event Loop, Microtasks & Promises", chapter: "02", part: "JavaScript Runtime", description: "Event loop, microtasks, macrotasks, async/await, Promises" },
  "03-react-rendering": { title: "React Rendering: setState → Queue → Scheduler", chapter: "03", part: "React Internals", description: "setState → Update Queue → Scheduler pipeline" },
  "04-react-fiber": { title: "React Fiber, Render/Commit, Lanes", chapter: "04", part: "React Internals", description: "Fiber architecture, render/commit phases, lanes" },
  "05-hook-internals": { title: "Hook Internals & Stale Closures", chapter: "05", part: "React Internals", description: "Hook mechanics, stale closures, custom hooks" },
  "06-reconciliation": { title: "Reconciliation, Keys & Diffing", chapter: "06", part: "React Internals", description: "Diffing algorithm, keys, reconciliation" },
  "07-browser-rendering": { title: "Browser Rendering Pipeline", chapter: "07", part: "Browser Internals", description: "DOM/CSSOM, layout, paint, composite" },
  "08-performance": { title: "Performance", chapter: "08", part: "Performance", description: "Virtualization, memoization, bundle optimization, Web Vitals" },
  "09-typescript": { title: "TypeScript Type System", chapter: "09", part: "TypeScript", description: "Generics, mapped types, conditional types, utility types" },
  "10-tanstack-query": { title: "Data Fetching & TanStack Query", chapter: "10", part: "Architecture", description: "Server state, caching, mutations, optimistic updates" },
  "11-architecture": { title: "Architecture & System Design", chapter: "11", part: "Architecture", description: "State location, folder structure, design systems" },
  "12-mock-interviews": { title: "Mock Interviews", chapter: "12", part: "Interview Preparation", description: "Machine-coding playbook, system design framework" },
  "13-networking-http": { title: "Networking & HTTP", chapter: "13", part: "Networking & Security", description: "HTTP/1.1·2·3, caching, CORS, WebSockets, CDN" },
  "14-web-security": { title: "Web Security", chapter: "14", part: "Networking & Security", description: "XSS, CSRF, CSP, SameSite, token storage" },
  "15-testing": { title: "Testing", chapter: "15", part: "Web Platform & Quality", description: "Unit, integration, e2e testing strategies" },
  "16-css-layout": { title: "CSS & Layout Engine", chapter: "16", part: "Web Platform & Quality", description: "Cascade, specificity, flexbox, grid, stacking context" },
  "17-web-platform-apis": { title: "Web Platform APIs", chapter: "17", part: "Web Platform & Quality", description: "IntersectionObserver, ResizeObserver, Web Workers, Storage" },
  "18-forms-validation": { title: "Forms & Validation", chapter: "18", part: "Web Platform & Quality", description: "React Hook Form, Zod, controlled inputs, validation" },
  "19-rendering-strategies": { title: "Rendering Strategies", chapter: "19", part: "Rendering & Build", description: "CSR, SSR, SSG, ISR, RSC, hydration" },
  "20-build-tooling-modules": { title: "Build Tooling & Modules", chapter: "20", part: "Rendering & Build", description: "Vite, Webpack, ESM vs CJS, tree-shaking, code-splitting" },
  "21-state-management": { title: "State Management", chapter: "21", part: "Rendering & Build", description: "useReducer, Zustand, Jotai, Redux, Context" },
  "22-error-handling": { title: "Error Handling, Boundaries & Suspense", chapter: "22", part: "Advanced Topics", description: "Error boundaries, Suspense, error recovery patterns" },
  "23-accessibility": { title: "Accessibility", chapter: "23", part: "Advanced Topics", description: "ARIA, keyboard nav, screen readers, semantic HTML" },
  "24-react-design-patterns": { title: "React Design Patterns", chapter: "24", part: "Advanced Topics", description: "Compound components, render props, HOCs, hooks" },
  "25-debugging-devtools": { title: "Debugging & DevTools", chapter: "25", part: "Advanced Topics", description: "Chrome DevTools, React Profiler, performance debugging" },
  "26-animation": { title: "Animation & Framer Motion", chapter: "26", part: "Advanced Topics", description: "CSS animations, Framer Motion, gesture handling" },
  "27-git-cicd-deploy": { title: "Git, CI/CD & Deployment", chapter: "27", part: "Advanced Topics", description: "Git workflows, CI/CD pipelines, deployment strategies" },
  "28-javascript-coding-problems": { title: "JavaScript Coding Problems", chapter: "28", part: "Coding & Practice", description: "Debounce, throttle, deep clone, Promise.all, memoize" },
  "29-react-machine-coding": { title: "React Machine Coding", chapter: "29", part: "Coding & Practice", description: "Searchable dropdown, tabs, modal, infinite scroll, OTP" },
  "30-component-api-design": { title: "Component API Design", chapter: "30", part: "Coding & Practice", description: "Button, Modal, Table, Select, Data Grid API contracts" },
  "31-tailwind-css": { title: "Tailwind CSS", chapter: "31", part: "Tooling & Workflow", description: "Design tokens, dark mode, responsive, cn(), shadcn/ui" },
  "32-ai-coding-workflows": { title: "AI Coding Workflows", chapter: "32", part: "Tooling & Workflow", description: "Cursor, Claude Code, prompt engineering, verification" },
  "33-product-thinking-edge-cases": { title: "Product Thinking & Edge Cases", chapter: "33", part: "Tooling & Workflow", description: "Four states, double-submit, optimistic updates, offline" },
};

for (const [slug, meta] of Object.entries(chapters)) {
  const mdPath = join(root, `${slug}.md`);
  const mdxPath = join(contentDir, `${slug}.mdx`);

  if (!existsSync(mdPath)) {
    console.error(`Missing: ${mdPath}`);
    continue;
  }

  let content = readFileSync(mdPath, "utf-8");

  // Strip existing H1 title (first line starting with #) since we have frontmatter
  content = content.replace(/^# .+\n/, "");

  const frontmatter = `---
title: "${meta.title}"
chapter: "${meta.chapter}"
part: "${meta.part}"
description: "${meta.description}"
---

`;
  content = frontmatter + content;
  writeFileSync(mdxPath, content, "utf-8");
  console.log(`✓ ${slug}.mdx`);
}

console.log(`\nDone. ${Object.keys(chapters).length} files converted.`);
