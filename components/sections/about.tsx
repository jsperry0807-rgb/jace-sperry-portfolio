import { GithubActivity } from "@/components/github-activity";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutParagraphs, principles, stack } from "@/lib/content";
import type { GithubStats } from "@/lib/github-stats";

const paragraphs = aboutParagraphs;

export function About({ stats }: { stats: GithubStats | null }) {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-16 sm:py-24">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="About"
            id="about-title"
            title={
              <>
                A student who{" "}
                <span className="font-serif font-normal italic text-brand">ships.</span>
              </>
            }
            description="The short version: I learn by building the real thing, then living with the consequences."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-10">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/90">
                  How I work
                </h3>
                <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-border/80 bg-border/70 sm:grid-cols-3">
                  {principles.map((principle, index) => (
                    <div key={principle.title} className="bg-background p-5">
                      <span className="font-mono text-[10px] text-brand/70">
                        0{index + 1}
                      </span>
                      <h4 className="mt-2 text-[13.5px] font-medium tracking-tight">
                        {principle.title}
                      </h4>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                        {principle.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={60}>
              <div className="overflow-hidden rounded-xl border border-border/80 bg-card/25">
                <div className="flex items-center justify-between border-b border-border/70 px-5 py-3.5">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Toolkit
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                    day to day
                  </span>
                </div>

                <dl className="divide-y divide-border/70">
                  {stack.map((group) => (
                    <div key={group.label} className="px-5 py-4">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                        {group.label}
                      </dt>
                      <dd className="mt-1.5 text-[13px] leading-relaxed text-foreground/80">
                        {group.items.join(" · ")}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-3 rounded-xl border border-border/80 bg-card/25 p-5">
                <h3 className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                  Currently learning
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground/80">
                  Rust rendering with wgpu, and how to make offline-first synchronization
                  boring enough to trust.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>

        {stats ? (
          <Reveal>
            <GithubActivity stats={stats} />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
