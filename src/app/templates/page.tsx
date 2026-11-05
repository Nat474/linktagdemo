import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import TemplateGallery from "@/components/TemplateGallery";
import { templates } from "@/data/templates";

export const metadata: Metadata = {
  title: "Templates · Linktag",
  description: "Nine distinct profile designs for students, portfolios, businesses, and creators. Explore the Linktag demo collection.",
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
          <p>Different lives. Different styles. Find a profile that feels like yours.</p>
        </div>
        <TemplateGallery items={templates.map(template => ({
          slug: template.slug,
          title: template.title,
          description: template.description,
          category: template.category,
          audienceTags: template.audienceTags,
          styleLabel: template.styleLabel,
          preview: <TemplateThumbnail template={template} />,
        }))} />
        <p className="templates-note">A glimpse of what’s possible. All templates shown with sample details.</p>
      </main>
      <SiteFooter gallery />
    </div>
  );
}
