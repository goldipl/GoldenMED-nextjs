import React from "react";
import Link from "next/link";
import NewsCard from "@/components/common/NewsCard";
import { news } from "@/data/news";

const NewsSection = () => {
  return (
    <section id="news-section" className="news-section">
      <div className="news-section-wrapper">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Aktualności</span>
          <h2>
            Co nowego <span>w GoldenMED</span>
          </h2>
        </div>
        <div className="cards-grid">
          {news.slice(0, 3).map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="section-more">
          <Link href="/aktualnosci" className="btn">
            wszystkie aktualności
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
