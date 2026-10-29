import React from "react";
import { Faq } from "@/data/services";

interface FaqListProps {
  items: Faq[];
}

const FaqList: React.FC<FaqListProps> = ({ items }) => {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-list__item">
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FaqList;
