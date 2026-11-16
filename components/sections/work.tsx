import { ArrowRight, ArrowUpRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { featuredProjects, moreProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24 py-16 sm:py-24">
      <div className="page-shell">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            id="work-title"
            title={
              <>
                Software, from{" "}
                <span className="font-serif font-normal italic text-brand">
                  schema to screen.
                </span>
              </>
            }
            description="Four systems I have built end to end, from the data model to the interface. All public — read the code."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="text-xl font-medium tracking-tight">More from the archive</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Smaller builds, experiments, and school projects. Same approach: real data,
                real auth, real deployment.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-6 h-10 rounded-full border-border bg-transparent px-4 text-[13px] hover:bg-white/[0.04]"
              >
                <a href={site.github} target="_blank" rel="noreferrer">
                  All repositories
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ul className="border-t border-border/70">
              {moreProjects.map((project) => (
                <li key={project.name} className="border-b border-border/70">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-1.5 py-5 transition-colors hover:bg-white/[0.015] sm:px-2"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-[15px] font-medium tracking-tight transition-colors group-hover:text-brand">
                        {project.name}
                      </span>
                      {project.live ? (
                        <span className="rounded-full border border-brand/25 bg-brand/[0.08] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-brand/90">
                          Live
                        </span>
                      ) : null}
                      <ArrowUpRight className="ml-auto size-4 text-muted-foreground/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </span>
                    <span className="max-w-xl text-[13px] leading-relaxed text-muted-foreground">
                      {project.description}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/85">
                      {project.tech}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
