import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
