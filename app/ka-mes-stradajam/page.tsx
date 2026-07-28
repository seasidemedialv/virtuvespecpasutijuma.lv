import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Kā mēs strādājam",
  description: "Virtuves pēc pasūtījuma procesa galvenie posmi no vajadzību izpētes līdz piegādei un uzstādīšanai.",
  alternates: { canonical: "/ka-mes-stradajam/" },
};

const steps = [
  ["Saruna un informācija", "Noskaidrojam telpu, vajadzības, prioritātes un pieejamo sākuma informāciju."],
  ["Plānošana un projektēšana", "Izstrādājam telpai un lietošanai atbilstošu risinājumu. Konkrētie nodevumi tiek fiksēti piedāvājumā."],
  ["Komplektācijas saskaņošana", "Pirms izgatavošanas saskaņo konstrukciju, materiālus un furnitūru, kas faktiski ir pieejama."],
  ["Izgatavošana", "Virtuves detaļas sagatavo pēc apstiprināta projekta un pārbaudītiem izmēriem."],
  ["Piegāde un uzstādīšana", "Komplektāciju piegādā un uzstāda saskaņotajā apjomā, piesaistot to reālajai telpai."],
  ["Pārbaude", "Noslēgumā pārbauda atvērumus, regulējumus un saskaņotā darba izpildi."],
];

export default function ProcessPage() {
  return (
    <InfoPage
      eyebrow="Pārskatāms process"
      title="No pirmās sarunas līdz uzstādītai virtuvei"
      intro="Precīzs process katram projektam var atšķirties, taču svarīgākie lēmumi jāpieņem pareizā secībā."
    >
      <div className="numbered-list">
        {steps.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <aside className="fact-box">
        <h2>Kas vēl jāapstiprina</h2>
        <p>
          Uzmērīšanas kārtība, projekta formāts, labojumu skaits, ražošanas laiks,
          garantijas nosacījumi un saistīto darbu atbildība tiks publicēta pēc
          uzņēmuma faktu apstiprināšanas.
        </p>
      </aside>
    </InfoPage>
  );
}
