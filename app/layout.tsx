import type { Metadata } from "next";
import "./template.css";
import { TemplateFooter, TemplateHeader } from "@/components/template-shell";

const publicBasePath =
  process.env.GITHUB_PAGES === "true"
    ? process.env.GITHUB_PAGES_BASE_PATH ?? "/virtuvespecpasutijuma.lv"
    : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://virtuvespecpasutijuma.lv"),
  title: {
    default: "Virtuves pēc pasūtījuma",
    template: "%s | Virtuves pēc pasūtījuma",
  },
  description:
    "Projektējam, izgatavojam, piegādājam un uzstādām virtuves pēc pasūtījuma, pielāgojot tās telpai un vajadzībām.",
  alternates: { canonical: "/" },
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
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
        <TemplateHeader />
        <main id="saturs">{children}</main>
        <TemplateFooter />
        <script src={`${publicBasePath}/script.js`} defer />
      </body>
    </html>
  );
}
