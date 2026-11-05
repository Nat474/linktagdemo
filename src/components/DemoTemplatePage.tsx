import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { AsteriskSimpleIcon } from "@phosphor-icons/react/dist/ssr/AsteriskSimple";
import { BookOpenIcon } from "@phosphor-icons/react/dist/ssr/BookOpen";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { GlobeHemisphereWestIcon } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereWest";
import { HandshakeIcon } from "@phosphor-icons/react/dist/ssr/Handshake";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";
import { PaletteIcon } from "@phosphor-icons/react/dist/ssr/Palette";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr/Phone";
import { TagIcon } from "@phosphor-icons/react/dist/ssr/Tag";
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { SiteHeader, SiteFooter } from "./SiteChrome";
import { business, student, type DemoIdentity } from "@/data/templates";

function DemoIdentityCard({ identity, isStudent }: { identity: DemoIdentity; isStudent: boolean }) {
  return (
    <aside className="identity-column" aria-label={`About ${identity.name}`}>
      <section className="identity-card" aria-labelledby="profile-name">
        <div className={`profile-cover ${isStudent ? "student-cover" : "business-cover"}`} aria-hidden="true">
          <div className="cover-loop loop-one" /><div className="cover-loop loop-two" /><div className="cover-loop loop-three" />
          <span className="cover-signature">{isStudent ? "a little curiosity goes a long way." : "good things, made together."}</span>
        </div>
        <div className="identity-content">
          <div className={`avatar${isStudent ? "" : " studio-avatar"}`} aria-label={`${identity.name} initials`}>{identity.initials}<span className="avatar-flower" aria-hidden="true">{isStudent ? <GraduationCapIcon size={17} /> : <AsteriskSimpleIcon size={17} />}</span></div>
          <div className="identity-heading"><h1 id="profile-name">{identity.name}</h1><p className="profile-role">{identity.role}</p></div>
          <p className="location"><MapPinIcon size={16} />{identity.location}</p>
          <p className="profile-bio">{identity.bio}</p>
          <p className="availability"><span aria-hidden="true" />{identity.availability}</p>
          <span className="contact-button demo-control" aria-disabled="true">{isStudent ? "Say hello" : "Let’s work together"}<ArrowUpRightIcon size={19} /></span>
          <span className="lt-button save-button demo-control" aria-disabled="true"><ArrowDownIcon size={18} />Save contact</span>
          <p className="remote-note"><GlobeHemisphereWestIcon size={15} />{isStudent ? "Always learning. Always making." : "Based in Austin. Open to everywhere."}</p>
        </div>
      </section>
      <div className="tag-note"><span className="tag-note-icon"><TagIcon size={22} /></span><p>A small tag.<br /><strong>{isStudent ? "A world of possibility." : "Your next good connection."}</strong></p></div>
    </aside>
  );
}

