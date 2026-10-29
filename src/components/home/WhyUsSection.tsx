import React from "react";
import Icon, { IconName } from "@/components/common/Icon";
import { services } from "@/data/services";
import { team } from "@/data/team";

const treatmentsCount = services.reduce(
  (sum, service) => sum + service.treatments.length,
  0
);

const stats = [
  { value: "15+", label: "lat doświadczenia" },
  { value: `${team.length}`, label: "specjalistów w zespole" },
  { value: `${treatmentsCount}`, label: "zabiegów w ofercie" },
  { value: "6", label: "dni w tygodniu otwarci" },
];

const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "award",
    title: "Lekarze i specjaliści",
    text: "Zabiegi wykonują lekarze, dermatolodzy i dyplomowani kosmetolodzy.",
  },
  {
    icon: "shield",
    title: "Bezpieczeństwo",
    text: "Pracujemy na certyfikowanych urządzeniach i preparatach.",
  },
  {
    icon: "users",
    title: "Indywidualny plan",
    text: "Terapię dobieramy po konsultacji, do potrzeb Twojej skóry.",
  },
  {
    icon: "heart",
    title: "Opieka po zabiegu",
    text: "Zapraszamy na wizyty kontrolne i jesteśmy w stałym kontakcie.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us-section" className="why-us-section">
      <div className="why-us-section-wrapper">
        <div className="section-heading section-heading--light">
          <span className="section-heading__eyebrow">Dlaczego GoldenMED</span>
          <h2>
            Piękno pod <span>opieką medycyny</span>
          </h2>
        </div>
        <div className="why-us-section__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="why-us-section__features">
          {features.map((feature) => (
            <div key={feature.title} className="feature">
              <span className="feature__icon">
                <Icon name={feature.icon} size={28} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
