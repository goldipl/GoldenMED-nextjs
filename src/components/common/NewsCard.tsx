import React from "react";
import Link from "next/link";
import Icon from "./Icon";
import { NewsPost } from "@/data/news";
import { formatDate } from "@/utils/formatDate";

interface NewsCardProps {
  post: NewsPost;
}

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <Link href={`/aktualnosci/${post.slug}`} className="news-card">
      <div className="news-card__meta">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="news-card__category">{post.category}</span>
      </div>
      <h3 className="news-card__title">{post.title}</h3>
      <p className="news-card__excerpt">{post.excerpt}</p>
      <span className="news-card__more">
        Czytaj więcej
        <Icon name="arrowRight" size={18} />
      </span>
    </Link>
  );
};

export default NewsCard;
