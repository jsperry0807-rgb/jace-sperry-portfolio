import { ArrowUpRight, Mail } from "lucide-react";

import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const details = [
  {
    label: "Availability",
    value: "Open to internships, freelance, and interesting problems.",
  },
  {
    label: "Response time",
    value: "Usually within a day. Often faster after school.",
  },
  {
    label: "Location",
    value: `${site.location} — remote-friendly.`,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 py-16 sm:py-24">
      <div className="page-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/25">
            <div
              aria-hidden
              className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_80%_at_20%_0%,black,transparent)]"
            />
            <div
              aria-hidden
              className="absolute -top-32 -right-24 size-80 rounded-full bg-brand/[0.09] blur-[100px]"
            />

            <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:p-14">
              <div>
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="text-brand">05</span>
                  <span aria-hidden className="h-px w-6 bg-border" />
                  <span>Contact</span>
                </div>

                <h2
                  id="contact-title"
                  className="mt-6 max-w-xl text-4xl font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.02]"
                >
                  Have something{" "}
                  <span className="font-serif font-normal italic text-brand">
                    worth building?
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  I am always interested in ambitious projects, internships, and teams that
                  care about the unglamorous parts. Tell me what you are working on.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-2.5">
                  <Button asChild className="h-12 rounded-full px-6 text-sm">
                    <a href={`mailto:${site.email}`}>
                      <Mail data-icon="inline-start" />
                      {site.email}
                    </a>
                  </Button>
                  <CopyEmail email={site.email} className="h-12 bg-transparent px-5 text-[11px]" />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
                <dl className="space-y-5">
                  {details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                        {detail.label}
                      </dt>
                      <dd className="mt-1.5 text-[13px] leading-relaxed text-foreground/80">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-col gap-2">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between gap-4 border-t border-border/70 pt-4 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/85">
                        GitHub
                      </span>
                      {site.githubHandle}
                    </span>
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={site.githubOrg}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-between gap-4 border-t border-border/70 pt-4 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/85">
                        Organization
                      </span>
                      {site.orgHandle}
                    </span>
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
