export const signatureDesigns = ["campus-notes", "stack", "aperture", "sunday-cafe", "momentum", "after-hours"] as const;
export type SignatureDesign = typeof signatureDesigns[number];

export function isSignatureDesign(value: string): value is SignatureDesign {
  return signatureDesigns.some(design => design === value);
}

export const campus = {
  name: "Jamie Park", initials: "JP", role: "Design student & curious human", location: "Brooklyn, New York",
  bio: "Collecting ideas. Connecting dots. Making things that make a little difference.",
  availability: "Open to summer internships", email: "jamie@jamiepark.example",
  school: "Northline School of Design", degree: "BFA, Communication Design", years: "2024–2028",
  skills: ["Visual storytelling", "Figma", "Prototyping", "A little HTML & CSS"],
  timeline: [
    { year: "2026", title: "Learning out loud", text: "Workshop host, Design Society. Sharing small experiments with a big community." },
    { year: "2024", title: "A new chapter", text: "Started my BFA with a sketchbook, too many questions, and a love of typography." },
  ],
  projects: [
    { number: "01", title: "The Common Table", category: "Community · Editorial", text: "A neighborhood cookbook about the stories we share over dinner." },
    { number: "02", title: "Small Steps", category: "Digital · Interaction", text: "A gentler habit tracker for finding your own kind of progress." },
  ],
};

export const developer = {
  name: "Noah Chen", initials: "NC", role: "Frontend developer", location: "Singapore",
  bio: "I turn interesting problems into small, useful things for the web.", availability: "Available for thoughtful projects", email: "noah@noahchen.example",
  technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  projects: [
    { name: "relay", description: "A quieter way for distributed teams to share what matters.", stack: "Next.js / TypeScript", year: "2026" },
    { name: "openweather", description: "Weather, without the noise. A small experiment in useful interfaces.", stack: "React / Public data", year: "2026" },
    { name: "little-tools", description: "A growing collection of tiny utilities for everyday work.", stack: "TypeScript / CSS", year: "2025" },
  ],
};

export const photographer = {
  name: "Elena Rossi", initials: "ER", role: "Photographer & observer", location: "Lisbon, Portugal",
  bio: "The ordinary, seen a little differently. Photographs of places, objects, and the spaces in between.",
  availability: "Available for commissions", email: "studio@elenarossi.example",
  photographs: [
    { src: "/images/templates/aperture-coast.png", alt: "Soft Atlantic waves meeting a dark rocky shoreline at dusk", name: "Where the water goes", category: "Landscape", year: "2026" },
    { src: "/images/templates/aperture-architecture.png", alt: "Sunlight and geometric shadows on curved cream concrete architecture", name: "A study in light", category: "Architecture", year: "2026" },
    { src: "/images/templates/aperture-still-life.png", alt: "A pear and a handmade ceramic vase resting on natural linen", name: "Things left on the table", category: "Still life", year: "2025" },
  ],
};

export const cafe = {
  name: "Sunday Café", initials: "sc", role: "Coffee, company & slow mornings", location: "Portland, Oregon",
  bio: "Your little corner of the neighborhood. Good coffee, something freshly baked, and a reason to stay a while.",
  availability: "There’s always a place for you", email: "hello@sundaycafe.example",
  address: "42 Alder Street, Portland, OR", hours: "Mon–Fri 7–5 · Sat–Sun 8–4",
  menu: [{ name: "Flat white", detail: "Our house blend, silky milk", price: "$4.50" }, { name: "Honey oat latte", detail: "A little sweet, a little cozy", price: "$5.50" }, { name: "Almond croissant", detail: "Baked fresh every morning", price: "$4.00" }],
};

export const coach = {
  name: "Jordan Brooks", initials: "JB", role: "Strength & movement coach", location: "Melbourne, Australia",
  bio: "Build strength for the life you want to live. Practical coaching, steady progress, and a plan that fits you.",
  availability: "A few coaching spots available", email: "jordan@jordanbrooks.example",
  specialties: ["Strength training", "Everyday movement", "Sustainable habits"],
  programs: [
    { name: "Start strong", label: "FOUNDATIONS", text: "Learn the essentials. Build confidence. Find your rhythm.", duration: "6-week program" },
    { name: "Your next level", label: "1:1 COACHING", text: "A personal plan, honest feedback, and support along the way.", duration: "Ongoing coaching" },
    { name: "Move together", label: "SMALL GROUPS", text: "Good energy and purposeful training with a small crew.", duration: "Weekly sessions" },
  ],
  quote: "For the first time, getting stronger feels like something I do for myself. I actually look forward to it.",
  quoteName: "Sam R.",
};

export const musician = {
  name: "Luna Vale", initials: "LV", role: "Independent artist & producer", location: "London, UK",
  bio: "Late-night stories. Early-morning feelings. Electronic soul for the space between.",
  availability: "New EP out now", email: "hello@lunavale.example",
  releases: [{ title: "Between the hours", type: "EP", year: "2026", tracks: "5 tracks · 19 min" }, { title: "Soft signal", type: "Single", year: "2025", tracks: "1 track · 4 min" }],
  shows: [{ date: "12 NOV", venue: "The Glass Room", city: "London, UK" }, { date: "21 NOV", venue: "Night Garden", city: "Bristol, UK" }, { date: "05 DEC", venue: "Studio Twenty", city: "Manchester, UK" }],
};