function StudentContent() {
  return (
    <div className="portfolio-column student-content">
      <div className="section-heading"><div><p className="eyebrow">A little about my journey</p><h2>Learning. Building. Growing<span className="heading-dot">.</span></h2></div></div>
      <section className="education-panel" aria-labelledby="education-title">
        <span className="education-icon"><GraduationCapIcon size={32} weight="light" /></span>
        <div><p className="panel-kicker" id="education-title">Education</p><h3>{student.university}</h3><p>{student.degree}</p><p className="education-courses">{student.courses}</p></div>
        <span className="education-years">{student.years}</span>
      </section>
      <section className="student-skills" aria-labelledby="skills-title"><h2 id="skills-title">My growing toolkit</h2><div className="skill-tags">{student.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>
      <section className="student-projects" aria-labelledby="student-projects-title">
        <div className="subsection-heading"><h2 id="student-projects-title">Learning by doing</h2><span>A couple of things I’ve been making.</span></div>
        <div className="projects-grid">{student.projects.map((project, index) => {
          const Icon = index === 0 ? UsersThreeIcon : BookOpenIcon;
          return <article className="student-project" key={project.name}><div className={`student-project-art student-art-${index}`}><Icon size={55} weight="light" /><span>{index === 0 ? "Find your people." : "Make room for focus."}</span></div><div className="student-project-copy"><p>{project.category}</p><h3>{project.name}</h3><span>{project.description}</span></div></article>;
        })}</div>
      </section>
      <section className="activities-section" aria-labelledby="activities-title"><div className="subsection-heading"><h2 id="activities-title">Beyond the classroom</h2></div><div className="services-list">{student.activities.map(activity => <div className="service-row" key={activity.title}><span className="service-icon"><HandshakeIcon size={21} /></span><div><h3>{activity.title}</h3><p>{activity.detail}</p></div></div>)}</div></section>
      <section className="connect-section" aria-labelledby="student-connect-title"><div className="connect-intro"><span className="connect-icon"><EnvelopeSimpleIcon size={23} /></span><div><h2 id="student-connect-title">Have a place for a curious mind?</h2><p>Open to internships, collaborations, and good conversations.</p></div></div><span className="email-link" aria-disabled="true"><span>{student.email}</span><ArrowUpRightIcon size={19} /></span></section>
    </div>
  );
}

const serviceIcons = [PaletteIcon, GlobeHemisphereWestIcon, HandshakeIcon];

function BusinessContent() {
  return (
    <div className="portfolio-column business-content">
      <div className="section-heading"><div><p className="eyebrow">An independent creative studio</p><h2>Good design starts<br />with good people<span className="heading-dot">.</span></h2></div></div>
      <section className="studio-intro" aria-label="Our approach"><AsteriskSimpleIcon size={88} weight="light" /><div><h3>A little clarity.<br />A lot of possibility.</h3><p>From the first conversation to the finishing touches, we make thoughtful brands feel right at home.</p></div></section>
      <section className="services-section" aria-labelledby="business-services-title"><div className="subsection-heading"><h2 id="business-services-title">What we can do for you</h2><span>Made with care, from start to finish.</span></div><div className="services-list">{business.services.map((service, index) => { const Icon = serviceIcons[index]; return <div className="service-row" key={service.title}><span className="service-icon"><Icon size={21} /></span><div><h3>{service.title}</h3><p>{service.description}</p></div></div>; })}</div></section>
      <section className="business-details" aria-label="Studio details">
        <div className="detail-panel"><h2>Come say hello</h2><p className="business-address"><MapPinIcon size={18} /><span>{business.address}<br />{business.postcode}</span></p><p><PhoneIcon size={17} /><span>{business.phone}</span></p><p><GlobeHemisphereWestIcon size={17} /><span>{business.website}</span></p></div>
        <div className="detail-panel"><h2>Studio hours</h2><dl>{business.hours.map(hours => <div key={hours.day}><dt>{hours.day}</dt><dd>{hours.time}</dd></div>)}</dl><p className="hours-note">Visits by appointment.<br />Coffee and a good conversation included.</p></div>
      </section>
      <section className="connect-section" aria-labelledby="business-connect-title"><div className="connect-intro"><span className="connect-icon"><EnvelopeSimpleIcon size={23} /></span><div><h2 id="business-connect-title">Something good starts here.</h2><p>Tell us what you have in mind.</p></div></div><span className="email-link" aria-disabled="true"><span>{business.email}</span><ArrowUpRightIcon size={19} /></span></section>
    </div>
  );
}

export default function DemoTemplatePage({ kind }: { kind: "student" | "business" }) {
  const isStudent = kind === "student";
  return (
    <div className={`linktag-page template-preview-page ${kind}-preview-page`}>
      <a className="skip-link" href="#profile">Skip to profile</a>
      <SiteHeader preview><span className="preview-label">{isStudent ? "Student" : "Business"} preview</span></SiteHeader>
      <main id="profile" className="profile-layout" tabIndex={-1}><DemoIdentityCard identity={isStudent ? student : business} isStudent={isStudent} />{isStudent ? <StudentContent /> : <BusinessContent />}</main>
      <SiteFooter />
    </div>
  );
}
