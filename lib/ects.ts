export type PortfolioStatus = "ready" | "draft" | "file";

export type ChecklistItem = {
  id: string;
  label: string;
  status: PortfolioStatus;
  hint?: string;
};

export const ectsChecklist: ChecklistItem[] = [
  {
    id: "about-me",
    label: "Introduction / About Me",
    status: "ready",
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    status: "draft",
  },
  {
    id: "resume",
    label: "Resume",
    status: "draft",
  },
  {
    id: "work-samples",
    label: "Work samples (6)",
    status: "ready",
  },
  {
    id: "course-sequence",
    label: "Course sequence / task list",
    status: "draft",
  },
  {
    id: "credentials",
    label: "Industry-recognized credentials",
    status: "file",
    hint: "Attach the certificate PDFs.",
  },
  {
    id: "recommendations",
    label: "Recommendations (2)",
    status: "file",
    hint: "Instructor and employer/supervisor.",
  },
  {
    id: "careersafe",
    label: "CareerSafe 1–4",
    status: "file",
    hint: "One certificate per level.",
  },
  {
    id: "awards",
    label: "Awards, activities & service",
    status: "draft",
  },
  {
    id: "post-secondary",
    label: "Post-secondary plan",
    status: "draft",
  },
  {
    id: "reflections",
    label: "ATD / field trip reflections (2)",
    status: "draft",
  },
  {
    id: "growth",
    label: "Growth at ECTS reflection",
    status: "ready",
  },
  {
    id: "application",
    label: "Standard employment application",
    status: "file",
  },
  {
    id: "opportunities",
    label: "Employers & post-secondary opportunities",
    status: "draft",
  },
  {
    id: "home-school",
    label: "Home school reflection",
    status: "ready",
    hint: "Optional, but included.",
  },
];

export const ectsFacts = [
  { label: "Program", value: "Software Development" },
  { label: "School", value: "Erie County Technical School" },
  { label: "Home school", value: "North East High School" },
  { label: "Portfolio", value: "2026" },
] as const;

export const coverLetter = {
  date: "[Date]",
  recipient: ["Hiring Manager", "[Company]", "[City, State]"],
  paragraphs: [
    "I am a software development student at Erie County Technical School, where I spend my mornings at North East High School and my afternoons in the ECTS software development program. I am applying for [role] at [company] because I want to keep building software people rely on, alongside a team that cares about the details.",
    "At ECTS I have shipped full-stack work rather than only classroom exercises. Snack Cart is a school ordering platform with Microsoft Entra ID sign-in, role-based access, timezone-aware ordering windows, inventory tracking, and a delivery queue. Offense Tracker turns a hallway behavior log into a scan, confirm, and save flow that works one-handed on a phone. ECTS Housing gives student design teams a place to submit work for teacher review. I work in TypeScript across the stack, and I have been learning Rust by building a voxel engine.",
    "Outside of school I work as a cashier at Giant Eagle. That job has taught me how to stay calm when a line is long, how to communicate clearly with people in a hurry, and how to be dependable for a team. I bring the same habits to software: show up, pay attention, and finish the unglamorous parts.",
    "I would welcome the chance to talk about how I can contribute at [company]. Thank you for your time and consideration.",
  ],
  closing: "Sincerely,",
  note: "Draft — replace the bracketed fields and tailor the second paragraph to the role.",
} as const;

