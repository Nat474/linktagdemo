import Image from "next/image";
import BrandLogo from "../BrandLogo";
import { qrAssets } from "@/data/directory";

export default function Keychain({ small = false }: { small?: boolean }) {
  return <div className={`keychain-scene${small ? " keychain-small" : ""}`} role="img" aria-label="Demo Linktag keychain, green front with Linktag Pro logo and ivory back with Jamie Park’s scannable QR code">
    <div className="keychain-face keychain-front"><span className="keychain-hole" /><BrandLogo /><span>A small tag.<br />A real connection.</span></div>
    <div className="keychain-face keychain-back"><span className="keychain-hole" /><Image src={qrAssets.svg} alt="" width={180} height={180} unoptimized /><strong>JAMIE PARK</strong><span>Scan. Say hello.</span></div>
  </div>;
}
