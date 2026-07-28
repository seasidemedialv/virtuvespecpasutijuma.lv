import Link from "next/link";
import { LeadSection, ProcessSteps } from "@/components/template-shell";
import { seoPages, type SeoPage } from "@/lib/site-data";

const enhancements: Record<string, { entities: string[]; decisions: [string,string][]; questions: [string,string][] }> = {
  "virtuves-iekartas-pec-pasutijuma": {entities:["korpusi","fasādes","darba virsma","cokols","furnitūra","augstie moduļi"],decisions:[["Telpas piesaiste","Izmēri, ailes, sienu stāvoklis un komunikācijas nosaka konstrukcijas robežas."],["Komplektācija","Katram modulim jābūt skaidrai funkcijai un vietai kopējā sistēmā."],["Lietošanas ritms","Bieži izmantotās lietas jānovieto sasniedzamās zonās."]],questions:[["Vai iespējams izgatavot nestandarta platuma moduļus?","Individuāla projekta mērķis ir pielāgot moduļus telpai, bet konkrētā konstrukcija jāapstiprina projektā."],["Kas tiek fiksēts pirms izgatavošanas?","Izmēri, moduļu dalījums, izvēlētā komplektācija, atvērumi un uzstādīšanas nosacījumi."]]},
  "virtuves-izgatavosana": {entities:["ražošanas rasējumi","detaļu saraksts","korpusi","malu apstrāde","urbuma vietas","komplektācija"],decisions:[["Apstiprināts projekts","Ražošanu sāk tikai no saskaņotas informācijas."],["Detaļu savietojamība","Korpusi, fasādes un mehānismi jāsagatavo kā viena sistēma."],["Pārbaude pirms piegādes","Komplektāciju salīdzina ar projekta sastāvu."]],questions:[["Vai izmaiņas iespējamas pēc ražošanas sākuma?","Tās var ietekmēt jau sagatavotās detaļas, tāpēc iespējas jāvērtē individuāli."],["Kā mazināt kļūdu risku?","Pirms ražošanas jāpārbauda gala izmēri, atvērumi, komunikāciju vietas un komplektācija."]]},
  "iebuvetas-virtuves": {entities:["nišas","pilna augstuma skapji","sānu pildiņi","tehnikas nišas","griestu pārejas","sienu novirzes"],decisions:[["Nišu izmantošana","Iebūve jāpielāgo faktiskajām nišas plaknēm un piekļuvei."],["Noslēguma detaļas","Pildiņi un paneļi savieno mēbeles ar sienām un griestiem."],["Tehnikas integrācija","Tehnikas izmēri un ventilācijas vajadzības jāzina projektēšanas laikā."]],questions:[["Vai iebūvētā virtuve var noslēpt visas sienu novirzes?","Projektā var paredzēt pārejas, taču reālā risinājuma robežas nosaka uzmērījumi."],["Vai tehniku var izvēlēties vēlāk?","Drošāk ir zināt modeļu izmērus un prasības pirms gala projekta apstiprināšanas."]]},
  "virtuves-cenas": {entities:["korpusu apjoms","fasāžu veids","atvilktnes","darba virsma","mehānismi","piegāde","uzstādīšana"],decisions:[["Salīdzināms apjoms","Piedāvājumos jāsalīdzina ne tikai summa, bet iekļautie materiāli un darbi."],["Prioritātes","Budžetu var sadalīt pēc ikdienas nozīmes, nevis vienādi visiem elementiem."],["Izmaiņu kontrole","Pēc apstiprināšanas veiktas izmaiņas var mainīt cenu."]],questions:[["Vai iespējams saņemt orientējošu cenu bez projekta?","Var pārrunāt cenu veidojošos faktorus, bet uzticamai tāmei vajadzīgi izmēri un komplektācija."],["Kas piedāvājumā jānorāda atsevišķi?","Materiāli, mehānismi, darba virsma, piegāde, uzstādīšana un citi saskaņotie darbi."]]},
  "virtuves-dizains-un-projektesana": {entities:["darba zonas","moduļu ritms","fasāžu dalījums","materiālu palete","gaisma","tehnikas vietas"],decisions:[["Funkcija pirms dekorācijas","Vispirms atrisina kustību, glabāšanu un atvērumus."],["Vizuālā hierarhija","Fasāžu dalījumam un materiāliem jāveido sakārtots kopskats."],["Apstiprināšanas punkts","Pirms ražošanas jāfiksē gala risinājums."]],questions:[["Kāda informācija vajadzīga pirmajam projektam?","Telpas izmēri vai plāns, fotogrāfijas, tehnikas iecere un vajadzību saraksts."],["Vai projektēšana aptver visu mājokli?","Nē. Šīs lapas pakalpojuma robeža ir virtuve un tās tiešais telpiskais konteksts."]]},
  "virtuves-planosana": {entities:["darba trijstūris","ejas","atvērumi","darba virsma","rozetes","ūdens punkti","glabāšanas zonas"],decisions:[["Darba secība","Ledusskapja, sagatavošanas, mazgāšanas un gatavošanas zonas jāsaista loģiski."],["Brīva kustība","Jāpārbauda atvērtas atvilktnes, durvis un cilvēku pārvietošanās."],["Sasniedzamība","Bieži lietotām lietām jābūt ērtā augstumā un attālumā."]],questions:[["Cik platai jābūt ejai?","Nav viena skaitļa visām telpām; jāvērtē pretējie moduļi, atvērumi un lietotāju skaits."],["Kad saskaņot komunikācijas?","Pēc funkcionālā plāna izveides, bet pirms saistīto darbu un izgatavošanas sākuma."]]},
  "virtuves-uzstadisana": {entities:["telpas gatavība","korpusu līmeņošana","stiprinājumi","darba virsma","pildiņi","fasāžu regulēšana"],decisions:[["Piekļuve telpai","Piegādes ceļam un darba zonai jābūt brīvai."],["Montāžas secība","Korpusi, darba virsma un noslēgumi jāuzstāda projektā paredzētā kārtībā."],["Gala pārbaude","Jāpārbauda līnijas, atvērumi un mehānismu darbība."]],questions:[["Kas telpā jāpabeidz pirms montāžas?","Precīzo gatavības sarakstu saskaņo projektā; nepabeigti blakus darbi var traucēt uzstādīšanu."],["Vai pieslēdzat sadzīves tehniku?","Šāds darbu apjoms nav apstiprināts un netiek automātiski iekļauts virtuves uzstādīšanā."]]},
  "stura-un-l-veida-virtuves": {entities:["stūra modulis","L veida plānojums","aklais stūris","darba virsmas savienojums","atvilktņu konflikti","eja"],decisions:[["Stūra piekļuve","Jāsalīdzina plaukta, atvilktņu un mehānismu reālais lietojums."],["Blakus atvērumi","Stūra risinājums nedrīkst bloķēt kaimiņu moduļus."],["Darba zonas","Divas sienas jāizmanto kā viena secīga darba līnija."]],questions:[["Vai stūra mehānisms vienmēr dod vairāk vietas?","Ne vienmēr; jāvērtē piekļuves ērtums, konstrukcija un tas, ko glabās."],["Vai L veida virtuvē pietiek vietas galdam?","To nosaka telpas proporcijas, ejas un izvēlētais moduļu dziļums."]]},
  "mazas-virtuves": {entities:["kompakti moduļi","pilna augstuma glabāšana","seklāki skapji","saliekamas zonas","vizuālais troksnis","prioritātes"],decisions:[["Obligātais saturs","Vispirms definē tehniku, traukus un darba virsmu, bez kā nevar iztikt."],["Vertikāle","Augstumu izmanto tikai tad, ja saturs būs droši sasniedzams."],["Mierīgs kopskats","Mazā telpā īpaši svarīgs ir vienots dalījums un kontrolēts materiālu skaits."]],questions:[["Vai mazai virtuvei vienmēr vajag mazāku tehniku?","Nē. Tehnikas izvēle jāsaista ar reālo lietošanu un vietas prioritātēm."],["Kā palielināt darba virsmu?","Jāvērtē moduļu secība, tehnikas novietojums un tas, vai kādu zonu iespējams izmantot vairākām funkcijām."]]},
  "modernas-virtuves": {entities:["tīras līnijas","integrēti rokturi","matētas virsmas","tonāla palete","slēpta glabāšana","akcenta materiāls"],decisions:[["Proporcijas","Modernu iespaidu rada skaidrs moduļu ritms, ne tikai viena fasādes krāsa."],["Materiālu līdzsvars","Vizuāli aktīvas virsmas jālīdzsvaro ar mierīgām plaknēm."],["Ikdienas lietošana","Minimāls izskats nedrīkst samazināt piekļuvi un uzkopšanas ērtumu."]],questions:[["Vai moderna virtuve nozīmē virtuvi bez rokturiem?","Nē. Tas ir viens no risinājumiem; svarīgāks ir kopējais līniju un detaļu saskaņojums."],["Vai tumšas fasādes der nelielai telpai?","Var derēt, ja ņem vērā gaismu, virsmu apjomu un pārējo materiālu līdzsvaru."]]},
  "virtuves-ar-salu": {entities:["cirkulācija","sēdvietas","darba zona","glabāšana","pārkare","komunikācijas","galvenā virtuves līnija"],decisions:[["Salas funkcija","Jāizvēlas galvenais uzdevums: darbs, glabāšana, sēdēšana vai to kombinācija."],["Attālumi","Ap salu jāpaliek vietai kustībai un atvērtām durvīm."],["Saikne ar galveno līniju","Sala nedrīkst pārvērst ikdienas darbu par lieku staigāšanu."]],questions:[["Kā saprast, vai telpā pietiek vietas salai?","Jāuzzīmē sala kopā ar ejām, atvērtām atvilktnēm, sēdvietām un kustības ceļiem."],["Vai salā obligāti jābūt izlietnei vai plīts virsmai?","Nē. Sala var kalpot tikai darbam, glabāšanai vai sēdēšanai."]]},
  "virtuves-skapisi": {entities:["apakšējie skapji","piekaramie skapji","augstie skapji","atvilktnes","plaukti","stūra skapji","iekšējā organizācija"],decisions:[["Atvilktnes vai plaukti","Izvēli nosaka saturs, svars un nepieciešamā pārskatāmība."],["Augstie moduļi","Tie dod apjomu, bet ietekmē gaismu un telpas proporciju."],["Iekšējais dalījums","Sadalītāji jāplāno pēc reālajiem priekšmetiem, nevis abstrakta moduļa."]],questions:[["Kur labāk izmantot atvilktnes?","Tur, kur vajadzīga pārskatāma piekļuve saturam no augšas un priekšpuses."],["Vai piekaramie skapji jāveido līdz griestiem?","Tas ir viens risinājums; jāvērtē sasniedzamība, telpas augstums un vizuālais efekts."]]},
  "virtuves-fasades": {entities:["fasāžu dalījums","matējums","spīdums","faktūra","maliņas","rokturi","gaismas ietekme"],decisions:[["Vizuālais raksturs","Fasādes nosaka lielu daļu virtuves krāsas un ritma."],["Kopšana","Virsma jāizvēlas, ņemot vērā pieskārienus, tīrīšanu un ikdienas slodzi."],["Paraugi telpā","Toni un faktūru jāvērtē reālajā apgaismojumā."]],questions:[["Kura fasāde ir vispraktiskākā?","Bez apstiprināta materiālu klāsta nav vienas atbildes; jāvērtē lietošana, kopšana un vēlamais izskats."],["Vai fasāžu krāsa ekrānā būs precīza?","Nē. Ekrāni un telpas gaisma atšķiras, tāpēc gala izvēlei vajadzīgs fizisks paraugs."]]},
  "virtuves-furnitura": {entities:["eņģes","atvilktņu vadotnes","pacēlāji","organizatori","trauku žāvētava","slodze","regulēšana"],decisions:[["Slodze un biežums","Mehānisms jāizvēlas pēc tā, cik smagu saturu un cik bieži tas kustinās."],["Piekļuve","Furnitūras uzdevums ir uzlabot lietošanu, nevis tikai palielināt detaļu skaitu."],["Saderība","Mehānismam jāatbilst korpusa izmēram un konstrukcijai."]],questions:[["Kur furnitūrā ieguldīt vispirms?","Prioritāte parasti ir bieži lietotām un smagi noslogotām zonām."],["Vai visur vajadzīgi vienādi mehānismi?","Nē. Tos var diferencēt pēc moduļa uzdevuma un lietošanas biežuma."]]},
  "virtuves-interjers": {entities:["krāsu palete","faktūra","materiālu hierarhija","apgaismojums","proporcija","pāreja uz dzīvojamo zonu"],decisions:[["Dominējošais materiāls","Vienam elementam jāvada kompozīcija, pārējiem to jāatbalsta."],["Gaismas pārbaude","Krāsas jāvērtē dienas un mākslīgajā apgaismojumā."],["Saikne ar telpu","Atvērtā plānojumā virtuvi jāvērtē arī no dzīvojamās zonas."]],questions:[["Vai virtuves interjeram jāatkārto visas dzīvojamās telpas krāsas?","Nē, bet materiāliem un to tonalitātei jāveido saprotama pāreja."],["Kā izvairīties no pārāk daudziem materiāliem?","Nosaka vienu dominējošu virsmu un dažus skaidri pakārtotus akcentus."]]},
};

