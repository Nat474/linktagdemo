import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { AsteriskSimpleIcon } from "@phosphor-icons/react/dist/ssr/AsteriskSimple";
import { BracketsAngleIcon } from "@phosphor-icons/react/dist/ssr/BracketsAngle";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import { PlayIcon } from "@phosphor-icons/react/dist/ssr/Play";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { campus, developer, photographer, cafe, coach, musician, type SignatureDesign } from "@/data/designs";
import type { TemplateDefinition } from "@/data/templates";
import { SiteHeader, SiteFooter } from "../SiteChrome";

type DesignProps = { compact: boolean };

function Name({ compact, children, className = "" }: DesignProps & { children: ReactNode; className?: string }) {
  const Heading = compact ? "h3" : "h1";
  return <Heading className={`signature-name ${className}`}>{children}</Heading>;
}

function DemoAction({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`signature-action ${className}`} aria-disabled="true">{children}<ArrowUpRightIcon size={19} /></span>;
}

function CampusNotes({ compact }: DesignProps) {
  return (
    <div className="campus-sheet">
      <div className="campus-topline"><span>THE NOTEBOOK OF</span><span>Always a work in progress.</span></div>
      <div className="campus-hero">
        <div><p className="signature-kicker">Design student. Curious human.</p><Name compact={compact}>Hi, I’m Jamie<span className="campus-period">.</span></Name><p className="campus-intro">{campus.bio}</p><span className="campus-location"><MapPinIcon size={15} />{campus.location}</span></div>
        <div className="campus-sticker"><AsteriskSimpleIcon size={43} weight="light" /><span>Learning<br />as I go.</span></div>
      </div>
      <div className="campus-columns">
        <section className="campus-learning"><h2>Currently learning</h2><h3>{campus.school}</h3><p>{campus.degree}<br />Class of 2028</p><div className="campus-timeline">{campus.timeline.map(item => <div key={item.year}><span>{item.year}</span><div><h4>{item.title}</h4><p>{item.text}</p></div></div>)}</div><h3 className="campus-toolkit-label">Things in my toolkit</h3><div className="campus-skills">{campus.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>
        <section className="campus-projects"><h2>Pages from my practice</h2>{campus.projects.map(project => <article className="campus-project" key={project.number}><div className={`campus-project-art campus-project-${project.number}`}><span>{project.number}</span><strong>{project.title === "The Common Table" ? <>THE<br />COMMON<br />TABLE</> : <>small<br /><i>steps.</i></>}</strong><AsteriskSimpleIcon size={37} weight="light" /></div><p>{project.category}</p><h3>{project.title}</h3>{!compact && <p>{project.text}</p>}</article>)}</section>
      </div>
      <div className="campus-bottom"><span>{campus.availability}</span><DemoAction>Let’s make something</DemoAction></div>
      {!compact && <p className="signature-email">{campus.email}</p>}
    </div>
  );
}

function Stack({ compact }: DesignProps) {
  return (
    <div className="stack-layout">
      <aside className="stack-identity"><div className="stack-avatar"><BracketsAngleIcon size={35} /></div><Name compact={compact}>{developer.name}</Name><p className="stack-role">{developer.role}</p><p className="stack-location">{developer.location}<br />UTC +08:00</p><span className="stack-availability">{developer.availability}</span><div className="stack-identity-bottom"><GithubLogoIcon size={23} /><span>Built with curiosity.</span></div></aside>
      <div className="stack-main"><div className="stack-topline"><span>NOAH / SELECTED WORK</span><span>2025–2026</span></div><div className="stack-intro"><p className="signature-kicker">Hello, world.</p><h2>Small details.<br /><span>Useful things.</span></h2><p>{developer.bio}</p></div><section className="stack-projects" aria-label="Selected development projects"><div className="stack-section-label"><span>PROJECTS</span><span>03</span></div>{developer.projects.map((project, index) => <article key={project.name}><span className="stack-project-index">0{index + 1}</span><div><h3>{project.name}<ArrowUpRightIcon size={19} /></h3><p>{project.description}</p><small>{project.stack}</small></div><span className="stack-project-year">{project.year}</span></article>)}</section><section className="stack-toolkit" aria-label="Technology toolkit"><h3>TOOLS I REACH FOR</h3><div>{developer.technologies.map(technology => <span key={technology}>{technology}</span>)}</div></section><div className="stack-contact"><span>Have something interesting?</span><DemoAction>Let’s talk</DemoAction></div>{!compact && <p className="signature-email">{developer.email}</p>}</div>
    </div>
  );
}

function Aperture({ compact }: DesignProps) {
  return (
    <div className="aperture-layout">
      <div className="aperture-topline"><span>{photographer.role}</span><span>Based in Lisbon · Available worldwide</span></div>
      <div className="aperture-intro"><Name compact={compact}>Elena Rossi<span>Seeing the in-between.</span></Name><p>{photographer.bio}</p></div>
      <section className="aperture-gallery" aria-label="Selected photography">
        {photographer.photographs.map((photo, index) => <figure key={photo.src}><div className="aperture-image"><Image src={photo.src} alt={photo.alt} width={index === 0 ? 1536 : 1024} height={index === 0 ? 1024 : 1280} sizes={compact ? "330px" : "(max-width: 700px) 100vw, 65vw"} priority={!compact && index === 0} /></div><figcaption><span>{photo.name}</span><small>{photo.category} · {photo.year}</small></figcaption></figure>)}
      </section>
      <div className="aperture-contact"><p>For stories worth<br /><i>looking closer at.</i></p><div><span>{photographer.email}</span><DemoAction>Discuss a commission</DemoAction></div></div>
    </div>
  );
}

function SundayCafe({ compact }: DesignProps) {
  return (
    <div className="cafe-layout">
      <div className="cafe-topline"><span>A LITTLE CORNER OF PORTLAND</span><AsteriskSimpleIcon size={23} /></div>
      <div className="cafe-hero"><div className="cafe-hero-copy"><Name compact={compact}>Sunday<br /><i>Café</i><span className="cafe-title-period">.</span></Name><p>{cafe.bio}</p><DemoAction>A little look at the menu</DemoAction></div><div className="cafe-hero-photo"><Image src="/images/templates/sunday-cafe.png" alt="Morning sunlight on a terracotta café counter with cappuccino and a fresh croissant" width={1536} height={1024} sizes={compact ? "300px" : "(max-width: 700px) 100vw, 55vw"} priority={!compact} /></div></div>
      <section className="cafe-menu" aria-labelledby={compact ? undefined : "cafe-menu-title"}><div><p className="signature-kicker">A FEW FAVORITES</p><h2 id={compact ? undefined : "cafe-menu-title"}>Made for slow mornings.</h2></div><div>{cafe.menu.map(item => <div className="cafe-menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.detail}</p></div><span>{item.price}</span></div>)}</div></section>
      <div className="cafe-details"><div><h3>Come find your usual.</h3><p>{cafe.address}</p></div><div><h3>The door’s open.</h3><p>{cafe.hours}</p></div><AsteriskSimpleIcon size={40} weight="light" /></div>
      {!compact && <p className="signature-email">{cafe.email}</p>}
    </div>
  );
}

function Momentum({ compact }: DesignProps) {
  return (
    <div className="momentum-layout">
      <div className="momentum-topline"><span>JORDAN BROOKS / COACHING</span><span>{coach.location}</span></div>
      <div className="momentum-hero"><div><p className="signature-kicker">STRENGTH FOR REAL LIFE</p><Name compact={compact}>YOUR PACE.<br />YOUR <span>POWER.</span></Name><p>{coach.bio}</p><DemoAction>Find your starting point</DemoAction></div><div className="momentum-art" aria-hidden="true"><span className="momentum-art-word">GO</span><ArrowUpRightIcon size={150} weight="bold" /><span>SHOW UP FOR YOURSELF.</span></div></div>
      <div className="momentum-specialties">{coach.specialties.map(specialty => <span key={specialty}><AsteriskSimpleIcon size={16} />{specialty}</span>)}</div>
      <section className="momentum-programs" aria-label="Training programs"><div className="momentum-section-title"><h2>A plan that fits you.</h2><span>START WHERE YOU ARE</span></div><div>{coach.programs.map((program, index) => <article key={program.name}><div><span>0{index + 1}</span><ArrowUpRightIcon size={23} /></div><p className="signature-kicker">{program.label}</p><h3>{program.name}</h3><p>{program.text}</p><span>{program.duration}</span></article>)}</div></section>
      <figure className="momentum-quote"><blockquote>“{coach.quote}”</blockquote><figcaption>{coach.quoteName} · Coaching client</figcaption></figure>
      {!compact && <div className="momentum-bottom"><p>{coach.availability}</p><span>{coach.email}</span></div>}
    </div>
  );
}

function AfterHours({ compact }: DesignProps) {
  return (
    <div className="after-hours-layout">
      <div className="after-hours-topline"><span>INDEPENDENT SOUND / LONDON</span><span>ARTIST · PRODUCER · STORYTELLER</span></div>
      <div className="after-hours-hero"><div className="after-hours-artist"><p className="signature-kicker">WELCOME TO THE IN-BETWEEN</p><Name compact={compact}>LUNA<br /><span>VALE</span><AsteriskSimpleIcon size={60} weight="light" /></Name><p>{musician.bio}</p><div className="after-hours-actions"><DemoAction><PlayIcon size={14} weight="fill" />Explore the music</DemoAction><span className="after-hours-press" aria-disabled="true"><ArrowDownIcon size={16} />Press kit</span></div></div><div className="after-hours-record" aria-label="Between the hours EP artwork: concentric pink rings on a deep blue background"><div className="record-rings"><span /><span /><span /><span /></div><div className="record-title"><span>LUNA VALE</span><strong>between<br /><i>the hours.</i></strong><small>THE NEW EP · 2026</small></div></div></div>
      <section className="after-hours-releases" aria-label="Music releases"><div className="after-hours-section-title"><h2>In rotation.</h2><span>SELECTED RELEASES</span></div>{musician.releases.map((release, index) => <article key={release.title}><span className={`release-art release-art-${index}`}><AsteriskSimpleIcon size={28} weight="light" /></span><div><h3>{release.title}</h3><p>{release.type} · {release.year} · {release.tracks}</p></div><span className="release-play" aria-disabled="true"><PlayIcon size={17} weight="fill" /></span></article>)}</section>
      {!compact && <section className="after-hours-shows" aria-label="Upcoming performances"><div className="after-hours-section-title"><h2>Meet me after dark.</h2><span>LIVE DATES · 2026</span></div>{musician.shows.map(show => <div key={show.date}><span>{show.date}</span><h3>{show.venue}</h3><p>{show.city}</p><ArrowUpRightIcon size={18} /></div>)}<p className="signature-email">Bookings & good conversations · {musician.email}</p></section>}
    </div>
  );
}

const renderers = { "campus-notes": CampusNotes, stack: Stack, aperture: Aperture, "sunday-cafe": SundayCafe, momentum: Momentum, "after-hours": AfterHours };

export function SignatureDesignContent({ design, compact = false }: { design: SignatureDesign; compact?: boolean }) {
  const Content = renderers[design];
  return <div className={`signature-design${compact ? " signature-mini" : ""}`} data-design={design}><div className="signature-content"><Content compact={compact} /></div></div>;
}

export default function SignatureTemplatePage({ template, design }: { template: TemplateDefinition; design: SignatureDesign }) {
  return (
    <div className="signature-page" data-design={design}>
      <a className="skip-link" href="#design-preview">Skip to sample profile</a>
      <div className="linktag-page signature-chrome"><SiteHeader preview showThemeToggle={false}><span className="preview-label">{template.title} preview</span></SiteHeader></div>
      <main id="design-preview" tabIndex={-1}><div className="signature-preview-meta"><span>{template.title}</span><div>{template.audienceTags.map(tag => <span key={tag}>{tag}</span>)}</div><span>Read-only sample</span></div><SignatureDesignContent design={design} /></main>
      <div className="linktag-page signature-chrome"><SiteFooter /></div>
    </div>
  );
}
