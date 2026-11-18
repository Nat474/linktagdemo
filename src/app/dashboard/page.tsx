import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { TagIcon } from "@phosphor-icons/react/dist/ssr/Tag";
import AppShell from "@/components/demo/AppShell";
import Keychain from "@/components/demo/Keychain";
import ProfileActions from "@/components/ProfileActions";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import { currentProfile, currentProfilePath, otherProfiles, qrAssets, publicProfileUrl } from "@/data/directory";
import { campus } from "@/data/designs";

export const metadata: Metadata = { title: "Dashboard · Linktag", description: "Jamie Park’s read-only Linktag demo dashboard." };

export default function Dashboard() {
  const { identity } = currentProfile.template;
  const suggestions = otherProfiles.filter(person => ["noah-chen", "elena-rossi", "sunday-cafe"].includes(person.slug));
  return <AppShell section="Dashboard">
    <div className="demo-page-heading"><div><p className="demo-overline">A LITTLE MORE CONNECTED</p><h1>Hey Jamie, welcome back<span>.</span></h1><p>Your corner of the internet, ready to go wherever you do.</p></div><Link href={currentProfilePath} className="demo-button">View public profile<ArrowUpRightIcon size={18} /></Link></div>
    <div className="dashboard-grid">
      <section className="dashboard-profile demo-panel"><div className="panel-topline"><span>Your profile</span><span className="demo-chip">Student · University</span></div><div className="dashboard-identity"><span className="demo-avatar large">{identity.initials}</span><div><h2>{identity.name}</h2><p>{identity.role}</p><span>{campus.school}</span></div></div><p className="dashboard-bio">{identity.bio}</p><div className="profile-url-line"><span>{publicProfileUrl(currentProfilePath).replace("https://", "")}</span><ArrowUpRightIcon size={16} /></div><ProfileActions path={currentProfilePath} name={identity.name} role={identity.role} /><Link href="/dashboard/profile" className="text-link">Your profile at a glance<ArrowUpRightIcon size={16} /></Link></section>
      <section className="dashboard-keychain demo-panel"><div className="panel-topline"><span>Your little connection-maker</span><TagIcon size={20} /></div><Keychain small /><div className="keychain-summary"><div><span className="demo-overline">DEMO KEYCHAIN</span><h2>Made to make introductions.</h2></div><Link href="/dashboard/keychain" className="demo-icon-link" aria-label="View my keychain"><ArrowUpRightIcon size={22} /></Link></div><div className="keychain-card-actions"><Link href="/dashboard/keychain" className="text-link">View keychain</Link><a href={qrAssets.png} download="jamie-park-qr.png" className="text-link"><ArrowDownIcon size={15} />Download QR</a></div></section>
      <section className="dashboard-design demo-panel"><div className="dashboard-design-copy"><span className="demo-overline">YOUR CURRENT DESIGN</span><h2>A little Campus Notes.<br />A lot of Jamie.</h2><p>A notebook for the things you’re learning, making, and dreaming up.</p><span className="demo-chip">Cream & cobalt</span><Link href="/templates" className="text-link">Explore all nine designs<ArrowUpRightIcon size={16} /></Link></div><Link href="/templates/campus-notes" className="dashboard-design-preview" aria-label="Preview Campus Notes"><TemplateThumbnail template={currentProfile.template} /></Link></section>
    </div>
    <section className="suggestions-section"><div className="demo-section-heading"><div><h2>Good people to know.</h2><p>A few different stories from the Linktag community.</p></div><Link href="/explore" className="text-link">Explore everyone<ArrowUpRightIcon size={16} /></Link></div><div className="suggestions-grid">{suggestions.map(person => <Link href={`/p/${person.slug}`} className="suggestion-card" key={person.slug}><span className={`demo-avatar suggestion-${person.template.category.toLowerCase()}`}>{person.template.identity.initials}</span><div><h3>{person.template.identity.name}</h3><p>{person.template.identity.role}</p></div><ArrowUpRightIcon size={19} /></Link>)}</div></section>
  </AppShell>;
}
