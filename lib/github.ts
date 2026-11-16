import { cacheLife, cacheTag } from "next/cache";

import { featuredProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export type WorkingOn = {
  label: string;
  repo: string;
  url: string;
  language: string | null;
  pushedAt: string | null;
  live: boolean;
};

/** Repos that should never be surfaced as "currently working on". */
const skippedRepos = new Set([
  "portfolio",
  "my-opencode",
  "duckland",
  "lead-hound",
  "Vite_Template",
  "JaSperryTech",
  "voxel-engine",
  "cinderfall",
]);

const knownLabels: Record<string, string> = {
  "snack-cart": "Snack Cart",
  "offense-tracker": "Offense Tracker",
  engine: "Voxel Engine",
  "voxel-engine": "Voxel Engine",
  "CMP-Housing": "ECTS Housing",
  "idea-incubator": "Idea Incubator",
  BusRoute: "BusRoute",
  banksys: "Banksys",
  GistBox: "GistBox",
  SchoolCMS: "School CMS",
};

function labelForRepo(repo: string) {
  if (knownLabels[repo]) return knownLabels[repo];

  return repo
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function fallback(): WorkingOn {
  const project = featuredProjects[0];

  return {
    label: project.name,
    repo: project.slug,
    url: project.links[0]?.href ?? site.github,
    language: project.tech[0] ?? null,
    pushedAt: null,
    live: false,
  };
}

/**
 * Latest public repository activity from GitHub, used for the "Working on"
 * field in the hero and profile plate.
 *
 * The value is fetched at build time, cached for an hour, and tagged so it can
 * be revalidated later. If GitHub is unavailable or rate-limited, the first
 * featured project is used instead so the page always renders.
 */
export async function getWorkingOn(): Promise<WorkingOn> {
  "use cache";
  cacheLife("hours");
  cacheTag("github-activity");

  try {
    const owners = [site.githubUser, site.valescentUser];

    const groups = await Promise.all(
      owners.map(async (owner) => {
        const response = await fetch(
          `https://api.github.com/users/${owner}/repos?sort=pushed&direction=desc&per_page=30`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              "User-Agent": `${site.name} portfolio`,
            },
          },
        );

        if (!response.ok) return [];

        const repos = (await response.json()) as Array<{
          name: string;
          html_url: string;
          description: string | null;
          language: string | null;
          pushed_at: string | null;
          fork: boolean;
          archived: boolean;
          size: number;
        }>;

        return Array.isArray(repos) ? repos : [];
      }),
    );

    const repo = groups
      .flat()
      .sort((a, b) => (b.pushed_at ?? "").localeCompare(a.pushed_at ?? ""))
      .find(
        (entry) =>
          !entry.fork &&
          !entry.archived &&
          entry.size > 0 &&
          !skippedRepos.has(entry.name),
      );

    if (!repo) return fallback();

    return {
      label: labelForRepo(repo.name),
      repo: repo.name,
      url: repo.html_url,
      language: repo.language,
      pushedAt: repo.pushed_at,
      live: true,
    };
  } catch {
    return fallback();
  }
}
