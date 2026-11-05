import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfilePage from "@/components/ProfilePage";
import DemoTemplatePage from "@/components/DemoTemplatePage";
import SignatureTemplatePage from "@/components/designs/SignatureDesign";
import { isSignatureDesign } from "@/data/designs";
import { profile } from "@/data/profile";
import { templates, getTemplate } from "@/data/templates";

type PageProps = { params: Promise<{ template: string }> };

export function generateStaticParams() {
  return templates.map(({ slug }) => ({ template: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { template } = await params;
  const selected = getTemplate(template);
  if (!selected) notFound();
  return { title: `${selected.title} template · Linktag`, description: selected.description };
}

export default async function TemplatePage({ params }: PageProps) {
  const { template } = await params;
  const selected = getTemplate(template);
  if (!selected) notFound();
  if (isSignatureDesign(selected.renderer)) return <SignatureTemplatePage template={selected} design={selected.renderer} />;
  if (selected.renderer === "portfolio") return <ProfilePage profile={profile} readOnly />;
  if (selected.renderer === "student" || selected.renderer === "business") return <DemoTemplatePage kind={selected.renderer} />;
  notFound();
}
