export interface TeamMember {
  title: string;
  name: string;
  role: string;
  bio: string;
  services: string[];
}

// Przykładowy zespół — do zastąpienia prawdziwymi danymi
export const team: TeamMember[] = [
  {
    title: "dr n. med.",
    name: "Anna Złotowska",
    role: "Lekarz medycyny estetycznej, założycielka",
    bio: "Od ponad 15 lat zajmuje się medycyną estetyczną i laseroterapią. Stawia na naturalne efekty i terapie rozłożone w czasie, a każdego pacjenta prowadzi od konsultacji aż po wizytę kontrolną.",
    services: ["medycyna-estetyczna", "laseroterapia"],
  },
  {
    title: "lek.",
    name: "Michał Wierzbicki",
    role: "Lekarz dermatolog",
    bio: "Specjalista dermatologii i wenerologii. Zajmuje się diagnostyką znamion, leczeniem trądziku i rozacei oraz laserowym leczeniem zmian naczyniowych.",
    services: ["dermatologia-estetyczna", "laseroterapia"],
  },
  {
    title: "lek.",
    name: "Katarzyna Nowicka",
    role: "Lekarz medycyny estetycznej",
    bio: "Specjalizuje się w wolumetrii i modelowaniu ust. Regularnie doskonali swoje umiejętności na szkoleniach z anatomii twarzy i technik iniekcyjnych.",
    services: ["medycyna-estetyczna"],
  },
  {
    title: "mgr",
    name: "Julia Kamińska",
    role: "Kosmetolog",
    bio: "Pasjonatka zdrowej skóry. Specjalizuje się w terapii skóry trądzikowej, peelingach chemicznych i zabiegach modelujących sylwetkę.",
    services: ["kosmetologia", "modelowanie-sylwetki"],
  },
  {
    title: "mgr",
    name: "Paulina Lis",
    role: "Trycholog, kosmetolog",
    bio: "Pomaga pacjentom z nadmiernym wypadaniem włosów i chorobami skóry głowy, łącząc dokładną diagnostykę z terapią gabinetową.",
    services: ["trychologia", "kosmetologia"],
  },
  {
    title: "",
    name: "Magdalena Wróbel",
    role: "Koordynatorka pacjentów",
    bio: "Pierwsza osoba, z którą rozmawiasz w GoldenMED. Pomaga dobrać termin i specjalistę, odpowiada na pytania i dba o to, by każda wizyta przebiegała bez stresu.",
    services: [],
  },
];

export const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");
