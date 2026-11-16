import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PostRow } from "@/components/post-row";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/writing";

export function WritingPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Writing"
            id="writing-title"
            title={
              <>
                Notes from the{" "}
                <span className="font-serif font-normal italic text-brand">build.</span>
              </>
            }
            description="Short, technical write-ups on decisions I have had to defend — architecture, interface constraints, and measurement."
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-12 border-t border-border/70">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/writing"
            className="group mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Read all notes
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
