import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfilePage from "@/components/ProfilePage";
import DemoTemplatePage from "@/components/DemoTemplatePage";
import { profile } from "@/data/profile";
import { templates } from "@/data/templates";

type PageProps = { params: Promise<{ template: string }> };

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ template: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { template } = await params;
  const selected = templates.find(item => item.slug === template);
  if (!selected) notFound();
  return { title: `${selected.title} template · Linktag`, description: selected.description };
}

export default async function TemplatePage({ params }: PageProps) {
  const { template } = await params;
  if (template === "portfolio") return <ProfilePage profile={profile} readOnly />;
  if (template === "student" || template === "business") return <DemoTemplatePage kind={template} />;
  notFound();
}
