export interface Testimonial {
  author: string;
  service: string;
  text: string;
}

// Przykładowe opinie — do zastąpienia prawdziwymi opiniami pacjentów
export const testimonials: Testimonial[] = [
  {
    author: "Ewa",
    service: "Medycyna estetyczna",
    text: "Bałam się efektu „przerobionej” twarzy, a wyszłam wyglądając po prostu na wypoczętą. Pani doktor wszystko dokładnie wyjaśniła i niczego nie narzucała.",
  },
  {
    author: "Tomasz",
    service: "Trychologia",
    text: "Po trzech miesiącach terapii włosy przestały wypadać, a na kontrolnej trichoskopii widać nowe. Profesjonalne podejście od pierwszej wizyty.",
  },
  {
    author: "Karolina",
    service: "Laseroterapia",
    text: "Seria depilacji laserowej przebiegła bez niespodzianek — za każdym razem sprawdzano skórę i dopasowywano parametry. Polecam!",
  },
];
