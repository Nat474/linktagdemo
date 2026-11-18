import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr/ArrowDown";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import AppShell from "@/components/demo/AppShell";
import Keychain from "@/components/demo/Keychain";
import ProfileActions from "@/components/ProfileActions";
import { currentProfile, currentProfilePath, publicProfileUrl, qrAssets } from "@/data/directory";
import demo from "@/data/demo.json";

export const metadata: Metadata = { title: "My Keychain · Linktag", description: "Jamie Park’s demo keychain, real scannable QR, and downloadable artwork." };

export default function MyKeychain() {
  const { identity } = currentProfile.template;
  return <AppShell section="My Keychain">
    <div className="demo-page-heading"><div><p className="demo-overline">TAKE YOUR STORY WITH YOU</p><h1>Small tag. Real connection<span>.</span></h1><p>One scan is all it takes to meet the person behind the keychain.</p></div><span className="demo-chip">Demo keychain</span></div>
    <div className="keychain-page-grid"><section className="keychain-showcase"><Keychain /><div className="keychain-caption"><span>THE FRONT</span><span>THE INTRODUCTION</span></div><p>A physical idea. A working digital introduction.</p></section><section className="demo-panel keychain-information"><div className="panel-topline"><span>Your Linktag</span><span className="demo-chip">Demo sample</span></div><h2>Jamie’s everyday plus-one.</h2><p>A pocket-sized way to share the things that make you, you.</p><dl><div><dt>Profile</dt><dd>{identity.name}</dd></div><div><dt>Design</dt><dd>{currentProfile.template.title}</dd></div><div><dt>Sample ID</dt><dd>{demo.keychainId}</dd></div></dl><div className="keychain-destination"><span>THIS QR OPENS</span><Link href={currentProfilePath}>{publicProfileUrl(currentProfilePath)}<ArrowUpRightIcon size={17} /></Link></div><ProfileActions path={currentProfilePath} name={identity.name} role={identity.role} /><div className="qr-downloads"><a className="demo-button" href={qrAssets.png} download="jamie-park-qr.png"><ArrowDownIcon size={17} />Download QR · PNG</a><a className="demo-button secondary" href={qrAssets.svg} download="jamie-park-qr.svg">SVG artwork<ArrowDownIcon size={16} /></a></div><p className="read-only-note">Illustrative keychain, real QR. No physical hardware has been paired or activated.</p></section></div>
    <section className="scan-instructions"><h2>A hello in three little steps.</h2><ol><li><span>01</span><h3>Open your camera</h3><p>Point your phone’s camera at the QR on the back.</p></li><li><span>02</span><h3>Tap the link</h3><p>Your browser opens Jamie’s public Linktag profile.</p></li><li><span>03</span><h3>Meet Jamie</h3><p>Discover the studies, projects, and ideas behind the name.</p></li></ol></section>
  </AppShell>;
}
