import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import ContactCta from "@/components/common/ContactCta";
import FaqList from "@/components/common/FaqList";
import Icon from "@/components/common/Icon";
import PageHero from "@/components/common/PageHero";
import PriceTable from "@/components/common/PriceTable";
import Seo from "@/components/common/Seo";
import TeamCard from "@/components/common/TeamCard";
import { Service, getServiceBySlug, services } from "@/data/services";
import { siteInfo } from "@/data/site";
import { team } from "@/data/team";

interface ServicePageProps {
  service: Service;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const specialists = team.filter((member) =>
    member.services.includes(service.slug)
  );
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Seo title={service.name} description={service.short} />
      <PageHero
        title={service.name}
        subtitle={service.short}
        breadcrumbs={[{ label: "Oferta", href: "/oferta" }, { label: service.name }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper page-section-wrapper--aside">
          <article className="content">
            <p className="content__lead">{service.intro}</p>
            {service.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>Korzyści</h2>
            <ul className="check-list">
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <Icon name="check" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>

            <h2>Zabiegi i ceny</h2>
            <PriceTable treatments={service.treatments} />

            <h2>Najczęstsze pytania</h2>
            <FaqList items={service.faq} />

            {specialists.length > 0 && (
              <>
                <h2>Specjaliści</h2>
                <div className="cards-grid cards-grid--two">
                  {specialists.map((member) => (
                    <TeamCard key={member.name} member={member} />
                  ))}
                </div>
              </>
            )}
          </article>
          <aside className="aside">
            <div className="aside-box aside-box--gold">
              <h3>Umów wizytę</h3>
              <p>
                Zarezerwuj konsultację, a dobierzemy zabieg do potrzeb Twojej
                skóry.
              </p>
              <Link
                href={`/kontakt/?usluga=${service.slug}#formularz`}
                className="btn btn--white-full"
              >
                umów wizytę
              </Link>
              <a href={siteInfo.phoneHref} className="aside-box__phone">
                <Icon name="phone" size={18} />
                {siteInfo.phone}
              </a>
            </div>
            <div className="aside-box">
              <h3>Pozostałe usługi</h3>
              <ul className="aside-links">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/oferta/${item.slug}`}>
                      {item.name}
                      <Icon name="arrowRight" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <ContactCta />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: services.map((service) => ({ params: { slug: service.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({
  params,
}) => {
  const service = getServiceBySlug(String(params?.slug));
  if (!service) {
    return { notFound: true };
  }
  return { props: { service } };
};

export default ServicePage;
