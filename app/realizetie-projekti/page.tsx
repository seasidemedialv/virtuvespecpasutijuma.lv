import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Realizētie virtuves projekti",
  description: "Vieta pārbaudītiem virtuves projektiem ar reāliem attēliem, materiāliem un risinājumu aprakstiem.",
  alternates: { canonical: "/realizetie-projekti/" },
};

export default function ProjectsPage() {
  return (
    <InfoPage
      eyebrow="Pierādījumi, nevis dekorācija"
      title="Realizētie projekti"
      intro="Šeit tiks publicēti tikai reāli darbi ar atļauju izmantot attēlus un pārbaudāmu informāciju."
    >
      <div className="empty-state">
        <span>Projektu arhīvs tiek sagatavots</span>
        <h2>Neizmantosim izdomātus portfolio piemērus.</h2>
        <p>
          Katram publicētam projektam būs savs telpas uzdevums, plānojuma
          skaidrojums, materiālu informācija un attēli. Cenas, termiņi un klienta
          atsauksme tiks norādīta tikai tad, ja tie būs apstiprināti publicēšanai.
        </p>
      </div>
    </InfoPage>
  );
}
