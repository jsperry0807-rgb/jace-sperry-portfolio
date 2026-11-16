import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { WritingPreview } from "@/components/sections/writing-preview";
import { getWorkingOn } from "@/lib/github";
import { getGithubStats } from "@/lib/github-stats";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.role}` },
  description: site.description,
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [workingOn, stats] = await Promise.all([getWorkingOn(), getGithubStats()]);

  return (
    <>
      <Hero workingOn={workingOn} />
      <Work />
      <About stats={stats} />
      <Experience />
      <WritingPreview />
      <Contact />
    </>
  );
}
