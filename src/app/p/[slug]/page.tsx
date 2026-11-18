import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfilePage from "@/components/ProfilePage";
import DemoTemplatePage from "@/components/DemoTemplatePage";
import SignatureProfilePage from "@/components/designs/SignatureDesign";
import { isSignatureDesign } from "@/data/designs";
import { profile } from "@/data/profile";
import { directory, getPublicProfile, publicProfileUrl } from "@/data/directory";

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return directory.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPublicProfile(slug);
  if (!entry) notFound();
  return { title: `${entry.template.identity.name} · Linktag`, description: entry.template.identity.bio, alternates: { canonical: publicProfileUrl(`/p/${slug}`) } };
}

export default async function PublicProfile({ params }: PageProps) {
  const { slug } = await params;
  const entry = getPublicProfile(slug);
  if (!entry) notFound();
  const { template } = entry;
  const publicPath = `/p/${slug}`;
  if (isSignatureDesign(template.renderer)) return <SignatureProfilePage template={template} design={template.renderer} mode="public" publicPath={publicPath} />;
  if (template.renderer === "portfolio") return <ProfilePage profile={profile} mode="public" publicPath={publicPath} />;
  return <DemoTemplatePage kind={template.renderer} mode="public" publicPath={publicPath} />;
}
