"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-shell flex min-h-[70svh] flex-col items-start justify-center py-24">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Error / 500
      </span>

      <p className="mt-6 font-serif text-[7rem] leading-none italic text-brand/80">500</p>

      <h1 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
        Something broke on the way here.
      </h1>

      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
        The page did not render. Try again, or head back to the work.
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <Button onClick={reset} className="h-11 rounded-full px-5 text-sm">
          <RotateCcw data-icon="inline-start" />
          Try again
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-full border-border bg-transparent px-5 text-sm hover:bg-white/[0.04]"
        >
          <Link href="/">
            <ArrowLeft data-icon="inline-start" />
            Back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
