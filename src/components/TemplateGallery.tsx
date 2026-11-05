"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ArrowUpRight";
import { templateCategories, type TemplateCategory, type TemplateDefinition } from "@/data/templates";

type GalleryItem = Pick<TemplateDefinition, "slug" | "title" | "description" | "category" | "audienceTags" | "styleLabel"> & { preview: ReactNode };

export default function TemplateGallery({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = useState<TemplateCategory | "All">("All");
  const visible = category === "All" ? items : items.filter(item => item.category === category);

  return (
    <>
      <div className="gallery-toolbar">
        <div className="template-filters" role="group" aria-label="Filter templates by audience">
          {(["All", ...templateCategories] as const).map(value => <button type="button" key={value} aria-pressed={category === value} aria-controls="template-results" onClick={() => setCategory(value)}>{value}<span>{value === "All" ? items.length : items.filter(item => item.category === value).length}</span></button>)}
        </div>
        <p className="gallery-count" role="status" aria-live="polite">{visible.length} {visible.length === 1 ? "design" : "designs"} to make your own</p>
      </div>
      <div id="template-results" className="templates-grid">
        {visible.map(template => (
          <article className="template-card" key={template.slug}>
            <Link href={`/templates/${template.slug}`} className="template-image-link" aria-label={`View ${template.title} template preview`}>{template.preview}</Link>
            <div className="template-card-content">
              <div className="template-audience-tags">{template.audienceTags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="template-title-row"><h2>{template.title}</h2>{template.slug === "portfolio" && <span className="template-current">Current profile</span>}</div>
              <p>{template.description}</p>
              <div className="template-card-bottom"><span>{template.styleLabel}</span><Link href={`/templates/${template.slug}`} aria-label={`View ${template.title} preview`}>View preview<ArrowUpRightIcon size={16} /></Link></div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
