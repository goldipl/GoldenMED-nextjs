import React, { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "@/components/common/Icon";
import PageHero from "@/components/common/PageHero";
import Seo from "@/components/common/Seo";
import { news } from "@/data/news";
import { services } from "@/data/services";
import { team } from "@/data/team";

interface SearchResult {
  href: string;
  title: string;
  type: string;
  text: string;
}

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

const searchIndex: (SearchResult & { haystack: string })[] = [
  ...services.map((service) => ({
    href: `/oferta/${service.slug}`,
    title: service.name,
    type: "Oferta",
    text: service.short,
    haystack: [
      service.name,
      service.short,
      service.intro,
      ...service.description,
      ...service.treatments.map((treatment) => treatment.name),
    ].join(" "),
  })),
  ...news.map((post) => ({
    href: `/aktualnosci/${post.slug}`,
    title: post.title,
    type: "Aktualności",
    text: post.excerpt,
    haystack: [post.title, post.category, post.excerpt, ...post.content].join(" "),
  })),
  ...team.map((member) => ({
    href: "/nasza-kadra",
    title: `${member.title} ${member.name}`.trim(),
    type: "Nasza kadra",
    text: member.role,
    haystack: [member.name, member.role, member.bio].join(" "),
  })),
].map((item) => ({ ...item, haystack: normalize(item.haystack) }));

const search = (query: string): SearchResult[] => {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return [];
  }
  return searchIndex.filter((item) =>
    words.every((word) => item.haystack.includes(word))
  );
};

const SearchPage = () => {
  const router = useRouter();
  const query = typeof router.query.q === "string" ? router.query.q : "";
  const [input, setInput] = useState(query);
  const results = search(query);

  useEffect(() => {
    setInput(query);
  }, [query]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const q = input.trim();
    router.push({ pathname: "/szukaj", query: q ? { q } : {} });
  };

  return (
    <>
      <Seo title="Wyszukiwarka" />
      <PageHero title="Wyszukiwarka" breadcrumbs={[{ label: "Wyszukiwarka" }]} />
      <section className="page-section">
        <div className="page-section-wrapper search-page">
          <form className="search-page__form" role="search" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="np. depilacja, toksyna, trychologia"
              aria-label="Wyszukaj w serwisie"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit" className="btn btn--full">
              szukaj
            </button>
          </form>

          {query && (
            <p className="search-page__summary">
              {results.length > 0
                ? `Wyniki wyszukiwania dla „${query}”: ${results.length}`
                : `Brak wyników dla „${query}”. Spróbuj innej frazy lub przejrzyj naszą ofertę.`}
            </p>
          )}

          <ul className="search-results">
            {results.map((result) => (
              <li key={result.href + result.title}>
                <Link href={result.href} className="search-result">
                  <span className="search-result__type">{result.type}</span>
                  <h3>{result.title}</h3>
                  <p>{result.text}</p>
                  <Icon name="arrowRight" size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
