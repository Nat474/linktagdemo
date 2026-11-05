import type { Profile } from "@/data/profile";

function escapeVcard(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function createContactCard(profile: Profile): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVcard(profile.familyName)};${escapeVcard(profile.givenName)};;;`,
    `FN:${escapeVcard(profile.name)}`,
    `TITLE:${escapeVcard(profile.role)}`,
    `EMAIL;TYPE=INTERNET:${escapeVcard(profile.email)}`,
    `NOTE:${escapeVcard(`${profile.bio}\nDemo contact: fictional information.`)}`,
    "END:VCARD",
    "",
  ].join("\r\n");
}
