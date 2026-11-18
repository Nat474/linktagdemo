import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr/CaretDown";
import { AsteriskSimpleIcon } from "@phosphor-icons/react/dist/ssr/AsteriskSimple";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereWest";
import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr/Handshake";
import { LinkIcon } from "@phosphor-icons/react/dist/ssr/Link";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import { PaletteIcon } from "@phosphor-icons/react/dist/ssr/Palette";
import { TagIcon } from "@phosphor-icons/react/dist/ssr/Tag";
import type { Profile } from "@/data/profile";
import ProjectPreview from "./ProjectPreview";
import { SiteFooter } from "./SiteChrome";
import ProfileHeader, { type ProfilePresentation } from "./ProfileChrome";

const serviceIcons = { brand: PaletteIcon, web: GlobeHemisphereWestIcon, partner: HandshakeIcon };

export default function ProfilePage({ profile, mode = "template", publicPath }: { profile: Profile; mode?: ProfilePresentation; publicPath?: string }) {
  return (
    <div className={`linktag-page${mode === "template" ? " template-preview-page" : " public-profile-page"}`}>
      <a className="skip-link" href="#profile">Skip to profile</a>
      <ProfileHeader mode={mode} title="Portfolio" identity={profile} publicPath={publicPath} />

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
              <span className="contact-button demo-control" aria-disabled="true">Get in touch<ArrowUpRightIcon size={19} /></span>
              <span className="lt-button save-button demo-control" aria-disabled="true"><ArrowDownIcon size={18} />Save contact</span>
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
            <span className="email-link" aria-disabled="true"><span>{profile.email}</span><ArrowUpRightIcon size={19} /></span>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
