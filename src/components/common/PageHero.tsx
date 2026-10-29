import React from "react";
import Link from "next/link";
import heroImg from "./../../../public/img/home/sample-hero.jpg";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="page-hero-wrapper">
        <ol className="breadcrumbs" aria-label="Okruszki">
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          {breadcrumbs.map((crumb) => (
            <li key={crumb.label}>
              {crumb.href ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span aria-current="page">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
        <h1>{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
