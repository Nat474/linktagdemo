import type { Metadata } from "next";
import { Outfit, DM_Serif_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./designs.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const editorial = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-editorial" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "Mara Ellis · Linktag",
  description: "Meet Mara Ellis, an independent brand and digital designer. A fictional Linktag profile demo.",
  applicationName: "Linktag",
  robots: { index: false, follow: false },
};

// Apply the saved theme before paint. This demo's storage stays separate from Monovyn.
const initializeTheme = `try { document.documentElement.dataset.theme = localStorage.getItem("linktagdemo-theme") === "dark" ? "dark" : "light"; } catch { document.documentElement.dataset.theme = "light"; }`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body className={`${outfit.variable} ${editorial.variable} ${grotesk.variable}`}>{children}</body>
    </html>
  );
}
