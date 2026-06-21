import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import ChapterNav from "@/components/ChapterNav";
import Mermaid from "@/components/Mermaid";
import CodeBlock from "@/components/CodeBlock";
import { getChapter, getAdjacent, chapters } from "@/lib/chapters";
import { Children, isValidElement } from "react";

type Props = { params: Promise<{ slug: string }> };

async function MermaidGuard(props: React.ComponentPropsWithoutRef<"pre">) {
  const { children, className } = props;
  const arr = Children.toArray(children);
  const first = arr[0];
  if (isValidElement(first)) {
    const p = first.props as Record<string, unknown>;
    const cls = typeof p.className === "string" ? p.className : "";
    if (cls.includes("language-mermaid")) {
      const chart = String(p.children ?? "").trim();
      return <Mermaid chart={chart} />;
    }
  }
  return <CodeBlock className={className}>{children}</CodeBlock>;
}

const mdxComponents = {
  pre: MermaidGuard,
};

export async function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const mdxPath = join(process.cwd(), "content", `${slug}.mdx`);
  let raw: string;
  if (existsSync(mdxPath)) {
    raw = readFileSync(mdxPath, "utf-8");
  } else {
    notFound();
  }

  const { content: source, data: frontmatter } = matter(raw);

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight],
      },
    },
  });

  const adj = getAdjacent(slug);

  return (
    <div className="flex justify-center px-4 sm:px-8 py-6 sm:py-10">
      <article className="min-w-0 w-full max-w-[42rem]">
        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-2 font-mono">
            <span>ch.{chapter.num}</span>
            <span className="text-[var(--border)]">/</span>
            <span>{chapter.part}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] tracking-tight">
            {chapter.title}
          </h1>
          {frontmatter.description ? (
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {String(frontmatter.description)}
            </p>
          ) : null}
        </header>

        <div className="prose-content">{content}</div>

        <ChapterNav prev={adj.prev} next={adj.next} />
      </article>
    </div>
  );
}