function PriceCoverage() {
  return (
    <section className="section alt"><div className="container">
      <div className="section-header"><span className="section-label">Cenu struktūra bez izdomātiem skaitļiem</span><h2>Kas jābūt redzamam pilnvērtīgā piedāvājumā?</h2><p>Precīzas summas tiks publicētas tikai pēc reālu datu apstiprināšanas. Šobrīd salīdzināšanai izmantojam darbu un komplektācijas kategorijas.</p></div>
      <div className="grid-3">
        {[["Mēbeļu daļa","Korpusi, fasādes, atvilktnes, plaukti, pildiņi un paneļi."],["Darba zona","Darba virsma, izgriezumi, savienojumi un sienas pārejas."],["Mehānismi","Eņģes, vadotnes, pacēlāji un iekšējās organizācijas elementi."],["Projektēšana","Plānojums, saskaņojumi un izgatavošanai vajadzīgā informācija."],["Loģistika","Piegādes nosacījumi un piekļuve objektam."],["Uzstādīšana","Montāža, līmeņošana, savienošana un gala regulēšana."]].map(([t,x])=><article className="card" key={t}><h3>{t}</h3><p>{x}</p><strong style={{display:"block",marginTop:".7rem",color:"var(--blue)"}}>Cena: pēc projekta</strong></article>)}
      </div>
    </div></section>
  );
}

