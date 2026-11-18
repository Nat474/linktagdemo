import type { Metadata } from "next";
import AppShell from "@/components/demo/AppShell";
import ExploreGrid from "@/components/demo/ExploreGrid";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import { otherProfiles } from "@/data/directory";

export const metadata: Metadata = { title: "Explore · Linktag", description: "Discover eight fictional students, creators, portfolios, and businesses in the Linktag demo." };

export default function Explore() {
  return <AppShell section="Explore"><div className="demo-page-heading"><div><p className="demo-overline">A WORLD BEYOND THE TAG</p><h1>Good people. Great stories<span>.</span></h1><p>Meet a few of the people and places that make Linktag their own.</p></div><span className="demo-chip">Fictional community</span></div><ExploreGrid items={otherProfiles.map(({ slug, template }) => ({ slug, identity: template.identity, category: template.category, tags: template.audienceTags, design: template.title, preview: <TemplateThumbnail template={template} /> }))} /></AppShell>;
}
