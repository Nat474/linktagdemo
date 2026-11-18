"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SquaresFourIcon } from "@phosphor-icons/react/SquaresFour";
import { UserCircleIcon } from "@phosphor-icons/react/UserCircle";
import { TagIcon } from "@phosphor-icons/react/Tag";
import { CompassIcon } from "@phosphor-icons/react/Compass";
import { LayoutIcon } from "@phosphor-icons/react/Layout";

const links = [
  { href: "/dashboard", label: "Dashboard", short: "Home", icon: SquaresFourIcon },
  { href: "/dashboard/profile", label: "My Profile", short: "Profile", icon: UserCircleIcon },
  { href: "/dashboard/keychain", label: "My Keychain", short: "Keychain", icon: TagIcon },
  { href: "/explore", label: "Explore", short: "Explore", icon: CompassIcon },
  { href: "/templates", label: "Templates", short: "Templates", icon: LayoutIcon },
];

export default function AppNav({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  return <nav className={mobile ? "demo-mobile-nav" : "demo-nav"} aria-label={mobile ? "Mobile application" : "Application"}>
    {links.map(({ href, label, short, icon: Icon }) => {
      const active = pathname === href || (href === "/templates" && pathname.startsWith("/templates/"));
      return <Link href={href} key={href} aria-current={active ? "page" : undefined} aria-label={label}><Icon size={22} weight={active ? "fill" : "regular"} /><span>{mobile ? short : label}</span></Link>;
    })}
  </nav>;
}