export function ServicePage({ page }: { page: SeoPage }) {
  const extra = enhancements[page.slug];
  const index = seoPages.findIndex((item) => item.slug === page.slug);
  const related = [1,2,3].map((offset) => seoPages[(index + offset) % seoPages.length]);
  const faq = [...page.faq, ...(extra?.questions ?? [])];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.h1,
        description: page.description,
        serviceType: page.primaryKeyword,
        areaServed: [
          "Rīga", "Mārupe", "Stopiņi", "Ulbroka", "Ķekava", "Babīte",
          "Garkalne", "Salaspils", "Ādaži", "Jūrmala", "Olaine", "Piņķi",
          "Carnikava", "Ropaži", "Ikšķile", "Ogre", "Baldone", "Saulkrasti",
          "Jelgava", "Sigulda",
        ].map((name) => ({ "@type": "AdministrativeArea", name })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link href="/">Sākumlapa</Link> · <Link href="/virtuves-iekartas-pec-pasutijuma/">Pakalpojumi</Link> · {page.title}</nav>
          <h1>{page.h1}</h1><p>{page.intro}</p>
          <div className="dist-meta"><span>Primārais temats: {page.primaryKeyword}</span><span>Individuāls projekts</span><span>Projektēšana līdz uzstādīšanai</span></div>
        </div>
      </section>

      <section className="section"><div className="container content-layout">
        <article className="article-copy">
          <h2>{page.title}: ko šajā posmā risinām?</h2>
          <p>{page.description} Šī lapa nodalīta no pārējiem virtuves tematiem, lai pilnvērtīgi atbildētu tieši uz šo klienta jautājumu un nepārvērstos par vispārīgu pakalpojumu aprakstu.</p>
          {page.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p>{section.bullets && <ul>{section.bullets.map((x)=><li key={x}>{x}</li>)}</ul>}</section>)}
          {extra && <>
            <h2>Lēmumi, kas jāizrunā pirms apstiprināšanas</h2>
            <div className="decision-grid">{extra.decisions.map(([title,text])=><div className="decision-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
            <h2>Saistītie elementi un termini</h2>
            <p>{extra.entities.join(", ")}. Tie nav automātiski solījumi par konkrētu sortimentu; tie ir projekta jautājumi, kas palīdz precizēt risinājumu.</p>
          </>}
          <h2>Ko sagatavot konsultācijai?</h2>
          <ul><li>Telpas plānu vai galvenos izmērus, ja tie ir pieejami.</li><li>Fotogrāfijas ar sienām, ailēm un komunikāciju vietām.</li><li>Sadzīves tehnikas ieceri vai zināmos modeļu izmērus.</li><li>Glabājamo lietu un ikdienas paradumu prioritātes.</li><li>Jautājumus, kas jums svarīgi tieši par tēmu “{page.primaryKeyword}”.</li></ul>
        </article>
        <aside className="sidebar">
          <div className="card"><h3>Šīs lapas meklēšanas robeža</h3><p><strong>{page.primaryKeyword}</strong></p>{page.supportingKeywords.length>0&&<p>Saistītie formulējumi: {page.supportingKeywords.join(", ")}.</p>}</div>
          <div className="card"><h3>Saistītie ceļveži</h3>{related.map((item)=><Link className="text-link" href={`/${item.slug}/`} key={item.slug}>{item.title} →</Link>)}</div>
          <div className="card"><h3>Drošas satura robežas</h3><p>Šeit nav izdomātu cenu, materiālu zīmolu, garantijas ilguma, izgatavošanas termiņu vai projektu piemēru.</p></div>
          <Link className="btn btn-primary" href="/kontakti/">Pārrunāt savu projektu</Link>
        </aside>
      </div></section>

      {page.slug === "virtuves-cenas" && <PriceCoverage />}
      <section className="section alt"><div className="container grid-2"><div><span className="section-label">Secīgs process</span><h2 style={{margin:".6rem 0"}}>Kā tēma iekļaujas kopējā projektā</h2><p>Atsevišķs virtuves lēmums vienmēr jāsaskaņo ar plānojumu, komplektāciju, izgatavošanu un uzstādīšanu.</p></div><ProcessSteps /></div></section>
      <section className="section"><div className="container"><div className="section-header"><span className="section-label">Jautājumi un atbildes</span><h2>Biežākie jautājumi par {page.title.toLowerCase()}</h2></div><div className="faq-list">{faq.map((item)=><details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}<details className="faq-item"><summary>Vai gala risinājumu var noteikt tikai pēc vietnes informācijas?</summary><p>Nē. Vietne palīdz sagatavoties sarunai; gala risinājumu nosaka telpas dati, saskaņotais projekts un apstiprinātā komplektācija.</p></details></div></div></section>
      <LeadSection title={`Pārrunāsim tēmu “${page.title}” jūsu telpas kontekstā`} />
    </>
  );
}
