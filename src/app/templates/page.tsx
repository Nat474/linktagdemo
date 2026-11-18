import type { Metadata } from "next";
import AppShell from "@/components/demo/AppShell";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import TemplateGallery from "@/components/TemplateGallery";
import { templates } from "@/data/templates";
import { currentProfile } from "@/data/directory";

export const metadata: Metadata = {
  title: "Templates · Linktag",
  description: "Nine distinct profile designs for students, portfolios, businesses, and creators. Explore the Linktag demo collection.",
};

export default function TemplatesPage() {
  return (
    <AppShell section="Templates">
      <div className="templates-page demo-templates">
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
          current: template.slug === currentProfile.template.slug,
          preview: <TemplateThumbnail template={template} />,
        }))} />
        <p className="templates-note">A glimpse of what’s possible. All templates shown with sample details.</p>
      </div>
    </AppShell>
  );
}
