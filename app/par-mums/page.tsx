import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Par mums",
  description: "Par virtuves pēc pasūtījuma pakalpojumu un apstiprināto darba apjomu.",
  alternates: { canonical: "/par-mums/" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="Ko varam apgalvot šobrīd"
      title="Par virtuves pēc pasūtījuma pakalpojumu"
      intro="Mēs projektējam, izgatavojam, piegādājam un uzstādām individuālas virtuves, kas pielāgotas klienta mājoklim un vajadzībām."
    >
      <div className="two-column-copy">
        <article>
          <h2>Pilns pamatprocess</h2>
          <p>
            Piedāvājums aptver virtuves risinājuma projektēšanu, izgatavošanu,
            piegādi un uzstādīšanu. Precīzs konkrētā projekta darbu saraksts tiek
            saskaņots atsevišķi.
          </p>
        </article>
        <article>
          <h2>Fakti pirms solījumiem</h2>
          <p>
            Vietne nepublicē nepārbaudītu pieredzes gadu skaitu, sertifikātus,
            garantijas, termiņus, cenu diapazonus vai klientu atsauksmes.
          </p>
        </article>
      </div>
      <div className="fact-box">
        <h2>Apkalpošanas teritorija</h2>
        <p>{serviceAreas.join(", ")}.</p>
      </div>
    </InfoPage>
  );
}
