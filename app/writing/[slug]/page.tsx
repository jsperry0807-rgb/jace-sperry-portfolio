import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight, Rss } from "lucide-react";

import { Note } from "@/components/mdx/note";
import { getAllPosts, getPost, formatDateLong } from "@/lib/writing";
import { site } from "@/lib/site";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${site.url}/writing/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const components = {
  a: ({ href, children, ...props }: React.ComponentProps<"a">) => {
    const isExternal = href?.startsWith("http");

    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  Note,
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const posts = getAllPosts();
  const index = posts.findIndex((entry) => entry.slug === post.slug);
  const next = index >= 0 ? posts[(index + 1) % posts.length] : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/writing/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <div className="page-shell py-14 sm:py-20">
      <Link
        href="/writing"
        className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
        All writing
      </Link>

      <article className="mx-auto mt-10 max-w-[41.5rem]">
        <header className="border-t border-border/70 pt-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/85">
            <time dateTime={post.date}>{formatDateLong(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} min read</span>
            <span aria-hidden>·</span>
            <span className="text-brand/80">{post.tags.join(" / ")}</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            {post.title}
          </h1>

          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
            {post.description}
          </p>

          <div className="mt-8 flex items-center gap-3 border-t border-border/70 pt-5">
            <span className="grid size-8 place-items-center rounded-lg border border-border bg-card/60 font-mono text-[10px] font-medium">
              JS
            </span>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium">{site.name}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                Student full-stack engineer
              </span>
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-neutral mt-12 max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mt-14 prose-h2:mb-4 prose-h2:text-[1.65rem] prose-h3:text-xl prose-p:text-[15.5px] prose-p:leading-[1.78] prose-p:text-muted-foreground prose-a:font-normal prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-foreground prose-code:rounded-md prose-code:bg-white/[0.06] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.85em] prose-code:font-normal prose-code:text-foreground prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-xl prose-pre:border prose-pre:border-border/80 prose-pre:bg-[#0b0b0e] prose-pre:p-5 prose-pre:text-[13px] prose-li:text-[15.5px] prose-li:leading-[1.75] prose-li:text-muted-foreground prose-li:marker:text-brand/60 prose-ol:text-muted-foreground prose-ul:text-muted-foreground prose-blockquote:border-l-brand/40 prose-blockquote:text-muted-foreground prose-blockquote:not-italic prose-hr:border-border/70">
          {content}
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-[41.5rem] border-t border-border/70 pt-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          {next && next.slug !== post.slug ? (
            <Link href={`/writing/${next.slug}`} className="group max-w-md">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/85">
                Next note
              </span>
              <span className="mt-2 flex items-baseline gap-2 text-lg font-medium tracking-tight transition-colors group-hover:text-brand">
                {next.title}
                <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ) : (
            <span />
          )}

          <a
            href="/feed.xml"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Rss className="size-3.5" />
            Subscribe
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
