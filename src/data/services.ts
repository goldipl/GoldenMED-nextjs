import { IconName } from "@/components/common/Icon";

export interface Treatment {
  name: string;
  duration: string;
  price: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  popular: boolean;
  short: string;
  intro: string;
  description: string[];
  benefits: string[];
  treatments: Treatment[];
  faq: Faq[];
}

// Przykładowe ceny i opisy — do weryfikacji przed publikacją
export const services: Service[] = [
  {
    slug: "laseroterapia",
    name: "Laseroterapia",
    icon: "zap",
    popular: true,
    short:
      "Nowoczesne zabiegi laserowe: depilacja, usuwanie przebarwień, naczynek i odmładzanie skóry.",
    intro:
      "Laseroterapia to jedna z najskuteczniejszych metod pracy ze skórą. Precyzyjnie dobrana wiązka światła działa dokładnie tam, gdzie jest potrzebna — bez naruszania otaczających tkanek.",
    description: [
      "W GoldenMED pracujemy na certyfikowanych urządzeniach medycznych, a każdy zabieg poprzedza konsultacja, podczas której oceniamy fototyp skóry, wykluczamy przeciwwskazania i dobieramy parametry wiązki.",
      "Zabiegi laserowe pozwalają trwale zredukować owłosienie, usunąć przebarwienia i rozszerzone naczynka, spłycić blizny potrądzikowe oraz pobudzić skórę do produkcji kolagenu. Efekty narastają z każdą sesją, a większość zabiegów nie wymaga długiej rekonwalescencji.",
    ],
    benefits: [
      "Trwała redukcja owłosienia",
      "Wyrównanie kolorytu i usunięcie przebarwień",
      "Zamykanie naczynek i redukcja rumienia",
      "Spłycenie blizn i poprawa tekstury skóry",
    ],
    treatments: [
      { name: "Depilacja laserowa — pachy", duration: "30 min", price: "250 zł" },
      {
        name: "Depilacja laserowa — bikini głębokie",
        duration: "45 min",
        price: "400 zł",
      },
      { name: "Depilacja laserowa — nogi całe", duration: "90 min", price: "900 zł" },
      { name: "Usuwanie przebarwień — twarz", duration: "45 min", price: "od 450 zł" },
      { name: "Zamykanie naczynek — twarz", duration: "45 min", price: "od 400 zł" },
      {
        name: "Laserowe odmładzanie frakcyjne — twarz",
        duration: "60 min",
        price: "1200 zł",
      },
    ],
    faq: [
      {
        question: "Ile zabiegów potrzeba do trwałej depilacji?",
        answer:
          "Zwykle od 6 do 8 zabiegów w odstępach 4–8 tygodni, w zależności od okolicy ciała i rodzaju włosa. Dokładny plan ustalamy podczas konsultacji.",
      },
      {
        question: "Czy zabiegi laserowe bolą?",
        answer:
          "Odczucia są indywidualne — większość pacjentów opisuje je jako lekkie mrowienie lub pstryknięcie gumką. Urządzenia mają wbudowane chłodzenie, które znacząco zwiększa komfort.",
      },
      {
        question: "Kiedy najlepiej wykonywać zabiegi laserowe?",
        answer:
          "Najlepszy czas to jesień i zima, gdy ekspozycja na słońce jest najmniejsza. Przez kilka tygodni po zabiegu należy unikać opalania i stosować filtr SPF 50.",
      },
    ],
  },
  {
    slug: "medycyna-estetyczna",
    name: "Medycyna estetyczna",
    icon: "droplet",
    popular: true,
    short:
      "Kwas hialuronowy, toksyna botulinowa, stymulatory tkankowe i mezoterapia — naturalne efekty bez przesady.",
    intro:
      "Medycyna estetyczna w GoldenMED to podkreślanie naturalnej urody. Nie zmieniamy rysów twarzy — przywracamy jej świeżość, proporcje i wypoczęty wygląd.",
    description: [
      "Wszystkie zabiegi z zakresu medycyny estetycznej wykonują lekarze z wieloletnim doświadczeniem. Korzystamy wyłącznie z certyfikowanych preparatów o udokumentowanym bezpieczeństwie, a plan terapii układamy indywidualnie — tak, aby efekt był harmonijny i rozłożony w czasie.",
      "Przed każdym zabiegiem przeprowadzamy szczegółowy wywiad medyczny, omawiamy oczekiwania i realne możliwości danej metody. Po zabiegu pozostajemy w kontakcie i zapraszamy na bezpłatną wizytę kontrolną.",
    ],
    benefits: [
      "Redukcja zmarszczek mimicznych",
      "Przywrócenie objętości i konturu twarzy",
      "Głębokie nawilżenie i poprawa jędrności skóry",
      "Naturalny, wypoczęty wygląd",
    ],
    treatments: [
      { name: "Konsultacja lekarska", duration: "30 min", price: "200 zł" },
      { name: "Toksyna botulinowa — 1 okolica", duration: "30 min", price: "700 zł" },
      { name: "Toksyna botulinowa — 3 okolice", duration: "45 min", price: "1400 zł" },
      {
        name: "Modelowanie ust kwasem hialuronowym",
        duration: "45 min",
        price: "od 1100 zł",
      },
      { name: "Wolumetria twarzy", duration: "60 min", price: "od 1500 zł" },
      { name: "Mezoterapia igłowa", duration: "45 min", price: "650 zł" },
      { name: "Stymulator tkankowy", duration: "45 min", price: "od 1000 zł" },
    ],
    faq: [
      {
        question: "Jak długo utrzymują się efekty toksyny botulinowej?",
        answer:
          "Zazwyczaj od 4 do 6 miesięcy. Przy regularnych zabiegach mięśnie stopniowo się wyciszają, a efekt może utrzymywać się dłużej.",
      },
      {
        question: "Czy efekt będzie wyglądał naturalnie?",
        answer:
          "Tak — to nasza nadrzędna zasada. Pracujemy z umiarem, często etapami, aby zachować mimikę i indywidualne rysy twarzy.",
      },
      {
        question: "Czy konsultacja jest obowiązkowa?",
        answer:
          "Przed pierwszym zabiegiem tak. Koszt konsultacji odliczamy od ceny zabiegu, jeśli zostanie on wykonany w ciągu 30 dni.",
      },
    ],
  },
  {
    slug: "kosmetologia",
    name: "Kosmetologia",
    icon: "feather",
    popular: true,
    short:
      "Profesjonalna pielęgnacja: peelingi, oczyszczanie, zabiegi nawilżające i terapie dla skóry problematycznej.",
    intro:
      "Zdrowa skóra to podstawa każdego efektu. Nasi kosmetolodzy łączą wiedzę o fizjologii skóry z nowoczesną aparaturą i dermokosmetykami najwyższej klasy.",
    description: [
      "Zabiegi kosmetologiczne dobieramy na podstawie diagnostyki skóry — oceniamy jej nawilżenie, wydzielanie sebum, wrażliwość i stan bariery hydrolipidowej. Dzięki temu terapia odpowiada na rzeczywiste potrzeby, a nie na chwilowe trendy.",
      "Pracujemy zarówno ze skórą wymagającą regeneracji, jak i z trądzikiem, przebarwieniami czy pierwszymi oznakami starzenia. Do każdej serii zabiegów dołączamy zalecenia pielęgnacji domowej.",
    ],
    benefits: [
      "Dogłębne oczyszczenie i regulacja sebum",
      "Nawilżenie i odbudowa bariery ochronnej",
      "Rozjaśnienie i wyrównanie kolorytu",
      "Indywidualny plan pielęgnacji domowej",
    ],
    treatments: [
      {
        name: "Diagnostyka skóry z planem pielęgnacji",
        duration: "30 min",
        price: "150 zł",
      },
      { name: "Oczyszczanie wodorowe", duration: "60 min", price: "280 zł" },
      { name: "Peeling kwasowy", duration: "45 min", price: "od 250 zł" },
      { name: "Mikrodermabrazja diamentowa", duration: "45 min", price: "220 zł" },
      { name: "Mikronakłuwanie (dermapen)", duration: "60 min", price: "550 zł" },
      { name: "Zabieg nawilżająco-odżywczy", duration: "60 min", price: "320 zł" },
    ],
    faq: [
      {
        question: "Jak często wykonywać zabiegi kosmetologiczne?",
        answer:
          "Zabiegi pielęgnacyjne można wykonywać co 2–4 tygodnie. Terapie, np. peelingi kwasowe, zalecamy w seriach po 4–6 zabiegów.",
      },
      {
        question: "Czy mogę przyjść na zabieg w makijażu?",
        answer:
          "Tak, przed zabiegiem dokładnie demakijażujemy skórę. Po zabiegu zalecamy rezygnację z makijażu przez co najmniej 12 godzin.",
      },
    ],
  },
  {
    slug: "dermatologia-estetyczna",
    name: "Dermatologia estetyczna",
    icon: "sun",
    popular: false,
    short:
      "Diagnostyka znamion, leczenie trądziku, rozacei i przebarwień pod okiem lekarza dermatologa.",
    intro:
      "Problemy skórne wymagają diagnozy lekarza. W gabinecie dermatologii estetycznej łączymy leczenie z dbałością o wygląd skóry.",
    description: [
      "Konsultacje prowadzi lekarz dermatolog, który ocenia stan skóry, w razie potrzeby zleca badania i wdraża leczenie farmakologiczne. Następnie, wspólnie z zespołem kosmetologów, układamy plan zabiegów wspierających terapię.",
      "Szczególną uwagę przykładamy do profilaktyki — badanie znamion dermatoskopem zalecamy wykonywać raz w roku, zwłaszcza osobom z jasną karnacją lub dużą liczbą znamion.",
    ],
    benefits: [
      "Diagnoza i leczenie prowadzone przez lekarza",
      "Dermatoskopia znamion",
      "Skuteczna terapia trądziku i rozacei",
      "Połączenie leczenia z zabiegami gabinetowymi",
    ],
    treatments: [
      { name: "Konsultacja dermatologiczna", duration: "30 min", price: "250 zł" },
      { name: "Dermatoskopia znamion", duration: "30 min", price: "300 zł" },
      { name: "Usunięcie zmiany skórnej", duration: "30 min", price: "od 350 zł" },
      { name: "Krioterapia zmian skórnych", duration: "15 min", price: "od 150 zł" },
    ],
    faq: [
      {
        question: "Jak często badać znamiona?",
        answer:
          "Profilaktycznie raz w roku. Jeśli zauważysz, że znamię zmienia kształt, kolor lub zaczyna swędzieć — zgłoś się jak najszybciej.",
      },
      {
        question: "Czy potrzebuję skierowania?",
        answer: "Nie, wizyty w GoldenMED są prywatne i nie wymagają skierowania.",
      },
    ],
  },
  {
    slug: "modelowanie-sylwetki",
    name: "Modelowanie sylwetki",
    icon: "activity",
    popular: false,
    short:
      "Redukcja tkanki tłuszczowej, cellulitu i ujędrnianie skóry ciała z użyciem nowoczesnych technologii.",
    intro:
      "Zabiegi na ciało pomagają poprawić kontur sylwetki i jakość skóry tam, gdzie dieta i ruch nie przynoszą oczekiwanych rezultatów.",
    description: [
      "Wykorzystujemy nieinwazyjne technologie, takie jak fala radiowa, endermologia czy kriolipoliza. Zabiegi są bezpieczne, nie wymagają rekonwalescencji i można je łączyć w spersonalizowane programy.",
      "Najlepsze efekty przynosi seria zabiegów połączona ze zdrowym stylem życia — dlatego w ramach programu otrzymujesz również zalecenia dotyczące aktywności i pielęgnacji.",
    ],
    benefits: [
      "Redukcja miejscowej tkanki tłuszczowej",
      "Wygładzenie cellulitu",
      "Ujędrnienie i napięcie skóry",
      "Zabiegi bez rekonwalescencji",
    ],
    treatments: [
      { name: "Kriolipoliza — 1 aplikator", duration: "60 min", price: "900 zł" },
      { name: "Fala radiowa — brzuch", duration: "45 min", price: "400 zł" },
      { name: "Endermologia", duration: "35 min", price: "200 zł" },
      { name: "Pakiet 10 zabiegów endermologii", duration: "—", price: "1800 zł" },
    ],
    faq: [
      {
        question: "Po jakim czasie widać efekty kriolipolizy?",
        answer:
          "Pierwsze zmiany są widoczne po około 4 tygodniach, a pełny efekt — po 2–3 miesiącach, gdy organizm usunie zniszczone komórki tłuszczowe.",
      },
      {
        question: "Czy zabiegi zastąpią dietę i ćwiczenia?",
        answer:
          "Nie — to wsparcie, które pomaga poradzić sobie z miejscowymi, opornymi partiami. Najtrwalsze efekty daje połączenie zabiegów ze zdrowym trybem życia.",
      },
    ],
  },
  {
    slug: "trychologia",
    name: "Trychologia",
    icon: "wind",
    popular: false,
    short:
      "Diagnostyka i terapia problemów skóry głowy oraz nadmiernego wypadania włosów.",
    intro:
      "Wypadanie włosów, łupież czy przetłuszczanie się skóry głowy to problemy, które często mają głębsze przyczyny. Trychologia pozwala je odnaleźć i skutecznie leczyć.",
    description: [
      "Terapię zaczynamy od trichoskopii — badania skóry głowy i mieszków włosowych pod powiększeniem. Na tej podstawie trycholog ocenia przyczynę problemu i, jeśli to konieczne, zleca badania laboratoryjne.",
      "W leczeniu stosujemy m.in. mezoterapię skóry głowy, osocze bogatopłytkowe i specjalistyczne peelingi. Terapia jest rozłożona w czasie, a jej postępy dokumentujemy na kolejnych wizytach.",
    ],
    benefits: [
      "Precyzyjna diagnostyka trichoskopowa",
      "Zahamowanie nadmiernego wypadania",
      "Pobudzenie wzrostu nowych włosów",
      "Dokumentowanie postępów terapii",
    ],
    treatments: [
      {
        name: "Konsultacja trychologiczna z trichoskopią",
        duration: "60 min",
        price: "300 zł",
      },
      { name: "Mezoterapia skóry głowy", duration: "45 min", price: "500 zł" },
      {
        name: "Osocze bogatopłytkowe — skóra głowy",
        duration: "60 min",
        price: "900 zł",
      },
      { name: "Peeling trychologiczny", duration: "45 min", price: "200 zł" },
    ],
    faq: [
      {
        question: "Ile trwa terapia trychologiczna?",
        answer:
          "Zwykle od 3 do 6 miesięcy. Cykl wzrostu włosa jest długi, dlatego pierwsze efekty ocenia się po około 8–12 tygodniach.",
      },
      {
        question: "Czy wypadanie włosów może mieć przyczyny wewnętrzne?",
        answer:
          "Tak, bardzo często. Niedobory, zaburzenia hormonalne czy stres mają ogromny wpływ na kondycję włosów — dlatego diagnostyka jest kluczowa.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
