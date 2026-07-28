import Link from "next/link";

export function InfoPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="simple-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </section>
      <section className="prose-shell">{children}</section>
      <section className="cta-panel">
        <p className="eyebrow">Nākamais solis</p>
        <h2>Sāksim ar pārbaudāmu informāciju.</h2>
        <p>
          Sagatavojiet telpas plānu, izmērus vai fotogrāfijas, ja tās ir pieejamas.
          Konkrēto darba apjomu precizēsim pirms vienošanās.
        </p>
        <Link className="button button-light" href="/kontakti/">
          Sagatavot pieprasījumu <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
