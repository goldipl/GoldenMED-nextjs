import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo title="Nie znaleziono strony" />
      <PageHero
        title="Nie znaleziono strony"
        subtitle="Strona, której szukasz, nie istnieje lub została przeniesiona."
        breadcrumbs={[{ label: "404" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper not-found">
          <Link href="/" className="btn btn--full">
            strona główna
          </Link>
          <Link href="/oferta" className="btn">
            oferta
          </Link>
          <Link href="/kontakt" className="btn">
            kontakt
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
