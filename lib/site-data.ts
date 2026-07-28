export type ContentSection = {
  title: string;
  text: string;
  bullets?: string[];
};

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  image?: "planning" | "installation";
  sections: ContentSection[];
  faq: { question: string; answer: string }[];
};

export const serviceAreas = [
  "Rīga",
  "Mārupe",
  "Stopiņi",
  "Ulbroka",
  "Ķekava",
  "Babīte",
  "Garkalne",
  "Salaspils",
  "Ādaži",
  "Jūrmala",
  "Olaine",
  "Piņķi",
  "Carnikava",
  "Ropaži",
  "Ikšķile",
  "Ogre",
  "Baldone",
  "Saulkrasti",
  "Jelgava",
  "Sigulda",
];

export const seoPages: SeoPage[] = [
  {
    slug: "virtuves-iekartas-pec-pasutijuma",
    title: "Virtuves iekārtas pēc pasūtījuma",
    description:
      "Individuāli projektētas virtuves iekārtas, ko izgatavojam, piegādājam un uzstādām atbilstoši telpai un ikdienas vajadzībām.",
    eyebrow: "Individuāla komplektācija",
    h1: "Virtuves iekārtas pēc pasūtījuma",
    intro:
      "Virtuves iekārta ir savstarpēji saskaņots skapju, darba virsmu, fasāžu un furnitūras risinājums. Mēs to veidojam konkrētai telpai, nevis pielāgojam telpu gatavam komplektam.",
    primaryKeyword: "virtuves iekārtas pēc pasūtījuma",
    supportingKeywords: [
      "virtuves iekārtas uz pasūtījumu",
      "virtuves iekārtas pēc individuāla pasūtījuma",
    ],
    sections: [
      {
        title: "Viena sistēma visai virtuvei",
        text: "Katra elementa izmērs un novietojums tiek skatīts kopējā plānā. Tas palīdz sabalansēt darba zonu, glabāšanu un pārvietošanos.",
        bullets: ["Apakšējie un augšējie skapji", "Augstie moduļi", "Darba virsmas un paneļi", "Fasādes un furnitūra"],
      },
      {
        title: "Pielāgošana telpai",
        text: "Plānojumā ņem vērā telpas izmērus, komunikācijas, ailes un citus fiksētus apstākļus. Precīzs risinājums tiek noteikts pēc projekta informācijas un uzmērījumiem.",
      },
      {
        title: "No idejas līdz uzstādīšanai",
        text: "Projektēšana, izgatavošana, piegāde un uzstādīšana tiek skatīta kā viens secīgs process. Konkrētais darba apjoms vienmēr jāfiksē piedāvājumā.",
      },
    ],
    faq: [
      { question: "Ar ko virtuves iekārta pēc pasūtījuma atšķiras no gatava komplekta?", answer: "Tās izmēri, moduļi un izvietojums tiek veidoti konkrētai telpai un lietošanas vajadzībām." },
      { question: "Vai var pielāgot skapju iekšējo dalījumu?", answer: "Jā, iekšējo organizāciju var plānot atbilstoši glabājamām lietām un pieejamajai vietai." },
    ],
  },
  {
    slug: "virtuves-izgatavosana",
    title: "Virtuves izgatavošana pēc pasūtījuma",
    description:
      "Virtuves izgatavošana pēc saskaņota projekta: detaļu sagatavošana, komplektēšana, piegāde un uzstādīšana.",
    eyebrow: "Ražošanas posms",
    h1: "Virtuves izgatavošana no projekta līdz gatavai iekārtai",
    intro:
      "Izgatavošana sākas pēc tam, kad ir skaidri izmēri, konstrukcija, materiāli un komplektācija. Saskaņots projekts samazina neskaidrības ražošanas un montāžas laikā.",
    primaryKeyword: "virtuves izgatavošana",
    supportingKeywords: ["virtuves iekārtas izgatavošana", "virtuves iekārtas izgatavošana cenas"],
    image: "installation",
    sections: [
      {
        title: "Saskaņots pamats",
        text: "Pirms detaļu izgatavošanas jābūt fiksētam plānojumam, izmēriem un izvēlētajai komplektācijai. Izmaiņas pēc ražošanas sākuma var ietekmēt darbu.",
      },
      {
        title: "Precizitāte detaļās",
        text: "Korpusi, fasādes, atvērumi un savienojumi jāveido kā vienota sistēma. Īpaša uzmanība nepieciešama vietās, kur virtuve satiekas ar sienām, grīdu un komunikācijām.",
        bullets: ["Detaļu izmēri", "Malu un savienojumu kvalitāte", "Furnitūras izvietojums", "Montāžas secība"],
      },
      {
        title: "Piegādei gatava komplektācija",
        text: "Pirms piegādes svarīgi pārbaudīt, vai komplektācija atbilst projektam un vai uzstādīšanas vieta ir sagatavota.",
      },
    ],
    faq: [
      { question: "Kas nepieciešams, lai sāktu izgatavošanu?", answer: "Saskaņots projekts, pārbaudīti izmēri un apstiprināta komplektācija." },
      { question: "Vai izgatavošanas laiks visām virtuvēm ir vienāds?", answer: "Nē. To ietekmē projekta apjoms, izvēles un aktuālā darbu secība; precīzu termiņu nosaka piedāvājumā." },
    ],
  },
  {
    slug: "iebuvetas-virtuves",
    title: "Iebūvējamās virtuves",
    description:
      "Iebūvējamās virtuves, kas izmanto telpu līdz sienām un pārdomāti integrē glabāšanu, tehnikas vietas un darba zonas.",
    eyebrow: "Telpai pielāgots risinājums",
    h1: "Iebūvējamās virtuves, kas izmanto telpu pārdomāti",
    intro:
      "Iebūvējamā virtuve ļauj savienot mēbeles ar telpas arhitektūru. Tās vērtība ir ne tikai vizuāla — būtiska ir piekļuve, glabāšana un precīza piesaiste fiksētajiem elementiem.",
    primaryKeyword: "iebūvējamās virtuves iekārtas",
    supportingKeywords: ["iebūvējamas virtuves", "iebūvējamā virtuve", "iebūvētās virtuves"],
    sections: [
      {
        title: "Pilnvērtīga telpas izmantošana",
        text: "Iebūvēts risinājums palīdz kontrolēt atstarpes un izmantot nišas vai sienu pilno augstumu, ja to atļauj konkrētā telpa.",
      },
      {
        title: "Tehnikas un glabāšanas vietas",
        text: "Tehnikas vietas un skapju iekšējais dalījums jāplāno kopā. Mēs neapgalvojam konkrētu tehnikas pieslēgšanas apjomu, kamēr tas nav saskaņots.",
      },
      {
        title: "Piesaiste reālajiem izmēriem",
        text: "Sienas un stūri ne vienmēr ir ideāli taisni. Tāpēc gala risinājums balstāms pārbaudītos izmēros, ne tikai aptuvenā telpas plānā.",
      },
    ],
    faq: [
      { question: "Vai iebūvējamā virtuve der nelīdzenām sienām?", answer: "Projektā var paredzēt pielāgojumus, taču to apjomu nosaka pēc telpas pārbaudes un uzmērījumiem." },
      { question: "Vai iebūvējamā virtuve vienmēr ir līdz griestiem?", answer: "Nē. Augstums ir plānojuma izvēle, ko nosaka telpa, glabāšanas vajadzības un kopējā kompozīcija." },
    ],
  },
  {
    slug: "virtuves-cenas",
    title: "Virtuves pēc pasūtījuma cenas",
    description:
      "Kas veido virtuves pēc pasūtījuma cenu: izmērs, konstrukcija, fasādes, furnitūra, darba virsma un uzstādīšanas apjoms.",
    eyebrow: "Izmaksu loģika",
    h1: "Cik maksā virtuve pēc pasūtījuma?",
    intro:
      "Bez projekta un komplektācijas nav iespējams godīgi nosaukt precīzu cenu. Toties var skaidri izskaidrot, kuri lēmumi izmaksas palielina vai samazina.",
    primaryKeyword: "iebūvējamās virtuves cenas",
    supportingKeywords: ["virtuves cenas", "cik maksā virtuves iekārta", "virtuves pēc pasūtījuma cenas"],
    sections: [
      {
        title: "Galvenie cenu faktori",
        text: "Divas līdzīga izmēra virtuves var maksāt atšķirīgi, ja atšķiras konstrukcija un komplektācija.",
        bullets: ["Korpusu un fasāžu apjoms", "Atvilktņu un mehānismu skaits", "Darba virsmas materiāls un forma", "Piegādes un uzstādīšanas apjoms"],
      },
      {
        title: "Ko salīdzināt piedāvājumos",
        text: "Jāsalīdzina ne tikai gala summa, bet arī iekļautais darbu un materiālu apjoms. Precīzs piedāvājums palīdz izvairīties no atšķirīgas interpretācijas.",
      },
      {
        title: "Cenu piemēri tiks balstīti faktos",
        text: "Publiskojamus cenu diapazonus un projektu piemērus pievienosim tikai pēc uzņēmuma datu apstiprināšanas. Līdz tam vietne neizmantos izdomātus skaitļus.",
      },
    ],
    faq: [
      { question: "Kāpēc cenu nevar noteikt tikai pēc virtuves garuma?", answer: "Izmaksas ietekmē moduļu uzbūve, materiāli, furnitūra, darba virsma un uzstādīšanas sarežģītība." },
      { question: "Vai dārgākā izvēle vienmēr ir labākā?", answer: "Nē. Pareizā izvēle ir tā, kas atbilst lietošanai, budžetam un prioritātēm." },
    ],
  },
  {
    slug: "virtuves-dizains-un-projektesana",
    title: "Virtuves dizains un projektēšana",
    description:
      "Virtuves dizains un projektēšana, savienojot telpas ierobežojumus, ikdienas paradumus, glabāšanu un vizuālo ieceri.",
    eyebrow: "No vajadzībām līdz projektam",
    h1: "Virtuves dizains, kas sākas ar telpu un cilvēku",
    intro:
      "Labs virtuves projekts nav tikai fasāžu krāsa. Tas nosaka kustību, glabāšanu, darba zonas un to, kā visi elementi darbojas kopā.",
    primaryKeyword: "virtuves interjera dizains",
    supportingKeywords: ["virtuves projektēšana", "virtuves projekts", "virtuves iekārtas dizains"],
    image: "planning",
    sections: [
      {
        title: "Sākums ir pareizie jautājumi",
        text: "Projektēšanā jānoskaidro, kas virtuvi lietos, kādas lietas tajā glabās un kuri darba posmi ir vissvarīgākie.",
      },
      {
        title: "Funkcija un vizuālais ritms",
        text: "Skapju dalījums, līnijas, atvērumi un materiāli veido vienotu kompozīciju. Estētiku nevajadzētu atdalīt no praktiskās lietošanas.",
      },
      {
        title: "Saskaņojams rezultāts",
        text: "Projekta forma, vizualizāciju veids un labojumu kārtība jānorāda konkrētajā piedāvājumā. Vietne neapsola 3D projektu vai noteiktu labojumu skaitu, kamēr tas nav apstiprināts.",
      },
    ],
    faq: [
      { question: "Ar ko sākt virtuves projektēšanu?", answer: "Ar telpas informāciju, vajadzību sarakstu un prioritātēm — pēc tam iespējams vērtēt plānojumu." },
      { question: "Vai dizains ietver tikai krāsas un materiālus?", answer: "Nē. Tas ietver arī moduļu proporcijas, glabāšanu, darba zonas un kopējo lietošanas loģiku." },
    ],
  },
  {
    slug: "virtuves-planosana",
    title: "Virtuves plānošana",
    description:
      "Virtuves plānošana: darba zonas, skapju izvietojums, ejas, augstumi un vieta ikdienā nepieciešamajām lietām.",
    eyebrow: "Funkcionāls plānojums",
    h1: "Virtuves plānošana bez liekām kustībām",
    intro:
      "Plānojums nosaka, vai virtuve ikdienā būs ērta. Svarīgi ir nevis ievērot vienu universālu shēmu, bet salāgot telpu ar cilvēka paradumiem.",
    primaryKeyword: "virtuves iekārtojums",
    supportingKeywords: ["virtuves iekārtošana", "virtuves plāns", "virtuves plānojums", "virtuves plānošana"],
    image: "planning",
    sections: [
      {
        title: "Darba zonas",
        text: "Produktu glabāšana, sagatavošana, gatavošana un mazgāšana veido secīgu darbu. To savstarpējais attālums jāvērtē konkrētajā telpā.",
      },
      {
        title: "Ejas un atvērumi",
        text: "Atvilktnēm, durvīm un cilvēkiem nepieciešama vieta. Plānojot jāņem vērā vienlaicīga elementu atvēršana un pārvietošanās.",
      },
      {
        title: "Glabāšana pēc lietošanas biežuma",
        text: "Ikdienas priekšmetiem jābūt viegli pieejamiem, bet reti izmantotām lietām var atvēlēt augstākas vai dziļākas zonas.",
      },
    ],
    faq: [
      { question: "Vai darba trijstūris der katrai virtuvei?", answer: "Tas ir noderīgs princips, nevis obligāta formula. Lineārām vai mazām virtuvēm piemērotāka var būt cita darba secība." },
      { question: "Kad jāplāno rozetes un komunikācijas?", answer: "Pirms virtuves izgatavošanas, saskaņojot tās ar gala iekārtas plānu un atbildīgajiem speciālistiem." },
    ],
  },
  {
    slug: "virtuves-uzstadisana",
    title: "Virtuves uzstādīšana",
    description:
      "Virtuves uzstādīšana pēc saskaņota projekta: moduļu novietošana, līmeņošana, savienošana un gala regulēšana.",
    eyebrow: "Noslēdzošais darba posms",
    h1: "Virtuves uzstādīšana ar uzmanību pret telpu",
    intro:
      "Pat precīzi izgatavota virtuve jāsalāgo ar reālo telpu. Uzstādīšanas posmā svarīga ir secība, līmeņošana un rūpīga saskares vietu apstrāde.",
    primaryKeyword: "virtuves iekārtas uzstādīšana cena",
    supportingKeywords: ["virtuves uzstādīšana"],
    image: "installation",
    sections: [
      {
        title: "Sagatavota telpa",
        text: "Pirms piegādes un uzstādīšanas jābūt skaidram telpas gatavības stāvoklim. Nepabeigti saistītie darbi var traucēt montāžas secībai.",
      },
      {
        title: "Montāžas secība",
        text: "Korpusu novietošana, savienošana, darba virsmu un noslēgumu uzstādīšana jāveic saskaņoti ar projektu.",
      },
      {
        title: "Pārbaude un regulēšana",
        text: "Noslēgumā pārbauda atvērumus, līnijas un mehānismu darbību. Precīzs iekļauto darbu saraksts tiek noteikts piedāvājumā.",
      },
    ],
    faq: [
      { question: "Vai var pasūtīt tikai virtuves uzstādīšanu?", answer: "Šī iespēja nav apstiprināta. Pašreiz vietne apraksta mūsu izgatavoto virtuvju uzstādīšanu." },
      { question: "Vai uzstādīšana ietver elektrības un santehnikas darbus?", answer: "Ne automātiski. Šo darbu atbildība un apjoms jāsaskaņo atsevišķi." },
    ],
  },
  {
    slug: "stura-un-l-veida-virtuves",
    title: "Stūra un L veida virtuves",
    description:
      "Stūra un L veida virtuves pēc pasūtījuma ar pārdomātu darba zonu, stūra izmantošanu un glabāšanas risinājumiem.",
    eyebrow: "Plānojuma risinājumi",
    h1: "Stūra un L veida virtuves",
    intro:
      "L veida plānojums izmanto divas savienotas sienas un var skaidri nodalīt darba zonas. Galvenais uzdevums ir panākt, lai stūris nekļūtu par grūti izmantojamu tukšumu.",
    primaryKeyword: "stūra virtuves iekārtas",
    supportingKeywords: ["L veida virtuves iekārtas", "stūra virtuves iekārtas komplekti"],
    sections: [
      {
        title: "Stūra izmantošana",
        text: "Stūra modulis jāvērtē kopā ar blakus atvilktnēm, tehnikas vietām un atvērumiem. Ne katrai telpai vajadzīgs sarežģīts mehānisms.",
      },
      {
        title: "Darba virsmas nepārtrauktība",
        text: "Divas darba virsmas plaknes var nodrošināt vairāk sagatavošanas vietas, ja izlietnes un gatavošanas zonas novietotas pārdomāti.",
      },
      {
        title: "Atvērta telpas puse",
        text: "L veida virtuve bieži atstāj vietu galdam vai brīvākai kustībai. Konkrēto priekšrocību nosaka telpas proporcijas.",
      },
    ],
    faq: [
      { question: "Vai stūra skapis obligāti jāaprīko ar mehānismu?", answer: "Nē. Mehānisms ir viena no iespējām; jāvērtē piekļuve, cena un glabāšanas paradumi." },
      { question: "Kurai telpai piemērota L veida virtuve?", answer: "Telpai, kur iespējams izmantot divas blakus sienas, saglabājot pietiekamas ejas un atvērumus." },
    ],
  },
  {
    slug: "mazas-virtuves",
    title: "Mazas virtuves",
    description:
      "Mazas virtuves pēc pasūtījuma ar prioritātēm, pilna augstuma glabāšanu un rūpīgi izmantotu darba virsmu.",
    eyebrow: "Kompaktas telpas",
    h1: "Mazas virtuves, kur katram centimetram ir uzdevums",
    intro:
      "Nelielā virtuvē nevar vienkārši samazināt lielas virtuves plānu. Jānosaka prioritātes un jāatstāj pietiekami daudz vietas reālai lietošanai.",
    primaryKeyword: "maza virtuves iekārta",
    supportingKeywords: [],
    sections: [
      {
        title: "Prioritātes pirms moduļiem",
        text: "Vispirms jānoskaidro, kas patiešām nepieciešams ikdienā. Tas palīdz neiztērēt ierobežoto vietu reti izmantotiem elementiem.",
      },
      {
        title: "Augstums un dziļums",
        text: "Pilna augstuma glabāšana var būt noderīga, taču tai jābūt ērti pieejamai. Nestandarta dziļumi ir vērtējami tikai tad, ja netiek traucēta lietošana.",
      },
      {
        title: "Vizuāls miers",
        text: "Vienots dalījums, kontrolēts materiālu skaits un pārdomātas līnijas palīdz kompaktai telpai izskatīties sakārtotai.",
      },
    ],
    faq: [
      { question: "Vai mazā virtuvē vajag tikai augšējos skapjus?", answer: "Nē. Glabāšanu var veidot dažādos augstumos; lēmums atkarīgs no telpas un vajadzībām." },
      { question: "Kā iegūt vairāk darba virsmas?", answer: "Pārskatot tehnikas novietojumu, moduļu platumus un to, kam darba virsma ikdienā nepieciešama." },
    ],
  },
  {
    slug: "modernas-virtuves",
    title: "Modernas virtuves",
    description:
      "Modernas virtuves pēc pasūtījuma ar tīrām līnijām, pārdomātu glabāšanu un materiāliem, kas piemēroti ikdienas lietošanai.",
    eyebrow: "Mūsdienīga valoda",
    h1: "Modernas virtuves bez īslaicīgiem efektiem",
    intro:
      "Mūsdienīgs izskats nav tikai gluda fasāde. Tas rodas no proporcijām, detaļu disciplīnas un tā, cik mierīgi tehniskie elementi iekļaujas kopumā.",
    primaryKeyword: "modernas virtuves",
    supportingKeywords: ["moderna virtuves iekārta"],
    sections: [
      {
        title: "Tīras līnijas",
        text: "Vienoti augstumi un pārdomāti dalījumi veido sakārtotu ritmu. Dekoratīvie elementi tiek izmantoti tikai tad, ja tiem ir skaidrs uzdevums.",
      },
      {
        title: "Materiālu līdzsvars",
        text: "Matētas, koka un akmens faktūras var kombinēt, saglabājot kontrolētu paleti. Konkrēti materiāli jāizvēlas no uzņēmuma reālā piedāvājuma.",
      },
      {
        title: "Tehnika kopējā kompozīcijā",
        text: "Tehnikas vietas jāplāno kopā ar fasāžu dalījumu un darba zonām. Tehnikas pieslēgšana nav automātiski iekļauts pakalpojums.",
      },
    ],
    faq: [
      { question: "Vai moderna virtuve nozīmē tikai bezrokturu fasādes?", answer: "Nē. Modernu raksturu var veidot arī ar rokturiem, ja proporcijas un materiāli ir saskaņoti." },
      { question: "Vai tumšas fasādes der mazai telpai?", answer: "Var derēt, ja ir pietiekams apgaismojums un pārdomāts materiālu līdzsvars; universālas atbildes nav." },
    ],
  },
  {
    slug: "virtuves-ar-salu",
    title: "Virtuves ar salu",
    description:
      "Virtuves ar salu pēc individuāla plāna: pārvietošanās, darba virsma, glabāšana, sēdvietas un komunikāciju prasības.",
    eyebrow: "Centrāls telpas elements",
    h1: "Virtuves sala, kurai ir skaidrs uzdevums",
    intro:
      "Sala var papildināt darba virsmu un glabāšanu, bet tai nepieciešama pietiekama telpa. Tās forma un funkcija jānosaka pirms dizaina detaļām.",
    primaryKeyword: "virtuves saliņa",
    supportingKeywords: [],
    sections: [
      {
        title: "Brīva kustība apkārt",
        text: "Jāpārbauda, vai ap salu iespējams ērti pārvietoties un vienlaikus atvērt skapjus vai tehnikas durvis.",
      },
      {
        title: "Darba vieta vai satikšanās vieta",
        text: "Sala var būt paredzēta sagatavošanai, glabāšanai vai sēdēšanai. Dažādas funkcijas rada atšķirīgas izmēru un komunikāciju prasības.",
      },
      {
        title: "Komunikācijas jāplāno laikus",
        text: "Ja salā paredzēta izlietne vai tehnika, saistītie risinājumi jāsaskaņo ar atbildīgajiem speciālistiem pirms izgatavošanas.",
      },
    ],
    faq: [
      { question: "Vai sala der katrai virtuvei?", answer: "Nē. Vispirms jānodrošina ērtas ejas un pārējo zonu darbība." },
      { question: "Vai virtuves salai vajag sēdvietas?", answer: "Tikai tad, ja tās atbilst telpai un lietošanas paradumiem. Sala var kalpot arī tikai darbam un glabāšanai." },
    ],
  },
  {
    slug: "virtuves-skapisi",
    title: "Virtuves skapīši pēc individuāla plāna",
    description:
      "Virtuves skapīšu plānošana pēc pasūtījuma: korpusi, atvilktnes, augstie moduļi, stūri un iekšējā organizācija.",
    eyebrow: "Glabāšanas sistēma",
    h1: "Virtuves skapīši, kas atbilst tam, ko glabājat",
    intro:
      "Skapīšu skaits pats par sevi nenosaka ērtumu. Svarīgāks ir to dalījums, piekļuve un saistība ar darba zonām.",
    primaryKeyword: "virtuves skapīši",
    supportingKeywords: ["virtuves stūra skapīši", "virtuves stūra skapis", "piekaramie virtuves skapīši"],
    sections: [
      {
        title: "Atvilktnes un plaukti",
        text: "Atvilktnes ļauj pārskatīt saturu no augšas, bet plaukti var būt piemēroti lielākiem vai retāk izmantotiem priekšmetiem.",
      },
      {
        title: "Augstie moduļi",
        text: "Augstie skapji var apvienot glabāšanu un tehnikas vietas. To izvietojumam jāatstāj pietiekama darba virsma un gaisma.",
      },
      {
        title: "Stūra skapji",
        text: "Stūra risinājumu izvēlas pēc atvēruma, piekļuves un blakus moduļiem. Mehānisms nav pašmērķis.",
      },
    ],
    faq: [
      { question: "Vai vairāk skapīšu vienmēr nozīmē vairāk izmantojamas vietas?", answer: "Nē. Nepiemēroti dziļumi vai atvērumi var padarīt daļu vietas grūti pieejamu." },
      { question: "Vai skapīšu iekšējo dalījumu var pielāgot?", answer: "Jā, ja tas tiek paredzēts projektā un atbilst konstrukcijai." },
    ],
  },
  {
    slug: "virtuves-fasades",
    title: "Virtuves fasādes",
    description:
      "Virtuves fasāžu izvēle pēc izskata un lietošanas: virsmas raksturs, kopšana, dalījums un saskaņojums ar telpu.",
    eyebrow: "Redzamā virtuves virsma",
    h1: "Virtuves fasādes ikdienai un kopējai kompozīcijai",
    intro:
      "Fasādes nosaka lielu daļu virtuves vizuālā rakstura, taču izvēle jāvērtē arī pēc kopšanas, lietošanas un konstrukcijas.",
    primaryKeyword: "virtuves fasādes",
    supportingKeywords: [],
    sections: [
      {
        title: "Virsmas raksturs",
        text: "Matētas, strukturētas un koka faktūras gaismu atstaro atšķirīgi. Paraugs jāvērtē tajā apgaismojumā, kur materiāls tiks lietots.",
      },
      {
        title: "Dalījums un proporcijas",
        text: "Fasāžu līnijas ietekmē virtuves ritmu. Tās jāsaista ar atvilktnēm, iekšējo organizāciju un tehnikas vietām.",
      },
      {
        title: "Tikai faktiski pieejamas izvēles",
        text: "Konkrēti materiāli, to zīmoli un tehniskās īpašības tiks publicētas tikai pēc reālā piedāvājuma apstiprināšanas.",
      },
    ],
    faq: [
      { question: "Kuras fasādes ir visvieglāk kopjamas?", answer: "Tas atkarīgs no konkrētās virsmas un apdares. Izvēle jābalsta ražotāja informācijā un lietošanas apstākļos." },
      { question: "Vai fasāžu krāsu var izvēlēties atsevišķi no darba virsmas?", answer: "Jā, taču abas izvēles jāsalāgo kopējā materiālu un gaismas kontekstā." },
    ],
  },
  {
    slug: "virtuves-furnitura",
    title: "Virtuves furnitūra",
    description:
      "Virtuves furnitūra un mehānismi: eņģes, atvilktņu vadotnes, pacelšanas un iekšējās organizācijas risinājumi.",
    eyebrow: "Kustīgās detaļas",
    h1: "Virtuves furnitūra, ko izvēlas pēc slodzes un lietošanas",
    intro:
      "Furnitūra nosaka, kā skapji un atvilktnes darbojas ikdienā. Izvēlei jābūt saistītai ar moduļa izmēru, svaru un lietošanas biežumu.",
    primaryKeyword: "virtuves furnitūra",
    supportingKeywords: ["virtuves furnitūra trauku žāvētava"],
    sections: [
      {
        title: "Eņģes un vadotnes",
        text: "Mehānismu slodzei un atvēruma veidam jāatbilst konkrētajam modulim. Viena furnitūra nav optimāla visām vietām.",
      },
      {
        title: "Iekšējā organizācija",
        text: "Atdalītāji, grozi un citi elementi ir vērtīgi, ja tie palīdz glabāt konkrētas lietas, nevis tikai aizpilda skapi.",
      },
      {
        title: "Zīmoli netiek izdomāti",
        text: "Konkrēti furnitūras ražotāji, garantijas un mehānismu sērijas tiks norādītas pēc uzņēmuma piedāvājuma apstiprināšanas.",
      },
    ],
    faq: [
      { question: "Vai dārgāka furnitūra vienmēr nepieciešama visā virtuvē?", answer: "Nē. Mehānismus var izvēlēties atbilstoši katra moduļa slodzei un prioritātei." },
      { question: "Vai furnitūru var nomainīt vēlāk?", answer: "Dažos gadījumos var, taču saderība ir atkarīga no konstrukcijas un stiprinājumiem." },
    ],
  },
  {
    slug: "virtuves-interjers",
    title: "Virtuves interjers",
    description:
      "Virtuves interjers ar saskaņotām proporcijām, krāsām, materiāliem un pārejām uz pārējo telpu.",
    eyebrow: "Vienota telpas kompozīcija",
    h1: "Virtuves interjers, kur funkcija un materiāli runā vienā valodā",
    intro:
      "Virtuves interjers aptver vairāk nekā mēbeļu krāsu. Tas ir mērogs, materiālu savstarpējā attiecība, gaisma un pāreja uz blakus telpām.",
    primaryKeyword: "virtuves interjērs",
    supportingKeywords: ["interjers virtuvei", "virtuves interjers krāsas", "dizaina virtuves"],
    sections: [
      {
        title: "Materiālu hierarhija",
        text: "Viens dominējošs materiāls un daži atbalsta akcenti parasti rada skaidrāku rezultātu nekā daudzas vienlīdz aktīvas virsmas.",
      },
      {
        title: "Krāsa reālā gaismā",
        text: "To pašu toni dienas un mākslīgajā apgaismojumā var uztvert atšķirīgi. Paraugi jāskata telpas kontekstā.",
      },
      {
        title: "Saikne ar blakus telpām",
        text: "Atvērtā plānojumā virtuve ir daļa no lielākas kompozīcijas. Fasāžu ritms un materiāli jāvērtē arī no dzīvojamās zonas.",
      },
    ],
    faq: [
      { question: "Vai virtuves interjera lapa nozīmē pilnu mājokļa interjera dizainu?", answer: "Nē. Šeit aprakstīts tikai virtuves un tās tiešā telpiskā konteksta risinājums." },
      { question: "Cik krāsu izmantot virtuvē?", answer: "Nav universāla skaita. Svarīgāka ir to hierarhija, materiālu faktūra un telpas gaisma." },
    ],
  },
];

export const pagesBySlug = Object.fromEntries(seoPages.map((page) => [page.slug, page]));
