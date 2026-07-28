import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://virtuvespecpasutijuma.lv"),
  title: {
    default: "Virtuves pēc pasūtījuma",
    template: "%s | Virtuves pēc pasūtījuma",
  },
  description:
    "Projektējam, izgatavojam, piegādājam un uzstādām virtuves pēc pasūtījuma, pielāgojot tās telpai un vajadzībām.",
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    locale: "lv_LV",
    type: "website",
    siteName: "Virtuves pēc pasūtījuma",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv">
      <body>
        <a className="skip-link" href="#saturs">
          Pāriet uz saturu
        </a>
        <SiteHeader />
        <main id="saturs">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
