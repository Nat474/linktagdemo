"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { ArrowDownIcon } from "@phosphor-icons/react/ArrowDown";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ArrowUpRight";
import { CheckIcon } from "@phosphor-icons/react/Check";
import { CaretDownIcon } from "@phosphor-icons/react/CaretDown";
import { AsteriskSimpleIcon } from "@phosphor-icons/react/AsteriskSimple";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/EnvelopeSimple";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/GlobeHemisphereWest";
import { HandshakeIcon } from "@phosphor-icons/react/Handshake";
import { LinkIcon } from "@phosphor-icons/react/Link";
import { MapPinIcon } from "@phosphor-icons/react/MapPin";
import { PaletteIcon } from "@phosphor-icons/react/Palette";
import { ShareNetworkIcon } from "@phosphor-icons/react/ShareNetwork";
import { TagIcon } from "@phosphor-icons/react/Tag";
import { XIcon } from "@phosphor-icons/react/X";
import type { Profile } from "@/data/profile";
import { createContactCard } from "@/lib/contact";
import { shareProfileLink } from "@/lib/share";
import ProjectPreview from "./ProjectPreview";
import { SiteHeader, SiteFooter } from "./SiteChrome";

const serviceIcons = { brand: PaletteIcon, web: GlobeHemisphereWestIcon, partner: HandshakeIcon };

