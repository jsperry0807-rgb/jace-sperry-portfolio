import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { DocumentSlot } from "@/components/document-slot";
import { PortfolioChecklist } from "@/components/portfolio-checklist";
import { PortfolioSection } from "@/components/portfolio-section";
import { PrintButton } from "@/components/print-button";
import { StatusChip } from "@/components/portfolio-status";
import { Button } from "@/components/ui/button";
import { aboutParagraphs, experience, stack } from "@/lib/content";
import {
  activities,
  careerSafe,
  courseSequence,
  coverLetter,
  documentSlots,
  ectsChecklist,
  ectsFacts,
  growthReflection,
  homeSchool,
  opportunities,
  postSecondaryPlan,
  recommendations,
  reflections,
  workSamples,
} from "@/lib/ects";
import { featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ECTS Graduation Portfolio",
  description:
    "Jace Sperry's graduation portfolio for the Software Development program at Erie County Technical School.",
  alternates: { canonical: "/ects" },
  openGraph: {
    title: "ECTS Graduation Portfolio — Jace Sperry",
    description:
      "Hiring documents, work samples, credentials, and reflections for the ECTS Software Development program.",
    url: `${site.url}/ects`,
  },
};

const workExperience = experience.filter(
  (item) =>
    !["Erie County Technical School", "North East High School", "CyberPatriot"].includes(
      item.org,
    ),
);

const education = experience.filter((item) =>
  ["Erie County Technical School", "North East High School"].includes(item.org),
);

const cyberPatriot = experience.find((item) => item.org === "CyberPatriot");

function ResumeGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h4 className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand">
        {title}
      </h4>
      <div className="mt-3 space-y-3.5">{children}</div>
    </section>
  );
}

function ResumeItem({
  title,
  meta,
  detail,
}: {
  title: string;
  meta: string;
  detail?: string;
}) {
  return (
    <div className="print-break-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <p className="text-[13px] font-medium text-foreground/90">{title}</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/85">
          {meta}
        </p>
      </div>
      {detail ? (
        <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
          {detail}
        </p>
      ) : null}
    </div>
  );
}

