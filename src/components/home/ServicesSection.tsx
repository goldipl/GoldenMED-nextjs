import React from "react";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services-section" className="services-section">
      <div className="services-section-wrapper">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Oferta</span>
          <h2>
            W czym możemy <span>Ci pomóc</span>
          </h2>
          <p>
            Od profesjonalnej pielęgnacji, przez zabiegi laserowe, aż po
            medycynę estetyczną prowadzoną przez lekarzy.
          </p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="section-more">
          <Link href="/cennik" className="btn">
            zobacz cennik
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