export default function ProfilePage({ profile, readOnly = false }: { profile: Profile; readOnly?: boolean }) {
  const [isSharing, setIsSharing] = useState(false);
  const [notice, setNotice] = useState<{ message: string; error?: boolean } | null>(null);
  const [manualLink, setManualLink] = useState("");
  const sharing = useRef(false);
  const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent("Let’s make something good")}`;

  useEffect(() => {
    if (!notice || notice.error) return;
    const timer = window.setTimeout(() => setNotice(null), 6000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  async function shareProfile() {
    if (sharing.current) return;
    sharing.current = true;
    setIsSharing(true);
    setNotice(null);
    setManualLink("");
    const url = window.location.href;
    try {
      const result = await shareProfileLink({ title: `${profile.name} · Linktag`, text: profile.role, url }, navigator);
      if (result === "shared") {
        setNotice({ message: "Profile shared." });
      } else if (result === "copied") {
        setNotice({ message: "Profile link copied. Ready to pass along." });
      } else if (result === "manual") {
        setManualLink(url);
        setNotice({ message: "Couldn’t copy automatically. Select and copy the profile link below.", error: true });
      }
    } finally {
      sharing.current = false;
      setIsSharing(false);
    }
  }

  function saveContact() {
    setManualLink("");
    try {
      const url = URL.createObjectURL(new Blob([createContactCard(profile)], { type: "text/vcard;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "mara-ellis.vcf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setNotice({ message: "Demo contact card download started." });
    } catch {
      setNotice({ message: "Couldn’t download the contact card. Please try again.", error: true });
    }
  }

  return (
    <div className={`linktag-page${readOnly ? " template-preview-page" : ""}`}>
      <a className="skip-link" href="#profile">Skip to profile</a>
      <SiteHeader preview={readOnly}>
        {readOnly ? <span className="preview-label">Portfolio preview</span> : (
          <Button className="lt-button share-button" variant="outline" onClick={shareProfile} disabled={isSharing} aria-label={isSharing ? "Sharing profile" : "Share profile"} startIcon={<ShareNetworkIcon size={18} />}>
            <span className="share-label">{isSharing ? "Sharing…" : "Share profile"}</span>
          </Button>
        )}
      </SiteHeader>

      <main id="profile" className="profile-layout" tabIndex={-1}>
        <aside className="identity-column" aria-label={`About ${profile.name}`}>
          <section className="identity-card" aria-labelledby="profile-name">
            <div className="profile-cover" aria-hidden="true">
              <div className="cover-loop loop-one" />
              <div className="cover-loop loop-two" />
              <div className="cover-loop loop-three" />
              <span className="cover-signature">a little more human.</span>
            </div>
            <div className="identity-content">
              <div className="avatar" aria-label={`${profile.name} initials`}>
                {profile.initials}
                <span className="avatar-flower" aria-hidden="true"><AsteriskSimpleIcon size={17} weight="bold" /></span>
              </div>
              <div className="identity-heading">
                <h1 id="profile-name">{profile.name}</h1>
                <p className="profile-role">{profile.role}</p>
              </div>
              <p className="location"><MapPinIcon size={16} />{profile.location}</p>
              <p className="profile-bio">{profile.bio}</p>
              <p className="availability"><span aria-hidden="true" />{profile.availability}</p>
              {readOnly ? <span className="contact-button demo-control" aria-disabled="true">Get in touch<ArrowUpRightIcon size={19} /></span> : <a href={emailHref} className="contact-button">Get in touch<ArrowUpRightIcon size={19} /></a>}
              {readOnly ? <span className="lt-button save-button demo-control" aria-disabled="true"><ArrowDownIcon size={18} />Save contact</span> : <Button className="lt-button save-button" variant="outline" onClick={saveContact} startIcon={<ArrowDownIcon size={18} />}>Save contact</Button>}
              <p className="remote-note"><GlobeHemisphereWestIcon size={15} />Based in Portland. Working everywhere.</p>
            </div>
          </section>
          <div className="tag-note">
            <span className="tag-note-icon"><TagIcon size={22} /></span>
            <p>A small tag.<br /><strong>A real connection.</strong></p>
            <LinkIcon size={19} className="tag-note-link" aria-hidden="true" />
          </div>
        </aside>

        <div className="portfolio-column">
          <section className="work-section" aria-labelledby="work-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A little of what I do</p>
                <h2 id="work-title">Selected work<span className="heading-dot">.</span></h2>
              </div>
              <span className="work-count">2026 collection</span>
            </div>
            <div className="projects-grid">
              {profile.projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <ProjectPreview kind={project.preview} />
                  <div className="project-caption">
                    <div>
                      <h3>{project.name}</h3>
                      <p>{project.category}<span aria-hidden="true"> / </span><span className="sr-only">, </span>{project.year}</p>
                    </div>
                  </div>
                  <details className="project-details">
                    <summary><span>About the project</span><CaretDownIcon size={15} /></summary>
                    <div className="project-description">
                      <p>{project.description}</p>
                      <dl><dt>What I did</dt><dd>{project.deliverables}</dd></dl>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </section>

          <section className="services-section" aria-labelledby="services-title">
            <div className="subsection-heading">
              <h2 id="services-title">How I can help</h2>
              <span>From the first spark to the final detail.</span>
            </div>
            <div className="services-list">
              {profile.services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return (
                  <div className="service-row" key={service.title}>
                    <span className="service-icon"><Icon size={21} /></span>
                    <div><h3>{service.title}</h3><p>{service.description}</p></div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="connect-section" aria-labelledby="connect-title">
            <div className="connect-intro">
              <span className="connect-icon"><EnvelopeSimpleIcon size={23} /></span>
              <div><h2 id="connect-title">Good things start with a hello.</h2><p>Have something in mind? I’d love to hear it.</p></div>
            </div>
            {readOnly ? <span className="email-link" aria-disabled="true"><span>{profile.email}</span><ArrowUpRightIcon size={19} /></span> : <a href={emailHref} className="email-link"><span>{profile.email}</span><ArrowUpRightIcon size={19} /></a>}
          </section>
        </div>
      </main>

      <SiteFooter />

      <div className="feedback-region" role="status" aria-live="polite" aria-atomic="true">
        {notice && (
          <div className={`notice${notice.error ? " notice-error" : ""}`}>
            <div className="notice-heading">
              {!notice.error && <CheckIcon size={19} />}
              <p>{notice.message}</p>
              <button type="button" aria-label="Dismiss message" onClick={() => { setNotice(null); setManualLink(""); }}><XIcon size={17} /></button>
            </div>
            {manualLink && <input aria-label="Profile link to copy manually" readOnly value={manualLink} onFocus={(event) => event.currentTarget.select()} />}
          </div>
        )}
      </div>
    </div>
  );
}
