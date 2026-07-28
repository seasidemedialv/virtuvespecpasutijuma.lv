import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { seoPages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Biežāk uzdotie jautājumi par virtuvēm pēc pasūtījuma",
  description: "Atbildes par virtuves plānošanu, projektēšanu, izgatavošanu, cenām, piegādi un uzstādīšanu.",
  alternates: { canonical: "/buj/" },
};

const general = [
  ["Ar ko sākt virtuves pasūtījumu?","Sagatavojiet telpas plānu vai izmērus, fotogrāfijas, tehnikas ieceri un svarīgākās ikdienas vajadzības."],
  ["Kāpēc vietnē nav publicēta viena cena?","Virtuves cenu nosaka izmēri, konstrukcija, fasādes, darba virsma, furnitūra un darbu apjoms. Neapstiprinātus cenu diapazonus nepublicējam."],
  ["Vai pakalpojums ietver piegādi un uzstādīšanu?","Jā. Apstiprinātais piedāvājums ietver projektēšanu, izgatavošanu, piegādi un uzstādīšanu."],
  ["Vai iespējams pasūtīt tikai montāžu?","Šāda iespēja nav apstiprināta. Uzstādīšanas saturs pašlaik attiecas uz mūsu izgatavotajām virtuvēm."],
  ["Kādi materiāli un zīmoli tiek piedāvāti?","Precīzs klāsts vēl nav apstiprināts publicēšanai. Izvēles tiek fiksētas konkrētā projekta piedāvājumā."],
  ["Cik ilga ir izgatavošana?","Termiņš atkarīgs no projekta un darba noslodzes; vietnē netiek dots nepārbaudīts universāls solījums."],
];

export default function FaqPage() {
  return (
    <InfoPage eyebrow="BUJ" title="Biežāk uzdotie jautājumi" intro="Praktiskas atbildes par virtuves projektu, cenu veidošanos, materiālu izvēli un darba secību.">
      <div className="faq-list">
        {general.map(([q,a])=><details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}
        {seoPages.slice(0,6).map((page)=><details className="faq-item" key={page.faq[0].question}><summary>{page.faq[0].question}</summary><p>{page.faq[0].answer}</p></details>)}
      </div>
    </InfoPage>
  );
}
