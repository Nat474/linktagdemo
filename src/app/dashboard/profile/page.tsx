import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import AppShell from "@/components/demo/AppShell";
import ProfileActions from "@/components/ProfileActions";
import TemplateThumbnail from "@/components/TemplateThumbnail";
import { currentProfile, currentProfilePath, publicProfileUrl } from "@/data/directory";
import { campus } from "@/data/designs";

export const metadata: Metadata = { title: "My Profile · Linktag", description: "Jamie Park’s fixed demo account details and public profile." };

export default function MyProfile() {
  return <AppShell section="My Profile">
    <div className="demo-page-heading"><div><p className="demo-overline">YOUR STORY, IN ONE PLACE</p><h1>My profile<span>.</span></h1><p>A little introduction to the person behind the tag.</p></div><Link href={currentProfilePath} className="demo-button">View public profile<ArrowUpRightIcon size={18} /></Link></div>
    <div className="account-grid"><section className="demo-panel account-details"><div className="account-identity"><span className="demo-avatar large">{campus.initials}</span><div><h2>{campus.name}</h2><p>{campus.role}</p><span>{campus.location}</span></div></div><p className="account-bio">{campus.bio}</p><dl className="account-facts"><div><dt>Education</dt><dd><strong>{campus.school}</strong><span>{campus.degree} · {campus.years}</span></dd></div><div><dt>Interested in</dt><dd>{campus.availability}. Design internships, thoughtful collaborations, and community projects.</dd></div><div><dt>Email</dt><dd>{campus.email}</dd></div><div><dt>Public profile</dt><dd><Link className="account-public-url" href={currentProfilePath}>{publicProfileUrl(currentProfilePath)}</Link></dd></div></dl><h3 className="account-skills-heading">Things in my toolkit</h3><div className="account-skills">{campus.skills.map(skill => <span key={skill}>{skill}</span>)}</div><ProfileActions path={currentProfilePath} name={campus.name} role={campus.role} /><p className="read-only-note">This demo account has fixed details. Profile editing is not available.</p></section>
    <aside className="demo-panel account-design"><div className="panel-topline"><span>Your current design</span><span className="demo-chip">Current</span></div><TemplateThumbnail template={currentProfile.template} /><h2>Campus Notes</h2><p>Student · University</p><Link href="/templates" className="demo-button secondary">Browse templates<ArrowUpRightIcon size={17} /></Link></aside></div>
  </AppShell>;
}
