import React from "react";
import Link from "next/link";
import Icon from "./Icon";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={`/oferta/${service.slug}`} className="service-card">
      <span className="service-card__icon">
        <Icon name={service.icon} size={28} />
      </span>
      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__text">{service.short}</p>
      <span className="service-card__more">
        Dowiedz się więcej
        <Icon name="arrowRight" size={18} />
      </span>
    </Link>
  );
};

export default ServiceCard;
