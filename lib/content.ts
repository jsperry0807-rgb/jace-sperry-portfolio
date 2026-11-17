export const aboutParagraphs = [
  "I'm a student at North East High School, and I spend my afternoons in the software development program at Erie County Technical School. Most of what I know comes from building software for real classrooms and school workflows. That started with small scripts and turned into full applications with authentication, databases, audit trails, and deployments.",
  "Most of my work is TypeScript across the stack: Next.js and React on the front, Node or Fastify behind it, and a database that has to survive real users. When a problem is performance-bound or needs a lower-level model, I reach for Rust — the engine work is where I learn rendering, memory layout, and measurement the hard way.",
  "I care about the parts that are easy to skip: role checks enforced on the server, timezones, migrations, error states, and whether the thing still works on a phone in a hallway. I would rather ship a smaller system that holds up than a demo that does not.",
] as const;

export const principles = [
  {
    title: "Ship the whole thing",
    body: "Auth, data, deployment, empty states. A feature is not finished because the happy path works on my machine.",
  },
  {
    title: "Measure, then optimize",
    body: "Benchmarks gate milestones. Guessing at performance is how projects get slower while everyone feels productive.",
  },
  {
    title: "Design for the worst input",
    body: "Slow phones, bad Wi-Fi, one free hand. Constraints are part of the interface, not an edge case to handle later.",
  },
] as const;

export const stack = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Rust", "Python", "SQL", "PowerShell"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Vite", "Zustand"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Fastify", "Express", "Auth.js", "Zod", "REST"],
  },
  {
    label: "Data & ops",
    items: ["MongoDB", "SQLite", "Docker", "Railway", "Vercel", "Caddy"],
  },
] as const;

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location?: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "Full-Stack Developer",
    org: "Independent",
    location: "North East, PA",
    summary:
      "Designing and shipping complete web applications for school and personal projects, from schema to deployment.",
    bullets: [
      "Shipped Snack Cart and Offense Tracker, two Next.js apps with Auth.js, role-based access, and server-enforced business rules.",
      "Own the lifecycle — data modeling, authentication, interface, tests, and the production deploy.",
    ],
    tech: ["TypeScript", "Next.js", "Fastify", "MongoDB"],
  },
  {
    period: "Present",
    role: "Cashier",
    org: "Giant Eagle",
    location: "North East, PA",
    summary:
      "Customer service, cash handling, and keeping a lane moving through busy shifts.",
    bullets: [],
    tech: [],
  },
  {
    period: "Present",
    role: "Software Development Student",
    org: "Erie County Technical School",
    location: "Erie, PA",
    summary:
      "The afternoon half of my school day: applied coursework in web development, databases, and cybersecurity, with projects that ship to real users.",
    bullets: [
      "Study web development, data modeling, authentication, and deployment alongside the curriculum.",
      "Build software for actual school workflows, including ECTS Housing.",
    ],
    tech: ["JavaScript", "SQL", "Networking"],
  },
  {
    period: "Present",
    role: "Student",
    org: "North East High School",
    location: "North East, PA",
    summary:
      "High school coursework at North East, with the afternoons spent in the software development program at Erie County Technical School.",
    bullets: [
      "Balance a full high school schedule with the afternoon ECTS program.",
    ],
    tech: [],
  },
  {
    period: "Two seasons",
    role: "CyberPatriot Competitor",
    org: "CyberPatriot",
    summary:
      "Competed in two CyberPatriot seasons, both times on the Windows Server image.",
    bullets: [
      "Hardened Windows Server images against scored vulnerabilities under a hard time limit.",
      "Worked through services, local policy, users, and share permissions methodically while the clock ran.",
      "Automated repeatable checks with PowerShell so the team could spend time on real findings.",
    ],
    tech: ["Windows Server", "PowerShell", "Group Policy"],
  },
  {
    period: "Previous",
    role: "Crew Member — Grills",
    org: "McDonald's",
    summary:
      "Worked the grill station during high-volume shifts — food assembly, prep, cleaning, and the closing work that keeps a kitchen running.",
    bullets: [
      "Assembled food and prepped ingredients to order during peak rushes.",
      "Cleaned grills, emptied grease traps, and took out trash through the shift.",
      "Kept the station moving when the floor was understaffed.",
    ],
    tech: [],
  },
  {
    period: "One season",
    role: "Farm Hand",
    org: "Ortan's Fruit Farm",
    location: "North East, PA",
    summary: "Seasonal harvest and packing work.",
    bullets: [
      "Folded boxes and kept the packing area supplied through the season.",
      "Collected the boxes pickers filled and logged them in the tracker.",
      "Swept the packing area and kept it clear through the day.",
    ],
    tech: [],
  },
];
