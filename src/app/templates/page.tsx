import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import { templates } from "@/data/templates";

export const metadata: Metadata = {
  title: "Templates · Linktag",
  description: "Three ways to introduce yourself. Explore fictional Portfolio, Student, and Business profile templates.",
};

export default function TemplatesPage() {
  return (
    <div className="linktag-page templates-page">
      <a className="skip-link" href="#templates">Skip to templates</a>
      <SiteHeader gallery />
      <main id="templates" className="templates-main" tabIndex={-1}>
        <div className="templates-intro">
          <p className="eyebrow">One small tag. So many possibilities.</p>
          <h1>A little more <span>you.</span></h1>
          <p>Different stories, same connection. Find a profile that feels like yours.</p>
        </div>
        <div className="templates-grid">
          {templates.map(template => (
            <article className="template-card" key={template.slug}>
              <Link href={`/templates/${template.slug}`} className="template-image-link" aria-label={`View ${template.title} template preview`}><TemplateThumbnail template={template} /></Link>
              <div className="template-card-content">
                <div className="template-title-row"><h2>{template.title}</h2>{template.slug === "portfolio" && <span className="template-current">Current profile</span>}</div>
                <p>{template.description}</p>
                <div className="template-card-bottom"><span>{template.audience}</span><Link href={`/templates/${template.slug}`} aria-label={`View ${template.title} preview`}>View preview<ArrowUpRightIcon size={16} /></Link></div>
              </div>
            </article>
          ))}
        </div>
        <p className="templates-note">A glimpse of what’s possible. All templates shown with sample details.</p>
      </main>
      <SiteFooter gallery />
    </div>
  );
}
