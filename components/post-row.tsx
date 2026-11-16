import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatDate, type Post } from "@/lib/writing";

export function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group grid gap-2 border-b border-border/70 py-6 transition-colors hover:bg-white/[0.015] sm:grid-cols-[8.5rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-2"
    >
      <time
        dateTime={post.date}
        className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80"
      >
        {formatDate(post.date)}
      </time>

      <div>
        <h3 className="text-lg font-medium tracking-tight transition-colors duration-200 group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
          <span>{post.readingTime} min read</span>
          <span aria-hidden>·</span>
          <span>{post.tags.join(" / ")}</span>
        </div>
      </div>

      <ArrowUpRight className="hidden size-4 text-muted-foreground/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground sm:block" />
    </Link>
  );
}
