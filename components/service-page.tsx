import Image from "next/image";
import Link from "next/link";
import type { SeoPage } from "@/lib/site-data";

const imageMap = {
  planning: {
    src: "/images/planning-materials.webp",
    alt: "Ilustratīvs virtuves plānošanas materiālu un rasējumu skats",
  },
  installation: {
    src: "/images/installation-detail.webp",
    alt: "Ilustratīvs virtuves skapja furnitūras regulēšanas skats",
  },
};

export function ServicePage({ page }: { page: SeoPage }) {
  const image = page.image ? imageMap[page.image] : imageMap.planning;

  return (
    <>
      <section className="page-hero technical-frame">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="lead">{page.intro}</p>
          <div className="hero-actions">
            <Link className="button" href="/kontakti/">
              Pārrunāt savu virtuvi <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/ka-mes-stradajam/">
              Apskatīt procesu <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <figure className="editorial-image">
          <Image src={image.src} alt={image.alt} width={1448} height={1086} priority />
          <figcaption>Ilustratīvs procesa un materiālu attēls.</figcaption>
        </figure>
      </section>

      <section className="keyword-note" aria-label="Lapas tēma">
        <span>Galvenā tēma</span>
        <strong>{page.primaryKeyword}</strong>
        {page.supportingKeywords.length > 0 && (
          <p>{page.supportingKeywords.join(" · ")}</p>
        )}
      </section>

      <section className="content-sections">
        {page.sections.map((section, index) => (
          <article className="content-row" key={section.title}>
            <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
            <h2>{section.title}</h2>
            <div>
              <p>{section.text}</p>
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="faq-section">
        <div>
          <p className="eyebrow">Praktiski jautājumi</p>
          <h2>Biežāk jautātais</h2>
        </div>
        <div className="faq-list">
          {page.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <p className="eyebrow">Nākamais solis</p>
        <h2>Sāksim ar telpu, vajadzībām un prioritātēm.</h2>
        <p>
          Sagatavojiet telpas izmērus, plānu vai fotogrāfijas, ja tās ir pieejamas.
          Precīzu darba apjomu vienosimies pirms projekta sākuma.
        </p>
        <Link className="button button-light" href="/kontakti/">
          Sagatavot pieprasījumu <span aria-hidden="true">→</span>
        </Link>
      </section>
    </>
  );
}
