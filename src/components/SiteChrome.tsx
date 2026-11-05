import type { ReactNode } from "react";
import Link from "next/link";
import { LinkIcon } from "@phosphor-icons/react/dist/ssr/Link";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import ThemeToggle from "./ThemeToggle";

export function SiteHeader({ preview, gallery, children }: { preview?: boolean; gallery?: boolean; children?: ReactNode }) {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Linktag, go to profile">
        <span className="brand-symbol"><LinkIcon size={22} weight="bold" /></span>
        linktag<span className="wordmark-period">.</span>
      </Link>
      <div className="header-actions">
        <Link href="/templates" className={`header-template-link${gallery ? " is-current" : ""}`} aria-current={gallery ? "page" : undefined}>
          {preview && <ArrowLeftIcon size={16} />}{preview ? "Back to templates" : "Templates"}
        </Link>
        <ThemeToggle />
        {children}
      </div>
    </header>
  );
}

export function SiteFooter({ gallery = false }: { gallery?: boolean }) {
  return (
    <footer className="site-footer">
      <p><LinkIcon size={15} />Connected with <strong>linktag.</strong></p>
      <span>{gallery ? "Three ways to make a real connection." : "Demo profile · All details are fictional"}</span>
    </footer>
  );
}
