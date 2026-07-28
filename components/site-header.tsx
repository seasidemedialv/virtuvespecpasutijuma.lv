import Link from "next/link";

const nav = [
  { href: "/virtuves-iekartas-pec-pasutijuma/", label: "Pakalpojumi" },
  { href: "/ka-mes-stradajam/", label: "Process" },
  { href: "/virtuves-cenas/", label: "Cenas" },
  { href: "/realizetie-projekti/", label: "Projekti" },
  { href: "/kontakti/", label: "Kontakti" },
];

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Virtuves pēc pasūtījuma — sākumlapa">
      <svg className="brand-mark" viewBox="0 0 52 52" aria-hidden="true">
        <path d="M3 3h46v46H3zM3 3l46 46M49 3 3 49M25.8 25.8V49M25.8 38H49" />
      </svg>
      <span>Virtuves pēc pasūtījuma</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Logo />
      <nav className="desktop-nav" aria-label="Galvenā navigācija">
        {nav.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="button button-small header-cta" href="/kontakti/">
        Pieteikt konsultāciju <span aria-hidden="true">→</span>
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Atvērt navigāciju">Izvēlne</summary>
        <nav aria-label="Mobilā navigācija">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
