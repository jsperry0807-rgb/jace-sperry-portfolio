"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Menu } from "lucide-react";

import { GithubMark } from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";

const sectionIds = nav.map((item) => item.id);

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const isHome = pathname === "/";
  const active = isHome ? activeId : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border/80 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="page-shell flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border bg-card/60 font-mono text-[11px] font-medium tracking-tight transition-colors duration-300 group-hover:border-brand/50 group-hover:text-brand">
            JS
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="text-[13px] font-medium tracking-tight">{site.name}</span>
            <span className="mt-1 hidden font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Student full-stack engineer
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
          {nav.slice(0, 4).map((item) => {
            const isActive = isHome && active === item.id;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative isolate rounded-full px-3 py-2 text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground",
                  isActive && "text-foreground",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full border border-border/60 bg-white/[0.045]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hidden rounded-full text-muted-foreground hover:text-foreground sm:inline-flex"
              >
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                >
                  <GithubMark />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">GitHub</TooltipContent>
          </Tooltip>

          <Button
            asChild
            size="sm"
            className="hidden h-9 rounded-full px-4 text-[13px] sm:inline-flex"
          >
            <Link href="/#contact">
              Get in touch
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm border-border bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="border-b border-border/70 p-5">
                <SheetTitle className="font-sans text-sm font-medium">
                  {site.name}
                </SheetTitle>
                <SheetDescription className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  {site.role}
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-1 flex-col px-3 py-4">
                {nav.map((item, index) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between rounded-lg px-3 py-3.5 text-xl font-medium tracking-tight text-foreground/90 transition-colors hover:bg-white/[0.04] hover:text-foreground"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground/80">
                          0{index + 1}
                        </span>
                        {item.label}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="space-y-2 border-t border-border/70 p-5">
                <Button asChild className="h-11 w-full rounded-full">
                  <a href={`mailto:${site.email}`}>
                    <Mail data-icon="inline-start" />
                    {site.email}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 w-full rounded-full"
                >
                  <a href={site.github} target="_blank" rel="noreferrer">
                    <GithubMark data-icon="inline-start" />
                    GitHub
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
