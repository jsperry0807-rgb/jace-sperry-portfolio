import { ArrowUpRight } from "lucide-react";

import { ContributionGraph, ContributionLegend } from "@/components/contribution-graph";
import { LanguageBar } from "@/components/language-bar";
import { contributionSnapshot } from "@/lib/github-contributions";
import type { GithubStats } from "@/lib/github-stats";
import { site } from "@/lib/site";

const numberFormatter = new Intl.NumberFormat("en-US");

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function dayLabel(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

function Stat({
  label,
  value,
  small = false,
}: {
  label: string;
  value: string | number;
  small?: boolean;
}) {
  return (
    <div>
      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85">
        {label}
      </dt>
      <dd
        className={
          small
            ? "mt-1 text-lg font-medium tracking-tight text-foreground/90"
            : "mt-1 text-2xl font-medium tracking-tight"
        }
      >
        {value}
      </dd>
    </div>
  );
}

export function GithubActivity({ stats }: { stats: GithubStats }) {
  return (
    <div className="mt-16 border-t border-border/70 pt-8">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
            GitHub / by the numbers
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight sm:text-[1.75rem]">
            What the repos say
          </h3>
          <p className="mt-2 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            Repo totals and language bytes are measured from the GitHub API, not
            typed in by hand.
          </p>
        </div>

        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          GitHub profile
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="mt-8 grid min-w-0 gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex min-w-0 flex-col rounded-xl border border-border/80 bg-card/25 p-5 sm:p-6">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
            <Stat label="Public repos" value={stats.repos} />
            <Stat label="Languages" value={stats.languageCount} />
            <Stat label="On GitHub since" value={stats.since} />
            <Stat label="Last push" value={stats.lastPushShort} />
          </dl>

          <div className="mt-auto pt-7">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/85">
              Language mix
            </p>
            <div className="mt-3">
              <LanguageBar slices={stats.languageMix} />
            </div>
          </div>

          <p className="mt-5 border-t border-border/70 pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
            {stats.repos} repos · last push {stats.lastPushLabel}
          </p>
        </div>

        <div className="min-w-0 rounded-xl border border-border/80 bg-card/25 p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/85">
              Contributions / last 12 months
            </p>
            <span className="font-mono text-xs text-foreground/90">
              {numberFormatter.format(contributionSnapshot.contributions)}
            </span>
          </div>

          <div className="mt-5 min-w-0">
            <ContributionGraph
              weeks={contributionSnapshot.weeks}
              total={contributionSnapshot.contributions}
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
              {monthFormatter.format(
                new Date(`${contributionSnapshot.windowStart}T00:00:00Z`),
              )}{" "}
              —{" "}
              {monthFormatter.format(
                new Date(`${contributionSnapshot.windowEnd}T00:00:00Z`),
              )}
            </span>
            <ContributionLegend />
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border/70 pt-5">
            <Stat
              label="Commits"
              value={numberFormatter.format(contributionSnapshot.commits)}
              small
            />
            <Stat label="Active days" value={contributionSnapshot.activeDays} small />
            <Stat
              label="Longest streak"
              value={`${contributionSnapshot.longestStreak}d`}
              small
            />
          </dl>

          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/85">
            Synced {dayLabel(contributionSnapshot.fetchedAt.slice(0, 10))}
          </p>
        </div>
      </div>
    </div>
  );
}
