import { profile } from "./profile";

export type DemoIdentity = {
  name: string;
  initials: string;
  role: string;
  location: string;
  bio: string;
  availability: string;
  email: string;
};

export const student = {
  name: "Alex Morgan",
  initials: "AM",
  role: "Computer science student",
  location: "Seattle, Washington",
  bio: "Curious about people, thoughtful code, and making everyday things a little easier. Currently learning by building.",
  availability: "Looking for a summer internship",
  email: "alex@alexmorgan.example",
  university: "Cascadia University",
  degree: "B.S. Computer Science",
  years: "2024 – 2028",
  courses: "Human-computer interaction, data structures, and software engineering.",
  skills: ["React", "TypeScript", "Python", "Figma", "Teamwork"],
  projects: [
    { name: "Campus Loop", category: "Student community app", description: "A friendly place to discover campus events and find your people.", icon: "community" },
    { name: "Study Space", category: "Personal side project", description: "A simple study planner that makes room for focus and a little balance.", icon: "study" },
  ],
  activities: [
    { title: "Design & Code Club", detail: "Workshop lead · Building things together since 2025" },
    { title: "Community tech mentor", detail: "Helping local students take their first steps in coding" },
  ],
} satisfies DemoIdentity & Record<string, unknown>;

export const business = {
  name: "Goodkind Studio",
  initials: "gk",
  role: "Small studio. Thoughtful design.",
  location: "Austin, Texas",
  bio: "We help independent businesses find their voice and bring it to life. Good people, clear ideas, and design with a little heart.",
  availability: "Welcoming new projects",
  email: "hello@goodkind.example",
  address: "128 Willow Lane, Suite 4",
  postcode: "Austin, TX 78701",
  phone: "+1 (512) 555-0142",
  website: "goodkind.example",
  hours: [{ day: "Monday – Friday", time: "9:00 AM – 5:00 PM" }, { day: "Saturday – Sunday", time: "Closed" }],
  services: [
    { title: "Brand strategy & identity", description: "Find your story. Make your mark.", icon: "brand" },
    { title: "Websites & digital experiences", description: "A welcoming home for your business online.", icon: "web" },
    { title: "Ongoing creative support", description: "A design partner for whatever comes next.", icon: "partner" },
  ],
} satisfies DemoIdentity & Record<string, unknown>;

export const templates = [
  { slug: "portfolio", title: "Portfolio", description: "Let your work do the talking. A home for your projects, skills, and next collaboration.", audience: "For creatives & independent makers", identity: profile },
  { slug: "student", title: "Student", description: "More than a résumé. Share what you’re learning, building, and looking forward to.", audience: "For students & fresh perspectives", identity: student },
  { slug: "business", title: "Business", description: "A warm introduction to your business. Your story, services, and details in one place.", audience: "For small businesses & big ideas", identity: business },
] as const;
