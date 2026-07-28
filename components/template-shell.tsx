import Link from "next/link";
import { serviceAreas } from "@/lib/site-data";

const mainServices = [
  ["Virtuves iekārtas", "/virtuves-iekartas-pec-pasutijuma/"],
  ["Projektēšana", "/virtuves-dizains-un-projektesana/"],
  ["Plānošana", "/virtuves-planosana/"],
  ["Izgatavošana", "/virtuves-izgatavosana/"],
  ["Uzstādīšana", "/virtuves-uzstadisana/"],
  ["Cenas", "/virtuves-cenas/"],
];

export function Brand() {
  return (
    <Link className="header-logo" href="/" aria-label="Virtuves pēc pasūtījuma — sākumlapa">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M4 4h40v40H4zM4 4l40 40M44 4 4 44M24 24v20M24 34h20" />
      </svg>
      <span>Virtuves pēc pasūtījuma</span>
    </Link>
  );
}

export function TemplateHeader() {
  return (
    <>
      <div className="ann-bar">Individuāli projektētas, izgatavotas, piegādātas un uzstādītas virtuves</div>
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <Brand />
          <nav className="main-nav" aria-label="Galvenā navigācija">
            <div className="nav-drop">
              <Link href="/virtuves-iekartas-pec-pasutijuma/">Pakalpojumi ▾</Link>
              <div className="drop-menu">
                {mainServices.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
              </div>
            </div>
            <Link href="/ka-mes-stradajam/">Process</Link>
            <Link href="/virtuves-cenas/">Cenas</Link>
            <Link href="/buj/">BUJ</Link>
            <Link href="/par-mums/">Par mums</Link>
          </nav>
          <Link className="btn btn-primary header-cta" href="/kontakti/">Pieteikt konsultāciju</Link>
          <button className="mob-btn" id="mobBtn" aria-label="Atvērt izvēlni" aria-expanded="false">
            <span /><span /><span />
          </button>
        </div>
        <nav className="mob-nav" id="mobNav" aria-label="Mobilā navigācija">
          {mainServices.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/ka-mes-stradajam/">Kā mēs strādājam</Link>
          <Link href="/buj/">Biežākie jautājumi</Link>
          <Link className="btn btn-primary" href="/kontakti/">Pieteikt konsultāciju</Link>
        </nav>
      </header>
    </>
  );
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "lead-form compact-form" : "lead-form"} data-demo-form>
      <div className="form-grid">
        <label>Vārds<input name="name" autoComplete="name" /></label>
        <label>Tālrunis<input name="phone" type="tel" autoComplete="tel" placeholder="+371" /></label>
        <label>Apkalpošanas vieta
          <select name="area" defaultValue="">
            <option value="" disabled>Izvēlieties vietu</option>
            {serviceAreas.map((area) => <option key={area}>{area}</option>)}
          </select>
        </label>
        <label>Interesē
          <select name="service" defaultValue="">
            <option value="" disabled>Izvēlieties tēmu</option>
            {mainServices.map(([label]) => <option key={label}>{label}</option>)}
            <option>Cits jautājums</option>
          </select>
        </label>
        {!compact && <label className="full">Projekta apraksts<textarea name="message" rows={4} placeholder="Telpas izmēri, plānojuma iecere un galvenās vajadzības" /></label>}
      </div>
      <button className="form-submit" type="submit">Sagatavot konsultācijas pieprasījumu →</button>
      <p className="form-note">Demonstrācijas forma. Tā vēl nenosūta datus, jo saņēmējs un privātuma process nav apstiprināts.</p>
    </form>
  );
}

export function LeadSection({ title = "Pastāstiet par savu ieceri" }: { title?: string }) {
  return (
    <section className="lf-section" id="lead-form">
      <div className="container">
        <div className="section-header inverse">
          <span className="section-label">Konsultācijas pieprasījums</span>
          <h2>{title}</h2>
          <p>Sagatavojiet telpas izmērus, plānu vai fotogrāfijas. Konkrēto apjomu precizēsim pirms vienošanās.</p>
        </div>
        <div className="lf-card"><LeadForm /></div>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  const steps = [
    ["1", "Vajadzību un telpas izpēte", "Apkopojam telpas informāciju, ikdienas paradumus, prioritātes un vēlamo rezultātu."],
    ["2", "Plānojums un projektēšana", "Saskaņojam darba zonas, moduļus, atvērumus, materiālu virzienu un tehniskos nosacījumus."],
    ["3", "Izgatavošana", "Virtuve tiek izgatavota pēc apstiprināta projekta un pārbaudītas komplektācijas."],
    ["4", "Piegāde un uzstādīšana", "Moduļus piegādājam, uzstādām, līmeņojam un pārbaudām mehānismu darbību."],
  ];
  return (
    <div className="process-list">
      {steps.map(([n, title, text]) => (
        <div className="process-step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>
      ))}
    </div>
  );
}

export function TemplateFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Brand /><p>Virtuves pēc pasūtījuma — projektēšana, izgatavošana, piegāde un uzstādīšana.</p></div>
        <div><h3>Pakalpojumi</h3>{mainServices.slice(0, 5).map(([l,h]) => <Link href={h} key={h}>{l}</Link>)}</div>
        <div><h3>Informācija</h3><Link href="/ka-mes-stradajam/">Process</Link><Link href="/buj/">BUJ</Link><Link href="/par-mums/">Par mums</Link><Link href="/kontakti/">Kontakti</Link></div>
        <div><h3>Juridiskā informācija</h3><Link href="/privatuma-politika/">Privātuma politika</Link><p>Uzņēmuma rekvizīti: tiks pievienoti pēc apstiprināšanas.</p></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Virtuves pēc pasūtījuma</span><span>Priekšskatījums · noindex</span></div>
    </footer>
  );
}
