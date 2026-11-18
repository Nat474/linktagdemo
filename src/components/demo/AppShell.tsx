import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import BrandLogo from "../BrandLogo";
import ThemeToggle from "../ThemeToggle";
import AppNav from "./AppNav";
import { currentProfile, currentProfilePath } from "@/data/directory";

export default function AppShell({ children, section }: { children: ReactNode; section: string }) {
  const { identity } = currentProfile.template;
  return (
    <div className="demo-app">
      <a className="skip-link" href="#app-content">Skip to content</a>
      <aside className="demo-sidebar">
        <Link href="/dashboard" className="wordmark" aria-label="Linktag Pro, go to dashboard"><BrandLogo /></Link>
        <p className="sidebar-caption">A small tag.<br />A real connection.</p>
        <AppNav />
        <div className="sidebar-bottom"><Link href={currentProfilePath} className="sidebar-public">View public profile<ArrowUpRightIcon size={17} /></Link><div className="sidebar-account"><span className="demo-avatar">{identity.initials}</span><div><strong>{identity.name}</strong><span>Demo account</span></div></div></div>
      </aside>
      <div className="demo-workspace">
        <header className="demo-topbar"><Link href="/dashboard" className="wordmark mobile-wordmark" aria-label="Linktag Pro, go to dashboard"><BrandLogo /></Link><p className="demo-breadcrumb">Your Linktag <span>/</span> <strong>{section}</strong></p><div className="demo-topbar-actions"><span className="demo-account-badge">Demo account</span><ThemeToggle /></div></header>
        <main id="app-content" className="demo-main" tabIndex={-1}>{children}</main>
        <footer className="demo-footer"><span>Small tag. Endless possibilities.</span><span>Fictional profiles · Read-only demo</span></footer>
      </div>
      <AppNav mobile />
    </div>
  );
}
