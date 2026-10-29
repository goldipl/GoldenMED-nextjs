import React from "react";
import { Treatment } from "@/data/services";

interface PriceTableProps {
  treatments: Treatment[];
}

const PriceTable: React.FC<PriceTableProps> = ({ treatments }) => {
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th scope="col">Zabieg</th>
          <th scope="col">Czas</th>
          <th scope="col">Cena</th>
        </tr>
      </thead>
      <tbody>
        {treatments.map((treatment) => (
          <tr key={treatment.name}>
            <td>{treatment.name}</td>
            <td className="price-table__duration">{treatment.duration}</td>
            <td className="price-table__price">{treatment.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PriceTable;
