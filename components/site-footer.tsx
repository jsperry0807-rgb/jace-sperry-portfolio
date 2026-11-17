import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";

import { LiveClock } from "@/components/live-clock";
import { nav, portfolios, site, socials } from "@/lib/site";

const colophon = [
  { label: "Framework", value: "Next.js 16" },
  { label: "Styling", value: "Tailwind CSS v4" },
  { label: "Components", value: "shadcn/ui" },
  { label: "Type", value: "Geist + Instrument Serif" },
];

export function SiteFooter() {
  // Bump when the site is updated; kept static so the page can be prerendered.
  const year = 2026;

  return (
    <footer className="border-t border-border/70 bg-background/40 print:hidden">
      <div className="page-shell py-14 sm:py-18">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.9fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg border border-border bg-card/60 font-mono text-[11px] font-medium">
                JS
              </span>
              <span className="text-sm font-medium tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Student full-stack engineer in {site.location}. Building web applications,
              game systems, and tools that survive contact with real users.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              {site.availability}
            </span>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/90">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {portfolios
                .filter((portfolio) => portfolio.href !== "/")
                .map((portfolio) => (
                  <li key={portfolio.href}>
                    <Link
                      href={portfolio.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {portfolio.label} portfolio
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/90">
              Elsewhere
            </h2>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  All writing
                </Link>
              </li>
              <li>
                <a
                  href="/feed.xml"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Rss className="size-3.5" />
                  RSS feed
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/90">
              Colophon
            </h2>
            <dl className="mt-4 space-y-2.5">
              {colophon.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 text-sm">
                  <dt className="text-muted-foreground/90">{item.label}</dt>
                  <dd className="text-right text-muted-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-muted-foreground/90">
            © {year} {site.name}. Built and maintained in {site.locationShort}.
          </p>
          <div className="flex items-center gap-5">
            <LiveClock timeZone={site.timeZone} label={`${site.locationShort}`} />
            <a
              href="#top"
              className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
