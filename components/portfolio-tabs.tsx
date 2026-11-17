"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { portfolios } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/writing");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PortfolioTabs() {
  const pathname = usePathname();

  return (
    <div className="border-b border-border/70 bg-background/30 print:hidden">
      <div className="page-shell flex h-11 items-center gap-4">
        <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/80 sm:block">
          Portfolios
        </span>

        <nav aria-label="Portfolios" className="flex items-center gap-1">
          {portfolios.map((portfolio) => {
            const active = isActive(pathname, portfolio.href);

            return (
              <Link
                key={portfolio.href}
                href={portfolio.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors",
                  active
                    ? "border border-border/80 bg-white/[0.06] text-foreground"
                    : "border border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {portfolio.label}
              </Link>
            );
          })}
        </nav>

        <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/85 md:block">
          Jace Sperry
        </span>
      </div>
    </div>
  );
}
