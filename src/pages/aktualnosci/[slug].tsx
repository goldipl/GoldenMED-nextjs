import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import ContactCta from "@/components/common/ContactCta";
import Icon from "@/components/common/Icon";
import NewsCard from "@/components/common/NewsCard";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import { NewsPost, getPostBySlug, news } from "@/data/news";
import { formatDate } from "@/utils/formatDate";

interface ArticlePageProps {
  post: NewsPost;
}

const ArticlePage = ({ post }: ArticlePageProps) => {
  const otherPosts = news.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: "Aktualności", href: "/aktualnosci" },
          { label: post.title },
        ]}
      />
      <section className="page-section">
        <div className="page-section-wrapper page-section-wrapper--aside">
          <article className="content">
            <div className="content__meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="news-card__category">{post.category}</span>
            </div>
            <p className="content__lead">{post.excerpt}</p>
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/aktualnosci" className="btn content__back">
              <Icon name="arrowLeft" size={18} />
              wróć do aktualności
            </Link>
          </article>
          <aside className="aside">
            <h3 className="aside__title">Przeczytaj również</h3>
            {otherPosts.map((item) => (
              <NewsCard key={item.slug} post={item} />
            ))}
          </aside>
        </div>
      </section>
      <ContactCta />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: news.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ArticlePageProps> = async ({
  params,
}) => {
  const post = getPostBySlug(String(params?.slug));
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
};

export default ArticlePage;