export default function EctsPortfolioPage() {
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
                ECTS Graduation Portfolio
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                Prepared 2026
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              Jace Sperry
            </h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-brand">
              Software Development
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              A graduation portfolio for the Erie County Technical School Software
              Development program. It collects the hiring documents, work samples,
              credentials, and reflections required by the ECTS checklist.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5 print:hidden">
              <PrintButton />
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-border bg-transparent px-5 text-sm hover:bg-white/[0.04]"
              >
                <Link href="/">
                  Personal portfolio
                  <ArrowUpRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
              >
                <Link href="/north-east">North East portfolio</Link>
              </Button>
            </div>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
              Print / Save as PDF produces a light version of this page.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border/70 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            {ectsFacts.map((fact) => (
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

      <div className="page-shell pb-8">
        <PortfolioChecklist items={ectsChecklist} />
      </div>

      <div className="page-shell space-y-14 pb-24 print:space-y-10 print:pb-0">
        <PortfolioSection
          id="about-me"
          index="01"
          title="Introduction / About Me"
          status="ready"
        >
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="space-y-4 text-[14.5px] leading-relaxed text-muted-foreground">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>
                This portfolio is the collection of that work: the documents, samples,
                credentials, and reflections required by the ECTS program. The sections
                below follow the graduation checklist.
              </p>
            </div>

            <dl className="h-fit space-y-4 rounded-xl border border-border/80 bg-card/20 p-5">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                  Based in
                </dt>
                  <dd className="mt-1 text-[13px] text-foreground/85">
                    {site.location}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                    Email
                  </dt>
                  <dd className="mt-1 text-[13px] text-foreground/85">
                    <a className="hover:text-brand" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                    GitHub
                  </dt>
                  <dd className="mt-1 text-[13px] text-foreground/85">
                    <a
                      className="hover:text-brand"
                      href={site.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {site.githubHandle}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
                    Availability
                  </dt>
                  <dd className="mt-1 text-[13px] text-foreground/85">
                    {site.availability}
                  </dd>
                </div>
            </dl>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="cover-letter"
          index="02"
          title="Cover Letter"
          status="draft"
          description="A starting letter for a software role. Replace the bracketed fields before sending."
        >
          <article className="print-break-avoid rounded-2xl border border-border/80 bg-card/20 p-6 sm:p-8 print:border-0 print:bg-transparent print:p-0">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/70 pb-4">
              <div className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                {site.name}
                <br />
                {site.location}
                <br />
                {site.email}
                <br />
                {site.github.replace("https://", "")}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                Cover letter / draft
              </span>
            </div>

            <p className="mt-6 text-sm text-foreground/85">{coverLetter.date}</p>
            <div className="mt-2 text-sm leading-relaxed text-foreground/85">
              {coverLetter.recipient.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-foreground/85">Dear Hiring Manager,</p>

            <div className="mt-4 space-y-4 text-[14px] leading-relaxed text-foreground/85">
              {coverLetter.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/85">
              {coverLetter.closing}
              <br />
              {site.name}
            </p>

            <p className="mt-6 border-t border-border/60 pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
              {coverLetter.note}
            </p>
          </article>
        </PortfolioSection>

        <PortfolioSection
          id="resume"
          index="03"
          title="Resume"
          status="draft"
          description="The working resume for software and IT roles. Print this page or tailor the details per application."
        >
          <div className="print-break-avoid rounded-2xl border border-border/80 bg-card/20 p-6 sm:p-8 print:border-0 print:bg-transparent print:p-0">
            <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border/70 pb-5">
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{site.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand">
                  Student full-stack engineer
                </p>
              </div>
              <address className="text-right font-mono text-[10px] leading-relaxed text-muted-foreground not-italic">
                {site.locationShort}
                <br />
                {site.email}
                <br />
                {site.githubHandle}
              </address>
            </header>

            <div className="mt-6 grid gap-8 sm:grid-cols-[1.35fr_0.65fr]">
              <div className="space-y-7">
                <ResumeGroup title="Experience">
                  {workExperience.map((item) => (
                    <ResumeItem
                      key={`${item.role}-${item.org}`}
                      title={item.role}
                      meta={`${item.org} · ${item.period}`}
                      detail={item.summary}
                    />
                  ))}
                </ResumeGroup>

                <ResumeGroup title="Selected projects">
                  {featuredProjects.map((project) => (
                    <ResumeItem
                      key={project.slug}
                      title={project.name}
                      meta={project.tech.slice(0, 3).join(" · ")}
                      detail={project.tagline}
                    />
                  ))}
                </ResumeGroup>
              </div>

              <div className="space-y-7">
                <ResumeGroup title="Education">
                  {education.map((item) => (
                    <ResumeItem
                      key={`${item.org}-${item.role}`}
                      title={item.org}
                      meta={item.period}
                      detail={item.role}
                    />
                  ))}
                </ResumeGroup>

                <ResumeGroup title="Skills">
                  {stack.map((group) => (
                    <div key={group.label}>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
                        {group.label}
                      </p>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-foreground/80">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </ResumeGroup>

                {cyberPatriot ? (
                  <ResumeGroup title="Activities">
                    <ResumeItem
                      title={cyberPatriot.role}
                      meta={cyberPatriot.period}
                      detail={cyberPatriot.summary}
                    />
                  </ResumeGroup>
                ) : null}
              </div>
            </div>

            <p className="mt-7 border-t border-border/60 pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
              Draft — tailor the resume to each application.
            </p>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="work-samples"
          index="04"
          title="Work Samples"
          status="ready"
          description="Six projects that show the range of the work: full-stack products, a mobile-first tool, a team project, and a Rust engine."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {workSamples.map((sample, index) => (
              <article
                key={sample.name}
                className="print-break-avoid flex flex-col rounded-xl border border-border/80 bg-card/20 p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[9px] tracking-[0.14em] text-muted-foreground/85">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-right font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
                    {sample.tagline}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{sample.name}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  <span className="text-foreground/80">What it demonstrates: </span>
                  {sample.demonstrates}
                </p>
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/85">
                  {sample.tech}
                </p>
                <a
                  href={sample.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground print:hidden"
                >
                  View code
                  <ArrowUpRight className="size-3.5" />
                </a>
              </article>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="course-sequence"
          index="05"
          title="Course Sequence / Task List"
          status="draft"
          description="How the ECTS program is organized, with the portfolio evidence attached to each level."
        >
          <div className="overflow-x-auto rounded-xl border border-border/80 print:overflow-visible">
            <table className="w-full min-w-[40rem] text-left text-[12.5px] print:min-w-0">
              <thead className="border-b border-border/70 bg-card/30 text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                <tr>
                  <th className="px-4 py-3 font-mono font-normal">Level</th>
                  <th className="px-4 py-3 font-mono font-normal">Focus</th>
                  <th className="px-4 py-3 font-mono font-normal">Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {courseSequence.map((row) => (
                  <tr key={row.level} className="align-top">
                    <th className="px-4 py-3 font-medium text-foreground/85">
                      {row.level}
                    </th>
                    <td className="px-4 py-3 leading-relaxed text-muted-foreground">
                      {row.focus}
                    </td>
                    <td className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground/85">
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
            Course titles should match the official ECTS transcript.
          </p>
        </PortfolioSection>

        <PortfolioSection
          id="credentials"
          index="06"
          title="Industry-Recognized Credentials"
          status="file"
          description="The certificate packet for the portfolio. CareerSafe is broken out in section 08."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/80">
                    Credential summary
                  </p>
                  <h3 className="mt-2 text-base font-medium">CareerSafe 1–4</h3>
                </div>
                <StatusChip status="file" />
              </div>
              <ul className="mt-4 space-y-2">
                {careerSafe.map((item) => (
                  <li
                    key={item.level}
                    className="flex items-baseline justify-between gap-3 border-t border-border/60 pt-2 text-[12.5px]"
                  >
                    <span className="text-foreground/80">
                      CareerSafe {item.level} — {item.topic}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/85">
                      Certificate
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <DocumentSlot
              title={documentSlots.credentials.title}
              description={documentSlots.credentials.description}
              meta="Credentials"
              href={documentSlots.credentials.href}
            />
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="recommendations"
          index="07"
          title="Recommendations"
          status="file"
          description="Two recommendations: one from an ECTS instructor and one from an employer or supervisor."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {recommendations.map((item) => (
              <DocumentSlot
                key={item.title}
                title={item.title}
                description={`${item.from}. ${item.description}`}
                meta="Recommendation"
                href={item.href}
              />
            ))}
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
            Request these early — allow at least two weeks.
          </p>
        </PortfolioSection>

        <PortfolioSection
          id="careersafe"
          index="08"
          title="CareerSafe Certifications"
          status="file"
          description="One certificate for each level. Update the selected topic to match the certificate you completed."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {careerSafe.map((item) => (
              <div
                key={item.level}
                className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/80">
                    CareerSafe {item.level}
                  </span>
                  <StatusChip status="file" />
                </div>
                <h3 className="mt-3 text-base font-medium">{item.topic}</h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground/85">
                  {item.options}
                </p>
                <p className="mt-4 border-t border-border/60 pt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/85">
                  Attach certificate
                </p>
              </div>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="awards"
          index="09"
          title="Awards, Accomplishments, Extracurriculars & Service"
          status="draft"
          description="The activities and recognition that sit outside the classroom projects."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                  {activity.kind}
                </p>
                <h3 className="mt-2 text-base font-medium">{activity.title}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                  {activity.detail}
                </p>
              </div>
            ))}

            <div className="print-break-avoid rounded-xl border border-dashed border-border/80 bg-card/10 p-5 print:hidden">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                To add
              </p>
              <h3 className="mt-2 text-base font-medium">Awards & honors</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                Add academic or technical awards, honor roll, or competition placement.
              </p>
            </div>

            <div className="print-break-avoid rounded-xl border border-dashed border-border/80 bg-card/10 p-5 print:hidden">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                To add
              </p>
              <h3 className="mt-2 text-base font-medium">Service</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                Add service hours, volunteer work, or community projects.
              </p>
            </div>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="post-secondary"
          index="10"
          title="Post-Secondary Plan"
          status="draft"
        >
          <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5 sm:p-6">
            <p className="text-[14px] leading-relaxed text-foreground/85">
              {postSecondaryPlan.intro}
            </p>
            <div className="mt-4 space-y-3 text-[13.5px] leading-relaxed text-muted-foreground">
              {postSecondaryPlan.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 border-t border-border/60 pt-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/85">
                Next steps
              </p>
              <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {postSecondaryPlan.nextSteps.map((step) => (
                  <li key={step} className="flex items-center gap-2 text-[12.5px] text-foreground/80">
                    <CheckCircle2 aria-hidden className="size-3 text-brand" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
              {postSecondaryPlan.note}
            </p>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="reflections"
          index="11"
          title="ATD / Field Trip Reflections"
          status="draft"
          description="Two reflections from the ATD process or a field trip. Personalize the bracketed sections with your actual experience."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {reflections.map((reflection) => (
              <article
                key={reflection.title}
                className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-base font-medium">{reflection.title}</h3>
                  <StatusChip status={reflection.status} />
                </div>
                <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-muted-foreground">
                  {reflection.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <p className="mt-4 border-t border-border/60 pt-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground/85 print:hidden">
                  {reflection.note}
                </p>
              </article>
            ))}
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="growth"
          index="12"
          title="Growth at ECTS"
          status="ready"
        >
          <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5 sm:p-6">
            <div className="space-y-4 text-[13.5px] leading-relaxed text-muted-foreground">
              {growthReflection.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </PortfolioSection>

        <PortfolioSection
          id="application"
          index="13"
          title="Standard Application for Employment"
          status="file"
        >
          <DocumentSlot
            title={documentSlots.application.title}
            description={documentSlots.application.description}
            meta="Application"
            href={documentSlots.application.href}
          />
        </PortfolioSection>

        <PortfolioSection
          id="opportunities"
          index="14"
          title="Potential Employers & Post-Secondary Opportunities"
          status="draft"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5">
              <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand">
                Roles
              </h3>
              <ul className="mt-3 space-y-2">
                {opportunities.roles.map((role) => (
                  <li key={role} className="border-t border-border/60 pt-2 text-[13px] text-foreground/80">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5">
              <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand">
                Post-secondary
              </h3>
              <ul className="mt-3 space-y-2">
                {opportunities.education.map((program) => (
                  <li key={program} className="border-t border-border/60 pt-2 text-[13px] text-foreground/80">
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85 print:hidden">
            {opportunities.note}
          </p>
        </PortfolioSection>

        <PortfolioSection
          id="home-school"
          index="15"
          title="Home School Reflection"
          status="ready"
          description="The optional reflection is included in the North East High School portfolio."
        >
          <div className="print-break-avoid rounded-xl border border-border/80 bg-card/20 p-5 sm:p-6">
            <p className="text-[13.5px] leading-relaxed text-muted-foreground">
              North East High School gave me the fundamentals and the flexibility to
              take the ECTS program seriously. I wrote about that experience in the
              home school portfolio, including the split schedule, the work I have held
              alongside school, and what I am taking forward.
            </p>
            <Link
              href="/north-east#reflection"
              className="mt-4 inline-flex items-center gap-2 text-sm text-brand transition-colors hover:text-foreground"
            >
              Read the North East reflection
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </PortfolioSection>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
          <span>{homeSchool.name} · ECTS Graduation Portfolio</span>
          <span>{site.email}</span>
        </footer>
      </div>
    </div>
  );
}
