"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { ProfilePlate } from "@/components/profile-plate";
import type { WorkingOn } from "@/lib/github";
import { site } from "@/lib/site";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  // Text starts visible so the LCP element paints on first load; only the
  // transform animates. Fading the hero in delays LCP by the hydration time.
  hidden: { opacity: 1, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export function Hero({ workingOn }: { workingOn: WorkingOn }) {
  const scope = useRef<HTMLElement>(null);

  const quickFacts: { label: string; value: string; href?: string }[] = [
    { label: "Working on", value: workingOn.label, href: workingOn.url },
    { label: "Focus", value: "TypeScript / Rust" },
    { label: "Based in", value: site.locationShort },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
        () => {
          gsap.to("[data-hero-parallax]", {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope },
  );

  return (
    <section ref={scope} id="top" aria-labelledby="hero-title" className="relative">
      <div className="page-shell pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/40 py-1.5 pr-3.5 pl-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
              </span>
              {site.availability}
            </motion.span>

            <motion.h1
              variants={item}
              id="hero-title"
              className="mt-7 text-[2.85rem] leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]"
            >
              I build software
              <br className="hidden sm:block" /> that{" "}
              <span className="font-serif font-normal tracking-[-0.01em] italic text-brand">
                holds up.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]"
            >
              I&apos;m Jace, a student full-stack engineer. I design and ship complete web
              applications — interfaces, APIs, data models, auth, and the deployment that
              holds it together. Most of my work is TypeScript across the stack; Rust shows
              up where performance actually matters.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-2.5"
            >
              <Button asChild className="h-11 rounded-full px-5 text-sm">
                <a href="#work">
                  View selected work
                  <ArrowDownRight data-icon="inline-end" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-border bg-transparent px-5 text-sm hover:bg-white/[0.04]"
              >
                <a href={`mailto:${site.email}`}>
                  <Mail data-icon="inline-start" />
                  Email me
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/70 pt-6"
            >
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {fact.label}
                  </span>
                  {fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                      title="Latest public GitHub activity"
                      className="group inline-flex items-center gap-1 text-[13px] text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {fact.value}
                      <ArrowUpRight className="size-3 text-muted-foreground/70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="text-[13px] text-foreground/80">{fact.value}</span>
                  )}
                </div>
              ))}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="group ml-auto hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
              >
                GitHub
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <div data-hero-parallax>
              <ProfilePlate workingOn={workingOn} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
