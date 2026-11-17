import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { DocumentSlot } from "@/components/document-slot";
import { PortfolioSection } from "@/components/portfolio-section";
import { PrintButton } from "@/components/print-button";
import { Button } from "@/components/ui/button";
import {
  documentSlots,
  homeSchool,
  postSecondaryPlan,
} from "@/lib/ects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "North East High School Portfolio",
  description:
    "Jace Sperry's home school portfolio from North East High School, including coursework, activities, and the reflection on balancing school, ECTS, and work.",
  alternates: { canonical: "/north-east" },
  openGraph: {
    title: "North East High School Portfolio — Jace Sperry",
    description:
      "Home school coursework, activities, and reflection from North East High School.",
    url: `${site.url}/north-east`,
  },
};

const coursework = [
  {
    subject: "English",
    detail:
      "Writing, reading, and communication — the base for design notes, documentation, and explaining technical work.",
  },
  {
    subject: "Mathematics",
    detail:
      "Algebra and applied problem solving — the foundation for data structures, algorithms, and graphics work.",
  },
  {
    subject: "Science",
    detail:
      "Lab work and the scientific method — forming a hypothesis, measuring, and revising based on evidence.",
  },
  {
    subject: "Social studies",
    detail:
      "Context for the systems software lives in: people, organizations, policy, and the communities we build for.",
  },
  {
    subject: "Electives",
    detail:
      "Add the electives and technical courses that belong on the transcript.",
  },
] as const;

export default function NorthEastPortfolioPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)] print:hidden"
      />

      <header className="page-shell relative pt-12 pb-10 sm:pt-16 print:pt-0 print:pb-6">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-brand/25 bg-brand/[0.07] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand">
                North East High School Portfolio
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                North East, PA
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              Jace Sperry
            </h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              Home school portfolio
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Coursework, activities, and the reflection on balancing North East High
              School with the afternoon software development program at Erie County
              Technical School.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5 print:hidden">
              <PrintButton label="Print / Save as PDF" />
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-border bg-transparent px-5 text-sm hover:bg-white/[0.04]"
              >
                <Link href="/ects">
                  ECTS portfolio
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
              >
                <Link href="/">Personal portfolio</Link>
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border/70 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {homeSchool.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[13px] text-foreground/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="page-shell space-y-14 pb-24 print:space-y-10 print:pb-0">
        <PortfolioSection id="about" index="01" title="About North East">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
              <p>
                North East High School is my home school. I spend my mornings there and
                my afternoons in the software development program at Erie County
                Technical School, which means most of my school days are split between
                two campuses and two kinds of work.
              </p>
              <p>
                That schedule has been a lesson in time management. It has also made me
                appreciate the parts of high school that are not about a grade: the
                teachers who explain something until it clicks, the classmates who give
                honest feedback, and the community that makes a small school feel
                supportive.
              </p>
            </div>

            <div className="h-fit rounded-xl border border-border/80 bg-card/20 p-5">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                Weekly rhythm
              </p>
              <dl className="mt-3 space-y-3">
                <div>
                  <dt className="text-[11px] text-muted-foreground/85">Mornings</dt>
                  <dd className="mt-0.5 text-[13px] text-foreground/85">
                    North East High School
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-muted-foreground/85">Afternoons</dt>
                  <dd className="mt-0.5 text-[13px] text-foreground/85">
                    Erie County Technical School
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-muted-foreground/85">Also</dt>
                  <dd className="mt-0.5 text-[13px] text-foreground/85">
                    Giant Eagle, and independent projects
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="coursework"
          index="02"
          title="Coursework"
          description="The academic side of the home school schedule. Specific course titles and grades live on the transcript."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {coursework.map((course) => (
              <div
                key={course.subject}
                className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5"
              >
                <h3 className="text-base font-medium">{course.subject}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                  {course.detail}
                </p>
              </div>
            ))}

            <DocumentSlot
              title={documentSlots.transcript.title}
              description={documentSlots.transcript.description}
              meta="Transcript"
              href={documentSlots.transcript.href}
            />
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="activities"
          index="03"
          title="Activities & Service"
          description="Competition work, jobs, and independent projects outside the classroom."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {homeSchool.activities.map((activity) => (
              <div
                key={activity}
                className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5"
              >
                <p className="text-[13px] leading-relaxed text-foreground/85">
                  {activity}
                </p>
              </div>
            ))}

            <div className="print-break-avoid rounded-xl border border-dashed border-border/80 bg-card/10 p-5 print:hidden">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                To add
              </p>
              <h3 className="mt-2 text-base font-medium">Awards & service</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                Add honor roll, awards, clubs, and service hours.
              </p>
            </div>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="reflection"
          index="04"
          title="Reflection on Home School"
          description="The optional ECTS home school reflection, written for both portfolios."
        >
          <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5 sm:p-6">
            <div className="space-y-4 text-[14px] leading-relaxed text-muted-foreground">
              {homeSchool.reflection.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="ahead"
          index="05"
          title="Looking Ahead"
          description="The plan after North East and ECTS."
        >
          <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5 sm:p-6">
            <p className="text-[14px] leading-relaxed text-foreground/85">
              {postSecondaryPlan.intro}
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
              I want a program that combines strong fundamentals with room to build
              real products. I will update the plan with schools and decisions as they
              become final.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 print:hidden">
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-full border-border bg-transparent px-4 text-[13px]"
              >
                <Link href="/ects#post-secondary">
                  Full post-secondary plan
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-10 rounded-full px-4 text-[13px] text-muted-foreground hover:text-foreground"
              >
                <Link href="/ects#reflections">ECTS reflections</Link>
              </Button>
            </div>
          </div>
        </PortfolioSection>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
          <span>{homeSchool.name} · North East, PA</span>
          <span>{site.email}</span>
        </footer>
      </div>
    </div>
  );
}
