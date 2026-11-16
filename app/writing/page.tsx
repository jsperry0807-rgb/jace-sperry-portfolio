import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Rss } from "lucide-react";

import { PostRow } from "@/components/post-row";
import { getAllPosts } from "@/lib/writing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on architecture, interface constraints, and measurement from Jace Sperry's projects.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: `Writing — ${site.name}`,
    description:
      "Notes on architecture, interface constraints, and measurement from Jace Sperry's projects.",
    url: `${site.url}/writing`,
  },
};

export default function WritingIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="page-shell py-14 sm:py-20">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
        Back home
      </Link>

      <header className="mt-10 border-t border-border/70 pt-8">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-brand">Writing</span>
          <span aria-hidden className="h-px w-6 bg-border" />
          <span>
            {posts.length} {posts.length === 1 ? "note" : "notes"}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Notes from the{" "}
          <span className="font-serif font-normal italic text-brand">build.</span>
        </h1>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Technical write-ups on decisions I have had to defend: architecture, interface
          constraints, and the measurements behind them. No tutorials, no hot takes.
        </p>
      </header>

      <div className="mt-12 border-t border-border/70">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>

      <footer className="mt-12 flex flex-col gap-6 border-t border-border/70 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Want to talk about any of this?
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand"
          >
            {site.email}
            <ArrowRight className="size-3.5" />
          </a>
        </div>
        <a
          href="/feed.xml"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <Rss className="size-3.5" />
          Subscribe via RSS
        </a>
      </footer>
    </div>
  );
}
