export type ProjectLink = {
  label: "Code" | "Live" | "Docs" | "Demo";
  href: string;
};

export type ProjectMotif = "rings" | "qr" | "cube" | "pulse" | "plan";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  accent: string;
  motif: ProjectMotif;
  coverCaption: string;
  /** Team, company, or group the project belongs to. */
  org?: string;
  /** Defaults to "Open source" when omitted. */
  availability?: "Open source" | "Source-available";
};

/** Projects shown as full feature cards on the home page. */
export const featuredProjects: Project[] = [
  {
    slug: "snack-cart",
    name: "Snack Cart",
    tagline: "School ordering platform",
    year: "2026",
    summary:
      "Students order snacks to their classroom, staff keep inventory and deliveries moving, and admins control classes, roles, and ordering windows. The rules are enforced on the server, not hidden in the UI.",
    highlights: [
      "Three-tier roles with Microsoft Entra ID group sync and manual grants",
      "Timezone-aware weekly ordering windows evaluated at checkout",
      "Inventory audit trail, delivery queue grouped by room, database-backed cart",
    ],
    tech: ["Next.js 16", "Auth.js", "SQLite", "Tailwind CSS", "shadcn/ui"],
    links: [{ label: "Code", href: "https://github.com/jsperry0807-rgb/snack-cart" }],
    accent: "#34d399",
    motif: "rings",
    coverCaption: "order / stock / deliver",
  },
  {
    slug: "offense-tracker",
    name: "Offense Tracker",
    tagline: "Mobile-first behavior logging",
    year: "2026",
    summary:
      "A behavior logging tool designed for a hallway, not a desk. Scan a student ID, confirm the class, and file a record in a few taps — with the reporting staff need afterward.",
    highlights: [
      "Scan → confirm → save loop built around one-handed phone use",
      "QR student lookup with search fallback for damaged IDs",
      "Server-rendered dashboards, bulk roster import, Auth.js sessions",
    ],
    tech: ["Next.js", "MongoDB", "Auth.js", "Server Actions", "Tailwind CSS"],
    links: [{ label: "Code", href: "https://github.com/jsperry0807-rgb/offense-tracker" }],
    accent: "#60a5fa",
    motif: "qr",
    coverCaption: "scan / confirm / log",
  },
  {
    slug: "voxel-engine",
    name: "Voxel Engine",
    tagline: "Voxel engine & game",
    year: "2026",
    org: "Valescent Group",
    availability: "Source-available",
    summary:
      "A Rust voxel engine and the foundation for a game at Valescent Group. Currently pre-alpha — a renderer, a voxel scene, and a fly camera — with the roadmap and architecture decisions documented in public.",
    highlights: [
      "Rust + wgpu, with winit, glam, bytemuck, and Tracy in the stack",
      "Pre-alpha 0.0.2: a voxel scene and fly camera on a measured roadmap",
      "Docs site, ADRs, and release tooling built alongside the engine",
    ],
    tech: ["Rust", "wgpu", "WGSL", "winit", "glam", "Tracy"],
    links: [
      { label: "Code", href: "https://github.com/Valescent/engine" },
      { label: "Docs", href: "https://valescent.github.io/engine/" },
    ],
    accent: "#a78bfa",
    motif: "cube",
    coverCaption: "render / test / roadmap",
  },
  {
    slug: "ects-housing",
    name: "ECTS Housing",
    tagline: "School design showcase",
    year: "2026",
    summary:
      "A house-design showcase for Erie County Technical School. Student teams submit designs with photos, costs, and specs; teachers review them before they go live to the school.",
    highlights: [
      "React 19 + Vite client with Tailwind CSS v4 and shadcn/ui",
      "Express 5 API with JWT cookies and MongoDB GridFS image storage",
      "Turborepo with a same-origin Railway deployment",
    ],
    tech: ["React 19", "Vite", "Express 5", "MongoDB", "Tailwind CSS", "Railway"],
    links: [{ label: "Code", href: "https://github.com/jsperry0807-rgb/CMP-Housing" }],
    accent: "#f0b45e",
    motif: "plan",
    coverCaption: "design / review / publish",
  },
];

export type MoreProject = {
  name: string;
  description: string;
  tech: string;
  href: string;
  live?: string;
};

/** Smaller projects shown as a compact list below the feature cards. */
export const moreProjects: MoreProject[] = [
  {
    name: "Website Upgrader",
    description:
      "Crawls a site, classifies its pages, and rebuilds them as an immersive 3D experience. Express API backed by SQLite.",
    tech: "TypeScript · Express · SQLite",
    href: "https://github.com/jsperry0807-rgb/website-upgrader",
  },
  {
    name: "Dev Journal",
    description:
      "A developer journal with an Express and Prisma API, background jobs, and a React front end.",
    tech: "TypeScript · React · Prisma",
    href: "https://github.com/jsperry0807-rgb/dev-journal",
    live: "https://jsperry0807-rgb.github.io/dev-journal/",
  },
  {
    name: "ShadowMesh",
    description:
      "An Electron desktop app built with React, TypeScript, and Vite.",
    tech: "TypeScript · React · Electron",
    href: "https://github.com/jsperry0807-rgb/ShadowMesh",
  },
  {
    name: "Slot Game",
    description:
      "A browser slot machine built with plain HTML, CSS, and JavaScript.",
    tech: "HTML · CSS · JavaScript",
    href: "https://github.com/jsperry0807-rgb/slot-game",
  },
  {
    name: "Idea Incubator",
    description:
      "An idea tracker with a drag-and-drop Kanban roadmap, markdown planning docs, milestones, and sharing with comments and notifications.",
    tech: "React · Express · MongoDB",
    href: "https://github.com/jsperry0807-rgb/idea-incubator",
  },
  {
    name: "BusRoute",
    description:
      "A transit route explorer for comparing stops and schedules. Deployed live on Vercel as a fast, map-first interface.",
    tech: "TypeScript · Vite · Vercel",
    href: "https://github.com/JaSperryTech/BusRoute",
    live: "https://busroute-eosin.vercel.app",
  },
  {
    name: "ALife Ecosystem",
    description:
      "An agent-based ecosystem simulator in Python exploring emergent behavior, resource pressure, and population dynamics.",
    tech: "Python · Simulation",
    href: "https://github.com/jsperry0807-rgb/Agent-Based-Artificial-Life-Ecosystem-Simulator",
    live: "https://jsperry0807-rgb.github.io/Agent-Based-Artificial-Life-Ecosystem-Simulator/",
  },
];
