import demo from "./demo.json";
import { templates, type TemplateDefinition } from "./templates";

export type DirectoryProfile = {
  slug: string;
  template: TemplateDefinition;
};

const profileSlugs: Record<string, string> = {
  "campus-notes": "jamie-park",
  stack: "noah-chen",
  aperture: "elena-rossi",
  "sunday-cafe": "sunday-cafe",
  momentum: "jordan-brooks",
  "after-hours": "luna-vale",
  portfolio: "mara-ellis",
  student: "alex-morgan",
  business: "goodkind-studio",
};

export const directory: readonly DirectoryProfile[] = templates.map(template => {
  const slug = profileSlugs[template.slug];
  if (!slug) throw new Error(`Missing public profile slug for ${template.slug}`);
  return { slug, template };
});

export function getPublicProfile(slug: string) {
  return directory.find(profile => profile.slug === slug);
}

const current = getPublicProfile(demo.currentProfileSlug);
if (!current) throw new Error("Demo account is missing from the profile directory");
export const currentProfile = current;
export const otherProfiles = directory.filter(profile => profile.slug !== currentProfile.slug);
export const currentProfilePath = `/p/${currentProfile.slug}`;
export function publicProfileUrl(path: string) {
  return new URL(path, demo.canonicalOrigin).href;
}

export const qrAssets = {
  svg: `/qr/${demo.currentProfileSlug}.svg`,
  png: `/qr/${demo.currentProfileSlug}.png`,
};
