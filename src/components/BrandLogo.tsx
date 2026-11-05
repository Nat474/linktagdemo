import Image from "next/image";
import logo from "../../public/images/brand/linktagpro-logo.png";

export default function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <Image src={logo} alt="Linktag Pro" className={`brand-logo${footer ? " brand-logo-footer" : ""}`} sizes={footer ? "86px" : "(max-width: 767px) 108px, 132px"} priority={!footer} />;
}
