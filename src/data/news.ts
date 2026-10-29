export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
}

const posts: NewsPost[] = [
  {
    slug: "jesien-czas-na-laser",
    title: "Jesień — najlepszy czas na zabiegi laserowe",
    date: "2026-10-14",
    category: "Laseroterapia",
    excerpt:
      "Mniej słońca to idealne warunki do depilacji laserowej, usuwania przebarwień i zabiegów odmładzających. Podpowiadamy, jak zaplanować serię.",
    content: [
      "Zabiegi laserowe najlepiej wykonywać na skórze, która nie jest opalona. Melanina pochłania energię światła, dlatego opalenizna zwiększa ryzyko podrażnień i przebarwień pozabiegowych. Jesień i zima to okres, w którym ekspozycja na słońce jest najmniejsza, a skóra wraca do swojego naturalnego kolorytu.",
      "Jeśli myślisz o depilacji laserowej, warto zacząć serię właśnie teraz. Zabiegi wykonuje się co 4–8 tygodni, więc rozpoczynając w październiku, większość serii zakończysz przed wiosną — i lato spędzisz bez maszynki.",
      "Podobnie jest z usuwaniem przebarwień i laserowym odmładzaniem frakcyjnym. Po tych zabiegach skóra potrzebuje kilku tygodni regeneracji i bezwzględnej ochrony przed słońcem, o którą zimą jest dużo łatwiej.",
      "Pamiętaj, że nawet zimą po zabiegu należy stosować krem z filtrem SPF 50. Szczegółowe zalecenia otrzymasz od specjalisty podczas konsultacji.",
    ],
  },
  {
    slug: "otwieramy-gabinet-trychologii",
    title: "Otwieramy gabinet trychologii",
    date: "2026-09-22",
    category: "Z życia kliniki",
    excerpt:
      "Do zespołu GoldenMED dołączyła certyfikowana trycholożka. Zapraszamy na konsultacje z trichoskopią i terapie skóry głowy.",
    content: [
      "Z radością informujemy, że poszerzyliśmy ofertę o trychologię — dziedzinę zajmującą się zdrowiem włosów i skóry głowy. Konsultacje prowadzi mgr Paulina Lis, certyfikowana trycholożka i kosmetolożka.",
      "Każda terapia zaczyna się od trichoskopii, czyli badania skóry głowy i mieszków włosowych pod powiększeniem. Pozwala to ustalić przyczynę problemu i dobrać skuteczne leczenie, a w kolejnych miesiącach — dokumentować postępy.",
      "W gabinecie wykonujemy m.in. mezoterapię skóry głowy, zabiegi z osoczem bogatopłytkowym i peelingi trychologiczne. Zapraszamy do rezerwacji wizyt telefonicznie lub przez formularz kontaktowy.",
    ],
  },
  {
    slug: "spf-przez-caly-rok",
    title: "Dlaczego filtr SPF jest potrzebny przez cały rok?",
    date: "2026-08-27",
    category: "Porady",
    excerpt:
      "Promieniowanie UVA dociera do skóry niezależnie od pory roku i pogody. Wyjaśniamy, jak wybrać i stosować filtr przeciwsłoneczny.",
    content: [
      "Promieniowanie UVB odpowiada za oparzenia słoneczne i jest najsilniejsze latem. Promieniowanie UVA jest jednak obecne przez cały rok, przenika przez chmury i szyby — i to ono w największym stopniu odpowiada za fotostarzenie skóry oraz powstawanie przebarwień.",
      "Codzienna ochrona przeciwsłoneczna to najprostszy i najskuteczniejszy krok profilaktyki przeciwstarzeniowej. Szczególnie ważna jest w trakcie terapii kwasami, retinoidami oraz po zabiegach laserowych.",
      "Wybieraj kosmetyki z szerokim spektrum ochrony (UVA i UVB) i nakładaj je jako ostatni krok porannej pielęgnacji. Przy dłuższym przebywaniu na zewnątrz pamiętaj o reaplikacji co około 2 godziny.",
    ],
  },
  {
    slug: "naturalny-efekt-w-medycynie-estetycznej",
    title: "Naturalny efekt — jak pracujemy w medycynie estetycznej",
    date: "2026-07-15",
    category: "Medycyna estetyczna",
    excerpt:
      "Dobra medycyna estetyczna to taka, której nie widać. Opowiadamy, dlaczego planujemy terapie etapami i jak wygląda pierwsza konsultacja.",
    content: [
      "Najczęstsza obawa naszych pacjentów brzmi: „Nie chcę wyglądać sztucznie”. Rozumiemy ją doskonale — dlatego naturalny efekt jest dla nas punktem wyjścia, a nie dodatkiem.",
      "Pierwsza wizyta to zawsze konsultacja lekarska. Analizujemy proporcje twarzy, jakość skóry i mimikę, rozmawiamy o oczekiwaniach i proponujemy plan, który często rozkłada się na kilka etapów. Dzięki temu zmiany są subtelne, a twarz zachowuje swój charakter.",
      "Po każdym zabiegu zapraszamy na bezpłatną wizytę kontrolną. To czas, aby ocenić efekt, odpowiedzieć na pytania i — jeśli to potrzebne — wprowadzić drobne korekty.",
    ],
  },
];

export const news = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPostBySlug = (slug: string) =>
  news.find((post) => post.slug === slug);
