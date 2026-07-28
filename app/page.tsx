import Image from "next/image";
import Link from "next/link";
import { seoPages, serviceAreas } from "@/lib/site-data";

const featured = [
  "virtuves-iekartas-pec-pasutijuma",
  "virtuves-dizains-un-projektesana",
  "virtuves-izgatavosana",
  "virtuves-uzstadisana",
];

export default function Home() {
  return (
    <>
      <section className="home-hero technical-frame">
        <div className="hero-copy">
          <p className="eyebrow">Individuāli risinājumi</p>
          <h1>Virtuves pēc pasūtījuma, radītas tieši jūsu telpai</h1>
          <p className="lead">
            Projektēšana, izgatavošana, piegāde un uzstādīšana — pārdomāts
            risinājums no pirmās sarunas līdz gatavai virtuvei.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/kontakti/">
              Pieteikt konsultāciju <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/ka-mes-stradajam/">
              Apskatīt procesu <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <figure className="hero-image">
          <Image
            src="/images/hero-kitchen.webp"
            alt="Ilustratīvs ozolkoka atvilktnes, gaišas darba virsmas un zaļas virtuves fasādes tuvplāns"
            width={1586}
            height={992}
            priority
          />
          <figcaption>Ilustratīvs materiālu un galdniecības detaļu attēls.</figcaption>
        </figure>
      </section>

      <section className="process-strip" aria-label="Pakalpojuma posmi">
        {["Projektēšana", "Izgatavošana", "Piegāde", "Uzstādīšana"].map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </section>

      <section className="intro-grid section-pad">
        <div>
          <p className="eyebrow">Viens saskaņots process</p>
          <h2>Virtuve nav atsevišķu detaļu saraksts.</h2>
        </div>
        <div>
          <p className="large-copy">
            Tā ir telpa, kur skapju izmēri, darba zonas, materiāli un uzstādīšana
            darbojas kopā. Tāpēc katru projektu sākam ar telpu un vajadzībām,
            nevis gatavu komplektu.
          </p>
          <Link className="text-link" href="/virtuves-iekartas-pec-pasutijuma/">
            Uzzināt par virtuves iekārtu <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="service-grid section-pad">
        <div className="section-heading">
          <p className="eyebrow">Pakalpojuma daļas</p>
          <h2>No plāna līdz precīzai uzstādīšanai</h2>
        </div>
        <div className="cards-grid">
          {seoPages
            .filter((page) => featured.includes(page.slug))
            .map((page, index) => (
              <Link className="service-card" href={`/${page.slug}/`} key={page.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <b aria-hidden="true">→</b>
              </Link>
            ))}
        </div>
      </section>

      <section className="image-story section-pad">
        <figure>
          <Image
            src="/images/planning-materials.webp"
            alt="Ilustratīvi virtuves plāni un materiālu paraugi"
            width={1448}
            height={1086}
          />
          <figcaption>Ilustratīvs plānošanas attēls; tas nav klienta projekts.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">Plānošana pirms ražošanas</p>
          <h2>Lēmumi, kurus var izskaidrot</h2>
          <p>
            Plānojumam jāatbild uz praktiskiem jautājumiem: kur notiks
            sagatavošana, kas jāglabā rokas stiepiena attālumā un kā atvērsies
            katrs elements.
          </p>
          <Link className="button" href="/virtuves-planosana/">
            Par virtuves plānošanu <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="topic-index section-pad">
        <div className="section-heading">
          <p className="eyebrow">Izpētīt risinājumus</p>
          <h2>Atsevišķs ceļvedis katram svarīgajam lēmumam</h2>
        </div>
        <div className="topic-list">
          {seoPages.map((page, index) => (
            <Link href={`/${page.slug}/`} key={page.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{page.title}</strong>
              <small>{page.primaryKeyword}</small>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="areas-section section-pad">
        <div>
          <p className="eyebrow">Apkalpošanas teritorija</p>
          <h2>Strādājam Rīgā un apkārtējos novados un pilsētās</h2>
        </div>
        <div className="area-list">
          {serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <p className="eyebrow">Jūsu telpa ir sākuma punkts</p>
        <h2>Pastāstiet, kādu virtuvi plānojat.</h2>
        <p>
          Precīzi izmēri un piedāvājuma detaļas tiks saskaņotas individuāli.
          Vietnē neizmantojam izdomātas cenas, termiņus vai garantijas.
        </p>
        <Link className="button button-light" href="/kontakti/">
          Sagatavot pieprasījumu <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
