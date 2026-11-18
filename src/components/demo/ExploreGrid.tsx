"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ArrowUpRight";
import { MapPinIcon } from "@phosphor-icons/react/MapPin";
import type { DemoIdentity, TemplateCategory } from "@/data/templates";

type ExploreItem = { slug: string; identity: DemoIdentity; category: TemplateCategory; tags: readonly string[]; design: string; preview: ReactNode };
const categories = ["All", "Student", "Portfolio", "Business", "Creator"] as const;

export default function ExploreGrid({ items }: { items: ExploreItem[] }) {
  const [category, setCategory] = useState<typeof categories[number]>("All");
  const visible = category === "All" ? items : items.filter(item => item.category === category);
  return <>
    <div className="gallery-toolbar"><div className="template-filters" role="group" aria-label="Filter profiles by audience">{categories.map(value => <button key={value} type="button" aria-pressed={category === value} aria-controls="explore-results" onClick={() => setCategory(value)}>{value}<span>{value === "All" ? items.length : items.filter(item => item.category === value).length}</span></button>)}</div><p className="gallery-count" role="status" aria-live="polite">{visible.length} {visible.length === 1 ? "profile" : "profiles"} to discover</p></div>
    <div id="explore-results" className="explore-grid">{visible.map(item => <article className="explore-card" key={item.slug}>
      <Link href={`/p/${item.slug}`} className="explore-preview" aria-label={`View ${item.identity.name}’s profile`}>{item.preview}</Link>
      <div className="explore-copy"><div className="template-audience-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h2>{item.identity.name}</h2><p>{item.identity.role}</p><span className="explore-location"><MapPinIcon size={14} />{item.identity.location}</span><div className="explore-card-bottom"><span>{item.design}</span><Link href={`/p/${item.slug}`}>View profile<ArrowUpRightIcon size={16} /></Link></div></div>
    </article>)}</div>
  </>;
}