export const workSamples = [
  {
    name: "Snack Cart",
    tagline: "School ordering platform",
    demonstrates:
      "Authentication, role-based access, timezone-aware rules, inventory, and a delivery workflow.",
    tech: "Next.js 16 · Auth.js · SQLite · shadcn/ui",
    href: "https://github.com/jsperry0807-rgb/snack-cart",
  },
  {
    name: "Offense Tracker",
    tagline: "Mobile-first behavior logging",
    demonstrates:
      "Designing for a real hallway: QR lookup, a three-tap write path, and server actions.",
    tech: "Next.js · MongoDB · Auth.js · Server Actions",
    href: "https://github.com/jsperry0807-rgb/offense-tracker",
  },
  {
    name: "Voxel Engine",
    tagline: "Rust + wgpu engine at Valescent Group",
    demonstrates:
      "Systems programming, rendering architecture, procedural worlds, and measurement gates.",
    tech: "Rust · wgpu · WGSL · winit",
    href: "https://github.com/Valescent/engine",
  },
  {
    name: "ECTS Housing",
    tagline: "School design showcase",
    demonstrates:
      "Team delivery, teacher review, MongoDB GridFS uploads, and a same-origin deployment.",
    tech: "React 19 · Express 5 · MongoDB · Railway",
    href: "https://github.com/jsperry0807-rgb/CMP-Housing",
  },
  {
    name: "Website Upgrader",
    tagline: "Site-to-3D experience generator",
    demonstrates:
      "Crawling, page classification, API design, and turning structured content into an interface.",
    tech: "TypeScript · Express · SQLite",
    href: "https://github.com/jsperry0807-rgb/website-upgrader",
  },
  {
    name: "Dev Journal",
    tagline: "Developer journaling app",
    demonstrates:
      "Service design, background jobs, Prisma data modeling, and a React front end.",
    tech: "TypeScript · React · Express · Prisma",
    href: "https://github.com/jsperry0807-rgb/dev-journal",
  },
] as const;

export const courseSequence = [
  {
    level: "Level 1 Professional Skills",
    focus: "Career readiness, teamwork, interview skills, and time management.",
    evidence: "CareerSafe 1 · cover letter · resume",
  },
  {
    level: "Level 2 Professional Skills",
    focus: "Cybersecurity, communication, critical thinking, and workplace practice.",
    evidence: "CareerSafe 2–4 · CyberPatriot",
  },
  {
    level: "Labs",
    focus: "Web development, databases, networking, and project work.",
    evidence: "Snack Cart · Offense Tracker · ECTS Housing",
  },
  {
    level: "Capstone / independent",
    focus: "Full-stack systems, Rust engine work, and this portfolio.",
    evidence: "Voxel Engine · jacesperry.dev",
  },
] as const;

export const careerSafe = [
  {
    level: "1",
    topic: "Teamwork",
    options: "Teamwork · Interview Skills · Time Management",
  },
  {
    level: "2",
    topic: "Cybersecurity",
    options: "Cybersecurity · Materials Management · Critical Thinking",
  },
  {
    level: "3",
    topic: "Communication Skills",
    options: "HR Management · Communication Skills · Written Communication",
  },
  {
    level: "4",
    topic: "Personal Financial Management",
    options: "Workplace Financial Management · Personal Financial Management",
  },
] as const;

export const recommendations = [
  {
    title: "Instructor recommendation",
    from: "ECTS software development instructor",
    description:
      "A recommendation covering technical growth, classroom work, and readiness for the next step.",
    href: undefined,
  },
  {
    title: "Employer or supervisor recommendation",
    from: "Giant Eagle or a previous supervisor",
    description:
      "A recommendation covering reliability, customer service, and teamwork.",
    href: undefined,
  },
] as const;

export const activities = [
  {
    title: "CyberPatriot",
    kind: "Competition",
    detail:
      "Competed in two seasons, both on the Windows Server image. Hardened services, local policy, users, and share permissions under a time limit.",
  },
  {
    title: "Independent software projects",
    kind: "Projects",
    detail:
      "Designed and shipped Snack Cart, Offense Tracker, ECTS Housing, and a Rust voxel engine at Valescent Group.",
  },
  {
    title: "Giant Eagle",
    kind: "Work",
    detail:
      "Cashier — customer service, cash handling, and keeping a lane moving through busy shifts.",
  },
] as const;

export const postSecondaryPlan = {
  intro:
    "After graduation I plan to study computer science or software engineering at a four-year university, with a focus on full-stack development and systems.",
  paragraphs: [
    "I want a program that combines strong fundamentals — data structures, operating systems, and databases — with room to build real products. The work I have done at ECTS has made it clear that I learn best when I can ship something and then live with the consequences.",
    "I am still narrowing down schools and will update this section with applications, acceptances, and my final choice. I also plan to keep working on the Valescent engine and keep this portfolio current while I study.",
  ],
  nextSteps: [
    "Finalize the school list",
    "Complete applications and FAFSA",
    "Visit campuses",
    "Keep the portfolio current",
  ],
  note: "Draft — replace the school list and final choice when decisions are made.",
} as const;

