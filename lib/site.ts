export const site = {
  name: "Jace Sperry",
  firstName: "Jace",
  role: "Student Full-Stack Engineer",
  tagline: "I build software that holds up.",
  description:
    "Jace Sperry is a student full-stack engineer in North East, Pennsylvania, building production web applications, game systems, and developer tools with TypeScript, React, and Rust.",
  email: "jsperry0807@gmail.com",
  location: "North East, Pennsylvania",
  locationShort: "North East, PA",
  timeZone: "America/New_York",
  availability: "Open to internships & freelance",
  url: "https://jacesperry.dev",
  github: "https://github.com/jsperry0807-rgb",
  githubOrg: "https://github.com/JaSperryTech",
  githubUser: "jsperry0807-rgb",
  githubHandle: "@jsperry0807-rgb",
  valescent: "https://github.com/Valescent",
  valescentEngine: "https://github.com/Valescent/engine",
  valescentUser: "Valescent",
  orgHandle: "JaSperryTech",
} as const;

export const nav = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#writing", label: "Writing", id: "writing" },
  { href: "/#contact", label: "Contact", id: "contact" },
] as const;

export const socials = [
  {
    label: "GitHub",
    handle: site.githubHandle,
    href: site.github,
  },
  {
    label: "JaSperryTech",
    handle: "Open-source org",
    href: site.githubOrg,
  },
  {
    label: "Valescent",
    handle: "Engine & game",
    href: site.valescent,
  },
  {
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
  },
] as const;
