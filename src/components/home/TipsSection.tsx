import React from "react";
import Link from "next/link";
import FaqList from "@/components/common/FaqList";

const tips = [
  {
    question: "Jak przygotować się do pierwszej wizyty?",
    answer:
      "Zabierz ze sobą listę przyjmowanych leków i suplementów oraz wyniki badań, jeśli je posiadasz. Na konsultację najlepiej przyjść bez makijażu — dzięki temu specjalista dokładnie oceni stan skóry.",
  },
  {
    question: "Czy przed zabiegiem laserowym mogę się opalać?",
    answer:
      "Nie. Na 4 tygodnie przed zabiegiem laserowym i po nim należy unikać słońca, solarium oraz samoopalaczy. Opalona skóra jest bardziej narażona na podrażnienia i przebarwienia.",
  },
  {
    question: "Jak pielęgnować skórę po zabiegu?",
    answer:
      "Najważniejsze to łagodne oczyszczanie, intensywne nawilżanie i codzienna ochrona przeciwsłoneczna SPF 50. Szczegółowe zalecenia dla konkretnego zabiegu otrzymasz od specjalisty na piśmie.",
  },
  {
    question: "Kiedy nie powinno się wykonywać zabiegów?",
    answer:
      "Przeciwwskazaniami do większości zabiegów są m.in. ciąża i karmienie piersią, aktywne stany zapalne skóry, infekcje oraz niektóre leki. Zawsze omawiamy je podczas wywiadu przed zabiegiem.",
  },
];

const TipsSection = () => {
  return (
    <div id="tips-section" className="tips-section">
      <div className="tips-section-wrapper">
        <div className="tips-section-wrapper__text">
          <h2>Porady</h2>
          <p>
            Zebraliśmy odpowiedzi na pytania, które pacjenci zadają nam
            najczęściej. Nie znalazłeś tego, czego szukasz? Zadzwoń lub napisz —
            chętnie pomożemy.
          </p>
          <Link href="/aktualnosci" className="btn">
            więcej porad
          </Link>
        </div>
        <FaqList items={tips} />
      </div>
    </div>
  );
};

export default TipsSection;
