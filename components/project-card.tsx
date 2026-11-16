import { ArrowUpRight } from "lucide-react";

import { ProjectArt } from "@/components/project-art";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/25 transition-colors duration-300 hover:border-foreground/15 hover:bg-card/40">
      <ProjectArt project={project} index={index} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-medium tracking-tight sm:text-xl">{project.name}</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
            {project.year}
          </span>
        </div>

        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-brand/80">
          {project.tagline}
        </p>

        <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/75"
            >
              <span
                aria-hidden
                className="mt-[7px] size-1 shrink-0 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="h-6 rounded-full border-border/80 bg-background/20 px-2.5 font-mono text-[10px] font-normal text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto">
          <div className="mt-6 flex items-center gap-5 border-t border-border/70 pt-4">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
            <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/70">
              {project.availability ?? "Open source"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
