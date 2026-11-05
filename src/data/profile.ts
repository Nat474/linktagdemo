export type Project = {
  name: string;
  category: string;
  year: string;
  preview: "fieldwork" | "formline";
  description: string;
  deliverables: string;
};

export type Profile = {
  name: string;
  givenName: string;
  familyName: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  availability: string;
  projects: Project[];
  services: { title: string; description: string; icon: "brand" | "web" | "partner" }[];
};

export const profile: Profile = {
  name: "Mara Ellis",
  givenName: "Mara",
  familyName: "Ellis",
  initials: "ME",
  role: "Brand & digital designer",
  location: "Portland, Oregon",
  email: "hello@maraellis.example",
  bio: "I help good people turn thoughtful ideas into brands and digital experiences that feel like them.",
  availability: "Open for select projects",
  projects: [
    {
      name: "Fieldwork",
      category: "Brand identity",
      year: "2026",
      preview: "fieldwork",
      description: "A grounded identity for a fictional outdoor goods studio. Organic forms, an earthy palette, and a confident wordmark bring a little of the outside in.",
      deliverables: "Strategy, visual identity, packaging",
    },
    {
      name: "Formline",
      category: "Product design",
      year: "2026",
      preview: "formline",
      description: "A calmer workspace for a fictional independent design team. Clear project overviews and considered details make room for the work that matters.",
      deliverables: "UX direction, interface design, design system",
    },
  ],
  services: [
    { title: "Brand identity", description: "A clear story. A look that feels like you.", icon: "brand" },
    { title: "Web & product design", description: "Thoughtful websites and useful digital things.", icon: "web" },
    { title: "Creative partnership", description: "An extra pair of hands, from idea to launch.", icon: "partner" },
  ],
};
