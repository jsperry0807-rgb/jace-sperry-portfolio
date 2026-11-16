# Jace Sperry — Portfolio

A personal portfolio and writing site for Jace Sperry, a student full-stack engineer in North East, Pennsylvania.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui, Motion, GSAP, and MDX.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 with Cache Components |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| Components | shadcn/ui (Radix primitives) |
| Icons | Lucide (plus a local GitHub mark) |
| UI motion | Motion (`motion/react`) |
| Scroll timelines | GSAP + ScrollTrigger |
| Writing | MDX via `next-mdx-remote`, read from `content/writing` |
| Package manager | pnpm |

## Development

```bash
pnpm install
pnpm dev
```

The site runs at <http://localhost:3000>.

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
```

## Editing content

All copy lives in four places so the components stay untouched:

| File | What it controls |
| --- | --- |
| `lib/site.ts` | Name, role, email, location, availability, canonical URL, social links, nav |
| `lib/projects.ts` | Featured project cards and the smaller archive list |
| `lib/content.ts` | About copy, principles, toolkit groups, experience timeline |
| `content/writing/*.mdx` | Blog posts (frontmatter + MDX body) |
| `lib/github.ts` | "Working on" activity, fetched from GitHub and cached for an hour |
| `lib/github-stats.ts` | Repo totals and language mix, fetched from GitHub and cached for a day |
| `lib/github-contributions.ts` | Commit heatmap snapshot, regenerated with `pnpm sync:github` |

### Things to update before deploying

1. **Domain** — `lib/site.ts` uses `https://jacesperry.dev` as the canonical URL placeholder. Change it to the real production domain. The email is already set to `jsperry0807@gmail.com`.
2. **Social links** — the GitHub profile and organization links point at `jsperry0807-rgb` and `JaSperryTech`.
3. **Experience dates** — verify the timeline entries in `lib/content.ts`.
4. **Sample posts** — the three MDX posts are written from real project decisions, but they are samples. Edit or replace them.
5. **Voxel Engine** — the featured card points at `Valescent/engine`; the older `jsperry0807-rgb/voxel-engine` repository is archived. Update the copy if the engine's status changes.
6. **Working on** — `lib/github.ts` picks the most recently pushed public repository across `jsperry0807-rgb` and `Valescent`, cached for an hour. If GitHub is unavailable, the first featured project is used.
7. **Copyright year** — `components/site-footer.tsx` keeps a static year so the page can be prerendered. Bump it when needed.

### Writing a post

Add a `.mdx` file to `content/writing`:

```mdx
---
title: "Your title"
description: "One sentence used for cards, metadata, and RSS."
date: "2026-11-20"
tags: ["rust", "graphics"]
---

Your content here. Standard Markdown and GitHub-flavored Markdown work.
```

The slug comes from the filename. Reading time is estimated from the body. The post is picked up automatically by the home page, `/writing`, `/sitemap.xml`, and `/feed.xml`.

MDX can use the custom `Note` component:

```mdx
<Note title="Reproduce it">
  Anything you want to call out. Markdown works inside.
</Note>
```

## Structure

```
app/
  layout.tsx              fonts, metadata, JSON-LD, chrome
  page.tsx                home composition
  writing/page.tsx         writing index
  writing/[slug]/page.tsx  MDX post
  opengraph-image.tsx      generated social card
  feed.xml/route.ts        RSS
  sitemap.ts, robots.ts
components/
  sections/               hero, work, about, experience, writing, contact
  ui/                     shadcn/ui primitives
  ...                     header, footer, project art, motion helpers
content/writing/          MDX posts
lib/                      site config and content
```

## Motion notes

- **Motion** handles entrance, scroll reveal, nav active state, and copy feedback.
- **GSAP** drives three scroll-linked effects: the reading progress bar, the hero plate parallax, and the experience timeline rail/dots.
- Every animation is skipped when `prefers-reduced-motion` is set.

## GitHub data

The About section includes live repo totals, a language mix, and a contribution heatmap.

- **Repo totals and language bytes** are fetched from the GitHub REST API at build time, cached for a day, and omitted if GitHub is unavailable.
- **Contribution activity** is only available over GraphQL, so it is committed as a snapshot in `lib/github-contributions.ts`.

### Automatic daily sync

`.github/workflows/sync-github.yml` runs every day at **06:17 UTC** and can also be started manually from the **Actions** tab. It regenerates the snapshot and commits it. Because the snapshot records its sync time, this produces one commit per day — that commit is also what triggers a fresh deploy.

- If your host deploys on push (Vercel or GitHub Pages), the daily commit starts a fresh build, so the heatmap updates without any manual work.
- If GitHub is unavailable, the script keeps the committed snapshot and exits successfully, so a scheduled run cannot break the build.
- Run it locally at any time with `pnpm sync:github`. Add `--strict` to fail on errors instead of keeping the old snapshot: `node scripts/sync-github.mjs --strict`.

The workflow uses the repository's own `GITHUB_TOKEN` and sets `contents: write`; no personal access token is needed. If GitHub's GraphQL API rejects that token, add a repository secret named `GH_SYNC_TOKEN` containing a fine-grained PAT with `read:user` access. The workflow starts running once the project is on GitHub with Actions enabled.

If you are not hosting on GitHub, run `pnpm sync:github` from a daily scheduled task and commit the result.

## Deployment

The site is static-first and deploys cleanly to Vercel. Set the canonical URL in `lib/site.ts` first so metadata, the sitemap, RSS, and JSON-LD all point at the production domain. No environment variables are required.