export const reflections = [
  {
    title: "ATD Reflection",
    status: "draft" as const,
    paragraphs: [
      "The ATD gave me a structured look at the skills I use in the software development program. My strongest areas were [strength] and [strength]; the results confirmed that I am comfortable breaking a problem into parts and working through it until the pieces fit.",
      "The area I want to improve is [area]. One concrete example is [example]. My plan is to [action].",
    ],
    note: "Replace the brackets with your actual ATD results and one specific example.",
  },
  {
    title: "Field Trip Reflection",
    status: "draft" as const,
    paragraphs: [
      "On the [site] visit, I expected [expectation]. What stood out was [observation].",
      "The visit connected the work we do in labs to a real workplace: [connection]. It made me think differently about [change].",
    ],
    note: "Replace the brackets with the site you visited and what you actually saw.",
  },
] as const;

export const growthReflection = {
  paragraphs: [
    "When I started at ECTS, I could write small scripts and follow tutorials. I did not know how much work lived between a working demo and a program someone else could use.",
    "The first big shift was learning to finish. Snack Cart and Offense Tracker forced me to deal with authentication, role checks, timezones, empty states, and deployment — the parts that are easy to skip when you are only showing a project to a teacher. Building ECTS Housing with a team added review workflows, file storage, and the reality of other people using what I made.",
    "The second shift was learning to measure. The voxel engine work at Valescent Group is the clearest example: a milestone does not start until the previous one has a number attached to it. That habit has changed how I approach web performance and how I decide when a feature is actually done.",
    "I still have a lot to learn. But I am leaving ECTS with a process I trust: scope the smallest real version, build it end to end, measure it, and write down what I would do differently.",
  ],
} as const;

export const opportunities = {
  roles: [
    "Full-stack developer",
    "Front-end engineer",
    "Software engineering intern",
    "IT / systems support",
  ],
  education: [
    "Computer science",
    "Software engineering",
    "Information systems",
  ],
  note: "Add the specific openings, companies, and schools you are targeting.",
} as const;

export const homeSchool = {
  name: "North East High School",
  location: "North East, PA",
  facts: [
    { label: "School", value: "North East High School" },
    { label: "Location", value: "North East, PA" },
    { label: "Afternoons", value: "Erie County Technical School" },
    { label: "Focus", value: "Software development" },
  ],
  activities: [
    "CyberPatriot — two seasons on Windows Server",
    "Giant Eagle — cashier",
    "Independent software projects",
  ],
  reflection: [
    "North East High School has been the steady half of a split schedule. I spend my mornings at North East and my afternoons in the software development program at Erie County Technical School, and I have worked a job through most of that time. Learning to move between those three worlds — school, technical program, and work — has been its own education in planning and follow-through.",
    "North East gave me the fundamentals I use every day in software: clear writing, careful reading, and the habit of asking a question when something does not make sense. The classroom expectation was not just to get the answer but to explain it, which is the same skill I use when I write a design note or walk someone through a bug.",
    "The community side matters too. Teachers and classmates knew when I was balancing a heavy week, and the school gave me room to take the ECTS program seriously. That support is part of why I have been able to keep shipping projects instead of treating them as a side hobby.",
    "I am grateful for the time I have had at North East. It gave me a base, and ECTS gave me a direction. I plan to carry both into a computer science or software engineering program after graduation.",
  ],
} as const;

export const documentSlots = {
  transcript: {
    title: "North East High School transcript",
    description:
      "Add the official transcript or a school-issued summary of coursework and grades.",
    href: undefined,
  },
  application: {
    title: "Standard employment application",
    description:
      "Attach the completed standard application used for the ECTS portfolio requirement.",
    href: undefined,
  },
  credentials: {
    title: "Industry-recognized credentials",
    description:
      "Attach the certificate PDFs for CareerSafe and any other industry credentials.",
    href: undefined,
  },
} as const;
