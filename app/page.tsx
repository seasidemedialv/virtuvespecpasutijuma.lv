import Image from "next/image";
import Link from "next/link";
import { LeadForm, LeadSection, ProcessSteps } from "@/components/template-shell";
import { seoPages, serviceAreas } from "@/lib/site-data";

const featuredSlugs = [
  "virtuves-iekartas-pec-pasutijuma",
  "virtuves-dizains-un-projektesana",
  "virtuves-planosana",
  "virtuves-izgatavosana",
  "virtuves-uzstadisana",
  "virtuves-cenas",
];

export default function Home() {
  const featured = seoPages.filter((page) => featuredSlugs.includes(page.slug));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Virtuves pēc pasūtījuma",
    url: "https://virtuvespecpasutijuma.lv/",
    inLanguage: "lv-LV",
    description:
      "Virtuves pēc pasūtījuma: projektēšana, izgatavošana, piegāde un uzstādīšana.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">Individuāli risinājumi mājoklim</span>
            <h1><span>Virtuves pēc pasūtījuma</span> no projekta līdz uzstādīšanai</h1>
            <p className="hero-sub">Projektējam, izgatavojam, piegādājam un uzstādām virtuves, kas pielāgotas konkrētajai telpai un cilvēku ikdienas vajadzībām.</p>
            <div className="hero-feats">
              {[
                "Plānojums veidots pēc telpas un lietošanas paradumiem",
                "Viena saskaņota pieeja projektēšanai un izgatavošanai",
                "Piegāde un uzstādīšana ir daļa no kopējā procesa",
                "Bez izdomātām cenām, termiņiem vai garantiju solījumiem",
              ].map((text) => <div className="hero-feat" key={text}><b>✓</b><span>{text}</span></div>)}
            </div>
            <div className="hero-actions"><Link className="btn btn-primary" href="/kontakti/">Pieteikt konsultāciju</Link><Link className="btn btn-outline" href="/ka-mes-stradajam/">Apskatīt procesu</Link></div>
            <div className="hero-trust">
              <div><strong>4 posmi</strong><span>projektēšana līdz uzstādīšanai</span></div>
              <div><strong>16 ceļveži</strong><span>atsevišķiem virtuves lēmumiem</span></div>
              <div><strong>20 vietas</strong><span>apstiprināta apkalpošanas teritorija</span></div>
            </div>
          </div>
          <div className="hero-form-card"><h2>Sagatavot konsultācijas pieprasījumu</h2><p>Norādiet ieceri un vietu. Forma priekšskatījumā datus nenosūta.</p><LeadForm compact /></div>
        </div>
      </section>

      <div className="trust-bar"><div className="container trust-bar-inner"><span>Projektēšana</span><span>Izgatavošana</span><span>Piegāde</span><span>Uzstādīšana</span></div></div>

      <section className="section alt">
        <div className="container">
          <div className="section-header"><span className="section-label">Pakalpojumu sistēma</span><h2>Viss, kas vajadzīgs pārdomātai virtuvei</h2><p>Katra tēma ved uz atsevišķu, detalizētu lapu ar savu meklēšanas nolūku un praktisku uzdevumu.</p></div>
          <div className="grid-3">
            {featured.map((page, index) => (
              <article className="service-card" key={page.slug}>
                <Image src={index % 2 ? "/images/planning-materials.webp" : "/images/installation-detail.webp"} alt={`Ilustratīvs attēls tēmai “${page.title}”`} width={800} height={500} />
                <div className="service-card-body"><h3>{page.title}</h3><p>{page.description}</p><Link href={`/${page.slug}/`}>Lasīt ceļvedi →</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band"><div className="container stats-grid"><div><strong>Telpa</strong><span>reālie izmēri un ierobežojumi</span></div><div><strong>Ikdiena</strong><span>darba zonas un glabāšana</span></div><div><strong>Komplektācija</strong><span>materiāli un mehānismi</span></div><div><strong>Montāža</strong><span>piegāde un gala regulēšana</span></div></div></section>

      <section className="section">
        <div className="container grid-2">
          <div><span className="section-label">Darba process</span><h2 style={{margin:".6rem 0 1.5rem"}}>No sākotnējās informācijas līdz uzstādītai virtuvei</h2><p>Templatei raksturīgais procesa pārklājums saglabāts, bet nezināmi termiņi un solījumi ir izņemti.</p></div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header"><span className="section-label">Plānošanas principi</span><h2>Lēmumi, kas jāpieņem pirms izgatavošanas</h2></div>
          <div className="grid-3">
            {[
              ["Darba zonas", "Produktu glabāšana, sagatavošana, gatavošana un mazgāšana jāskata kā savstarpēji saistīta secība."],
              ["Atvērumi un ejas", "Atvilktnēm, durvīm, tehnikai un cilvēkiem vajadzīga vieta vienlaicīgai lietošanai."],
              ["Materiālu hierarhija", "Fasādes, darba virsma un akcenti jāvērtē kopā ar telpas gaismu un kopējo interjeru."],
              ["Glabāšana", "Skapju iekšējo dalījumu nosaka lietu veids, svars, izmērs un lietošanas biežums."],
              ["Komunikāciju koordinēšana", "Rozetes un pieslēgumu vietas jāsaskaņo ar gala virtuves plānu un atbildīgajiem speciālistiem."],
              ["Uzstādīšanas gatavība", "Telpai jābūt sagatavotai tā, lai montāžas secība nebūtu atkarīga no nepabeigtiem blakus darbiem."],
            ].map(([title,text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header"><span className="section-label">Visi virtuves ceļveži</span><h2>Atsevišķs saturs katram izmērītajam meklēšanas nolūkam</h2></div>
          <div className="topic-list">{seoPages.map((page) => <Link href={`/${page.slug}/`} key={page.slug}><strong>{page.title}</strong><span>→</span></Link>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-header"><span className="section-label">Apkalpošanas teritorija</span><h2>Strādājam Rīgā un apkārtējās pilsētās un novados</h2><p>Šīs ir apstiprinātas darba teritorijas. Atsevišķas lokāciju SEO lapas nav izveidotas, jo izpētē tām nebija izmērāma pieprasījuma.</p></div>
          <div className="area-grid">{serviceAreas.map((area) => <span className="area-chip" key={area}>{area}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div><span className="section-label">Biežākie jautājumi</span><h2 style={{margin:".6rem 0"}}>Kas jāzina pirms sarunas?</h2><p>Nav nepieciešams uzreiz zināt visus materiālus vai precīzu moduļu dalījumu. Noder telpas izmēri, fotogrāfijas un skaidras prioritātes.</p><Link className="text-link" href="/buj/">Skatīt visus jautājumus →</Link></div>
          <div className="faq-list">
            <details className="faq-item"><summary>Ar ko sākt virtuves pasūtījumu?</summary><p>Ar telpas informāciju, vajadzībām, prioritātēm un aptuvenu priekšstatu par vēlamo plānojumu.</p></details>
            <details className="faq-item"><summary>Kāpēc vietnē nav norādīta viena cena?</summary><p>Virtuves izmaksas atkarīgas no konstrukcijas, izmēriem, fasādēm, darba virsmas, furnitūras un uzstādīšanas apjoma.</p></details>
            <details className="faq-item"><summary>Vai tiek nodrošināta arī uzstādīšana?</summary><p>Jā, apstiprinātais pakalpojums ietver mūsu projektētās un izgatavotās virtuves piegādi un uzstādīšanu.</p></details>
          </div>
        </div>
      </section>
      <LeadSection title="Sāksim ar telpu, vajadzībām un prioritātēm" />
    </>
  );
}
