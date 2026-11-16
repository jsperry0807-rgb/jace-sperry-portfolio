import type { ContributionWeek } from "@/lib/github-contributions";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function shadeFor(count: number) {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function colorFor(shade: number) {
  if (shade === 0) return "var(--muted)";
  const strength = [0, 24, 44, 68, 100][shade];
  return `color-mix(in oklab, var(--brand) ${strength}%, var(--muted))`;
}

/**
 * GitHub-style contribution heatmap. Cells are decorative for assistive tech —
 * the total and summary stats are rendered as real text next to the grid.
 */
export function ContributionGraph({
  weeks,
  total,
}: {
  weeks: ContributionWeek[];
  total: number;
}) {
  if (weeks.length === 0) return null;

  return (
    <div
      className="overflow-x-auto pb-1"
      role="img"
      aria-label={`GitHub contribution calendar: ${total.toLocaleString()} contributions in the last year`}
    >
      <div className="flex w-max gap-[2px]">
        {weeks.map((week) => (
          <div key={week.firstDay} className="flex flex-col gap-[2px]">
            {week.days.map((day) => (
              <span
                key={day.date}
                aria-hidden
                title={`${monthFormatter.format(new Date(`${day.date}T00:00:00Z`))} — ${
                  day.count === 0
                    ? "no contributions"
                    : `${day.count} ${day.count === 1 ? "contribution" : "contributions"}`
                }`}
                className="size-[8px] rounded-[2px]"
                style={{ backgroundColor: colorFor(shadeFor(day.count)) }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContributionLegend() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60">
        Less
      </span>
      {[0, 1, 2, 3, 4].map((level) => (
        <span
          key={level}
          aria-hidden
          className="size-[8px] rounded-[2px]"
          style={{ backgroundColor: colorFor(level) }}
        />
      ))}
      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60">
        More
      </span>
    </span>
  );
}
