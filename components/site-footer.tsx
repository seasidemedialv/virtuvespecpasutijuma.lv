import Link from "next/link";
import { serviceAreas } from "@/lib/site-data";
import { Logo } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Logo />
          <p className="footer-statement">
            Projektējam, izgatavojam, piegādājam un uzstādām virtuves pēc pasūtījuma.
          </p>
        </div>
        <div>
          <p className="footer-label">Izpētīt</p>
          <Link href="/virtuves-dizains-un-projektesana/">Dizains un projektēšana</Link>
          <Link href="/virtuves-izgatavosana/">Izgatavošana</Link>
          <Link href="/virtuves-planosana/">Plānošana</Link>
          <Link href="/virtuves-uzstadisana/">Uzstādīšana</Link>
        </div>
        <div>
          <p className="footer-label">Informācija</p>
          <Link href="/ka-mes-stradajam/">Kā mēs strādājam</Link>
          <Link href="/realizetie-projekti/">Projekti</Link>
          <Link href="/par-mums/">Par mums</Link>
          <Link href="/kontakti/">Kontakti</Link>
        </div>
      </div>
      <div className="service-area-block">
        <p className="footer-label">Apkalpošanas teritorija</p>
        <p>{serviceAreas.join(" · ")}</p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Virtuves pēc pasūtījuma</span>
        <Link href="/privatuma-politika/">Privātuma politika</Link>
      </div>
    </footer>
  );
}
