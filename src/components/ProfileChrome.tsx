import Link from "next/link";
import BrandLogo from "./BrandLogo";
import ProfileActions from "./ProfileActions";
import ThemeToggle from "./ThemeToggle";
import { SiteHeader } from "./SiteChrome";
import type { DemoIdentity } from "@/data/templates";

export type ProfilePresentation = "template" | "public";

export default function ProfileHeader({ mode, title, identity, publicPath, fixedPalette = false }: {
  mode: ProfilePresentation;
  title: string;
  identity: DemoIdentity;
  publicPath?: string;
  fixedPalette?: boolean;
}) {
  if (mode === "template") {
    return <SiteHeader preview showThemeToggle={!fixedPalette}><span className="preview-label">{title} preview</span></SiteHeader>;
  }
  if (!publicPath) throw new Error("Public profiles require a public path");
  return (
    <header className="site-header public-header">
      <Link href="/" className="wordmark" aria-label="Linktag Pro, open demo"><BrandLogo /></Link>
      <div className="header-actions"><ProfileActions path={publicPath} name={identity.name} role={identity.role} />{!fixedPalette && <ThemeToggle />}</div>
    </header>
  );
}
