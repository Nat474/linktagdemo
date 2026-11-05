import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import ThemeToggle from "./ThemeToggle";
import BrandLogo from "./BrandLogo";

export function SiteHeader({ preview, gallery, showThemeToggle = true, children }: { preview?: boolean; gallery?: boolean; showThemeToggle?: boolean; children?: ReactNode }) {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Linktag Pro, go to profile">
        <BrandLogo />
      </Link>
      <div className="header-actions">
        <Link href="/templates" className={`header-template-link${gallery ? " is-current" : ""}`} aria-current={gallery ? "page" : undefined}>
          {preview && <ArrowLeftIcon size={16} />}{preview ? "Back to templates" : "Templates"}
        </Link>
        {showThemeToggle && <ThemeToggle />}
        {children}
      </div>
    </header>
  );
}

export function SiteFooter({ gallery = false }: { gallery?: boolean }) {
  return (
    <footer className="site-footer">
      <p>Connected with <BrandLogo footer /></p>
      <span>{gallery ? "Different stories. A real connection." : "Demo profile · All details are fictional"}</span>
    </footer>
  );
}
