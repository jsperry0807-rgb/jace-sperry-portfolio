import { cacheLife, cacheTag } from "next/cache";

import { site } from "@/lib/site";

export type LanguageSlice = {
  name: string;
  bytes: number;
  percent: number;
  color: string;
};

export type GithubStats = {
  repos: number;
  stars: number;
  languageCount: number;
  since: string;
  lastPushLabel: string;
  lastPushShort: string;
  languageMix: LanguageSlice[];
  totalBytes: number;
};

/** GitHub linguist colors, with a neutral fallback for anything missing. */
const languageColors: Record<string, string> = {
  "C#": "#178600",
  "C++": "#f34b7d",
  Astro: "#ff5a03",
  Batchfile: "#C1F12E",
  CSS: "#563d7c",
  Dart: "#00B4AB",
  Dockerfile: "#384d54",
  GLSL: "#5686a5",
  HTML: "#e34c26",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Lua: "#000080",
  PHP: "#4F5D95",
  PowerShell: "#012456",
  Python: "#3572A5",
  Ruby: "#701516",
  Rust: "#dea584",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Svelte: "#ff3e00",
  Swift: "#F05138",
  TypeScript: "#3178c6",
  Vue: "#41b883",
  Zig: "#ec915c",
};

const fallbackColor = "oklch(0.6 0.01 285)";

/** Formats GitHub reports as languages that are really configuration. */
const configFormats = new Set(["dockerfile", "batchfile", "makefile", "procfile"]);

const languageFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

type GithubRepo = {
  name: string;
  fork: boolean;
  archived: boolean;
  size: number;
  stargazers_count: number;
  pushed_at: string | null;
  languages_url: string;
};

/**
 * Live repository totals and language mix, measured from GitHub at build time.
 * Cached for a day; if GitHub is unavailable the section is simply omitted.
 */
export async function getGithubStats(): Promise<GithubStats | null> {
  "use cache";
  cacheLife("days");
  cacheTag("github-stats");

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${site.name} portfolio`,
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${site.githubUser}`, { headers }),
      fetch(
        `https://api.github.com/users/${site.githubUser}/repos?per_page=100&sort=pushed`,
        { headers },
      ),
    ]);

    if (!profileResponse.ok || !reposResponse.ok) return null;

    const profile = (await profileResponse.json()) as {
      public_repos: number;
      created_at: string;
    };
    const repos = (await reposResponse.json()) as GithubRepo[];

    if (!Array.isArray(repos)) return null;

    const ownRepos = repos
      .filter((repo) => !repo.fork && !repo.archived && repo.size > 0)
      .sort((a, b) => (b.pushed_at ?? "").localeCompare(a.pushed_at ?? ""));

    const topRepos = ownRepos.slice(0, 12);

    const languageResults = await Promise.all(
      topRepos.map(async (repo) => {
        try {
          const response = await fetch(repo.languages_url, { headers });
          if (!response.ok) return {};
          return (await response.json()) as Record<string, number>;
        } catch {
          return {};
        }
      }),
    );

    const totals = new Map<string, number>();

    for (const languages of languageResults) {
      for (const [name, bytes] of Object.entries(languages)) {
        if (configFormats.has(name.toLowerCase())) continue;
        totals.set(name, (totals.get(name) ?? 0) + bytes);
      }
    }

    const ranked = [...totals.entries()].sort((a, b) => b[1] - a[1]);
    const totalBytes = ranked.reduce((sum, [, bytes]) => sum + bytes, 0) || 1;

    const top = ranked.slice(0, 6).map(([name, bytes]) => ({
      name,
      bytes,
      percent: (bytes / totalBytes) * 100,
      color: languageColors[name] ?? fallbackColor,
    }));

    const rest = ranked.slice(6);
    const restBytes = rest.reduce((sum, [, bytes]) => sum + bytes, 0);

    if (restBytes > 0) {
      top.push({
        name: "Other",
        bytes: restBytes,
        percent: (restBytes / totalBytes) * 100,
        color: fallbackColor,
      });
    }

    const stars = repos
      .filter((repo) => !repo.fork)
      .reduce((sum, repo) => sum + repo.stargazers_count, 0);

    const lastPush = ownRepos[0]?.pushed_at ?? null;

    return {
      repos: profile.public_repos,
      stars,
      languageCount: ranked.length,
      since: profile.created_at.slice(0, 4),
      lastPushLabel: lastPush ? languageFormatter.format(new Date(lastPush)) : "—",
      lastPushShort: lastPush ? shortDateFormatter.format(new Date(lastPush)) : "—",
      languageMix: top,
      totalBytes,
    };
  } catch {
    return null;
  }
}
