import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Privātuma politika",
  description: "Privātuma politikas sagatavošanas statuss.",
  alternates: { canonical: "/privatuma-politika/" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Juridiskais saturs"
      title="Privātuma politika"
      intro="Pilna privātuma politika tiks publicēta pēc juridiskā operatora, kontaktinformācijas, datu apstrādes nolūku un izmantoto pakalpojumu apstiprināšanas."
    >
      <div className="fact-box">
        <h2>Pirms publiskas palaišanas</h2>
        <p>
          Jānorāda datu pārzinis, saziņas informācija, apstrādātie dati,
          juridiskais pamats, glabāšanas termiņi, saņēmēji, sīkdatnes un lietotāja
          tiesību īstenošanas kārtība. Šos faktus nedrīkst izdomāt.
        </p>
      </div>
    </InfoPage>
  );
}
