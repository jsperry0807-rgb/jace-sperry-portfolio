import { ArrowUpRight } from "lucide-react";

import type { WorkingOn } from "@/lib/github";
import { site } from "@/lib/site";

export function ProfilePlate({ workingOn }: { workingOn: WorkingOn }) {
  return (
    <div className="relative w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/[0.06] blur-2xl"
      />

      <div className="rounded-[1.35rem] border border-white/10 bg-card/30 p-1.5 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
        <div className="overflow-hidden rounded-[1rem] border border-border/80 bg-[#08080a]">
          <div className="flex items-center justify-between border-b border-border/70 px-4 py-2.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              jace.sperry
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              online
            </span>
          </div>

          <div className="relative aspect-5/4 overflow-hidden border-b border-border/70">
            <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]" />
            <div className="absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />

            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
            />

            <span
              aria-hidden
              className="absolute inset-0 grid place-items-center bg-gradient-to-br from-foreground via-foreground to-brand/70 bg-clip-text font-serif text-[7.5rem] leading-none italic text-transparent select-none sm:text-[8.5rem]"
            >
              JS
            </span>

            <span aria-hidden className="absolute top-3 left-3 size-3 border-t border-l border-white/15" />
            <span aria-hidden className="absolute top-3 right-3 size-3 border-t border-r border-white/15" />
            <span aria-hidden className="absolute bottom-3 left-3 size-3 border-b border-l border-white/15" />
            <span aria-hidden className="absolute right-3 bottom-3 size-3 border-r border-b border-white/15" />

            <span className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
              42.1292° N / 80.0851° W
            </span>
          </div>

          <dl className="grid grid-cols-2 text-[11px]">
            <div className="border-r border-b border-border/70 p-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                Role
              </dt>
              <dd className="mt-1.5 text-foreground/90">Student full-stack</dd>
            </div>
            <div className="border-b border-border/70 p-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                Based
              </dt>
              <dd className="mt-1.5 text-foreground/90">{site.locationShort}</dd>
            </div>
            <div className="border-r border-border/70 p-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                Working on
              </dt>
              <dd className="mt-1.5">
                <a
                  href={workingOn.url}
                  target="_blank"
                  rel="noreferrer"
                  title="Latest public GitHub activity"
                  className="group inline-flex items-center gap-1 text-foreground/90 transition-colors hover:text-foreground"
                >
                  {workingOn.label}
                  <ArrowUpRight className="size-3 text-muted-foreground/70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </dd>
            </div>
            <div className="p-4">
              <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                Status
              </dt>
              <dd className="mt-1.5 flex items-center gap-1.5 text-brand">
                <span className="size-1.5 rounded-full bg-brand" />
                Available
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
