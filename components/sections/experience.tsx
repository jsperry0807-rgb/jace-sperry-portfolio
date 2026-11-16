"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Experience() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rail = root.current?.querySelector<HTMLElement>("[data-timeline-rail]");
        const rows = gsap.utils.toArray<HTMLElement>("[data-timeline-row]");

        if (rail) {
          gsap.fromTo(
            rail,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top 78%",
                end: "bottom 85%",
                scrub: 0.4,
              },
            },
          );
        }

        rows.forEach((row) => {
          const dot = row.querySelector<HTMLElement>("[data-timeline-dot]");
          const content = row.querySelector<HTMLElement>("[data-timeline-content]");

          if (content) {
            gsap.from(content, {
              opacity: 0,
              y: 22,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                once: true,
              },
            });
          }

          if (dot) {
            gsap.to(dot, {
              backgroundColor: "var(--brand)",
              borderColor: "var(--brand)",
              scale: 1.2,
              duration: 0.35,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 68%",
                once: true,
              },
            });
          }
        });

        return () => {
          if (rail) gsap.set(rail, { clearProps: "transform" });
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24 py-16 sm:py-24"
    >
      <div className="page-shell" ref={root}>
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Experience"
            id="experience-title"
            title={
              <>
                Where the work{" "}
                <span className="font-serif font-normal italic text-brand">happens.</span>
              </>
            }
            description="School, independent projects, competition work, and part-time jobs — the places the experience actually comes from."
          />
        </Reveal>

        <ol className="relative mt-12 border-t border-border/70">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-0 hidden w-px bg-border/70 sm:block"
          />
          <span
            data-timeline-rail
            aria-hidden
            className="absolute top-2 bottom-2 left-0 hidden w-px origin-top bg-brand/60 sm:block"
          />

          {experience.map((item, index) => (
            <li
              key={`${item.role}-${item.org}`}
              data-timeline-row
              className="relative border-b border-border/70 last:border-b-0"
            >
              <span
                aria-hidden
                data-timeline-dot
                className="absolute top-9 -left-[3.5px] hidden size-2 rounded-full border border-muted-foreground/40 bg-background sm:block"
              />

              <div
                data-timeline-content
                className="grid gap-4 py-8 sm:grid-cols-[9.5rem_1fr] sm:gap-10 sm:pl-10"
              >
                <div className="flex items-start gap-2.5 sm:flex-col sm:gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.period}
                  </span>
                  {index === 0 ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand/[0.08] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-brand/90">
                      <span className="size-1 rounded-full bg-brand" />
                      Current
                    </span>
                  ) : null}
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <h3 className="text-lg font-medium tracking-tight">{item.role}</h3>
                    <span aria-hidden className="text-muted-foreground/30">
                      /
                    </span>
                    <span className="text-sm text-muted-foreground">{item.org}</span>
                    {item.location ? (
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/85">
                        {item.location}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>

                  {item.bullets.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-[13px] leading-relaxed text-foreground/75"
                        >
                          <span
                            aria-hidden
                            className="mt-[9px] h-px w-3 shrink-0 bg-muted-foreground/40"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {item.tech.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
