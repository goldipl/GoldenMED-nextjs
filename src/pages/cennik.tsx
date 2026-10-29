import Link from "next/link";
import ContactCta from "@/components/common/ContactCta";
import Icon from "@/components/common/Icon";
import PageHero from "@/components/common/PageHero";
import PriceTable from "@/components/common/PriceTable";
import Seo from "@/components/common/Seo";
import { services } from "@/data/services";

const PricingPage = () => {
  return (
    <>
      <Seo
        title="Cennik"
        description="Cennik zabiegów GoldenMED: laseroterapia, medycyna estetyczna, kosmetologia i więcej."
      />
      <PageHero
        title="Cennik"
        subtitle="Przejrzyste ceny wszystkich zabiegów. Ostateczny koszt terapii ustalamy podczas konsultacji."
        breadcrumbs={[{ label: "Cennik" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper">
          <nav className="pricing-nav" aria-label="Kategorie cennika">
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`} className="tags-pill">
                {service.name}
              </a>
            ))}
          </nav>
          {services.map((service) => (
            <div key={service.slug} id={service.slug} className="pricing-group">
              <div className="pricing-group__header">
                <h2>
                  <Icon name={service.icon} size={28} />
                  {service.name}
                </h2>
                <Link href={`/oferta/${service.slug}`}>
                  o usłudze
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
              <PriceTable treatments={service.treatments} />
            </div>
          ))}
          <p className="pricing-note">
            Podane ceny mają charakter informacyjny i nie stanowią oferty
            handlowej. Cena zabiegu może się różnić w zależności od ilości
            użytego preparatu lub wielkości obszaru zabiegowego.
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
};

export default PricingPage;
