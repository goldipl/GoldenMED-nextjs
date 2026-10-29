import NewsCard from "@/components/common/NewsCard";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import { news } from "@/data/news";

const NewsPage = () => {
  return (
    <>
      <Seo
        title="Aktualności"
        description="Nowości, porady i informacje z kliniki GoldenMED."
      />
      <PageHero
        title="Aktualności"
        subtitle="Nowości z kliniki oraz porady naszych specjalistów."
        breadcrumbs={[{ label: "Aktualności" }]}
      />
      <section className="page-section">
        <div className="page-section-wrapper">
          <div className="cards-grid">
            {news.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
