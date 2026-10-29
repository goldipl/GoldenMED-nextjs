import ContactCta from "@/components/common/ContactCta";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/services";

const OfferPage = () => {
  return (
    <>
      <Seo
        title="Oferta"
        description="Laseroterapia, medycyna estetyczna, kosmetologia, dermatologia estetyczna, modelowanie sylwetki i trychologia w GoldenMED."
      />
      <PageHero
        title="Oferta"
        subtitle="Zabiegi dobrane do potrzeb Twojej skóry — od pielęgnacji po medycynę estetyczną."
        breadcrumbs={[{ label: "Oferta" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper">
          <div className="cards-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
};

export default OfferPage;
