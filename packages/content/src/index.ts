import { join, dirname } from "path";
import { fileURLToPath } from "url";

export type { Chapter } from "./chapters";
export { chapters, chaptersByPart, getChapter, getAdjacent } from "./chapters";

let _contentDir: string | null = null;

/**
 * Resolve the absolute path to the `content/` directory containing .mdx files.
 * Uses workspace structure: packages/content/content/
 */
export function getContentDir(): string {
  if (_contentDir) return _contentDir;

  try {
    // Resolve relative to this file's location
    // packages/content/src/index.ts → packages/content/content/
    const thisFile = fileURLToPath(import.meta.url);
    _contentDir = join(dirname(dirname(thisFile)), "content");
  } catch {
    // Fallback: workspace root relative (Vercel / local)
    _contentDir = join(process.cwd(), "packages", "content", "content");
  }
  return _contentDir;
}
