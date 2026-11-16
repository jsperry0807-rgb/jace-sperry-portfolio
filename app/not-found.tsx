import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70svh] flex-col items-start justify-center py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Error / 404
      </span>

      <p className="mt-6 font-serif text-[7rem] leading-none italic text-brand/80">404</p>

      <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
        This page did not ship.
      </h1>

      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
        The link is wrong, the page moved, or it never existed. The work is still where you
        left it.
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <Button asChild className="h-11 rounded-full px-5 text-sm">
          <Link href="/">
            <ArrowLeft data-icon="inline-start" />
            Back home
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-full border-border bg-transparent px-5 text-sm hover:bg-white/[0.04]"
        >
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </div>
  );
}
