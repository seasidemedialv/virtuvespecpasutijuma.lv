import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { LeadForm } from "@/components/template-shell";

export const metadata: Metadata = {
  title: "Kontakti un virtuves pieprasījums",
  description: "Informācija, ko sagatavot sarunai par virtuvi pēc pasūtījuma.",
  alternates: { canonical: "/kontakti/" },
};

export default function ContactPage() {
  return (
    <InfoPage showLead={false}
      eyebrow="Sagatavoties sarunai"
      title="Pastāstiet par savu ieceri"
      intro="Kontaktinformācija un pieteikuma saņēmējs vēl jāapstiprina. Līdz tam varat sagatavot informāciju, kas palīdzēs sākt precīzu sarunu."
    >
      <div className="grid-2">
        <div className="card">
          <h2>Noderīga sākuma informācija</h2>
          <ul>
            <li>Projekta atrašanās vieta</li>
            <li>Telpas plāns, aptuvenie izmēri vai fotogrāfijas</li>
            <li>Vēlamais plānojums un svarīgākās vajadzības</li>
            <li>Esošais remonta vai būvniecības posms</li>
            <li>Jautājumi par materiāliem, glabāšanu un darba zonām</li>
          </ul>
        </div>
        <aside className="card">
          <span className="section-label">Demonstrācijas forma</span>
          <h2>Pieprasījuma struktūra</h2>
          <p>
            Pieteikuma forma tiks pieslēgta pēc saņēmēja, datu apstrādes,
            piekrišanas teksta un kļūdu scenāriju apstiprināšanas.
          </p>
          <LeadForm />
        </aside>
      </div>
    </InfoPage>
  );
}
