import { profile } from "./profile";
import { campus, developer, photographer, cafe, coach, musician, type SignatureDesign } from "./designs";

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

export const templateCategories = ["Student", "Portfolio", "Business", "Creator"] as const;
export type TemplateCategory = typeof templateCategories[number];
export type TemplateRenderer = SignatureDesign | "portfolio" | "student" | "business";
export type TemplateDefinition = {
  slug: string;
  title: string;
  description: string;
  category: TemplateCategory;
  audienceTags: readonly string[];
  styleLabel: string;
  renderer: TemplateRenderer;
  identity: DemoIdentity;
};

export const templates: readonly TemplateDefinition[] = [
  { slug: "campus-notes", renderer: "campus-notes", title: "Campus Notes", category: "Student", audienceTags: ["Student", "University"], styleLabel: "Notebook · Cream & cobalt", description: "A bright little notebook for your studies, projects, and whatever comes next.", identity: campus },
  { slug: "stack", renderer: "stack", title: "Stack", category: "Portfolio", audienceTags: ["Portfolio", "Developer"], styleLabel: "Technical · Graphite & mint", description: "Good code deserves a good introduction. A focused home for the things you build.", identity: developer },
  { slug: "aperture", renderer: "aperture", title: "Aperture", category: "Portfolio", audienceTags: ["Portfolio", "Photographer"], styleLabel: "Editorial · Ivory & charcoal", description: "Let the pictures lead. An editorial canvas for your eye and your point of view.", identity: photographer },
  { slug: "sunday-cafe", renderer: "sunday-cafe", title: "Sunday Café", category: "Business", audienceTags: ["Business", "Café"], styleLabel: "Neighborhood · Cream & terracotta", description: "A warm welcome before the first visit. Your menu, your story, your corner of the world.", identity: cafe },
  { slug: "momentum", renderer: "momentum", title: "Momentum", category: "Business", audienceTags: ["Business", "Fitness Coach"], styleLabel: "Bold · Off-white & orange", description: "Bring your coaching philosophy to life with a confident, energetic first impression.", identity: coach },
  { slug: "after-hours", renderer: "after-hours", title: "After Hours", category: "Creator", audienceTags: ["Creator", "Musician"], styleLabel: "Expressive · Midnight & pink", description: "Your sound, your world. A compact press kit for releases, live dates, and new listeners.", identity: musician },
  { slug: "portfolio", renderer: "portfolio", title: "Portfolio", category: "Portfolio", audienceTags: ["Portfolio", "Designer"], styleLabel: "Original · Linktag green", description: "Let your work do the talking. A home for your projects, skills, and next collaboration.", identity: profile },
  { slug: "student", renderer: "student", title: "Student", category: "Student", audienceTags: ["Student", "Early Career"], styleLabel: "Original · Linktag green", description: "More than a résumé. Share what you’re learning, building, and looking forward to.", identity: student },
  { slug: "business", renderer: "business", title: "Business", category: "Business", audienceTags: ["Business", "Studio"], styleLabel: "Original · Linktag green", description: "A warm introduction to your business. Your story, services, and details in one place.", identity: business },
];

export function getTemplate(slug: string) {
  return templates.find(template => template.slug === slug);
}
