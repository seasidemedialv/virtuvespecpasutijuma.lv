import Link from "next/link";
import { LeadSection } from "@/components/template-shell";

export function InfoPage({ eyebrow, title, intro, children, showLead = true }: { eyebrow: string; title: string; intro: string; children: React.ReactNode; showLead?: boolean }) {
  return (
    <>
      <section className="page-hero"><div className="container"><nav className="breadcrumb"><Link href="/">Sākumlapa</Link> · {title}</nav><span className="section-label">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section>
      <section className="section"><div className="container article-copy">{children}</div></section>
      {showLead && <LeadSection />}
    </>
  );
}
